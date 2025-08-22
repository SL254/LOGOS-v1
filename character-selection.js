let selectionMode = null;
let characterSelectionTurn = null;
let tempSelections = { p1: null, p2: null };
let humanPlayerId = null;

function startCharacterSelection(mode) {
  document.querySelector(".shared-selection-area").style.pointerEvents = "auto";
  audioManager.fadeOut("main-menu");
  audioManager.play("character-select");

  gameMode = mode;
  selectionMode = mode;
  tempSelections = { p1: null, p2: null };
  isPlayerAI = { A: false, B: false }; // 상태 초기화

  document.querySelector(".main-center-bg").classList.add("hidden");
  document.getElementById("credits-btn").classList.add("hidden");
  updateLanguageSelectState(); // 언어 선택 드롭다운 비활성화

  updatePlayerDisplay("p1", null);
  updatePlayerDisplay("p2", null);
  document.getElementById("p1-ready-overlay").classList.remove("visible");
  document.getElementById("p2-ready-overlay").classList.remove("visible");

  // 확인 버튼 초기화 - 항상 비활성화 상태로 시작
  document.getElementById("confirm-selection-btn").disabled = true;

  if (mode === "AI") {
    // 기존 1P vs AI 모드 로직 (수정 없음)
    const turnModal = document.getElementById("turn-order-modal");
    document.getElementById("turn-order-title").textContent =
      currentLang.ui.turnOrderTitle;
    document.getElementById("select-first-player").textContent =
      currentLang.ui.selectFirstPlayer;
    document.getElementById("select-second-player").textContent =
      currentLang.ui.selectSecondPlayer;

    turnModal.classList.add("visible");

    document.getElementById("select-first-player").onclick = () => {
      humanPlayerId = "P1";
      aiPlayer = "B"; // 기존 호환성을 위해 유지
      isPlayerAI.B = true; // 새로운 상태 변수 설정
      turnModal.classList.remove("visible");
      document
        .getElementById("character-selection-screen")
        .classList.remove("hidden");
      beginPlayerSelectionTurn("P1");
    };
    document.getElementById("select-second-player").onclick = () => {
      humanPlayerId = "P2";
      aiPlayer = "A"; // 기존 호환성을 위해 유지
      isPlayerAI.A = true; // 새로운 상태 변수 설정
      turnModal.classList.remove("visible");
      document
        .getElementById("character-selection-screen")
        .classList.remove("hidden");
      beginPlayerSelectionTurn("P1");
    };
  } else if (mode === "AI_VS_AI") {
    aiPlayer = null; // 사용하지 않음
    humanPlayerId = null;
    isPlayerAI = { A: true, B: true }; // 양쪽 모두 AI로 설정
    document
      .getElementById("character-selection-screen")
      .classList.remove("hidden");
    beginPlayerSelectionTurn("P1"); // 1P AI 선택부터 시작
  } else {
    // 2P 모드의 경우 (수정 없음)
    aiPlayer = null;
    humanPlayerId = null;
    document
      .getElementById("character-selection-screen")
      .classList.remove("hidden");
    beginPlayerSelectionTurn("P1");
  }
}

