const PHILOSOPHERS = {
  aristotle: {
    id: "aristotle",
    name: { ko: "아리스토텔레스", en: "Aristotle" },
    cardText: { ko: "아리스토텔레스는", en: "Aristotle" },
    image: {
      p1: "assets/images/ari_p1.png",
      p2: "assets/images/ari_p2.png",
    },
    icon: "assets/images/ari_icon.png",
    skill: {
      ko: "형식 논리학: 특별한 능력은 없습니다. 하지만 이 게임의 모든 매커니즘은 그 덕분에 존재한다는 사실을 기억하세요.",
      en: "Formal Logic: Has no special ability. However, remember. All the mechanisms of this game exist thanks to him.",
    },
  },
  socrates: {
    id: "socrates",
    name: { ko: "소크라테스", en: "Socrates" },
    cardText: { ko: "소크라테스는", en: "Socrates" },
    image: {
      p1: "assets/images/socrat_p1.png",
      p2: "assets/images/socrat_p2.png",
    },
    icon: "assets/images/socra_icon.png",
    skill: {
      ko: "무지의 자각: 게임당 한 번, 사유 시간에 참 명제 목록에서 공리와 승리조건이 아닌 명제를 하나 선택할 수 있습니다. 그 명제는 게임이 끝날 때까지 양 플레이어 모두 논증의 전제로 사용할 수 없습니다.",
      en: "Awareness of Ignorance: Once per game, during Thinking Time, you may choose one proposition from the list of true propositions that is not an axiom or a win condition. For the rest of the game, that proposition cannot be used as a premise by either player.",
    },
  },
  plato: {
    id: "plato",
    name: { ko: "플라톤", en: "Plato" },
    cardText: { ko: "플라톤은", en: "Plato" },
    image: {
      p1: "assets/images/pl_p1.png",
      p2: "assets/images/pl_p2.png",
    },
    icon: "assets/images/pl_icon.png",
    skill: {
      ko: "이데아 회상: 게임당 두 번, 사유 시간에 모순이 발생하지 않는 선에서 '어떤 A는 B다'에서 '모든 A는 B다'를 도출할 수 있습니다.",
      en: "Recollection of Forms: Twice per game, during Thinking Time, you can derive 'Every A is B' from 'Some A is B' as long as no contradiction arises.",
    },
  },
  descartes: {
    id: "descartes",
    name: { ko: "르네 데카르트", en: "René Descartes" },
    cardText: { ko: "데카르트는", en: "Descartes" },
    image: {
      p1: "assets/images/de_p1.png",
      p2: "assets/images/de_p2.png",
    },
    icon: "assets/images/de_icon.png",
    skill: {
      ko: "방법적 회의: 게임당 한 번, 사유 시간에 참 명제 목록에서 공리와 승리조건이 아닌 명제 하나를 삭제할 수 있습니다.",
      en: "Methodic Doubt: Once per game, during Thinking Time, you may delete one proposition from the list of true propositions that is not an axiom or a win condition.",
    },
  },
  hume: {
    id: "hume",
    name: { ko: "데이비드 흄", en: "David Hume" },
    cardText: { ko: "흄은", en: "Hume" },
    image: {
      p1: "assets/images/hu_p1.png",
      p2: "assets/images/hu_p2.png",
    },
    icon: "assets/images/hu_icon.png",
    skill: {
      ko: "인과성 비판: 게임당 한 번, 사유 시간에 사용할 수 있습니다. 공리와 승리조건이 아니며, '라면'으로 이어진 명제 하나를 모순이 일어나지 않는 선에서 최소단위 명제 두 개로 분해할 수 있습니다.",
      en: "Critique of Causality: Once per game, during Thinking Time, you may choose one non-axiom, non-victory-condition proposition connected by 'then', and decompose it into two atomic propositions, as long as no contradiction arises.",
    },
  },
  kant: {
    id: "kant",
    name: { ko: "임마누엘 칸트", en: "Immanuel Kant" },
    cardText: { ko: "칸트는", en: "Kant" },
    image: {
      p1: "assets/images/ka_p1.png",
      p2: "assets/images/ka_p2.png",
    },
    icon: "assets/images/ka_icon.png",
    skill: {
      ko: "선험적 종합판단: 게임당 한 번, 사유 시간에 사용할 수 있습니다. 모순이 발생하지 않는 선에서, 손에 남아있는 카드로 명제 하나를 만들어 참 명제 목록에 추가합니다.",
      en: "Synthetic A Priori Judgment: Once per game, during Thinking Time, you may create one proposition using cards remaining in your hand and add it to the list of true propositions, as long as no contradiction arises.",
    },
  },
  nietzsche: {
    id: "nietzsche",
    name: { ko: "프리드리히 니체", en: "Friedrich Nietzsche" },
    cardText: { ko: "니체는", en: "Nietzsche" },
    image: {
      p1: "assets/images/ni_p1.png",
      p2: "assets/images/ni_p2.png",
    },
    icon: "assets/images/ni_icon.png",
    skill: {
      ko: "영원 회귀: 참 명제 목록에 존재하는 명제를 무제한으로 중복해서 완성할 수 있습니다.",
      en: "Eternal Recurrence: You can complete propositions that already exist in the list of true propositions an unlimited number of times.",
    },
  },
  marx: {
    id: "marx",
    name: { ko: "카를 마르크스", en: "Karl Marx" },
    cardText: { ko: "마르크스는", en: "Marx" },
    image: {
      p1: "assets/images/ma_p1.png",
      p2: "assets/images/ma_p2.png",
    },
    icon: "assets/images/ma_icon.png",
    skill: {
      ko: "프롤레타리아 혁명: 게임 시작 시, 양 플레이어의 손에 '브루주아는' 개체 카드가 추가되며, 참 명제 목록에 '((모든 브루주아는 악하다) 라면 (혁명이 일어난다)) 그리고 ((혁명이 일어난다) 라면 (마르크스는 승리한다))'라는 승리 조건 명제와 브루주아에 관한 공리가 추가됩니다.",
      en: "Proletarian Revolution: At the start of the game, a 'Bourgeois' entity card is added to both players' hands. A victory condition, '((Every Bourgeois is evil) then (a revolution occurs)) and ((a revolution occurs) then (Marx wins))' and axioms about Bourgeois are added to the list of true propositions.",
    },
  },
  wittgenstein: {
    id: "wittgenstein",
    name: { ko: "루트비히 비트겐슈타인", en: "Ludwig Wittgenstein" },
    cardText: { ko: "비트겐슈타인은", en: "Wittgenstein" },
    image: {
      p1: "assets/images/wi_p1.png",
      p2: "assets/images/wi_p2.png",
    },
    icon: "assets/images/wi_icon.png",
    skill: {
      ko: "사다리 걷어차기: 게임당 한 번, 사유 시간에 사용할 수 있습니다. 추론 규칙들을 사용해 하나의 정리를 도출하고, 사용한 전제들중 공리와 승리 조건을 제외한 명제를 모두 삭제합니다.",
      en: "Kicking Away the Ladder: Once per game, during Thinking Time, you may derive one theorem using inference rules. Then, delete all premises used in the derivation, except for axioms and win conditions.",
    },
  },
  kuhn: {
    id: "kuhn",
    name: { ko: "토마스 쿤", en: "Thomas Kuhn" },
    cardText: { ko: "쿤은", en: "Kuhn" },
    image: {
      p1: "assets/images/ku_p1.png",
      p2: "assets/images/ku_p2.png",
    },
    icon: "assets/images/ku_icon.png",
    skill: {
      ko: "패러다임 전환: 게임당 한 번, 플레이어들이 카드를 놓아 생성한 참 명제가 15개 이상일 때 사용할 수 있습니다. 사유시간에 '모든 A는 선하다/악하다' 혹은 '모든 A는 지혜롭다/어리석다' 명제 하나의 술어를 반대로 바꾸고, 그 명제와 모순되는 명제를 모두 삭제합니다.",
      en: "Paradigm Shift: Once per game, when 15 or more true propositions have been created by players, during Thinking Time, you may take a universal proposition like 'Every A is good' or 'Every A is wise', change its predicate to the opposite (e.g., 'is evil' or 'is foolish'), and then delete all propositions that contradict this new paradigm.",
    },
  },
  derrida: {
    id: "derrida",
    name: { ko: "자크 데리다", en: "Jacques Derrida" },
    cardText: { ko: "데리다는", en: "Derrida" },
    image: {
      p1: "assets/images/der_p1.png",
      p2: "assets/images/der_p2.png",
    },
    icon: "assets/images/der_icon.png",
    skill: {
      ko: "해체: 게임당 한 번, 사유 시간에 사용할 수 있습니다. 공리와 승리조건이 아니며, 연결사로 이어진 명제 하나를 모순이 일어나지 않는 선에서 최소단위 명제 두 개로 분해할 수 있습니다.",
      en: "Deconstruction: Once per game, during Thinking Time, you may choose one non-axiom, non-victory-condition proposition connected by a logical operator, and decompose it into two atomic propositions, as long as no contradiction aeises.",
    },
  },
};

