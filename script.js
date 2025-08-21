// --- GLOBAL STATE ---

document.getElementById("vs-ai-test-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  isTestMode = true;
  audioManager.fadeOut("main-menu");
  audioManager.play("character-select");
  startCharacterSelection("AI");
});
let bgmVolume = 0.4; // 배경음악 기본 볼륨 40%
let sfxVolume = 0.6; // 효과음 기본 볼륨 100%
let currentLang;
let currentPuzzleLevel = null;
let isPlayerAI = { A: false, B: false };
let fullDeck, cardTypeOrder;
let playerA_Hand = [],
  playerB_Hand = [];
let truePropositions = [];
let parsedAxioms = [];
let currentProposition = [];
let currentPlayer = "A";
let propositionStarter = "A";
let gameIsOver = false;
let currentRound = 1;
let isThinkingTime = false;
let lastPropositionMaker = null;
let internalTruthSet = [];
let derivedPropositionsInModal = [];
let currentAssumption = null;
let lastCardPlayer = null;
let cardsPlayedThisTurn = { A: 0, B: 0 };
let eurekaUsedInRound = { A: false, B: false };
let thinkingTimeTurn = null;
let abilityUsedState = {};
let socratesDisabledProps = [];
let kantProposition = [];

let currentAxioms = []; // 현재 게임의 공리를 저장할 배열

// Proof recording system
let proofSteps = []; // 논증 과정을 기록하는 배열
let isRecordingProof = false; // 논증 기록 중인지 여부
let stepCounter = 0; // 논증 단계 카운터
let victoryProposition = null; // 승리 명제 저장

let aiTimeoutId = null;

// --- PROOF RECORDING FUNCTIONS ---

function startProofRecording() {
  isRecordingProof = true;
  proofSteps = [];
  stepCounter = 0;
  victoryProposition = null;
}

function stopProofRecording() {
  isRecordingProof = false;
}

function recordProofStep(stepType, premises, conclusion, rule, assumption = null) {
  if (!isRecordingProof) return;
  
  stepCounter++;
  
  const step = {
    id: stepCounter,
    type: stepType, // 'premise', 'assumption', 'inference', 'victory'
    premises: premises ? [...premises] : [], // 사용된 전제들의 ID 배열
    conclusion: conclusion ? {...conclusion} : null, // 결론 명제
    rule: rule || null, // 사용된 추론 규칙
    assumption: assumption ? {...assumption} : null, // 가정 명제 (있을 경우)
    timestamp: Date.now()
  };
  
  // 각 명제에 고유 ID 부여
  if (step.conclusion && !step.conclusion.proofStepId) {
    step.conclusion.proofStepId = stepCounter;
  }
  
  proofSteps.push(step);
  
  // 승리 명제인지 확인
  if (conclusion && isVictoryProposition(conclusion)) {
    victoryProposition = {...conclusion};
    step.type = 'victory';
  }
  
  return stepCounter;
}

function isVictoryProposition(proposition) {
  if (!proposition) return false;
  
  // "X는 승리한다" 또는 "X wins" 패턴 확인
  const winTexts = currentLang.keywords.wins ? [currentLang.keywords.wins] : ["승리한다", "wins"];
  
  if (proposition.type === "atomic") {
    return winTexts.some(winText => proposition.predicate.includes(winText));
  }
  
  // "X는 승리한다는 거짓이다" 형태도 승리 조건
  if (proposition.type === "negation" && proposition.proposition.type === "atomic") {
    return winTexts.some(winText => proposition.proposition.predicate.includes(winText));
  }
  
  return false;
}

function addPropositionId(proposition, stepId) {
  if (proposition && typeof proposition === 'object') {
    proposition.proofStepId = stepId;
  }
  return proposition;
}

function traceVictoryProof() {
  if (!victoryProposition || proofSteps.length === 0) {
    return [];
  }
  
  const relevantSteps = new Set();
  
  function traceStep(stepId) {
    if (!stepId) return;
    
    const step = proofSteps.find(s => s.id === stepId);
    if (!step || relevantSteps.has(step)) return;
    
    // 전제들을 먼저 추적 (깊이 우선 탐색)
    if (step.premises && step.premises.length > 0) {
      step.premises.forEach(premiseId => traceStep(premiseId));
    }
    
    // 조건문 도입이나 귀류법에서 사용된 가정도 추적
    if (step.assumption && (step.rule === 'conditionalIntroduction' || step.rule === 'reductioAdAbsurdum')) {
      const assumptionStep = proofSteps.find(s => 
        s.type === 'assumption' && 
        s.conclusion && 
        arePropositionsEqual(s.conclusion, step.assumption)
      );
      if (assumptionStep) {
        traceStep(assumptionStep.id);
      }
    }
    
    relevantSteps.add(step);
  }
  
  // 승리 명제부터 역추적 시작
  const victoryStep = proofSteps.find(step => 
    step.type === 'victory' || 
    (step.conclusion && isVictoryProposition(step.conclusion))
  );
  
  if (victoryStep) {
    traceStep(victoryStep.id);
  } else {
    // 승리 단계가 없으면 마지막 추론 단계부터 시작
    const lastInferenceStep = proofSteps
      .filter(s => s.type === 'inference')
      .sort((a, b) => b.timestamp - a.timestamp)[0];
    
    if (lastInferenceStep) {
      traceStep(lastInferenceStep.id);
    }
  }
  
  // 추적이 제대로 안됐다면 디버깅용 로그 출력
  console.log('Traced steps:', Array.from(relevantSteps).map(s => ({ id: s.id, type: s.type, premises: s.premises })));
  console.log('All proof steps:', proofSteps.map(s => ({ id: s.id, type: s.type, premises: s.premises, rule: s.rule, assumption: s.assumption })));
  
  // 가정 단계들 확인
  const assumptionSteps = proofSteps.filter(s => s.type === 'assumption');
  console.log('Assumption steps:', assumptionSteps.map(s => ({ 
    id: s.id, 
    type: s.type,
    conclusion: s.conclusion ? propositionToPlainText(s.conclusion) : 'no conclusion'
  })));
  
  // 중요한 추론 단계들의 premise 내용 확인
  const inferenceSteps = proofSteps.filter(s => s.type === 'inference');
  console.log('Inference steps details:', inferenceSteps.map(s => ({ 
    id: s.id, 
    premises: s.premises, 
    rule: s.rule,
    assumption: s.assumption ? propositionToPlainText(s.assumption) : 'no assumption',
    conclusion: s.conclusion ? propositionToPlainText(s.conclusion) : 'no conclusion'
  })));
  
  // Set을 배열로 변환하고 시간순으로 정렬하여 반환
  return Array.from(relevantSteps).sort((a, b) => a.timestamp - b.timestamp);
}

function getRuleNameInLanguage(ruleKey) {
  if (!currentLang || !currentLang.inferenceRules) return ruleKey;
  
  const ruleNames = {
    modusPonens: currentLang.inferenceRules.modusPonens || "전건 긍정",
    modusTollens: currentLang.inferenceRules.modusTollens || "후건 부정",
    hypotheticalSyllogism: currentLang.inferenceRules.hypotheticalSyllogism || "가언 삼단논법",
    disjunctiveSyllogism: currentLang.inferenceRules.disjunctiveSyllogism || "선언 삼단논법",
    conjunctionElimination: currentLang.inferenceRules.conjunctionElimination || "연언 소거",
    conjunctionIntroduction: currentLang.inferenceRules.conjunctionIntroduction || "연언 도입",
    doubleNegationElimination: currentLang.inferenceRules.doubleNegationElimination || "이중 부정 소거",
    universalApplication: currentLang.inferenceRules.universalApplication || "보편 적용",
    existentialInstantiation: currentLang.inferenceRules.existentialInstantiation || "존재 예화",
    conditionalIntroduction: currentLang.inferenceRules.conditionalIntroduction || "조건부 도입",
    reductioAdAbsurdum: currentLang.inferenceRules.reductioAdAbsurdum || "귀류법"
  };
  
  return ruleNames[ruleKey] || ruleKey;
}

function convertProofStepsToNaturalLanguage(steps) {
  if (!steps || steps.length === 0) return [];
  
  const convertedSteps = [];
  
  steps.forEach(step => {
    let stepText = '';
    let stepType = '';
    let isAssumptionDependent = false;
    
    switch (step.type) {
      case 'premise':
        stepType = currentLang.labels?.axiom || '[명제]';
        stepText = propositionToPlainText(step.conclusion);
        break;
        
      case 'assumption':
        stepType = currentLang.labels?.assumption || '[가정]';
        stepText = propositionToPlainText(step.conclusion);
        isAssumptionDependent = true;
        break;
        
      case 'inference':
        stepType = currentLang.labels?.theorem || '[정리]';
        stepText = propositionToPlainText(step.conclusion);
        isAssumptionDependent = step.assumption !== null;
        break;
        
      case 'victory':
        stepType = currentLang.labels?.victory || '[승리]';
        stepText = propositionToPlainText(step.conclusion);
        break;
        
      default:
        stepType = '[단계]';
        stepText = step.conclusion ? propositionToPlainText(step.conclusion) : '';
    }
    
    const convertedStep = {
      id: step.id,
      type: step.type,
      typeLabel: stepType,
      content: stepText,
      rule: step.rule ? getRuleNameInLanguage(step.rule) : null,
      isAssumptionDependent: isAssumptionDependent,
      originalStep: step
    };
    
    convertedSteps.push(convertedStep);
  });
  
  return convertedSteps;
}

// 가정 의존성을 판단하는 함수
function isStepAssumptionDependent(step, allSteps) {
  // 가정 자체는 가정 의존
  if (step.type === 'assumption') return true;
  
  // 추론의 경우
  if (step.type === 'inference') {
    // 귀류법과 조건문 도입의 최종 결론은 가정을 소거하므로 가정 의존이 아님
    if (step.rule === 'reductioAdAbsurdum' || step.rule === 'conditionalIntroduction') {
      return false;
    }
    
    // step.assumption이 있으면 가정 의존
    if (step.assumption) {
      return true;
    }
    
    // 전제 중 하나라도 가정 의존이면 가정 의존
    if (step.premises && step.premises.length > 0) {
      return step.premises.some(premiseId => {
        const premise = allSteps.find(s => s.id === premiseId);
        return premise && isStepAssumptionDependent(premise, allSteps);
      });
    }
  }
  
  return false;
}

