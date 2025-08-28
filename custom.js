// Custom Entity System for LOGOS ORGANON

// Available entity options pool
const ENTITY_POOL = {
  ko: [
    // 기본 동물
    "새", "개", "물고기", "고양이", "말", "돼지", "소", "양",
    // 판타지
    "드래곤", "늑대", "인어", "유니콘", "피닉스", "그리핀", "페가수스",
    // RPG 직업
    "마법사", "전사", "도적", "궁수", "성직자", "바드", "팔라딘", "마법검사",
    // SF
    "외계인", "로봇", "사이보그", "안드로이드", "뮤턴트", "클론", "홀로그램",
    // 중세
    "기사", "농민", "상인", "왕", "공주", "마녀", "연금술사", "음유시인",
    // 현대 직업
    "의사", "선생님", "개발자", "요리사", "예술가", "과학자", "운동선수", "경찰관"
  ],
  en: [
    // Basic animals
    "bird", "dog", "fish", "cat", "horse", "pig", "cow", "sheep",
    // Fantasy
    "dragon", "wolf", "mermaid", "unicorn", "phoenix", "griffin", "pegasus",
    // RPG classes
    "mage", "warrior", "rogue", "archer", "priest", "bard", "paladin", "spellsword",
    // Sci-fi
    "alien", "robot", "cyborg", "android", "mutant", "clone", "hologram",
    // Medieval
    "knight", "peasant", "merchant", "king", "princess", "witch", "alchemist", "minstrel",
    // Modern jobs
    "doctor", "teacher", "developer", "chef", "artist", "scientist", "athlete", "officer"
  ]
};

// Original entities that need mapping
const ORIGINAL_ENTITIES = {
  ko: ["새", "개", "물고기"],
  en: ["bird", "dog", "fish"]
};

// Current custom mappings - loaded from localStorage or defaults
let customEntityMappings = { ko: {}, en: {} };

/**
 * Initialize custom entity system
 */
function initializeCustomSystem() {
  loadCustomMappings();
  setupCustomModal();
}

/**
 * Load custom mappings from localStorage
 */
function loadCustomMappings() {
  try {
    const saved = localStorage.getItem("logos_custom_entities");
    if (saved) {
      customEntityMappings = JSON.parse(saved);
    } else {
      // Initialize with defaults
      initializeDefaultMappings();
    }
  } catch (e) {
    console.error("Failed to load custom entities:", e);
    initializeDefaultMappings();
  }
}

/**
 * Initialize with default mappings
 */
function initializeDefaultMappings() {
  const originals_ko = ORIGINAL_ENTITIES.ko;
  const originals_en = ORIGINAL_ENTITIES.en;
  
  customEntityMappings.ko = {};
  customEntityMappings.en = {};
  
  originals_ko.forEach(entity => {
    customEntityMappings.ko[entity] = entity;
  });
  
  originals_en.forEach(entity => {
    customEntityMappings.en[entity] = entity;
  });
}

/**
 * Save current mappings to localStorage
 */
function saveCustomMappings() {
  try {
    localStorage.setItem("logos_custom_entities", JSON.stringify(customEntityMappings));
  } catch (e) {
    console.error("Failed to save custom entities:", e);
  }
}

/**
 * Get available options for an entity (excluding already used ones)
 */
function getAvailableOptions(originalEntity, currentLang) {
  const pool = ENTITY_POOL[currentLang] || [];
  const usedEntities = Object.values(customEntityMappings[currentLang] || {});
  const currentMapping = customEntityMappings[currentLang]?.[originalEntity];
  
  // Filter out used entities, but include current mapping for this entity
  return pool.filter(entity => 
    !usedEntities.includes(entity) || entity === currentMapping
  );
}

/**
 * Setup custom modal functionality
 */
function setupCustomModal() {
  const modal = document.getElementById("custom-modal");
  const closeBtn = document.getElementById("close-custom-modal-btn");
  const resetBtn = document.getElementById("reset-custom-btn");
  const applyBtn = document.getElementById("apply-custom-btn");

  // Close modal event
  closeBtn.addEventListener("click", () => {
    closeCustomModal();
  });

  // Reset to defaults
  resetBtn.addEventListener("click", () => {
    resetToDefaults();
  });

  // Apply changes
  applyBtn.addEventListener("click", () => {
    applyCustomChanges();
  });

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeCustomModal();
    }
  });
}

/**
 * Open custom modal
 */
function openCustomModal() {
  // Reset to defaults every time modal opens
  initializeDefaultMappings();
  
  const modal = document.getElementById("custom-modal");
  populateCustomModal();
  modal.classList.add("visible");
  audioManager.playSfx("hover");
}

/**
 * Close custom modal
 */
function closeCustomModal() {
  const modal = document.getElementById("custom-modal");
  modal.classList.remove("visible");
  audioManager.playSfx("hover");
}

/**
 * Populate custom modal with entity selectors
 */
function populateCustomModal() {
  createEntitySelectors();
  updateCustomModalText();
}

/**
 * Create individual entity selectors
 */
function createEntitySelectors() {
  const mappingContainer = document.getElementById("theme-preview");
  const currentLangCode = currentLang.langCode;
  const originals = ORIGINAL_ENTITIES[currentLangCode] || [];
  
  const entityLabels = {
    ko: ["개체 1", "개체 2", "개체 3"],
    en: ["Entity 1", "Entity 2", "Entity 3"]
  };
  
  mappingContainer.innerHTML = "";
  
  originals.forEach((originalEntity, index) => {
    const mappingDiv = document.createElement("div");
    mappingDiv.className = "mapping-item";
    
    const labelSpan = document.createElement("span");
    labelSpan.className = "original";
    labelSpan.textContent = entityLabels[currentLangCode][index] || `Entity ${index + 1}`;
    
    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = "→";
    
    const selector = document.createElement("select");
    selector.className = "entity-selector";
    selector.dataset.original = originalEntity;
    
    // Populate options
    populateEntityOptions(selector, originalEntity, currentLangCode);
    
    // Add event listener for real-time updates
    selector.addEventListener("change", () => {
      updateEntityMapping(originalEntity, selector.value);
      refreshAllSelectors(); // Refresh other selectors to update available options
    });
    
    mappingDiv.appendChild(labelSpan);
    mappingDiv.appendChild(arrow);
    mappingDiv.appendChild(selector);
    
    mappingContainer.appendChild(mappingDiv);
  });
}