function activatePlatoAbility(player) {
  const availablePropositions = truePropositions.filter(
    (p) => p.proposition && p.proposition.type === "existential"
  );

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "보편화할 수 있는 명제가 없습니다."
        : "There are no propositions to universalize."
    );
    return;
  }

  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.ui.platoAbilityTitle;
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.ui.platoConfirmButton;

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection"; // 공통 이름 사용
    radio.value = index;
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 범용 모달의 닫기/확인 버튼에 *플라톤*의 로직을 연결
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick = confirmPlatoAbility;

  modal.classList.add("visible");
}

/**
 * 플라톤 능력 모달에서 '확인' 버튼을 눌렀을 때 실행되는 함수
 */
function confirmPlatoAbility() {
  // 1. 선택된 라디오 버튼과 명제를 찾습니다.
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) {
    return;
  }

  const selectedIndex = parseInt(selectedRadio.value, 10);
  const availablePropositions = truePropositions.filter(
    (p) => p.proposition && p.proposition.type === "existential"
  );
  const selectedPropData = availablePropositions[selectedIndex];

  if (!selectedPropData) {
    console.error(
      "Plato Ability Error: Could not find the selected proposition."
    );
    return;
  }

  // 2. 선택된 '어떤' 명제를 '모든' 명제로 변환합니다.
  const originalProp = selectedPropData.proposition;
  const universalProp = {
    type: "universal",
    entity: originalProp.entity,
    predicate: originalProp.predicate,
  };

  // 3. 새로운 '모든' 명제가 기존 진리 체계와 모순되지 않는지 검증합니다.
  const verificationResult = verifyAndExpandTruths(universalProp);

  if (verificationResult.success) {
    // 4. 검증 성공 시, 능력 사용 상태를 기록하고 새 명제를 추가합니다.
    const philosopherId =
      thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;

    // 플라톤 능력 사용 횟수 증가
    if (abilityUsedState[thinkingTimeTurn].usedCount !== undefined) {
      abilityUsedState[thinkingTimeTurn].usedCount++;
    } else {
      abilityUsedState[thinkingTimeTurn].used = true;
    }

    truePropositions.push({
      propId: `prop_${Date.now()}_${Math.random()}`,
      type: "theorem", // 타입은 'theorem'으로 유지
      source: "plato_ability", // '이데아 회상' 출처 명시
      proposition: universalProp,
    });
    internalTruthSet = verificationResult.expandedSet;

    // 5. 모달을 닫고 게임 상태를 갱신합니다.
    document.getElementById("ability-modal").classList.remove("visible");
    showAlert(
      currentLang.langCode === "ko"
        ? "새로운 보편 명제가 참 목록에 추가되었습니다!"
        : "A new universal proposition has been added to the true list!"
    );
    render();
  } else {
    // 6. 모순 발생 시, 사용자에게 알립니다.
    showAlert(currentLang.alerts.contradictionFound);
  }
}

