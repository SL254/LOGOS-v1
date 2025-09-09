// client-logic.js
// 'http://localhost:3000' 주소로 서버에 접속을 시도합니다.
const socket = io("http://localhost:3000");

// 전역에서 접근할 수 있도록 window 객체에 할당
window.socket = socket;

// 멀티플레이어 관련 변수
let multiplayerState = {
  inRoom: false,
  roomId: null,
  playerPosition: null,
  players: [],
  gamePhase: 'menu'
};

// 서버에 성공적으로 연결되었을 때 실행될 코드
socket.on("connect", () => {
  console.log("✅ 서버에 성공적으로 연결되었습니다. 내 ID:", socket.id);
  
  // 멀티플레이어 상태 초기화
  multiplayerState.inRoom = false;
  multiplayerState.roomId = null;
  multiplayerState.playerPosition = null;
  multiplayerState.players = [];
});

// 멀티플레이어 게임 참가 함수
function joinMultiplayerGame(playerName = null) {
  console.log("joinMultiplayerGame 함수 호출됨");
  
  if (!socket.connected) {
    console.log("Socket 연결 안됨");
    showAlert("서버와 연결되지 않았습니다.");
    return;
  }
  
  const gameData = { 
    playerName: playerName || `Player${Date.now().toString().slice(-4)}` 
  };
  console.log("서버에 joinMultiplayerGame 이벤트 전송:", gameData);
  
  socket.emit("joinMultiplayerGame", gameData);
}

// 캐릭터 선택 함수
function selectMultiplayerCharacter(characterId) {
  if (!multiplayerState.inRoom) {
    console.error("룸에 참가하지 않은 상태에서 캐릭터 선택 시도");
    return;
  }
  
  console.log("🔥 서버에 캐릭터 선택 전송:", characterId);
  socket.emit("selectCharacter", { character: characterId });
}

// === 서버 이벤트 리스너들 ===

// 룸 참가 성공
socket.on("joinedRoom", (data) => {
  console.log("🎮 룸 참가 성공:", data);
  
  multiplayerState.inRoom = true;
  multiplayerState.roomId = data.roomId;
  multiplayerState.playerPosition = data.position;
  
  // 대기실 UI 표시
  showMultiplayerWaitingRoom(data);
});

// 룸 참가 실패
socket.on("joinFailed", (data) => {
  console.error("❌ 룸 참가 실패:", data.reason);
  showAlert(`게임 참가에 실패했습니다: ${data.reason}`);
});

// 룸 상태 업데이트
socket.on("roomUpdate", (data) => {
  console.log("📊 룸 상태 업데이트:", data);
  console.log(`현재 룸에 있는 플레이어 수: ${data.players.length}`);
  console.log("플레이어 정보:", data.players);
  
  multiplayerState.players = data.players;
  updateMultiplayerUI(data);
  
  // 캐릭터 선택 화면에 있을 때 상대방 캐릭터 업데이트
  if (multiplayerState.gamePhase === 'character-selection' && gameState.isMultiplayer) {
    updateOpponentCharacterDisplay(data.players);
  }
});

// 게임 페이즈 변경
socket.on("gamePhaseChange", (data) => {
  console.log("🔄 게임 페이즈 변경:", data);
  
  multiplayerState.gamePhase = data.phase;
  
  if (data.phase === 'character-selection') {
    // 알림을 먼저 띄우고, 확인 버튼 누르면 캐릭터 선택 화면으로 전환
    if (data.message) {
      showAlert(data.message, () => {
        // 확인 버튼 클릭 시 콜백 실행
        startMultiplayerCharacterSelection();
      });
      
      // 알림 모달의 z-index를 더 높게 설정
      setTimeout(() => {
        const alertModal = document.getElementById('alert-modal');
        if (alertModal) {
          alertModal.style.zIndex = '200'; // 대기실 모달(150)보다 높게
        }
      }, 100);
      
    } else {
      // 메시지가 없으면 바로 전환
      startMultiplayerCharacterSelection();
    }
  } else if (data.message) {
    // 다른 페이즈에서는 일반 알림만 표시
    showAlert(data.message);
  }
});

// 캐릭터 선택 실패
socket.on("characterSelectFailed", (data) => {
  console.error("❌ 캐릭터 선택 실패:", data.reason);
  showAlert(data.reason);
});

// 게임 시작
socket.on("gameStart", (data) => {
  console.log("🚀 멀티플레이어 게임 시작:", data);
  console.log("게임 시작 시 플레이어 수:", data.players ? data.players.length : "undefined");
  console.log("게임 시작 시 플레이어 목록:", data.players);
  
  multiplayerState.gamePhase = 'playing';
  
  // 게임 화면으로 전환하고 멀티플레이어 게임 시작
  startMultiplayerGame(data);
});

