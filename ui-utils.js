function showAlert(message, callback) {
  const modal = document.getElementById("alert-modal");
  document.getElementById("alert-message").innerHTML = message;
  modal.classList.add("visible");

  // 기존 이벤트 제거
  const okBtn = document.getElementById("alert-ok-btn");
  const newBtn = okBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(newBtn, okBtn);

  newBtn.addEventListener("click", () => {
    modal.classList.remove("visible");
    if (callback) callback();
  });
}

function showPrompt(message, callback) {
  const modal = document.getElementById("prompt-modal");
  document.getElementById("prompt-message").textContent = message;
  const input = document.getElementById("prompt-input");
  const confirmBtn = document.getElementById("prompt-confirm-btn");
  const cancelBtn = document.getElementById("prompt-cancel-btn");
  input.value = "";

  const confirmHandler = () => {
    cleanup();
    callback(input.value);
  };
  const cancelHandler = () => {
    cleanup();
    callback(null);
  };
  const cleanup = () => {
    modal.classList.remove("visible");
    confirmBtn.removeEventListener("click", confirmHandler);
    cancelBtn.removeEventListener("click", cancelHandler);
  };

  confirmBtn.addEventListener("click", confirmHandler);
  cancelBtn.addEventListener("click", cancelHandler);
  modal.classList.add("visible");
  input.focus();
}

function showConfirm(message, onConfirm, onCancel) {
  const modal = document.getElementById("prompt-modal");
  document.getElementById("prompt-message").innerHTML = message;
  const input = document.getElementById("prompt-input");
  const confirmBtn = document.getElementById("prompt-confirm-btn");
  const cancelBtn = document.getElementById("prompt-cancel-btn");

  input.style.display = "none";
  confirmBtn.textContent = currentLang.ui.yesButton;
  cancelBtn.textContent = currentLang.ui.noButton;

  const confirmHandler = (event) => {
    // 💡 변경점: event 객체를 받도록 수정
    cleanup();
    if (onConfirm) onConfirm(event); // 💡 변경점: onConfirm 콜백으로 event 객체를 전달
  };

  const cancelHandler = () => {
    cleanup();
    if (onCancel) onCancel();
  };

  const cleanup = () => {
    modal.classList.remove("visible");
    input.style.display = "";
    confirmBtn.textContent = currentLang.ui.okButton;
    cancelBtn.textContent = currentLang.ui.cancelButton;
    confirmBtn.removeEventListener("click", confirmHandler);
    cancelBtn.removeEventListener("click", cancelHandler);
  };

  confirmBtn.addEventListener("click", confirmHandler);
  cancelBtn.addEventListener("click", cancelHandler);
  modal.classList.add("visible");
}