function activateSocratesAbility(player) {
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  const state = abilityUsedState[player];

  if (state && state.used) {
    showAlert(
      currentLang.langCode === "ko"
        ? "이미 능력을 사용했습니다."
        : "Ability has already been used."
    );
    return;
  }
  const availablePropositions = truePropositions.filter((p) => {
    // 1. 타입이 'user-made' 또는 'theorem'이어야 함 (기존 조건)
    const isTargetType = p.type === "user-made" || p.type === "theorem";
    if (!isTargetType) return false;

    // 2. 해당 명제가 이미 비활성화 목록에 있는지 확인 (새로운 조건)
    const isDisabled = socratesDisabledProps.some(
      (disabledProp) => disabledProp.propId === p.propId
    );

    // 3. 비활성화되지 않은 명제만 최종 목록에 포함
    return !isDisabled;
  });

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "비활성화할 수 있는 명제가 없습니다."
        : "There are no propositions to disable."
    );
    return;
  }

  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.ui.socratesAbilityTitle;
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.ui.socratesConfirmButton;

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection"; // 공통 이름 사용
    radio.value = propData.propId;
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 범용 모달의 닫기/확인 버튼에 *소크라테스*의 로직을 연결
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick =
    confirmSocratesAbility;

  modal.classList.add("visible");
}
function confirmSocratesAbility() {
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) return;

  const selectedPropId = selectedRadio.value;

  // socratesDisabledProps 배열에는 이제 propId만 저장합니다.
  // 더 이상 proposition 객체를 저장할 필요가 없습니다.
  socratesDisabledProps.push({
    propId: selectedPropId,
  });

  // 능력 사용 처리
  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].used = true;

  document.getElementById("ability-modal").classList.remove("visible");
  showAlert(
    currentLang.langCode === "ko"
      ? "선택한 명제가 논증에서 제외됩니다."
      : "The selected proposition will be excluded from arguments."
  );
  render(); // UI 즉시 갱신
}
function activateDescartesAbility(player) {
  // 삭제 가능한 명제 (공리, 승리조건 제외) 목록을 준비합니다.
  const availablePropositions = truePropositions.filter(
    (p) => p.type === "user-made" || p.type === "theorem"
  );

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "삭제할 수 있는 명제가 없습니다."
        : "There are no propositions to delete."
    );
    return;
  }

  // 범용 능력 모달창을 가져와 내용을 데카르트에 맞게 수정합니다.
  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.langCode === "ko" ? "방법적 회의" : "Methodic Doubt";
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.langCode === "ko"
      ? "이 명제를 삭제하기"
      : "Delete this Proposition";

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화

  // 삭제 가능한 명제들로 선택 목록을 채웁니다.
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection";
    // propId를 값으로 사용하여 어떤 명제를 삭제할지 식별합니다.
    radio.value = propData.propId;
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 모달의 닫기/확인 버튼에 데카르트 전용 함수를 연결합니다.
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick =
    confirmDescartesAbility;

  modal.classList.add("visible");
}