function showProofReviewModal() {
  if (!proofSteps || proofSteps.length === 0) {
    showAlert("논증 과정이 기록되지 않았습니다.");
    return;
  }

  const relevantSteps = traceVictoryProof();
  const stepsToShow = relevantSteps;

  const modal = document.getElementById("proof-review-modal");
  const title = document.getElementById("proof-review-title");
  const content = document.getElementById("proof-review-content");

  title.textContent = currentLang.modals.proofReviewTitle;

  content.innerHTML = "";

  if (stepsToShow.length === 0) {
    content.innerHTML = "<p>표시할 논증 과정이 없습니다.</p>";
  } else {
    // 먼저 가정 단계들을 독립적으로 표시
    const assumptionSteps = stepsToShow.filter((s) => s.type === "assumption");
    assumptionSteps.forEach((assumptionStep) => {
      const assumptionGroupDiv = document.createElement("div");
      assumptionGroupDiv.className = "proof-group";
      assumptionGroupDiv.style.marginBottom = "25px";

      const assumptionDiv = document.createElement("div");
      assumptionDiv.className = `proof-step assumption`;
      assumptionDiv.classList.add("assumption-dependent");

      const assumptionTypeLabel = currentLang.labels?.assumption || "[가정]";
      assumptionDiv.innerHTML = `<span class="proof-step-type">${assumptionTypeLabel}</span> ${propositionToNaturalText(
        assumptionStep.conclusion
      )}`;
      assumptionGroupDiv.appendChild(assumptionDiv);

      content.appendChild(assumptionGroupDiv);
    });

    // 기획서 형식으로 논증 단계 표시
    const inferenceSteps = stepsToShow.filter((s) => s.type === "inference");
    const processedRules = new Set();

    inferenceSteps.forEach((step, index) => {
      // 같은 규칙과 같은 전제를 가진 단계들을 그룹화
      const ruleKey = `${step.rule}_${step.premises?.join(",") || ""}`;
      if (processedRules.has(ruleKey)) return;
      processedRules.add(ruleKey);

      // 같은 규칙과 전제를 가진 모든 단계들 찾기
      let relatedSteps = inferenceSteps.filter(
        (s) =>
          s.rule === step.rule &&
          JSON.stringify(s.premises) === JSON.stringify(step.premises)
      );

      // 단순화 규칙의 경우, 전체 proofSteps에서 같은 전제를 가진 모든 단순화 결론을 찾아 추가
      if (step.rule === "conjunctionElimination") {
        const allSimplificationSteps = proofSteps.filter(
          (s) =>
            s.rule === "conjunctionElimination" &&
            JSON.stringify(s.premises) === JSON.stringify(step.premises)
        );
        // 기존 relatedSteps에 없는 단계들을 추가
        allSimplificationSteps.forEach((simStep) => {
          if (!relatedSteps.find((existing) => existing.id === simStep.id)) {
            relatedSteps.push(simStep);
          }
        });
      }

      // 추론 그룹 생성
      const groupDiv = document.createElement("div");
      groupDiv.className = "proof-group";
      groupDiv.style.marginBottom = "25px";

      // 이 추론에 사용된 전제들 찾기
      const usedPremises = step.premises
        ? step.premises
            .map((premiseId) => proofSteps.find((s) => s.id === premiseId))
            .filter(Boolean)
        : [];

      // 전제들 표시
      usedPremises.forEach((premise) => {
        const premiseDiv = document.createElement("div");
        premiseDiv.className = `proof-step ${premise.type}`;

        // 가정 의존성 확인 및 스타일 적용
        const isAssumptionDep = isStepAssumptionDependent(premise, proofSteps);
        if (isAssumptionDep) {
          premiseDiv.classList.add("assumption-dependent");
        }

        if (premise.type === "assumption") {
          const assumptionTypeLabel =
            currentLang.labels?.assumption || "[가정]";
          premiseDiv.innerHTML = `<span class="proof-step-type">${assumptionTypeLabel}</span> ${propositionToNaturalText(
            premise.conclusion
          )}`;
        } else {
          premiseDiv.innerHTML = propositionToNaturalText(premise.conclusion);
        }
        groupDiv.appendChild(premiseDiv);
      });

      // 추론 규칙 표시
      if (step.rule) {
        const ruleDiv = document.createElement("div");
        ruleDiv.className = "proof-step-rule";
        ruleDiv.style.textAlign = "center";
        ruleDiv.style.margin = "10px 0";
        ruleDiv.style.fontStyle = "normal";
        ruleDiv.style.color = "black";
        ruleDiv.textContent = getRuleNameInLanguage(step.rule).replace(
          /\s*\([^)]*\)/,
          ""
        ); // 괄호 안 설명 제거
        groupDiv.appendChild(ruleDiv);
      }

      // 모든 관련 결론들 표시
      relatedSteps.forEach((relatedStep) => {
        const conclusionDiv = document.createElement("div");
        conclusionDiv.className = `proof-step conclusion`;

        // 가정 의존성 확인 및 스타일 적용
        if (isStepAssumptionDependent(relatedStep, proofSteps)) {
          conclusionDiv.classList.add("assumption-dependent");
        }

        conclusionDiv.innerHTML = propositionToNaturalText(
          relatedStep.conclusion
        );
        groupDiv.appendChild(conclusionDiv);
      });

      content.appendChild(groupDiv);
    });

    // 승리 단계 표시
    const victorySteps = stepsToShow.filter((s) => s.type === "victory");
    victorySteps.forEach((step) => {
      // 승리 추론 그룹 생성 (다른 추론과 동일한 형식)
      const groupDiv = document.createElement("div");
      groupDiv.className = "proof-group";
      groupDiv.style.marginBottom = "25px";

      // 승리로 이어진 전제들 찾기
      const usedPremises = step.premises
        ? step.premises
            .map((premiseId) => proofSteps.find((s) => s.id === premiseId))
            .filter(Boolean)
        : [];

      // 전제들 표시
      usedPremises.forEach((premise) => {
        const premiseDiv = document.createElement("div");
        premiseDiv.className = `proof-step ${premise.type}`;

        // 가정 의존성 확인 및 스타일 적용
        const isAssumptionDep = isStepAssumptionDependent(premise, proofSteps);
        console.log(
          "Premise dependency check:",
          premise.type,
          premise.id,
          isAssumptionDep
        );
        if (isAssumptionDep) {
          premiseDiv.classList.add("assumption-dependent");
        }

        if (premise.type === "assumption") {
          const assumptionTypeLabel =
            currentLang.labels?.assumption || "[가정]";
          premiseDiv.innerHTML = `<span class="proof-step-type">${assumptionTypeLabel}</span> ${propositionToNaturalText(
            premise.conclusion
          )}`;
        } else {
          premiseDiv.innerHTML = propositionToNaturalText(premise.conclusion);
        }
        groupDiv.appendChild(premiseDiv);
      });

      // 승리 추론에 사용된 규칙 표시 (있다면)
      if (usedPremises.length > 0) {
        const ruleDiv = document.createElement("div");
        ruleDiv.className = "proof-step-rule";
        ruleDiv.style.textAlign = "center";
        ruleDiv.style.margin = "10px 0";
        ruleDiv.style.fontStyle = "normal";
        ruleDiv.style.color = "black";

        // 승리 단계에서 사용된 추론 규칙이 있다면 표시, 없으면 기본 텍스트
        const ruleText = step.rule
          ? getRuleNameInLanguage(step.rule).replace(/\s*\([^)]*\)/, "")
          : "추론";
        ruleDiv.textContent = ruleText;
        groupDiv.appendChild(ruleDiv);
      }

      // 승리 결론 표시
      const conclusionDiv = document.createElement("div");
      conclusionDiv.className = `proof-step conclusion`;

      const conclusionTypeLabel = "[승리]";
      conclusionDiv.innerHTML = `<span class="proof-step-type">${conclusionTypeLabel}</span> ${propositionToNaturalText(
        step.conclusion
      )}`;
      groupDiv.appendChild(conclusionDiv);

      content.appendChild(groupDiv);
    });
  }

  modal.classList.add("visible");
}

function hideProofReviewModal() {
  document.getElementById("proof-review-modal").classList.remove("visible");
}

function showProofReviewButton() {
  const button = document.getElementById("proof-review-btn");
  if (button) {
    button.classList.remove("hidden");
    button.textContent = currentLang.ui.proofReviewButton;
  }
}

function hideProofReviewButton() {
  const button = document.getElementById("proof-review-btn");
  if (button) {
    button.classList.add("hidden");
  }
}

function parseTokensToProposition(tokens) {
  if (!tokens || tokens.length === 0) return null;
  if (tokens[0] === "(" && tokens[tokens.length - 1] === ")") {
    let balance = 0;
    let isOuterParens = true;
    for (let i = 0; i < tokens.length - 1; i++) {
      if (tokens[i] === "(") balance++;
      else if (tokens[i] === ")") balance--;
      if (balance === 0) {
        isOuterParens = false;
        break;
      }
    }
    if (isOuterParens) {
      return parseTokensToProposition(tokens.slice(1, -1));
    }
  }
  let balance = 0;
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (tokens[i] === ")") balance++;
    else if (tokens[i] === "(") balance--;
    if (balance === 0 && tokens[i] === currentLang.keywords.if) {
      const left = parseTokensToProposition(tokens.slice(0, i));
      const right = parseTokensToProposition(tokens.slice(i + 1));
      if (!left || !right) return null;
      return { type: "conditional", left: left, right: right };
    }
  }
  balance = 0;
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (tokens[i] === ")") balance++;
    else if (tokens[i] === "(") balance--;
    if (balance === 0 && tokens[i] === currentLang.keywords.or) {
      const left = parseTokensToProposition(tokens.slice(0, i));
      const right = parseTokensToProposition(tokens.slice(i + 1));
      if (!left || !right) return null;
      return { type: "disjunction", left: left, right: right };
    }
  }
  balance = 0;
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (tokens[i] === ")") balance++;
    else if (tokens[i] === "(") balance--;
    if (balance === 0 && tokens[i] === currentLang.keywords.and) {
      const left = parseTokensToProposition(tokens.slice(0, i));
      const right = parseTokensToProposition(tokens.slice(i + 1));
      if (!left || !right) return null;
      return { type: "conjunction", left: left, right: right };
    }
  }
  if (
    tokens.length > 1 &&
    tokens[tokens.length - 1] === currentLang.keywords.not
  ) {
    const prop = parseTokensToProposition(tokens.slice(0, -1));
    if (!prop) return null;
    return { type: "negation", proposition: prop };
  }
  const cardInfo = tokens.map((t) => fullDeck.find((c) => c.text === t));
  if (cardInfo.some((c) => !c)) {
    const [properNoun, quantifier, entity, predicate] = currentLang.cardTypes;
    const types = tokens.map((t) => {
      const card = fullDeck.find((c) => c.text === t);
      return card ? card.type : null;
    });
    if (types.length === 2 && types[0] === properNoun) {
      return { type: "atomic", subject: tokens[0], predicate: tokens[1] };
    }
    if (types.length === 3 && types[0] === quantifier) {
      return {
        type:
          tokens[0] === currentLang.keywords.universal_q
            ? "universal"
            : "existential",
        entity: tokens[1],
        predicate: tokens[2],
      };
    }
    return null;
  }
  const types = cardInfo.map((c) => c.type);
  const [properNoun, quantifier, entity, predicate] = currentLang.cardTypes;
  if (types.length === 2 && types[0] === properNoun) {
    return { type: "atomic", subject: tokens[0], predicate: tokens[1] };
  }
  if (types.length === 3 && types[0] === quantifier) {
    return {
      type:
        tokens[0] === currentLang.keywords.universal_q
          ? "universal"
          : "existential",
      entity: tokens[1],
      predicate: tokens[2],
    };
  }
  return null;
}

function parsePropositionFromString(str) {
  const allKeywords = [...fullDeck.map((c) => c.text), "(", ")"].sort(
    (a, b) => b.length - a.length
  );
  let tempStr = str.trim();
  const tokens = [];
  while (tempStr.length > 0) {
    const foundToken = allKeywords.find((k) => tempStr.startsWith(k));
    if (foundToken) {
      tokens.push(foundToken);
      tempStr = tempStr.substring(foundToken.length).trim();
    } else {
      console.error(
        "Tokenizer failed for string:",
        str,
        "at substring:",
        tempStr
      );
      return null;
    }
  }
  return parseTokensToProposition(tokens);
}

function parsePropositionFromCards(propInfoArray) {
  if (!propInfoArray || propInfoArray.length === 0) return null;
  const tokens = propInfoArray.map((info) => info.card.text);
  return parseTokensToProposition(tokens);
}

function arePropositionsEqual(prop1, prop2) {
  if (!prop1 || !prop2 || prop1.type !== prop2.type) return false;
  switch (prop1.type) {
    case "atomic":
      return (
        prop1.subject === prop2.subject && prop1.predicate === prop2.predicate
      );
    case "universal":
    case "existential":
      return (
        prop1.entity === prop2.entity && prop1.predicate === prop2.predicate
      );
    case "negation":
      return arePropositionsEqual(prop1.proposition, prop2.proposition);
    case "conjunction":
    case "disjunction":
    case "conditional":
      return (
        arePropositionsEqual(prop1.left, prop2.left) &&
        arePropositionsEqual(prop1.right, prop2.right)
      );
    default:
      return false;
  }
}

function propositionToText(prop) {
  if (!prop) return "";
  switch (prop.type) {
    case "atomic":
      return `${prop.subject} ${prop.predicate}`;
    case "universal":
      return `${currentLang.keywords.universal_q} ${prop.entity} ${prop.predicate}`;
    case "existential":
      return `${currentLang.keywords.existential_q} ${prop.entity} ${prop.predicate}`;
    case "negation":
      return `~(${propositionToText(prop.proposition)})`;
    case "conjunction":
      return `(${propositionToText(prop.left)}) ∧ (${propositionToText(
        prop.right
      )})`;
    case "disjunction":
      return `(${propositionToText(prop.left)}) ∨ (${propositionToText(
        prop.right
      )})`;
    case "conditional":
      return `(${propositionToText(prop.left)}) → (${propositionToText(
        prop.right
      )})`;
    default:
      return "Unknown Proposition";
  }
}

