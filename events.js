function setupEventListeners() {
  // --- EVENT LISTENERS ---
  document.getElementById("lang-en").addEventListener("click", () => {
    // AudioContext가 suspended 상태일 경우 즉시 활성화합니다.
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    initializeGame("en");
  });
  document.getElementById("lang-ko").addEventListener("click", () => {
    // AudioContext가 suspended 상태일 경우 즉시 활성화합니다.
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    initializeGame("ko");
  });
  document.getElementById("new-game-btn").addEventListener("click", () => {
    if (inTutorialMode) return;

    audioManager.fadeOut("game-play");
    audioManager.fadeOut("thinking-time");

    // 현재 게임 모드가 설정되어 있는지 확인
    if (gameMode) {
      clearAllAITimeouts(); // 진행 중인 AI 동작이 있다면 중지
      // 현재 게임 모드로 캐릭터 선택을 다시 시작
      startCharacterSelection(gameMode);
    } else {
      // 혹시 모드가 설정되지 않은 예외적인 경우, 메인 메뉴로 이동
      showMainMenu();
    }
  });

  document.getElementById("vs-player-btn").addEventListener("click", () => {
    if (inTutorialMode) return;
    // 수정된 부분
    audioManager.fadeOut("main-menu");
    audioManager.play("character-select");
    startCharacterSelection("2P");
  });
  document.getElementById("vs-ai-btn").addEventListener("click", () => {
    if (inTutorialMode) return;
    // 수정된 부분
    audioManager.fadeOut("main-menu");
    audioManager.play("character-select");
    startCharacterSelection("AI");
  });

  // NEW Event Listener for the single confirm button
  document
    .getElementById("confirm-selection-btn")
    .addEventListener("click", handleConfirmClick);

  // Keep other event listeners like those for complete-btn, undo-btn, etc. as they are.

  document
    .getElementById("back-to-main-from-char-select-btn")
    .addEventListener("click", goToMainMenu);

  document.getElementById("complete-btn").addEventListener("click", () => {
    if (!inTutorialMode) completeProposition();
  });
  document.getElementById("undo-btn").addEventListener("click", () => {
    if (!inTutorialMode) undoProposition();
  });
  document.getElementById("end-turn-btn").addEventListener("click", (event) => {
    // event 객체를 인자로 받도록 수정
    if (inTutorialMode) return;

    // 이벤트가 document.body로 전파(버블링)되는 것을 막아 범용 클릭음 중복 방지
    event.stopPropagation();

    endTurn(); // 기존 턴 종료 함수 호출
  });
  document.getElementById("eureka-a").addEventListener("click", () => {
    if (!inTutorialMode) declareEureka("A");
  });
  document.getElementById("eureka-b").addEventListener("click", () => {
    if (!inTutorialMode) declareEureka("B");
  });
  document
    .getElementById("close-eureka-modal-btn")
    .addEventListener("click", () => {
      if (inTutorialMode) return;

      // ▼▼▼ [수정] 아래 두 줄을 추가하여 모달의 내부 상태를 초기화합니다. ▼▼▼
      derivedPropositionsInModal = [];
      currentAssumption = null;
      // ▲▲▲ [수정] 코드 추가 끝 ▲▲▲

      if (inPuzzleMode) {
        document.getElementById("eureka-modal").classList.remove("visible");
        document.getElementById("puzzle-goal-box").classList.add("hidden");
        inPuzzleMode = false;
        populatePuzzleLevels();
        document
          .getElementById("puzzle-level-select-modal")
          .classList.add("visible");
        return;
      }

      document.getElementById("eureka-modal").classList.remove("visible");
    });
  document
    .getElementById("close-tutorial-modal-btn")
    .addEventListener("click", () =>
      document.getElementById("tutorial-modal").classList.remove("visible")
    );
  document
    .getElementById("tutorial-btn")
    .addEventListener("click", () => startTutorial(0)); // Existing tutorial button
  document
    .getElementById("tutorial-puzzle-btn")
    .addEventListener("click", () => startTutorial(8)); // New puzzle button
  document.getElementById("apply-rule-btn").addEventListener("click", () => {
    if (!inTutorialMode || tutorialStep === 8) applyRule();
  });
  document
    .getElementById("add-assumption-btn")
    .addEventListener("click", addAssumption);
  document
    .getElementById("cancel-assumption-btn")
    .addEventListener("click", cancelAssumption);
  document
    .getElementById("alert-ok-btn")
    .addEventListener("click", () =>
      document.getElementById("alert-modal").classList.remove("visible")
    );
  document
    .getElementById("tutorial-next-btn")
    .addEventListener("click", advanceTutorial);

  document
    .getElementById("emergency-exit-tutorial-btn")
    .addEventListener("click", endTutorial);

  document.getElementById("puzzle-mode-btn").addEventListener("click", () => {
    if (inTutorialMode) return; // 튜토리얼 중에는 동작 안 함

    audioManager.fadeOut("main-menu"); // 메인 메뉴 음악 페이드아웃
    audioManager.play("puzzle-theme"); // 일반 게임 음악 재생

    populatePuzzleLevels();

    document
      .getElementById("puzzle-level-select-modal")
      .classList.add("visible");
  });

  document
    .getElementById("close-puzzle-modal-btn")
    .addEventListener("click", () => {
      document
        .getElementById("puzzle-level-select-modal")
        .classList.remove("visible");
      showMainMenu();
    });

  // Proof Review Modal Events
  document
    .getElementById("proof-review-btn")
    .addEventListener("click", () => {
      showProofReviewModal();
    });

  document
    .getElementById("close-proof-review-modal-btn")
    .addEventListener("click", () => {
      hideProofReviewModal();
    });
}