function confirmDescartesAbility() {
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) return;

  const selectedPropId = selectedRadio.value;

  // 1. truePropositions 배열에서 삭제할 명제의 인덱스를 찾습니다.
  const propIndex = truePropositions.findIndex(
    (p) => p.propId === selectedPropId
  );

  if (propIndex === -1) {
    console.error("Descartes Ability Error: Proposition ID not found.");
    return;
  }

  // 2. 해당 명제를 배열에서 제거합니다.
  truePropositions.splice(propIndex, 1);

  // 3. ★★★ 핵심 단계 ★★★
  //    명제 하나가 사라졌으므로, 전체 논리 체계에 모순이 생겼을 수 있습니다.
  //    따라서 공리부터 시작하여 남아있는 명제들로 진리 집합(internalTruthSet)을 완전히 재구성합니다.
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
        "Critical error after Descartes' ability: Inconsistency found while rebuilding truth set."
      );
      // 실제 게임에서는 이 오류를 더 견고하게 처리해야 할 수 있습니다.
    }
  }
  internalTruthSet = newTruthSet;

  // 4. 능력 사용 상태를 기록하고 UI를 갱신합니다.
  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].used = true;

  document.getElementById("ability-modal").classList.remove("visible");
  showAlert(
    currentLang.langCode === "ko"
      ? "선택한 명제가 참 목록에서 삭제되었습니다."
      : "The selected proposition has been deleted from the true list."
  );
  render();
}
function activateWittgensteinAbility(player) {
  // 유레카 모달과 동일하게 내부 상태를 초기화합니다.
  derivedPropositionsInModal = [];
  currentAssumption = null;

  const modal = document.getElementById("eureka-modal");
  const premiseList = document.getElementById("premise-list");
  premiseList.innerHTML = "";

  // 유레카 모달과 똑같이 사용 가능한 모든 전제를 가져옵니다.
  const allSelectablePropositions = [
    ...parsedAxioms,
    ...truePropositions
      .map((p) => ({ ...p, proposition: p.proposition }))
      .filter((p) => p.proposition),
  ].filter(
    (propData) =>
      !propData.propId ||
      !socratesDisabledProps.some((dp) => dp.propId === propData.propId)
  );

  // 공리들을 그룹별로 분류하고 순서대로 추가 (openEurekaModal과 동일)
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
      propId: propData.propId, // propId도 함께 전달
      dependsOnAssumption: false,
      isAssumption: false,
      label: label,
    });
  });

  const modalTitle = document.getElementById("eureka-title");
  const confirmBtn = document.getElementById("modal-confirm-btn");

  // 모달의 제목과 버튼을 비트겐슈타인 전용으로 설정합니다.
  modalTitle.textContent = currentLang.ui.wittgensteinAbilityTitle;
  confirmBtn.textContent = currentLang.ui.wittgensteinConfirmButton;

  // 확인 버튼 클릭 시, 비트겐슈타인 전용 확인 함수를 호출하도록 연결합니다.
  confirmBtn.onclick = confirmWittgensteinAbility;

  renderModal();
  document.getElementById("inference-rule-select").onchange =
    updateConclusionPreview;

  // 추론 규칙을 전건 긍정으로 초기화
  document.getElementById("inference-rule-select").value = "modusPonens";

  updateConclusionPreview();

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
function confirmWittgensteinAbility() {
  const selectedLis = Array.from(
    document.querySelectorAll('#premise-list input[type="checkbox"]:checked')
  );

  // 1. 유효성 검사: 반드시 하나의 '정리'만 선택해야 합니다.
  if (selectedLis.length !== 1) {
    showAlert(currentLang.alerts.selectOneTheoremOnly);
    return;
  }
  const finalTheoremData = JSON.parse(
    selectedLis[0].parentElement.dataset.propObject
  );
  if (
    finalTheoremData.type !== "theorem" ||
    finalTheoremData.dependsOnAssumption
  ) {
    showAlert(currentLang.alerts.selectOneTheoremOnly);
    return;
  }

  // 2. 재귀적으로 모든 상위 전제를 추적합니다.
  const premisesToKick = new Map(); // 중복 방지를 위해 Map 사용 (key: propId 또는 proposition 텍스트)

  function findAndAddSources(theoremData) {
    if (
      !theoremData.sourcePremises ||
      theoremData.sourcePremises.length === 0
    ) {
      return; // 더 이상 거슬러 올라갈 전제가 없으면 종료
    }

    for (const source of theoremData.sourcePremises) {
      // source.propId가 있는 경우 (원본 참 명제) 그것을 key로 사용
      const key = source.propId
        ? source.propId
        : propositionToText(source.proposition);
      if (!premisesToKick.has(key)) {
        premisesToKick.set(key, source);
        // 계속해서 상위 전제를 추적
        findAndAddSources(source);
      }
    }
  }

  findAndAddSources(finalTheoremData);

  // 3. 추적된 전제들을 '참 명제 목록'에서 삭제합니다.
  const idsToDelete = new Set();
  premisesToKick.forEach((source) => {
    // 원본 참 명제 목록에서 온 전제들만 ID가 있습니다.
    if (source.propId) {
      if (
        source.propId &&
        source.type !== "victory" &&
        source.type !== "axiom"
      ) {
        idsToDelete.add(source.propId);
      }
    }
  });

  truePropositions = truePropositions.filter((p) => !idsToDelete.has(p.propId));

  // 4. 최종적으로 도출된 새로운 정리를 참 목록에 추가합니다.
  truePropositions.push({
    propId: `prop_${Date.now()}_${Math.random()}`,
    type: "theorem",
    round: currentRound,
    proposition: finalTheoremData.proposition,
    source: "wittgenstein_ability",
  });

  // 5. 전체 진리 집합을 재구성하여 논리적 일관성을 유지합니다.
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
        "Wittgenstein ability critical error: Inconsistency found."
      );
    }
  }
  internalTruthSet = newTruthSet;

  // 6. 능력 사용 상태를 업데이트하고 마무리합니다.
  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].used = true;

  document.getElementById("eureka-modal").classList.remove("visible");
  showAlert(currentLang.alerts.wittgensteinSuccess);
  render();
}
function activateDerridaAbility(player) {
  // 1. 분해 가능한 명제(연결사로 이어진 명제)만 필터링합니다.
  const availablePropositions = truePropositions.filter(
    (p) =>
      p.type !== "victory" &&
      p.proposition &&
      (p.proposition.type === "conditional" ||
        p.proposition.type === "conjunction" ||
        p.proposition.type === "disjunction")
  );

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "분해할 수 있는 명제가 없습니다."
        : "There are no compound propositions to deconstruct."
    );
    return;
  }

  // 2. 범용 능력 모달 UI를 설정합니다.
  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.langCode === "ko" ? "해체" : "Deconstruction";
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.langCode === "ko"
      ? "이 명제를 해체하기"
      : "Deconstruct this Proposition";

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화

  // 3. 필터링된 명제로 선택 목록을 만듭니다.
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection";
    // propId를 값으로 저장하여 어떤 명제를 선택했는지 식별합니다.
    radio.value = propData.propId;
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 4. 확인/취소 버튼에 데리다 전용 함수를 연결하고 모달을 엽니다.
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick =
    confirmDerridaAbility;

  modal.classList.add("visible");
}

