function openEurekaModal() {
  derivedPropositionsInModal = [];
  currentAssumption = null;

  devLog(
    "Opening Eureka Modal, gamestate.currentPuzzleLevel:",
    gamestate.currentPuzzleLevel,
    "type:",
    typeof gamestate.currentPuzzleLevel
  );

  // 논증 기록 시작 (승리를 위한 유레카 모달인 경우)
  if (!isThinkingTime) {
    startProofRecording();

    // 기존 전제들(공리, 승리 조건 등)을 논증 기록에 추가
    [...parsedAxioms, ...truePropositions].forEach((propData) => {
      if (propData.proposition) {
        const stepId = recordProofStep(
          "premise",
          [],
          propData.proposition,
          null
        );
        propData.proofStepId = stepId;
      }
    });
  }
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
    const templates = gamestate.currentLang.axiom_templates;
    let axiomIndex = 0;

    // 정체성 공리 그룹
    if (groups.identity && groups.identity.length > 0) {
      for (let i = 0; i < groups.identity.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: gamestate.currentLang.labels.axiom,
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
            label: gamestate.currentLang.labels.axiom,
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
            label: gamestate.currentLang.labels.axiom,
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
            label: gamestate.currentLang.labels.axiom,
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
            label: gamestate.currentLang.labels.axiom,
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
            label: gamestate.currentLang.labels.axiom,
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
            label: gamestate.currentLang.labels.axiom,
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
            label: gamestate.currentLang.labels.axiom,
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
            label: gamestate.currentLang.labels.axiom,
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
            label: gamestate.currentLang.labels.axiom,
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
            label: gamestate.currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 자본가 공리가 있으면 템플릿 기반으로 추가
      if (
        templates.capitalist_good_evil_forward &&
        templates.capitalist_good_evil_forward.length > 0
      ) {
        const remainingAxioms = axioms.slice(axiomIndex);
        const capitalistAxioms = remainingAxioms.filter((a) => {
          const text = propositionToNaturalText(a.proposition);
          return text.includes("자본가") || text.includes("capitalist");
        });

        if (capitalistAxioms.length > 0) {
          // 서브그룹 구분선
          addPremiseToWorkbench({
            type: "separator",
            label: "",
            proposition: null,
            isSeparator: true,
          });

          // 자본가 집단 순방향
          for (
            let i = 0;
            i < templates.capitalist_good_evil_forward.length;
            i++
          ) {
            if (axiomIndex < axioms.length) {
              const axiomData = axioms[axiomIndex];
              const text = propositionToNaturalText(axiomData.proposition);
              if (text.includes("자본가") || text.includes("capitalist")) {
                addPremiseToWorkbench({
                  ...axiomData,
                  label: gamestate.currentLang.labels.axiom,
                });
                axiomIndex++;
              }
            }
          }

          // 서브그룹 구분선
          addPremiseToWorkbench({
            type: "separator",
            label: "",
            proposition: null,
            isSeparator: true,
          });

          // 자본가 집단 역방향
          for (
            let i = 0;
            i < templates.capitalist_good_evil_reverse.length;
            i++
          ) {
            if (axiomIndex < axioms.length) {
              const axiomData = axioms[axiomIndex];
              const text = propositionToNaturalText(axiomData.proposition);
              if (text.includes("자본가") || text.includes("capitalist")) {
                addPremiseToWorkbench({
                  ...axiomData,
                  label: gamestate.currentLang.labels.axiom,
                });
                axiomIndex++;
              }
            }
          }
        }
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
        label: gamestate.currentLang.labels.axiom,
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
        label = gamestate.currentLang.labels.victory_condition;
        break;
      case "theorem":
        label = gamestate.currentLang.labels.theorem;
        break;
      default:
        label = gamestate.currentLang.labels.proposition;
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
    modalTitle.textContent = gamestate.currentLang.modals.eurekaTitleTheorem;
    confirmBtn.textContent = gamestate.currentLang.modals.confirmTheoremButton;
    confirmBtn.onclick = addTheoremsToList;
  } else {
    modalTitle.textContent = gamestate.currentLang.modals.eurekaTitleVictory;
    confirmBtn.textContent = gamestate.currentLang.modals.confirmVictoryButton;
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
    showAlert(gamestate.currentLang.alerts.oneAssumptionOnly, () => {
      // 경고창을 닫은 후 다시 가정 입력창 열기
      addAssumption();
    });
    return;
  }
  showPrompt(
    gamestate.currentLang.modals.promptInputPlaceholder,
    (propositionText) => {
      if (propositionText) {
        const parsedProp = parsePropositionFromString(propositionText);
        if (parsedProp) {
          // 복합 명제 (연결사가 포함된 명제) 검증
          if (isCompoundProposition(parsedProp)) {
            showAlert(
              gamestate.currentLang.alerts.onlyAtomicAssumptions,
              () => {
                // 경고창을 닫은 후 다시 가정 입력창 열기
                addAssumption();
              }
            );
            return;
          }

          currentAssumption = parsedProp;

          // 논증 과정 기록 (승리를 위한 유레카 모달인 경우) - addPremiseToWorkbench 전에 실행
          if (isRecordingProof) {
            const stepId = recordProofStep(
              "assumption",
              [],
              parsedProp,
              null,
              null
            );
            parsedProp.proofStepId = stepId;
          }

          addPremiseToWorkbench({
            proposition: parsedProp,
            type: "assumption",
            dependsOnAssumption: true,
            isAssumption: true,
            label: gamestate.currentLang.labels.assumption,
            proofStepId: parsedProp.proofStepId, // proofStepId 명시적으로 전달
          });

          // 가정 추가 성공 시 pop 사운드 재생
          audioManager.playSfx("pop");

          // 퍼즐 모드에서 가정하기도 추론 단계로 카운트
          if (inPuzzleMode) {
            inferenceStepCount++;
          }

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
          showAlert(gamestate.currentLang.alerts.parsingFailed, () => {
            // 경고창을 닫은 후 다시 가정 입력창 열기
            addAssumption();
          });
        }
      }
    }
  );
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
  // 기존 전제들에서 proofStepId 찾아서 설정 (가정인 경우 제외)
  if (
    !propObject.proofStepId &&
    propObject.proposition &&
    !propObject.isAssumption
  ) {
    const existing = [...parsedAxioms, ...truePropositions].find(
      (existing) =>
        existing.proposition &&
        arePropositionsEqual(existing.proposition, propObject.proposition)
    );
    if (existing && existing.proofStepId) {
      propObject.proofStepId = existing.proofStepId;
    }
  }

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
      showAlert(gamestate.currentLang.alerts.premiseNeededForIntro);
      return;
    }
    if (!currentAssumption) {
      showAlert(gamestate.currentLang.alerts.assumptionNeededForIntro);
      return;
    }
    const conclusionData = premisesData[0];
    if (!conclusionData.dependsOnAssumption) {
      showAlert(gamestate.currentLang.alerts.premiseNotFromAssumption);
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

    // 논증 과정 기록을 위해 currentAssumption을 미리 저장
    const assumptionForRecord = currentAssumption;

    derivedPropositionsInModal = derivedPropositionsInModal.filter(
      (p) => !p.dependsOnAssumption
    );
    currentAssumption = null;
    addPremiseToWorkbench({
      proposition: newConditional,
      type: "theorem",
      dependsOnAssumption: false,
      isAssumption: false,
      label: gamestate.currentLang.labels.ci_theorem,
      sourcePremises: sourcePremisesForCI, // source 정보 추가
    });

    // 논증 과정 기록 (승리를 위한 유레카 모달인 경우)
    if (isRecordingProof) {
      const premiseIds = sourcePremisesForCI
        .map((p) => {
          if (!p) return null;
          if (p.proofStepId) return p.proofStepId;

          // 가정의 경우 별도로 찾기
          if (p.isAssumption && assumptionForRecord) {
            const assumptionStep = proofSteps.find(
              (step) =>
                step.type === "assumption" &&
                step.conclusion &&
                arePropositionsEqual(step.conclusion, assumptionForRecord)
            );
            return assumptionStep ? assumptionStep.id : null;
          }

          // proofSteps에서 직접 찾기 (가정을 우선적으로 찾기)
          const assumptionStep = proofSteps.find(
            (step) =>
              step.type === "assumption" &&
              step.conclusion &&
              arePropositionsEqual(step.conclusion, p.proposition)
          );
          if (assumptionStep) return assumptionStep.id;

          const proofStep = proofSteps.find(
            (step) =>
              step.conclusion &&
              arePropositionsEqual(step.conclusion, p.proposition)
          );
          return proofStep ? proofStep.id : null;
        })
        .filter((id) => id);

      const stepId = recordProofStep(
        "inference",
        premiseIds,
        newConditional,
        "conditionalIntroduction",
        assumptionForRecord
      );
      newConditional.proofStepId = stepId;
    }

    // 조건부 도입 성공 시 사운드 재생
    audioManager.playSfx("pop");
  } else if (rule === "reductioAdAbsurdum") {
    if (premises.length !== 2) {
      showAlert(gamestate.currentLang.alerts.contradictionNeededForRAA);
      return;
    }
    if (!currentAssumption) {
      showAlert(gamestate.currentLang.alerts.assumptionNeededForRAA);
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
      // 논증 과정 기록 (승리를 위한 유레카 모달인 경우) - 삭제하기 전에 먼저 기록
      if (isRecordingProof) {
        const premiseIds = sourcePremisesForRAA
          .map((p) => {
            if (!p) return null;
            if (p.proofStepId) return p.proofStepId;

            // 가정의 경우 별도로 찾기
            if (p.isAssumption && currentAssumption) {
              const assumptionStep = proofSteps.find(
                (step) =>
                  step.type === "assumption" &&
                  step.conclusion &&
                  arePropositionsEqual(step.conclusion, currentAssumption)
              );
              return assumptionStep ? assumptionStep.id : null;
            }

            // 다른 전제들도 proofSteps에서 찾기 (가정을 우선적으로)
            const assumptionStep = proofSteps.find(
              (step) =>
                step.type === "assumption" &&
                step.conclusion &&
                arePropositionsEqual(step.conclusion, p.proposition)
            );
            if (assumptionStep) return assumptionStep.id;

            const proofStep = proofSteps.find(
              (step) =>
                step.conclusion &&
                arePropositionsEqual(step.conclusion, p.proposition)
            );
            return proofStep ? proofStep.id : null;
          })
          .filter((id) => id);

        devLog(
          "RAA premise IDs:",
          premiseIds,
          "from sources:",
          sourcePremisesForRAA.map((p) =>
            p
              ? {
                  type: p.type || "unknown",
                  isAssumption: p.isAssumption,
                  proofStepId: p.proofStepId,
                }
              : "null"
          )
        );

        const stepId = recordProofStep(
          "inference",
          premiseIds,
          result,
          "reductioAdAbsurdum",
          currentAssumption
        );
        result.proofStepId = stepId;
      }

      derivedPropositionsInModal = derivedPropositionsInModal.filter(
        (p) => !p.dependsOnAssumption
      );
      currentAssumption = null;
      addPremiseToWorkbench({
        proposition: result,
        type: "theorem",
        dependsOnAssumption: false,
        isAssumption: false,
        label: gamestate.currentLang.labels.raa_theorem,
        sourcePremises: sourcePremisesForRAA, // source 정보 추가
      });

      // 귀류법 성공 시 사운드 재생
      audioManager.playSfx("pop");
    } else {
      showAlert(gamestate.currentLang.alerts.notAContradiction);
    }
  } else if (threePremiseRules.includes(rule)) {
    if (premises.length !== 3) {
      showAlert(
        gamestate.currentLang.alerts.premiseCountError.replace("{count}", 3)
      );
      return;
    }
    const result = window[rule](premises[0], premises[1], premises[2]);
    if (result) conclusions.push(result);
  } else if (twoPremiseRules.includes(rule)) {
    if (premises.length !== 2) {
      showAlert(
        gamestate.currentLang.alerts.premiseCountError.replace("{count}", 2)
      );
      return;
    }
    const result = window[rule](premises[0], premises[1]);
    if (result) conclusions.push(result);
  } else if (onePremiseRules.includes(rule)) {
    if (premises.length !== 1) {
      showAlert(
        gamestate.currentLang.alerts.premiseCountError.replace("{count}", 1)
      );
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
        label: gamestate.currentLang.labels.theorem,
        sourcePremises: premisesData, // source 정보 추가
      });

      // 논증 과정 기록 (승리를 위한 유레카 모달인 경우)
      if (isRecordingProof) {
        const premiseIds = premisesData
          .map((p) => {
            // 1. 전제 데이터에서 proofStepId 찾기
            if (p.proofStepId) return p.proofStepId;

            // 2. derivedPropositionsInModal에서 찾기 (모달 내에서 생성된 것들)
            const modalProp = derivedPropositionsInModal.find(
              (modal) =>
                modal.proposition &&
                arePropositionsEqual(modal.proposition, p.proposition)
            );
            if (modalProp && modalProp.proofStepId)
              return modalProp.proofStepId;

            // 3. 기존 전제들에서 찾기 (가정인 경우 제외)
            if (!p.isAssumption) {
              const existing = [...parsedAxioms, ...truePropositions].find(
                (existing) =>
                  existing.proposition &&
                  arePropositionsEqual(existing.proposition, p.proposition)
              );
              if (existing && existing.proofStepId) return existing.proofStepId;
            }

            // 4. proofSteps에서 직접 찾기 (가정을 우선적으로 찾기)
            const assumptionStep = proofSteps.find(
              (step) =>
                step.type === "assumption" &&
                step.conclusion &&
                arePropositionsEqual(step.conclusion, p.proposition)
            );
            if (assumptionStep) return assumptionStep.id;

            const proofStep = proofSteps.find(
              (step) =>
                step.conclusion &&
                arePropositionsEqual(step.conclusion, p.proposition)
            );
            return proofStep ? proofStep.id : null;
          })
          .filter((id) => id);

        const stepId = recordProofStep(
          "inference",
          premiseIds,
          conc,
          rule,
          currentAssumption
        );
        conc.proofStepId = stepId;

        // 생성된 결론을 모달 내 명제들에도 ID 부여
        const modalConclusion = derivedPropositionsInModal.find(
          (modal) =>
            modal.proposition && arePropositionsEqual(modal.proposition, conc)
        );
        if (modalConclusion) {
          modalConclusion.proofStepId = stepId;
        }
      }
    });
    // 추론 규칙 적용 성공 시 사운드 재생
    audioManager.playSfx("pop");

    // 퍼즐 모드에서 추론 규칙 사용 횟수 증가
    if (inPuzzleMode) {
      inferenceStepCount++;
    }
  } else if (
    rule !== "reductioAdAbsurdum" &&
    rule !== "conditionalIntroduction" &&
    conclusions.length === 0
  ) {
    showAlert(gamestate.currentLang.alerts.ruleFailed);
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
    showAlert(gamestate.currentLang.alerts.noTheoremsToAdd);
    return;
  }

  const selectedPropsData = selectedLis.map((chk) =>
    JSON.parse(chk.parentElement.dataset.propObject)
  );

  // 가정 의존 명제나 가정 자체가 선택되었는지 확인
  const hasAssumptionRelated = selectedPropsData.some(
    (p) => p.dependsOnAssumption || p.isAssumption
  );

  if (hasAssumptionRelated) {
    showAlert(gamestate.currentLang.alerts.assumptionDependentNotAllowed);
    return;
  }

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
    showAlert(gamestate.currentLang.alerts.duplicateProposition);
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
      showAlert(gamestate.currentLang.alerts.contradictionFound);
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
      // Calculate star rating based on proof steps
      const stars = calculateStarRating(
        gamestate.currentPuzzleLevel,
        inferenceStepCount
      );

      try {
        // Record puzzle completion with star rating
        recordPuzzleCompletion(
          gamestate.currentPuzzleLevel,
          inferenceStepCount,
          stars
        );

        // Keep backward compatibility - also save to old format
        const clearedPuzzles =
          JSON.parse(localStorage.getItem("logos_cleared_puzzles")) || {};
        clearedPuzzles[gamestate.currentPuzzleLevel] = true;
        localStorage.setItem(
          "logos_cleared_puzzles",
          JSON.stringify(clearedPuzzles)
        );
      } catch (e) {
        console.error("퍼즐 클리어 데이터 저장 실패:", e);
      }

      // Create star display for the alert message
      const starDisplay = "★".repeat(stars) + "☆".repeat(3 - stars);
      const alertMessage = gamestate.currentLang.alerts.puzzleCleared
        .replace("{steps}", inferenceStepCount)
        .replace("{stars}", `${starDisplay} (${stars}/3)`);

      showAlert(alertMessage, () => {
        document.getElementById("eureka-modal").classList.remove("visible");
        document.getElementById("puzzle-goal-box").classList.add("hidden");
        inPuzzleMode = false;
        populatePuzzleLevels();
        const puzzleModal = document.getElementById(
          "puzzle-level-select-modal"
        );
        puzzleModal.classList.remove("animate");
        puzzleModal.classList.add("visible");
      });
    } else {
      showAlert(
        gamestate.currentLang.alerts.proofIncomplete
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
      showAlert(gamestate.currentLang.alerts.tutorialVictory, endTutorial);
    } else {
      // 실패 시, 기존처럼 증명 미완료 메시지를 띄웁니다.
      showAlert(
        gamestate.currentLang.alerts.proofIncomplete
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
        showAlert(gamestate.currentLang.alerts.criticalErrorUndo);
        return;
      }
    }

    // 논증 기록 완료 및 승리 명제 기록
    if (isRecordingProof) {
      const victoryProp = isMyVictoryProven
        ? myUltimateTarget
        : opponentLossCondition;

      // 승리 명제를 직접 도출한 마지막 추론 단계 찾기
      const lastInferenceStep = proofSteps
        .filter((step) => step.type === "inference")
        .reverse()
        .find(
          (step) =>
            step.conclusion &&
            arePropositionsEqual(step.conclusion, victoryProp)
        );

      let victoryPremises = [];
      if (lastInferenceStep) {
        // 마지막 추론 단계의 ID를 전제로 사용
        victoryPremises = [lastInferenceStep.id];
      }

      recordProofStep("victory", victoryPremises, victoryProp, null);
      stopProofRecording();
    }

    endGame(currentPlayer);
    return;
  }

  showAlert(
    gamestate.currentLang.alerts.proofIncomplete
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

    // sticky 위치는 ui-utils.js에서 업데이트됨

    premiseList.appendChild(li);
  });

  // 초기 sticky 위치 설정
  updateStickyPositions();

  // 스크롤 이벤트 리스너 추가
  premiseList.removeEventListener("scroll", handleScroll);
  premiseList.removeEventListener("wheel", handleScroll);

  premiseList.addEventListener("scroll", handleScroll);
  premiseList.addEventListener("wheel", handleScroll);

  // 부모 모달에도 이벤트 추가
  const modal = document.getElementById("eureka-modal");
  if (modal) {
    modal.addEventListener("scroll", handleScroll);
    modal.addEventListener("wheel", handleScroll);
  }
}