function propositionToNaturalText(prop) {
  if (!prop) return "";
  switch (prop.type) {
    case "atomic":
      return `${prop.subject} ${prop.predicate}`;
    case "universal":
      return `${currentLang.keywords.universal_q} ${prop.entity} ${prop.predicate}`;
    case "existential":
      return `${currentLang.keywords.existential_q} ${prop.entity} ${prop.predicate}`;
    case "negation": {
      const innerProp = prop.proposition;
      const innerText = propositionToNaturalText(innerProp);
      const notKeyword = `<span class="op-not">${currentLang.keywords.not}</span>`;

      // 핵심 수정 1: 부정 대상이 단일 명제(atomic, universal, existential)일 때만 괄호로 감쌉니다.
      if (
        innerProp.type === "atomic" ||
        innerProp.type === "universal" ||
        innerProp.type === "existential"
      ) {
        return `(${innerText}) ${notKeyword}`;
      }

      // 그 외 (이미 괄호가 있는 복합 명제나 또 다른 부정문)는 그대로 텍스트를 이어붙입니다.
      return `${innerText} ${notKeyword}`;
    }
    case "conjunction": {
      const leftProp = prop.left;
      const rightProp = prop.right;
      let leftText = propositionToNaturalText(leftProp);
      let rightText = propositionToNaturalText(rightProp);

      // 핵심 수정 2: 자식 노드가 부정문이 아닐 경우에만 괄호로 감쌉니다.
      if (leftProp.type !== "negation") {
        leftText = `(${leftText})`;
      }
      if (rightProp.type !== "negation") {
        rightText = `(${rightText})`;
      }

      const andKeyword = `<span class="op-and">${currentLang.keywords.and}</span>`;
      return `${leftText} ${andKeyword} ${rightText}`;
    }
    case "disjunction": {
      const leftProp = prop.left;
      const rightProp = prop.right;
      let leftText = propositionToNaturalText(leftProp);
      let rightText = propositionToNaturalText(rightProp);

      // 핵심 수정 2: 자식 노드가 부정문이 아닐 경우에만 괄호로 감쌉니다.
      if (leftProp.type !== "negation") {
        leftText = `(${leftText})`;
      }
      if (rightProp.type !== "negation") {
        rightText = `(${rightText})`;
      }

      const orKeyword = `<span class="op-or">${currentLang.keywords.or}</span>`;
      return `${leftText} ${orKeyword} ${rightText}`;
    }
    case "conditional": {
      const leftProp = prop.left;
      const rightProp = prop.right;
      let leftText = propositionToNaturalText(leftProp);
      let rightText = propositionToNaturalText(rightProp);

      // 핵심 수정 2: 자식 노드가 부정문이 아닐 경우에만 괄호로 감쌉니다.
      if (leftProp.type !== "negation") {
        leftText = `(${leftText})`;
      }
      if (rightProp.type !== "negation") {
        rightText = `(${rightText})`;
      }

      const ifKeyword = `<span class="op-if">${currentLang.keywords.if}</span>`;
      return `${leftText} ${ifKeyword} ${rightText}`;
    }
    default:
      return "Unknown Proposition";
  }
}

function propositionToPlainText(prop) {
  if (!prop) return "";
  switch (prop.type) {
    case "atomic":
      return `${prop.subject} ${prop.predicate}`;
    case "universal":
      return `${currentLang.keywords.universal_q} ${prop.entity} ${prop.predicate}`;
    case "existential":
      return `${currentLang.keywords.existential_q} ${prop.entity} ${prop.predicate}`;

    case "negation": {
      const innerProp = prop.proposition;
      const innerText = propositionToPlainText(innerProp); // 재귀 호출 시에도 새 함수 사용
      const notKeyword = currentLang.keywords.not;
      if (
        innerProp.type === "conjunction" ||
        innerProp.type === "disjunction" ||
        innerProp.type === "conditional"
      ) {
        return `(${innerText}) ${notKeyword}`;
      }
      return `${innerText} ${notKeyword}`;
    }

    case "conjunction": {
      let leftText;
      if (prop.left.type === "negation") {
        const innerText = propositionToPlainText(prop.left.proposition);
        leftText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        leftText = `(${propositionToPlainText(prop.left)})`;
      }

      let rightText;
      if (prop.right.type === "negation") {
        const innerText = propositionToPlainText(prop.right.proposition);
        rightText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        rightText = `(${propositionToPlainText(prop.right)})`;
      }

      const andKeyword = currentLang.keywords.and;
      return `${leftText} ${andKeyword} ${rightText}`;
    }

    case "disjunction": {
      let leftText;
      if (prop.left.type === "negation") {
        const innerText = propositionToPlainText(prop.left.proposition);
        leftText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        leftText = `(${propositionToPlainText(prop.left)})`;
      }

      let rightText;
      if (prop.right.type === "negation") {
        const innerText = propositionToPlainText(prop.right.proposition);
        rightText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        rightText = `(${propositionToPlainText(prop.right)})`;
      }

      const orKeyword = currentLang.keywords.or;
      return `${leftText} ${orKeyword} ${rightText}`;
    }

    case "conditional": {
      let leftText;
      if (prop.left.type === "negation") {
        const innerText = propositionToPlainText(prop.left.proposition);
        leftText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        leftText = `(${propositionToPlainText(prop.left)})`;
      }

      let rightText;
      if (prop.right.type === "negation") {
        const innerText = propositionToPlainText(prop.right.proposition);
        rightText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        rightText = `(${propositionToPlainText(prop.right)})`;
      }

      const ifKeyword = currentLang.keywords.if;
      return `${leftText} ${ifKeyword} ${rightText}`;
    }

    default:
      return "Unknown Proposition";
  }
}

function initializeGame(lang) {
  currentLang = TEXTS[lang];
  document.documentElement.lang = currentLang.langCode;
  document.title = currentLang.ui.title;

  TEXTS.ko.tutorial = TUTORIAL_TEXTS.ko;
  TEXTS.en.tutorial = TUTORIAL_TEXTS.en;

  fullDeck = currentLang.cards;
  cardTypeOrder = currentLang.cardTypes;

  document.getElementById("language-modal").classList.remove("visible");
  setupUI();
  setupModeDescriptionHovers();
  loadSettings();
  showMainMenu();
  addGlobalSoundEvents();
}

function showMainMenu() {
  // 새로운 오디오 시스템을 사용하도록 수정
  audioManager.stopAll();
  audioManager.play("main-menu"); // 볼륨 60%로 메인 메뉴 음악 재생

  // 메인 메뉴로 돌아갈 때 밤 테마 제거
  document.body.classList.remove("thinking-time-night");

  document.getElementById("thinking-time-controls").classList.add("hidden");
  document.getElementById("character-select-indicator").classList.add("hidden");
  document.getElementById("container").classList.add("ready");
  document.querySelector(".main-center-bg").classList.remove("hidden");
  document.getElementById("credits-btn").classList.remove("hidden");
  hideProofReviewButton(); // 논증 다시보기 버튼 숨김
  updateMainMenuBtnVisibility();
  updateMainCenterVisibility();
}

document.getElementById("vs-ai-battle-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  gameMode = "AI_VS_AI";
  audioManager.fadeOut("main-menu");
  audioManager.play("character-select");
  startCharacterSelection(gameMode);
});

document.getElementById("exit-game-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  showConfirm(currentLang.alerts.confirmExit, () => {
    // '예'를 눌렀을 때의 동작
    window.close();
  });
});

function generateAxioms(subjectA, subjectB, langData, isMarxInGame = false) {
  const templates = langData.axiom_templates;
  const axiomGroups = {
    identity: [...templates.identity],
    subjectOpposition: [],
    quantifierOpposition: [],
  };

  // 마르크스 정체성 공리 추가
  if (isMarxInGame) {
    if (langData.langCode === "ko") {
      axiomGroups.identity.push("어떤 브루주아는 브루주아이다");
      axiomGroups.identity.push("모든 브루주아는 브루주아이다");
    } else {
      axiomGroups.identity.push("Some Bourgeois is a Bourgeois");
      axiomGroups.identity.push("Every Bourgeois is a Bourgeois");
    }
  }

  // 개체별 속성 대립 공리들
  templates.subject_good_evil.forEach((template) => {
    axiomGroups.subjectOpposition.push(template.replaceAll("{S}", subjectA));
  });
  templates.subject_wise_foolish.forEach((template) => {
    axiomGroups.subjectOpposition.push(template.replaceAll("{S}", subjectA));
  });
  templates.subject_good_evil.forEach((template) => {
    axiomGroups.subjectOpposition.push(template.replaceAll("{S}", subjectB));
  });
  templates.subject_wise_foolish.forEach((template) => {
    axiomGroups.subjectOpposition.push(template.replaceAll("{S}", subjectB));
  });

  // 양화사별 속성 대립 공리들
  axiomGroups.quantifierOpposition.push(...templates.bird_good_evil_forward);
  axiomGroups.quantifierOpposition.push(...templates.bird_good_evil_reverse);
  axiomGroups.quantifierOpposition.push(...templates.fish_good_evil_forward);
  axiomGroups.quantifierOpposition.push(...templates.fish_good_evil_reverse);
  axiomGroups.quantifierOpposition.push(...templates.dog_good_evil_forward);
  axiomGroups.quantifierOpposition.push(...templates.dog_good_evil_reverse);

  if (isMarxInGame) {
    let marxBourgeoisAxioms = [];
    if (langData.langCode === "ko") {
      marxBourgeoisAxioms = [
        // 속성의 대립 (선/악)
        "모든 브루주아는 선하다 라면 어떤 브루주아는 악하다 는 거짓이다",
        "모든 브루주아는 악하다 라면 어떤 브루주아는 선하다 는 거짓이다",
        "어떤 브루주아는 선하다 는 거짓이다 라면 모든 브루주아는 악하다",
        "어떤 브루주아는 악하다 는 거짓이다 라면 모든 브루주아는 선하다",
        // 속성의 대립 (지혜/어리석음)
        "모든 브루주아는 지혜롭다 라면 어떤 브루주아는 어리석다 는 거짓이다",
        "모든 브루주아는 어리석다 라면 어떤 브루주아는 지혜롭다 는 거짓이다",
        "어떤 브루주아는 지혜롭다 는 거짓이다 라면 모든 브루주아는 어리석다",
        "어떤 브루주아는 어리석다 는 거짓이다 라면 모든 브루주아는 지혜롭다",
      ];
    } else {
      // langCode === 'en'
      marxBourgeoisAxioms = [
        // Opposition of Predicates (good/evil)
        "Every Bourgeois is good then Some Bourgeois is evil is false",
        "Every Bourgeois is evil then Some Bourgeois is good is false",
        "Some Bourgeois is good is false then Every Bourgeois is evil",
        "Some Bourgeois is evil is false then Every Bourgeois is good",
        // Opposition of Predicates (wise/foolish)
        "Every Bourgeois is wise then Some Bourgeois is foolish is false",
        "Every Bourgeois is foolish then Some Bourgeois is wise is false",
        "Some Bourgeois is wise is false then Every Bourgeois is foolish",
        "Some Bourgeois is foolish is false then Every Bourgeois is wise",
      ];
    }
    axiomGroups.quantifierOpposition.push(...marxBourgeoisAxioms);
  }

  // 하위 호환성을 위해 평면적인 배열로 반환
  const flatAxioms = [
    ...axiomGroups.identity,
    ...axiomGroups.subjectOpposition,
    ...axiomGroups.quantifierOpposition,
  ];

  // 그룹 정보를 속성으로 추가
  flatAxioms.groups = axiomGroups;

  return flatAxioms;
}
function getTopicParticle(name) {
  const lastChar = name.charCodeAt(name.length - 1);
  if (lastChar < 0xac00 || lastChar > 0xd7a3) {
    return "는"; // 한글이 아니면 '는'을 기본값으로 반환
  }
  // 받침 유무 확인: (글자코드 - 0xAC00) % 28
  const hasJongseong = (lastChar - 0xac00) % 28 !== 0;
  return hasJongseong ? "은" : "는";
}