/**
 * 데리다 능력 실행 및 검증 함수
 */
function confirmDerridaAbility() {
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) return;

  const selectedPropId = selectedRadio.value;
  const selectedPropData = truePropositions.find(
    (p) => p.propId === selectedPropId
  );

  if (!selectedPropData) {
    console.error("Derrida Ability Error: Selected proposition not found.");
    return;
  }

  const { left, right } = selectedPropData.proposition;

  // --- 핵심 로직: 삭제와 추가가 모두 가능한지 '미리' 검증하는 단계 ---

  // 1. 선택된 원본 명제를 '제외한' 나머지 명제 목록을 만듭니다.
  const propositionsWithoutOriginal = truePropositions.filter(
    (p) => p.propId !== selectedPropId
  );

  // 2. 이 임시 목록을 기반으로 진리 집합을 '재구성'하여, 원본 명제가 없었을 때의 상태를 만듭니다.
  let baseTruthSetForTest = parsedAxioms.map((a) => a.proposition);
  const propsToReverify = propositionsWithoutOriginal
    .filter((p) => p.proposition)
    .map((p) => p.proposition);
  for (const prop of propsToReverify) {
    const verification = verifyAndExpandTruths(prop, baseTruthSetForTest);
    if (verification.success) {
      baseTruthSetForTest = verification.expandedSet;
    } else {
      console.error(
        "Derrida Pre-check Error: Inconsistency found when creating base set."
      );
      showAlert(currentLang.alerts.criticalErrorUndo); // 내부 오류 알림
      return;
    }
  }

  // 3. '원본이 삭제된' 상태에서, 분해된 첫 번째(left) 명제를 추가했을 때 모순이 없는지 확인합니다.
  const verification1 = verifyAndExpandTruths(left, baseTruthSetForTest);
  if (!verification1.success) {
    showAlert(currentLang.alerts.contradictionFound);
    return;
  }

  // 4. 이어서 두 번째(right) 명제를 추가했을 때 모순이 없는지 최종 확인합니다.
  const verification2 = verifyAndExpandTruths(right, verification1.expandedSet);
  if (!verification2.success) {
    showAlert(currentLang.alerts.contradictionFound);
    return;
  }

  // 5. 모든 검증을 통과했으므로 능력 사용을 확정합니다.
  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].used = true;

  // 6. 검증이 모두 끝났으므로, 실제 게임 상태를 변경합니다.
  //    - 원본 복합 명제를 삭제합니다. (이미 만들어 둔 리스트 재활용)
  truePropositions = propositionsWithoutOriginal;
  //    - 분해된 두 명제를 추가합니다.
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

  // 7. 최종적으로 검증된 진리 집합으로 내부 상태를 업데이트합니다.
  internalTruthSet = verification2.expandedSet;

  document.getElementById("ability-modal").classList.remove("visible");
  showAlert(
    currentLang.langCode === "ko"
      ? "명제가 성공적으로 해체되었습니다."
      : "The proposition has been successfully deconstructed."
  );
  render();
}
function activateHumeAbility(player) {
  // 함수 이름을 activateHumeAbility로 변경
  // 1. 분해 가능한 명제('라면'으로 이어진 명제만) 필터링합니다.
  const availablePropositions = truePropositions.filter(
    (p) =>
      p.type !== "victory" &&
      p.proposition &&
      p.proposition.type === "conditional" // 👈 '라면' 명제만 대상으로 변경
  );

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "분해할 수 있는 '라면' 명제가 없습니다."
        : "There are no 'then' propositions to deconstruct."
    );
    return;
  }

  // 2. 범용 능력 모달 UI를 흄에 맞게 설정합니다.
  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.langCode === "ko" ? "인과성 비판" : "Critique of Causality"; // 👈 능력 이름 변경
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.langCode === "ko"
      ? "이 명제를 분해하기"
      : "Decompose this Proposition"; // 👈 버튼 텍스트 변경

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = "";

  // 3. 필터링된 명제로 선택 목록을 만듭니다.
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection";
    radio.value = propData.propId;
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 4. 확인/취소 버튼에 흄 전용 함수를 연결하고 모달을 엽니다.
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick = confirmHumeAbility; // 👈 흄 전용 확인 함수로 연결

  modal.classList.add("visible");
}