// 각 항목의 이전 위치 상태 저장
let previousPositionStates = new Map();

// 스크롤 이벤트 핸들러 (중앙선 교차시에만 업데이트)
function handleScroll() {
  const premiseList = document.getElementById("premise-list");
  if (!premiseList) {
    devLog("ERROR: premise-list not found!");
    return;
  }

  // premise-list의 실제 보이는 영역의 중간점 계산
  const containerRect = premiseList.getBoundingClientRect();

  // 모달 또는 부모 컨테이너의 보이는 영역을 기준으로 계산
  const modal = document.querySelector(".modal-content");
  const modalRect = modal
    ? modal.getBoundingClientRect()
    : { top: 0, bottom: window.innerHeight };

  // 실제 보이는 영역 계산
  const visibleTop = Math.max(containerRect.top, modalRect.top);
  const visibleBottom = Math.min(containerRect.bottom, modalRect.bottom);
  const containerMiddle = visibleTop + (visibleBottom - visibleTop) / 2;

  let needsUpdate = false;
  let checkedCount = 0;

  const allItems = premiseList.querySelectorAll("li");
  allItems.forEach((li, index) => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      checkedCount++;
      const itemRect = li.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;
      const isTop = itemCenter < containerMiddle;

      const previousState = previousPositionStates.get(index);

      // 상태가 바뀐 경우만 (초기 상태는 제외)
      if (previousState !== undefined && previousState !== isTop) {
        needsUpdate = true;
        previousPositionStates.set(index, isTop);
        const prevStateText = previousState ? "top" : "bottom";
        devLog(
          `Item ${index} crossed center line: ${prevStateText} -> ${
            isTop ? "top" : "bottom"
          }`
        );
      } else if (previousState === undefined) {
        // 초기 상태 설정 (업데이트는 하지 않음)
        previousPositionStates.set(index, isTop);
      }
    }
  });

  if (needsUpdate) {
    updateStickyPositions(containerRect, containerMiddle);
  }
}

