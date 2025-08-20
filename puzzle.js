const PUZZLES = {
  1: {
    goalDescription: {
      ko: "당신의 승리 <strong>[소크라테스는 승리한다]</strong>나 상대의 패배 <strong>[플라톤은 승리한다 는 거짓이다]</strong>를 증명하세요.",
      en: "Prove your victory, <strong>[Socrates wins]</strong> or opponent's defeat <strong>[Plato wins is false]</strong>.",
    },
    victoryConditions: {
      socrates: {
        ko: "(소크라테스는 선하다 라면 소크라테스는 승리한다) 그리고 (소크라테스는 승리한다 라면 소크라테스는 선하다)",
        en: "(Socrates is good then Socrates wins) and (Socrates wins then Socrates is good)",
      },
      plato: {
        ko: "(플라톤은 어리석다 라면 플라톤은 승리한다) 그리고 (플라톤은 승리한다 라면 플라톤은 어리석다)",
        en: "(Plato is foolish then Plato wins) and (Plato wins then Plato is foolish)",
      },
    },
    premises: {
      ko: [
        "어떤 개는 악하다 라면 소크라테스는 지혜롭다",
        "소크라테스는 개이다 그리고 플라톤은 물고기이다",
        "어떤 물고기는 어리석다 라면 어떤 개는 지혜롭다",
        "모든 개는 어리석다",
      ],
      en: [
        "(Some dog is evil) then (Socrates is wise)",
        "(Socrates is a dog) and (Plato is a fish)",
        "(Some fish is foolish) then (Some dog is wise)",
        "Every dog is foolish",
      ],
    },
  },
  2: {
    goalDescription: {
      ko: "당신의 승리 <strong>[소크라테스는 승리한다]</strong>나 상대의 패배 <strong>[플라톤은 승리한다 는 거짓이다]</strong>를 증명하세요.",
      en: "Prove your victory, <strong>[Socrates wins]</strong> or opponent's defeat <strong>[Plato wins is false]</strong>.",
    },
    victoryConditions: {
      socrates: {
        ko: "(소크라테스는 선하다 라면 소크라테스는 승리한다) 그리고 (소크라테스는 승리한다 라면 소크라테스는 선하다)",
        en: "(Socrates is good then Socrates wins) and (Socrates wins then Socrates is good)",
      },
      plato: {
        ko: "(플라톤은 어리석다 라면 플라톤은 승리한다) 그리고 (플라톤은 승리한다 라면 플라톤은 어리석다)",
        en: "(Plato is foolish then Plato wins) and (Plato wins then Plato is foolish)",
      },
    },
    premises: {
      ko: [
        "어떤 개는 지혜롭다 라면 소크라테스는 선하다",
        "어떤 개는 어리석다 라면 소크라테스는 선하다",
      ],
      en: [
        "(Some dog is wise) then (Socrates is good)",
        "(Some dog is foolish) then (Socrates is good)",
      ],
    },
  },
  3: {
    goalDescription: {
      ko: "당신의 승리 <strong>[소크라테스는 승리한다]</strong>나 상대의 패배 <strong>[플라톤은 승리한다 는 거짓이다]</strong>를 증명하세요.",
      en: "Prove your victory, <strong>[Socrates wins]</strong> or opponent's defeat <strong>[Plato wins is false]</strong>.",
    },
    victoryConditions: {
      socrates: {
        ko: "(소크라테스는 선하다 라면 소크라테스는 승리한다) 그리고 (소크라테스는 승리한다 라면 소크라테스는 선하다)",
        en: "(Socrates is good then Socrates wins) and (Socrates wins then Socrates is good)",
      },
      plato: {
        ko: "(플라톤은 어리석다 라면 플라톤은 승리한다) 그리고 (플라톤은 승리한다 라면 플라톤은 어리석다)",
        en: "(Plato is foolish then Plato wins) and (Plato wins then Plato is foolish)",
      },
    },
    premises: {
      ko: [
        "모든 새는 개이다",
        "모든 개는 물고기이다",
        "모든 물고기는 선하다",
        "소크라테스는 새이다 또는 어떤 개는 악하다",
      ],
      en: [
        "Every bird is a dog",
        "Every dog is a fish",
        "Every fish is good",
        "(Socrates is a bird) or (Some dog is evil)",
      ],
    },
  },
  4: {
    goalDescription: {
      ko: "당신의 승리 <strong>[소크라테스는 승리한다]</strong>나 상대의 패배 <strong>[플라톤은 승리한다 는 거짓이다]</strong>를 증명하세요.",
      en: "Prove your victory, <strong>[Socrates wins]</strong> or opponent's defeat <strong>[Plato wins is false]</strong>.",
    },
    victoryConditions: {
      socrates: {
        ko: "(소크라테스는 선하다 라면 소크라테스는 승리한다) 그리고 (소크라테스는 승리한다 라면 소크라테스는 선하다)",
        en: "(Socrates is good then Socrates wins) and (Socrates wins then Socrates is good)",
      },
      plato: {
        ko: "(플라톤은 어리석다 라면 플라톤은 승리한다) 그리고 (플라톤은 승리한다 라면 플라톤은 어리석다)",
        en: "(Plato is foolish then Plato wins) and (Plato wins then Plato is foolish)",
      },
    },
    premises: {
      ko: [
        "소크라테스는 악하다 라면 플라톤은 개이다",
        "모든 개는 선하다",
        "플라톤은 악하다",
      ],
      en: [
        "(Socrates is evil) then (Plato is a dog)",
        "Every dog is good",
        "Plato is evil",
      ],
    },
  },
  5: {
    goalDescription: {
      ko: "당신의 승리 <strong>[소크라테스는 승리한다]</strong>나 상대의 패배 <strong>[플라톤은 승리한다 는 거짓이다]</strong>를 증명하세요.",
      en: "Prove your victory, <strong>[Socrates wins]</strong> or opponent's defeat <strong>[Plato wins is false]</strong>.",
    },
    victoryConditions: {
      socrates: {
        ko: "(소크라테스는 선하다 라면 소크라테스는 승리한다) 그리고 (소크라테스는 승리한다 라면 소크라테스는 선하다)",
        en: "(Socrates is good then Socrates wins) and (Socrates wins then Socrates is good)",
      },
      plato: {
        ko: "(플라톤은 어리석다 라면 플라톤은 승리한다) 그리고 (플라톤은 승리한다 라면 플라톤은 어리석다)",
        en: "(Plato is foolish then Plato wins) and (Plato wins then Plato is foolish)",
      },
    },
    premises: {
      ko: ["플라톤은 지혜롭다 또는 플라톤은 지혜롭다"],
      en: ["(Plato is wise) or (Plato is wise)"],
    },
  },
  6: {
    goalDescription: {
      ko: "당신의 승리 <strong>[소크라테스는 승리한다]</strong>나 상대의 패배 <strong>[플라톤은 승리한다 는 거짓이다]</strong>를 증명하세요.",
      en: "Prove your victory, <strong>[Socrates wins]</strong> or opponent's defeat <strong>[Plato wins is false]</strong>.",
    },
    victoryConditions: {
      socrates: {
        ko: "(소크라테스는 선하다 라면 소크라테스는 승리한다) 그리고 (소크라테스는 승리한다 라면 소크라테스는 선하다)",
        en: "(Socrates is good then Socrates wins) and (Socrates wins then Socrates is good)",
      },
      plato: {
        ko: "(플라톤은 어리석다 라면 플라톤은 승리한다) 그리고 (플라톤은 승리한다 라면 플라톤은 어리석다)",
        en: "(Plato is foolish then Plato wins) and (Plato wins then Plato is foolish)",
      },
    },
    premises: {
      ko: [
        "플라톤은 새이다",
        "플라톤은 개이다",
        "플라톤은 물고기이다",
        "모든 새는 어리석다 라면 모든 개는 지혜롭다",
        "모든 개는 어리석다 라면 모든 물고기는 지혜롭다",
        "모든 물고기는 어리석다 라면 모든 새는 지혜롭다",
        "모든 새는 어리석다 또는 모든 개는 지혜롭다",
        "모든 개는 어리석다 또는 모든 물고기는 지혜롭다",
        "모든 물고기는 어리석다 또는 모든 새는 지혜롭다",
      ],
      en: [
        "Plato is a bird",
        "Plato is a dog",
        "Plato is a fish",
        "(Every bird is foolish) then (Every dog is wise)",
        "(Every dog is foolish) then (Every fish is wise)",
        "(Every fish is foolish) then (Every bird is wise)",
        "(Every bird is foolish) or (Every dog is wise)",
        "(Every dog is foolish) or (Every fish is wise)",
        "(Every fish is foolish) or (Every bird is wise)",
      ],
    },
  },
  7: {
    goalDescription: {
      ko: "당신의 승리 <strong>[소크라테스는 승리한다]</strong>나 상대의 패배 <strong>[플라톤은 승리한다 는 거짓이다]</strong>를 증명하세요.",
      en: "Prove your victory, <strong>[Socrates wins]</strong> or opponent's defeat <strong>[Plato wins is false]</strong>.",
    },
    victoryConditions: {
      socrates: {
        ko: "(소크라테스는 선하다 라면 소크라테스는 승리한다) 그리고 (소크라테스는 승리한다 라면 소크라테스는 선하다)",
        en: "(Socrates is good then Socrates wins) and (Socrates wins then Socrates is good)",
      },
      plato: {
        ko: "(플라톤은 어리석다 라면 플라톤은 승리한다) 그리고 (플라톤은 승리한다 라면 플라톤은 어리석다)",
        en: "(Plato is foolish then Plato wins) and (Plato wins then Plato is foolish)",
      },
    },
    premises: {
      ko: [
        "플라톤은 지혜롭다 또는 모든 개는 어리석다",
        "모든 개는 지혜롭다 는 거짓이다 라면 소크라테스는 선하다",
        "플라톤은 지혜롭다 라면 소크라테스는 물고기이다",
        "어떤 물고기는 악하다 는 거짓이다",
      ],
      en: [
        "(Plato is wise) or (Every dog is foolish)",
        "(Every dog is wise) is false then (Socrates is good)",
        "(Plato is wise) then (Socrates is a fish)",
        "Some fish is evil is false",
      ],
    },
  },
};