/**
 * 흄 능력 실행: 선택한 명제를 교체하고 게임 상태를 업데이트합니다.
 */
function confirmHumeAbility() {
  // 함수 이름을 confirmHumeAbility로 변경
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) return;

  const selectedPropId = selectedRadio.value;
  const selectedPropData = truePropositions.find(
    (p) => p.propId === selectedPropId
  );

  if (!selectedPropData) {
    console.error("Hume Ability Error: Selected proposition not found."); // 에러 메시지 변경
    return;
  }

  const { left, right } = selectedPropData.proposition;

  // --- 핵심 로직: 데리다와 동일한 안전성 검증 로직 사용 ---
  const propositionsWithoutOriginal = truePropositions.filter(
    (p) => p.propId !== selectedPropId
  );
  let baseTruthSetForTest = parsedAxioms.map((a) => a.proposition);
  const propsToReverify = propositionsWithoutOriginal
    .filter((p) => p.proposition)
    .map((p) => p.proposition);
  for (const prop of propsToReverify) {
    const verification = verifyAndExpandTruths(prop, baseTruthSetForTest);
    if (verification.success) {
      baseTruthSetForTest = verification.expandedSet;
    } else {
      console.error(
        "Hume Pre-check Error: Inconsistency found when creating base set." // 에러 메시지 변경
      );
      showAlert(currentLang.alerts.criticalErrorUndo);
      return;
    }
  }
  const verification1 = verifyAndExpandTruths(left, baseTruthSetForTest);
  if (!verification1.success) {
    showAlert(currentLang.alerts.contradictionFound);
    return;
  }
  const verification2 = verifyAndExpandTruths(right, verification1.expandedSet);
  if (!verification2.success) {
    showAlert(currentLang.alerts.contradictionFound);
    return;
  }

  // 5. 능력 사용을 '1회용'으로 확정합니다.
  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].used = true; // 👈 '게임당 1회' 규칙으로 변경

  // 6. 실제 게임 상태를 변경합니다.
  truePropositions = propositionsWithoutOriginal;
  const newProps = [
    {
      propId: `prop_${Date.now()}_${Math.random()}`,
      type: "theorem",
      source: "hume_ability", // 👈 출처를 'hume_ability'로 변경
      proposition: left,
    },
    {
      propId: `prop_${Date.now()}_${Math.random()}`,
      type: "theorem",
      source: "hume_ability", // 👈 출처를 'hume_ability'로 변경
      proposition: right,
    },
  ];
  truePropositions.push(...newProps);

  // 7. 최종 진리 집합으로 업데이트합니다.
  internalTruthSet = verification2.expandedSet;

  document.getElementById("ability-modal").classList.remove("visible");
  showAlert(
    currentLang.langCode === "ko"
      ? "명제가 성공적으로 분해되었습니다."
      : "The proposition has been successfully decomposed."
  );
  render();
}

function activateKuhnAbility(player) {
  // 1. '모든'으로 시작하는 보편 명제인지 확인합니다.
  // 2. getOppositePredicate 함수를 이용해 해당 명제의 술어에 반대 개념이 존재하는지 확인합니다.
  const availablePropositions = truePropositions.filter(
    (p) =>
      p.proposition &&
      p.proposition.type === "universal" &&
      getOppositePredicate(p.proposition.predicate) !== null
  );

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "패러다임을 전환할 보편 명제가 없습니다."
        : "There are no universal propositions for a paradigm shift."
    );
    return;
  }

  // 2. 범용 능력 모달 UI를 쿤에 맞게 설정합니다.
  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.langCode === "ko" ? "패러다임 전환" : "Paradigm Shift";
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.langCode === "ko" ? "패러다임 전환하기" : "Shift Paradigm";

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화

  // 3. 필터링된 명제로 선택 목록을 채웁니다.
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection";
    radio.value = propData.propId; // propId를 값으로 저장
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 4. 모달의 버튼에 쿤 전용 확인 함수를 연결하고 모달을 엽니다.
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick = confirmKuhnAbility;

  modal.classList.add("visible");
}

