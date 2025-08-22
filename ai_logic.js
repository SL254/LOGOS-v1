// --- AI Mode State ---
let gameMode = null;
let playerCharacter = null;
let aiPlayer = null;
let activeGambitPlan = null;

function getLastName(fullName) {
  if (!fullName) return "";
  const parts = fullName.split(" ");
  return parts[parts.length - 1];
}

/**
 * 상대방의 손패를 분석하여 위협적인 카드 정보를 반환합니다.
 * @param {Array} opponentHand - 상대방의 카드 객체 배열.
 * @param {string} myCorePredicate - AI의 승리 조건과 직결된 핵심 서술어.
 * @param {object} langData - 현재 언어 설정 데이터 (TEXTS.ko 또는 TEXTS.en).
 * @returns {{hasNegation: boolean, hasContradictoryToMyWinCon: boolean}}
 * - hasNegation: 부정 카드('는 거짓이다') 존재 여부
 * - hasContradictoryToMyWinCon: AI의 승리 조건과 모순되는 서술어 존재 여부
 */
function analyzeOpponentThreats(opponentHand, myCorePredicate, langData) {
  const threats = {
    hasNegation: false,
    hasContradictoryToMyWinCon: false,
  };

  // AI의 핵심 서술어와 모순되는 서술어 찾기
  let contradictoryPredicate = null;
  const predicatePairs = langData.contradictoryPredicates;
  for (const key in predicatePairs) {
    if (key === myCorePredicate) {
      contradictoryPredicate = predicatePairs[key];
      break;
    }
    if (predicatePairs[key] === myCorePredicate) {
      contradictoryPredicate = key;
      break;
    }
  }

  // 상대방 손패 순회
  for (const card of opponentHand) {
    // 부정 카드 확인
    if (card.text === langData.keywords.not) {
      threats.hasNegation = true;
    }
    // AI 승리 조건과 모순되는 서술어 카드 확인
    if (
      card.type === langData.cardTypes[3] /* 서술어 or Predicate */ &&
      card.text === contradictoryPredicate
    ) {
      threats.hasContradictoryToMyWinCon = true;
    }
  }

  return threats;
}

/**
 * AI의 승리 조건을 달성하기 위한 모든 잠재적 '계획'을 생성하고 점수를 매기는 함수
 * @returns {object | null} 가장 점수가 높은 최적의 계획 객체 또는 null
 */
function generateAndScorePlans() {
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === aiPlayer
  );
  if (!myVictoryData) return null;
  const goalPredicate = myVictoryData.core_goal.predicate;

  // '모든 [개체]는 ...' 이 이미 참 명제 목록에 있는 경우만 찾습니다.
  const allUniversalProps = internalTruthSet.filter(
    (p) => p.type === "universal"
  );
  if (allUniversalProps.length === 0) return null;

  // 예: '모든 개는 동물이다'가 참일 때, '소크라테스는 개이다'만 만들면 이길 수 있는 계획
  for (const universalProp of allUniversalProps) {
    // 만약 '모든 [A]는 [나의 승리서술어]' 형태의 명제가 이미 있다면,
    if (universalProp.predicate === goalPredicate) {
      const entityText = universalProp.entity; // 예: '개는'
      let predicateText; // 서술어 텍스트를 담을 변수 선언

      if (currentLang.langCode === "ko") {
        // 한국어 모드: 기존 로직을 유지 (완벽하진 않지만 의도는 보존)
        // "개는" -> "개이다"
        predicateText = entityText.replace(/는$/, "이다");
      } else {
        // 영어 모드: 새로운 변환 규칙 적용
        // "dog" -> "is a dog"
        predicateText = "is a " + entityText;
      }

      // 완성된 서술어를 사용해 최종 명제를 구성
      const neededPropText = `${myVictoryData.core_goal.subject} ${predicateText}`;
      const neededProp = parsePropositionFromString(neededPropText);

      // 그 명제가 아직 참이 아니라면, 이것을 최우선 계획으로 삼습니다.
      if (
        neededProp &&
        !internalTruthSet.some((p) => arePropositionsEqual(p, neededProp))
      ) {
        return {
          name: `FINISH_HIM_${entityText}`,
          score: 9000, // 압도적인 점수
          // 실행 로직은 aiTurn에서 직접 처리하므로, 여기서는 목표만 제시
          targetPropositionText: neededPropText,
        };
      }
    }
  }
  return null;
}
function aiThinkingTimeTurn() {
  const summaryActions = []; // 이번 턴에 AI가 수행한 모든 행동을 기록
  const aiPhilosopherData =
    thinkingTimeTurn === "A" ? playerA_Data : playerB_Data;
  const philosopherId = aiPhilosopherData.id;

  // 1단계: 새로운 정리 도출 시도
  const candidateTheorems = generateCandidateTheorems();
  if (candidateTheorems.length > 0) {
    const scoredTheorems = scoreCandidateTheorems(candidateTheorems);
    const theoremActions = executeTheoremDerivation(scoredTheorems);
    if (theoremActions.length > 0) {
      summaryActions.push(...theoremActions);
    }
  }

  // --- 2단계: 능력 사용 로직 (수정된 부분) ---

  // 플라톤 능력 체크 (단일 사용)
  if (philosopherId === "plato") {
    if (!abilityUsedState[thinkingTimeTurn]?.used) {
      // 👈 수정
      const abilityAction = executePlatoAbilityCheck(thinkingTimeTurn);
      if (abilityAction) {
        summaryActions.push(abilityAction);
      }
    }
  }

  // 소크라테스 능력 체크 (다중 사용)
  if (philosopherId === "socrates") {
    while (
      abilityUsedState[thinkingTimeTurn] && // 👈 수정
      abilityUsedState[thinkingTimeTurn].usedCount < // 👈 수정
        abilityUsedState[thinkingTimeTurn].maxUses // 👈 수정
    ) {
      const abilityAction = executeSocratesAbilityCheck(thinkingTimeTurn);
      if (abilityAction) {
        summaryActions.push(abilityAction);
      } else {
        break;
      }
    }
  }

  // 데카르트 능력 체크 (단일 사용)
  if (philosopherId === "descartes") {
    if (!abilityUsedState[thinkingTimeTurn]?.used) {
      // 👈 수정
      const abilityAction = executeDescartesAbilityCheck(thinkingTimeTurn);
      if (abilityAction) {
        summaryActions.push(abilityAction);
      }
    }
  }
  // 흄 능력 체크 (2회 사용)
  if (philosopherId === "hume") {
    while (
      abilityUsedState[thinkingTimeTurn] && // 👈 수정
      abilityUsedState[thinkingTimeTurn].usedCount < // 👈 수정
        abilityUsedState[thinkingTimeTurn].maxUses // 👈 수정
    ) {
      const abilityAction = executeHumeAbilityCheck(thinkingTimeTurn);
      if (abilityAction) {
        summaryActions.push(abilityAction);
      } else {
        break;
      }
    }
  }
  if (philosopherId === "wittgenstein") {
    if (!abilityUsedState[thinkingTimeTurn]?.used) {
      // 👈 수정
      const abilityAction = executeWittgensteinAbilityCheck(thinkingTimeTurn);
      if (abilityAction) {
        summaryActions.push(abilityAction);
      }
    }
  }
  if (philosopherId === "kuhn") {
    if (!abilityUsedState[thinkingTimeTurn]?.used) {
      // 👈 수정
      const abilityAction = executeKuhnAbilityCheck(thinkingTimeTurn);
      if (abilityAction) {
        summaryActions.push(abilityAction);
      }
    }
  }
  // 데리다 능력 체크 (단일 사용)
  if (philosopherId === "derrida") {
    if (!abilityUsedState[thinkingTimeTurn]?.used) {
      // 👈 수정
      const abilityAction = executeDerridaAbilityCheck(thinkingTimeTurn);
      if (abilityAction) {
        summaryActions.push(abilityAction);
      }
    }
  }
  if (philosopherId === "kant") {
    if (!abilityUsedState[thinkingTimeTurn]?.used) {
      // 👈 수정
      const kantAction = executeKantAbilityCheck(thinkingTimeTurn);
      if (kantAction) {
        summaryActions.push(kantAction);
      }
    }
  }

  // ... 여기에 다른 철학자들의 능력 체크 로직 추가 가능 ...

  // 3단계: 최종적으로 게임 상태를 렌더링하고 턴을 넘김
  render();

  if (summaryActions.length > 0) {
    if (gameMode === "AI_VS_AI") {
      endTurn();
    } else {
      showAITurnSummary(summaryActions);
    }
  } else {
    console.log("AI found no valuable actions. Passing turn.");
    endTurn();
  }
}
function generateCandidateTheorems() {
  const knownTruths = [...internalTruthSet];
  const candidates = new Map(); // Map을 사용해 이번 턴에 중복 생성되는 것만 막습니다.

  // 후보 목록에 '새로운' 정리만 추가하던 기존 로직을 수정합니다.
  const addCandidate = (prop) => {
    // 1. 유효한 명제인지, 그리고 이번 턴에서 이미 생성된 후보가 아닌지 확인
    if (prop) {
      const propText = propositionToNaturalText(prop);
      if (candidates.has(propText)) {
        return; // 이미 이번 턴에 고려된 후보이므로 중단
      }

      // 2. 이미 게임의 '참 명제 목록'에 존재하는지 확인 (핵심 수정)
      const isAlreadyKnown = truePropositions.some(
        (p) => p.proposition && arePropositionsEqual(p.proposition, prop)
      );
      // 3. 아직 알려지지 않은 새로운 명제일 경우에만 후보로 추가
      if (!isAlreadyKnown) {
        candidates.set(propText, prop);
      }
    }
  };

  // --- 이하 모든 추론 규칙 적용 로직은 기존과 동일합니다. ---

  // 1개의 전제가 필요한 규칙들
  for (const p1 of knownTruths) {
    const onePremiseRules = [
      doubleNegationElimination,
      conjunctionElimination,
      existentialInstantiation,
    ];
    for (const rule of onePremiseRules) {
      const results = rule(p1);
      if (results) {
        const resultArray = Array.isArray(results) ? results : [results];
        resultArray.forEach(addCandidate);
      }
    }
  }

  // 2개의 전제가 필요한 규칙들
  for (let i = 0; i < knownTruths.length; i++) {
    for (let j = 0; j < knownTruths.length; j++) {
      if (i === j) continue;
      const p1 = knownTruths[i];
      const p2 = knownTruths[j];
      const twoPremiseRules = [
        modusPonens,
        modusTollens,
        hypotheticalSyllogism,
        disjunctiveSyllogism,
        universalApplication,
      ];
      for (const rule of twoPremiseRules) {
        const result = rule(p1, p2);
        addCandidate(result);
      }
    }
  }

  // 3개의 전제가 필요한 규칙 (경우 논증)
  const disjunctions = knownTruths.filter((p) => p.type === "disjunction");
  const conditionals = knownTruths.filter((p) => p.type === "conditional");

  if (disjunctions.length > 0 && conditionals.length >= 2) {
    for (const dis of disjunctions) {
      for (let i = 0; i < conditionals.length; i++) {
        for (let j = i + 1; j < conditionals.length; j++) {
          const result = proofByCases(dis, conditionals[i], conditionals[j]);
          addCandidate(result);
        }
      }
    }
  }

  console.log(
    "Generated Candidate Theorems:",
    Array.from(candidates.values()).map((p) => propositionToNaturalText(p))
  );
  return Array.from(candidates.values());
}

function scoreCandidateTheorems(candidates) {
  const opponentPlayer = thinkingTimeTurn === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === thinkingTimeTurn
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponentPlayer
  );

  if (!myVictoryData || !opponentVictoryData) return [];

  const myCoreGoal = myVictoryData.core_goal;
  const myUltimateGoal = myVictoryData.ultimate_target;

  const opponentCoreGoal = opponentVictoryData.core_goal;
  const opponentUltimateGoal = opponentVictoryData.ultimate_target;
  const opponentLossCondition = {
    type: "negation",
    proposition: opponentUltimateGoal,
  };

  const opponentDefeatPredicate =
    currentLang.contradictoryPredicates[opponentCoreGoal.predicate] ||
    Object.keys(currentLang.contradictoryPredicates).find(
      (key) =>
        currentLang.contradictoryPredicates[key] === opponentCoreGoal.predicate
    );

  const scored = candidates.map((candidate) => {
    let score = 10;

    if (arePropositionsEqual(candidate, myUltimateGoal)) score += 1000000;
    if (arePropositionsEqual(candidate, opponentLossCondition))
      score += 1000000;

    if (arePropositionsEqual(candidate, opponentUltimateGoal)) score -= 500000;

    if (arePropositionsEqual(candidate, myCoreGoal)) score += 500;
    if (arePropositionsEqual(candidate, opponentCoreGoal)) score -= 1000;

    if (candidate.type === "universal") {
      if (candidate.predicate === myCoreGoal.predicate) {
        score += 200;
      }
      if (
        opponentDefeatPredicate &&
        candidate.predicate === opponentDefeatPredicate
      ) {
        score += 200;
      }
      if (candidate.predicate === opponentCoreGoal.predicate) {
        score -= 400;
      }
    } else if (candidate.type === "existential") {
      if (candidate.predicate === myCoreGoal.predicate) {
        score += 200;
      }
      if (
        opponentDefeatPredicate &&
        candidate.predicate === opponentDefeatPredicate
      ) {
        score += 200;
      }
      if (candidate.predicate === opponentCoreGoal.predicate) {
        score -= 400;
      }
    }

    const simulatedTruths = [...internalTruthSet, candidate];
    if (aiFindProof(opponentUltimateGoal, simulatedTruths)) {
      score -= 2000;
    }

    return { proposition: candidate, score: score };
  });

  scored.sort((a, b) => b.score - a.score);
  console.log("Scored Theorems:", scored);
  return scored;
}
function executeTheoremDerivation(scoredTheorems) {
  const MINIMUM_SCORE_THRESHOLD = 50;
  const actions = [];
  const addedThisTurn = [];

  for (const scoredTheorem of scoredTheorems) {
    if (scoredTheorem.score >= MINIMUM_SCORE_THRESHOLD) {
      const candidateProp = scoredTheorem.proposition;
      const isDuplicateThisTurn = addedThisTurn.some((p) =>
        arePropositionsEqual(p, candidateProp)
      );
      if (isDuplicateThisTurn) {
        continue;
      }

      actions.push({ type: "theorem", proposition: candidateProp });
      truePropositions.push({
        propId: `prop_${Date.now()}_${Math.random()}`,
        type: "theorem",
        round: currentRound,
        proposition: candidateProp,
      });
      addedThisTurn.push(candidateProp);
    }
  }
  return actions; // 실행한 행동 목록을 반환
}
function showAITurnSummary(actions) {
  const modal = document.getElementById("ai-turn-summary-modal");
  const titleEl = document.getElementById("ai-summary-title");
  const contentEl = document.getElementById("ai-summary-content");
  const okBtn = document.getElementById("ai-summary-ok-btn");

  // 모달 내용 초기화
  contentEl.innerHTML = "";
  okBtn.textContent = currentLang.ui.okButton;

  // 제목 설정
  titleEl.textContent = currentLang.ui.aiSummaryTitleDefault; // 기본 제목

  // 행동 내역에 따라 내용 채우기 (확장성 고려)
  actions.forEach((action) => {
    const p = document.createElement("p");
    switch (action.type) {
      case "theorem":
        titleEl.textContent = currentLang.ui.aiSummaryTitleTheorem;
        p.innerHTML = `<strong>${
          currentLang.ui.theoremLabel
        }</strong> ${propositionToNaturalText(action.proposition)}`;
        break;
      case "ability":
        titleEl.textContent = currentLang.ui.aiSummaryTitleAbility;
        p.innerHTML = `<strong>${currentLang.ui.abilityLabel}</strong> ${action.description}`;
        break;
      // 향후 다른 행동 유형 추가 가능
    }
    contentEl.appendChild(p);
  });

  // 확인 버튼 클릭 이벤트 설정 (기존 리스너 제거 후 새로 추가)
  const newOkBtn = okBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(newOkBtn, okBtn);

  newOkBtn.addEventListener("click", () => {
    modal.classList.remove("visible");
    // ★★★ 중요: 모달을 닫은 후에 턴을 종료합니다.
    endTurn();
  });

  modal.classList.add("visible");
}