function setupUI() {
  document.getElementById("main-menu-btn").textContent =
    currentLang.langCode === "ko" ? "메인으로" : "Main Menu";

  document.getElementById("main-title").textContent = currentLang.ui.title;
  document.getElementById("new-game-btn").textContent =
    currentLang.ui.newGameButton;
  document.getElementById("vs-ai-btn").textContent = currentLang.ui.vsAIButton;
  document.getElementById("vs-player-btn").textContent =
    currentLang.ui.vsPlayerButton;
  document.getElementById("tutorial-btn").textContent =
    currentLang.ui.tutorialButton;
  document.getElementById("exit-game-btn").textContent =
    currentLang.ui.exitGameButton;
  document.getElementById("vs-ai-battle-btn").textContent =
    currentLang.ui.vsAIBattleButton;
  document.getElementById(
    "player-a-title"
  ).innerHTML = `${currentLang.ui.playerAName} - ${currentLang.ui.playerAColor}`;
  document.getElementById(
    "player-b-title"
  ).innerHTML = `${currentLang.ui.playerBName} - ${currentLang.ui.playerBColor}`;
  document.getElementById("eureka-a").textContent = currentLang.ui.eurekaButton;
  document.getElementById("eureka-b").textContent = currentLang.ui.eurekaButton;
  document
    .getElementById("ability-a")
    .addEventListener("click", () => activateAbility("A"));
  document
    .getElementById("ability-b")
    .addEventListener("click", () => activateAbility("B"));
  document.getElementById("current-proposition-title").textContent =
    currentLang.ui.currentPropositionTitle;
  document.getElementById("complete-btn").textContent =
    currentLang.ui.completeButton;
  document.getElementById("undo-btn").textContent = currentLang.ui.undoButton;
  document.getElementById("end-turn-btn").textContent =
    currentLang.ui.endTurnButton;
  document.getElementById("true-propositions-title").textContent =
    currentLang.ui.truePropositionsTitle;
  document.getElementById("thinking-time-title").textContent =
    currentLang.ui.thinkingTimeTitle;
  document.getElementById("thinking-time-desc").innerHTML =
    currentLang.ui.thinkingTimeDesc;
  document.getElementById("fullscreen-btn").textContent =
    currentLang.ui.fullscreenButton;
  document.getElementById("settings-btn").textContent =
    currentLang.ui.settingsButton;
  document.getElementById("tutorial-btn").textContent =
    currentLang.ui.tutorialButton;
  document.getElementById("tutorial-puzzle-btn").textContent =
    currentLang.ui.tutorialPuzzleButton;

  document.getElementById("puzzle-mode-btn").textContent =
    currentLang.ui.puzzleButton;
  document.getElementById("puzzle-modal-title").textContent =
    currentLang.modals.puzzleTitle;

  document.getElementById("tutorial-modal-title").textContent =
    currentLang.modals.tutorialTitle;
  document.getElementById("alert-ok-btn").textContent = currentLang.ui.okButton;
  document.getElementById("credits-btn").textContent =
    currentLang.ui.creditsButton;
  document.getElementById("credits-title").textContent =
    currentLang.modals.creditsTitle;
  document.getElementById("prompt-cancel-btn").textContent =
    currentLang.ui.cancelButton;
  document.getElementById("prompt-confirm-btn").textContent =
    currentLang.ui.okButton;
  document.getElementById("prompt-input").placeholder =
    currentLang.modals.promptInputPlaceholder;

  document.getElementById("p1-skill-title").textContent =
    currentLang.ui.skillTitle;
  document.getElementById("p2-skill-title").textContent =
    currentLang.ui.skillTitle;

  document.getElementById("premise-selection-title").textContent =
    currentLang.modals.premiseSelectionTitle;
  document.getElementById("apply-rule-btn").textContent =
    currentLang.modals.applyRuleButton;
  document.getElementById("add-assumption-btn").textContent =
    currentLang.modals.addAssumptionButton;
  document.getElementById("cancel-assumption-btn").textContent =
    currentLang.ui.cancelAssumptionButton;

  document.getElementById("settings-title").textContent =
    currentLang.ui.settingsTitle;
  document.getElementById("bgm-label").textContent = currentLang.ui.bgmLabel;
  document.getElementById("sfx-label").textContent = currentLang.ui.sfxLabel;

  const select = document.getElementById("inference-rule-select");
  select.innerHTML = `
                  <optgroup label="${currentLang.inferenceRules.basic}">
                      <option value="modusPonens">${currentLang.inferenceRules.modusPonens}</option>
                      <option value="modusTollens">${currentLang.inferenceRules.modusTollens}</option>
                      <option value="hypotheticalSyllogism">${currentLang.inferenceRules.hypotheticalSyllogism}</option>
                      <option value="disjunctiveSyllogism">${currentLang.inferenceRules.disjunctiveSyllogism}</option>
                      <option value="universalApplication">${currentLang.inferenceRules.universalApplication}</option>
                      <option value="existentialInstantiation">${currentLang.inferenceRules.existentialInstantiation}</option>
                      <option value="conjunctionElimination">${currentLang.inferenceRules.conjunctionElimination}</option>
                      <option value="doubleNegationElimination">${currentLang.inferenceRules.doubleNegationElimination}</option>
                  </optgroup>
                  <optgroup label="${currentLang.inferenceRules.assumptionBased}">
                      <option value="conditionalIntroduction" style="color:#27ae60; font-weight:normal;">${currentLang.inferenceRules.conditionalIntroduction}</option>
                      <option value="reductioAdAbsurdum" style="color:#c0392b; font-weight:normal;">${currentLang.inferenceRules.reductioAdAbsurdum}</option>
                  </optgroup>
                  <optgroup label="${currentLang.inferenceRules.advanced}">
                      <option value="proofByCases" style="color:#2980b9; font-weight:normal;">${currentLang.inferenceRules.proofByCases}</option>
                  </optgroup>
              `;
}