// 선택된 전제들의 sticky 위치를 업데이트하는 함수
function updateStickyPositions(
  passedContainerRect = null,
  passedContainerMiddle = null
) {
  const premiseList = document.getElementById("premise-list");
  if (!premiseList) return;

  const allItems = premiseList.querySelectorAll("li");

  // 매개변수가 없으면 올바른 방식으로 계산
  let containerRect, containerMiddle;
  if (passedContainerRect && passedContainerMiddle) {
    containerRect = passedContainerRect;
    containerMiddle = passedContainerMiddle;
  } else {
    containerRect = premiseList.getBoundingClientRect();
    // 모달 또는 부모 컨테이너의 보이는 영역을 기준으로 계산
    const modal = document.querySelector(".modal-content");
    const modalRect = modal
      ? modal.getBoundingClientRect()
      : { top: 0, bottom: window.innerHeight };

    // 실제 보이는 영역 계산
    const visibleTop = Math.max(containerRect.top, modalRect.top);
    const visibleBottom = Math.min(containerRect.bottom, modalRect.bottom);
    containerMiddle = visibleTop + (visibleBottom - visibleTop) / 2;
  }

  // 선택된 항목들을 위치별로 분류
  const topItems = [];
  const bottomItems = [];

  allItems.forEach((li, index) => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      // 완전히 리셋
      li.classList.remove("selected", "stick-top", "stick-bottom");
      li.style.position = "";
      li.style.top = "";
      li.style.bottom = "";

      // DOM 강제 재계산 (reflow)
      li.offsetHeight;

      // 각 항목의 현재 화면상 위치를 실시간 계산
      const itemRect = li.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;

      const isTop = itemCenter < containerMiddle;
      previousPositionStates.set(index, isTop); // 현재 상태 저장

      if (isTop) {
        // 현재 화면 중심보다 위에 있음 → 위쪽 스티키
        topItems.push({ element: li, index });
      } else {
        // 현재 화면 중심보다 아래 있음 → 아래쪽 스티키
        bottomItems.push({ element: li, index });
      }
    } else {
      li.classList.remove("selected", "stick-top", "stick-bottom");
      li.style.position = "";
      li.style.top = "";
      li.style.bottom = "";
    }
  });

  // 위쪽 항목들 처리 (위부터 순서대로)
  let topAccumulatedHeight = 0;
  topItems.forEach((item, index) => {
    const { element, index: originalIndex } = item;
    // 강제로 bottom 관련 모든 것 제거
    element.classList.remove("stick-bottom");
    element.style.bottom = "";
    element.style.position = "";
    element.offsetHeight; // reflow

    // 이제 top sticky 적용
    element.classList.add("selected", "stick-top");
    element.style.top = `${topAccumulatedHeight}px`;

    // 다음 요소를 위해 현재 요소의 실제 높이를 누적
    topAccumulatedHeight += element.offsetHeight;
  });

  // 아래쪽 항목들 처리 (아래부터 역순으로)
  let bottomAccumulatedHeight = 0;
  bottomItems.reverse().forEach((item, index) => {
    const { element, index: originalIndex } = item;
    // 강제로 top 관련 모든 것 제거
    element.classList.remove("stick-top");
    element.style.top = "";
    element.style.position = "";
    element.offsetHeight; // reflow

    // 이제 bottom sticky 적용
    element.classList.add("selected", "stick-bottom");
    element.style.bottom = `${bottomAccumulatedHeight}px`;

    // 다음 요소를 위해 현재 요소의 실제 높이를 누적
    bottomAccumulatedHeight += element.offsetHeight;
  });

  devLog(
    `Updated sticky positions: ${topItems.length} top, ${bottomItems.length} bottom`
  );
}

function updateConclusionPreview() {
  const titleEl = document.getElementById("conclusion-preview-title");
  const textEl = document.getElementById("conclusion-preview-text");

  // UI 텍스트 업데이트 (다국어 지원)
  titleEl.innerHTML =
    gamestate.currentLang.langCode === "ko"
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
      gamestate.currentLang.langCode === "ko"
        ? "규칙을 적용할 수 없습니다."
        : "Cannot apply rule."
    }</i>`;
  }
}