function setupGame(selectedCharacters, testConfig = null) {
  playerA_Data = PHILOSOPHERS[selectedCharacters.p1];
  playerB_Data = PHILOSOPHERS[selectedCharacters.p2];
  truePropositions = []; // 게임 시작 시 참 명제 목록 초기화
  
  // 논증 기록 시스템 초기화
  proofSteps = [];
  isRecordingProof = false;
  stepCounter = 0;
  victoryProposition = null;
  hideProofReviewButton();

  const p1_id = selectedCharacters.p1;
  const p2_id = selectedCharacters.p2;
  let p1_card_obj, p2_card_obj;
  let subjectA, subjectB;

  subjectA = playerA_Data.cardText[currentLang.langCode];
  subjectB = playerB_Data.cardText[currentLang.langCode];

  // 1. 미러전(동일 철학자 선택) 처리
  if (p1_id === p2_id) {
    if (currentLang.langCode === "ko") {
      const fullName = playerA_Data.name.ko;
      const nameParts = fullName.split(" ");
      const lastName = nameParts[nameParts.length - 1];
      const particle = getTopicParticle(lastName);
      subjectA = `백색 ${lastName}${particle}`;
      subjectB = `흑색 ${lastName}${particle}`;
    } else {
      const fullName = playerA_Data.name.en;
      const nameParts = fullName.split(" ");
      const lastName = nameParts[nameParts.length - 1];
      subjectA = `White ${lastName}`;
      subjectB = `Black ${lastName}`;
    }
    document.getElementById("player-a-title").innerHTML = `⚪️ ${
      playerA_Data.name[currentLang.langCode]
    }(백)`;
    document.getElementById("player-b-title").innerHTML = `⚫️ ${
      playerB_Data.name[currentLang.langCode]
    }(흑)`;
  } else {
    document.getElementById("player-a-title").innerHTML = `⚪️ ${
      playerA_Data.name[currentLang.langCode]
    }`;
    document.getElementById("player-b-title").innerHTML = `⚫️ ${
      playerB_Data.name[currentLang.langCode]
    }`;
  }

  const properNounType =
    currentLang.langCode === "ko" ? "고유명사" : "Proper Noun";
  p1_card_obj = { type: properNounType, text: subjectA };
  p2_card_obj = { type: properNounType, text: subjectB };

  // 2. 게임 덱 구성 (마르크스 카드 포함)
  const masterDeck = currentLang.cards;
  const allPhilosopherCardTexts = Object.values(PHILOSOPHERS).map(
    (p) => p.cardText[currentLang.langCode]
  );
  const baseDeck = masterDeck.filter(
    (card) => !allPhilosopherCardTexts.includes(card.text)
  );

  let currentGameDeck = [...baseDeck, p1_card_obj, p2_card_obj];

  const isMarxInGame = p1_id === "marx" || p2_id === "marx";
  const bourgeoisCard = {
    type: currentLang.langCode === "ko" ? "개체" : "Entity",
    text: currentLang.langCode === "ko" ? "브루주아는" : "Bourgeois",
  };
  const revolutionSubjectCard = {
    type: currentLang.langCode === "ko" ? "고유명사" : "Proper Noun",
    text: currentLang.langCode === "ko" ? "혁명이" : "A revolution",
  };
  const revolutionPredicateCard = {
    type: currentLang.langCode === "ko" ? "서술어" : "Predicate",
    text: currentLang.langCode === "ko" ? "일어난다" : "occurs",
  };

  if (isMarxInGame) {
    currentGameDeck.push(
      bourgeoisCard,
      revolutionSubjectCard,
      revolutionPredicateCard
    );
  }

  fullDeck = currentGameDeck;

  // 3. 손패 분배 (마르크스 플레이 불가능 카드 제거 포함)
  if (testConfig && testConfig.handA) {
    const handATexts = testConfig.handA.split(",").map((s) => s.trim());
    playerA_Hand = handATexts
      .map((text) => fullDeck.find((c) => c.text === text))
      .filter(Boolean);
  } else {
    const nonPlayerCards = ["승리한다", "wins"];
    playerA_Hand = JSON.parse(
      JSON.stringify(fullDeck.filter((c) => !nonPlayerCards.includes(c.text)))
    );
  }
  if (testConfig && testConfig.handB) {
    const handBTexts = testConfig.handB.split(",").map((s) => s.trim());
    playerB_Hand = handBTexts
      .map((text) => fullDeck.find((c) => c.text === text))
      .filter(Boolean);
  } else {
    const nonPlayerCards = ["승리한다", "wins"];
    playerB_Hand = JSON.parse(
      JSON.stringify(fullDeck.filter((c) => !nonPlayerCards.includes(c.text)))
    );
  }

  if (isMarxInGame) {
    const unplayableCardTexts = [
      revolutionSubjectCard.text,
      revolutionPredicateCard.text,
    ];
    playerA_Hand = playerA_Hand.filter(
      (card) => !unplayableCardTexts.includes(card.text)
    );
    playerB_Hand = playerB_Hand.filter(
      (card) => !unplayableCardTexts.includes(card.text)
    );
  }

  // 4. 공리 및 승리 조건 설정
  currentAxioms = generateAxioms(subjectA, subjectB, currentLang, isMarxInGame);
  parsedAxioms = currentAxioms
    .map((str) => ({
      type: "axiom",
      proposition: parsePropositionFromString(str),
    }))
    .filter((a) => a.proposition);
  internalTruthSet = parsedAxioms.map((a) => a.proposition);

  const { if: ifKeyword, wins, and } = currentLang.keywords;

  const predicateA =
    testConfig?.victoryA ||
    currentLang.victoryPredicates[
      Math.floor(Math.random() * currentLang.victoryPredicates.length)
    ];
  const victoryTextA = `((${subjectA} ${predicateA}) ${ifKeyword} (${subjectA} ${wins})) ${and} ((${subjectA} ${wins}) ${ifKeyword} (${subjectA} ${predicateA}))`;
  const parsedVictoryA = parsePropositionFromString(victoryTextA);
  truePropositions.push({
    type: "victory",
    text: victoryTextA,
    owner: "A",
    proposition: parsedVictoryA,
    ultimate_target: {
      type: "atomic",
      subject: subjectA,
      predicate: wins,
    },
    core_goal: {
      type: "atomic",
      subject: subjectA,
      predicate: predicateA,
    },
  });
  if (parsedVictoryA) internalTruthSet.push(parsedVictoryA);

  const predicateB =
    testConfig?.victoryB ||
    currentLang.victoryPredicates[
      Math.floor(Math.random() * currentLang.victoryPredicates.length)
    ];
  const victoryTextB = `((${subjectB} ${predicateB}) ${ifKeyword} (${subjectB} ${wins})) ${and} ((${subjectB} ${wins}) ${ifKeyword} (${subjectB} ${predicateB}))`;
  const parsedVictoryB = parsePropositionFromString(victoryTextB);
  truePropositions.push({
    type: "victory",
    text: victoryTextB,
    owner: "B",
    proposition: parsedVictoryB,
    ultimate_target: {
      type: "atomic",
      subject: subjectB,
      predicate: wins,
    },
    core_goal: {
      type: "atomic",
      subject: subjectB,
      predicate: predicateB,
    },
  });
  if (parsedVictoryB) internalTruthSet.push(parsedVictoryB);

  // 5. 마르크스 특별 승리 조건 추가
  const setupMarxVictory = (player, subject) => {
    const revolutionPropText = `${revolutionSubjectCard.text} ${revolutionPredicateCard.text}`;
    const firstClause = `(${currentLang.keywords.universal_q} ${
      bourgeoisCard.text
    } ${currentLang.langCode === "ko" ? "악하다" : "is evil"})`;
    const secondClause = `(${revolutionPropText})`;
    const thirdClause = `(${subject} ${wins})`;
    const marxVictoryString = `(${firstClause} ${ifKeyword} ${secondClause}) ${and} (${secondClause} ${ifKeyword} ${thirdClause})`;
    const parsedMarxVictory = parsePropositionFromString(marxVictoryString);

    if (parsedMarxVictory) {
      truePropositions.push({
        owner: player,
        type: "victory",
        source: "marx_revolution",
        text: propositionToPlainText(parsedMarxVictory),
        proposition: parsedMarxVictory,
        ultimate_target: {
          type: "atomic",
          subject: subject,
          predicate: wins,
        },
        core_goal: {
          type: "atomic",
          subject: revolutionSubjectCard.text,
          predicate: revolutionPredicateCard.text,
        },
      });
      internalTruthSet.push(parsedMarxVictory);
    } else {
      console.error(
        "CRITICAL: Failed to parse Marx's victory string.",
        marxVictoryString
      );
    }
  };

  if (p1_id === "marx") {
    setupMarxVictory("A", subjectA);
  }
  if (p2_id === "marx") {
    setupMarxVictory("B", subjectB);
  }

  // 6. 테스트 모드 초기 참 명제 처리
  if (testConfig && testConfig.trueProps) {
    const propStrings = testConfig.trueProps
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);
    propStrings.forEach((str) => {
      const parsed = parsePropositionFromString(str);
      if (parsed) {
        const verificationResult = verifyAndExpandTruths(
          parsed,
          internalTruthSet
        );
        if (verificationResult.success) {
          truePropositions.push({
            propId: `prop_${Date.now()}_${Math.random()}`,
            type: "user-made",
            round: 0,
            proposition: parsed,
            original_cards: [],
          });
          internalTruthSet = verificationResult.expandedSet;
        } else {
          alert(
            `입력한 초기 참 명제 "${str}"가 기존 공리 또는 다른 명제와 모순되어 추가할 수 없습니다.`
          );
        }
      } else {
        alert(`입력한 초기 참 명제 "${str}"의 형식이 잘못되었습니다.`);
      }
    });
  }

  // 7. 초상화 및 능력 사용 상태 초기화
  const portraitA_El = document.getElementById("player-a-portrait");
  if (portraitA_El) {
    portraitA_El.style.backgroundImage = `url('${playerA_Data.image.p1}')`;
  }
  const portraitB_El = document.getElementById("player-b-portrait");
  if (portraitB_El) {
    portraitB_El.style.backgroundImage = `url('${playerB_Data.image.p2}')`;
  }

  abilityUsedState = {};

  // 플레이어 A의 능력 상태 설정 (이미 선언된 p1_id 변수 사용)
  if (p1_id === "hume" || p1_id === "socrates") {
    abilityUsedState["A"] = { usedCount: 0, maxUses: 2 };
  } else {
    abilityUsedState["A"] = { used: false };
  }

  // 플레이어 B의 능력 상태 설정 (이미 선언된 p2_id 변수 사용)
  if (p2_id === "hume" || p2_id === "socrates") {
    abilityUsedState["B"] = { usedCount: 0, maxUses: 2 };
  } else {
    abilityUsedState["B"] = { used: false };
  }

  render();
  checkNextTurn();
}

function resetGame(selectedCharacters, testConfig = null) {
  audioManager.stop("main-menu");
  audioManager.play("game-play");

  // 만약 선택된 캐릭터 정보가 없다면, 기본값으로 소크라테스와 플라톤을 설정
  if (!selectedCharacters) {
    selectedCharacters = { p1: "socrates", p2: "plato" };
  }

  clearAllAITimeouts();

  // 게임 초기화 시 밤 테마 제거
  document.body.classList.remove("thinking-time-night");

  socratesDisabledProps = []; // 소크라테스 능력으로 비활성화된 명제 목록 초기화

  playerA_Hand = [];
  playerB_Hand = [];
  truePropositions = [];
  currentProposition = [];
  currentPlayer = "A";
  gameIsOver = false;
  currentRound = 1;
  isThinkingTime = false;

  eurekaUsedInRound = { A: false, B: false };

  cardsPlayedThisTurn = { A: 0, B: 0 };

  document.getElementById("thinking-time-controls").style.display = "none";
  document.getElementById("status").innerHTML = "";

  setupGame(selectedCharacters, testConfig);
}

function addGlobalSoundEvents() {
  // body에 단 하나의 클릭 이벤트 리스너를 추가합니다 (이벤트 위임 방식).
  document.body.addEventListener("click", (event) => {
    // 클릭된 요소 또는 그 부모 중에서 우리가 소리를 내고 싶은 대상을 찾습니다.
    const targetElement = event.target.closest("button");

    // 대상이 없으면 아무것도 하지 않습니다.
    if (!targetElement) {
      return;
    }

    // 비활성화된 요소나 AI의 손패에서는 소리를 재생하지 않습니다.
    if (targetElement.disabled || targetElement.classList.contains("ai-hand")) {
      return;
    }

    // 모든 조건을 통과하면 사운드를 재생합니다.
    audioManager.playSfx("hover");
  });
}

function isValidPlay(cardToPlay, proposition) {
  if (inTutorialMode) {
    const highlightedCard = document.querySelector(".tutorial-highlight");
    return highlightedCard && highlightedCard.textContent === cardToPlay.text;
  }

  const propLength = proposition.length;
  const { if: ifKeyword, and, or, not } = currentLang.keywords;
  const isConnective = (card) => [ifKeyword, and, or].includes(card.text);
  const [properNoun, quantifier, entity, predicate, operator] =
    currentLang.cardTypes;

  if (propLength === 0) {
    return cardToPlay.type === properNoun || cardToPlay.type === quantifier;
  }

  const lastCardInfo = proposition[propLength - 1];

  if (cardToPlay.text === not) {
    // '는 거짓이다'는 문법적으로 완결된 명제에만 붙일 수 있습니다.
    const parsedProp = parsePropositionFromCards(proposition);
    // 완결된 명제가 있을 때만 '는 거짓이다'를 놓을 수 있습니다.
    return parsedProp !== null;
  }

  if (isConnective(cardToPlay)) {
    if (proposition.some((info) => isConnective(info.card))) return false;
    const connectiveIndex = proposition
      .map((info) => info.card)
      .findIndex(isConnective);
    const partToCheck =
      connectiveIndex > -1
        ? proposition.slice(connectiveIndex + 1)
        : proposition;
    return parsePropositionFromCards(partToCheck) !== null;
  }

  if (isConnective(lastCardInfo.card)) {
    return cardToPlay.type === properNoun || cardToPlay.type === quantifier;
  }

  const connectiveIndex = proposition
    .map((info) => info.card)
    .findIndex(isConnective);
  const currentSimpleProp =
    connectiveIndex > -1 ? proposition.slice(connectiveIndex + 1) : proposition;

  if (currentSimpleProp.length === 1) {
    const lastType = currentSimpleProp[0].card.type;
    if (lastType === properNoun) return cardToPlay.type === predicate;
    if (lastType === quantifier) return cardToPlay.type === entity;
  }
  if (currentSimpleProp.length === 2) {
    if (
      currentSimpleProp[0].card.type === quantifier &&
      currentSimpleProp[1].card.type === entity
    ) {
      return cardToPlay.type === predicate;
    }
  }
  return false;
}