// 플레이어 이탈
socket.on("playerLeft", (data) => {
  console.log("👋 플레이어 이탈:", data);
  showAlert("상대방이 게임을 떠났습니다.");
  
  // 필요시 메인 메뉴로 복귀
  if (multiplayerState.gamePhase !== 'menu') {
    showMainMenu();
    resetMultiplayerState();
  }
});

// === 유틸리티 함수들 ===

function resetMultiplayerState() {
  multiplayerState.inRoom = false;
  multiplayerState.roomId = null;
  multiplayerState.playerPosition = null;
  multiplayerState.players = [];
  multiplayerState.gamePhase = 'menu';
}

function showMultiplayerWaitingRoom(data) {
  console.log("🏠 대기실 UI 표시 시도:", data);
  
  // 대기실 모달 표시
  const waitingModal = document.getElementById('multiplayer-waiting-modal');
  console.log("대기실 모달 요소:", waitingModal);
  
  if (waitingModal) {
    waitingModal.classList.remove('hidden');
    waitingModal.classList.add('visible'); // CSS에서 .modal.visible 스타일 사용
    waitingModal.style.zIndex = '150'; // 기본 모달(100)보다 높게 설정
    console.log("대기실 모달 visible 클래스 추가됨, z-index 150으로 설정");
    console.log("현재 모달 클래스:", waitingModal.className);
    
    const roomIdDisplay = document.getElementById('waiting-room-id');
    const playersDisplay = document.getElementById('waiting-players-list');
    
    console.log("룸 ID 표시 요소:", roomIdDisplay);
    console.log("플레이어 목록 요소:", playersDisplay);
    
    if (roomIdDisplay) roomIdDisplay.textContent = `룸 ID: ${data.roomId}`;
    if (playersDisplay) {
      playersDisplay.innerHTML = `
        <li>플레이어 ${data.position} (나): 대기 중...</li>
        ${data.playersCount === 2 ? '<li>플레이어 ' + (data.position === 'A' ? 'B' : 'A') + ': 대기 중...</li>' : '<li>상대방을 기다리는 중...</li>'}
      `;
    }
  } else {
    console.error("❌ 대기실 모달을 찾을 수 없음!");
  }
}

function updateMultiplayerUI(data) {
  const playersDisplay = document.getElementById('waiting-players-list');
  if (playersDisplay) {
    playersDisplay.innerHTML = data.players.map(player => 
      `<li>플레이어 ${player.position} ${player.position === multiplayerState.playerPosition ? '(나)' : ''}: ${
        player.ready ? (player.character ? `준비완료 (${player.character})` : '준비완료') : '대기 중...'
      }</li>`
    ).join('');
  }
}

function startMultiplayerCharacterSelection() {
  console.log("🎭 멀티플레이어 캐릭터 선택 시작");
  console.log("내 포지션:", multiplayerState.playerPosition);
  
  // 대기실 숨기기
  hideMultiplayerWaitingRoom();
  
  // 멀티플레이어 상태 완전 초기화
  multiplayerState.selectedCharacter = null;
  multiplayerState.gamePhase = 'character-selection';
  
  // 플레이어 데이터 초기화 (서버 동기화를 위해)
  multiplayerState.players = multiplayerState.players.map(player => ({
    ...player,
    character: null,
    ready: false
  }));
  
  // 게임 상태 초기화
  gameState.gameMode = "MULTIPLAYER";
  gameState.isMultiplayer = true;
  gameState.playerA = { character: null };
  gameState.playerB = { character: null };
  gameState.playerA_Data = null;
  gameState.playerB_Data = null;
  
  // 이전 캐릭터 선택 상태 초기화
  document.getElementById("p1-ready-overlay").classList.remove("visible");
  document.getElementById("p2-ready-overlay").classList.remove("visible");
  
  // 플레이어 디스플레이 초기화
  updatePlayerDisplay("p1", null);
  updatePlayerDisplay("p2", null);
  
  // 캐릭터 선택 화면 직접 표시 (기존 시스템 사용하지 않음)
  document.getElementById("character-selection-screen").classList.remove("hidden");
  
  // 멀티플레이어 전용 UI 설정
  setupMultiplayerCharacterSelectionUI();
}