function beginPlayerSelectionTurn(player) {
  characterSelectionTurn = player;
  const lang = currentLang.ui;
  let instruction; // instruction 변수 선언

  // 턴에 따라 표시할 안내 문구를 결정하는 부분 (기존과 동일)
  if (selectionMode === "AI") {
    instruction =
      player === humanPlayerId
        ? lang.selectYourPhilosopher // "당신의 철학자를 선택하세요"
        : lang.selectAIPhilosopher; // "AI의 철학자를 선택하세요"
  } else if (selectionMode === "AI_VS_AI") {
    instruction =
      player === "P1" ? lang.selectAIP1Philosopher : lang.selectAIP2Philosopher;
  } else {
    // 2P 모드
    instruction =
      player === "P1"
        ? lang.selectP1Philosopher // "1P, 철학자를 선택하세요"
        : lang.selectP2Philosopher; // "2P, 철학자를 선택하세요"
  }

  // [수정된 부분 1] 우리가 새로 추가한 전용 인디케이터에 텍스트를 설정하고 화면에 표시
  const charIndicator = document.getElementById("character-select-indicator");
  charIndicator.textContent = instruction;
  charIndicator.classList.remove("hidden");

  // 확인 버튼 텍스트를 현재 언어에 맞게 설정 및 비활성화
  document.getElementById("confirm-selection-btn").textContent = currentLang.ui.confirmSelectionButton;
  document.getElementById("confirm-selection-btn").disabled = true;

  // [수정된 부분 2] 누락되었던 캐릭터 아이콘 생성 코드가 여기에 다시 포함되었습니다.
  const grid = document.getElementById("shared-char-grid");
  grid.innerHTML = "";
  for (const key in PHILOSOPHERS) {
    if (key === "derrida") {
      continue; // 키가 'derrida'이면 아이콘을 생성하지 않고 건너뜁니다.
    }
    const philosopher = PHILOSOPHERS[key];
    const iconEl = document.createElement("div");
    iconEl.className = "char-icon";
    iconEl.dataset.id = key;
    iconEl.style.backgroundImage = `url('${philosopher.icon}')`;
    iconEl.onclick = () => handleCharacterClick(key);
    grid.appendChild(iconEl);
  }
  const randomIconEl = document.createElement("div");
  randomIconEl.className = "char-icon";
  randomIconEl.id = "random-char-btn";
  randomIconEl.onclick = () => {
    // 'derrida'를 제외한 철학자 ID 목록을 생성합니다.
    const allCharIds = Object.keys(PHILOSOPHERS).filter(
      (id) => id !== "derrida"
    );
    let availableCharIds;
    if (characterSelectionTurn === "P1") {
      availableCharIds = allCharIds;
    } else {
      availableCharIds = allCharIds.filter((id) => id !== tempSelections.p1);
    }
    const randomId =
      availableCharIds[Math.floor(Math.random() * availableCharIds.length)];
    handleCharacterClick(randomId);
  };
  grid.appendChild(randomIconEl);

  // 모든 캐릭터 아이콘의 선택 상태 초기화
  document.querySelectorAll(".char-icon").forEach((icon) => {
    icon.classList.remove("selected");
  });
}

function handleCharacterClick(philosopherId) {
  const targetPlayer = characterSelectionTurn === "P1" ? "p1" : "p2";
  tempSelections[targetPlayer] = philosopherId;
  updatePlayerDisplay(targetPlayer, philosopherId);

  document.querySelectorAll(".char-icon").forEach((icon) => {
    icon.classList.toggle("selected", icon.dataset.id === philosopherId);
  });

  document.getElementById("confirm-selection-btn").disabled = false;
}

function updatePlayerDisplay(player, philosopherId) {
  const portraitEl = document.getElementById(`${player}-portrait`);
  const nameEl = document.getElementById(`${player}-philosopher-name`);
  const skillDescEl = document.getElementById(`${player}-skill-desc`);

  if (philosopherId) {
    const p = PHILOSOPHERS[philosopherId];
    // player('p1' 또는 'p2')에 따라 p.image 객체에서 알맞은 경로를 가져옵니다.
    const imageUrl = p.image[player];
    portraitEl.style.backgroundImage = `url('${imageUrl}')`;
    nameEl.textContent = p.name[currentLang.langCode];
    skillDescEl.textContent = p.skill[currentLang.langCode];
  } else {
    portraitEl.style.backgroundImage = "none";
    nameEl.textContent = "";
    skillDescEl.textContent = currentLang.ui.waitingForOpponent;
  }
}

function handleConfirmClick() {
  audioManager.playSfx("hover");
  document.getElementById("confirm-selection-btn").disabled = true;

  if (characterSelectionTurn === "P1") {
    document.getElementById("p1-ready-overlay").classList.add("visible");
    beginPlayerSelectionTurn("P2");
  } else {
    document.getElementById("p2-ready-overlay").classList.add("visible");
    finalizeSelection();
  }
}

function finalizeSelection() {
  const charIndicator = document.getElementById("character-select-indicator");
  charIndicator.textContent = currentLang.ui.gameStartingSoon;

  document.querySelector(".shared-selection-area").style.pointerEvents = "none";

  audioManager.fadeOut("character-select");

  setTimeout(() => {
    charIndicator.classList.add("hidden");
    document
      .getElementById("character-selection-screen")
      .classList.add("hidden");
    document.getElementById("turn-order-modal").classList.remove("visible");
    updateMainMenuBtnVisibility();
    updateMainCenterVisibility();
    resetGame(tempSelections);

    if (isTestMode) {
      // 테스트 모드일 경우, 데이터 입력 및 테스트 게임 시작
      promptAndSetupTestGame(tempSelections);
    } else {
      // 일반 모드일 경우, 기존 게임 시작
      resetGame(tempSelections);
    }
  }, 2000);
}