function checkNextTurn() {
  if (gameIsOver || inTutorialMode) return; // 게임오버, 튜토리얼 중에는 실행 안 함

  clearAllAITimeouts(); // 기존에 예약된 AI 동작이 있다면 모두 취소

  if (isThinkingTime) {
    // --- 사유 시간일 때의 턴 관리 ---
    // 현재 생각해야 할 플레이어가 AI라면, AI의 사유 시간 턴을 예약
    if (isPlayerAI[thinkingTimeTurn]) {
      aiTimeoutId = setTimeout(aiThinkingTimeTurn, 1500);
    }
    // 사람이 턴이라면, 아무것도 하지 않고 사용자 입력을 기다림
  } else {
    // --- 일반 턴일 때의 턴 관리 ---
    // 현재 턴의 플레이어가 AI라면, AI의 일반 턴을 예약
    if (isPlayerAI[currentPlayer]) {
      const delay = gameMode === "AI_VS_AI" ? 250 : 1500;
      aiTimeoutId = setTimeout(aiTurn, delay);
    }
    // 사람이 턴이라면, 행동 가능 여부만 체크 (행동 없으면 사유 시간 전환)
    else {
      checkRoundEndConditions();
    }
  }
}
function endTurn() {
  // 사유 시간 중일 때의 턴 종료 로직
  if (isThinkingTime) {
    audioManager.playSfx("end");
    // 해당 라운드를 먼저 시작했던 플레이어 (사유 시간에는 두 번째로 행동함)
    const roundStarter = currentRound % 2 === 1 ? "A" : "B";

    // 지금 턴을 마친 플레이어가 '두 번째' 순서라면, 사유 시간을 완전히 종료합니다.
    if (thinkingTimeTurn === roundStarter) {
      endThinkingTime();
    } else {
      // '첫 번째' 순서의 플레이어라면, 턴을 상대에게 넘깁니다.
      thinkingTimeTurn = roundStarter;

      if (gameMode === "AI" && thinkingTimeTurn === aiPlayer) {
        clearAllAITimeouts();
        aiTimeoutId = setTimeout(aiThinkingTimeTurn, 2000);
      }
      render();

      // ✅ [핵심 수정]
      // 두 번째 AI에게 턴을 넘겼으니, 턴 관리자(checkNextTurn)를 호출해서
      // 두 번째 AI의 턴을 실제로 시작시킵니다.
      checkNextTurn();
    }
    return;
  }

  // --- 이하 일반 턴 종료 로직 (수정 없음) ---
  if (cardsPlayedThisTurn[currentPlayer] === 0) return;

  audioManager.playSfx("end");

  const playerWhoEndedTurn = currentPlayer;
  cardsPlayedThisTurn[playerWhoEndedTurn] = 0;

  currentPlayer = currentPlayer === "A" ? "B" : "A";

  render();
  checkNextTurn();
}

function activateAbility(player) {
  if (inTutorialMode) {
    return; // 튜토리얼 모드에서는 아무것도 하지 않고 즉시 함수를 종료합니다.
  }
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;

  const state = abilityUsedState[player];
  if (state) {
    // 흄의 경우 usedCount가 maxUses 이상인지 확인
    if (philosopherId === "hume" && state.usedCount >= state.maxUses) {
      showAlert(
        currentLang.langCode === "ko"
          ? "이미 능력을 모두 사용했습니다."
          : "Ability has already been used up."
      );
      return;
    }
    // 그 외 철학자는 기존 방식대로 used 플래그 확인
    else if (philosopherId !== "hume" && state.used) {
      showAlert(
        currentLang.langCode === "ko"
          ? "이미 능력을 사용했습니다."
          : "Ability has already been used."
      );
      return;
    }
  }

  console.log(`Activating ability for ${philosopherId}`);
  switch (philosopherId) {
    case "plato":
      activatePlatoAbility(player); // 이 부분을 수정합니다.
      break;
    case "socrates":
      activateSocratesAbility(player);
      break;
    case "descartes":
      activateDescartesAbility(player);
      break;
    case "wittgenstein":
      activateWittgensteinAbility(player);
      break;
    case "derrida":
      activateDerridaAbility(player);
      break;
    case "hume":
      activateHumeAbility(player);
      break;
    case "kuhn":
      activateKuhnAbility(player);
      break;
    case "kant":
      activateKantAbility(player);
      break;

    // ... 다른 모든 철학자들의 능력 호출 ...
    default:
      showAlert(
        currentLang.langCode === "ko"
          ? "이 철학자는 사용할 수 있는 능력이 없습니다."
          : "This philosopher has no active ability."
      );
  }
}

function updateAbilityButtonsState() {
  // 플레이어 A의 능력 버튼 상태를 가져옵니다.
  const stateA = getAbilityButtonStateFor("A");
  const buttonA = document.getElementById("ability-a");
  buttonA.style.display = stateA.visible ? "block" : "none";
  buttonA.disabled = stateA.disabled;
  buttonA.textContent = stateA.text;

  // 플레이어 B의 능력 버튼 상태를 가져옵니다.
  const stateB = getAbilityButtonStateFor("B");
  const buttonB = document.getElementById("ability-b");
  buttonB.style.display = stateB.visible ? "block" : "none";
  buttonB.disabled = stateB.disabled;
  buttonB.textContent = stateB.text;
}