function confirmKuhnAbility() {
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) return;

  const selectedPropId = selectedRadio.value;
  const originalPropData = truePropositions.find(
    (p) => p.propId === selectedPropId
  );

  if (!originalPropData) {
    console.error("Kuhn Ability Error: Selected proposition not found.");
    return;
  }

  // --- (1) 새로운 패러다임 명제 생성 ---
  const originalPredicate = originalPropData.proposition.predicate;
  const predicatePairs = currentLang.contradictoryPredicates;

  let newPredicate = null;
  for (const key in predicatePairs) {
    if (key === originalPredicate) {
      newPredicate = predicatePairs[key];
      break;
    }
    if (predicatePairs[key] === originalPredicate) {
      newPredicate = key;
      break;
    }
  }

  if (!newPredicate) {
    showAlert(
      currentLang.langCode === "ko"
        ? "이 명제의 반대 술어를 찾을 수 없습니다."
        : "Cannot find an opposite predicate for this proposition."
    );
    return;
  }

  const newParadigmProposition = {
    type: "universal",
    entity: originalPropData.proposition.entity,
    predicate: newPredicate,
  };

  const newParadigmPropForList = {
    propId: `prop_${Date.now()}_paradigm`,
    type: "theorem", // 새로운 패러다임은 '정리'로 취급
    source: "kuhn_ability",
    proposition: newParadigmProposition,
  };

  // --- (2) 기반 진리 목록 생성 및 사전 검증 ---
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

  if (!preCheckResult.success) {
    showAlert(
      currentLang.langCode === "ko"
        ? "새로운 패러다임이 기존 공리나 승리 조건과 모순되어 능력을 발동할 수 없습니다."
        : "The new paradigm contradicts basic axioms or win conditions and cannot be activated."
    );
    return;
  }

  let currentValidatedTruths = preCheckResult.expandedSet;
  let survivingPropositions = [
    ...truePropositions.filter((p) => p.type === "victory"),
    newParadigmPropForList,
  ];

  // --- (3) 기존 명제 재검증 ---
  const candidatesForRevalidation = truePropositions.filter(
    (p) =>
      (p.type === "user-made" || p.type === "theorem") &&
      p.propId !== selectedPropId
  );

  for (const candidate of candidatesForRevalidation) {
    const validationResult = verifyAndExpandTruths(
      candidate.proposition,
      currentValidatedTruths
    );

    if (validationResult.success) {
      // 모순 없음 (생존)
      currentValidatedTruths = validationResult.expandedSet;
      survivingPropositions.push(candidate);
    }
    // 모순 발생 시 (폐기), 아무것도 하지 않음.
  }

  // --- (4) 최종 목록 확정 및 UI 갱신 ---
  truePropositions = survivingPropositions;
  internalTruthSet = currentValidatedTruths;

  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].used = true;

  document.getElementById("ability-modal").classList.remove("visible");
  showAlert(
    currentLang.langCode === "ko"
      ? "패러다임이 전환되었습니다!"
      : "Paradigm has shifted!"
  );
  render();
}
function renderKantModal(player) {
  const hand = player === "A" ? playerA_Hand : playerB_Hand;
  const handDisplay = document.getElementById("kant-hand-display");
  const propDisplay = document.getElementById("kant-proposition-display");

  const colorClass = player === "A" ? "card-white" : "card-black";

  handDisplay.innerHTML = "";
  propDisplay.innerHTML = "";

  // 1. 손패 영역 렌더링
  hand.forEach((card) => {
    const cardEl = document.createElement("div");

    cardEl.className = `card ${colorClass}`;
    cardEl.textContent = card.text;
    cardEl.onclick = () => {
      const tempPropositionForValidation = kantProposition.map((c) => ({
        card: c,
        player: player,
      }));

      if (isValidPlay(card, tempPropositionForValidation)) {
        audioManager.playSfx("playCard");
        const cardIndex = hand.findIndex(
          (c) => c.text === card.text && c.type === card.type
        );
        if (cardIndex > -1) {
          const [movedCard] = hand.splice(cardIndex, 1);
          kantProposition.push(movedCard);
          renderKantModal(player);
        }
      } else {
        showAlert(currentLang.alerts.invalidCard);
      }
    };
    handDisplay.appendChild(cardEl);
  });

  // 2. 명제 구성 영역 렌더링
  kantProposition.forEach((card) => {
    const cardEl = document.createElement("div");

    cardEl.className = `card ${colorClass}`;
    cardEl.textContent = card.text;
    propDisplay.appendChild(cardEl);
  });

  // 3. 버튼들 활성화/비활성화 상태 업데이트
  // 되돌리기 버튼: 카드가 없으면 비활성화
  document.getElementById("kant-undo-btn").disabled =
    kantProposition.length === 0;
    
  // 완성 버튼: 카드가 없거나 문법적으로 완성되지 않았으면 비활성화
  const isGrammaticallyComplete = kantProposition.length > 0 && 
    parsePropositionFromCards(kantProposition.map((c) => ({ card: c }))) !== null;
  document.getElementById("kant-confirm-btn").disabled = !isGrammaticallyComplete;
}