function isBoardDangerous(opponentVictoryData) {
  if (currentProposition.length === 0) return null;
  const parsedProp = parsePropositionFromCards(currentProposition);
  if (!parsedProp || !opponentVictoryData) return null;

  // 위협 유형 1: 상대의 핵심 승리 조건과 '직접 일치'하는 경우
  if (arePropositionsEqual(parsedProp, opponentVictoryData.core_goal)) {
    console.log("Threat Detected (Type 1: Direct Match)");
    return parsedProp;
  }

  // 위협 유형 2: 이 명제를 참으로 인정할 경우, 상대의 승리가 '추론 가능'해지는 경우
  const simulatedTruths = [...internalTruthSet, parsedProp];
  if (aiFindProof(opponentVictoryData.ultimate_target, simulatedTruths)) {
    console.log("Threat Detected (Type 2: Inferred Defeat)");
    return parsedProp;
  }

  return null;
}

function isBoardCompletable() {
  // 명제판에 카드가 없으면 완성 불가능
  if (currentProposition.length === 0) return false;
  // AI 자신이 마지막 카드를 냈다면 완성 불가능 (상대 턴에만 완성 가능)
  if (lastCardPlayer === aiPlayer) return false;

  // 문법적으로 완성 가능한 명제인지 확인
  const parsedProp = parsePropositionFromCards(currentProposition);
  return parsedProp !== null;
}

function assessOpponentAdvantage(proposition, opponentVictoryData) {
  if (!proposition || !opponentVictoryData) return 0;

  // ★★★ 핵심 수정: 평가 전에 명제를 정규화합니다. ★★★
  const normalizedProp = normalizeProposition(proposition);

  let penalty = 0;
  const opponentCoreGoal = opponentVictoryData.core_goal;
  const opponentSubject = opponentCoreGoal.subject;
  const opponentPredicate = opponentCoreGoal.predicate;

  if (normalizedProp.type === "atomic") {
    if (
      normalizedProp.subject === opponentSubject &&
      normalizedProp.predicate === opponentPredicate
    ) {
      penalty += 1500;
    }
  } else if (
    normalizedProp.type === "existential" ||
    normalizedProp.type === "universal"
  ) {
    if (normalizedProp.predicate === opponentPredicate) {
      penalty += normalizedProp.type === "universal" ? 3000 : 1800;
    }
  }
  return penalty;
}
function aiCanActuallyComplete() {
  if (!isBoardCompletable()) return false;

  const propToComplete = parsePropositionFromCards(currentProposition);
  if (!propToComplete) return false;

  const aiPhilosopherId =
    currentPlayer === "A" ? playerA_Data.id : playerB_Data.id;
  if (aiPhilosopherId !== "nietzsche") {
    const isAxiom = parsedAxioms.some((a) =>
      arePropositionsEqual(a.proposition, propToComplete)
    );
    const isAlreadyProven = truePropositions.some(
      (p) =>
        p.proposition && arePropositionsEqual(p.proposition, propToComplete)
    );
    if (isAxiom || isAlreadyProven) {
      return false;
    }
  }

  // 모순 검사는 니체를 포함한 모든 철학자에게 동일하게 적용됩니다.
  const verificationResult = verifyAndExpandTruths(propToComplete);
  return verificationResult.success;
}

function isImmediateWinSecure(opponentHand, aiHand, langData) {
  const { if: ifKeyword, or: orKeyword, not: notKeyword } = langData.keywords;

  // 조건 1: 상대 핸드에 '라면' 또는 '또는' 카드가 있어서 명제를 이어갈 수 있는지 확인
  const opponentCanExtend = opponentHand.some(
    (card) => card.text === ifKeyword || card.text === orKeyword
  );

  if (opponentCanExtend) {
    // 상대가 명제를 연장하여 턴을 넘길 수 있다면, 즉시 승리가 아님
    return false;
  }

  // 조건 2: 상대의 부정 카드('는 거짓이다') 보유 여부 확인
  const opponentHasNot = opponentHand.some((card) => card.text === notKeyword);

  if (!opponentHasNot) {
    // 상대에게 부정 카드가 없으면, 내 승리를 막을 수 없으므로 안전함
    return true;
  } else {
    // 상대에게 부정 카드가 있다면, 나에게도 부정 카드가 있어야만 안전함
    // (상대의 부정을 나의 이중 부정으로 되받아칠 수 있기 때문)
    const aiHasNot = aiHand.some((card) => card.text === notKeyword);
    return aiHasNot;
  }
}

function checkForGuaranteedWinMove() {
  // 1. 기본 조건 확인: 명제판에 카드가 2장 이상 있어야 함
  if (currentProposition.length < 2) {
    return null;
  }

  const propLength = currentProposition.length;
  const lastCardInfo = currentProposition[propLength - 1];
  const secondLastCardInfo = currentProposition[propLength - 2];

  // 2. '는 거짓이다' 카드 보유 상황 대칭성 확인
  const { not: notKeyword } = currentLang.keywords;
  const aiHand = currentPlayer === "A" ? playerA_Hand : playerB_Hand;
  const opponentHand = currentPlayer === "A" ? playerB_Hand : playerA_Hand;

  const aiHasNot = aiHand.some((card) => card.text === notKeyword);
  const opponentHasNot = opponentHand.some((card) => card.text === notKeyword);

  if (aiHasNot !== opponentHasNot) {
    return null;
  }

  // 3. 마지막 카드가 '나' 또는 '상대'의 이름(고유명사)인지 확인
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === currentPlayer
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner !== currentPlayer
  );

  if (!myVictoryData || !opponentVictoryData) return null;

  const mySubject = myVictoryData.core_goal.subject;
  const opponentSubject = opponentVictoryData.core_goal.subject;

  if (
    lastCardInfo.card.type !==
      (currentLang.langCode === "ko" ? "고유명사" : "Proper Noun") ||
    (lastCardInfo.card.text !== mySubject &&
      lastCardInfo.card.text !== opponentSubject)
  ) {
    return null;
  }

  // 4. 3가지 패턴 확인
  const {
    and: andKeyword,
    if: ifKeyword,
    or: orKeyword,
  } = currentLang.keywords;
  let isWinningOpportunity = false;

  // 패턴 1: ... 그리고 [이름]
  if (secondLastCardInfo.card.text === andKeyword) {
    isWinningOpportunity = true;
  } else {
    const firstPartCards = currentProposition.slice(0, propLength - 2);
    const parsedFirstPart = parsePropositionFromCards(firstPartCards);

    if (parsedFirstPart) {
      // 패턴 2: (참인 명제) 라면 [이름]
      if (
        secondLastCardInfo.card.text === ifKeyword &&
        aiFindProof(parsedFirstPart, internalTruthSet)
      ) {
        isWinningOpportunity = true;
      }
      // 패턴 3: (거짓인 명제) 또는 [이름]
      else if (secondLastCardInfo.card.text === orKeyword) {
        const negationOfFirstPart = {
          type: "negation",
          proposition: parsedFirstPart,
        };
        if (aiFindProof(negationOfFirstPart, internalTruthSet)) {
          isWinningOpportunity = true;
        }
      }
    }
  }

  // 5. 기회가 맞다면, 상황에 맞는 올바른 술어 카드를 찾아 반환
  if (isWinningOpportunity) {
    const nameOnBoard = lastCardInfo.card.text;
    const myName = myVictoryData.core_goal.subject;
    let predicateToPlay = null;

    // Case 1: 명제판의 이름이 내 이름일 경우
    if (nameOnBoard === myName) {
      // 나의 승리 술어를 찾는다.
      predicateToPlay = myVictoryData.core_goal.predicate;
      console.log(
        `[AI Logic] Pattern matched with my name. Seeking predicate: ${predicateToPlay}`
      );
    }
    // Case 2: 명제판의 이름이 상대 이름일 경우
    else {
      // 상대의 승리 술어와 '반대'되는 술어를 찾는다.
      const opponentWinPredicate = opponentVictoryData.core_goal.predicate;
      const predicatePairs = currentLang.contradictoryPredicates;

      predicateToPlay =
        predicatePairs[opponentWinPredicate] ||
        Object.keys(predicatePairs).find(
          (key) => predicatePairs[key] === opponentWinPredicate
        );
      console.log(
        `[AI Logic] Pattern matched with opponent's name. Seeking contradictory predicate: ${predicateToPlay}`
      );
    }

    // 찾아낸 술어 카드가 내 손에 있는지 확인하고, 있다면 그 카드를 반환한다.
    if (predicateToPlay) {
      const winningMove = aiHand.find((card) => card.text === predicateToPlay);

      if (winningMove && isValidPlay(winningMove, currentProposition)) {
        console.log("확정 승리 패턴 발견! 승리 수를 둡니다.");
        return winningMove;
      }
    }
  }

  return null; // 조건에 맞지 않으면 null 반환
}

function scorePlans(plans, aiHand) {
  const aiHandTexts = aiHand.map((c) => c.text);

  const scored = plans.map((plan) => {
    let score = 500; // 계획이 존재 자체로 기본 점수 획득

    // 1. 계획의 단계가 짧을수록 높은 점수를 부여합니다. (단계당 200점 감점)
    score -= plan.steps.length * 200;

    // 2. 계획의 최종 단계를 손패의 카드로 완성할 수 있는지 확인합니다.
    const finalStep = plan.steps[plan.steps.length - 1];
    const finalStepText = propositionToNaturalText(finalStep);
    const cardsNeeded = finalStepText.split(" ");

    const canMakeFinalStep = cardsNeeded.every((cardText) =>
      aiHandTexts.includes(cardText)
    );

    if (canMakeFinalStep) {
      // 최종 단계를 완성할 카드를 모두 들고 있다면 매우 높은 보너스를 부여합니다.
      score += 1000;
    } else {
      // 계획의 마지막 단계를 완성할 수 없다면, 이 계획은 현재 실행 불가능합니다.
      // 점수를 매우 낮게 책정하여 선택되지 않도록 합니다.
      score = -1;
    }

    // 3. 현재 명제판의 상황을 고려하여 점수를 가감합니다.
    const currentBoardText = currentProposition
      .map((info) => info.card.text)
      .join(" ");
    if (currentBoardText === "") {
      // 명제판이 비어있다면, 계획을 바로 시작할 수 있으므로 약간의 보너스를 줍니다.
      score += 500;
    } else {
      // 명제판에 카드가 있을 때, 그 위에 바로 이어갈 수 있는 계획이라면 높은 보너스를 줍니다.
      if (finalStepText.startsWith(currentBoardText)) {
        score += 1000;
      }
    }

    plan.score = score;
    plan.targetPropositionText = finalStepText; // aiTurn에서 사용할 수 있도록 텍스트 저장

    return plan;
  });

  // 실행 불가능한 계획(점수 -1)을 걸러냅니다.
  return scored.filter((p) => p.score > 0);
}

function generateWinningPlan() {
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === currentPlayer
  );
  if (!myVictoryData) return null;

  const myCoreGoal = myVictoryData.core_goal;
  let allPossiblePlans = [];
  findAllProofPaths(myCoreGoal, [], allPossiblePlans, 0);

  if (allPossiblePlans.length === 0) return null;

  // 각 계획의 점수를 계산합니다.
  const scoredPlans = scorePlans(
    allPossiblePlans,
    currentPlayer === "A" ? playerA_Hand : playerB_Hand
  );

  if (scoredPlans.length === 0) return null;

  // 가장 점수가 높은 계획을 선택합니다.
  scoredPlans.sort((a, b) => b.score - a.score);
  return scoredPlans[0];
}