function getAbilityButtonStateFor(player) {
  // 기본값: 버튼은 보이지 않고 비활성화 상태
  const defaultState = { visible: false, disabled: true, text: "" };

  // 현재 게임이 진행 중이 아니거나, 해당 플레이어의 철학자 정보가 없으면 기본 상태 반환
  if (
    gameIsOver ||
    (player === "A" && !playerA_Data) ||
    (player === "B" && !playerB_Data)
  ) {
    return defaultState;
  }

  const philosopherData = player === "A" ? playerA_Data : playerB_Data;
  const philosopherId = philosopherData.id;

  // 해당 철학자의 능력이 이미 사용되었다면 기본 상태 반환
  if (abilityUsedState[player] && abilityUsedState[player].used) {
    return defaultState;
  }

  // ⭐ 앞으로 모든 능력의 조건은 이 switch 문 안에 추가됩니다.
  switch (philosopherId) {
    case "plato":
      // 능력 사용 조건: '사유 시간'일 때 항상 버튼을 표시
      if (isThinkingTime) {
        return {
          visible: true,
          // 자기 턴이 아닐 때(!==) 비활성화(disabled: true)
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player),
          text: currentLang.ui.useAbilityButton,
        };
      }

      break; // platocase 끝

    case "socrates":
      // 사유 시간이고, 사용 횟수가 남아있을 때 버튼 표시
      if (
        isThinkingTime &&
        abilityUsedState[player].usedCount < abilityUsedState[player].maxUses
      ) {
        return {
          visible: true,
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player),
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;

    case "nietzsche":
      // 니체의 능력은 패시브이므로, 활성화 버튼이 필요 없습니다.
      // 따라서 아무것도 반환하지 않고 그냥 break 합니다.
      break;

    case "descartes":
      if (isThinkingTime) {
        return {
          visible: true,
          // 자신의 사유 시간 턴이 아닐 경우 버튼을 비활성화합니다.
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player),
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;

    case "wittgenstein":
      if (isThinkingTime) {
        return {
          visible: true,
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player), // 자신의 턴일 때만 활성화
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;

    case "derrida":
      if (isThinkingTime) {
        return {
          visible: true,
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player), // 자신의 턴일 때만 활성화
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;
    case "hume":
      // 사유 시간이고, 사용 횟수가 남아있을 때 버튼 표시
      if (
        isThinkingTime &&
        abilityUsedState[player].usedCount < abilityUsedState[player].maxUses
      ) {
        return {
          visible: true,
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player), // 자신의 턴일 때만 활성화
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;
    case "kuhn":
      // 플레이어가 카드를 놓아 생성한 명제만 카운트
      const userMadePropsCount = truePropositions.filter(
        (p) => p.type === "user-made"
      ).length;

      if (isThinkingTime && userMadePropsCount >= 15) {
        return {
          visible: true,
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player), // 자신의 턴일 때만 활성화
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;
    case "kant":
      // 사유 시간이고, 아직 능력을 사용하지 않았을 때 버튼 표시
      if (isThinkingTime && !abilityUsedState[player]?.used) {
        return {
          visible: true,
          // 자신의 턴이 아니면 비활성화
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player),
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;

    // --- 여기에 새로운 철학자들의 case를 계속 추가 ---
    // case 'descartes':
    //     if (isThinkingTime && thinkingTimeTurn === player) { ... }
    //     break;
  }

  // 위 switch 문에서 아무 조건도 맞지 않으면 기본 상태를 반환합니다.
  return defaultState;
}

function playCard(player, cardToPlay) {
  if (player !== currentPlayer || gameIsOver || isThinkingTime) return;

  if (cardsPlayedThisTurn[player] >= 1) {
    showAlert(currentLang.alerts.oneCardPerTurn);
    return;
  }

  if (!isValidPlay(cardToPlay, currentProposition)) {
    if (player !== aiPlayer) {
      showAlert(currentLang.alerts.invalidCard);
    }
    return;
  }
  if (currentProposition.length === 0) propositionStarter = player;
  const hand = player === "A" ? playerA_Hand : playerB_Hand;
  const cardIndex = hand.findIndex(
    (card) => card.text === cardToPlay.text && card.type === cardToPlay.type
  );
  if (cardIndex === -1) return;
  currentProposition.push({
    card: hand.splice(cardIndex, 1)[0],
    player: player,
    originalIndex: cardIndex, // 카드의 원래 위치를 함께 저장
  });

  audioManager.playSfx("playCard");

  lastCardPlayer = player;
  cardsPlayedThisTurn[player]++;

  render();
}

function completeProposition() {
  if (currentProposition.length === 0 || gameIsOver || isThinkingTime)
    return false;

  const parsedProp = parsePropositionFromCards([...currentProposition]);
  if (!parsedProp) {
    if (currentPlayer !== aiPlayer) {
      showAlert(currentLang.alerts.incompleteProposition);
    }
    return false;
  }

  const isAxiom = parsedAxioms.some((a) =>
    arePropositionsEqual(a.proposition, parsedProp)
  );
  const isAlreadyInTrueList = truePropositions.some(
    (p) => p.proposition && arePropositionsEqual(p.proposition, parsedProp)
  );

  // 공리이거나, 이미 참 목록에 있으면 '증명된 것'으로 간주합니다.
  const isAlreadyProven = isAxiom || isAlreadyInTrueList;
  const currentPlayerId =
    currentPlayer === "A" ? playerA_Data.id : playerB_Data.id;

  // 1. "불가능한 경우"를 먼저 확인하고 함수를 즉시 종료시킵니다.
  // 현재 플레이어가 니체가 "아닌데" 중복 명제를 완성하려는 경우 -> 거부
  if ((isAxiom || isAlreadyProven) && currentPlayerId !== "nietzsche") {
    if (currentPlayer !== aiPlayer) {
      showAlert(currentLang.alerts.duplicateProposition);
    }
    return false;
  }

  // 2. 여기까지 왔다면, 아래 두 경우 중 하나입니다:
  //    - 새로운 명제인 경우 (모든 플레이어)
  //    - 중복 명제인 경우 (니체만 해당)

  const verificationResult = verifyAndExpandTruths(parsedProp);

  if (verificationResult.success) {
    // 3. 논리적으로 참임이 증명되었으므로, 명제를 추가합니다.
    internalTruthSet = verificationResult.expandedSet;

    // 추가할 명제 객체를 기본 형태로 생성합니다.
    const propToAdd = {
      propId: `prop_${Date.now()}_${Math.random()}`,
      type: "user-made",
      round: currentRound,
      proposition: parsedProp,
      original_cards: [...currentProposition],
    };

    // 만약 "니체가 중복 명제를 완성"한 경우, 'source'를 추가합니다.
    if (isAlreadyProven && currentPlayerId === "nietzsche") {
      propToAdd.source = "nietzsche_ability";
    }

    console.log("니체 명제 생성 시점: ", propToAdd);

    truePropositions.push(propToAdd);

    // --- 명제 추가 성공 후 공통 로직 ---
    audioManager.playSfx("complete");
    lastPropositionMaker =
      currentProposition[currentProposition.length - 1].player;
    currentPlayer = lastPropositionMaker === "A" ? "B" : "A";
    currentProposition = [];
    lastCardPlayer = null;
    cardsPlayedThisTurn = { A: 0, B: 0 };
    render();
    const truePropositionsEl = document.getElementById("true-propositions");
    truePropositionsEl.scrollTo({
      top: truePropositionsEl.scrollHeight,
      behavior: "smooth",
    });
    checkNextTurn();
    return true;
  } else {
    // 4. 모순이 발견된 경우
    if (currentPlayer !== aiPlayer) {
      showAlert(currentLang.alerts.contradictionFound);
    }
    return false;
  }
}

function undoProposition() {
  if (gameIsOver || isThinkingTime) return;
  if (gameMode === "AI" && currentPlayer === aiPlayer) return;

  if (currentProposition.length > 0) {
    audioManager.playSfx("undo");
    const lastPlayedInfo = currentProposition.pop();
    if (gameMode === "AI" && lastPlayedInfo.player === aiPlayer) {
      currentProposition.push(lastPlayedInfo);
      return;
    }
    const hand = lastPlayedInfo.player === "A" ? playerA_Hand : playerB_Hand;

    // hand.push 대신 splice를 사용하여 원래 위치에 카드를 삽입합니다.
    if (typeof lastPlayedInfo.originalIndex !== "undefined") {
      hand.splice(lastPlayedInfo.originalIndex, 0, lastPlayedInfo.card);
    } else {
      // 혹시 모를 예외 상황을 위한 대비 코드
      hand.push(lastPlayedInfo.card);
    }
    cardsPlayedThisTurn[lastPlayedInfo.player]--;
    currentPlayer = lastPlayedInfo.player;

    if (currentProposition.length > 0) {
      lastCardPlayer = currentProposition[currentProposition.length - 1].player;
    } else {
      lastCardPlayer = null;
    }

    render();
  } else {
    let lastUserMadePropIndex = -1;
    for (let i = truePropositions.length - 1; i >= 0; i--) {
      if (truePropositions[i].type === "user-made") {
        lastUserMadePropIndex = i;
        break;
      }
    }
    if (lastUserMadePropIndex !== -1) {
      const propToUndo = truePropositions[lastUserMadePropIndex];
      const lastMaker =
        propToUndo.original_cards[propToUndo.original_cards.length - 1].player;
      if (gameMode === "AI" && lastMaker === aiPlayer) {
        showAlert(currentLang.alerts.nothingToUndo);
        return;
      }
      audioManager.playSfx("undo");
      truePropositions.splice(lastUserMadePropIndex, 1);
      let newTruthSet = parsedAxioms.map((a) => a.proposition);
      const propositionsToReverify = truePropositions
        .filter(
          (p) =>
            p.type === "victory" ||
            p.type === "theorem" ||
            p.type === "user-made"
        )
        .map((p) => p.proposition);
      for (const prop of propositionsToReverify) {
        internalTruthSet = JSON.parse(JSON.stringify(newTruthSet));
        const verificationResult = verifyAndExpandTruths(prop);
        if (verificationResult.success) {
          newTruthSet = verificationResult.expandedSet;
        } else {
          console.error(
            "Critical error: Inconsistency found while rebuilding truth set after undo.",
            prop
          );
          showAlert(currentLang.alerts.criticalErrorUndo);
          truePropositions.splice(lastUserMadePropIndex, 0, propToUndo);
          return;
        }
      }
      internalTruthSet = newTruthSet;
      currentProposition = propToUndo.original_cards;
      currentPlayer = currentProposition[currentProposition.length - 1].player;
      lastCardPlayer = currentProposition[currentProposition.length - 1].player;
      cardsPlayedThisTurn = { A: 0, B: 0 };
      showAlert(currentLang.alerts.undoLastProposition);
      render();
    } else {
      showAlert(currentLang.alerts.nothingToUndo);
    }
  }
}

function declareEureka(player) {
  if (gameIsOver) return;

  if (!isThinkingTime && player !== currentPlayer) return;

  if (gameMode === "AI" && player === aiPlayer) return;

  if (!isThinkingTime) {
    if (eurekaUsedInRound[player]) {
      return;
    }

    showConfirm(currentLang.alerts.confirmDeclareEureka, (event) => {
      // 💡 변경점: event 객체를 받도록 수정
      event.stopPropagation(); // 💡 변경점: 이벤트 전파를 막아 중복 소리를 제거

      audioManager.playSfx("eureka");
      eurekaUsedInRound[player] = true;
      openEurekaModal();
      render();
    });
  } else {
    openEurekaModal();
    render();
  }
}

function endGame(winner, winningProposition) {
  audioManager.playSfx("victory");
  audioManager.fadeOut("game-play");
  audioManager.fadeOut("thinking-time");
  gameIsOver = true;
  document.getElementById("eureka-modal").classList.remove("visible");
  const statusEl = document.getElementById("status");
  let winnerName;
  const isMirrorMatch = playerA_Data.id === playerB_Data.id;

  if (winner === "A") {
    winnerName = getLastName(playerA_Data.name[currentLang.langCode]);
    if (isMirrorMatch) {
      // 미러전일 경우, A플레이어(선공)에게 색상 식별자를 추가합니다.
      winnerName += currentLang.langCode === "ko" ? "(백)" : " (White)";
    }
  } else {
    // winner === 'B'
    winnerName = getLastName(playerB_Data.name[currentLang.langCode]);
    if (isMirrorMatch) {
      // 미러전일 경우, B플레이어(후공)에게 색상 식별자를 추가합니다.
      winnerName += currentLang.langCode === "ko" ? "(흑)" : " (Black)";
    }
  }
  const victoryText = `${winnerName} ${currentLang.ui.victoryMessage}<br>${currentLang.ui.victorySubMessage}`;
  statusEl.innerHTML = `<span class="turn-indicator">${victoryText}</span>`;
  render();

  // 1. 모든 오버레이 이미지를 일단 숨깁니다.
  document.querySelectorAll(".overlay-image").forEach((img) => {
    img.classList.add("hidden");
  });

  // 2. ★★★ 수정된 핵심 로직 ★★★
  //    승리한 철학자의 '승리' 오버레이를 논리 증명과 관계없이 즉시 표시합니다.
  const winnerOverlayId =
    winner === "A" ? "socrates-win-overlay" : "plato-win-overlay";
  const winnerOverlay = document.getElementById(winnerOverlayId);
  if (winnerOverlay) {
    winnerOverlay.classList.remove("hidden");
    // z-index를 다른 승리 이미지보다 높게 설정하여 항상 위에 오도록 보장합니다.
    // (CSS에서 이미 z-index: 3으로 설정했으므로 이 줄은 선택적입니다.)
    winnerOverlay.style.zIndex = "5";
  }

  // 3. '승리'를 제외한 나머지 상태 오버레이들은 기존처럼 논리적 참/거짓에 따라 표시합니다.
  const characters = [
    currentLang.keywords.socrates,
    currentLang.keywords.plato,
  ];
  const predicates = [
    ...currentLang.cards
      .filter(
        (card) =>
          card.type === currentLang.cardTypes[3] || card.type === "Predicate"
      )
      // ★★★ '승리한다' 서술어는 위에서 수동으로 처리했으므로, 반복문에서 제외합니다.
      .filter(
        (card) =>
          card.text !== currentLang.keywords.wins && card.text !== "승리한다"
      )
      .map((card) => card.text),
  ];

  characters.forEach((subjectText) => {
    predicates.forEach((predicateText) => {
      const targetProposition = {
        type: "atomic",
        subject: subjectText,
        predicate: predicateText,
      };

      if (aiFindProof(targetProposition, internalTruthSet)) {
        const subjectId =
          subjectText === currentLang.keywords.socrates ? "socrates" : "plato";
        const predicateMap = {
          선하다: "good",
          "is good": "good",
          악하다: "evil",
          "is evil": "evil",
          지혜롭다: "wise",
          "is wise": "wise",
          어리석다: "foolish",
          "is foolish": "foolish",
          새이다: "bird",
          "is a bird": "bird",
          물고기이다: "fish",
          "is a fish": "fish",
          개이다: "dog",
          "is a dog": "dog",
        };
        const predicateId = predicateMap[predicateText];

        if (predicateId) {
          const overlayId = `${subjectId}-${predicateId}-overlay`;
          const overlayToShow = document.getElementById(overlayId);
          if (overlayToShow) {
            overlayToShow.classList.remove("hidden");
          }
        }
      }
    });
  });
  
  // 논증 다시보기 버튼 표시 (퍼즐 모드나 튜토리얼이 아닌 경우만)
  if (!inPuzzleMode && !inTutorialMode && proofSteps && proofSteps.length > 0) {
    showProofReviewButton();
  }
}
function checkRoundEndConditions() {
  if (gameIsOver || isThinkingTime || cardsPlayedThisTurn[currentPlayer] > 0)
    return;

  const hand = currentPlayer === "A" ? playerA_Hand : playerB_Hand;
  const hasValidCardMove = hand.some((card) =>
    isValidPlay(card, currentProposition)
  );

  let canComplete = false;
  if (currentProposition.length > 0 && lastCardPlayer !== currentPlayer) {
    const parsedProp = parsePropositionFromCards(currentProposition);
    if (parsedProp) {
      const verificationResult = verifyAndExpandTruths(parsedProp);
      if (verificationResult.success) {
        canComplete = true;
      }
    }
  }

  if (!hasValidCardMove && !canComplete) {
    const playerName =
      currentPlayer === "A"
        ? playerA_Data.name[currentLang.langCode]
        : playerB_Data.name[currentLang.langCode];

    // 'AI vs AI' 모드일 경우에만 경고창을 건너뜁니다.
    if (gameMode === "AI_VS_AI") {
      console.log(
        `AI (${currentPlayer}) has no moves. Starting Thinking Time automatically in AI_VS_AI mode.`
      );
      startThinkingTime();
    } else {
      // 그 외의 모든 모드(사람 vs AI 포함)에서는 경고창을 띄웁니다.
      showAlert(
        currentLang.alerts.roundEndNoMoves.replace("{player}", playerName),
        () => startThinkingTime()
      );
    }
  }
}

function startThinkingTime() {
  audioManager.fadeOut("game-play");
  audioManager.play("thinking-time");

  currentProposition = [];
  lastCardPlayer = null;
  isThinkingTime = true;
  cardsPlayedThisTurn = { A: 0, B: 0 };

  // 사유 시간 시작 시 밤 테마로 배경 변경
  document.body.classList.add("thinking-time-night");

  const thinkingTimeEl = document.getElementById("thinking-time-controls");
  thinkingTimeEl.classList.remove("hidden");
  thinkingTimeEl.style.display = "";

  // 후공 플레이어부터 사유 시간 턴을 시작
  const roundStarter = currentRound % 2 === 1 ? "A" : "B";
  const thinkingTimeStarter = roundStarter === "A" ? "B" : "A";
  thinkingTimeTurn = thinkingTimeStarter;

  render();

  // ✅ [핵심 수정] 턴 시작은 이제 checkNextTurn 함수가 전담하므로,
  // 상태 변경 후 checkNextTurn을 호출하여 턴 관리를 넘겨줍니다.
  checkNextTurn();
}
function endThinkingTime() {
  audioManager.fadeOut("thinking-time"); // 기존 코드
  audioManager.play("game-play"); // 기존 코드

  socratesDisabledProps = socratesDisabledProps.filter(
    (prop) => prop.reEnableRound > currentRound + 1
  ); // 기존 코드

  isThinkingTime = false; // 기존 코드
  thinkingTimeTurn = null; // 기존 코드

  // 사유 시간 종료 시 낮 테마로 배경 복원
  document.body.classList.remove("thinking-time-night");

  document.getElementById("thinking-time-controls").classList.add("hidden"); // 기존 코드

  currentRound++; // 기존 코드
  eurekaUsedInRound = { A: false, B: false }; // 기존 코드

  // 손패를 새로 분배하는 부분 (기존 코드)
  const nonPlayerCards = [currentLang.keywords.wins]; // 기존 코드
  playerA_Hand = JSON.parse(
    JSON.stringify(fullDeck.filter((c) => !nonPlayerCards.includes(c.text)))
  ); // 기존 코드
  playerB_Hand = JSON.parse(
    JSON.stringify(fullDeck.filter((c) => !nonPlayerCards.includes(c.text)))
  ); // 기존 코드

  // 현재 게임에 마르크스가 있는지 확인합니다.
  const isMarxInGame = playerA_Data.id === "marx" || playerB_Data.id === "marx"; // playerA_Data와 playerB_Data를 참조하여 마르크스 존재 여부 확인

  // 마르크스가 있다면, 새로 분배된 손패에서 플레이 불가능한 카드들을 제거합니다.
  if (isMarxInGame) {
    const unplayableCardTexts = [
      currentLang.langCode === "ko" ? "혁명이" : "A revolution",
      currentLang.langCode === "ko" ? "일어난다" : "occurs",
    ]; // 제거할 카드 목록 정의

    playerA_Hand = playerA_Hand.filter(
      (card) => !unplayableCardTexts.includes(card.text)
    ); // 손패 A에서 필터링
    playerB_Hand = playerB_Hand.filter(
      (card) => !unplayableCardTexts.includes(card.text)
    ); // 손패 B에서 필터링
  }

  currentPlayer = currentRound % 2 === 1 ? "A" : "B"; // 기존 코드
  render(); // 기존 코드

  // 새로운 라운드 시작 시 참 명제 목록을 맨 아래로 스크롤
  const truePropositionsElement = document.getElementById("true-propositions");
  if (truePropositionsElement) {
    truePropositionsElement.scrollTop = truePropositionsElement.scrollHeight;
  }

  checkNextTurn(); // 기존 코드
}

function render() {
  if (playerA_Data && playerB_Data) {
    // 데이터가 있을 때만 실행
    const isMirrorMatch = playerA_Data.id === playerB_Data.id;
    if (isMirrorMatch) {
      // 미러전일 경우
      document.getElementById("player-a-title").innerHTML = `⚪️ ${
        playerA_Data.name[currentLang.langCode]
      }(백)`;
      document.getElementById("player-b-title").innerHTML = `⚫️ ${
        playerB_Data.name[currentLang.langCode]
      }(흑)`;
    } else {
      // 일반 대전일 경우
      document.getElementById("player-a-title").innerHTML = `⚪️ ${
        playerA_Data.name[currentLang.langCode]
      }`;
      document.getElementById("player-b-title").innerHTML = `⚫️ ${
        playerB_Data.name[currentLang.langCode]
      }`;
    }
  }
  document.getElementById("round-display").textContent =
    currentLang.ui.roundDisplay.replace("{round}", currentRound);
  const handA_El = document.getElementById("player-a-hand"),
    handB_El = document.getElementById("player-b-hand");
  handA_El.innerHTML = "";
  handB_El.innerHTML = "";
  playerA_Hand.sort(
    (a, b) => cardTypeOrder.indexOf(a.type) - cardTypeOrder.indexOf(b.type)
  );
  playerB_Hand.sort(
    (a, b) => cardTypeOrder.indexOf(a.type) - cardTypeOrder.indexOf(b.type)
  );
  let lastTypeA = null;
  playerA_Hand.forEach((card) => {
    if (card.type !== lastTypeA) {
      if (lastTypeA !== null) {
        const br = document.createElement("div");
        br.style.flexBasis = "100%";
        br.style.height = "0";
        handA_El.appendChild(br);
      }
      lastTypeA = card.type;
    }
    const cardEl = document.createElement("div");
    cardEl.className = "card card-white";
    cardEl.textContent = card.text;
    // 사유 시간에는 모든 카드를 비활성화
    if (isThinkingTime) {
      cardEl.classList.add("unplayable");
    } else {
      // 사유 시간이 아닐 때의 기존 로직
      if (gameMode === "AI" && aiPlayer === "A") {
        cardEl.classList.add("ai-hand");
      } else {
        if (currentPlayer === "A" && !gameIsOver) {
          if (cardsPlayedThisTurn["A"] >= 1) {
            cardEl.classList.add("unplayable");
          } else {
            if (isValidPlay(card, currentProposition)) {
              cardEl.addEventListener("click", () => {
                if (!inTutorialMode) playCard("A", card);
              });
            } else {
              cardEl.classList.add("unplayable");
            }
          }
        }
      }
    }
    handA_El.appendChild(cardEl);
  });
  let lastTypeB = null;
  playerB_Hand.forEach((card) => {
    if (card.type !== lastTypeB) {
      if (lastTypeB !== null) {
        const br = document.createElement("div");
        br.style.flexBasis = "100%";
        br.style.height = "0";
        handB_El.appendChild(br);
      }
      lastTypeB = card.type;
    }
    const cardEl = document.createElement("div");
    cardEl.className = "card card-black";
    cardEl.textContent = card.text;
    // 사유 시간에는 모든 카드를 비활성화
    if (isThinkingTime) {
      cardEl.classList.add("unplayable");
    } else {
      // 사유 시간이 아닐 때의 기존 로직
      if (gameMode === "AI" && aiPlayer === "B") {
        cardEl.classList.add("ai-hand");
      } else {
        if (currentPlayer === "B" && !gameIsOver) {
          if (cardsPlayedThisTurn["B"] >= 1) {
            cardEl.classList.add("unplayable");
          } else {
            if (isValidPlay(card, currentProposition)) {
              cardEl.addEventListener("click", () => {
                if (!inTutorialMode) playCard("B", card);
              });
            } else {
              cardEl.classList.add("unplayable");
            }
          }
        }
      }
    }
    handB_El.appendChild(cardEl);
  });
  const propositionEl = document.getElementById("proposition-display");
  propositionEl.innerHTML = "";
  currentProposition.forEach((info) => {
    const cardEl = document.createElement("div");
    const colorClass = info.player === "A" ? "card-white" : "card-black";
    cardEl.className = `card ${colorClass}`;
    cardEl.textContent = info.card.text;
    propositionEl.appendChild(cardEl);
  });
  const trueList_El = document.getElementById("true-list");
  trueList_El.innerHTML = "";
  const liAxiom = document.createElement("li");
  liAxiom.className = "axiom-wrapper";
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = currentLang.ui.axiomTitle;
  details.appendChild(summary);
  const axiomContainer = document.createElement("div");
  axiomContainer.className = "axiom-list";

  // 공리들을 그룹별로 표시
  if (currentAxioms.groups) {
    const groups = currentAxioms.groups;

    // 정체성 공리
    if (groups.identity.length > 0) {
      groups.identity.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const separator = document.createElement("hr");
      separator.style.margin = "8px 0";
      separator.style.border = "none";
      separator.style.borderTop = "1px solid #ddd";
      axiomContainer.appendChild(separator);
    }

    // 개체별 속성 대립 - 세부 그룹으로 나누기
    if (groups.subjectOpposition.length > 0) {
      const templates = currentLang.axiom_templates;
      const subjectA = playerA_Data
        ? playerA_Data.cardText[currentLang.langCode]
        : "";
      const subjectB = playerB_Data
        ? playerB_Data.cardText[currentLang.langCode]
        : "";

      // 첫 번째 철학자 선악 공리
      templates.subject_good_evil.forEach((template) => {
        const axiomText = template.replaceAll("{S}", subjectA);
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep1 = document.createElement("hr");
      sep1.style.margin = "4px 0";
      sep1.style.border = "none";
      sep1.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep1);

      // 첫 번째 철학자 지혜 공리
      templates.subject_wise_foolish.forEach((template) => {
        const axiomText = template.replaceAll("{S}", subjectA);
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep2 = document.createElement("hr");
      sep2.style.margin = "4px 0";
      sep2.style.border = "none";
      sep2.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep2);

      // 두 번째 철학자 선악 공리
      templates.subject_good_evil.forEach((template) => {
        const axiomText = template.replaceAll("{S}", subjectB);
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep3 = document.createElement("hr");
      sep3.style.margin = "4px 0";
      sep3.style.border = "none";
      sep3.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep3);

      // 두 번째 철학자 지혜 공리
      templates.subject_wise_foolish.forEach((template) => {
        const axiomText = template.replaceAll("{S}", subjectB);
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const separator = document.createElement("hr");
      separator.style.margin = "8px 0";
      separator.style.border = "none";
      separator.style.borderTop = "1px solid #ddd";
      axiomContainer.appendChild(separator);
    }

    // 집단별 속성 대립 - 세부 그룹으로 나누기
    if (groups.quantifierOpposition.length > 0) {
      const templates = currentLang.axiom_templates;

      // 새 집단 순방향
      templates.bird_good_evil_forward.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep4 = document.createElement("hr");
      sep4.style.margin = "4px 0";
      sep4.style.border = "none";
      sep4.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep4);

      // 새 집단 역방향
      templates.bird_good_evil_reverse.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep5 = document.createElement("hr");
      sep5.style.margin = "4px 0";
      sep5.style.border = "none";
      sep5.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep5);

      // 물고기 집단 순방향
      templates.fish_good_evil_forward.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep6 = document.createElement("hr");
      sep6.style.margin = "4px 0";
      sep6.style.border = "none";
      sep6.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep6);

      // 물고기 집단 역방향
      templates.fish_good_evil_reverse.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep7 = document.createElement("hr");
      sep7.style.margin = "4px 0";
      sep7.style.border = "none";
      sep7.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep7);

      // 개 집단 순방향
      templates.dog_good_evil_forward.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep8 = document.createElement("hr");
      sep8.style.margin = "4px 0";
      sep8.style.border = "none";
      sep8.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep8);

      // 개 집단 역방향
      templates.dog_good_evil_reverse.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      // 마르크스 공리가 있으면 추가
      if (
        currentAxioms.some(
          (axiom) => axiom.includes("브루주아") || axiom.includes("Bourgeois")
        )
      ) {
        const sep9 = document.createElement("hr");
        sep9.style.margin = "4px 0";
        sep9.style.border = "none";
        sep9.style.borderTop = "1px solid #ccc";
        axiomContainer.appendChild(sep9);

        currentAxioms
          .filter(
            (axiom) => axiom.includes("브루주아") || axiom.includes("Bourgeois")
          )
          .forEach((axiomText) => {
            const p = document.createElement("p");
            p.textContent = `• ${axiomText}`;
            axiomContainer.appendChild(p);
          });
      }
    }
  } else {
    // 기존 방식 (하위 호환성)
    currentAxioms.forEach((axiomText) => {
      const p = document.createElement("p");
      p.textContent = `• ${axiomText}`;
      axiomContainer.appendChild(p);
    });
  }

  details.appendChild(axiomContainer);
  liAxiom.appendChild(details);
  trueList_El.appendChild(liAxiom);

  truePropositions.forEach((propData) => {
    if (propData.source === "nietzsche_ability") {
      console.log("니체 명제 렌더링 시점: ", propData);
    }
    const li = document.createElement("li");

    // 이제 propData에 ID가 있는지, 그리고 그 ID가 비활성화 목록에 있는지 확인합니다.
    const isDisabled =
      propData.propId &&
      socratesDisabledProps.some((dp) => dp.propId === propData.propId);

    if (isDisabled) {
      li.classList.add("socrates-disabled");
    }

    if (propData.type === "victory") {
      li.classList.add("victory-condition");

      if (propData.source === "marx_revolution") {
        li.classList.add("marx-victory-condition");
      }
      const ownerName = getLastName(
        propData.owner === "A"
          ? playerA_Data.name[currentLang.langCode]
          : playerB_Data.name[currentLang.langCode]
      );
      const ownerPrefix =
        propData.owner === "A" ? `⚪️ ${ownerName}` : `⚫️ ${ownerName}`;
      li.innerHTML = currentLang.labels.victory_text
        .replace("{owner}", ownerPrefix)
        .replace("{text}", propData.text);
    } else if (propData.type === "user-made") {
      // 1. 모든 'user-made' 명제에 대해 단어 색상을 먼저 입힙니다.
      if (propData.original_cards && propData.original_cards.length > 0) {
        propData.original_cards.forEach((info) => {
          const wordSpan = document.createElement("span");
          wordSpan.textContent = info.card.text + " ";
          wordSpan.className = info.player === "A" ? "word-a" : "word-b";
          li.appendChild(wordSpan);
        });
      } else if (propData.proposition) {
        li.textContent = propositionToPlainText(propData.proposition);
      }

      // 2. 만약 니체의 능력으로 만들어진 명제라면, 스타일 클래스와 라벨을 추가합니다.
      if (propData.source === "nietzsche_ability") {
        li.classList.add("nietzsche-theorem"); // [추가] 니체 명제에 전용 클래스 추가

        const rawLabel = currentLang.labels.nietzsche_ability_source;
        const labelText = rawLabel.replace("{text}", "").trim();

        const labelSpan = document.createElement("span");
        labelSpan.textContent = ` ${labelText}`;
        li.appendChild(labelSpan);
      }
    } else if (propData.type === "theorem") {
      let theoremText = propositionToPlainText(propData.proposition);

      // 2. 정규식을 사용하여 모든 괄호를 제거합니다.
      let strippedText = theoremText.replace(/\(|\)/g, "");

      // 3. 능력의 종류에 따라 적절한 라벨을 붙여 최종 텍스트를 완성합니다.
      if (propData.source === "plato_ability") {
        li.classList.add("plato-theorem");
        li.textContent = currentLang.labels.plato_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else if (propData.source === "wittgenstein_ability") {
        li.classList.add("wittgenstein-theorem");
        li.textContent = currentLang.labels.wittgenstein_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else if (propData.source === "derrida_ability") {
        li.classList.add("derrida-theorem");
        li.textContent = currentLang.labels.derrida_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else if (propData.source === "hume_ability") {
        li.classList.add("hume-theorem");
        li.textContent = currentLang.labels.hume_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else if (propData.source === "kuhn_ability") {
        li.classList.add("kuhn-theorem");
        li.textContent = currentLang.labels.kuhn_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else if (propData.source === "kant_ability") {
        li.classList.add("kant-theorem");
        li.textContent = currentLang.labels.kant_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else {
        // 일반적인 정리일 경우
        li.classList.add("theorem");
        li.textContent = currentLang.labels.theorem_source
          .replace("{text}", strippedText) // 괄호가 모두 제거된 텍스트 사용
          .replace("{round}", propData.round);
      }
    }

    if (isDisabled) {
      li.textContent +=
        currentLang.langCode === "ko"
          ? " (무지의 자각)"
          : " (Awareness of Ignorance)";
    }

    trueList_El.appendChild(li);
  });

  const playerATitleBox = document.querySelector(
    "#player-a-area .player-title-box"
  );
  const playerBTitleBox = document.querySelector(
    "#player-b-area .player-title-box"
  );

  if (playerATitleBox && playerBTitleBox) {
    // 사유 시간인지 일반 턴인지에 따라 현재 활성화된 플레이어를 결정
    const activePlayer = isThinkingTime ? thinkingTimeTurn : currentPlayer;

    // 게임오버가 아닐 때, 활성화된 플레이어에게만 'active-turn' 클래스를 적용
    playerATitleBox.classList.toggle(
      "active-turn",
      activePlayer === "A" && !gameIsOver
    );
    playerBTitleBox.classList.toggle(
      "active-turn",
      activePlayer === "B" && !gameIsOver
    );
  }

  const statusEl = document.getElementById("status");
  const mainCenter = document.querySelector(".main-center-bg");

  if (mainCenter && !mainCenter.classList.contains("hidden")) {
    statusEl.innerHTML = "";
  } else {
    const playerAreaA = document.getElementById("player-a-area"),
      playerAreaB = document.getElementById("player-b-area");
    const eurekaBtnA = document.getElementById("eureka-a"),
      eurekaBtnB = document.getElementById("eureka-b");
    const completeBtn = document.getElementById("complete-btn"),
      undoBtn = document.getElementById("undo-btn"),
      endTurnBtn = document.getElementById("end-turn-btn");

    let winnerName = "";
    if (gameIsOver) {
      statusEl.style.color = "#c0392b";
      playerAreaA.classList.add("disabled");
      playerAreaB.classList.add("disabled");
      eurekaBtnA.disabled = true;
      eurekaBtnB.disabled = true;
      completeBtn.disabled = true;
      undoBtn.disabled = true;
      endTurnBtn.disabled = true;
    } else if (isThinkingTime) {
      // 1. 전용 UI의 제목과 설명을 업데이트합니다.
      document.getElementById("thinking-time-title").textContent =
        currentLang.ui.thinkingTimeTitle;
      document.getElementById("thinking-time-desc").innerHTML =
        currentLang.ui.thinkingTimeDesc;

      // 2. 하단 상태바에 현재 턴인 플레이어를 표시합니다.
      const thinkingPlayerName = getLastName(
        thinkingTimeTurn === "A"
          ? playerA_Data.name[currentLang.langCode]
          : playerB_Data.name[currentLang.langCode]
      );
      const thinkingPlayerColor = thinkingTimeTurn === "A" ? "⚪️" : "⚫️";
      statusEl.innerHTML = `<span class="turn-indicator">${thinkingPlayerColor} ${thinkingPlayerName}${currentLang.ui.thinkingTimeTurnMessage}</span>`;

      // 3. 현재 턴인 플레이어의 영역만 활성화합니다.
      if (thinkingTimeTurn === "A") {
        playerAreaA.classList.remove("disabled");
        playerAreaB.classList.add("disabled");
        eurekaBtnA.disabled = gameMode === "AI" && aiPlayer === "A";
        eurekaBtnB.disabled = true;
      } else {
        // thinkingTimeTurn === 'B'
        playerAreaA.classList.add("disabled");
        playerAreaB.classList.remove("disabled");
        eurekaBtnA.disabled = true;
        eurekaBtnB.disabled = gameMode === "AI" && aiPlayer === "B";
      }

      // '유레카!' 버튼 텍스트를 '정리 추가'로 변경합니다.
      eurekaBtnA.textContent = currentLang.ui.addTheoremButton;
      eurekaBtnB.textContent = currentLang.ui.addTheoremButton;

      // 4. 중앙 하단의 컨트롤 버튼 상태를 설정합니다.
      // '명제 완성', '되돌리기' 버튼은 비활성화하고, '턴 종료' 버튼은 활성화합니다.
      completeBtn.disabled = true;
      undoBtn.disabled = true;
      endTurnBtn.disabled =
        (gameMode === "AI" && thinkingTimeTurn === aiPlayer) ||
        (inTutorialMode && thinkingTimeTurn !== "A");
    } else {
      statusEl.style.color = "#333";
      eurekaBtnA.textContent = currentLang.ui.eurekaButton;
      eurekaBtnB.textContent = currentLang.ui.eurekaButton;
      const isAITurn = gameMode === "AI" && currentPlayer === aiPlayer;
      const isCompletable =
        currentProposition.length > 0 &&
        parsePropositionFromCards(currentProposition) !== null;

      if (isAITurn) {
        statusEl.innerHTML = `<span class="turn-indicator">${currentLang.ui.statusAITurn}</span>`;
        playerAreaA.classList.add("disabled");
        playerAreaB.classList.add("disabled");
        eurekaBtnA.disabled = true;
        eurekaBtnB.disabled = true;
        completeBtn.disabled = true;
        undoBtn.disabled = true;
        endTurnBtn.disabled = true;
      } else {
        if (currentPlayer === "A") {
          const playerAName = playerA_Data
            ? getLastName(playerA_Data.name[currentLang.langCode])
            : currentLang.ui.playerAName;
          statusEl.innerHTML = `<span class="turn-indicator">⚪️ ${playerAName}${currentLang.ui.statusTurn}</span>`;
          playerAreaA.classList.remove("disabled");
          playerAreaB.classList.add("disabled");
          // ⭐️ 핵심 수정: eurekaUsedInRound['A']가 true이면 버튼 비활성화
          eurekaBtnA.disabled = eurekaUsedInRound["A"];
          eurekaBtnB.disabled = true;
        } else {
          const playerBName = playerB_Data
            ? getLastName(playerB_Data.name[currentLang.langCode])
            : currentLang.ui.playerBName;
          statusEl.innerHTML = `<span class="turn-indicator">⚫️ ${playerBName}${currentLang.ui.statusTurn}</span>`;
          playerAreaB.classList.remove("disabled");
          playerAreaA.classList.add("disabled");
          eurekaBtnA.disabled = true;
          // ⭐️ 핵심 수정: eurekaUsedInRound['B']가 true이면 버튼 비활성화
          eurekaBtnB.disabled = eurekaUsedInRound["B"];
        }
        completeBtn.disabled =
          !isCompletable || lastCardPlayer === currentPlayer;
        undoBtn.disabled = cardsPlayedThisTurn[currentPlayer] === 0;
        endTurnBtn.disabled = cardsPlayedThisTurn[currentPlayer] === 0;
      }
    }
    updateAbilityButtonsState();
  }
}

document.getElementById("vs-player-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  // ✅ 1인 대전과 마찬가지로 새로운 캐릭터 선택 함수를 호출합니다.
  startCharacterSelection("2P");
});
document.getElementById("vs-ai-btn").addEventListener("click", () => {
  if (inTutorialMode || gameMode === "AI") return;
  document.querySelector(".main-center-bg").classList.add("hidden"); // 메인 센터 숨김
  document.getElementById("credits-btn").classList.add("hidden");
  document.getElementById("character-select-modal").classList.add("visible");
});

document.getElementById("vs-player-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  // ✅ 1인 대전과 마찬가지로 새로운 캐릭터 선택 함수를 호출합니다.
  startCharacterSelection("2P");
});
document.getElementById("vs-ai-btn").addEventListener("click", () => {
  if (inTutorialMode || gameMode === "AI") return;
  document.querySelector(".main-center-bg").classList.add("hidden");
  document.getElementById("credits-btn").classList.add("hidden");
  updateMainMenuBtnVisibility();
  document.getElementById("character-select-modal").classList.add("visible");
});

document.getElementById("main-menu-btn").addEventListener("click", () => {
  // 1. 튜토리얼 중이었다면 튜토리얼을 종료하고 메인 메뉴로 갑니다.
  if (inTutorialMode) {
    endTutorial(); // endTutorial 함수가 음악 전환을 포함한 모든 것을 처리합니다.
    return;
  }
  isTestMode = false;

  // 2. 게임 상태를 초기화합니다.
  clearAllAITimeouts();
  aiPlayer = null;
  gameMode = null;
  gameIsOver = true; // 게임이 끝났음을 명시

  // 3. 메인 메뉴 UI를 표시하고 관련 음악을 재생합니다.
  // 이 함수가 게임 음악 fade-out과 메뉴 음악 fade-in을 모두 담당합니다.
  showMainMenu();
});
document.getElementById("vs-player-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  // ✅ 1인 대전과 마찬가지로 새로운 캐릭터 선택 함수를 호출합니다.
  startCharacterSelection("2P");
});
document.getElementById("vs-ai-btn").addEventListener("click", () => {
  if (inTutorialMode || gameMode === "AI") return;
  document.querySelector(".main-center-bg").classList.add("hidden");
  document.getElementById("credits-btn").classList.add("hidden");
  updateMainMenuBtnVisibility();
  updateMainCenterVisibility();
  document.getElementById("character-select-modal").classList.add("visible");
});

// 초기화 시에도 호출
updateMainCenterVisibility();

// 초기화 시에도 호출
updateMainMenuBtnVisibility();

function clearAllAITimeouts() {
  if (aiTimeoutId) {
    clearTimeout(aiTimeoutId);
    aiTimeoutId = null;
  }
}
function goToMainMenu() {
  isTestMode = false;

  document.getElementById("character-selection-screen").classList.add("hidden");
  document.getElementById("character-select-indicator").classList.add("hidden");
  document.getElementById("turn-order-modal").classList.remove("visible");

  showMainMenu();

  tempSelections = { p1: null, p2: null };
  characterSelectionTurn = null;
  selectionMode = null;
  gameMode = null;
  aiPlayer = null;
  humanPlayerId = null;

  clearAllAITimeouts();
}

function promptAndSetupTestGame(selectedCharacters) {
  try {
    const victoryA = prompt(
      "플레이어 A(1P)의 승리 조건 서술어를 입력하세요. (예: 선하다, is wise)"
    );
    const victoryB = prompt(
      "플레이어 B(AI)의 승리 조건 서술어를 입력하세요. (예: 악하다, is evil)"
    );
    const handA = prompt(
      "플레이어 A의 초기 손패를 쉼표(,)로 구분하여 입력하세요. (예: 소크라테스는, 지혜롭다, 라면)"
    );
    const handB = prompt(
      "플레이어 B의 초기 손패를 쉼표(,)로 구분하여 입력하세요."
    );
    const trueProps = prompt(
      "초기 참 명제들을 세미콜론(;)으로 구분하여 입력하세요. (없으면 비워두세요)"
    );

    const testConfig = {
      victoryA: victoryA || null,
      victoryB: victoryB || null,
      handA: handA || null,
      handB: handB || null,
      trueProps: trueProps || null,
    };

    resetGame(selectedCharacters, testConfig); // 입력받은 설정으로 resetGame 호출
  } catch (e) {
    console.error("테스트 모드 설정 중 오류 발생:", e);
    alert("테스트 모드 설정 중 오류가 발생했습니다. 메인 메뉴로 돌아갑니다.");
    goToMainMenu();
  }
}

setupEventListeners();