function setupMultiplayerCharacterSelectionUI() {
  console.log("멀티플레이어 캐릭터 선택 UI 설정");
  
  // 먼저 캐릭터 그리드 생성
  generateMultiplayerCharacterGrid();
  
  // 플레이어 표시 영역 설정
  const p1Display = document.getElementById("p1-display");
  const p2Display = document.getElementById("p2-display");
  
  // 내 포지션에 따라 표시 설정
  if (multiplayerState.playerPosition === 'A') {
    // 나는 P1, 상대는 P2
    document.getElementById("p1-philosopher-name").textContent = "나";
    document.getElementById("p2-philosopher-name").textContent = "상대방";
    p1Display.classList.add("my-selection");
    p2Display.classList.add("opponent-selection");
  } else {
    // 나는 P2, 상대는 P1  
    document.getElementById("p1-philosopher-name").textContent = "상대방";
    document.getElementById("p2-philosopher-name").textContent = "나";
    p1Display.classList.add("opponent-selection");
    p2Display.classList.add("my-selection");
  }
  
  // 확인 버튼 완전 초기화
  let confirmBtn = document.getElementById("confirm-selection-btn");
  
  // 기존 이벤트 리스너 제거
  if (confirmBtn.hasMultiplayerListener) {
    confirmBtn.replaceWith(confirmBtn.cloneNode(true)); // 이벤트 리스너 완전 제거
    confirmBtn = document.getElementById("confirm-selection-btn"); // 새로운 참조 가져오기
  }
  
  confirmBtn.disabled = true;
  confirmBtn.textContent = "캐릭터를 선택하세요";
  confirmBtn.hasMultiplayerListener = false;
  
  // 상대방 캐릭터는 처음에는 숨김
  hideOpponentCharacterSelection();
  
  // 캐릭터 그리드 이벤트 설정 (그리드 생성 후 실행)
  setTimeout(() => {
    setupMultiplayerCharacterGrid();
  }, 100);
}