function confirmKantAbility(player) {
  // 1. 명제가 비어있는지 확인
  if (kantProposition.length === 0) {
    return;
  }

  // 2. 문법적 완결성 검사
  // parsePropositionFromCards는 {card: cardObject} 형태의 배열을 기대하므로 변환
  const parsedProp = parsePropositionFromCards(
    kantProposition.map((c) => ({ card: c }))
  );
  if (!parsedProp) {
    showAlert(currentLang.alerts.incompleteProposition);
    return;
  }

  // 4. 논리적 모순 검사
  const verificationResult = verifyAndExpandTruths(parsedProp);
  if (!verificationResult.success) {
    showAlert(currentLang.alerts.contradictionFound);
    return;
  }

  // 5. 모든 검사를 통과: 능력 사용 처리
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[player].used = true;

  // 6. 새로운 명제를 참 목록에 추가
  truePropositions.push({
    propId: `prop_${Date.now()}_${Math.random()}`,
    type: "theorem", // 능력으로 만든 명제는 '정리'로 취급
    source: "kant_ability", // 칸트 능력 출처 명시
    proposition: parsedProp,
  });

  // 7. 내부 진리 집합 업데이트
  internalTruthSet = verificationResult.expandedSet;

  // 8. 마무리
  const modal = document.getElementById("kant-ability-modal");
  modal.classList.remove("visible");
  kantProposition = []; // 임시 명제 배열 비우기

  showAlert(currentLang.alerts.kantSuccess);
  render(); // 게임 화면 전체 갱신
}

/**
 * 칸트 능력 활성화: 모달창을 설정하고 띄웁니다.
 */
function activateKantAbility(player) {
  kantProposition = []; // 명제 배열 초기화
  const modal = document.getElementById("kant-ability-modal");

  // UI 텍스트 설정
  document.getElementById("kant-ability-title").textContent =
    currentLang.langCode === "ko"
      ? "선험적 종합판단"
      : "Synthetic A Priori Judgment";
  document.getElementById("kant-current-proposition-title").textContent =
    currentLang.langCode === "ko"
      ? "구성중인 명제"
      : "Proposition under Construction";
  document.getElementById("kant-hand-title").textContent =
    currentLang.langCode === "ko" ? "사용 가능한 카드" : "Available Cards";
  document.getElementById("kant-undo-btn").textContent =
    currentLang.ui.undoButton;
  document.getElementById("kant-confirm-btn").textContent =
    currentLang.ui.completeButton;

  // 되돌리기 버튼 기능 연결
  document.getElementById("kant-undo-btn").onclick = (event) => {
    if (kantProposition.length > 0) {
      // 글로벌 click 이벤트 전파를 막아 중복 hover 효과음 방지
      event.stopPropagation();
      audioManager.playSfx("undo");
      const cardToReturn = kantProposition.pop();
      const hand = player === "A" ? playerA_Hand : playerB_Hand;
      hand.push(cardToReturn);
      // 손패 정렬을 다시 해주는 것이 좋습니다.
      hand.sort(
        (a, b) => cardTypeOrder.indexOf(a.type) - cardTypeOrder.indexOf(b.type)
      );
      renderKantModal(player);
    }
    // 카드가 없을 때는 글로벌 hover 효과음이 재생되도록 놔둠
  };

  // 닫기 버튼 기능 연결 (중요: 취소 시 카드를 모두 손패로 되돌림)
  document.getElementById("close-kant-modal-btn").onclick = () => {
    audioManager.playSfx("hover");
    if (kantProposition.length > 0) {
      const hand = player === "A" ? playerA_Hand : playerB_Hand;
      hand.push(...kantProposition);
      kantProposition = [];
      hand.sort(
        (a, b) => cardTypeOrder.indexOf(a.type) - cardTypeOrder.indexOf(b.type)
      );
    }
    modal.classList.remove("visible");
    render(); // 메인 게임 화면도 갱신
  };

  document.getElementById("kant-confirm-btn").onclick = (event) => {
    if (!document.getElementById("kant-confirm-btn").disabled) {
      // 글로벌 click 이벤트 전파를 막아 중복 hover 효과음 방지
      event.stopPropagation();
      audioManager.playSfx("complete");
      confirmKantAbility(player);
    }
  };

  // 초기 모달 렌더링 및 표시
  renderKantModal(player);
  modal.classList.add("visible");
}
