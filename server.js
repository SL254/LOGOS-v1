const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 현재 폴더의 모든 파일을 클라이언트가 접근할 수 있도록 설정합니다.
app.use(express.static(__dirname));

// 게임 룸 관리
const gameRooms = new Map();
const waitingPlayers = [];

// 게임 룸 클래스
class GameRoom {
  constructor(id) {
    this.id = id;
    this.players = [];
    this.gameState = {
      phase: 'waiting', // waiting, character-selection, playing, finished
      currentPlayer: null,
      round: 1
    };
    this.createdAt = Date.now();
  }

  addPlayer(socket, playerName) {
    if (this.players.length >= 2) return false;
    
    const player = {
      id: socket.id,
      socket: socket,
      name: playerName,
      position: this.players.length === 0 ? 'A' : 'B',
      character: null,
      ready: false
    };
    
    this.players.push(player);
    socket.join(this.id);
    
    // 새 플레이어가 들어오면 게임 상태 초기화 (기존 선택 정보 리셋)
    this.resetGameState();
    
    console.log(`플레이어 ${playerName} (${socket.id})이 룸 ${this.id}에 참가`);
    return true;
  }

  removePlayer(socketId) {
    const playerIndex = this.players.findIndex(p => p.id === socketId);
    if (playerIndex === -1) return false;
    
    const player = this.players[playerIndex];
    this.players.splice(playerIndex, 1);
    
    // 플레이어가 나가면 게임 상태를 초기화
    this.resetGameState();
    
    console.log(`플레이어 ${player.name} (${socketId})이 룸 ${this.id}에서 나감`);
    return true;
  }
  
  resetGameState() {
    // 남은 플레이어들의 캐릭터 선택과 ready 상태 초기화
    this.players.forEach(player => {
      player.character = null;
      player.ready = false;
    });
    
    // 게임 상태 초기화
    this.gameState.phase = this.players.length < 2 ? 'waiting' : 'character-selection';
    this.gameState.currentPlayer = null;
    this.gameState.round = 1;
    
    console.log(`룸 ${this.id} 게임 상태 초기화됨`);
  }

  isFull() {
    return this.players.length >= 2;
  }

  isEmpty() {
    return this.players.length === 0;
  }

  getPlayerBySocketId(socketId) {
    return this.players.find(p => p.id === socketId);
  }

  broadcast(event, data) {
    this.players.forEach(player => {
      player.socket.emit(event, data);
    });
  }
}

// 유틸리티 함수들
function generateRoomId() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function findOrCreateRoom() {
  // 대기 중인 룸이 있는지 확인
  for (const room of gameRooms.values()) {
    if (!room.isFull() && room.gameState.phase === 'waiting') {
      return room;
    }
  }
  
  // 새 룸 생성
  const roomId = generateRoomId();
  const room = new GameRoom(roomId);
  gameRooms.set(roomId, room);
  return room;
}

