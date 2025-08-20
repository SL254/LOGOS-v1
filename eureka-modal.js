function openEurekaModal() {
  derivedPropositionsInModal = [];
  currentAssumption = null;
  const modal = document.getElementById("eureka-modal");
  const premiseList = document.getElementById("premise-list");
  premiseList.innerHTML = "";
  const allSelectablePropositions = [
    ...parsedAxioms,
    ...truePropositions
      .map((p) => ({ ...p, proposition: p.proposition }))
      .filter((p) => p.proposition),
  ].filter(
    (propData) =>
      // ✅ propData에 propId가 있고, 그 ID가 socratesDisabledProps 배열에 포함되지 않은 경우만 true를 반환
      !propData.propId ||
      !socratesDisabledProps.some((dp) => dp.propId === propData.propId)
  );

  // 공리들을 그룹별로 분류하고 순서대로 추가
  const axioms = allSelectablePropositions.filter((p) => p.type === "axiom");
  const nonAxioms = allSelectablePropositions.filter((p) => p.type !== "axiom");

  // 공리를 그룹화하여 추가 - 작은 서브그룹별로 구분선 추가
  if (currentAxioms.groups && axioms.length > 0) {
    const groups = currentAxioms.groups;
    const templates = currentLang.axiom_templates;
    let axiomIndex = 0;

    // 정체성 공리 그룹
    if (groups.identity && groups.identity.length > 0) {
      for (let i = 0; i < groups.identity.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 정체성 그룹 구분선 추가
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }

    // 개체별 속성 대립 그룹 - 서브그룹별로 나누기
    if (groups.subjectOpposition && groups.subjectOpposition.length > 0) {
      // 첫 번째 철학자 선악 공리
      for (let i = 0; i < templates.subject_good_evil.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 첫 번째 철학자 지혜 공리
      for (let i = 0; i < templates.subject_wise_foolish.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 두 번째 철학자 선악 공리
      for (let i = 0; i < templates.subject_good_evil.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 두 번째 철학자 지혜 공리
      for (let i = 0; i < templates.subject_wise_foolish.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 개체별 속성 대립 그룹 구분선 추가
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }

    // 집단별 속성 대립 그룹 - 서브그룹별로 나누기
    if (groups.quantifierOpposition && groups.quantifierOpposition.length > 0) {
      // 새 집단 순방향
      for (let i = 0; i < templates.bird_good_evil_forward.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 새 집단 역방향
      for (let i = 0; i < templates.bird_good_evil_reverse.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 물고기 집단 순방향
      for (let i = 0; i < templates.fish_good_evil_forward.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 물고기 집단 역방향
      for (let i = 0; i < templates.fish_good_evil_reverse.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 개 집단 순방향
      for (let i = 0; i < templates.dog_good_evil_forward.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 개 집단 역방향
      for (let i = 0; i < templates.dog_good_evil_reverse.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 마르크스 공리가 있으면 추가
      const remainingAxioms = axioms.slice(axiomIndex);
      const marxAxioms = remainingAxioms.filter((a) => {
        const text = propositionToNaturalText(a.proposition);
        return text.includes("브루주아") || text.includes("Bourgeois");
      });

      if (marxAxioms.length > 0) {
        // 서브그룹 구분선
        addPremiseToWorkbench({
          type: "separator",
          label: "",
          proposition: null,
          isSeparator: true,
        });

        marxAxioms.forEach((axiomData) => {
          addPremiseToWorkbench({
            ...axiomData,
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        });
      }

      // 집단별 속성 대립 그룹 마지막 구분선 추가
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }
  } else {
    // 기존 방식으로 공리 추가 (하위 호환성)
    axioms.forEach((propData) => {
      addPremiseToWorkbench({
        ...propData,
        label: currentLang.labels.axiom,
      });
    });

    // 공리 마지막 구분선 추가
    if (axioms.length > 0) {
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }
  }

  // 공리가 아닌 명제들 추가
  nonAxioms.forEach((propData) => {
    let label;
    switch (propData.type) {
      case "victory":
        label = currentLang.labels.victory_condition;
        break;
      case "theorem":
        label = currentLang.labels.theorem;
        break;
      default:
        label = currentLang.labels.proposition;
    }
    addPremiseToWorkbench({
      proposition: propData.proposition,
      type: propData.type,
      dependsOnAssumption: false,
      isAssumption: false,
      label: label,
    });
  });
  const modalTitle = document.getElementById("eureka-title");
  const confirmBtn = document.getElementById("modal-confirm-btn");
  if (isThinkingTime) {
    modalTitle.textContent = currentLang.modals.eurekaTitleTheorem;
    confirmBtn.textContent = currentLang.modals.confirmTheoremButton;
    confirmBtn.onclick = addTheoremsToList;
  } else {
    modalTitle.textContent = currentLang.modals.eurekaTitleVictory;
    confirmBtn.textContent = currentLang.modals.confirmVictoryButton;
    confirmBtn.onclick = proveVictory;
  }
  renderModal();
  document.getElementById("inference-rule-select").onchange =
    updateConclusionPreview;

  // 추론 규칙을 전건 긍정으로 초기화
  document.getElementById("inference-rule-select").value = "modusPonens";

  updateConclusionPreview(); // Initialize preview

  modal.classList.add("visible");

  // DOM 렌더링 후 스크롤 위치를 맨 아래로 설정 (애니메이션 없이)
  setTimeout(() => {
    if (premiseList) {
      // 마지막 자식 요소를 찾아서 스크롤
      const lastChild = premiseList.lastElementChild;
      if (lastChild) {
        lastChild.scrollIntoView({ block: "end" });
      } else {
        // 자식 요소가 없으면 직접 스크롤
        premiseList.scrollTop = premiseList.scrollHeight;
      }
    }
  }, 0);
}

function addAssumption() {
  if (currentAssumption) {
    showAlert(currentLang.alerts.oneAssumptionOnly);
    return;
  }
  showPrompt(currentLang.modals.promptInputPlaceholder, (propositionText) => {
    if (propositionText) {
      const parsedProp = parsePropositionFromString(propositionText);
      if (parsedProp) {
        currentAssumption = parsedProp;
        addPremiseToWorkbench({
          proposition: parsedProp,
          type: "assumption",
          dependsOnAssumption: true,
          isAssumption: true,
          label: currentLang.labels.assumption,
        });
        // 가정 추가 성공 시 pop 사운드 재생
        audioManager.playSfx("pop");
        renderModal();
        updateConclusionPreview();

        // 가정 추가 성공 시 스크롤을 맨 아래로 부드럽게 이동
        setTimeout(() => {
          const premiseList = document.getElementById("premise-list");
          if (premiseList) {
            const lastChild = premiseList.lastElementChild;
            if (lastChild) {
              lastChild.scrollIntoView({
                behavior: "smooth",
                block: "end",
              });
            } else {
              premiseList.scrollTo({
                top: premiseList.scrollHeight,
                behavior: "smooth",
              });
            }
          }
        }, 100);
      } else {
        showAlert(currentLang.alerts.parsingFailed);
      }
    }
  });
}

function cancelAssumption() {
  if (inTutorialMode) return;
  currentAssumption = null;
  derivedPropositionsInModal = derivedPropositionsInModal.filter(
    (p) => !p.dependsOnAssumption
  );
  renderModal();
  updateConclusionPreview();
}

function addPremiseToWorkbench(propObject) {
  derivedPropositionsInModal.push(propObject);
}

function applyRule() {
  const selectedLis = Array.from(
    document.querySelectorAll('#premise-list input[type="checkbox"]:checked')
  );
  const rule = document.getElementById("inference-rule-select").value;

  // 이 증명에 직접적으로 사용된 전제 데이터 (이것이 부모 전제가 됨)
  const premisesData = selectedLis.map((chk) =>
    JSON.parse(chk.parentElement.dataset.propObject)
  );
  const premises = premisesData.map((data) => data.proposition);
  let conclusions = [];

  const onePremiseRules = [
    "conjunctionElimination",
    "doubleNegationElimination",
    "conditionalIntroduction",
    "existentialInstantiation",
  ];
  const twoPremiseRules = [
    "modusPonens",
    "modusTollens",
    "hypotheticalSyllogism",
    "disjunctiveSyllogism",
    "universalApplication",
  ];
  const threePremiseRules = ["proofByCases"];

  if (rule === "conditionalIntroduction") {
    if (premises.length !== 1) {
      showAlert(currentLang.alerts.premiseNeededForIntro);
      return;
    }
    if (!currentAssumption) {
      showAlert(currentLang.alerts.assumptionNeededForIntro);
      return;
    }
    const conclusionData = premisesData[0];
    if (!conclusionData.dependsOnAssumption) {
      showAlert(currentLang.alerts.premiseNotFromAssumption);
      return;
    }
    const newConditional = {
      type: "conditional",
      left: currentAssumption,
      right: conclusionData.proposition,
    };

    // '가정'과 그로부터 도출된 '결론' 모두를 source로 추적
    const assumptionData = derivedPropositionsInModal.find(
      (p) => p.isAssumption
    );
    const sourcePremisesForCI = [assumptionData, conclusionData];

    derivedPropositionsInModal = derivedPropositionsInModal.filter(
      (p) => !p.dependsOnAssumption
    );
    currentAssumption = null;
    addPremiseToWorkbench({
      proposition: newConditional,
      type: "theorem",
      dependsOnAssumption: false,
      isAssumption: false,
      label: currentLang.labels.ci_theorem,
      sourcePremises: sourcePremisesForCI, // source 정보 추가
    });
    // 조건부 도입 성공 시 사운드 재생
    audioManager.playSfx("pop");
  } else if (rule === "reductioAdAbsurdum") {
    if (premises.length !== 2) {
      showAlert(currentLang.alerts.contradictionNeededForRAA);
      return;
    }
    if (!currentAssumption) {
      showAlert(currentLang.alerts.assumptionNeededForRAA);
      return;
    }

    // '가정'과 모순을 이끌어낸 '두 전제' 모두를 source로 추적
    const assumptionData = derivedPropositionsInModal.find(
      (p) => p.isAssumption
    );
    const sourcePremisesForRAA = [assumptionData, ...premisesData];

    const result = reductioAdAbsurdum(
      premises[0],
      premises[1],
      currentAssumption
    );
    if (result) {
      derivedPropositionsInModal = derivedPropositionsInModal.filter(
        (p) => !p.dependsOnAssumption
      );
      currentAssumption = null;
      addPremiseToWorkbench({
        proposition: result,
        type: "theorem",
        dependsOnAssumption: false,
        isAssumption: false,
        label: currentLang.labels.raa_theorem,
        sourcePremises: sourcePremisesForRAA, // source 정보 추가
      });
      // 귀류법 성공 시 사운드 재생
      audioManager.playSfx("pop");
    } else {
      showAlert(currentLang.alerts.notAContradiction);
    }
  } else if (threePremiseRules.includes(rule)) {
    if (premises.length !== 3) {
      showAlert(currentLang.alerts.premiseCountError.replace("{count}", 3));
      return;
    }
    const result = window[rule](premises[0], premises[1], premises[2]);
    if (result) conclusions.push(result);
  } else if (twoPremiseRules.includes(rule)) {
    if (premises.length !== 2) {
      showAlert(currentLang.alerts.premiseCountError.replace("{count}", 2));
      return;
    }
    const result = window[rule](premises[0], premises[1]);
    if (result) conclusions.push(result);
  } else if (onePremiseRules.includes(rule)) {
    if (premises.length !== 1) {
      showAlert(currentLang.alerts.premiseCountError.replace("{count}", 1));
      return;
    }
    const result = window[rule](premises[0]);
    if (result) {
      if (Array.isArray(result)) conclusions.push(...result);
      else conclusions.push(result);
    }
  }

  if (conclusions.length > 0 && conclusions[0] != null) {
    const isDependent = premisesData.some((p) => p.dependsOnAssumption);
    conclusions.forEach((conc) => {
      addPremiseToWorkbench({
        proposition: conc,
        type: "theorem",
        dependsOnAssumption: isDependent,
        isAssumption: false,
        label: currentLang.labels.theorem,
        sourcePremises: premisesData, // source 정보 추가
      });
    });
    // 추론 규칙 적용 성공 시 사운드 재생
    audioManager.playSfx("pop");
  } else if (
    rule !== "reductioAdAbsurdum" &&
    rule !== "conditionalIntroduction" &&
    conclusions.length === 0
  ) {
    showAlert(currentLang.alerts.ruleFailed);
  }

  renderModal();
  updateConclusionPreview();

  // 추론 규칙 적용 성공 시 스크롤을 맨 아래로 부드럽게 이동
  if (conclusions.length > 0) {
    setTimeout(() => {
      const premiseList = document.getElementById("premise-list");
      if (premiseList) {
        const lastChild = premiseList.lastElementChild;
        if (lastChild) {
          lastChild.scrollIntoView({ behavior: "smooth", block: "end" });
        } else {
          premiseList.scrollTo({
            top: premiseList.scrollHeight,
            behavior: "smooth",
          });
        }
      }
    }, 100);
  }
}

function addTheoremsToList() {
  const selectedLis = Array.from(
    document.querySelectorAll('#premise-list input[type="checkbox"]:checked')
  );
  if (selectedLis.length === 0) {
    showAlert(currentLang.alerts.noTheoremsToAdd);
    return;
  }

  const selectedPropsData = selectedLis.map((chk) =>
    JSON.parse(chk.parentElement.dataset.propObject)
  );

  let potentialTheorems = selectedPropsData.filter(
    (p) => p.type === "theorem" && !p.dependsOnAssumption
  );

  const trulyNewTheorems = potentialTheorems.filter((theoremData) => {
    const isAxiom = parsedAxioms.some((a) =>
      arePropositionsEqual(a.proposition, theoremData.proposition)
    );
    const isAlreadyProven = truePropositions.some(
      (p) =>
        p.proposition &&
        arePropositionsEqual(p.proposition, theoremData.proposition)
    );
    return !isAxiom && !isAlreadyProven;
  });

  if (trulyNewTheorems.length === 0) {
    showAlert(currentLang.alerts.duplicateProposition);
    return;
  }

  let theoremsAdded = 0;
  for (const theoremData of trulyNewTheorems) {
    const verificationResult = verifyAndExpandTruths(theoremData.proposition);

    if (verificationResult.success) {
      truePropositions.push({
        propId: `prop_${Date.now()}_${Math.random()}`, // ✅ 이 줄이 추가되었습니다.
        type: "theorem",
        round: currentRound,
        proposition: theoremData.proposition,
      });
      internalTruthSet = verificationResult.expandedSet;
      theoremsAdded++;
    } else {
      console.error(
        "Contradiction detected while adding a new theorem.",
        theoremData.proposition
      );
      showAlert(currentLang.alerts.contradictionFound);
      break;
    }
  }

  if (theoremsAdded > 0) {
    document.getElementById("eureka-modal").classList.remove("visible");
    render();
  }
}

function proveVictory() {
  if (isThinkingTime) return;

  if (inPuzzleMode) {
    const myVictoryCondition = truePropositions.find(
      (p) => p.type === "victory" && p.owner === "A"
    );
    const opponentVictoryCondition = truePropositions.find(
      (p) => p.type === "victory" && p.owner === "B"
    );

    if (!myVictoryCondition || !opponentVictoryCondition) return;

    const myUltimateTarget = myVictoryCondition.ultimate_target;
    const opponentLossCondition = {
      type: "negation",
      proposition: opponentVictoryCondition.ultimate_target,
    };

    const isMyVictoryProven = derivedPropositionsInModal.some(
      (p) =>
        !p.dependsOnAssumption &&
        arePropositionsEqual(p.proposition, myUltimateTarget)
    );
    const isOpponentLossProven = derivedPropositionsInModal.some(
      (p) =>
        !p.dependsOnAssumption &&
        arePropositionsEqual(p.proposition, opponentLossCondition)
    );

    if (isMyVictoryProven || isOpponentLossProven) {
      try {
        // 1. 기존 클리어 데이터 불러오기 (없으면 빈 객체)
        const clearedPuzzles =
          JSON.parse(localStorage.getItem("logos_cleared_puzzles")) || {};
        // 2. 현재 클리어한 퍼즐 번호 기록
        clearedPuzzles[currentPuzzleLevel] = true;
        // 3. 다시 로컬 스토리지에 저장
        localStorage.setItem(
          "logos_cleared_puzzles",
          JSON.stringify(clearedPuzzles)
        );
      } catch (e) {
        console.error("퍼즐 클리어 데이터 저장 실패:", e);
      }

      showAlert(currentLang.alerts.puzzleCleared, () => {
        document.getElementById("eureka-modal").classList.remove("visible");
        document.getElementById("puzzle-goal-box").classList.add("hidden");
        inPuzzleMode = false;
        populatePuzzleLevels();
        document
          .getElementById("puzzle-level-select-modal")
          .classList.add("visible");
      });
    } else {
      showAlert(
        currentLang.alerts.proofIncomplete
          .replace("{myGoal}", propositionToPlainText(myUltimateTarget))
          .replace(
            "{opponentGoal}",
            propositionToPlainText(opponentLossCondition)
          )
      );
    }
    return; // 퍼즐 모드일 경우 여기서 함수 종료
  }

  // --- 튜토리얼 마지막 단계 성공 처리 로직 (새로 추가된 부분) ---
  if (inTutorialMode && tutorialStep === 8) {
    const myVictoryCondition = truePropositions.find(
      (p) => p.type === "victory" && p.owner === currentPlayer
    );
    const opponentPlayer = currentPlayer === "A" ? "B" : "A";
    const opponentVictoryCondition = truePropositions.find(
      (p) => p.type === "victory" && p.owner === opponentPlayer
    );

    if (!myVictoryCondition || !opponentVictoryCondition) return;

    const myUltimateTarget = myVictoryCondition.ultimate_target;
    const opponentLossCondition = {
      type: "negation",
      proposition: opponentVictoryCondition.ultimate_target,
    };

    const isMyVictoryProven = derivedPropositionsInModal.some(
      (p) =>
        !p.dependsOnAssumption &&
        arePropositionsEqual(p.proposition, myUltimateTarget)
    );
    const isOpponentLossProven = derivedPropositionsInModal.some(
      (p) =>
        !p.dependsOnAssumption &&
        arePropositionsEqual(p.proposition, opponentLossCondition)
    );

    if (isMyVictoryProven || isOpponentLossProven) {
      // 성공 시, 새로 추가한 알림 메시지를 띄우고 확인을 누르면 튜토리얼을 종료합니다.
      showAlert(currentLang.alerts.tutorialVictory, endTutorial);
    } else {
      // 실패 시, 기존처럼 증명 미완료 메시지를 띄웁니다.
      showAlert(
        currentLang.alerts.proofIncomplete
          .replace("{myGoal}", propositionToPlainText(myUltimateTarget))
          .replace(
            "{opponentGoal}",
            propositionToPlainText(opponentLossCondition)
          )
      );
    }
    return; // 튜토리얼 케이스 처리가 끝나면 함수를 즉시 종료합니다.
  }
  // --- 튜토리얼 로직 끝 ---

  // --- 이하 기존의 일반 게임 승리 증명 로직 ---
  const myVictoryCondition = truePropositions.find(
    (p) => p.type === "victory" && p.owner === currentPlayer
  );
  if (!myVictoryCondition) return;
  const myUltimateTarget = myVictoryCondition.ultimate_target;

  const opponentPlayer = currentPlayer === "A" ? "B" : "A";
  const opponentVictoryCondition = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponentPlayer
  );
  if (!opponentVictoryCondition) return;
  const opponentLossCondition = {
    type: "negation",
    proposition: opponentVictoryCondition.ultimate_target,
  };

  const isMyVictoryProven = derivedPropositionsInModal.some(
    (p) =>
      !p.dependsOnAssumption &&
      arePropositionsEqual(p.proposition, myUltimateTarget)
  );
  const isOpponentLossProven = derivedPropositionsInModal.some(
    (p) =>
      !p.dependsOnAssumption &&
      arePropositionsEqual(p.proposition, opponentLossCondition)
  );

  if (isMyVictoryProven || isOpponentLossProven) {
    const newTheorems = derivedPropositionsInModal.filter(
      (p) =>
        p.type === "theorem" &&
        !p.dependsOnAssumption &&
        !truePropositions.some((existing) =>
          arePropositionsEqual(p.proposition, existing.proposition)
        )
    );

    for (const theoremData of newTheorems) {
      const verificationResult = verifyAndExpandTruths(theoremData.proposition);
      if (verificationResult.success) {
        internalTruthSet = verificationResult.expandedSet;
      } else {
        console.error(
          "치명적 오류: 승리 증명에 사용된 정리가 기존 사실과 모순됩니다.",
          theoremData
        );
        showAlert(currentLang.alerts.criticalErrorUndo);
        return;
      }
    }
    endGame(currentPlayer);
    return;
  }

  showAlert(
    currentLang.alerts.proofIncomplete
      .replace("{myGoal}", propositionToPlainText(myUltimateTarget))
      .replace("{opponentGoal}", propositionToPlainText(opponentLossCondition))
  );
}

function renderModal() {
  const premiseList = document.getElementById("premise-list");
  premiseList.innerHTML = "";

  const hasAssumption = !!currentAssumption;
  document.getElementById("add-assumption-btn").disabled = hasAssumption;
  document.getElementById("cancel-assumption-btn").style.display = hasAssumption
    ? "inline-block"
    : "none";

  derivedPropositionsInModal.forEach((propData) => {
    // 구분선인 경우 특별히 처리
    if (propData.isSeparator) {
      const li = document.createElement("li");
      li.style.height = "8px";
      li.style.background = "transparent";
      li.style.border = "none";
      li.style.padding = "0";
      li.style.margin = "4px 0";
      li.style.pointerEvents = "none"; // 클릭 불가능
      li.style.listStyle = "none";
      li.innerHTML =
        "<hr style='border: none; border-top: 1px solid rgba(221, 221, 221, 0.3); margin: 0;'>";
      premiseList.appendChild(li);
      return;
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.dataset.propObject = JSON.stringify(propData);

    if (propData.isAssumption) li.classList.add("assumption-itself");
    else if (propData.dependsOnAssumption)
      li.classList.add("assumption-dependent");

    // 체크박스 비활성화는 handleTutorialRuleApplication에서 처리

    li.appendChild(checkbox);
    let tagClass = "";
    // propData.type에 따라 적절한 CSS 클래스를 할당합니다.
    switch (propData.type) {
      case "axiom":
        tagClass = "tag-axiom";
        break;
      case "victory":
        tagClass = "tag-victory";
        break;
      case "theorem":
        tagClass = "tag-theorem";
        break;
      case "assumption": // 가정을 위한 case 분리
        tagClass = "tag-assumption";
        break;
      default: // "user-made" 등 나머지는 "proposition"으로 처리
        tagClass = "tag-proposition";
        break;
    }

    // 클래스가 적용된 span 태그로 감싸서 HTML에 추가합니다.
    li.innerHTML += ` <span class="${tagClass}">${
      propData.label
    }</span> ${propositionToNaturalText(propData.proposition)}`;

    premiseList.appendChild(li);
  });
}
function updateConclusionPreview() {
  const titleEl = document.getElementById("conclusion-preview-title");
  const textEl = document.getElementById("conclusion-preview-text");

  // UI 텍스트 업데이트 (다국어 지원)
  titleEl.innerHTML =
    currentLang.langCode === "ko"
      ? "<strong>결론 미리보기</strong>"
      : "<strong>Conclusion Preview</strong>";

  const selectedLis = Array.from(
    document.querySelectorAll('#premise-list input[type="checkbox"]:checked')
  );
  const rule = document.getElementById("inference-rule-select").value;
  const premises = selectedLis
    .map((chk) => {
      const propString = chk.parentElement.dataset.propObject;
      return propString ? JSON.parse(propString).proposition : null;
    })
    .filter(Boolean);

  let conclusion = null;
  let requiredPremises = 0;

  // 각 규칙에 필요한 전제 개수 확인
  const onePremiseRules = [
    "conjunctionElimination",
    "doubleNegationElimination",
    "existentialInstantiation",
  ];
  const twoPremiseRules = [
    "modusPonens",
    "modusTollens",
    "hypotheticalSyllogism",
    "disjunctiveSyllogism",
    "universalApplication",
  ];
  const threePremiseRules = ["proofByCases"];

  if (onePremiseRules.includes(rule)) requiredPremises = 1;
  else if (twoPremiseRules.includes(rule)) requiredPremises = 2;
  else if (threePremiseRules.includes(rule)) requiredPremises = 3;
  else if (rule === "conditionalIntroduction") requiredPremises = 1;
  else if (rule === "reductioAdAbsurdum") requiredPremises = 2;

  if (premises.length === requiredPremises && requiredPremises > 0) {
    try {
      if (rule === "conditionalIntroduction") {
        if (currentAssumption) {
          conclusion = {
            type: "conditional",
            left: currentAssumption,
            right: premises[0],
          };
        }
      } else if (rule === "reductioAdAbsurdum") {
        conclusion = reductioAdAbsurdum(
          premises[0],
          premises[1],
          currentAssumption
        );
      } else if (threePremiseRules.includes(rule)) {
        conclusion = window[rule](premises[0], premises[1], premises[2]);
      } else if (twoPremiseRules.includes(rule)) {
        conclusion = window[rule](premises[0], premises[1]);
      } else if (onePremiseRules.includes(rule)) {
        conclusion = window[rule](premises[0]);
      }
    } catch (e) {
      console.error("Preview calculation error:", e);
      conclusion = null;
    }
  }

  if (conclusion) {
    if (Array.isArray(conclusion)) {
      // 단순화 규칙처럼 결과가 여러 개일 경우
      textEl.innerHTML = conclusion
        .map((c) => propositionToNaturalText(c))
        .join("<br>");
    } else {
      textEl.innerHTML = propositionToNaturalText(conclusion);
    }
  } else {
    textEl.innerHTML = `<i>${
      currentLang.langCode === "ko"
        ? "규칙을 적용할 수 없습니다."
        : "Cannot apply rule."
    }</i>`;
  }
}