/**
 * Populate options for an entity selector
 */
function populateEntityOptions(selector, originalEntity, currentLang) {
  const availableOptions = getAvailableOptions(originalEntity, currentLang);
  const currentMapping = customEntityMappings[currentLang]?.[originalEntity] || originalEntity;
  
  selector.innerHTML = "";
  
  availableOptions.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    
    if (option === currentMapping) {
      optionElement.selected = true;
    }
    
    selector.appendChild(optionElement);
  });
}

/**
 * Update entity mapping in memory
 */
function updateEntityMapping(originalEntity, newValue) {
  const currentLangCode = currentLang.langCode;
  
  if (!customEntityMappings[currentLangCode]) {
    customEntityMappings[currentLangCode] = {};
  }
  
  customEntityMappings[currentLangCode][originalEntity] = newValue;
  
  // Also update the corresponding entity in the other language
  const otherLang = currentLangCode === "ko" ? "en" : "ko";
  const originals = ORIGINAL_ENTITIES[currentLangCode] || [];
  const otherOriginals = ORIGINAL_ENTITIES[otherLang] || [];
  const entityIndex = originals.indexOf(originalEntity);
  
  if (entityIndex !== -1 && otherOriginals[entityIndex]) {
    const otherOriginal = otherOriginals[entityIndex];
    const otherPool = ENTITY_POOL[otherLang] || [];
    const currentPool = ENTITY_POOL[currentLangCode] || [];
    const newValueIndex = currentPool.indexOf(newValue);
    
    if (newValueIndex !== -1 && otherPool[newValueIndex]) {
      if (!customEntityMappings[otherLang]) {
        customEntityMappings[otherLang] = {};
      }
      customEntityMappings[otherLang][otherOriginal] = otherPool[newValueIndex];
    }
  }
}

/**
 * Refresh all selectors to update available options
 */
function refreshAllSelectors() {
  const selectors = document.querySelectorAll(".entity-selector");
  const currentLangCode = currentLang.langCode;
  
  selectors.forEach(selector => {
    const originalEntity = selector.dataset.original;
    const currentValue = selector.value;
    
    populateEntityOptions(selector, originalEntity, currentLangCode);
    
    // Restore selection if still available
    if (selector.querySelector(`option[value="${currentValue}"]`)) {
      selector.value = currentValue;
    }
  });
}

/**
 * Update custom modal text based on current language
 */
function updateCustomModalText() {
  const title = document.getElementById("custom-modal-title");
  const description = document.getElementById("custom-description");
  const previewLabel = document.getElementById("custom-preview-label");
  const resetBtn = document.getElementById("reset-custom-btn");
  const applyBtn = document.getElementById("apply-custom-btn");

  if (currentLang.langCode === "ko") {
    title.textContent = "개체 커스터마이징";
    description.textContent = "논리 명제에서 사용할 3가지 개체를 선택하세요:";
    previewLabel.textContent = "개체 선택";
    resetBtn.textContent = "기본값으로 되돌리기";
    applyBtn.textContent = "변경사항 저장";
  } else {
    title.textContent = "Entity Customization";
    description.textContent = "Select 3 entities to use in logical propositions:";
    previewLabel.textContent = "Entity Selection";
    resetBtn.textContent = "Reset to Default";
    applyBtn.textContent = "Save Changes";
  }
}

/**
 * Reset to defaults
 */
function resetToDefaults() {
  initializeDefaultMappings();
  createEntitySelectors(); // Recreate selectors with default values
  audioManager.playSfx("hover");
}

/**
 * Apply and save custom changes
 */
function applyCustomChanges() {
  saveCustomMappings();
  closeCustomModal();
  
  // Show confirmation
  showAlert(currentLang.langCode === "ko" ? 
    "개체 설정이 저장되었습니다!" : 
    "Entity settings saved successfully!"
  );
  
  audioManager.playSfx("complete");
}

/**
 * Get custom entity name for display
 * @param {string} originalEntity - Original entity name
 * @returns {string} Custom entity name or original if no custom mapping
 */
function getCustomEntityName(originalEntity) {
  const currentLangCode = currentLang.langCode;
  const currentMapping = customEntityMappings[currentLangCode];
  
  if (currentMapping && currentMapping[originalEntity]) {
    return currentMapping[originalEntity];
  }
  
  return originalEntity;
}

/**
 * Apply custom entity mappings to text
 * @param {string} text - Text to apply mappings to
 * @returns {string} Text with custom entities applied
 */
function applyCustomEntityMappings(text) {
  if (!text) return text;
  
  const currentLangCode = currentLang.langCode;
  const currentMapping = customEntityMappings[currentLangCode];
  
  if (!currentMapping) return text;
  
  let result = text;
  
  // Replace each entity mapping
  Object.keys(currentMapping).forEach(original => {
    const custom = currentMapping[original];
    if (custom !== original) {
      // Use word boundaries to avoid partial replacements
      const regex = new RegExp(`\\b${original}\\b`, 'g');
      result = result.replace(regex, custom);
    }
  });
  
  return result;
}