function findAllProofPaths(goal, path, allPlans, depth) {
  if (depth > 5) return; // 탐색 깊이 제한

  // 기저 조건 1: 목표가 이미 참으로 증명되었다면, 이 경로는 완전한 계획입니다.
  if (internalTruthSet.some((p) => arePropositionsEqual(p, goal))) {
    allPlans.push({ steps: [...path] }); // 더 이상 하위 목표가 필요 없습니다.
    return;
  }

  // 기저 조건 2: 목표를 현재 손패의 카드로 만들 수 있다면, 계획으로 간주합니다.
  const cardsNeededForGoal = propositionToNaturalText(goal).split(" ");
  const aiHand = (currentPlayer === "A" ? playerA_Hand : playerB_Hand).map(
    (c) => c.text
  );
  if (cardsNeededForGoal.every((card) => aiHand.includes(card))) {
    allPlans.push({ steps: [...path, goal] });
    return;
  }

  // 순환 경로 방지: 현재 찾으려는 목표가 이미 경로에 있다면 탐색을 중단합니다.
  if (path.some((p) => arePropositionsEqual(p, goal))) {
    return;
  }

  const newPath = [...path, goal]; // 현재 목표를 경로에 추가합니다.

  // **재귀 단계**: 다양한 추론 규칙을 역으로 적용하여 하위 목표를 찾습니다.

  // 1. 전건 긍정(Modus Ponens) 역추적
  const modusPonensBridges = internalTruthSet.filter(
    (p) => p.type === "conditional" && arePropositionsEqual(p.right, goal)
  );
  for (const bridge of modusPonensBridges) {
    const subGoal = bridge.left;
    findAllProofPaths(subGoal, newPath, allPlans, depth + 1);
  }

  // 2. 후건 부정(Modus Tollens) 역추적
  if (goal.type === "negation") {
    const p = goal.proposition; // goal = ~p
    const modusTollensBridges = internalTruthSet.filter(
      (prop) =>
        prop.type === "conditional" && arePropositionsEqual(prop.left, p)
    );
    for (const bridge of modusTollensBridges) {
      const subGoal = { type: "negation", proposition: bridge.right }; // new sub-goal = ~q
      findAllProofPaths(subGoal, newPath, allPlans, depth + 1);
    }
  }

  // 3. 선언적 삼단논법(Disjunctive Syllogism) 역추적
  const disjunctiveBridges = internalTruthSet.filter(
    (p) => p.type === "disjunction"
  );
  for (const bridge of disjunctiveBridges) {
    let subGoal = null;
    // (P ∨ goal)을 찾았다면, 하위 목표는 ~P
    if (arePropositionsEqual(bridge.right, goal)) {
      subGoal = { type: "negation", proposition: bridge.left };
    }
    // (goal ∨ P)를 찾았다면, 하위 목표는 ~P
    else if (arePropositionsEqual(bridge.left, goal)) {
      subGoal = { type: "negation", proposition: bridge.right };
    }
    if (subGoal) {
      findAllProofPaths(subGoal, newPath, allPlans, depth + 1);
    }
  }

  // 4. 보편 적용(Universal Application) 역추적
  if (goal.type === "atomic") {
    const universalBridges = internalTruthSet.filter(
      (p) => p.type === "universal" && p.predicate === goal.predicate
    );
    for (const bridge of universalBridges) {
      // 예: "소크라테스는 지혜롭다"를 증명하기 위해 "모든 철학자는 지혜롭다"를 찾음
      // 새로운 하위 목표: "소크라테스는 철학자이다"
      let newPredicateText;
      const entityText = bridge.entity;
      if (currentLang.langCode === "ko") {
        newPredicateText = entityText.slice(0, -1) + "이다"; // '철학자는' -> '철학자이다'
      } else {
        newPredicateText = `is a ${entityText}`; // 'philosopher' -> 'is a philosopher'
      }
      const subGoal = {
        type: "atomic",
        subject: goal.subject,
        predicate: newPredicateText,
      };
      findAllProofPaths(subGoal, newPath, allPlans, depth + 1);
    }
  }

  // 5. 존재화(Existential Instantiation) 역추적
  if (goal.type === "existential") {
    const subGoal = {
      type: "universal",
      entity: goal.entity,
      predicate: goal.predicate,
    };
    findAllProofPaths(subGoal, newPath, allPlans, depth + 1);
  }

  // 6. 이중 부정 제거(Double Negation) 역추적
  const doubleNegationSubGoal = {
    type: "negation",
    proposition: { type: "negation", proposition: goal },
  };
  findAllProofPaths(doubleNegationSubGoal, newPath, allPlans, depth + 1);
}
function assessSelfDisadvantage(proposition, myVictoryData) {
  if (!proposition || !myVictoryData) return 0;

  // ★★★ 핵심 수정: 평가 전에 명제를 정규화합니다. ★★★
  const normalizedProp = normalizeProposition(proposition);

  let penalty = 0;
  const myCoreGoal = myVictoryData.core_goal;
  const mySubject = myCoreGoal.subject;
  const myPredicate = myCoreGoal.predicate;

  const oppositePredicate =
    currentLang.contradictoryPredicates[myPredicate] ||
    Object.keys(currentLang.contradictoryPredicates).find(
      (key) => currentLang.contradictoryPredicates[key] === myPredicate
    );

  if (!oppositePredicate) return 0;

  if (normalizedProp.type === "atomic") {
    if (
      normalizedProp.subject === mySubject &&
      normalizedProp.predicate === oppositePredicate
    ) {
      penalty += 1500;
    }
  } else if (
    normalizedProp.type === "existential" ||
    normalizedProp.type === "universal"
  ) {
    if (normalizedProp.predicate === oppositePredicate) {
      penalty += normalizedProp.type === "universal" ? 3000 : 1800;
    }
  }
  return penalty;
}
function normalizeProposition(prop) {
  if (
    prop &&
    prop.type === "negation" &&
    prop.proposition.type === "negation"
  ) {
    // ~~P 형태이므로, 안쪽의 P에 대해 다시 정규화를 시도합니다.
    return normalizeProposition(prop.proposition.proposition);
  }
  // 이중 부정이 아니거나, 더 이상 제거할 이중 부정이 없으면 그대로 반환합니다.
  return prop;
}
function aiTurn() {
  if (gameIsOver || isThinkingTime) return;

  // --- 1. 새로운 갬빗 계획 수립 및 기존 계획 유효성 검사 ---
  activeGambitPlan = findBestGambitPlan(currentPlayer);
  if (activeGambitPlan) {
    console.log(
      `%c[AI GAMBIT] New Plan Adopted: ${
        activeGambitPlan.gambitName
      }. Goal: Prove '${propositionToNaturalText(activeGambitPlan.subGoal)}'`,
      "color: #8A2BE2; font-weight: bold;"
    );
  }

  console.log(
    `%c--- AI TURN DEBUG START (Round ${currentRound}, Player: ${currentPlayer}) ---`,
    "color: blue; font-weight: bold; font-size: 1.2em;"
  );
  console.log(
    "%c1. AI's Knowledge Base (internalTruthSet):",
    "color: green; font-weight: bold;"
  );
  console.log(internalTruthSet.map((p) => propositionToNaturalText(p)));
  console.log(
    "%c2. Proposition on Board to be Evaluated:",
    "color: green; font-weight: bold;"
  );
  console.log(currentProposition.map((c) => c.card.text).join(" "));

  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === currentPlayer
  );
  const aiHand = currentPlayer === "A" ? playerA_Hand : playerB_Hand;
  const notKeyword = currentLang.keywords.not;
  const notCardInHand = aiHand.find((c) => c.text === notKeyword);

  if (notCardInHand && currentProposition.length > 0 && myVictoryData) {
    const propOnBoard = parsePropositionFromCards(currentProposition);
    if (propOnBoard && propOnBoard.type === "negation") {
      const newTruthFromDoubleNegation = propOnBoard.proposition;
      const hypotheticalTruths = [
        ...internalTruthSet,
        newTruthFromDoubleNegation,
      ];
      const myUltimateTarget = myVictoryData.ultimate_target;
      if (aiFindProof(myUltimateTarget, hypotheticalTruths)) {
        console.log(
          `%c[AI OVERRIDE] Derived Win via Double Negation DETECTED! Playing '${notKeyword}'`,
          "background: #ff0000; color: #ffffff; font-size: 1.3em;"
        );
        playCard(currentPlayer, notCardInHand);
        setTimeout(completeProposition, 250);
        return;
      }
    }
  }

  const guaranteedMove = checkForGuaranteedWinMove();
  if (guaranteedMove) {
    playCard(currentPlayer, guaranteedMove);
    setTimeout(endTurn, 500);
    return;
  }

  const opponentPlayer = currentPlayer === "A" ? "B" : "A";
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponentPlayer
  );
  const hasValidCardMove = aiHand.some((card) =>
    isValidPlay(card, currentProposition)
  );
  const canActuallyComplete = aiCanActuallyComplete();

  if (!hasValidCardMove && !canActuallyComplete) {
    console.log("🔒 FORCED BY RULES: Round end (no actions available for AI)");
    checkRoundEndConditions();
    return;
  }

  if (aiDeclareEureka()) {
    return;
  }

  let isRiskyToComplete = false;
  if (isBoardCompletable()) {
    const propToComplete = parsePropositionFromCards(currentProposition);
    const verificationResult = verifyAndExpandTruths(propToComplete);
    const myLossCondition = myVictoryData
      ? { type: "negation", proposition: myVictoryData.core_goal }
      : null;
    if (
      !verificationResult.success ||
      (opponentVictoryData &&
        aiFindProof(
          opponentVictoryData.ultimate_target,
          verificationResult.expandedSet
        )) ||
      (myLossCondition &&
        aiFindProof(myLossCondition, verificationResult.expandedSet))
    ) {
      isRiskyToComplete = true;
    }
  }

  let bestCardAction = null;
  const validMoves = aiHand.filter((card) =>
    isValidPlay(card, currentProposition)
  );

  if (validMoves.length > 0) {
    const scoredMoves = validMoves.map((move) => {
      let score = 100;

      // ★★★ 핵심 수정: 현재 행동이 갬빗 계획의 일부인지 확인하고 보너스 부여 ★★★
      if (activeGambitPlan) {
        const firstStepOfPlan = activeGambitPlan.path[0];
        const cardsNeededForStep =
          propositionToNaturalText(firstStepOfPlan).split(" ");

        // 현재 보드 + 이번에 낼 카드가 계획의 첫 단계를 구성하는가?
        const expectedNextStep = [
          ...currentProposition.map((c) => c.card.text),
          move.text,
        ].join(" ");
        if (cardsNeededForStep.join(" ").startsWith(expectedNextStep)) {
          console.log(
            `%c[AI GAMBIT] Move '${move.text}' follows the plan. BIG BONUS!`,
            "color: #8A2BE2;"
          );
          score += 40000; // 갬빗 계획을 따르는 행동에 매우 높은 보너스 점수
        }
      }
      // ★★★ 여기까지 수정 ★★★

      if (move.text === notKeyword) {
        const propOnBoard = parsePropositionFromCards(currentProposition);

        // 1. 명제판에 되받아칠 부정 명제(~P)가 있는지 확인합니다.
        if (propOnBoard && propOnBoard.type === "negation") {
          const resultingProp = propOnBoard.proposition; // 이중 부정으로 만들어질 명제 (P)
          const normalizedResultingProp = normalizeProposition(resultingProp); // 의미를 정확히 파악하기 위해 정규화

          // 2. 필승 확인: 이 수로 즉시 이길 수 있는지 먼저 확인합니다.
          const hypotheticalTruths = [
            ...internalTruthSet,
            normalizedResultingProp,
          ];
          if (
            myVictoryData &&
            aiFindProof(myVictoryData.ultimate_target, hypotheticalTruths)
          ) {
            score += 1000000; // 이길 수 있다면 막대한 보너스
          } else {
            // 3. 소소한 이득 계산: 즉시 이기는 게 아니라면, 전략적 가치를 계산합니다.
            const benefitScore = calculateStrategicValue(
              normalizedResultingProp,
              currentPlayer
            );

            // 계산된 가치만큼 행동 점수에 보너스를 부여합니다.
            score += benefitScore;

            if (benefitScore > 0) {
              console.log(
                `%c[Double Negation Gambit] Countering with 'not' creates a beneficial prop '${propositionToNaturalText(
                  normalizedResultingProp
                )}'. Bonus: +${benefitScore}`,
                "color: #00aaff"
              );
            }
          }
        }
      }

      if (currentProposition.length > 0 && myVictoryData) {
        const myName = myVictoryData.core_goal.subject;
        if (move.text === myName) {
          const lastCardOnBoard =
            currentProposition[currentProposition.length - 1].card;
          if (lastCardOnBoard.text === currentLang.keywords.if) {
            const propOnBoard = parsePropositionFromCards(
              currentProposition.slice(0, -1)
            );
            if (
              propOnBoard &&
              arePropositionsEqual(propOnBoard, myVictoryData.core_goal)
            ) {
              console.warn(
                `AI SUICIDE PREVENTION: Penalizing move '${move.text}' after own win condition + 'then'.`
              );
              score -= 900000;
            }
          }
        }
      }

      if (
        move.type ===
        (currentLang.langCode === "ko" ? "고유명사" : "Proper Noun")
      ) {
        const opponentHand =
          currentPlayer === "A" ? playerB_Hand : playerA_Hand;
        const { not: notKeyword } = currentLang.keywords;
        const aiHasNot = aiHand.some((card) => card.text === notKeyword);
        const opponentHasNot = opponentHand.some(
          (card) => card.text === notKeyword
        );
        if (aiHasNot === opponentHasNot && currentProposition.length > 0) {
          const propLength = currentProposition.length;
          const lastCardInfo = currentProposition[propLength - 1];
          const {
            and: andKeyword,
            if: ifKeyword,
            or: orKeyword,
          } = currentLang.keywords;
          let isTrap = false;
          if (lastCardInfo.card.text === andKeyword) {
            isTrap = true;
          } else {
            const firstPartCards = currentProposition.slice(0, propLength - 1);
            const parsedFirstPart = parsePropositionFromCards(firstPartCards);
            if (parsedFirstPart) {
              if (
                lastCardInfo.card.text === ifKeyword &&
                aiFindProof(parsedFirstPart, internalTruthSet)
              ) {
                isTrap = true;
              } else if (lastCardInfo.card.text === orKeyword) {
                const negationOfFirstPart = {
                  type: "negation",
                  proposition: parsedFirstPart,
                };
                if (aiFindProof(negationOfFirstPart, internalTruthSet)) {
                  isTrap = true;
                }
              }
            }
          }
          if (isTrap) {
            console.log(
              `방어 로직 발동: 상대에게 필승 기회를 줄 수 있는 '${move.text}' 카드의 점수를 삭감합니다.`
            );
            score -= 50000;
          }
        }
      }

      const aiPhilosopherId =
        currentPlayer === "A" ? playerA_Data.id : playerB_Data.id;
      const opponentPhilosopherId =
        opponentPlayer === "A" ? playerA_Data.id : playerB_Data.id;
      const bourgeoisText =
        currentLang.langCode === "ko" ? "브루주아는" : "Bourgeois";
      const evilText = currentLang.langCode === "ko" ? "악하다" : "is evil";
      const goodText = currentLang.langCode === "ko" ? "선하다" : "is good";
      const existentialQuantifier =
        currentLang.langCode === "ko" ? "어떤" : "Some";
      const andKeyword = currentLang.keywords.and;
      if (currentProposition.length > 0) {
        const lastCardText =
          currentProposition[currentProposition.length - 1].card.text;
        const isQuantifiedBourgeois =
          currentProposition.length === 2 &&
          currentProposition[0].card.text === existentialQuantifier &&
          currentProposition[1].card.text === bourgeoisText;
        if (lastCardText === bourgeoisText || isQuantifiedBourgeois) {
          if (aiPhilosopherId === "marx") {
            if (move.text === evilText) score += 15000;
            else if (move.text === goodText) score -= 15000;
          } else if (opponentPhilosopherId === "marx") {
            if (move.text === evilText) score -= 15000;
            else if (move.text === goodText) score += 15000;
          }
        }
      }
      if (move.text === andKeyword) {
        const propOnBoard = parsePropositionFromCards(currentProposition);
        if (propOnBoard) {
          if (aiPhilosopherId === "marx") {
            const antiGoalUniversal = {
              type: "universal",
              entity: bourgeoisText,
              predicate: goodText,
            };
            const antiGoalExistential = {
              type: "existential",
              entity: bourgeoisText,
              predicate: goodText,
            };
            if (
              arePropositionsEqual(propOnBoard, antiGoalUniversal) ||
              arePropositionsEqual(propOnBoard, antiGoalExistential)
            ) {
              score -= 18000;
            }
          } else if (opponentPhilosopherId === "marx") {
            const opponentGoalUniversal = {
              type: "universal",
              entity: bourgeoisText,
              predicate: evilText,
            };
            const opponentGoalExistential = {
              type: "existential",
              entity: bourgeoisText,
              predicate: evilText,
            };
            if (
              arePropositionsEqual(propOnBoard, opponentGoalUniversal) ||
              arePropositionsEqual(propOnBoard, opponentGoalExistential)
            ) {
              console.log(
                "AI vs Marx: Preventing adding 'and' after a pro-revolution proposition. Massive Penalty!"
              );
              score -= 200000;
            }
          }
        }
      }

      if (isRiskyToComplete) {
        if (move.text === currentLang.keywords.and) score -= 5000;
        if (move.text === currentLang.keywords.if) score += 200;
      }
      if (move.text === currentLang.keywords.and) {
        const propOnBoard = parsePropositionFromCards(currentProposition);
        if (propOnBoard) {
          if (opponentVictoryData) {
            const opponentAdvantagePenalty = assessOpponentAdvantage(
              propOnBoard,
              opponentVictoryData
            );
            score -= opponentAdvantagePenalty;
            const opponentWinPredicate =
              opponentVictoryData.core_goal.predicate;
            const predicatePairs = currentLang.contradictoryPredicates;
            let oppositePredicate =
              Object.keys(predicatePairs).find(
                (key) => predicatePairs[key] === opponentWinPredicate
              ) || predicatePairs[opponentWinPredicate];
            if (
              oppositePredicate &&
              propOnBoard.type === "negation" &&
              propOnBoard.proposition.type === "existential" &&
              propOnBoard.proposition.predicate === oppositePredicate
            ) {
              score -= 3000;
            }
          }
          if (myVictoryData) {
            const myWinPredicate = myVictoryData.core_goal.predicate;
            if (
              propOnBoard.type === "negation" &&
              propOnBoard.proposition.type === "existential" &&
              propOnBoard.proposition.predicate === myWinPredicate
            ) {
              score -= 3000;
            }
          }
        }
      }
      const hypotheticalProposition = [
        ...currentProposition,
        { card: move, player: currentPlayer },
      ];
      const parsedHypothetical = parsePropositionFromCards(
        hypotheticalProposition
      );
      if (!parsedHypothetical) return { move, score };
      const verificationResult = verifyAndExpandTruths(parsedHypothetical);
      if (!verificationResult.success) {
        score = -999999;
        return { move, score };
      }
      if (
        myVictoryData &&
        aiFindProof(
          myVictoryData.ultimate_target,
          verificationResult.expandedSet
        )
      ) {
        const opponentHand =
          currentPlayer === "A" ? playerB_Hand : playerA_Hand;
        if (isImmediateWinSecure(opponentHand, aiHand, currentLang)) {
          score += 1000000;
        }
      }
      if (
        opponentVictoryData &&
        aiFindProof(
          opponentVictoryData.ultimate_target,
          verificationResult.expandedSet
        )
      )
        score -= 999999;
      if (myVictoryData) {
        const myLossCondition = {
          type: "negation",
          proposition: myVictoryData.core_goal,
        };
        if (aiFindProof(myLossCondition, verificationResult.expandedSet))
          score -= 750000;
      }
      if (opponentVictoryData) {
        const advantagePenalty = assessOpponentAdvantage(
          parsedHypothetical,
          opponentVictoryData
        );
        if (advantagePenalty > 0) score -= advantagePenalty;
      }
      if (myVictoryData) {
        const disadvantagePenalty = assessSelfDisadvantage(
          parsedHypothetical,
          myVictoryData
        );
        if (disadvantagePenalty > 0) {
          console.log(
            `Evaluation: Move creates self-disadvantage. Applying penalty: -${disadvantagePenalty}`
          );
          score -= disadvantagePenalty;
        }
      }
      const isNewClauseStart =
        currentProposition.length === 0 ||
        [
          currentLang.keywords.and,
          currentLang.keywords.or,
          currentLang.keywords.if,
        ].includes(
          currentProposition[currentProposition.length - 1]?.card.text
        );
      if (isNewClauseStart) {
        if (move.type === currentLang.cardTypes[1]) {
          if (move.text === currentLang.keywords.universal_q) score += 60;
          else score += 30;
        } else if (move.type === currentLang.cardTypes[0]) {
          score -= 40;
        }
      }
      if (parsedHypothetical) {
        const verificationResult = verifyAndExpandTruths(
          parsedHypothetical,
          internalTruthSet
        );
        if (verificationResult.success) {
          const expandedSet = verificationResult.expandedSet;
          const myVictoryData = truePropositions.find(
            (p) => p.type === "victory" && p.owner === currentPlayer
          );
          if (myVictoryData) {
            const myCoreGoal = myVictoryData.core_goal;
            const contradictoryPredicate =
              currentLang.contradictoryPredicates[myCoreGoal.predicate] ||
              Object.keys(currentLang.contradictoryPredicates).find(
                (key) =>
                  currentLang.contradictoryPredicates[key] ===
                  myCoreGoal.predicate
              );
            if (contradictoryPredicate) {
              const selfHarmProposition = {
                type: "atomic",
                subject: myCoreGoal.subject,
                predicate: contradictoryPredicate,
              };
              if (aiFindProof(selfHarmProposition, expandedSet)) {
                console.warn(
                  `AI SUICIDE PREVENTION: Move '${
                    move.text
                  }' proves '${propositionToNaturalText(
                    selfHarmProposition
                  )}', which is self-destructive. Applying massive penalty.`
                );
                score -= 1000000;
              }
            }
          }
        }
      }
      return { move, score };
    });

    scoredMoves.sort((a, b) => b.score - a.score);
    if (scoredMoves.length > 0) {
      const topScore = scoredMoves[0].score;
      const bestMoves = scoredMoves.filter((move) => move.score === topScore);
      bestCardAction = bestMoves[Math.floor(Math.random() * bestMoves.length)];
    } else {
      bestCardAction = null;
    }
  }

  let completeAction = null;
  if (isBoardCompletable()) {
    console.log(
      "%c3. Evaluating 'Complete Proposition' Action:",
      "color: orange; font-weight: bold;"
    );
    if (!aiCanActuallyComplete()) {
      console.log(
        "❌ AI cannot actually complete this proposition (duplicate/contradiction)"
      );
      completeAction = null;
    } else {
      let completeScore = 120;
      const aiPhilosopherId =
        currentPlayer === "A" ? playerA_Data.id : playerB_Data.id;
      if (aiPhilosopherId === "nietzsche") {
        const propToComplete = parsePropositionFromCards(currentProposition);
        if (propToComplete) {
          const isAlreadyProven = truePropositions.some(
            (p) =>
              p.proposition &&
              arePropositionsEqual(p.proposition, propToComplete)
          );
          if (isAlreadyProven) {
            console.log("니체 능력 활성화: 중복 명제 완성에 보너스 점수 부여!");
            completeScore += 5000;
          }
        }
      }

      if (isRiskyToComplete) {
        console.log(
          "Evaluation: Completing is too risky. Assigning massive penalty."
        );
        completeScore = -999999;
      } else {
        const propToComplete = parsePropositionFromCards(currentProposition);
        if (propToComplete) {
          if (opponentVictoryData) {
            const opponentAdvantagePenalty = assessOpponentAdvantage(
              propToComplete,
              opponentVictoryData
            );
            if (opponentAdvantagePenalty > 0) {
              console.log(
                `Evaluation: Completing helps opponent. Applying penalty: -${opponentAdvantagePenalty}`
              );
              completeScore -= opponentAdvantagePenalty;
            }
          }
          if (myVictoryData) {
            const selfDisadvantagePenalty = assessSelfDisadvantage(
              propToComplete,
              myVictoryData
            );
            if (selfDisadvantagePenalty > 0) {
              console.log(
                `Evaluation: Completing is self-disadvantageous. Applying penalty: -${selfDisadvantagePenalty}`
              );
              completeScore -= selfDisadvantagePenalty;
            }
            const myWinPredicate = myVictoryData.core_goal.predicate;
            if (
              propToComplete.type === "negation" &&
              propToComplete.proposition.type === "existential" &&
              propToComplete.proposition.predicate === myWinPredicate
            ) {
              console.log(
                `Evaluation: Completing contradicts own win condition path. Applying penalty: -3000`
              );
              completeScore -= 3000;
            }
          }
          if (opponentVictoryData) {
            const opponentWinPredicate =
              opponentVictoryData.core_goal.predicate;
            const predicatePairs = currentLang.contradictoryPredicates;
            let oppositePredicate =
              Object.keys(predicatePairs).find(
                (key) => predicatePairs[key] === opponentWinPredicate
              ) || predicatePairs[opponentWinPredicate];
            if (
              oppositePredicate &&
              propToComplete.type === "negation" &&
              propToComplete.proposition.type === "existential" &&
              propToComplete.proposition.predicate === oppositePredicate
            ) {
              console.log(
                `Evaluation: Completing implies a universal proposition that helps opponent. Applying penalty: -3000`
              );
              completeScore -= 3000;
            }
          }
          const opponentPhilosopherId =
            opponentPlayer === "A" ? playerA_Data.id : playerB_Data.id;
          const bourgeoisText =
            currentLang.langCode === "ko" ? "브루주아는" : "Bourgeois";
          const evilText = currentLang.langCode === "ko" ? "악하다" : "is evil";
          const goodText = currentLang.langCode === "ko" ? "선하다" : "is good";
          const notText = currentLang.keywords.not;
          const marxGoalProp = {
            type: "universal",
            entity: bourgeoisText,
            predicate: evilText,
          };
          const marxExistentialGoalProp = {
            type: "existential",
            entity: bourgeoisText,
            predicate: evilText,
          };
          const marxHelpfulNegationProp = {
            type: "negation",
            proposition: {
              type: "universal",
              entity: bourgeoisText,
              predicate: goodText,
            },
          };
          const marxHelpfulExistentialNegationProp = {
            type: "negation",
            proposition: {
              type: "existential",
              entity: bourgeoisText,
              predicate: goodText,
            },
          };
          const marxAntiGoalProp = {
            type: "universal",
            entity: bourgeoisText,
            predicate: goodText,
          };
          const marxExistentialAntiGoalProp = {
            type: "existential",
            entity: bourgeoisText,
            predicate: goodText,
          };
          const marxHarmfulNegationProp = {
            type: "negation",
            proposition: {
              type: "universal",
              entity: bourgeoisText,
              predicate: evilText,
            },
          };
          const marxHarmfulExistentialNegationProp = {
            type: "negation",
            proposition: {
              type: "existential",
              entity: bourgeoisText,
              predicate: evilText,
            },
          };

          if (aiPhilosopherId === "marx") {
            if (
              arePropositionsEqual(propToComplete, marxGoalProp) ||
              arePropositionsEqual(propToComplete, marxExistentialGoalProp)
            ) {
              console.log(
                "AI Marx is completing a pro-revolution proposition. Bonus!"
              );
              completeScore += 200000;
            } else if (
              arePropositionsEqual(propToComplete, marxHelpfulNegationProp) ||
              arePropositionsEqual(
                propToComplete,
                marxHelpfulExistentialNegationProp
              )
            ) {
              console.log(
                "AI Marx is completing a helpful negated proposition. Bonus!"
              );
              completeScore += 200000;
            } else if (
              arePropositionsEqual(propToComplete, marxAntiGoalProp) ||
              arePropositionsEqual(propToComplete, marxExistentialAntiGoalProp)
            ) {
              console.log(
                "AI Marx is completing an anti-revolution proposition. Penalty!"
              );
              completeScore -= 20000;
            } else if (
              arePropositionsEqual(propToComplete, marxHarmfulNegationProp) ||
              arePropositionsEqual(
                propToComplete,
                marxHarmfulExistentialNegationProp
              )
            ) {
              console.log(
                "AI Marx is completing a harmful negated proposition. Penalty!"
              );
              completeScore -= 20000;
            }
          } else if (opponentPhilosopherId === "marx") {
            if (
              arePropositionsEqual(propToComplete, marxGoalProp) ||
              arePropositionsEqual(propToComplete, marxExistentialGoalProp)
            ) {
              console.log(
                "AI vs Marx: Completing a pro-revolution proposition helps the opponent. Penalty!"
              );
              completeScore -= 200000;
            }
          }
          const verificationResult = verifyAndExpandTruths(propToComplete);
          if (verificationResult.success && myVictoryData) {
            if (
              aiFindProof(
                myVictoryData.ultimate_target,
                verificationResult.expandedSet
              )
            ) {
              completeScore += 1000000;
            }
          }
        }
      }
      completeAction = { action: "complete", score: completeScore };
      console.log(
        `%c>>> Calculated Score for COMPLETING: ${completeScore}`,
        "color: red; font-weight: bold;"
      );
    }
  }

  if (
    bestCardAction &&
    (!completeAction || bestCardAction.score >= completeAction.score)
  ) {
    console.log(
      `%c--- AI FINAL DECISION: PLAY CARD '${bestCardAction.move.text}' (Score: ${bestCardAction.score}) ---`,
      "background: #222; color: #bada55; font-size: 1.2em;"
    );
    playCard(currentPlayer, bestCardAction.move);
    setTimeout(endTurn, 500);
  } else if (completeAction) {
    console.log(
      `%c--- AI FINAL DECISION: COMPLETE PROPOSITION (Score: ${completeAction.score}) ---`,
      "background: #222; color: #bada55; font-size: 1.2em;"
    );
    completeProposition();
  } else {
    checkRoundEndConditions();
  }
}