function generateMultiplayerCharacterGrid() {
  console.log("멀티플레이어용 캐릭터 그리드 생성");
  
  const grid = document.getElementById("shared-char-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  // PHILOSOPHERS 객체에서 캐릭터 아이콘 생성 (기존 시스템과 동일하게)
  if (typeof PHILOSOPHERS !== 'undefined') {
    for (const key in PHILOSOPHERS) {
      if (key === "derrida") {
        continue; // derrida는 제외
      }
      
      const philosopher = PHILOSOPHERS[key];
      const iconEl = document.createElement("div");
      iconEl.className = "char-icon";
      iconEl.dataset.id = key;
      iconEl.style.backgroundImage = `url('${philosopher.icon}')`; // 기존 시스템과 동일
      iconEl.onclick = () => handleMultiplayerCharacterSelect(key, iconEl);
      grid.appendChild(iconEl);
    }
    
    // 랜덤 버튼 추가 (기존 시스템과 동일)
    const randomIconEl = document.createElement("div");
    randomIconEl.className = "char-icon";
    randomIconEl.id = "random-char-btn";
    randomIconEl.onclick = () => {
      // derrida를 제외한 철학자 ID 목록 생성
      const allCharIds = Object.keys(PHILOSOPHERS).filter(id => id !== "derrida");
      const randomId = allCharIds[Math.floor(Math.random() * allCharIds.length)];
      handleMultiplayerCharacterSelect(randomId, randomIconEl);
    };
    grid.appendChild(randomIconEl);
    
    // 모든 캐릭터 아이콘의 선택 상태 초기화
    document.querySelectorAll(".char-icon").forEach((icon) => {
      icon.classList.remove("selected");
    });
    
    console.log("캐릭터 그리드 생성 완료, 아이콘 수:", grid.children.length);
  } else {
    console.error("PHILOSOPHERS 객체를 찾을 수 없음");
  }
}

function setupMultiplayerCharacterGrid() {
  const charGrid = document.getElementById("shared-char-grid");
  console.log("캐릭터 그리드 요소:", charGrid);
  
  if (!charGrid) {
    console.error("shared-char-grid를 찾을 수 없음");
    return;
  }
  
  // 기존 캐릭터 선택 시스템의 그리드 초기화 함수 호출
  if (typeof initializeCharacterGrid === 'function') {
    console.log("기존 캐릭터 그리드 초기화 함수 호출");
    initializeCharacterGrid();
  }
  
  // 모든 캐릭터 아이콘의 선택 상태 초기화
  document.querySelectorAll(".char-icon").forEach((icon) => {
    icon.classList.remove("selected");
  });
  
  // 캐릭터 아이콘들 확인 (기존 시스템과 동일한 선택자 사용)
  const characterButtons = charGrid.querySelectorAll('.char-icon');
  console.log("찾은 캐릭터 아이콘들:", characterButtons.length);
  
  if (characterButtons.length === 0) {
    console.warn("캐릭터 아이콘이 없음");
    return;
  }
  
  // 캐릭터 아이콘에 새로운 이벤트 리스너 추가 (기존 onclick 덮어쓰기)
  characterButtons.forEach((button) => {
    const characterId = button.dataset.id;
    if (characterId) {
      // 기존 onclick을 새로운 핸들러로 덮어쓰기
      button.onclick = () => handleMultiplayerCharacterSelect(characterId, button);
    }
  });
  
  console.log("캐릭터 아이콘 이벤트 리스너 설정 완료");
}

function handleMultiplayerCharacterSelect(characterId, buttonElement) {
  console.log("캐릭터 선택됨:", characterId);
  
  // 모든 캐릭터 아이콘의 선택 상태 초기화 (기존 시스템과 동일)
  document.querySelectorAll(".char-icon").forEach((icon) => {
    icon.classList.remove("selected");
  });
  
  // 선택된 캐릭터 표시 (기존 시스템과 동일)
  document.querySelectorAll(".char-icon").forEach((icon) => {
    icon.classList.toggle("selected", icon.dataset.id === characterId);
  });
  
  // 내 포지션에 캐릭터 표시
  updateMyCharacterDisplay(characterId);
  
  // 확인 버튼 활성화
  const confirmBtn = document.getElementById("confirm-selection-btn");
  confirmBtn.disabled = false;
  confirmBtn.textContent = "선택 확인";
  
  // 선택된 캐릭터 ID 저장
  multiplayerState.selectedCharacter = characterId;
  
  // 확인 버튼 클릭 이벤트 (한 번만 설정)
  if (!confirmBtn.hasMultiplayerListener) {
    confirmBtn.addEventListener('click', () => {
      if (!confirmBtn.disabled && multiplayerState.selectedCharacter) {
        selectMultiplayerCharacter(multiplayerState.selectedCharacter);
        
        // 내 선택 완료 상태 표시
        showMyReadyStatus();
        
        confirmBtn.disabled = true;
        confirmBtn.textContent = "상대방을 기다리는 중...";
      }
    });
    confirmBtn.hasMultiplayerListener = true;
  }
}

function updateMyCharacterDisplay(characterId) {
  const myPositionDisplay = multiplayerState.playerPosition === 'A' ? 'p1' : 'p2';
  
  // 내 캐릭터 정보 업데이트 (기존 함수 활용)
  if (typeof updatePlayerDisplay === 'function') {
    updatePlayerDisplay(myPositionDisplay, characterId);
  }
}

function showMyReadyStatus() {
  // 내 선택 완료 상태 표시
  const myPositionDisplay = multiplayerState.playerPosition === 'A' ? 'p1' : 'p2';
  const readyOverlay = document.getElementById(`${myPositionDisplay}-ready-overlay`);
  
  if (readyOverlay) {
    readyOverlay.textContent = "READY";
    readyOverlay.classList.add('visible');
  }
}

function hideOpponentCharacterSelection() {
  const opponentDisplay = multiplayerState.playerPosition === 'A' ? 
    document.getElementById('p2-display') : 
    document.getElementById('p1-display');
    
  if (opponentDisplay) {
    // 상대방 캐릭터 정보를 숨김
    const portrait = opponentDisplay.querySelector('.portrait-area');
    const skill = opponentDisplay.querySelector('.skill-area');
    
    if (portrait) portrait.style.opacity = '0.3';
    if (skill) skill.innerHTML = '<p>상대방이 선택 중...</p>';
  }
}

function updateOpponentCharacterDisplay(players) {
  // 내 정보와 상대방 정보 찾기
  const myInfo = players.find(p => p.position === multiplayerState.playerPosition);
  const opponent = players.find(p => p.position !== multiplayerState.playerPosition);
  
  console.log("플레이어 정보 업데이트:", { myInfo, opponent });
  
  if (opponent && opponent.character) {
    console.log("상대방 캐릭터 표시:", opponent.character);
    
    // 상대방 포지션에 맞는 UI 요소 찾기 (올바른 매핑)
    const opponentUIPosition = opponent.position === 'A' ? 'p1' : 'p2';
    const opponentDisplay = document.getElementById(`${opponentUIPosition}-display`);
    
    if (opponentDisplay) {
      // 상대방 캐릭터 정보 표시
      if (typeof updatePlayerDisplay === 'function') {
        updatePlayerDisplay(opponentUIPosition, opponent.character);
      }
      
      // 투명도 복원
      const portrait = opponentDisplay.querySelector('.portrait-area');
      if (portrait) portrait.style.opacity = '1';
      
      // Ready 상태 표시
      if (opponent.ready) {
        const readyOverlay = document.getElementById(`${opponentUIPosition}-ready-overlay`);
        if (readyOverlay) {
          readyOverlay.classList.add('visible');
        }
      }
    }
  }
  
  // 내가 이미 선택했고 상대방도 선택했는지 확인
  if (myInfo && myInfo.ready && opponent && opponent.ready) {
    console.log("✅ 두 플레이어 모두 캐릭터 선택 완료");
    
    // 확인 버튼 상태 업데이트
    const confirmBtn = document.getElementById("confirm-selection-btn");
    if (confirmBtn) {
      confirmBtn.textContent = "게임 시작 준비 중...";
      confirmBtn.disabled = true;
    }
  } else if (myInfo && myInfo.ready) {
    console.log("⏳ 내가 선택 완료, 상대방 대기 중");
    
    // 확인 버튼 상태 업데이트
    const confirmBtn = document.getElementById("confirm-selection-btn");
    if (confirmBtn) {
      confirmBtn.textContent = "상대방을 기다리는 중...";
      confirmBtn.disabled = true;
    }
  }
}

function hideMultiplayerWaitingRoom() {
  const waitingModal = document.getElementById('multiplayer-waiting-modal');
  if (waitingModal) {
    waitingModal.classList.remove('visible');
    waitingModal.classList.add('hidden');
  }
}

function startMultiplayerGame(data) {
  console.log("🎯 멀티플레이어 게임 시작 요청:", data);
  
  // 게임 상태 설정
  gameState.gameMode = "MULTIPLAYER";
  gameState.isMultiplayer = true;
  gameState.multiplayerData = data;
  
  // 플레이어 정보 설정 (서버에서 온 정보 사용)
  const myPlayer = data.players.find(p => p.position === multiplayerState.playerPosition);
  const otherPlayer = data.players.find(p => p.position !== multiplayerState.playerPosition);
  
  console.log("플레이어 설정:", { myPlayer, otherPlayer });
  
  // gameState에 캐릭터 정보 설정 (포지션 기준으로 올바르게 매핑)
  const playerA = data.players.find(p => p.position === 'A');
  const playerB = data.players.find(p => p.position === 'B');
  
  console.log("멀티플레이어 게임 데이터 설정:", { playerA, playerB });
  
  // 멀티플레이어용 선택 객체 생성 (기존 resetGame과 동일한 형식)
  const multiplayerSelections = {
    p1: playerA.character,
    p2: playerB.character
  };
  
  console.log("멀티플레이어 선택 데이터:", multiplayerSelections);
  
  // 게임 화면으로 전환
  document.getElementById("character-selection-screen").classList.add("hidden");
  
  // resetGame을 호출하여 정상적으로 게임 초기화
  resetGame(multiplayerSelections);
  updateMainMenuBtnVisibility();
  updateMainCenterVisibility();
  
  console.log("🎯 멀티플레이어 게임 시작 완료", {
    myPosition: multiplayerState.playerPosition,
    currentPlayer: gameState.currentPlayer,
    playerA: gameState.playerA.character,
    playerB: gameState.playerB.character
  });
}

// 기존 테스트 코드 (호환성 유지)
socket.on("serverMessage", (data) => {
  console.log("💻 서버로부터 받은 메시지:", data);
});

// 서버와 연결이 끊어졌을 때
socket.on("disconnect", () => {
  console.log("❌ 서버와 연결이 끊어졌습니다.");
  
  if (multiplayerState.inRoom) {
    showAlert("서버와의 연결이 끊어졌습니다.");
    showMainMenu();
    resetMultiplayerState();
  }
});

// 대기실 나가기 기능
function leaveWaitingRoom() {
  if (multiplayerState.inRoom) {
    socket.emit("leaveRoom");
    resetMultiplayerState();
    hideMultiplayerWaitingRoom();
    showMainMenu();
  }
}

// 전역 접근을 위한 내보내기
window.multiplayerClient = {
  joinGame: joinMultiplayerGame,
  selectCharacter: selectMultiplayerCharacter,
  leaveRoom: leaveWaitingRoom,
  getState: () => multiplayerState,
  resetState: resetMultiplayerState
};

// 대기실 나가기 버튼 이벤트 리스너 설정
document.addEventListener("DOMContentLoaded", () => {
  const leaveRoomBtn = document.getElementById("leave-waiting-room-btn");
  if (leaveRoomBtn) {
    leaveRoomBtn.addEventListener("click", leaveWaitingRoom);
  }
});
