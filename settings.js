function saveSettings() {
  const settings = {
    bgmVolume: bgmVolume,
    sfxVolume: sfxVolume,
  };
  localStorage.setItem("logos_settings", JSON.stringify(settings));
}

function loadSettings() {
  const savedSettings = localStorage.getItem("logos_settings");
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    bgmVolume = settings.bgmVolume !== undefined ? settings.bgmVolume : 0.4;
    sfxVolume = settings.sfxVolume !== undefined ? settings.sfxVolume : 0.6;
  }

  // 로드된 값으로 오디오 및 UI 업데이트
  audioManager.setVolume(bgmVolume);
  audioManager.setSfxVolume(sfxVolume);

  const bgmSlider = document.getElementById("bgm-volume-slider");
  const bgmValueSpan = document.getElementById("bgm-volume-value");
  const sfxSlider = document.getElementById("sfx-volume-slider");
  const sfxValueSpan = document.getElementById("sfx-volume-value");

  if (bgmSlider) {
    bgmSlider.value = bgmVolume;
    bgmValueSpan.textContent = `${Math.round(bgmVolume * 100)}%`;
  }
  if (sfxSlider) {
    sfxSlider.value = sfxVolume;
    sfxValueSpan.textContent = `${Math.round(sfxVolume * 100)}%`;
  }
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