function getTemporaryUsableTruths() {
  // '무지의 자각'이 사용되지 않았다면, AI도 internalTruthSet을 그대로 씁니다.
  if (socratesDisabledProps.length === 0) {
    return internalTruthSet;
  }

  // --- '무지의 자각'이 사용된 경우, AI의 지식을 재구성합니다. ---

  // 1. 화면의 참 명제 목록에서 비활성화된 명제를 먼저 제외합니다.
  const filteredUserMadeProps = truePropositions.filter(
    (p) =>
      !p.propId || !socratesDisabledProps.some((dp) => dp.propId === p.propId)
  );

  // 2. 공리와 필터링된 명제를 합쳐 AI가 사용할 최종 전제 목록을 만듭니다.
  const filteredPremises = [
    ...parsedAxioms.map((a) => a.proposition),
    ...filteredUserMadeProps.map((p) => p.proposition).filter(Boolean),
  ];

  // 3. 필터링된 전제로부터 모든 결론을 재구성
  const { success, expandedSet } = verifyAndExpandTruths(
    null,
    filteredPremises
  );

  if (success) {
    return expandedSet;
  } else {
    console.error("AI: Truth set reconstruction failed.");
    return internalTruthSet; // 오류 시 안전하게 기존 값 반환
  }
}
function aiDeclareEureka() {
  if (isThinkingTime) return false;

  const opponentPlayer = currentPlayer === "A" ? "B" : "A";
  const myVictoryCondition = truePropositions.find(
    (p) => p.type === "victory" && p.owner === currentPlayer
  );
  const opponentVictoryCondition = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponentPlayer
  );

  if (!myVictoryCondition || !opponentVictoryCondition) return false;

  // AI가 사용할 수 있는 '확장된' 진리 집합 (승리 가능성 '확인'용)
  const expandedTruthSetForAI = getTemporaryUsableTruths();

  const myGoal = myVictoryCondition.ultimate_target;
  const opponentGoal = {
    type: "negation",
    proposition: opponentVictoryCondition.ultimate_target,
  };

  let victoryFound = false;
  let goalToProve = null;

  // 1. 승리 가능성 확인은 기존과 같이 '확장된' 세트로 빠르게 수행
  if (aiFindProof(myGoal, expandedTruthSetForAI)) {
    victoryFound = true;
    goalToProve = myGoal;
    console.log("AI Eureka! Proved own victory. Generating proof path...");
  } else if (aiFindProof(opponentGoal, expandedTruthSetForAI)) {
    victoryFound = true;
    goalToProve = opponentGoal;
    console.log(
      "AI Eureka! Proved opponent's defeat. Generating proof path..."
    );
  }

  if (victoryFound) {
    // ★★★★★★★★★★ 핵심 수정 부분 ★★★★★★★★★★
    // 2. '경로 생성'을 위해서는 추론이 완료되지 않은 '순수 전제'들을 전달해야 함

    // 소크라테스 능력으로 비활성화된 명제를 제외한 순수 전제 목록 생성
    const activePropositions = truePropositions.filter(
      (p) =>
        !p.propId || !socratesDisabledProps.some((dp) => dp.propId === p.propId)
    );

    // 공리와 활성화된 명제들만 모아서 '순수한 문제집'을 만듦
    const foundationalTruths = [
      ...parsedAxioms.map((a) => a.proposition),
      ...activePropositions.map((p) => p.proposition).filter(Boolean), // proposition이 있는 경우만
    ];

    // 3. '순수한 문제집'을 전달하여 '풀이 과정' 기록을 시작
    const fullProofLog = expandAndRecordTruths(foundationalTruths);
    // ★★★★★★★★★★ 수정 끝 ★★★★★★★★★★

    prepareAndShowAIProof(fullProofLog, goalToProve);
    return true;
  }

  return false;
}
function aiFindProof(targetProposition, initialTruths = internalTruthSet) {
  let knownTruths = [...initialTruths];
  let newTruthsFoundInIteration = true;
  let iterations = 0;
  const maxIterations = 50; // 무한 루프 방지

  while (newTruthsFoundInIteration && iterations < maxIterations) {
    newTruthsFoundInIteration = false;
    iterations++;

    const currentTruthsCount = knownTruths.length;
    let tempTruths = [...knownTruths];

    // 목표를 이미 달성했는지 확인
    if (tempTruths.some((p) => arePropositionsEqual(p, targetProposition))) {
      return true;
    }

    // 1개 전제 규칙 적용
    for (const p of knownTruths) {
      const rules = [
        conjunctionElimination,
        doubleNegationElimination,
        existentialInstantiation,
      ];
      for (const rule of rules) {
        const result = rule(p);
        if (result) {
          const results = Array.isArray(result) ? result : [result];
          results.forEach((res) => {
            if (!tempTruths.some((t) => arePropositionsEqual(t, res))) {
              tempTruths.push(res);
              newTruthsFoundInIteration = true;
            }
          });
        }
      }
    }

    // 2개 전제 규칙 적용
    for (let i = 0; i < knownTruths.length; i++) {
      for (let j = 0; j < knownTruths.length; j++) {
        if (i === j) continue;
        const p1 = knownTruths[i];
        const p2 = knownTruths[j];
        const rules = [
          modusPonens,
          modusTollens,
          hypotheticalSyllogism,
          disjunctiveSyllogism,
          universalApplication,
        ];
        for (const rule of rules) {
          const result = rule(p1, p2);
          if (
            result &&
            !tempTruths.some((t) => arePropositionsEqual(t, result))
          ) {
            tempTruths.push(result);
            newTruthsFoundInIteration = true;
          }
        }
      }
    }

    // ★★★ 수정된 부분: 경우 논증 (Proof by Cases) 최적화 ★★★
    // 1. 모든 '또는' 명제와 '라면' 명제를 미리 분류하여 검색 범위를 줄입니다.
    const disjunctions = knownTruths.filter((p) => p.type === "disjunction");
    const conditionals = knownTruths.filter((p) => p.type === "conditional");

    // 2. '또는' 명제를 기준으로 탐색을 시작합니다.
    for (const disjunction of disjunctions) {
      // 예: (P ∨ Q)
      const p = disjunction.left;
      const q = disjunction.right;

      // 3. P로 시작하는 '라면' 명제들 (P → R)을 찾습니다.
      const pConditionals = conditionals.filter((c) =>
        arePropositionsEqual(c.left, p)
      );
      if (pConditionals.length === 0) continue; // 없으면 다음 '또는' 명제로 넘어감

      // 4. Q로 시작하는 '라면' 명제들 (Q → R)을 찾습니다.
      const qConditionals = conditionals.filter((c) =>
        arePropositionsEqual(c.left, q)
      );
      if (qConditionals.length === 0) continue; // 없으면 다음 '또는' 명제로 넘어감

      // 5. 찾아낸 두 '라면' 명제 그룹을 비교하여 결론(R)이 같은 쌍을 찾습니다.
      for (const pCond of pConditionals) {
        for (const qCond of qConditionals) {
          // 결론(pCond.right와 qCond.right)이 동일한지 확인
          if (arePropositionsEqual(pCond.right, qCond.right)) {
            const result = pCond.right; // 최종 결론 R
            // 새로운 결론이라면 참 목록에 추가
            if (
              result &&
              !tempTruths.some((t) => arePropositionsEqual(t, result))
            ) {
              tempTruths.push(result);
              newTruthsFoundInIteration = true;
            }
          }
        }
      }
    }

    knownTruths = tempTruths;
  }

  // 최종적으로 목표가 달성되었는지 확인
  return knownTruths.some((p) => arePropositionsEqual(p, targetProposition));
}

