const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// 모든 오디오 트랙을 관리하는 중앙 관리자
const audioManager = {
  tracks: {
    bgm: {
      // 1. BGM을 위한 하위 객체로 묶습니다.
      "main-menu": {
        url: "assets/sounds/main_theme.flac",
        loopStart: 0.0,
        loopEnd: 0.0,
      },
      "character-select": {
        url: "assets/sounds/char_select_theme.flac",
        loopStart: 0.333,
        loopEnd: 32.333,
      },
      "game-play": {
        url: "assets/sounds/game_music.wav",
        loopStart: 0.0,
        loopEnd: 61.091,
      },
      "thinking-time": {
        url: "assets/sounds/thinking_music.wav",
        loopStart: 0.0,
        loopEnd: 0.0,
      },
      "puzzle-theme": {
        url: "assets/sounds/puzzle.wav",
        loopStart: 0.0,
        loopEnd: 0.0,
      },
    },
    sfx: {
      // 2. SFX를 위한 하위 객체를 새로 추가합니다.
      hover: "assets/sounds/hover.ogg",
      playCard: "assets/sounds/play_card.flac",
      complete: "assets/sounds/complete.ogg",
      pop: "assets/sounds/pop.ogg",
      undo: "assets/sounds/undo.flac",
      end: "assets/sounds/end.wav",
      eureka: "assets/sounds/eureka.wav",
      victory: "assets/sounds/victory.wav",
    },
  },
  buffers: {},
  sourceNodes: {},
  gainNodes: {},
  sfxGainNode: null, // 3. SFX 전용 볼륨 조절 노드를 추가합니다.

  async init() {
    // BGM용 Gain Node 생성
    for (const key in this.tracks.bgm) {
      const gainNode = audioContext.createGain();
      gainNode.connect(audioContext.destination);
      this.gainNodes[key] = gainNode;
    }
    // SFX용 Gain Node 생성
    this.sfxGainNode = audioContext.createGain();
    this.sfxGainNode.connect(audioContext.destination);

    // 모든 BGM과 SFX 로드
    const loadPromises = [];
    for (const key in this.tracks.bgm) {
      loadPromises.push(this._loadTrack(key, this.tracks.bgm[key].url));
    }
    for (const key in this.tracks.sfx) {
      loadPromises.push(this._loadTrack(key, this.tracks.sfx[key]));
    }
    await Promise.all(loadPromises); // 모든 로딩이 끝날 때까지 기다림
    console.log("모든 오디오 트랙이 준비되었습니다.");
  },
  async _loadTrack(key, url) {
    // key 인자 추가
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      this.buffers[key] = await audioContext.decodeAudioData(arrayBuffer); // key를 사용해 버퍼에 저장
    } catch (error) {
      console.error(`오디오 로드 실패: ${url}`, error);
    }
  },

  play(key, volume = 0.5) {
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    this.stop(key); // 기존에 재생중인 같은 트랙이 있으면 중지

    const buffer = this.buffers[key];
    if (!buffer) return;

    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    const trackData = this.tracks.bgm[key];
    source.loopStart = trackData.loopStart || 0.0;

    // loopEnd 값이 유효하게 설정되어 있으면 그 값을 사용하고, 아니면 파일 전체 길이를 사용합니다.
    if (trackData.loopEnd && trackData.loopEnd > 0) {
      source.loopEnd = trackData.loopEnd;
    } else {
      source.loopEnd = buffer.duration; // buffer.duration이 파일의 전체 길이입니다.
    }

    const gainNode = this.gainNodes[key];
    source.connect(gainNode);

    // 페이드 인 효과
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      bgmVolume, // 기존: volume
      audioContext.currentTime + 1.5
    );

    source.start(0);
    this.sourceNodes[key] = source;
  },

  fadeOut(key, duration = 1.5) {
    const gainNode = this.gainNodes[key];
    const sourceNode = this.sourceNodes[key];

    // gainNode와 현재 재생 중인 sourceNode가 모두 있을 때만 실행
    if (gainNode && sourceNode) {
      gainNode.gain.linearRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
      );

      // 볼륨이 모두 줄어드는 시간(duration)이 지난 후에 stop 함수를 호출합니다.
      setTimeout(() => {
        this.stop(key);
      }, duration * 1000); // duration은 초(sec) 단위이므로 1000을 곱해 ms로 변환
    }
  },

  setVolume(volume) {
    // gainNodes 객체에 있는 모든 게인 노드를 순회
    for (const key in this.gainNodes) {
      const gainNode = this.gainNodes[key];
      if (gainNode) {
        // linearRampToValueAtTime을 사용해 부드럽게 볼륨을 변경
        gainNode.gain.linearRampToValueAtTime(
          volume,
          audioContext.currentTime + 0.1
        );
      }
    }
  },

  stop(key) {
    const source = this.sourceNodes[key];
    if (source) {
      try {
        source.stop(0);
      } catch (e) {}
      delete this.sourceNodes[key];
    }
  },

  stopAll() {
    for (const key in this.sourceNodes) {
      this.stop(key);
    }
  },
  /**
   * 미리 로드된 효과음을 재생합니다. (Non-looping)
   * @param {string} key - 재생할 효과음의 키 (예: "hover", "playCard")
   */
  playSfx(key) {
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const buffer = this.buffers[key];
    if (!buffer || !this.sfxGainNode) return;

    // 효과음은 재생할 때마다 새로운 소스 노드를 생성해야 합니다.
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(this.sfxGainNode);
    source.start(0);
  },

  /**
   * 효과음 전체 볼륨을 조절합니다.
   * @param {number} volume - 0.0 ~ 1.0 사이의 볼륨 값
   */
  setSfxVolume(volume) {
    if (this.sfxGainNode) {
      this.sfxGainNode.gain.linearRampToValueAtTime(
        volume,
        audioContext.currentTime + 0.1
      );
    }
  },
};

// 게임 시작 전 오디오를 미리 로드하고, 로딩이 끝날 때까지 기다립니다.
(async () => {
  try {
    await audioManager.init();
    // 오디오 로딩이 성공적으로 완료된 후, 언어 선택 버튼을 활성화하거나
    // 다음 로직을 진행할 수 있습니다. 여기서는 특별한 추가 동작은 필요 없습니다.
    console.log("Audio assets successfully preloaded.");
  } catch (error) {
    console.error("Failed to preload audio assets:", error);
    // 오디오 로딩 실패 시 사용자에게 알림을 띄우는 등의 예외 처리를 할 수 있습니다.
  }
})();