function setupModeDescriptionHovers() {
  const descriptionBox = document.getElementById("mode-description");
  if (!descriptionBox) return;

  const buttonsToDescribe = [
    { id: "vs-player-btn", key: "vsPlayerDesc" },
    { id: "vs-ai-btn", key: "vsAIDesc" },
    { id: "tutorial-btn", key: "tutorialDesc" },
    { id: "puzzle-mode-btn", key: "puzzleDesc" },
  ];

  buttonsToDescribe.forEach((buttonInfo) => {
    const buttonEl = document.getElementById(buttonInfo.id);
    if (buttonEl) {
      buttonEl.addEventListener("mouseenter", (e) => {
        // 1. 현재 언어에 맞는 설명 텍스트를 가져와서 내용 변경
        const descText = currentLang.ui[buttonInfo.key];
        descriptionBox.innerHTML = descText;

        // 2. 설명 박스의 Y축 위치를 현재 마우스가 올라간 버튼의 중앙으로 이동
        const buttonCenterY = e.target.offsetTop + e.target.offsetHeight / 2;
        descriptionBox.style.top = `${buttonCenterY}px`;

        // 3. 설명 박스를 부드럽게 표시
        descriptionBox.style.opacity = "1";
        descriptionBox.style.visibility = "visible";
      });

      buttonEl.addEventListener("mouseleave", () => {
        // 마우스가 벗어나면 설명 박스를 다시 숨김
        descriptionBox.style.opacity = "0";
        descriptionBox.style.visibility = "hidden";
      });
    }
  });
}

function updateMainMenuBtnVisibility() {
  const mainCenter = document.querySelector(".main-center-bg");
  const mainMenuBtn = document.getElementById("main-menu-btn");
  if (mainCenter && mainMenuBtn) {
    if (!mainCenter.classList.contains("hidden")) {
      mainMenuBtn.style.display = "none";
    } else {
      mainMenuBtn.style.display = "";
    }
  }
}

function updateMainCenterVisibility() {
  const mainCenter = document.querySelector(".main-center-bg");
  const hideList = [
    "#player-a-area .player-title-box",
    "#player-a-area .hand",
    "#player-a-portrait",
    "#player-b-area .player-title-box",
    "#player-b-area .hand",
    "#player-b-portrait",
    "#status > *",
    "#round-display",
    "#new-game-btn",
    "#player-a-area .button-wrapper",
    "#player-b-area .button-wrapper",
  ];
  const shouldHide = !mainCenter.classList.contains("hidden");
  hideList.forEach((sel) => {
    const el = document.querySelector(sel);
    if (el) el.style.visibility = shouldHide ? "hidden" : "visible";
  });
}

// --- 유레카 모달 리스트 클릭 편의성 개선 코드 ---
const eurekaPremiseList = document.getElementById("premise-list");

if (eurekaPremiseList) {
  eurekaPremiseList.addEventListener("click", function (event) {
    // 클릭된 지점에서 가장 가까운 <li> 요소를 찾습니다.
    const targetLi = event.target.closest("li");

    // <li> 요소 안에서 클릭이 발생했다면,
    if (targetLi) {
      // 그 <li> 안에 있는 체크박스를 찾습니다.
      const checkbox = targetLi.querySelector('input[type="checkbox"]');

      // 체크박스가 존재한다면,
      if (checkbox) {
        // 체크박스가 비활성화되어 있으면 클릭 무시
        if (checkbox.disabled) {
          return;
        }

        // 중요: 실제 클릭된 요소(event.target)가 체크박스 자체가 아닐 때만 코드로 상태를 변경합니다.
        // 이렇게 해야 체크박스를 직접 클릭했을 때 상태가 두 번 바뀌는 현상을 막을 수 있습니다.
        if (event.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
        }

        targetLi.classList.toggle("selected", checkbox.checked);

        updateConclusionPreview();
      }
    }
  });
  // --- 전체 화면 기능 로직 ---
  const fullscreenBtn = document.getElementById("fullscreen-btn");

  fullscreenBtn.addEventListener("click", toggleFullScreen);

  function toggleFullScreen() {
    // 부모 창(index.html)에 'toggle-fullscreen' 메시지를 보냄
    window.parent.postMessage("toggle-fullscreen", "*");
  }

  // --- UI 텍스트 업데이트 (다국어 지원) ---
  function updateUIText() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (TEXTS.hasOwnProperty(key)) {
        element.textContent =
          TEXTS[`${key}_${currentLanguage}`] || TEXTS[`${key}_ko`]; // 현재 언어 없으면 한국어 기본
      }
    });
  }

  // 초기 로드 시 텍스트 업데이트
  updateUIText();

  // 언어 변경 시 텍스트 업데이트 함수 호출 (기존 언어 변경 로직에 추가 필요)
  // 예시:
  // function changeLanguage(lang) {
  //     currentLanguage = lang;
  //     localStorage.setItem('languagePreference', lang);
  //     updateUIText(); // 텍스트 업데이트
  //     // ... 기존 언어 변경 로직 ...
  // }
}
