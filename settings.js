function saveSettings() {
  // gameState에서 저장하고 싶은 설정만 골라 새로운 객체를 만듭니다.
  const settingsToSave = {
    bgmVolume: gameState.bgmVolume,
    sfxVolume: gameState.sfxVolume,
    language: gameState.currentLang ? gameState.currentLang.langCode : "ko",
  };
  localStorage.setItem("logos_settings", JSON.stringify(settingsToSave));
}

function loadSettings() {
  const savedSettings = localStorage.getItem("logos_settings");
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    // 불러온 설정 값으로 gameState의 해당 속성을 덮어씁니다.
    gameState.bgmVolume =
      settings.bgmVolume !== undefined ? settings.bgmVolume : 0.4;
    gameState.sfxVolume =
      settings.sfxVolume !== undefined ? settings.sfxVolume : 0.6;
    // 언어 설정은 getPreferredLanguage 함수에서 처리하므로 여기서는 직접 바꾸지 않습니다.
  }

  // gameState에 저장된 볼륨 값으로 오디오 및 UI를 업데이트합니다.
  audioManager.setVolume(gameState.bgmVolume);
  audioManager.setSfxVolume(gameState.sfxVolume);

  const bgmSlider = document.getElementById("bgm-volume-slider");
  const bgmValueSpan = document.getElementById("bgm-volume-value");
  const sfxSlider = document.getElementById("sfx-volume-slider");
  const sfxValueSpan = document.getElementById("sfx-volume-value");
  const languageSelect = document.getElementById("language-select");

  if (bgmSlider) {
    bgmSlider.value = gameState.bgmVolume;
    bgmValueSpan.textContent = `${Math.round(gameState.bgmVolume * 100)}%`;
  }
  if (sfxSlider) {
    sfxSlider.value = gameState.sfxVolume;
    sfxValueSpan.textContent = `${Math.round(gameState.sfxVolume * 100)}%`;
  }
  if (languageSelect && gameState.currentLang) {
    languageSelect.value = gameState.currentLang.langCode;
  }

  // 초기 언어 선택 상태 업데이트
  updateLanguageSelectState();
}

function getPreferredLanguage() {
  const savedSettings = localStorage.getItem("logos_settings");
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    if (settings.language && ["ko", "en"].includes(settings.language)) {
      return settings.language;
    }
  }
  return detectBrowserLanguage();
}

function changeLanguage(newLang) {
  if (!["ko", "en"].includes(newLang)) return;

  // 언어 변경 시 gameState.currentLang을 업데이트합니다.
  gameState.currentLang = TEXTS[newLang];
  document.documentElement.lang = gameState.currentLang.langCode;
  document.title = gameState.currentLang.ui.title;

  // 카드 덱 정보도 gameState에 저장합니다.
  gameState.fullDeck = gameState.currentLang.cards;
  gameState.cardTypeOrder = gameState.currentLang.cardTypes;

  // UI 텍스트 업데이트
  setupUI();

  // 설정 저장
  saveSettings();

  // 효과음 재생
  audioManager.playSfx("hover");
}
const settingsBtn = document.getElementById("settings-btn");
const settingsModal = document.getElementById("settings-modal");
const closeSettingsBtn = document.getElementById("close-settings-modal-btn");

if (settingsBtn) {
  settingsBtn.addEventListener("click", () => {
    if (settingsModal) settingsModal.classList.add("visible");
  });
}
if (closeSettingsBtn) {
  closeSettingsBtn.addEventListener("click", () => {
    if (settingsModal) settingsModal.classList.remove("visible");
  });
}

const creditsBtn = document.getElementById("credits-btn");
const creditsModal = document.getElementById("credits-modal");
const closeCreditsBtn = document.getElementById("close-credits-modal-btn");

if (creditsBtn) {
  creditsBtn.addEventListener("click", () => {
    if (creditsModal) creditsModal.classList.add("visible");
  });
}
if (closeCreditsBtn) {
  closeCreditsBtn.addEventListener("click", () => {
    if (creditsModal) creditsModal.classList.remove("visible");
  });
}

// --- 볼륨 슬라이더 이벤트 리스너 ---
const bgmSlider = document.getElementById("bgm-volume-slider");
const bgmValueSpan = document.getElementById("bgm-volume-value");
const sfxSlider = document.getElementById("sfx-volume-slider");
const sfxValueSpan = document.getElementById("sfx-volume-value");
const languageSelect = document.getElementById("language-select");

if (bgmSlider) {
  bgmSlider.addEventListener("input", (e) => {
    bgmVolume = parseFloat(e.target.value);
    audioManager.setVolume(bgmVolume);
    bgmValueSpan.textContent = `${Math.round(bgmVolume * 100)}%`;
    saveSettings();
  });
}

if (sfxSlider) {
  sfxSlider.addEventListener("input", (e) => {
    sfxVolume = parseFloat(e.target.value);
    audioManager.setSfxVolume(sfxVolume); // 새로운 함수 호출
    sfxValueSpan.textContent = `${Math.round(sfxVolume * 100)}%`;
  });

  sfxSlider.addEventListener("change", () => {
    audioManager.playSfx("hover"); // 새로운 함수 호출
    saveSettings();
  });
}

// --- 언어 선택 제어 함수 ---
function updateLanguageSelectState() {
  const languageSelect = document.getElementById("language-select");
  if (!languageSelect) return;

  const isMainMenuVisible = !document
    .querySelector(".main-center-bg")
    ?.classList.contains("hidden");
  languageSelect.disabled = !isMainMenuVisible;
}

// --- 언어 선택 이벤트 리스너 ---
if (languageSelect) {
  languageSelect.addEventListener("change", (e) => {
    const newLang = e.target.value;
    changeLanguage(newLang);
  });
}