// --- 각 추론 규칙별 갬빗 평가자 정의 ---
const GAMBIT_EVALUATORS = [
  {
    name: "Disjunctive Syllogism Gambit",
    trigger: () => {
      return truePropositions.filter(
        (p) => p.proposition && p.proposition.type === "disjunction"
      );
    },
    evaluate: (triggerPropositionData, perspectivePlayer) => {
      const prop = triggerPropositionData.proposition; // P ∨ Q
      const candidates = [];
      const path1 = {
        subGoal: { type: "negation", proposition: prop.left }, // ~P
        result: prop.right, // Q
      };
      const path2 = {
        subGoal: { type: "negation", proposition: prop.right }, // ~Q
        result: prop.left, // P
      };
      [path1, path2].forEach((path) => {
        const benefitScore = calculateStrategicValue(
          path.result,
          perspectivePlayer
        );
        if (benefitScore > 0) {
          candidates.push({
            gambitName: "Disjunctive Syllogism Gambit",
            subGoal: path.subGoal,
            benefitScore: benefitScore,
          });
        }
      });
      return candidates;
    },
  },
  {
    name: "Modus Tollens Gambit",
    trigger: () => {
      return truePropositions.filter(
        (p) => p.proposition && p.proposition.type === "conditional"
      );
    },
    evaluate: (triggerPropositionData, perspectivePlayer) => {
      const prop = triggerPropositionData.proposition; // P → Q
      const candidates = [];
      const subGoal = { type: "negation", proposition: prop.right }; // ~Q
      const result = { type: "negation", proposition: prop.left }; // ~P
      const benefitScore = calculateStrategicValue(result, perspectivePlayer);
      if (benefitScore > 0) {
        candidates.push({
          gambitName: "Modus Tollens Gambit",
          subGoal: subGoal,
          benefitScore: benefitScore,
        });
      }
      return candidates;
    },
  },
  // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
  // ★★★ 아래 '전건 긍정 갬빗' 객체가 새로 추가되었습니다 ★★★
  // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
  {
    name: "Modus Ponens Gambit",
    /**
     * 참 명제 목록에서 '라면'으로 연결된 조건문을 찾아 반환합니다.
     */
    trigger: () => {
      return truePropositions.filter(
        (p) => p.proposition && p.proposition.type === "conditional"
      );
    },
    /**
     * 찾아낸 조건문에 대해 갬빗의 유효성을 평가합니다.
     * @param {object} triggerPropositionData - '라면' 명제를 포함한 데이터 객체
     * @param {string} perspectivePlayer - AI 플레이어 ('A' or 'B')
     * @returns {Array<object>} 평가된 갬빗 계획 후보 목록
     */
    evaluate: (triggerPropositionData, perspectivePlayer) => {
      const prop = triggerPropositionData.proposition; // P → Q
      const candidates = [];

      // 시나리오: P를 증명하여 Q를 얻는다.
      const subGoal = prop.left; // 증명해야 할 목표: P
      const result = prop.right; // 얻게 될 결과: Q

      // 이 갬빗으로 얻는 결과(Q)의 전략적 가치를 계산합니다.
      const benefitScore = calculateStrategicValue(result, perspectivePlayer);

      // 가치가 0보다 클 경우에만 유효한 갬빗 후보로 추가합니다.
      if (benefitScore > 0) {
        candidates.push({
          gambitName: "Modus Ponens Gambit",
          subGoal: subGoal,
          benefitScore: benefitScore,
        });
      }

      return candidates;
    },
  },
];

/**
 * 모든 갬빗 평가자를 실행하여 현재 상황에서 가장 좋은 장기 계획을 찾는 함수
 * @param {string} perspectivePlayer - AI 플레이어 ('A' or 'B')
 * @returns {object | null} 가장 좋은 갬빗 계획 또는 null
 */
function findBestGambitPlan(perspectivePlayer) {
  let allCandidateGambits = [];

  // 1. 모든 갬빗 평가자를 순회합니다.
  for (const evaluator of GAMBIT_EVALUATORS) {
    const triggers = evaluator.trigger();
    for (const trigger of triggers) {
      // 2. 각 트리거에 대해 유효한 갬빗들을 평가하여 목록에 추가합니다.
      const gambits = evaluator.evaluate(trigger, perspectivePlayer);
      allCandidateGambits.push(...gambits);
    }
  }

  if (allCandidateGambits.length === 0) return null;

  let viablePlans = [];
  // 3. 찾아낸 모든 갬빗 후보에 대해, 목표 달성 경로를 탐색합니다.
  for (const gambit of allCandidateGambits) {
    let proofPaths = [];
    // `findAllProofPaths`를 이용해 subgoal을 증명할 방법을 찾습니다.
    findAllProofPaths(gambit.subGoal, [], proofPaths, 0);

    if (proofPaths.length > 0) {
      // 가장 짧은 경로를 선택합니다.
      proofPaths.sort((a, b) => a.steps.length - b.steps.length);
      const bestPath = proofPaths[0].steps;

      // 4. 해당 경로가 너무 위험하지는 않은지 최종 확인합니다.
      if (!isPlanTooRisky(bestPath, perspectivePlayer)) {
        viablePlans.push({
          ...gambit,
          path: bestPath,
          // 최종 점수 = 이득 점수 - 경로 길이 (짧을수록 좋음)
          finalScore: gambit.benefitScore - bestPath.length * 100,
        });
      }
    }
  }

  if (viablePlans.length === 0) return null;

  // 5. 실행 가능한 모든 계획 중 가장 점수가 높은 것을 선택합니다.
  viablePlans.sort((a, b) => b.finalScore - a.finalScore);
  return viablePlans[0];
}

function calculateStrategicValue(proposition, perspectivePlayer) {
  if (!proposition) return 0;

  // ★★★ 핵심 수정: 어떤 명제든 평가하기 전에 먼저 정규화합니다. ★★★
  const normalizedProp = normalizeProposition(proposition);

  const opponentPlayer = perspectivePlayer === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === perspectivePlayer
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponentPlayer
  );

  if (!myVictoryData || !opponentVictoryData) return 0;

  let score = 0;
  const myUltimateGoal = myVictoryData.ultimate_target;
  const opponentLossCondition = {
    type: "negation",
    proposition: opponentVictoryData.ultimate_target,
  };

  // 1. 직접적인 승/패 조건과 일치하는지 확인 (정규화된 명제로 비교)
  if (arePropositionsEqual(normalizedProp, myUltimateGoal)) score += 50000;
  if (arePropositionsEqual(normalizedProp, opponentLossCondition))
    score += 50000;

  // 2. 전칭 양화문('모든')의 가치 평가 (정규화된 명제로 비교)
  if (normalizedProp.type === "universal") {
    const myWinPredicate = myVictoryData.core_goal.predicate;
    const opponentWinPredicate = opponentVictoryData.core_goal.predicate;
    const predicatePairs = currentLang.contradictoryPredicates;
    const opponentDefeatPredicate =
      predicatePairs[opponentWinPredicate] ||
      Object.keys(predicatePairs).find(
        (key) => predicatePairs[key] === opponentWinPredicate
      );

    if (normalizedProp.predicate === myWinPredicate) score += 8000;
    if (
      opponentDefeatPredicate &&
      normalizedProp.predicate === opponentDefeatPredicate
    )
      score += 7000;
    if (normalizedProp.predicate === opponentWinPredicate) score -= 9000;
  }

  return score;
}

/**
 * 특정 계획(경로)을 수행했을 때의 위험성을 평가하는 함수
 * @param {Array<object>} path - findAllProofPaths가 반환한 계획 경로
 * @param {string} perspectivePlayer - 'A' 또는 'B', 누구의 관점에서 평가할지
 * @returns {boolean} 위험하면 true, 아니면 false
 */
function isPlanTooRisky(path, perspectivePlayer) {
  if (!path || path.length === 0) return false;

  const opponentPlayer = perspectivePlayer === "A" ? "B" : "A";
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponentPlayer
  );
  if (!opponentVictoryData) return false;

  // 계획의 최종 목표를 달성했을 때의 가상 진리 집합을 만듭니다.
  const finalStep = path[path.length - 1];
  const { success, expandedSet } = verifyAndExpandTruths(
    finalStep,
    internalTruthSet
  );

  if (!success) return true; // 계획 자체가 모순을 일으키면 위험

  // 그 결과 상대의 승리가 증명된다면 이 계획은 위험합니다.
  if (aiFindProof(opponentVictoryData.ultimate_target, expandedSet)) {
    return true;
  }

  return false;
}