// 클라이언트가 접속했을 때 실행될 코드
io.on("connection", (socket) => {
  console.log("✅ 새로운 클라이언트 접속:", socket.id);

  // 멀티플레이어 게임 참가 요청
  socket.on("joinMultiplayerGame", (data) => {
    console.log(`🎮 플레이어 ${socket.id}가 멀티플레이어 게임 참가 요청:`, data);
    const { playerName } = data;
    
    // 룸 찾기 또는 생성
    const room = findOrCreateRoom();
    console.log(`📍 룸 ${room.id} 배정됨 (현재 플레이어 수: ${room.players.length})`);
    
    if (room.addPlayer(socket, playerName || `Player${socket.id.substring(0, 4)}`)) {
      // 플레이어를 룸에 추가 성공
      socket.emit("joinedRoom", {
        roomId: room.id,
        position: room.players[room.players.length - 1].position,
        playersCount: room.players.length
      });
      
      // 룸의 모든 플레이어에게 업데이트 알림
      room.broadcast("roomUpdate", {
        roomId: room.id,
        players: room.players.map(p => ({
          name: p.name,
          position: p.position,
          ready: p.ready,
          character: p.character
        })),
        gameState: room.gameState
      });
      
      // 룸이 가득 찬 경우 게임 시작 준비
      if (room.isFull()) {
        room.gameState.phase = 'character-selection';
        room.broadcast("gamePhaseChange", {
          phase: 'character-selection',
          message: "모든 플레이어가 참가했습니다. 캐릭터를 선택해주세요."
        });
      }
    } else {
      socket.emit("joinFailed", { reason: "룸이 가득참" });
    }
  });

  // 캐릭터 선택 (아직 확정 아님)
  socket.on("selectCharacter", (data) => {
    const { character } = data;
    const room = [...gameRooms.values()].find(r => r.getPlayerBySocketId(socket.id));
    
    if (room) {
      const player = room.getPlayerBySocketId(socket.id);
      if (player) {
        // 다른 플레이어가 같은 캐릭터를 선택했는지 확인
        const otherPlayer = room.players.find(p => p.id !== socket.id);
        if (otherPlayer && otherPlayer.character === character) {
          socket.emit("characterSelectFailed", { 
            reason: "이미 선택된 캐릭터입니다." 
          });
          return;
        }
        
        player.character = character;
        player.ready = true; // 캐릭터 선택 = ready 상태
        
        console.log(`플레이어 ${player.name}이 캐릭터 ${character} 선택 완료`);
        console.log(`현재 룸 상태: 플레이어 수 ${room.players.length}, ready 플레이어:`, room.players.filter(p => p.ready).length);
        
        room.broadcast("roomUpdate", {
          roomId: room.id,
          players: room.players.map(p => ({
            name: p.name,
            position: p.position,
            ready: p.ready,
            character: p.character
          })),
          gameState: room.gameState
        });
        
        // 모든 플레이어가 준비되면 게임 시작 (2명 모두 있어야 함)
        console.log(`게임 시작 조건 체크: players.length=${room.players.length}, every ready=${room.players.every(p => p.ready)}`);
        if (room.players.length === 2 && room.players.every(p => p.ready)) {
          room.gameState.phase = 'playing';
          room.gameState.currentPlayer = Math.random() < 0.5 ? 'A' : 'B';
          
          room.broadcast("gameStart", {
            gameState: room.gameState,
            players: room.players.map(p => ({
              name: p.name,
              position: p.position,
              character: p.character
            }))
          });
        }
      }
    }
  });

  // 룸 나가기
  socket.on("leaveRoom", () => {
    for (const [roomId, room] of gameRooms.entries()) {
      if (room.removePlayer(socket.id)) {
        console.log(`플레이어 ${socket.id}가 자발적으로 룸 ${roomId}를 나감`);
        
        // 룸의 남은 플레이어들에게 알림
        if (!room.isEmpty()) {
          room.broadcast("playerLeft", {
            leftPlayerId: socket.id,
            playersCount: room.players.length
          });
          
          room.broadcast("roomUpdate", {
            roomId: room.id,
            players: room.players.map(p => ({
              name: p.name,
              position: p.position,
              ready: p.ready,
              character: p.character
            })),
            gameState: room.gameState
          });
        } else {
          // 룸이 비었으면 삭제
          gameRooms.delete(roomId);
          console.log(`빈 룸 ${roomId} 삭제됨`);
        }
        break;
      }
    }
    
    socket.emit("leftRoom", { success: true });
  });

  // 'clientMessage' 라는 이름으로 메시지가 오면 실행 (기존 테스트 코드)
  socket.on("clientMessage", (data) => {
    console.log(`'${socket.id}' 로부터 받은 메시지: ${data}`);
    socket.emit(
      "serverMessage",
      "서버가 당신의 메시지를 성공적으로 받았습니다!"
    );
  });

  // 클라이언트 접속이 끊어졌을 때 실행
  socket.on("disconnect", () => {
    console.log("❌ 클라이언트 접속 해제:", socket.id);
    
    // 플레이어가 속한 룸에서 제거
    for (const [roomId, room] of gameRooms.entries()) {
      if (room.removePlayer(socket.id)) {
        // 룸의 남은 플레이어들에게 알림
        if (!room.isEmpty()) {
          room.broadcast("playerLeft", {
            leftPlayerId: socket.id,
            playersCount: room.players.length
          });
          
          room.broadcast("roomUpdate", {
            roomId: room.id,
            players: room.players.map(p => ({
              name: p.name,
              position: p.position,
              ready: p.ready,
              character: p.character
            })),
            gameState: room.gameState
          });
        } else {
          // 룸이 비었으면 삭제
          gameRooms.delete(roomId);
          console.log(`빈 룸 ${roomId} 삭제됨`);
        }
        break;
      }
    }
  });
});

// 3000번 포트에서 서버를 실행합니다.
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