function populatePuzzleLevels() {
  const grid = document.getElementById("puzzle-level-grid");
  grid.innerHTML = ""; // 기존 레벨 버튼들 초기화

  const clearedPuzzles =
    JSON.parse(localStorage.getItem("logos_cleared_puzzles")) || {};

  Object.keys(PUZZLES).forEach((levelNum) => {
    const levelBtn = document.createElement("div");
    levelBtn.className = "puzzle-level-btn";
    levelBtn.textContent = levelNum;
    if (clearedPuzzles[levelNum]) {
      levelBtn.classList.add("cleared");
    }
    levelBtn.addEventListener("click", () => {
      audioManager.playSfx("hover");
      startPuzzle(levelNum, PUZZLES[levelNum]);
    });
    grid.appendChild(levelBtn);
  });
}

/**
 * 선택된 레벨 데이터로 퍼즐을 시작합니다.
 * @param {object} levelData - PUZZLES 객체에서 가져온 레벨 정보
 */
function startPuzzle(levelNum, levelData) {
  currentPuzzleLevel = levelNum;

  const masterDeck = currentLang.cards;
  // '소크라테스는', '플라톤은' 카드를 기본 덱에서 찾습니다.
  const socratesCard = masterDeck.find(
    (c) => c.text === currentLang.keywords.socrates
  );
  const platoCard = masterDeck.find(
    (c) => c.text === currentLang.keywords.plato
  );
  // 모든 철학자 이름을 제외한 기본 카드 목록을 만듭니다.
  const allPhilosopherCardTexts = Object.values(PHILOSOPHERS).map(
    (p) => p.cardText[currentLang.langCode]
  );
  const baseDeck = masterDeck.filter(
    (card) => !allPhilosopherCardTexts.includes(card.text)
  );
  // 기본 카드 목록에 소크라테스와 플라톤 카드만 추가하여 fullDeck을 재설정합니다.
  fullDeck = [...baseDeck, socratesCard, platoCard];

  // 1. 퍼즐에 필요한 공리를 먼저 생성합니다. (튜토리얼 로직 재활용)
  const socratesSubject = currentLang.keywords.socrates;
  const platoSubject = currentLang.keywords.plato;
  currentAxioms = generateAxioms(socratesSubject, platoSubject, currentLang);
  parsedAxioms = currentAxioms
    .map((str) => ({
      type: "axiom",
      proposition: parsePropositionFromString(str),
    }))
    .filter((a) => a.proposition);

  inPuzzleMode = true;
  document
    .getElementById("puzzle-level-select-modal")
    .classList.remove("visible");

  // 퍼즐 목표 메시지 박스 표시 및 내용 채우기
  const goalBox = document.getElementById("puzzle-goal-box");
  const goalText = document.getElementById("puzzle-goal-text"); // p 태그를 선택

  goalText.innerHTML = levelData.goalDescription[currentLang.langCode]; // p 태그에 텍스트 설정
  goalBox.classList.remove("hidden"); // 전체 박스를 보이게 함

  // 퍼즐 데이터로 게임 상태 설정
  truePropositions = [];

  // 1. 승리 조건 설정
  const socratesVC_Text =
    levelData.victoryConditions.socrates[currentLang.langCode];
  const socratesVC_Parsed = parsePropositionFromString(socratesVC_Text);
  if (socratesVC_Parsed) {
    truePropositions.push({
      type: "victory",
      owner: "A",
      text: socratesVC_Text,
      proposition: socratesVC_Parsed,
      ultimate_target: {
        type: "atomic",
        subject: currentLang.keywords.socrates,
        predicate: currentLang.keywords.wins,
      },
    });
  }

  const platoVC_Text = levelData.victoryConditions.plato[currentLang.langCode];
  const platoVC_Parsed = parsePropositionFromString(platoVC_Text);
  if (platoVC_Parsed) {
    truePropositions.push({
      type: "victory",
      owner: "B",
      text: platoVC_Text,
      proposition: platoVC_Parsed,
      ultimate_target: {
        type: "atomic",
        subject: currentLang.keywords.plato,
        predicate: currentLang.keywords.wins,
      },
    });
  }

  // 2. 전제 명제 설정
  const premises = levelData.premises[currentLang.langCode];
  premises.forEach((pText) => {
    const parsed = parsePropositionFromString(pText);
    if (parsed) {
      truePropositions.push({ type: "user-made", proposition: parsed });
    }
  });

  // 3. 내부 진리 집합 재구성
  internalTruthSet = parsedAxioms.map((a) => a.proposition);
  truePropositions.forEach((p) => internalTruthSet.push(p.proposition));
  internalTruthSet = verifyAndExpandTruths(null, internalTruthSet).expandedSet;

  // 4. 유레카 모달 바로 열기
  openEurekaModal();
}