function executePlatoAbilityCheck(player) {
  // 1. 사용 가능한 '어떤' 명제 찾기
  const availableExistentials = truePropositions.filter(
    (p) => p.proposition && p.proposition.type === "existential"
  );
  if (availableExistentials.length === 0) {
    return null;
  }

  const opponent = player === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === player
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponent
  );
  if (!myVictoryData) {
    return null;
  }
  const myGoalPredicate = myVictoryData.core_goal.predicate;
  const opponentGoalPredicate = opponentVictoryData
    ? opponentVictoryData.core_goal.predicate
    : null;

  const opponentDefeatPredicate = opponentGoalPredicate
    ? currentLang.contradictoryPredicates[opponentGoalPredicate] ||
      Object.keys(currentLang.contradictoryPredicates).find(
        (key) =>
          currentLang.contradictoryPredicates[key] === opponentGoalPredicate
      )
    : null;

  const candidates = availableExistentials.map((propData) => {
    const originalProp = propData.proposition;
    const universalProp = {
      type: "universal",
      entity: originalProp.entity,
      predicate: originalProp.predicate,
    };
    const isAlreadyKnown = truePropositions.some(
      (p) => p.proposition && arePropositionsEqual(p.proposition, universalProp)
    );

    if (isAlreadyKnown) {
      return { newProp: universalProp, score: -1 };
    }
    let score = 100;
    if (universalProp.predicate === myGoalPredicate) {
      score += 10000;
    }
    if (
      opponentDefeatPredicate &&
      universalProp.predicate === opponentDefeatPredicate
    ) {
      score += 8000;
    }
    if (
      opponentGoalPredicate &&
      universalProp.predicate === opponentGoalPredicate
    ) {
      score -= 5000;
    }

    const verificationResult = verifyAndExpandTruths(
      universalProp,
      internalTruthSet
    );

    if (!verificationResult.success) {
      // 1. 직접적인 모순이 발생하면 즉시 제외
      score = -1;
    } else {
      // 2. 모순이 없다면, 능력 사용으로 확장된 진리 집합에서
      //    상대방의 승리가 증명되는지 '논리 연쇄'를 시뮬레이션
      if (
        opponentVictoryData &&
        aiFindProof(
          opponentVictoryData.ultimate_target,
          verificationResult.expandedSet // 확장된 미래를 기반으로 검증
        )
      ) {
        // 3. 상대방의 승리가 증명된다면, 이 수는 자살 행위이므로 막대한 페널티 부여
        console.warn(
          `[Plato AI] SUICIDE PREVENTION: Using ability on '${propositionToNaturalText(
            originalProp
          )}' would prove opponent's victory. Massive penalty applied.`
        );
        score -= 999999;
      }
      const myOppositePredicate = myGoalPredicate
        ? currentLang.contradictoryPredicates[myGoalPredicate] ||
          Object.keys(currentLang.contradictoryPredicates).find(
            (key) =>
              currentLang.contradictoryPredicates[key] === myGoalPredicate
          )
        : null;

      if (myOppositePredicate) {
        const myDefeatCondition = {
          type: "atomic",
          subject: myVictoryData.core_goal.subject,
          predicate: myOppositePredicate,
        };

        if (aiFindProof(myDefeatCondition, verificationResult.expandedSet)) {
          console.warn(
            `[Plato AI] SUICIDE PREVENTION (Self Defeat): Using ability on '${propositionToNaturalText(
              originalProp
            )}' would prove its own defeat condition '${propositionToNaturalText(
              myDefeatCondition
            )}'. Massive penalty applied.`
          );
          score -= 900000;
        }
      }
    }

    return { newProp: universalProp, score: score };
  });

  const validCandidates = candidates.filter((c) => c.score > 0);
  if (validCandidates.length === 0) {
    return null;
  }

  validCandidates.sort((a, b) => b.score - a.score);
  const bestCandidate = validCandidates[0];

  const MINIMUM_SCORE_THRESHOLD = 150;
  if (bestCandidate.score < MINIMUM_SCORE_THRESHOLD) {
    return null;
  }

  // 능력 사용 실행
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[player].used = true;

  const newTheorem = {
    propId: `prop_${Date.now()}_${Math.random()}`,
    type: "theorem",
    source: "plato_ability",
    proposition: bestCandidate.newProp,
  };
  truePropositions.push(newTheorem);

  const finalVerification = verifyAndExpandTruths(
    bestCandidate.newProp,
    internalTruthSet
  );
  if (finalVerification.success) {
    internalTruthSet = finalVerification.expandedSet;
  } else {
    console.error(
      "AI Plato Ability CRITICAL: Contradiction after final check."
    );
    return null;
  }

  return {
    type: "ability",
    description: currentLang.ui.platoAbilityDescription.replace(
      "{proposition}",
      propositionToNaturalText(bestCandidate.newProp)
    ),
  };
}
function executeSocratesAbilityCheck(player) {
  // 1. 능력 사용 기본 조건 확인
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  if (abilityUsedState[player].usedCount >= abilityUsedState[player].maxUses) {
    return null;
  }
  const availablePropositions = truePropositions.filter((p) => {
    const isTargetType = p.type === "user-made" || p.type === "theorem";
    if (!isTargetType || !p.propId) return false;

    const isDisabled = socratesDisabledProps.some(
      (disabledProp) => disabledProp.propId === p.propId
    );
    return !isDisabled; // 비활성화되지 않은 것만 true
  });
  if (availablePropositions.length === 0) {
    return null;
  }

  // 2. AI와 상대방의 데이터 가져오기
  const opponent = player === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === player
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponent
  );
  if (!myVictoryData || !opponentVictoryData) return null;

  const internalTruthSet = getTemporaryUsableTruths();

  // 3. 제거할 후보 명제들의 위협 점수 계산

  // 3-1. 경계해야 할 '위험한 전칭 양화문' 목록 생성
  const entities = currentLang.cards
    .filter(
      (c) => c.type === (currentLang.langCode === "ko" ? "개체" : "Entity")
    )
    .map((c) => c.text);
  const opponentWinPredicate = opponentVictoryData.core_goal.predicate;
  const myWinPredicate = myVictoryData.core_goal.predicate;
  const predicatePairs = currentLang.contradictoryPredicates;
  const myOppositePredicate =
    predicatePairs[myWinPredicate] ||
    Object.keys(predicatePairs).find(
      (key) => predicatePairs[key] === myWinPredicate
    );

  const dangerousUniversals = [];
  entities.forEach((entity) => {
    // 상대 승리에 도움이 되는 전칭 양화문
    dangerousUniversals.push({
      type: "universal",
      entity: entity,
      predicate: opponentWinPredicate,
    });
    // 내 승리에 방해가 되는 전칭 양화문
    if (myOppositePredicate) {
      dangerousUniversals.push({
        type: "universal",
        entity: entity,
        predicate: myOppositePredicate,
      });
    }
  });

  // 3-2. 각 후보 명제별 점수 계산
  const scoredCandidates = availablePropositions.map((propData) => {
    let score = 0;
    const candidateProp = propData.proposition;

    // --- PRIORITY 1: 패배 임박 상황 방어 ---
    const opponentWinsWithCurrentTruths = aiFindProof(
      opponentVictoryData.ultimate_target,
      internalTruthSet
    );
    if (opponentWinsWithCurrentTruths) {
      const tempTruthSetWithoutCandidate = internalTruthSet.filter(
        (p) => !arePropositionsEqual(p, candidateProp)
      );
      const opponentStillWins = aiFindProof(
        opponentVictoryData.ultimate_target,
        tempTruthSetWithoutCandidate
      );
      if (!opponentStillWins) {
        score += 10000;
      }
    }

    // --- PRIORITY 2: 상대 핵심 목표 직접 제거 ---
    const opponentCoreGoal = opponentVictoryData.core_goal;
    if (arePropositionsEqual(candidateProp, opponentCoreGoal)) {
      score += 6000;
    }

    // --- PRIORITY 3: 자기 보존 ---
    const myCoreGoalContradiction = {
      type: "negation",
      proposition: myVictoryData.core_goal,
    };
    if (arePropositionsEqual(candidateProp, myCoreGoalContradiction)) {
      score += 2000;
    }

    // --- PRIORITY 4: 위협적인 전칭 양화문 직접 제거 ---
    if (candidateProp.type === "universal") {
      if (candidateProp.predicate === opponentWinPredicate) {
        score += 3000;
      }
      if (
        myOppositePredicate &&
        candidateProp.predicate === myOppositePredicate
      ) {
        score += 2500;
      }
    }

    const otherTruthsOnBoard = internalTruthSet.filter(
      (p) => !arePropositionsEqual(p, candidateProp)
    );

    for (const otherProp of otherTruthsOnBoard) {
      // 1. 선언적 삼단논법 (사용자 요청 시나리오)
      const dsResult = disjunctiveSyllogism(candidateProp, otherProp);
      if (dsResult) {
        const isDangerous = dangerousUniversals.some((dangerousUniv) =>
          arePropositionsEqual(dsResult, dangerousUniv)
        );
        if (isDangerous) {
          console.log(
            `%c[Socrates AI] DS threat detected! Keeping '${propositionToNaturalText(
              candidateProp
            )}' would allow proving a dangerous universal with another proposition. Threat score +7500.`,
            "color: #ff4500"
          );
          score += 7500;
        }
      }

      // 2. 전건 긍정
      const mpResult = modusPonens(candidateProp, otherProp);
      if (mpResult) {
        const isDangerous = dangerousUniversals.some((dangerousUniv) =>
          arePropositionsEqual(mpResult, dangerousUniv)
        );
        if (isDangerous) {
          console.log(
            `%c[Socrates AI] MP threat detected! Keeping '${propositionToNaturalText(
              candidateProp
            )}' would allow proving a dangerous universal with another proposition. Threat score +7500.`,
            "color: #ff4500"
          );
          score += 7500;
        }
      }
      // (다른 다중 전제 추론 규칙도 여기에 추가 가능)
    }

    return {
      propData,
      score,
    };
  });

  // 4. 가장 위협적인 명제 선택 및 능력 실행
  scoredCandidates.sort((a, b) => b.score - a.score);

  if (scoredCandidates.length > 0 && scoredCandidates[0].score > 0) {
    console.log(
      "Socrates AI Top Candidates for Removal:",
      scoredCandidates.slice(0, 3).map((c) => ({
        prop: propositionToNaturalText(c.propData.proposition),
        score: c.score,
      }))
    );
  }

  const bestCandidate = scoredCandidates[0];

  const MINIMUM_THREAT_SCORE = 1500;
  if (!bestCandidate || bestCandidate.score < MINIMUM_THREAT_SCORE) {
    return null;
  }

  abilityUsedState[player].usedCount++;
  socratesDisabledProps.push({
    propId: bestCandidate.propData.propId,
    reEnableRound: currentRound + 2,
  });

  console.log(
    `%cAI Socrates used Awareness of Ignorance on: ${propositionToNaturalText(
      bestCandidate.propData.proposition
    )} (Threat Score: ${bestCandidate.score})`,
    "color: #8e44ad; font-weight: bold;"
  );

  return {
    type: "ability",
    description: currentLang.ui.socratesAbilityDescription.replace(
      "{proposition}",
      propositionToNaturalText(bestCandidate.propData.proposition)
    ),
  };
}
function executeDescartesAbilityCheck(player) {
  // --- 1. 기본 조건 확인 ---
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  if (abilityUsedState[player]?.used) {
    return null;
  }
  const availablePropositions = truePropositions.filter(
    (p) => (p.type === "user-made" || p.type === "theorem") && p.propId
  );
  if (availablePropositions.length === 0) {
    return null;
  }

  // --- 2. 위협 점수 산출 ---
  const opponent = player === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === player
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponent
  );
  if (!myVictoryData || !opponentVictoryData) return null;

  const truthSetForScoring = getTemporaryUsableTruths();

  const opponentWinPredicate = opponentVictoryData.core_goal.predicate;
  const myWinPredicate = myVictoryData.core_goal.predicate;
  const predicatePairs = currentLang.contradictoryPredicates;
  const myOppositePredicate =
    predicatePairs[myWinPredicate] ||
    Object.keys(predicatePairs).find(
      (key) => predicatePairs[key] === myWinPredicate
    );

  const scoredCandidates = availablePropositions.map((propData) => {
    let score = 0;
    const candidateProp = propData.proposition;

    // 점수 계산 시, 새로 명명한 'truthSetForScoring' 변수를 사용합니다.
    const opponentWinsWithCurrentTruths = aiFindProof(
      opponentVictoryData.ultimate_target,
      truthSetForScoring
    );
    if (opponentWinsWithCurrentTruths) {
      const tempTruthSetWithoutCandidate = truthSetForScoring.filter(
        (p) => !arePropositionsEqual(p, candidateProp)
      );
      const opponentStillWins = aiFindProof(
        opponentVictoryData.ultimate_target,
        tempTruthSetWithoutCandidate
      );
      if (!opponentStillWins) {
        score += 10000;
      }
    }
    if (arePropositionsEqual(candidateProp, opponentVictoryData.core_goal)) {
      score += 6000;
    }
    if (
      myOppositePredicate &&
      candidateProp.predicate === myOppositePredicate
    ) {
      score += 2500;
    }
    if (
      candidateProp.type === "universal" &&
      candidateProp.predicate === opponentWinPredicate
    ) {
      score += 3000;
    }
    return { propData, score };
  });

  scoredCandidates.sort((a, b) => b.score - a.score);
  const bestCandidate =
    scoredCandidates.length > 0 ? scoredCandidates[0] : null;

  // --- 3. 실행 결정 및 능력 발동 ---
  const MINIMUM_THREAT_SCORE = 1500;
  if (!bestCandidate || bestCandidate.score < MINIMUM_THREAT_SCORE) {
    return null;
  }

  console.log(
    `%cAI Descartes used Methodic Doubt on: ${propositionToNaturalText(
      bestCandidate.propData.proposition
    )} (Threat Score: ${bestCandidate.score})`,
    "color: #3498db; font-weight: bold;"
  );

  abilityUsedState[player].used = true;

  const propIndex = truePropositions.findIndex(
    (p) => p.propId === bestCandidate.propData.propId
  );
  if (propIndex > -1) {
    truePropositions.splice(propIndex, 1);
  }

  // 진리 집합 재구성 (이 부분은 문제가 없습니다)
  let newTruthSet = parsedAxioms.map((a) => a.proposition);
  const propositionsToReverify = truePropositions
    .filter((p) => p.proposition)
    .map((p) => p.proposition);

  for (const prop of propositionsToReverify) {
    const verificationResult = verifyAndExpandTruths(prop, newTruthSet);
    if (verificationResult.success) {
      newTruthSet = verificationResult.expandedSet;
    } else {
      console.error(
        "Critical error after AI Descartes' ability: Inconsistency found."
      );
    }
  }

  // ★★★ 전역 변수인 'internalTruthSet'에 최종 결과를 할당합니다.
  internalTruthSet = newTruthSet;

  return {
    type: "ability",
    description: currentLang.ui.descartesAbilityDescription.replace(
      "{proposition}",
      propositionToNaturalText(bestCandidate.propData.proposition)
    ),
  };
}
function executeHumeAbilityCheck(player) {
  // --- 1. 기본 조건 확인 ---
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  if (
    !abilityUsedState[player] ||
    abilityUsedState[player].usedCount >= abilityUsedState[player].maxUses
  ) {
    return null; // 사용 횟수 초과
  }

  const availablePropositions = truePropositions.filter(
    (p) => p.proposition && p.proposition.type === "universal" && p.propId
  );

  if (availablePropositions.length === 0) {
    return null; // 교체할 명제 없음
  }

  // --- 2. 위협 점수 산출을 위한 데이터 준비 ---
  const opponent = player === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === player
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponent
  );

  if (!myVictoryData || !opponentVictoryData) return null;

  const opponentWinPredicate = opponentVictoryData.core_goal.predicate;
  const myWinPredicate = myVictoryData.core_goal.predicate;
  const predicatePairs = currentLang.contradictoryPredicates;
  const myOppositePredicate =
    predicatePairs[myWinPredicate] ||
    Object.keys(predicatePairs).find(
      (key) => predicatePairs[key] === myWinPredicate
    );

  // --- 3. 각 후보의 '위협 점수' 계산 ---
  const scoredCandidates = availablePropositions.map((propData) => {
    let score = 0;
    const candidateProp = propData.proposition;

    // 상대 승리 조건과 직접적으로 관련될수록 위협적
    if (candidateProp.predicate === opponentWinPredicate) {
      score += 5000;
    }

    // 내 승리 조건에 반대될수록 위협적
    if (
      myOppositePredicate &&
      candidateProp.predicate === myOppositePredicate
    ) {
      score += 4000;
    }

    return { propData, score };
  });

  scoredCandidates.sort((a, b) => b.score - a.score);

  const bestCandidate =
    scoredCandidates.length > 0 ? scoredCandidates[0] : null;

  // --- 4. 실행 결정 및 능력 발동 ---
  const MINIMUM_THREAT_SCORE = 2000; // 기준 점수 설정
  if (!bestCandidate || bestCandidate.score < MINIMUM_THREAT_SCORE) {
    return null; // 사용할 가치가 있는 명제가 없음
  }

  console.log(
    `%cAI Hume used Problem of Induction on: ${propositionToNaturalText(
      bestCandidate.propData.proposition
    )} (Threat Score: ${bestCandidate.score})`,
    "color: #e67e22; font-weight: bold;"
  );

  const propIndex = truePropositions.findIndex(
    (p) => p.propId === bestCandidate.propData.propId
  );
  if (propIndex === -1) return null;

  const originalProp = truePropositions[propIndex].proposition;
  const newExistentialProp = {
    type: "existential",
    entity: originalProp.entity,
    predicate: originalProp.predicate,
  };

  // 실제 게임 상태 변경
  truePropositions[propIndex].proposition = newExistentialProp;
  truePropositions[propIndex].original_cards = null; // 렌더링을 위해 카드 정보 초기화
  truePropositions[propIndex].type = "theorem";
  truePropositions[propIndex].source = "hume_ability";

  abilityUsedState[player].usedCount++;

  // 진리 집합 재구성
  let newTruthSet = parsedAxioms.map((a) => a.proposition);
  const propositionsToReverify = truePropositions
    .filter((p) => p.proposition)
    .map((p) => p.proposition);

  for (const prop of propositionsToReverify) {
    const verificationResult = verifyAndExpandTruths(prop, newTruthSet);
    if (verificationResult.success) {
      newTruthSet = verificationResult.expandedSet;
    } else {
      console.error(
        "Critical error after AI Hume's ability: Inconsistency found."
      );
    }
  }
  internalTruthSet = newTruthSet;

  // 요약 정보 반환
  return {
    type: "ability",
    description: currentLang.ui.humeAbilityDescription.replace(
      "{proposition}",
      propositionToNaturalText(originalProp)
    ),
  };
}
/**
 * 특정 명제가 AI에게 얼마나 위협적인지 점수로 평가하는 헬퍼 함수
 * @param {object} prop - 평가할 명제 객체
 * @param {string} perspectivePlayer - AI 플레이어 ('A' 또는 'B')
 * @param {object} myVictoryData - AI의 승리 조건 데이터
 * @param {object} opponentVictoryData - 상대의 승리 조건 데이터
 * @returns {number} 위협 점수
 */
function scoreThreat(
  prop,
  perspectivePlayer,
  myVictoryData,
  opponentVictoryData
) {
  if (!prop || !myVictoryData || !opponentVictoryData) return 0;

  let score = 0;
  const opponentWinPredicate = opponentVictoryData.core_goal.predicate;
  const myWinPredicate = myVictoryData.core_goal.predicate;
  const predicatePairs = currentLang.contradictoryPredicates;
  const myOppositePredicate =
    predicatePairs[myWinPredicate] ||
    Object.keys(predicatePairs).find(
      (key) => predicatePairs[key] === myWinPredicate
    );

  // 1. 상대의 승리 조건과 직접적으로 연관되면 높은 점수
  if (prop.predicate === opponentWinPredicate) {
    score += prop.type === "universal" ? 5000 : 1000;
  }
  // 2. 나의 승리 조건과 반대되면 높은 점수
  if (myOppositePredicate && prop.predicate === myOppositePredicate) {
    score += prop.type === "universal" ? 4000 : 800;
  }
  // 3. 상대의 즉시 승리를 유발하는 명제라면 매우 높은 점수
  if (arePropositionsEqual(prop, opponentVictoryData.ultimate_target)) {
    score += 20000;
  }
  // 4. 나의 즉시 패배를 유발하는 명제라면 매우 높은 점수
  const myDefeatCondition = {
    type: "negation",
    proposition: myVictoryData.ultimate_target,
  };
  if (arePropositionsEqual(prop, myDefeatCondition)) {
    score += 18000;
  }

  return score;
}

/**
 * AI가 비트겐슈타인의 '사다리 걷어차기' 능력을 사용할지 결정하고 실행하는 함수
 * @param {string} player - 능력을 사용하려는 AI 플레이어 ('A' 또는 'B')
 * @returns {object|null} AI 행동 요약 객체 또는 null
 */
function executeWittgensteinAbilityCheck(player) {
  // --- 0. 기본 조건 검사 ---
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  if (abilityUsedState[player]?.used) {
    return null; // 이미 능력을 사용했으면 종료
  }

  const opponent = player === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === player
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponent
  );

  if (!myVictoryData || !opponentVictoryData) return null;

  // --- 1단계: 제거할 '핵심 위협' 목록 생성 및 정렬 ---
  const allTruthsOnBoard = getTemporaryUsableTruths();
  const candidatePropositions = truePropositions.filter(
    (p) => (p.type === "user-made" || p.type === "theorem") && p.propId
  );

  if (candidatePropositions.length === 0) {
    return null; // 제거할 후보 명제가 없으면 종료
  }

  const scoredCandidates = candidatePropositions.map((propData) => {
    const threatScore = scoreThreat(
      propData.proposition,
      player,
      myVictoryData,
      opponentVictoryData
    );
    return { propData, score: threatScore };
  });

  // 위협 점수가 높은 순으로 후보들을 정렬
  scoredCandidates.sort((a, b) => b.score - a.score);

  // --- 2단계 & 3단계: 최우선 위협부터 순서대로 제거 방법 탐색 및 평가 ---

  // 모든 추론 규칙 목록
  const allRules = [
    { rule: modusPonens, arity: 2 },
    { rule: modusTollens, arity: 2 },
    { rule: hypotheticalSyllogism, arity: 2 },
    { rule: disjunctiveSyllogism, arity: 2 },
    { rule: universalApplication, arity: 2 },
    { rule: proofByCases, arity: 3 },
  ];

  // 가장 위협적인 후보부터 순회
  for (const candidate of scoredCandidates) {
    const MINIMUM_THREAT_SCORE = 1; // 최소 위협 점수 기준 설정
    if (candidate.score < MINIMUM_THREAT_SCORE) {
      continue; // 점수가 기준보다 낮으면 이 후보는 건너뜀
    }
    const targetPropData = candidate.propData;
    const targetProp = targetPropData.proposition;

    // 이 목표물을 제거할 파트너를 찾기 위해 다른 모든 명제를 순회
    for (const partnerData of truePropositions) {
      if (
        !partnerData.proposition ||
        targetPropData.propId === partnerData.propId
      )
        continue;
      const partnerProp = partnerData.proposition;

      // 모든 추론 규칙을 시도
      for (const { rule, arity } of allRules) {
        let premises = [];
        let newTheorem = null;

        if (arity === 2) {
          // 규칙에 따라 전제 순서가 중요할 수 있으므로 두 가지 경우 모두 시도
          premises = [targetProp, partnerProp];
          newTheorem = rule(premises[0], premises[1]);

          if (!newTheorem) {
            premises = [partnerProp, targetProp];
            newTheorem = rule(premises[0], premises[1]);
          }
        }
        // (필요 시 arity 3 이상 규칙에 대한 로직 추가)

        if (!newTheorem) continue; // 이 조합으로는 새로운 정리가 안 나오면 다음 규칙으로

        // --- 3-1. 계획 평가: 안전성 및 효율성 검사 ---
        const premisesToKickData = [targetPropData, partnerData];
        const idsToKick = new Set(
          premisesToKickData.map((p) => p.propId).filter(Boolean)
        );

        // 가상 시나리오: 전제들을 제거하고 새 정리를 추가
        const remainingPropositions = truePropositions.filter(
          (p) => !idsToKick.has(p.propId)
        );
        const hypotheticalTruths = remainingPropositions
          .map((p) => p.proposition)
          .filter(Boolean);

        const verificationResult = verifyAndExpandTruths(
          newTheorem,
          hypotheticalTruths
        );
        if (!verificationResult.success) continue; // 모순 발생 시 기각

        const finalTruthSet = verificationResult.expandedSet;

        // 안전성 검사: 능력 사용 후 내가 지거나 상대가 이기는지 확인
        if (
          aiFindProof(opponentVictoryData.ultimate_target, finalTruthSet) ||
          aiFindProof(
            {
              type: "negation",
              proposition: myVictoryData.ultimate_target,
            },
            finalTruthSet
          )
        ) {
          continue; // 치명적 결과가 발생하면 기각
        }

        // 효율성 검사: 제거하려던 위협(targetProp)이 다시 증명되는지 확인
        if (aiFindProof(targetProp, finalTruthSet)) {
          continue; // 사다리가 제거되지 않으면 기각
        }

        // --- 4단계: 모든 검사를 통과한 첫 번째 계획을 즉시 실행 ---
        console.log(
          `%c[AI Wittgenstein] Target Acquired: ${propositionToNaturalText(
            targetProp
          )} (Threat: ${candidate.score})`,
          "color: #2ecc71; font-weight: bold;"
        );
        console.log(
          `%c[AI Wittgenstein] Justification Found: Using partner '${propositionToNaturalText(
            partnerProp
          )}' to derive '${propositionToNaturalText(newTheorem)}'`,
          "color: #2ecc71;"
        );

        abilityUsedState[player].used = true;
        truePropositions = remainingPropositions; // 전제들이 제거된 목록으로 교체

        truePropositions.push({
          propId: `prop_${Date.now()}_${Math.random()}`,
          type: "theorem",
          round: currentRound,
          proposition: newTheorem,
          source: "wittgenstein_ability",
        });

        internalTruthSet = finalTruthSet; // 재구성된 진리 집합으로 업데이트

        return {
          type: "ability",
          description: currentLang.ui.wittgensteinAbilityDescription.replace(
            "{newTheorem}",
            propositionToNaturalText(newTheorem)
          ),
        };
      }
    }
  }

  // 모든 위협적인 명제에 대해 유효한 제거 계획을 찾지 못함
  return null;
}
function getOppositePredicate(predicate) {
  const predicatePairs = currentLang.contradictoryPredicates;
  for (const key in predicatePairs) {
    if (key === predicate) return predicatePairs[key];
    if (predicatePairs[key] === predicate) return key;
  }
  return null;
}

function simulateKuhnsAbility(propIdToChange) {
  const originalPropData = truePropositions.find(
    (p) => p.propId === propIdToChange
  );
  if (!originalPropData) return null;

  const newPredicate = getOppositePredicate(
    originalPropData.proposition.predicate
  );
  if (!newPredicate) return null;

  const newParadigmProposition = {
    type: "universal",
    entity: originalPropData.proposition.entity,
    predicate: newPredicate,
  };

  const newParadigmPropForList = {
    propId: `sim_${Date.now()}`,
    type: "theorem",
    source: "kuhn_ability",
    proposition: newParadigmProposition,
  };

  const axioms = parsedAxioms.map((a) => a.proposition);
  const victoryConditions = truePropositions
    .filter((p) => p.type === "victory")
    .map((p) => p.proposition);
  const foundationOfTruths = [
    ...axioms,
    ...victoryConditions,
    newParadigmProposition,
  ];

  const preCheckResult = verifyAndExpandTruths(null, foundationOfTruths);
  if (!preCheckResult.success) return null;

  let currentValidatedTruths = preCheckResult.expandedSet;
  let survivingPropositions = [
    ...truePropositions.filter((p) => p.type === "victory"),
    newParadigmPropForList,
  ];

  const candidatesForRevalidation = truePropositions.filter(
    (p) =>
      (p.type === "user-made" || p.type === "theorem") &&
      p.propId !== propIdToChange
  );

  for (const candidate of candidatesForRevalidation) {
    const validationResult = verifyAndExpandTruths(
      candidate.proposition,
      currentValidatedTruths
    );
    if (validationResult.success) {
      currentValidatedTruths = validationResult.expandedSet;
      survivingPropositions.push(candidate);
    }
  }

  return {
    success: true,
    finalTruthSet: currentValidatedTruths,
    finalPropList: survivingPropositions,
  };
}

function executeKuhnsAbility(propIdToChange, player) {
  const simResult = simulateKuhnsAbility(propIdToChange);
  if (!simResult || !simResult.success) {
    console.error("AI Kuhn CRITICAL: Simulation passed but execution failed.");
    return null;
  }

  truePropositions = simResult.finalPropList;
  internalTruthSet = simResult.finalTruthSet;

  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[player].used = true;

  const newParadigmProp = simResult.finalPropList.find(
    (p) => p.source === "kuhn_ability"
  ).proposition;
  return {
    type: "ability",
    description: currentLang.ui.kuhnAbilityDescription.replace(
      "{newParadigm}",
      propositionToNaturalText(newParadigmProp)
    ),
  };
}

function executeKuhnAbilityCheck(player) {
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  if (abilityUsedState[player]?.used) return null;

  const userMadePropsCount = truePropositions.filter(
    (p) => p.type === "user-made"
  ).length;
  if (userMadePropsCount < 15) return null;

  const availablePropositions = truePropositions.filter(
    (p) => p.proposition && p.proposition.type === "universal" && p.propId
  );
  if (availablePropositions.length === 0) return null;

  const opponent = player === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === player
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponent
  );
  if (!myVictoryData || !opponentVictoryData) return null;

  const myUltimateGoal = myVictoryData.ultimate_target;

  for (const propData of availablePropositions) {
    const simResult = simulateKuhnsAbility(propData.propId);
    if (simResult && simResult.success) {
      if (aiFindProof(myUltimateGoal, simResult.finalTruthSet)) {
        console.log(
          `%c[AI Kuhn] PRIORITY 1 WIN DETECTED! Shifting paradigm on: ${propositionToNaturalText(
            propData.proposition
          )}`,
          "color: #f1c40f; font-weight: bold;"
        );
        return executeKuhnsAbility(propData.propId, player);
      }
    }
  }

  const scoredCandidates = availablePropositions
    .map((propData) => {
      let score = 0;
      const originalPredicate = propData.proposition.predicate;
      const newPredicate = getOppositePredicate(originalPredicate);
      if (!newPredicate) return { propData, score: -1 };

      const simResult = simulateKuhnsAbility(propData.propId);
      if (!simResult || !simResult.success) return { propData, score: -1 };
      if (
        aiFindProof(
          opponentVictoryData.ultimate_target,
          simResult.finalTruthSet
        )
      ) {
        return { propData, score: -1 };
      }

      if (newPredicate === myVictoryData.core_goal.predicate) {
        score = 5000;
      } else {
        const opponentOppositePredicate = getOppositePredicate(
          opponentVictoryData.core_goal.predicate
        );
        if (
          opponentOppositePredicate &&
          newPredicate === opponentOppositePredicate
        ) {
          score = 3000;
        }
      }
      return { propData, score };
    })
    .filter((c) => c.score > 0);

  if (scoredCandidates.length === 0) return null;

  scoredCandidates.sort((a, b) => b.score - a.score);
  const bestCandidate = scoredCandidates[0];

  console.log(
    `%c[AI Kuhn] Strategic move selected. Shifting paradigm on: ${propositionToNaturalText(
      bestCandidate.propData.proposition
    )} (Score: ${bestCandidate.score})`,
    "color: #f1c40f;"
  );
  return executeKuhnsAbility(bestCandidate.propData.propId, player);
}
/**
 * AI가 데리다의 '해체' 능력을 사용할지 결정하고 실행하는 함수
 * @param {string} player - 능력을 사용하려는 AI 플레이어 ('A' 또는 'B')
 * @returns {object|null} AI 행동 요약 객체 또는 null
 */
function executeDerridaAbilityCheck(player) {
  // --- 기본 조건 검사 ---
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  if (abilityUsedState[player]?.used) {
    return null; // 이미 능력을 사용했으면 종료
  }

  // --- 0. '그리고'를 제외한 연결사로 연결된 명제 찾기 ---
  const availablePropositions = truePropositions.filter(
    (p) =>
      p.propId && // ID가 있어 추적 및 삭제가 가능한 명제만
      p.proposition &&
      (p.proposition.type === "conditional" ||
        p.proposition.type === "disjunction")
  );

  if (availablePropositions.length === 0) {
    return null; // 해체할 후보 명제가 없으면 종료
  }

  // AI와 상대방의 승리 조건 데이터 가져오기
  const opponent = player === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === player
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponent
  );

  if (!myVictoryData || !opponentVictoryData) return null;

  let scoredCandidates = [];

  // 모든 후보 명제를 순회하며 평가
  for (const propData of availablePropositions) {
    const originalProp = propData.proposition;
    const { left, right } = originalProp;

    // --- 1. 알아서 분해되는 명제 거르기 (전건 긍정) ---
    if (originalProp.type === "conditional") {
      // (참인 명제) -> A 형태인지 검사
      if (aiFindProof(originalProp.left, internalTruthSet)) {
        continue; // 이미 참인 조건이므로, 일반 추론으로도 분해 가능. 능력 낭비 방지.
      }
    }

    // --- 2. 안전성 검사: 해체 시 상대 이득/모순 발생 여부 확인 ---
    // 원본 명제를 제외한 진리 집합을 시뮬레이션용으로 생성
    const propositionsWithoutOriginal = truePropositions.filter(
      (p) => p.propId !== propData.propId
    );
    let tempTruthSet = parsedAxioms.map((a) => a.proposition);
    propositionsWithoutOriginal.forEach((p) => {
      if (p.proposition) tempTruthSet.push(p.proposition);
    });

    const baseVerification = verifyAndExpandTruths(null, tempTruthSet);
    if (!baseVerification.success) continue; // 기반 집합부터 모순이면 스킵
    let truthSetAfterDeconstruction = baseVerification.expandedSet;

    // 해체된 첫 번째 부분(left)을 추가했을 때 모순 검사
    const verification1 = verifyAndExpandTruths(
      left,
      truthSetAfterDeconstruction
    );
    if (!verification1.success) continue;

    // 이어서 두 번째 부분(right)을 추가했을 때 모순 검사
    const verification2 = verifyAndExpandTruths(
      right,
      verification1.expandedSet
    );
    if (!verification2.success) continue;

    // 최종적으로 확장된 진리 집합
    const finalTruthSet = verification2.expandedSet;

    // 상대가 승리하게 되는지 검사 (치명적 패널티)
    if (aiFindProof(opponentVictoryData.ultimate_target, finalTruthSet)) {
      continue; // 상대 승리를 유발하는 해체는 절대 금지
    }

    // --- 3. 기회 검사: 자신에게 유리한 명제가 나오는지 점수화 ---
    let currentScore = 0;
    const myUltimateGoal = myVictoryData.ultimate_target;
    const myWinPredicate = myVictoryData.core_goal.predicate;

    // 3-1. 필승 검사
    if (aiFindProof(myUltimateGoal, finalTruthSet)) {
      currentScore += 100000; // 해체 즉시 승리하면 압도적인 점수
    } else {
      // 3-2. 유리한 명제(전칭/존재)가 나오는지 검사
      const scoreComponent = (component) => {
        let score = 0;
        // 유리한 전칭 양화문
        if (
          component.type === "universal" &&
          component.predicate === myWinPredicate
        ) {
          score += 5000;
        }
        // 유리한 존재 양화문
        else if (
          component.type === "existential" &&
          component.predicate === myWinPredicate
        ) {
          score += 2000;
        }
        return score;
      };
      currentScore += scoreComponent(left);
      currentScore += scoreComponent(right);
    }

    if (currentScore > 0) {
      scoredCandidates.push({
        propData,
        score: currentScore,
        finalTruthSet,
      });
    }
  }

  if (scoredCandidates.length === 0) return null;

  // --- 4. 최종 선택: 점수가 가장 높고, 최소 기준을 넘는 명제 해체 ---
  scoredCandidates.sort((a, b) => b.score - a.score);
  const bestCandidate = scoredCandidates[0];

  // 최소 점수 기준: 유리한 존재 양화문 보너스(2000)보다 높아야 함
  const MINIMUM_SCORE_THRESHOLD = 2001;
  if (bestCandidate.score < MINIMUM_SCORE_THRESHOLD) {
    return null; // 최소 기준 미달 시 능력 사용 안 함
  }

  // --- 능력 실행 ---
  console.log(
    `%c[AI Derrida] Target Acquired: ${propositionToNaturalText(
      bestCandidate.propData.proposition
    )} (Score: ${bestCandidate.score})`,
    "color: #9b59b6; font-weight: bold;"
  );

  abilityUsedState[player].used = true;

  // 원본 명제 삭제
  truePropositions = truePropositions.filter(
    (p) => p.propId !== bestCandidate.propData.propId
  );

  // 해체된 두 명제 추가
  const { left, right } = bestCandidate.propData.proposition;
  const newProps = [
    {
      propId: `prop_${Date.now()}_${Math.random()}`,
      type: "theorem",
      source: "derrida_ability",
      proposition: left,
    },
    {
      propId: `prop_${Date.now()}_${Math.random()}`,
      type: "theorem",
      source: "derrida_ability",
      proposition: right,
    },
  ];
  truePropositions.push(...newProps);

  // 최종 진리 집합으로 업데이트
  internalTruthSet = bestCandidate.finalTruthSet;

  // 요약 정보 반환
  return {
    type: "ability",
    description: currentLang.ui.derridaAbilityDescription.replace(
      "{proposition}",
      propositionToNaturalText(bestCandidate.propData.proposition)
    ),
  };
}
/**
 * AI가 칸트의 '선험적 종합판단' 능력을 요청된 우선순위에 따라 결정하고 실행하는 함수
 * @param {string} player - 능력을 사용하려는 AI 플레이어 ('A' 또는 'B')
 * @returns {object|null} AI 행동 요약 객체 또는 null (능력을 사용하지 않을 경우)
 */
function executeKantAbilityCheck(player) {
  // --- 1단계: 기본 조건 검사 및 후보 생성 ---
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  const hand = player === "A" ? playerA_Hand : playerB_Hand;
  if (hand.length === 0) return null;

  const candidatePropositions = [];
  function generatePropositionsFromHand(currentProposition, remainingHand) {
    const parsed = parsePropositionFromCards(
      currentProposition.map((c) => ({ card: c }))
    );
    if (parsed) {
      if (!candidatePropositions.some((p) => arePropositionsEqual(p, parsed))) {
        candidatePropositions.push(parsed);
      }
    }
    if (remainingHand.length === 0) return;
    for (let i = 0; i < remainingHand.length; i++) {
      const nextCard = remainingHand[i];
      const connectiveKeywords = [
        currentLang.keywords.if,
        currentLang.keywords.and,
        currentLang.keywords.or,
      ];
      if (connectiveKeywords.includes(nextCard.text)) {
        continue;
      }
      const tempPropositionForValidation = currentProposition.map((c) => ({
        card: c,
      }));
      if (isValidPlay(nextCard, tempPropositionForValidation)) {
        const nextProposition = [...currentProposition, nextCard];
        const nextRemainingHand = remainingHand.filter(
          (_, index) => index !== i
        );
        generatePropositionsFromHand(nextProposition, nextRemainingHand);
      }
    }
  }
  generatePropositionsFromHand([], hand);

  if (candidatePropositions.length === 0) return null;

  // --- 2단계: 우선순위에 따른 후보 평가 ---
  const evaluatedCandidates = [];
  const opponent = player === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === player
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponent
  );

  if (!myVictoryData || !opponentVictoryData) return null;

  const myWinPredicate = myVictoryData.core_goal.predicate;
  const opponentWinPredicate = opponentVictoryData.core_goal.predicate;
  const opponentAntiWinPredicate = getOppositePredicate(opponentWinPredicate);

  for (const candidate of candidatePropositions) {
    const verificationResult = verifyAndExpandTruths(
      candidate,
      internalTruthSet
    );
    if (!verificationResult.success) continue;

    const finalTruthSet = verificationResult.expandedSet;
    const myLossCondition = {
      type: "negation",
      proposition: myVictoryData.ultimate_target,
    };

    if (
      aiFindProof(opponentVictoryData.ultimate_target, finalTruthSet) ||
      aiFindProof(myLossCondition, finalTruthSet)
    ) {
      continue;
    }

    if (aiFindProof(myVictoryData.ultimate_target, finalTruthSet)) {
      evaluatedCandidates.push({
        proposition: candidate,
        priority: 1,
        finalTruthSet,
      });
      continue;
    }
    if (
      candidate.type === "universal" &&
      candidate.predicate === myWinPredicate
    ) {
      evaluatedCandidates.push({
        proposition: candidate,
        priority: 2,
        finalTruthSet,
      });
      continue;
    }
    if (
      opponentAntiWinPredicate &&
      candidate.type === "universal" &&
      candidate.predicate === opponentAntiWinPredicate
    ) {
      evaluatedCandidates.push({
        proposition: candidate,
        priority: 3,
        finalTruthSet,
      });
      continue;
    }
    if (
      opponentAntiWinPredicate &&
      candidate.type === "existential" &&
      candidate.predicate === opponentAntiWinPredicate
    ) {
      evaluatedCandidates.push({
        proposition: candidate,
        priority: 4,
        finalTruthSet,
      });
      continue;
    }
  }

  // --- 3단계: 최적 후보 선정 및 능력 실행 ---
  if (evaluatedCandidates.length === 0) return null;

  const bestPriority = Math.min(...evaluatedCandidates.map((c) => c.priority));
  const bestOptions = evaluatedCandidates.filter(
    (c) => c.priority === bestPriority
  );
  const bestCandidate =
    bestOptions[Math.floor(Math.random() * bestOptions.length)];

  console.log(
    `%c[AI Kant] Priority ${
      bestCandidate.priority
    } Action Selected: ${propositionToNaturalText(bestCandidate.proposition)}`,
    "color: #1abc9c; font-weight: bold;"
  );

  abilityUsedState[player].used = true;

  const cardsToCreate = propositionToNaturalText(
    bestCandidate.proposition
  ).split(" ");
  let tempHand = [...hand];
  cardsToCreate.forEach((cardText) => {
    const cardIndex = tempHand.findIndex((c) => c.text === cardText);
    if (cardIndex > -1) tempHand.splice(cardIndex, 1);
  });
  if (player === "A") playerA_Hand = tempHand;
  else playerB_Hand = tempHand;

  truePropositions.push({
    propId: `prop_${Date.now()}_${Math.random()}`,
    type: "theorem",
    source: "kant_ability",
    proposition: bestCandidate.proposition,
  });

  internalTruthSet = bestCandidate.finalTruthSet;

  return {
    type: "ability",
    description: currentLang.ui.kantAbilityDescription.replace(
      "{proposition}",
      propositionToNaturalText(bestCandidate.proposition)
    ),
  };
}

// 헬퍼 함수 (다른 AI 로직에서도 필요할 수 있으므로 전역에 정의)
function getOppositePredicate(predicate) {
  const predicatePairs = currentLang.contradictoryPredicates;
  for (const key in predicatePairs) {
    if (key === predicate) return predicatePairs[key];
    if (predicatePairs[key] === predicate) return key;
  }
  return null;
}

/**
 * 모든 순방향 추론 과정을 '족보(lineage)'와 함께 기록하여 반환합니다. (버그 수정 최종본)
 * @param {object[]} initialTruths - 추론의 시작점이 될 참인 명제 객체들의 배열.
 * @returns {{id: number, proposition: object, rule: string, premises: number[]}[]} 모든 추론 단계를 포함하는 ProofNode 객체 배열.
 */
function expandAndRecordTruths(initialTruths) {
  let stepCounter = 0;
  let fullProofLog = [];

  const addNodeIfNew = (conclusion, rule, premiseNodes) => {
    if (!conclusion) return false;
    const isAlreadyKnown = fullProofLog.some((p) =>
      arePropositionsEqual(p.proposition, conclusion)
    );
    if (isAlreadyKnown) {
      return false;
    }
    stepCounter++;
    fullProofLog.push({
      id: stepCounter,
      proposition: conclusion,
      rule: rule,
      premises: premiseNodes.map((node) => node.id),
    });
    return true;
  };

  initialTruths.forEach((prop) => {
    stepCounter++;
    fullProofLog.push({
      id: stepCounter,
      proposition: prop,
      rule: "Initial Truth",
      premises: [],
    });
  });

  let newTruthsFoundInIteration = true;
  while (newTruthsFoundInIteration) {
    newTruthsFoundInIteration = false;
    const currentSnapshot = [...fullProofLog];

    for (let i = 0; i < currentSnapshot.length; i++) {
      const node1 = currentSnapshot[i];

      // --- 1개 전제 규칙 (명시적 호출) ---
      let onePremiseResults = [];
      onePremiseResults.push({
        result: doubleNegationElimination(node1.proposition),
        rule: "doubleNegationElimination",
      });
      onePremiseResults.push({
        result: existentialInstantiation(node1.proposition),
        rule: "existentialInstantiation",
      });
      // conjunctionElimination은 결과가 배열이므로 별도 처리
      const ceResult = conjunctionElimination(node1.proposition);
      if (ceResult) {
        onePremiseResults.push({
          result: ceResult[0],
          rule: "conjunctionElimination",
        });
        onePremiseResults.push({
          result: ceResult[1],
          rule: "conjunctionElimination",
        });
      }

      for (const item of onePremiseResults) {
        if (addNodeIfNew(item.result, item.rule, [node1])) {
          newTruthsFoundInIteration = true;
        }
      }

      // --- 2개 전제 규칙 (명시적 호출) ---
      for (let j = i + 1; j < currentSnapshot.length; j++) {
        // i + 1로 중복 조합 방지
        const node2 = currentSnapshot[j];

        let twoPremiseResults = [];
        twoPremiseResults.push({
          result: modusPonens(node1.proposition, node2.proposition),
          rule: "modusPonens",
        });
        twoPremiseResults.push({
          result: modusTollens(node1.proposition, node2.proposition),
          rule: "modusTollens",
        });
        twoPremiseResults.push({
          result: hypotheticalSyllogism(node1.proposition, node2.proposition),
          rule: "hypotheticalSyllogism",
        });
        twoPremiseResults.push({
          result: disjunctiveSyllogism(node1.proposition, node2.proposition),
          rule: "disjunctiveSyllogism",
        });
        twoPremiseResults.push({
          result: universalApplication(node1.proposition, node2.proposition),
          rule: "universalApplication",
        });

        for (const item of twoPremiseResults) {
          if (addNodeIfNew(item.result, item.rule, [node1, node2])) {
            newTruthsFoundInIteration = true;
          }
        }

        // --- 3개 전제 규칙 (명시적 호출) ---
        for (let k = j + 1; k < currentSnapshot.length; k++) {
          // j + 1로 중복 조합 방지
          const node3 = currentSnapshot[k];
          const pbcResult = proofByCases(
            node1.proposition,
            node2.proposition,
            node3.proposition
          );
          if (addNodeIfNew(pbcResult, "proofByCases", [node1, node2, node3])) {
            newTruthsFoundInIteration = true;
          }
        }
      }
    }
  }
  console.log(
    `[expandAndRecordTruths] Total ${fullProofLog.length} steps recorded.`
  );
  return fullProofLog;
}
/**
 * AI가 생성한 전체 증명 로그를 '논증 다시보기' 형식으로 변환하고,
 * 정해진 UI 순서에 따라 모달을 표시합니다.
 * @param {object[]} fullProofLog - expandAndRecordTruths가 반환한 전체 ProofNode 배열
 * @param {object} goal - AI가 최종적으로 증명한 승리 명제
 */
function prepareAndShowAIProof(fullProofLog, goal) {
  // --- 1단계: 데이터 준비 (기존과 동일) ---
  proofSteps = fullProofLog.map((node) => ({
    id: node.id,
    conclusion: node.proposition,
    type: node.rule === "Initial Truth" ? "premise" : "inference",
    rule: node.rule,
    premises: node.premises,
    timestamp: Date.now(),
  }));

  victoryProposition = goal;

  // ★★★★★★★★★★ 핵심 수정 부분 ★★★★★★★★★★
  // 2. 최종 승리 단계(goal)를 찾아서 type을 'victory'로 명시적으로 변경
  const finalVictoryStep = proofSteps.find((step) =>
    arePropositionsEqual(step.conclusion, goal)
  );
  if (finalVictoryStep) {
    finalVictoryStep.type = "victory";
    console.log(
      `Victory step (ID: ${finalVictoryStep.id}) has been explicitly tagged.`
    );
  } else {
    console.error(
      "CRITICAL: The victory proposition was not found in the generated proof log."
    );
    // 승리 단계를 못찾으면 추적이 불가능하므로, 여기서 게임을 종료하고 오류를 알림
    showAlert(currentLang.alerts.aiEurekaDeclared, () =>
      endGame(currentPlayer)
    );
    return;
  }
  // ★★★★★★★★★★ 수정 끝 ★★★★★★★★★★

  // --- 3단계: 유레카 선언 알림 (기존과 동일) ---
  showAlert(currentLang.alerts.aiEurekaDeclared, () => {
    // --- 4단계: 논증 다시보기 표시 (기존과 동일) ---
    showProofReviewModal();

    const closeBtn = document.getElementById("close-proof-review-modal-btn");
    if (closeBtn) {
      closeBtn.onclick = () => {
        hideProofReviewModal();
        endGame(currentPlayer);

        // ★★★ (선택사항) 다음 게임을 위해 버튼의 onclick을 원래대로 되돌려 놓는 것이 좋습니다.
        // 이 부분은 events.js나 초기화 로직에 따라 달라질 수 있습니다.
        // closeBtn.onclick = hideProofReviewModal;
      };
    }
  });
}
