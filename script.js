// --- MULTILINGUAL TEXT DATA ---
const TEXTS = {
  ko: {
    langCode: "ko",
    ui: {
      title: "LOGOS ORGANON",
      tutorialButton: "튜토리얼",
      tutorialPuzzleButton: "튜토리얼 퍼즐",
      exitGameButton: "게임 종료",
      creditsButton: "크레딧",
      endTutorialButton: "튜토리얼 종료",
      newGameButton: "새 게임",
      vsAIButton: "1인 대전",
      vsPlayerButton: "2인 대전",
      puzzleButton: "퍼즐",
      fullscreenButton: "전체화면",
      settingsButton: "환경설정",
      settingsTitle: "환경설정",
      bgmLabel: "배경음악",
      sfxLabel: "효과음",
      playerAName: "소크라테스",
      playerAColor: "⚪️ 백",
      playerBName: "플라톤",
      playerBColor: "⚫️ 흑",
      currentPropositionTitle: "현재 명제",
      completeButton: "명제 완성",
      undoButton: "되돌리기",
      endTurnButton: "턴 종료",
      truePropositionsTitle: "참 명제 목록",
      eurekaButton: "유레카!",
      addTheoremButton: "정리 추가 ➕",
      roundDisplay: "제 {round} 라운드",
      axiomTitle: "기본 공리 (펼쳐보기)",
      statusTurn: "의 턴입니다.",
      statusAITurn: "AI가 생각 중입니다...",
      thinkingTimeStatus: "사유 시간입니다. 새로운 정리를 도출하세요.",
      thinkingTimeTitle: "사유(思惟) 시간",
      thinkingTimeDesc:
        "새로운 정리를 도출하고 '정리 추가' 버튼으로 목록에 반영하세요.",
      endThinkingTimeButton: "사유 시간 종료 & 다음 라운드 시작",
      victoryMessage: "플레이어의 승리!",
      victorySubMessage: "논리적인 증명에 성공했습니다!",
      okButton: "확인",
      cancelButton: "취소",
      nextButton: "다음",
      yesButton: "예",
      noButton: "아니오",
      cancelAssumptionButton: "가정 취소",
      selectP1Philosopher: "1P, 철학자를 선택하세요",
      selectP2Philosopher: "2P, 철학자를 선택하세요",
      selectYourPhilosopher: "당신의 철학자를 선택하세요",
      selectAIPhilosopher: "AI의 철학자를 선택하세요",
      gameStartingSoon: "곧 게임이 시작됩니다...",
      turnOrderTitle: "대전 순서를 선택하세요",
      selectFirstPlayer: "선공",
      selectSecondPlayer: "후공",
      skillTitle: "고유 능력",
      thinkingTimeTurnMessage: "의 사유 시간입니다.",
      useAbilityButton: "능력 사용",
      platoAbilityTitle: "이데아 회상",
      platoConfirmButton: "이 명제를 보편화하기",
      socratesAbilityTitle: "무지의 자각",
      socratesConfirmButton: "이 명제를 다음 라운드까지 제외",
      wittgensteinAbilityTitle: "사다리 걷어차기",
      wittgensteinConfirmButton: "정리 도출 및 전제 삭제",
      vsAIBattleButton: "AI 대전", // AI 대전 버튼
      selectAIP1Philosopher: "AI 1P, 철학자를 선택하세요", // AI 1P 선택 안내
      selectAIP2Philosopher: "AI 2P, 철학자를 선택하세요", // AI 2P 선택 안내
      aiSummaryTitleDefault: "AI의 턴 결과",
      aiSummaryTitleTheorem: "AI가 새로운 정리를 도출했습니다.",
      aiSummaryTitleAbility: "AI가 능력을 사용했습니다.",
      abilityLabel: "[능력]",
      theoremLabel: "[정리]",
      platoAbilityDescription:
        "[이데아 회상] 능력으로 '{proposition}' 명제를 도출했습니다.",
      socratesAbilityDescription:
        "[무지의 자각] 능력으로 '{proposition}' 명제를 다음 라운드까지 논증에서 제외합니다.",
      descartesAbilityDescription:
        "[방법적 회의] 능력으로 '{proposition}' 명제를 참 목록에서 삭제했습니다.",
      humeAbilityDescription:
        "[귀납의 문제] 능력으로 '{proposition}' 명제를 약화시켰습니다.",
      wittgensteinAbilityDescription:
        "[사다리 걷어차기] 능력으로 '{newTheorem}' 정리를 도출하고, 사용된 전제들을 삭제했습니다.",
      kuhnAbilityDescription:
        "[패러다임 전환] 능력으로 새로운 패러다임인 '{newParadigm}'를 수립했습니다.",
      derridaAbilityDescription:
        "[해체] 능력으로 '{proposition}' 명제를 해체했습니다.",
      kantAbilityDescription:
        "[선험적 종합판단] 능력으로 '{proposition}' 명제를 도출했습니다.",
      vsPlayerDesc: "두 플레이어가 한 컴퓨터 앞에 앉아<br>대결합니다.",
      vsAIDesc: "AI를 상대하며 게임을 연습할 수 있습니다.",
      tutorialDesc:
        "게임의 기본 규칙과 논리적 추론 규칙을<br>배울 수 있습니다.",
      puzzleDesc:
        "경쟁 없이, 미리 준비된 논리 추론 퍼즐을<br>풀어볼 수 있습니다.",
    },
    modals: {
      characterSelectTitle: "철학자 선택",
      selectSocrates: "소크라테스 (백) ⚪️",
      selectPlato: "플라톤 (흑) ⚫️",
      eurekaTitleVictory: "유레카! 논증 구성",
      eurekaTitleTheorem: "사유 시간: 정리 구성",
      premiseSelectionTitle: "사용 가능한 전제 목록",
      applyRuleButton: "규칙 적용",
      addAssumptionButton: "가정하기",
      confirmVictoryButton: "이 논증으로 승리 증명!",
      confirmTheoremButton: "선택한 정리들을 참 목록에 추가 ➕",
      tutorialTitle: "LOGOS ORGANON 튜토리얼",
      promptInputPlaceholder: "명제를 입력하세요...",
      puzzleTitle: "레벨 선택",
    },

    inferenceRules: {
      basic: "기본 규칙",
      modusPonens: "전건 긍정 (P, P 라면 Q ∴ Q)",
      modusTollens: "후건 부정 (Q 는 거짓이다, P 라면 Q ∴ P 는 거짓이다)",
      hypotheticalSyllogism: "가설적 삼단논법 (P 라면 Q, Q 라면 R ∴ P 라면 R)",
      disjunctiveSyllogism: "선언적 삼단논법 (P 또는 Q, P 는 거짓이다 ∴ Q)",
      universalApplication: "보편 적용 (A는 P다, 모든 P는 Q다 ∴ A는 Q다)",
      existentialInstantiation: "존재화 (모든 P는 Q다 ∴ 어떤 P는 Q다)",
      conjunctionElimination: "단순화 (P 그리고 Q ∴ P, Q)",
      doubleNegationElimination:
        "이중 부정 제거 (P 는 거짓이다 는 거짓이다 ∴ P)",
      assumptionBased: "가정 기반 규칙",
      conditionalIntroduction: "조건문 도입 (P 가정, Q 도출 ∴ P 라면 Q)",
      reductioAdAbsurdum: "귀류법 (P 가정, 모순 도출 ∴ P 는 거짓이다)",
      advanced: "고급 규칙",
      proofByCases: "경우 논증 (P 또는 Q, P 라면 R, Q 라면 R ∴ R)",
    },

    alerts: {
      invalidCard: "규칙에 맞지 않는 카드입니다!",
      incompleteProposition: "완성되지 않은 명제이거나 파싱에 실패했습니다.",
      duplicateProposition: "같은 명제가 이미 존재합니다.",
      contradictionFound:
        "모순이 발견되었습니다!<br>이 명제는 기존의 참 명제들과 양립할 수 없습니다.",
      undoLastCard: "마지막으로 놓은 카드를 되돌렸습니다.",
      undoLastProposition: "마지막으로 완성된 명제를 되돌렸습니다.",
      nothingToUndo: "되돌릴 수 있는 완성된 명제가 없습니다.",
      roundEndNoMoves:
        "'{player}' 플레이어가 더 이상 낼 수 있는 카드가 없어 사유 시간으로 전환합니다.",
      criticalErrorUndo:
        "진리 체계를 재구성하는 중 심각한 오류가 발생했습니다. 게임을 새로 시작해야 할 수 있습니다.",
      oneAssumptionOnly: "가정은 한 번에 하나만 할 수 있습니다.",
      parsingFailed: "명제를 파싱할 수 없습니다. 올바른 형식으로 입력해주세요.",
      premiseNeededForIntro:
        "조건문 도입 규칙은 가정으로부터 도출된 '결론' 명제 하나만 선택해야 합니다.",
      assumptionNeededForIntro:
        "조건문 도입 규칙을 사용하려면 먼저 '가정하기'를 통해 가정을 해야 합니다.",
      premiseNotFromAssumption:
        "선택한 명제는 현재 가정과 무관합니다. 가정으로부터 파생된 명제를 선택하세요.",
      premiseCountError: "이 규칙은 {count}개의 전제가 필요합니다.",
      contradictionNeededForRAA:
        "귀류법은 서로 모순되는 2개의 전제가 필요합니다.",
      assumptionNeededForRAA:
        "귀류법을 적용하려면 먼저 '가정하기'를 통해 가정을 해야 합니다.",
      notAContradiction: "모순 관계가 아닙니다. 귀류법을 적용할 수 없습니다.",
      ruleFailed: "규칙 적용에 실패했습니다. 전제들을 확인해주세요.",
      noTheoremsToAdd: "추가할 새로운 정리가 없습니다.",
      proofIncomplete:
        "증명이 완료되지 않았습니다.\n자신의 승리 [{myGoal}] 또는\n상대의 패배 [{opponentGoal}] 를 도출해야 합니다.",
      oneCardPerTurn: "한 턴에 한 장의 카드만 낼 수 있습니다.",
      aiEurekaDeclared: "AI가 '유레카!'를 선언했습니다!",
      selectOneTheoremOnly: "하나의 최종 정리만 선택해야 합니다.",
      wittgensteinSuccess:
        "새로운 정리가 추가되었고, 증명에 사용된 전제들이 삭제되었습니다.",
      kantSuccess: "새로운 명제가 참 목록에 추가되었습니다!",
      confirmCloseEureka:
        "유레카! 선언은 한 라운드에 한 번만 할 수 있습니다.<br>정말 창을 닫으시겠습니까?",
      confirmExit: "정말로 종료하시겠습니까?",
      tutorialVictory:
        "잘 하셨습니다.<br>이제 논리 대결에 참여하여 당신의 지혜를 증명해 보세요!",
      puzzleCleared: "축하합니다! 클리어하셨습니다!",
      confirmDeclareEureka:
        "유레카! 선언은 한 라운드에 한 번만 가능합니다.<br>선언하시겠습니까?",
    },
    keywords: {
      if: "라면",
      and: "그리고",
      or: "또는",
      not: "는 거짓이다",
      wins: "승리한다",
      socrates: "소크라테스는",
      plato: "플라톤은",
      universal_q: "모든",
      existential_q: "어떤",
    },
    cards: [
      { type: "양화사", text: "어떤" },
      { type: "양화사", text: "모든" },
      { type: "연산자", text: "라면" },
      { type: "연산자", text: "그리고" },
      { type: "연산자", text: "또는" },
      { type: "연산자", text: "는 거짓이다" },
      { type: "개체", text: "새는" },
      { type: "개체", text: "물고기는" },
      { type: "개체", text: "개는" },
      { type: "고유명사", text: "소크라테스는" },
      { type: "고유명사", text: "플라톤은" },
      { type: "서술어", text: "선하다" },
      { type: "서술어", text: "악하다" },
      { type: "서술어", text: "지혜롭다" },
      { type: "서술어", text: "어리석다" },
      { type: "서술어", text: "새이다" },
      { type: "서술어", text: "물고기이다" },
      { type: "서술어", text: "개이다" },
      { type: "서술어", text: "승리한다" },
    ],
    cardTypes: ["고유명사", "양화사", "개체", "서술어", "연산자"],
    axiom_templates: {
      identity: [
        "어떤 새는 새이다",
        "모든 새는 새이다",
        "어떤 물고기는 물고기이다",
        "모든 물고기는 물고기이다",
        "어떤 개는 개이다",
        "모든 개는 개이다",
      ],
      subject_good_evil: [
        "{S} 선하다 또는 {S} 악하다",
        "{S} 선하다 라면 {S} 악하다 는 거짓이다",
      ],
      subject_wise_foolish: [
        "{S} 지혜롭다 또는 {S} 어리석다",
        "{S} 지혜롭다 라면 {S} 어리석다 는 거짓이다",
      ],
      bird_good_evil_forward: [
        "모든 새는 선하다 라면 어떤 새는 악하다 는 거짓이다",
        "모든 새는 악하다 라면 어떤 새는 선하다 는 거짓이다",
        "모든 새는 지혜롭다 라면 어떤 새는 어리석다 는 거짓이다",
        "모든 새는 어리석다 라면 어떤 새는 지혜롭다 는 거짓이다",
      ],
      bird_good_evil_reverse: [
        "어떤 새는 선하다 는 거짓이다 라면 모든 새는 악하다",
        "어떤 새는 악하다 는 거짓이다 라면 모든 새는 선하다",
        "어떤 새는 지혜롭다 는 거짓이다 라면 모든 새는 어리석다",
        "어떤 새는 어리석다 는 거짓이다 라면 모든 새는 지혜롭다",
      ],
      fish_good_evil_forward: [
        "모든 물고기는 선하다 라면 어떤 물고기는 악하다 는 거짓이다",
        "모든 물고기는 악하다 라면 어떤 물고기는 선하다 는 거짓이다",
        "모든 물고기는 지혜롭다 라면 어떤 물고기는 어리석다 는 거짓이다",
        "모든 물고기는 어리석다 라면 어떤 물고기는 지혜롭다 는 거짓이다",
      ],
      fish_good_evil_reverse: [
        "어떤 물고기는 선하다 는 거짓이다 라면 모든 물고기는 악하다",
        "어떤 물고기는 악하다 는 거짓이다 라면 모든 물고기는 선하다",
        "어떤 물고기는 지혜롭다 는 거짓이다 라면 모든 물고기는 어리석다",
        "어떤 물고기는 어리석다 는 거짓이다 라면 모든 물고기는 지혜롭다",
      ],
      dog_good_evil_forward: [
        "모든 개는 선하다 라면 어떤 개는 악하다 는 거짓이다",
        "모든 개는 악하다 라면 어떤 개는 선하다 는 거짓이다",
        "모든 개는 지혜롭다 라면 어떤 개는 어리석다 는 거짓이다",
        "모든 개는 어리석다 라면 어떤 개는 지혜롭다 는 거짓이다",
      ],
      dog_good_evil_reverse: [
        "어떤 개는 선하다 는 거짓이다 라면 모든 개는 악하다",
        "어떤 개는 악하다 는 거짓이다 라면 모든 개는 선하다",
        "어떤 개는 지혜롭다 는 거짓이다 라면 모든 개는 어리석다",
        "어떤 개는 어리석다 는 거짓이다 라면 모든 개는 지혜롭다",
      ],
    },
    victoryPredicates: ["선하다", "악하다", "지혜롭다", "어리석다"],
    contradictoryPredicates: { 선하다: "악하다", 지혜롭다: "어리석다" },
    labels: {
      proposition: "[명제]",
      axiom: "[공리]",
      victory_condition: "[승리 조건]",
      theorem: "[정리]",
      assumption: "[가정]",
      ci_theorem: "[조건문 도입]",
      raa_theorem: "[귀류법 증명]",
      theorem_source: "[정리] {text} (R{round} 사유)",
      victory_text: "{owner} 승리 조건: <strong>{text}</strong>",
      plato_ability_source: "{text} (이데아 회상)",
      nietzsche_ability_source: "{text} (영원 회귀)",
      wittgenstein_ability_source: "{text} (사다리 걷어차기)",
      derrida_ability_source: "{text} (해체)",
      hume_ability_source: "{text} (귀납의 문제)",
      kuhn_ability_source: "{text} (패러다임 전환)",
      kant_ability_source: "{text} (선험적 종합판단)",
    },
  },
  en: {
    langCode: "en",
    ui: {
      title: "LOGOS ORGANON",
      tutorialButton: "Tutorial",
      tutorialPuzzleButton: "Tutorial Puzzle",
      puzzleButton: "Puzzle",
      exitGameButton: "Exit Game",
      creditsButton: "Credits",
      endTutorialButton: "End Tutorial",
      newGameButton: "New Game",
      fullscreenButton: "Fullscreen",
      settingsButton: "Settings",
      settingsTitle: "Settings",
      bgmLabel: "BGM",
      sfxLabel: "SFX",
      vsAIButton: "1P vs AI",
      vsPlayerButton: "1P vs 2P",
      playerAName: "Socrates",
      playerAColor: "⚪️ White",
      playerBName: "Plato",
      playerBColor: "⚫️ Black",
      currentPropositionTitle: "Current Proposition",
      completeButton: "Complete",
      undoButton: "Undo",
      endTurnButton: "End Turn",
      truePropositionsTitle: "True Propositions",
      eurekaButton: "Eureka!",
      addTheoremButton: "Add Theorem ➕",
      roundDisplay: "Round {round}",
      axiomTitle: "Basic Axioms (Click to expand)",
      statusTurn: "'s Turn",
      statusAITurn: "AI is thinking...",
      thinkingTimeStatus: "Thinking Time. Derive new theorems.",
      thinkingTimeTitle: "Thinking Time",
      thinkingTimeDesc:
        "Derive new theorems and add them to the list using the 'Add Theorem' button.",
      endThinkingTimeButton: "End Thinking Time & Start Next Round",
      victoryMessage: "Player Wins!",
      victorySubMessage: "Succeeded with a logical proof!",
      okButton: "OK",
      cancelButton: "Cancel",
      nextButton: "Next",
      yesButton: "Yes",
      noButton: "No",
      cancelAssumptionButton: "Cancel",
      selectP1Philosopher: "1P, Select Your Philosopher",
      selectP2Philosopher: "2P, Select Your Philosopher",
      selectYourPhilosopher: "Select Your Philosopher",
      selectAIPhilosopher: "Select AI's Philosopher",
      gameStartingSoon: "Game starting soon...",
      turnOrderTitle: "Choose Turn Order",
      selectFirstPlayer: "Go First",
      selectSecondPlayer: "Go Second",
      skillTitle: "Unique Ability",
      thinkingTimeTurnMessage: "'s Thinking Time.",
      useAbilityButton: "Use Ability",
      platoAbilityTitle: "Recollection of Forms",
      platoConfirmButton: "Universalize this Proposition",
      socratesAbilityTitle: "Awareness of Ignorance",
      socratesConfirmButton: "Exclude this proposition from arguments",
      wittgensteinAbilityTitle: "Kicking Away the Ladder",
      wittgensteinConfirmButton: "Derive Theorem & Delete Premises",
      vsAIBattleButton: "AI vs AI",
      selectAIP1Philosopher: "Select AI 1P's Philosopher",
      selectAIP2Philosopher: "Select AI 2P's Philosopher",
      aiSummaryTitleDefault: "AI's Turn Result",
      aiSummaryTitleTheorem: "AI has derived a new theorem.",
      aiSummaryTitleAbility: "AI has used an ability.",
      abilityLabel: "[Ability]",
      theoremLabel: "[Theorem]",
      platoAbilityDescription:
        "[Recollection of Forms] ability was used to derive '{proposition}'.",
      socratesAbilityDescription:
        "[Awareness of Ignorance] ability was used to exclude '{proposition}' from arguments for the next round.",
      descartesAbilityDescription:
        "[Methodic Doubt] ability was used to delete '{proposition}' from the list of true propositions.",
      humeAbilityDescription:
        "[Problem of Induction] ability was used to weaken '{proposition}'.",
      wittgensteinAbilityDescription:
        "[Kicking Away the Ladder] ability was used to derive the theorem '{newTheorem}' and delete its premises.",
      kuhnAbilityDescription:
        "[Paradigm Shift] ability was used to establish a new paradigm: '{newParadigm}'.",
      derridaAbilityDescription:
        "[Deconstruction] ability was used to deconstruct the proposition '{proposition}'.",
      kantAbilityDescription:
        "[Synthetic A Priori Judgment] ability was used to derive '{proposition}'.",
      vsPlayerDesc: "Two players face off on a single computer.",
      vsAIDesc: "Practice the game by playing against the AI.",
      tutorialDesc:
        "Learn the basic rules of the game and the rules of inference.",
      puzzleDesc:
        "Solve pre-made logical reasoning puzzles without competition.",
    },
    modals: {
      characterSelectTitle: "Select Your Philosopher",
      selectSocrates: "Socrates (White) ⚪️",
      selectPlato: "Plato (Black) ⚫️",
      eurekaTitleVictory: "Eureka! Construct Proof",
      eurekaTitleTheorem: "Thinking Time: Construct Theorem",
      premiseSelectionTitle: "Available Premises List",
      applyRuleButton: "Apply",
      addAssumptionButton: "Assume",
      confirmVictoryButton: "Prove Victory with this Argument!",
      confirmTheoremButton: "Add Selected Theorems to True List ➕",
      tutorialTitle: "LOGOS ORGANON Tutorial",
      promptInputPlaceholder: "Enter proposition...",
      puzzleTitle: "Select Level",
    },

    inferenceRules: {
      basic: "Basic Rules",
      modusPonens: "Modus Ponens (P, P then Q ∴ Q)",
      modusTollens: "Modus Tollens (Q is false, P then Q ∴ ~P)",
      hypotheticalSyllogism:
        "Hypothetical Syllogism (P then Q, Q then R ∴ P then R)",
      disjunctiveSyllogism: "Disjunctive Syllogism (P or Q, P is false ∴ Q)",
      universalApplication:
        "Universal Application (A is P, Every P are Q ∴ A is Q)",
      existentialInstantiation:
        "Existential Instantiation (Every P is Q ∴ Some P is Q)",
      conjunctionElimination: "Simplification (P and Q ∴ P, Q)",
      doubleNegationElimination:
        "Double Negation Elimination (P is false is false ∴ P)",
      assumptionBased: "Assumption-Based Rules",
      conditionalIntroduction:
        "Conditional Introduction (Assume P, derive Q ∴ P then Q)",
      reductioAdAbsurdum:
        "Reductio ad Absurdum (Assume P, derive contradiction ∴ P is false)",
      advanced: "Advanced Rules",
      proofByCases: "Proof by Cases (P or Q, P then R, Q then R ∴ R)",
    },
    alerts: {
      invalidCard: "This card cannot be played here.",
      incompleteProposition:
        "The proposition is incomplete or could not be parsed.",
      duplicateProposition: "The same proposition already exists.",
      contradictionFound:
        "Contradiction found!<br>This proposition is not compatible with the set of true propositions.",
      undoLastCard: "Reverted the last played card.",
      undoLastProposition: "Reverted the last completed proposition.",
      nothingToUndo: "There are no completed propositions to undo.",
      roundEndNoMoves:
        "Player '{player}' has no valid moves. Entering thinking time.",
      criticalErrorUndo:
        "A critical error occurred while rebuilding the truth set. You may need to restart the game.",
      oneAssumptionOnly: "You can only have one assumption at a time.",
      parsingFailed:
        "Could not parse the proposition. Please check the format.",
      premiseNeededForIntro:
        "For Conditional Introduction, you must select exactly one conclusion derived from the assumption.",
      assumptionNeededForIntro:
        "You must make an assumption first to use Conditional Introduction.",
      premiseNotFromAssumption:
        "The selected proposition does not depend on the current assumption.",
      premiseCountError: "This rule requires {count} premises.",
      contradictionNeededForRAA:
        "Reductio ad Absurdum requires 2 contradictory premises.",
      assumptionNeededForRAA:
        "You must make an assumption first to use Reductio ad Absurdum.",
      notAContradiction: "The selected premises are not a contradiction.",
      ruleFailed: "Failed to apply the rule. Please check your premises.",
      noTheoremsToAdd: "There are no new, non-dependent theorems to add.",
      proofIncomplete:
        "Proof incomplete.\nYou must derive your victory [{myGoal}] or your opponent's defeat [{opponentGoal}].",
      oneCardPerTurn: "You can only play one card per turn.",
      aiEurekaDeclared: "AI has declared 'Eureka!'",
      selectOneTheoremOnly: "You must select exactly one final theorem.",
      wittgensteinSuccess:
        "The new theorem has been added, and the premises used for its proof have been deleted.",
      kantSuccess: "A new proposition has been added to the true list!",
      confirmCloseEureka:
        "Eureka! can only be declared once per round.<br>Are you sure you want to close this window?",
      confirmExit: "Are you sure you want to exit?",
      tutorialVictory:
        "Well done!<br>Now, engage in a battle of wits and prove your wisdom!",
      puzzleCleared: "Congratulations! You cleared the puzzle!",
      confirmDeclareEureka:
        "Eureka! can only be declared once per round.<br>Do you want to proceed?",
    },
    keywords: {
      if: "then",
      and: "and",
      or: "or",
      not: "is false",
      wins: "wins",
      socrates: "Socrates",
      plato: "Plato",
      universal_q: "Every",
      existential_q: "Some",
    },
    cards: [
      { type: "Quantifier", text: "Some" },
      { type: "Quantifier", text: "Every" },
      { type: "Operator", text: "then" },
      { type: "Operator", text: "and" },
      { type: "Operator", text: "or" },
      { type: "Operator", text: "is false" },
      { type: "Entity", text: "bird" },
      { type: "Entity", text: "fish" },
      { type: "Entity", text: "dog" },
      { type: "Proper Noun", text: "Socrates" },
      { type: "Proper Noun", text: "Plato" },
      { type: "Predicate", text: "is good" },
      { type: "Predicate", text: "is evil" },
      { type: "Predicate", text: "is wise" },
      { type: "Predicate", text: "is foolish" },
      { type: "Predicate", text: "is a bird" },
      { type: "Predicate", text: "is a fish" },
      { type: "Predicate", text: "is a dog" },
      { type: "Predicate", text: "wins" },
    ],
    cardTypes: ["Proper Noun", "Quantifier", "Entity", "Predicate", "Operator"],
    axiom_templates: {
      identity: [
        "Some bird is a bird",
        "Every bird is a bird",
        "Some fish is a fish",
        "Every fish is a fish",
        "Some dog is a dog",
        "Every dog is a dog",
      ],
      subject_good_evil: [
        "{S} is good or {S} is evil",
        "{S} is good then {S} is evil is false",
      ],
      subject_wise_foolish: [
        "{S} is wise or {S} is foolish",
        "{S} is wise then {S} is foolish is false",
      ],
      bird_good_evil_forward: [
        "Every bird is good then Some bird is evil is false",
        "Every bird is evil then Some bird is good is false",
        "Every bird is wise then Some bird is foolish is false",
        "Every bird is foolish then Some bird is wise is false",
      ],
      bird_good_evil_reverse: [
        "Some bird is good is false then Every bird is evil",
        "Some bird is evil is false then Every bird is good",
        "Some bird is wise is false then Every bird is foolish",
        "Some bird is foolish is false then Every bird is wise",
      ],
      fish_good_evil_forward: [
        "Every fish is good then Some fish is evil is false",
        "Every fish is evil then Some fish is good is false",
        "Every fish is wise then Some fish is foolish is false",
        "Every fish is foolish then Some fish is wise is false",
      ],
      fish_good_evil_reverse: [
        "Some fish is good is false then Every fish is evil",
        "Some fish is evil is false then Every fish is good",
        "Some fish is wise is false then Every fish is foolish",
        "Some fish is foolish is false then Every fish is wise",
      ],
      dog_good_evil_forward: [
        "Every dog is good then Some dog is evil is false",
        "Every dog is evil then Some dog is good is false",
        "Every dog is wise then Some dog is foolish is false",
        "Every dog is foolish then Some dog is wise is false",
      ],
      dog_good_evil_reverse: [
        "Some dog is good is false then Every dog is evil",
        "Some dog is evil is false then Every dog is good",
        "Some dog is wise is false then Every dog is foolish",
        "Some dog is foolish is false then Every dog is wise",
      ],
    },
    victoryPredicates: ["is good", "is evil", "is wise", "is foolish"],
    contradictoryPredicates: {
      "is good": "is evil",
      "is wise": "is foolish",
    },
    labels: {
      proposition: "[Prop]",
      axiom: "[Axiom]",
      victory_condition: "[WinCon]",
      theorem: "[Thm]",
      assumption: "[Asmp]",
      ci_theorem: "[CI Thm]",
      raa_theorem: "[RAA Thm]",
      theorem_source: "[Thm] {text} (R{round} Thinking)",
      victory_text: "{owner} Win Condition: {text}",
      plato_ability_source: "{text} (Recollection of Forms)",
      nietzsche_ability_source: "{text} (Eternal Recurrence)",
      wittgenstein_ability_source: "{text} (Kicking Away the Ladder)",
      derrida_ability_source: "{text} (Deconstruction)",
      hume_ability_source: "{text} (Problem of Induction)",
      kuhn_ability_source: "{text} (Paradigm Shift)",
      kant_ability_source: "{text} (Synthetic A Priori Judgment)",
    },
  },
};

const PHILOSOPHERS = {
  aristotle: {
    id: "aristotle",
    name: { ko: "아리스토텔레스", en: "Aristotle" },
    cardText: { ko: "아리스토텔레스는", en: "Aristotle" },
    image: {
      p1: "assets/images/ari_p1.png",
      p2: "assets/images/ari_p2.png",
    },
    icon: "assets/images/ari_icon.png",
    skill: {
      ko: "형식 논리학: 특별한 능력은 없습니다. 하지만 이 게임의 모든 매커니즘은 그 덕분에 존재한다는 사실을 기억하세요.",
      en: "Formal Logic: Has no special ability. However, remember. All the mechanisms of this game exist thanks to him.",
    },
  },
  socrates: {
    id: "socrates",
    name: { ko: "소크라테스", en: "Socrates" },
    cardText: { ko: "소크라테스는", en: "Socrates" },
    image: {
      p1: "assets/images/socrat_p1.png",
      p2: "assets/images/socrat_p2.png",
    },
    icon: "assets/images/socra_icon.png",
    skill: {
      ko: "무지의 자각: 게임당 두 번, 사유 시간에 참 명제 목록에서 공리와 승리조건이 아닌 명제를 하나 선택할 수 있습니다. 그 명제는 다음 라운드동안 양 플레이어 모두 논증의 전제로 사용할 수 없습니다.",
      en: "Awareness of Ignorance: Twice per game, during Thinking Time, you may choose one proposition from the list of true propositions that is not an axiom or a win condition. For the next round, that proposition cannot be used as a premise by either player.",
    },
  },
  plato: {
    id: "plato",
    name: { ko: "플라톤", en: "Plato" },
    cardText: { ko: "플라톤은", en: "Plato" },
    image: {
      p1: "assets/images/pl_p1.png",
      p2: "assets/images/pl_p2.png",
    },
    icon: "assets/images/pl_icon.png",
    skill: {
      ko: "이데아 회상: 게임당 한 번, 사유 시간에 모순이 발생하지 않는 선에서 '어떤 A는 B다'에서 '모든 A는 B다'를 도출할 수 있습니다.",
      en: "Recollection of Forms: Once per game, during Thinking Time, you can derive 'Every A is B' from 'Some A is B' as long as no contradiction arises.",
    },
  },
  descartes: {
    id: "descartes",
    name: { ko: "르네 데카르트", en: "René Descartes" },
    cardText: { ko: "데카르트는", en: "Descartes" },
    image: {
      p1: "assets/images/de_p1.png",
      p2: "assets/images/de_p2.png",
    },
    icon: "assets/images/de_icon.png",
    skill: {
      ko: "방법적 회의: 게임당 한 번, 사유 시간에 참 명제 목록에서 공리와 승리조건이 아닌 명제 하나를 삭제할 수 있습니다.",
      en: "Methodic Doubt: Once per game, during Thinking Time, you may delete one proposition from the list of true propositions that is not an axiom or a win condition.",
    },
  },
  hume: {
    id: "hume",
    name: { ko: "데이비드 흄", en: "David Hume" },
    cardText: { ko: "흄은", en: "Hume" },
    image: {
      p1: "assets/images/hu_p1.png",
      p2: "assets/images/hu_p2.png",
    },
    icon: "assets/images/hu_icon.png",
    skill: {
      ko: "귀납의 문제: 게임당 두 번, 사유 시간에 '모든 A는 B다' 하나를 '어떤 A는 B다'로 교체할 수 있습니다.",
      en: "Problem of Induction: Twice per game, during Thinking Time, you may replace an 'Every A is B' proposition with 'Some A is B'.",
    },
  },
  kant: {
    id: "kant",
    name: { ko: "임마누엘 칸트", en: "Immanuel Kant" },
    cardText: { ko: "칸트는", en: "Kant" },
    image: {
      p1: "assets/images/ka_p1.png",
      p2: "assets/images/ka_p2.png",
    },
    icon: "assets/images/ka_icon.png",
    skill: {
      ko: "선험적 종합판단: 게임당 한 번, 사유 시간에 사용할 수 있습니다. 모순이 발생하지 않는 선에서, 손에 남아있는 카드로 명제 하나를 만들어 참 명제 목록에 추가합니다.",
      en: "Synthetic A Priori Judgment: Once per game, during Thinking Time, you may create one proposition using cards remaining in your hand and add it to the list of true propositions, as long as no contradiction arises.",
    },
  },
  nietzsche: {
    id: "nietzsche",
    name: { ko: "프리드리히 니체", en: "Friedrich Nietzsche" },
    cardText: { ko: "니체는", en: "Nietzsche" },
    image: {
      p1: "assets/images/ni_p1.png",
      p2: "assets/images/ni_p2.png",
    },
    icon: "assets/images/ni_icon.png",
    skill: {
      ko: "영원 회귀: 참 명제 목록에 존재하는 명제를 무제한으로 중복해서 완성할 수 있습니다.",
      en: "Eternal Recurrence: You can complete propositions that already exist in the list of true propositions an unlimited number of times.",
    },
  },
  marx: {
    id: "marx",
    name: { ko: "카를 마르크스", en: "Karl Marx" },
    cardText: { ko: "마르크스는", en: "Marx" },
    image: {
      p1: "assets/images/ma_p1.png",
      p2: "assets/images/ma_p2.png",
    },
    icon: "assets/images/ma_icon.png",
    skill: {
      ko: "프롤레타리아 혁명: 게임 시작 시, 양 플레이어의 손에 '브루주아는' 개체 카드가 추가되며, 참 명제 목록에 '((모든 브루주아는 악하다) 라면 (혁명이 일어난다)) 그리고 ((혁명이 일어난다) 라면 (마르크스는 승리한다))'라는 승리 조건 명제와 브루주아에 관한 공리가 추가됩니다.",
      en: "Proletarian Revolution: At the start of the game, a 'Bourgeois' entity card is added to both players' hands. A victory condition, '((Every Bourgeois is evil) then (a revolution occurs)) and ((a revolution occurs) then (Marx wins))' and axioms about Bourgeois are added to the list of true propositions.",
    },
  },
  wittgenstein: {
    id: "wittgenstein",
    name: { ko: "루트비히 비트겐슈타인", en: "Ludwig Wittgenstein" },
    cardText: { ko: "비트겐슈타인은", en: "Wittgenstein" },
    image: {
      p1: "assets/images/wi_p1.png",
      p2: "assets/images/wi_p2.png",
    },
    icon: "assets/images/wi_icon.png",
    skill: {
      ko: "사다리 걷어차기: 게임당 한 번, 사유 시간에 사용할 수 있습니다. 추론 규칙들을 사용해 하나의 정리를 도출하고, 사용한 전제들중 공리와 승리 조건을 제외한 명제를 모두 삭제합니다.",
      en: "Kicking Away the Ladder: Once per game, during Thinking Time, you may derive one theorem using inference rules. Then, delete all premises used in the derivation, except for axioms and win conditions.",
    },
  },
  kuhn: {
    id: "kuhn",
    name: { ko: "토마스 쿤", en: "Thomas Kuhn" },
    cardText: { ko: "쿤은", en: "Kuhn" },
    image: {
      p1: "assets/images/ku_p1.png",
      p2: "assets/images/ku_p2.png",
    },
    icon: "assets/images/ku_icon.png",
    skill: {
      ko: "패러다임 전환: 게임당 한 번, 플레이어들이 카드를 놓아 생성한 참 명제가 15개 이상일 때 사용할 수 있습니다. 사유시간에 '모든 A는 선하다/악하다' 혹은 '모든 A는 지혜롭다/어리석다' 명제 하나의 술어를 반대로 바꾸고, 그 명제와 모순되는 명제를 모두 삭제합니다.",
      en: "Paradigm Shift: Once per game, when 15 or more true propositions have been created by players, during Thinking Time, you may take a universal proposition like 'Every A is good' or 'Every A is wise', change its predicate to the opposite (e.g., 'is evil' or 'is foolish'), and then delete all propositions that contradict this new paradigm.",
    },
  },
  derrida: {
    id: "derrida",
    name: { ko: "자크 데리다", en: "Jacques Derrida" },
    cardText: { ko: "데리다는", en: "Derrida" },
    image: {
      p1: "assets/images/der_p1.png",
      p2: "assets/images/der_p2.png",
    },
    icon: "assets/images/der_icon.png",
    skill: {
      ko: "해체: 게임당 한 번, 사유 시간에 사용할 수 있습니다. 공리와 승리조건이 아니며, 연결사로 이어진 명제 하나를 모순이 일어나지 않는 선에서 최소단위 명제 두 개로 분해할 수 있습니다.",
      en: "Deconstruction: Once per game, during Thinking Time, you may choose one non-axiom, non-victory-condition proposition connected by a logical operator, and decompose it into two atomic propositions, as long as no contradiction aeises.",
    },
  },
};

// --- GLOBAL STATE ---

document.getElementById("vs-ai-test-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  isTestMode = true;
  audioManager.fadeOut("main-menu");
  audioManager.play("character-select");
  startCharacterSelection("AI");
});
let bgmVolume = 0.4; // 배경음악 기본 볼륨 40%
let sfxVolume = 0.6; // 효과음 기본 볼륨 100%
let currentLang;
let currentPuzzleLevel = null;
let isPlayerAI = { A: false, B: false };
let fullDeck, cardTypeOrder;
let playerA_Hand = [],
  playerB_Hand = [];
let truePropositions = [];
let parsedAxioms = [];
let currentProposition = [];
let currentPlayer = "A";
let propositionStarter = "A";
let gameIsOver = false;
let currentRound = 1;
let isThinkingTime = false;
let lastPropositionMaker = null;
let internalTruthSet = [];
let derivedPropositionsInModal = [];
let currentAssumption = null;
let lastCardPlayer = null;
let cardsPlayedThisTurn = { A: 0, B: 0 };
let eurekaUsedInRound = { A: false, B: false };
let thinkingTimeTurn = null;
let abilityUsedState = {};
let socratesDisabledProps = [];
let kantProposition = [];

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

let currentAxioms = []; // 현재 게임의 공리를 저장할 배열

let selectionMode = null;
let characterSelectionTurn = null;
let tempSelections = { p1: null, p2: null };
let humanPlayerId = null;

let aiTimeoutId = null;

function parseTokensToProposition(tokens) {
  if (!tokens || tokens.length === 0) return null;
  if (tokens[0] === "(" && tokens[tokens.length - 1] === ")") {
    let balance = 0;
    let isOuterParens = true;
    for (let i = 0; i < tokens.length - 1; i++) {
      if (tokens[i] === "(") balance++;
      else if (tokens[i] === ")") balance--;
      if (balance === 0) {
        isOuterParens = false;
        break;
      }
    }
    if (isOuterParens) {
      return parseTokensToProposition(tokens.slice(1, -1));
    }
  }
  let balance = 0;
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (tokens[i] === ")") balance++;
    else if (tokens[i] === "(") balance--;
    if (balance === 0 && tokens[i] === currentLang.keywords.if) {
      const left = parseTokensToProposition(tokens.slice(0, i));
      const right = parseTokensToProposition(tokens.slice(i + 1));
      if (!left || !right) return null;
      return { type: "conditional", left: left, right: right };
    }
  }
  balance = 0;
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (tokens[i] === ")") balance++;
    else if (tokens[i] === "(") balance--;
    if (balance === 0 && tokens[i] === currentLang.keywords.or) {
      const left = parseTokensToProposition(tokens.slice(0, i));
      const right = parseTokensToProposition(tokens.slice(i + 1));
      if (!left || !right) return null;
      return { type: "disjunction", left: left, right: right };
    }
  }
  balance = 0;
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (tokens[i] === ")") balance++;
    else if (tokens[i] === "(") balance--;
    if (balance === 0 && tokens[i] === currentLang.keywords.and) {
      const left = parseTokensToProposition(tokens.slice(0, i));
      const right = parseTokensToProposition(tokens.slice(i + 1));
      if (!left || !right) return null;
      return { type: "conjunction", left: left, right: right };
    }
  }
  if (
    tokens.length > 1 &&
    tokens[tokens.length - 1] === currentLang.keywords.not
  ) {
    const prop = parseTokensToProposition(tokens.slice(0, -1));
    if (!prop) return null;
    return { type: "negation", proposition: prop };
  }
  const cardInfo = tokens.map((t) => fullDeck.find((c) => c.text === t));
  if (cardInfo.some((c) => !c)) {
    const [properNoun, quantifier, entity, predicate] = currentLang.cardTypes;
    const types = tokens.map((t) => {
      const card = fullDeck.find((c) => c.text === t);
      return card ? card.type : null;
    });
    if (types.length === 2 && types[0] === properNoun) {
      return { type: "atomic", subject: tokens[0], predicate: tokens[1] };
    }
    if (types.length === 3 && types[0] === quantifier) {
      return {
        type:
          tokens[0] === currentLang.keywords.universal_q
            ? "universal"
            : "existential",
        entity: tokens[1],
        predicate: tokens[2],
      };
    }
    return null;
  }
  const types = cardInfo.map((c) => c.type);
  const [properNoun, quantifier, entity, predicate] = currentLang.cardTypes;
  if (types.length === 2 && types[0] === properNoun) {
    return { type: "atomic", subject: tokens[0], predicate: tokens[1] };
  }
  if (types.length === 3 && types[0] === quantifier) {
    return {
      type:
        tokens[0] === currentLang.keywords.universal_q
          ? "universal"
          : "existential",
      entity: tokens[1],
      predicate: tokens[2],
    };
  }
  return null;
}

function parsePropositionFromString(str) {
  const allKeywords = [...fullDeck.map((c) => c.text), "(", ")"].sort(
    (a, b) => b.length - a.length
  );
  let tempStr = str.trim();
  const tokens = [];
  while (tempStr.length > 0) {
    const foundToken = allKeywords.find((k) => tempStr.startsWith(k));
    if (foundToken) {
      tokens.push(foundToken);
      tempStr = tempStr.substring(foundToken.length).trim();
    } else {
      console.error(
        "Tokenizer failed for string:",
        str,
        "at substring:",
        tempStr
      );
      return null;
    }
  }
  return parseTokensToProposition(tokens);
}

function parsePropositionFromCards(propInfoArray) {
  if (!propInfoArray || propInfoArray.length === 0) return null;
  const tokens = propInfoArray.map((info) => info.card.text);
  return parseTokensToProposition(tokens);
}

function arePropositionsEqual(prop1, prop2) {
  if (!prop1 || !prop2 || prop1.type !== prop2.type) return false;
  switch (prop1.type) {
    case "atomic":
      return (
        prop1.subject === prop2.subject && prop1.predicate === prop2.predicate
      );
    case "universal":
    case "existential":
      return (
        prop1.entity === prop2.entity && prop1.predicate === prop2.predicate
      );
    case "negation":
      return arePropositionsEqual(prop1.proposition, prop2.proposition);
    case "conjunction":
    case "disjunction":
    case "conditional":
      return (
        arePropositionsEqual(prop1.left, prop2.left) &&
        arePropositionsEqual(prop1.right, prop2.right)
      );
    default:
      return false;
  }
}

function propositionToText(prop) {
  if (!prop) return "";
  switch (prop.type) {
    case "atomic":
      return `${prop.subject} ${prop.predicate}`;
    case "universal":
      return `${currentLang.keywords.universal_q} ${prop.entity} ${prop.predicate}`;
    case "existential":
      return `${currentLang.keywords.existential_q} ${prop.entity} ${prop.predicate}`;
    case "negation":
      return `~(${propositionToText(prop.proposition)})`;
    case "conjunction":
      return `(${propositionToText(prop.left)}) ∧ (${propositionToText(
        prop.right
      )})`;
    case "disjunction":
      return `(${propositionToText(prop.left)}) ∨ (${propositionToText(
        prop.right
      )})`;
    case "conditional":
      return `(${propositionToText(prop.left)}) → (${propositionToText(
        prop.right
      )})`;
    default:
      return "Unknown Proposition";
  }
}

function propositionToNaturalText(prop) {
  if (!prop) return "";
  switch (prop.type) {
    case "atomic":
      return `${prop.subject} ${prop.predicate}`;
    case "universal":
      return `${currentLang.keywords.universal_q} ${prop.entity} ${prop.predicate}`;
    case "existential":
      return `${currentLang.keywords.existential_q} ${prop.entity} ${prop.predicate}`;
    case "negation": {
      const innerProp = prop.proposition;
      const innerText = propositionToNaturalText(innerProp);
      const notKeyword = `<span class="op-not">${currentLang.keywords.not}</span>`;

      // 핵심 수정 1: 부정 대상이 단일 명제(atomic, universal, existential)일 때만 괄호로 감쌉니다.
      if (
        innerProp.type === "atomic" ||
        innerProp.type === "universal" ||
        innerProp.type === "existential"
      ) {
        return `(${innerText}) ${notKeyword}`;
      }

      // 그 외 (이미 괄호가 있는 복합 명제나 또 다른 부정문)는 그대로 텍스트를 이어붙입니다.
      return `${innerText} ${notKeyword}`;
    }
    case "conjunction": {
      const leftProp = prop.left;
      const rightProp = prop.right;
      let leftText = propositionToNaturalText(leftProp);
      let rightText = propositionToNaturalText(rightProp);

      // 핵심 수정 2: 자식 노드가 부정문이 아닐 경우에만 괄호로 감쌉니다.
      if (leftProp.type !== "negation") {
        leftText = `(${leftText})`;
      }
      if (rightProp.type !== "negation") {
        rightText = `(${rightText})`;
      }

      const andKeyword = `<span class="op-and">${currentLang.keywords.and}</span>`;
      return `${leftText} ${andKeyword} ${rightText}`;
    }
    case "disjunction": {
      const leftProp = prop.left;
      const rightProp = prop.right;
      let leftText = propositionToNaturalText(leftProp);
      let rightText = propositionToNaturalText(rightProp);

      // 핵심 수정 2: 자식 노드가 부정문이 아닐 경우에만 괄호로 감쌉니다.
      if (leftProp.type !== "negation") {
        leftText = `(${leftText})`;
      }
      if (rightProp.type !== "negation") {
        rightText = `(${rightText})`;
      }

      const orKeyword = `<span class="op-or">${currentLang.keywords.or}</span>`;
      return `${leftText} ${orKeyword} ${rightText}`;
    }
    case "conditional": {
      const leftProp = prop.left;
      const rightProp = prop.right;
      let leftText = propositionToNaturalText(leftProp);
      let rightText = propositionToNaturalText(rightProp);

      // 핵심 수정 2: 자식 노드가 부정문이 아닐 경우에만 괄호로 감쌉니다.
      if (leftProp.type !== "negation") {
        leftText = `(${leftText})`;
      }
      if (rightProp.type !== "negation") {
        rightText = `(${rightText})`;
      }

      const ifKeyword = `<span class="op-if">${currentLang.keywords.if}</span>`;
      return `${leftText} ${ifKeyword} ${rightText}`;
    }
    default:
      return "Unknown Proposition";
  }
}

function propositionToPlainText(prop) {
  if (!prop) return "";
  switch (prop.type) {
    case "atomic":
      return `${prop.subject} ${prop.predicate}`;
    case "universal":
      return `${currentLang.keywords.universal_q} ${prop.entity} ${prop.predicate}`;
    case "existential":
      return `${currentLang.keywords.existential_q} ${prop.entity} ${prop.predicate}`;

    case "negation": {
      const innerProp = prop.proposition;
      const innerText = propositionToPlainText(innerProp); // 재귀 호출 시에도 새 함수 사용
      const notKeyword = currentLang.keywords.not;
      if (
        innerProp.type === "conjunction" ||
        innerProp.type === "disjunction" ||
        innerProp.type === "conditional"
      ) {
        return `(${innerText}) ${notKeyword}`;
      }
      return `${innerText} ${notKeyword}`;
    }

    case "conjunction": {
      let leftText;
      if (prop.left.type === "negation") {
        const innerText = propositionToPlainText(prop.left.proposition);
        leftText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        leftText = `(${propositionToPlainText(prop.left)})`;
      }

      let rightText;
      if (prop.right.type === "negation") {
        const innerText = propositionToPlainText(prop.right.proposition);
        rightText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        rightText = `(${propositionToPlainText(prop.right)})`;
      }

      const andKeyword = currentLang.keywords.and;
      return `${leftText} ${andKeyword} ${rightText}`;
    }

    case "disjunction": {
      let leftText;
      if (prop.left.type === "negation") {
        const innerText = propositionToPlainText(prop.left.proposition);
        leftText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        leftText = `(${propositionToPlainText(prop.left)})`;
      }

      let rightText;
      if (prop.right.type === "negation") {
        const innerText = propositionToPlainText(prop.right.proposition);
        rightText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        rightText = `(${propositionToPlainText(prop.right)})`;
      }

      const orKeyword = currentLang.keywords.or;
      return `${leftText} ${orKeyword} ${rightText}`;
    }

    case "conditional": {
      let leftText;
      if (prop.left.type === "negation") {
        const innerText = propositionToPlainText(prop.left.proposition);
        leftText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        leftText = `(${propositionToPlainText(prop.left)})`;
      }

      let rightText;
      if (prop.right.type === "negation") {
        const innerText = propositionToPlainText(prop.right.proposition);
        rightText = `(${innerText}) ${currentLang.keywords.not}`;
      } else {
        rightText = `(${propositionToPlainText(prop.right)})`;
      }

      const ifKeyword = currentLang.keywords.if;
      return `${leftText} ${ifKeyword} ${rightText}`;
    }

    default:
      return "Unknown Proposition";
  }
}

function initializeGame(lang) {
  currentLang = TEXTS[lang];
  document.documentElement.lang = currentLang.langCode;
  document.title = currentLang.ui.title;

  TEXTS.ko.tutorial = TUTORIAL_TEXTS.ko;
  TEXTS.en.tutorial = TUTORIAL_TEXTS.en;

  fullDeck = currentLang.cards;
  cardTypeOrder = currentLang.cardTypes;

  document.getElementById("language-modal").classList.remove("visible");
  setupUI();
  setupModeDescriptionHovers();
  loadSettings();
  showMainMenu();
  addGlobalSoundEvents();
}

function showMainMenu() {
  // 새로운 오디오 시스템을 사용하도록 수정
  audioManager.stopAll();
  audioManager.play("main-menu"); // 볼륨 60%로 메인 메뉴 음악 재생

  document.getElementById("thinking-time-controls").classList.add("hidden");
  document.getElementById("character-select-indicator").classList.add("hidden");
  document.getElementById("container").classList.add("ready");
  document.querySelector(".main-center-bg").classList.remove("hidden");
  document.getElementById("credits-btn").classList.remove("hidden");
  updateMainMenuBtnVisibility();
  updateMainCenterVisibility();
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
document.getElementById("vs-ai-battle-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  gameMode = "AI_VS_AI";
  audioManager.fadeOut("main-menu");
  audioManager.play("character-select");
  startCharacterSelection(gameMode);
});

document.getElementById("exit-game-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  showConfirm(currentLang.alerts.confirmExit, () => {
    // '예'를 눌렀을 때의 동작
    window.close();
  });
});

function generateAxioms(subjectA, subjectB, langData, isMarxInGame = false) {
  const templates = langData.axiom_templates;
  const axiomGroups = {
    identity: [...templates.identity],
    subjectOpposition: [],
    quantifierOpposition: [],
  };

  // 마르크스 정체성 공리 추가
  if (isMarxInGame) {
    if (langData.langCode === "ko") {
      axiomGroups.identity.push("어떤 브루주아는 브루주아이다");
      axiomGroups.identity.push("모든 브루주아는 브루주아이다");
    } else {
      axiomGroups.identity.push("Some Bourgeois is a Bourgeois");
      axiomGroups.identity.push("Every Bourgeois is a Bourgeois");
    }
  }

  // 개체별 속성 대립 공리들
  templates.subject_good_evil.forEach((template) => {
    axiomGroups.subjectOpposition.push(template.replaceAll("{S}", subjectA));
  });
  templates.subject_wise_foolish.forEach((template) => {
    axiomGroups.subjectOpposition.push(template.replaceAll("{S}", subjectA));
  });
  templates.subject_good_evil.forEach((template) => {
    axiomGroups.subjectOpposition.push(template.replaceAll("{S}", subjectB));
  });
  templates.subject_wise_foolish.forEach((template) => {
    axiomGroups.subjectOpposition.push(template.replaceAll("{S}", subjectB));
  });

  // 양화사별 속성 대립 공리들
  axiomGroups.quantifierOpposition.push(...templates.bird_good_evil_forward);
  axiomGroups.quantifierOpposition.push(...templates.bird_good_evil_reverse);
  axiomGroups.quantifierOpposition.push(...templates.fish_good_evil_forward);
  axiomGroups.quantifierOpposition.push(...templates.fish_good_evil_reverse);
  axiomGroups.quantifierOpposition.push(...templates.dog_good_evil_forward);
  axiomGroups.quantifierOpposition.push(...templates.dog_good_evil_reverse);

  if (isMarxInGame) {
    let marxBourgeoisAxioms = [];
    if (langData.langCode === "ko") {
      marxBourgeoisAxioms = [
        // 속성의 대립 (선/악)
        "모든 브루주아는 선하다 라면 어떤 브루주아는 악하다 는 거짓이다",
        "모든 브루주아는 악하다 라면 어떤 브루주아는 선하다 는 거짓이다",
        "어떤 브루주아는 선하다 는 거짓이다 라면 모든 브루주아는 악하다",
        "어떤 브루주아는 악하다 는 거짓이다 라면 모든 브루주아는 선하다",
        // 속성의 대립 (지혜/어리석음)
        "모든 브루주아는 지혜롭다 라면 어떤 브루주아는 어리석다 는 거짓이다",
        "모든 브루주아는 어리석다 라면 어떤 브루주아는 지혜롭다 는 거짓이다",
        "어떤 브루주아는 지혜롭다 는 거짓이다 라면 모든 브루주아는 어리석다",
        "어떤 브루주아는 어리석다 는 거짓이다 라면 모든 브루주아는 지혜롭다",
      ];
    } else {
      // langCode === 'en'
      marxBourgeoisAxioms = [
        // Opposition of Predicates (good/evil)
        "Every Bourgeois is good then Some Bourgeois is evil is false",
        "Every Bourgeois is evil then Some Bourgeois is good is false",
        "Some Bourgeois is good is false then Every Bourgeois is evil",
        "Some Bourgeois is evil is false then Every Bourgeois is good",
        // Opposition of Predicates (wise/foolish)
        "Every Bourgeois is wise then Some Bourgeois is foolish is false",
        "Every Bourgeois is foolish then Some Bourgeois is wise is false",
        "Some Bourgeois is wise is false then Every Bourgeois is foolish",
        "Some Bourgeois is foolish is false then Every Bourgeois is wise",
      ];
    }
    axiomGroups.quantifierOpposition.push(...marxBourgeoisAxioms);
  }

  // 하위 호환성을 위해 평면적인 배열로 반환
  const flatAxioms = [
    ...axiomGroups.identity,
    ...axiomGroups.subjectOpposition,
    ...axiomGroups.quantifierOpposition,
  ];

  // 그룹 정보를 속성으로 추가
  flatAxioms.groups = axiomGroups;

  return flatAxioms;
}
function getTopicParticle(name) {
  const lastChar = name.charCodeAt(name.length - 1);
  if (lastChar < 0xac00 || lastChar > 0xd7a3) {
    return "는"; // 한글이 아니면 '는'을 기본값으로 반환
  }
  // 받침 유무 확인: (글자코드 - 0xAC00) % 28
  const hasJongseong = (lastChar - 0xac00) % 28 !== 0;
  return hasJongseong ? "은" : "는";
}

function setupGame(selectedCharacters, testConfig = null) {
  playerA_Data = PHILOSOPHERS[selectedCharacters.p1];
  playerB_Data = PHILOSOPHERS[selectedCharacters.p2];
  truePropositions = []; // 게임 시작 시 참 명제 목록 초기화

  const p1_id = selectedCharacters.p1;
  const p2_id = selectedCharacters.p2;
  let p1_card_obj, p2_card_obj;
  let subjectA, subjectB;

  subjectA = playerA_Data.cardText[currentLang.langCode];
  subjectB = playerB_Data.cardText[currentLang.langCode];

  // 1. 미러전(동일 철학자 선택) 처리
  if (p1_id === p2_id) {
    if (currentLang.langCode === "ko") {
      const fullName = playerA_Data.name.ko;
      const nameParts = fullName.split(" ");
      const lastName = nameParts[nameParts.length - 1];
      const particle = getTopicParticle(lastName);
      subjectA = `백색 ${lastName}${particle}`;
      subjectB = `흑색 ${lastName}${particle}`;
    } else {
      const fullName = playerA_Data.name.en;
      const nameParts = fullName.split(" ");
      const lastName = nameParts[nameParts.length - 1];
      subjectA = `White ${lastName}`;
      subjectB = `Black ${lastName}`;
    }
    document.getElementById("player-a-title").innerHTML = `⚪️ ${
      playerA_Data.name[currentLang.langCode]
    }(백)`;
    document.getElementById("player-b-title").innerHTML = `⚫️ ${
      playerB_Data.name[currentLang.langCode]
    }(흑)`;
  } else {
    document.getElementById("player-a-title").innerHTML = `⚪️ ${
      playerA_Data.name[currentLang.langCode]
    }`;
    document.getElementById("player-b-title").innerHTML = `⚫️ ${
      playerB_Data.name[currentLang.langCode]
    }`;
  }

  const properNounType =
    currentLang.langCode === "ko" ? "고유명사" : "Proper Noun";
  p1_card_obj = { type: properNounType, text: subjectA };
  p2_card_obj = { type: properNounType, text: subjectB };

  // 2. 게임 덱 구성 (마르크스 카드 포함)
  const masterDeck = currentLang.cards;
  const allPhilosopherCardTexts = Object.values(PHILOSOPHERS).map(
    (p) => p.cardText[currentLang.langCode]
  );
  const baseDeck = masterDeck.filter(
    (card) => !allPhilosopherCardTexts.includes(card.text)
  );

  let currentGameDeck = [...baseDeck, p1_card_obj, p2_card_obj];

  const isMarxInGame = p1_id === "marx" || p2_id === "marx";
  const bourgeoisCard = {
    type: currentLang.langCode === "ko" ? "개체" : "Entity",
    text: currentLang.langCode === "ko" ? "브루주아는" : "Bourgeois",
  };
  const revolutionSubjectCard = {
    type: currentLang.langCode === "ko" ? "고유명사" : "Proper Noun",
    text: currentLang.langCode === "ko" ? "혁명이" : "A revolution",
  };
  const revolutionPredicateCard = {
    type: currentLang.langCode === "ko" ? "서술어" : "Predicate",
    text: currentLang.langCode === "ko" ? "일어난다" : "occurs",
  };

  if (isMarxInGame) {
    currentGameDeck.push(
      bourgeoisCard,
      revolutionSubjectCard,
      revolutionPredicateCard
    );
  }

  fullDeck = currentGameDeck;

  // 3. 손패 분배 (마르크스 플레이 불가능 카드 제거 포함)
  if (testConfig && testConfig.handA) {
    const handATexts = testConfig.handA.split(",").map((s) => s.trim());
    playerA_Hand = handATexts
      .map((text) => fullDeck.find((c) => c.text === text))
      .filter(Boolean);
  } else {
    const nonPlayerCards = ["승리한다", "wins"];
    playerA_Hand = JSON.parse(
      JSON.stringify(fullDeck.filter((c) => !nonPlayerCards.includes(c.text)))
    );
  }
  if (testConfig && testConfig.handB) {
    const handBTexts = testConfig.handB.split(",").map((s) => s.trim());
    playerB_Hand = handBTexts
      .map((text) => fullDeck.find((c) => c.text === text))
      .filter(Boolean);
  } else {
    const nonPlayerCards = ["승리한다", "wins"];
    playerB_Hand = JSON.parse(
      JSON.stringify(fullDeck.filter((c) => !nonPlayerCards.includes(c.text)))
    );
  }

  if (isMarxInGame) {
    const unplayableCardTexts = [
      revolutionSubjectCard.text,
      revolutionPredicateCard.text,
    ];
    playerA_Hand = playerA_Hand.filter(
      (card) => !unplayableCardTexts.includes(card.text)
    );
    playerB_Hand = playerB_Hand.filter(
      (card) => !unplayableCardTexts.includes(card.text)
    );
  }

  // 4. 공리 및 승리 조건 설정
  currentAxioms = generateAxioms(subjectA, subjectB, currentLang, isMarxInGame);
  parsedAxioms = currentAxioms
    .map((str) => ({
      type: "axiom",
      proposition: parsePropositionFromString(str),
    }))
    .filter((a) => a.proposition);
  internalTruthSet = parsedAxioms.map((a) => a.proposition);

  const { if: ifKeyword, wins, and } = currentLang.keywords;

  const predicateA =
    testConfig?.victoryA ||
    currentLang.victoryPredicates[
      Math.floor(Math.random() * currentLang.victoryPredicates.length)
    ];
  const victoryTextA = `((${subjectA} ${predicateA}) ${ifKeyword} (${subjectA} ${wins})) ${and} ((${subjectA} ${wins}) ${ifKeyword} (${subjectA} ${predicateA}))`;
  const parsedVictoryA = parsePropositionFromString(victoryTextA);
  truePropositions.push({
    type: "victory",
    text: victoryTextA,
    owner: "A",
    proposition: parsedVictoryA,
    ultimate_target: {
      type: "atomic",
      subject: subjectA,
      predicate: wins,
    },
    core_goal: {
      type: "atomic",
      subject: subjectA,
      predicate: predicateA,
    },
  });
  if (parsedVictoryA) internalTruthSet.push(parsedVictoryA);

  const predicateB =
    testConfig?.victoryB ||
    currentLang.victoryPredicates[
      Math.floor(Math.random() * currentLang.victoryPredicates.length)
    ];
  const victoryTextB = `((${subjectB} ${predicateB}) ${ifKeyword} (${subjectB} ${wins})) ${and} ((${subjectB} ${wins}) ${ifKeyword} (${subjectB} ${predicateB}))`;
  const parsedVictoryB = parsePropositionFromString(victoryTextB);
  truePropositions.push({
    type: "victory",
    text: victoryTextB,
    owner: "B",
    proposition: parsedVictoryB,
    ultimate_target: {
      type: "atomic",
      subject: subjectB,
      predicate: wins,
    },
    core_goal: {
      type: "atomic",
      subject: subjectB,
      predicate: predicateB,
    },
  });
  if (parsedVictoryB) internalTruthSet.push(parsedVictoryB);

  // 5. 마르크스 특별 승리 조건 추가
  const setupMarxVictory = (player, subject) => {
    const revolutionPropText = `${revolutionSubjectCard.text} ${revolutionPredicateCard.text}`;
    const firstClause = `(${currentLang.keywords.universal_q} ${
      bourgeoisCard.text
    } ${currentLang.langCode === "ko" ? "악하다" : "is evil"})`;
    const secondClause = `(${revolutionPropText})`;
    const thirdClause = `(${subject} ${wins})`;
    const marxVictoryString = `(${firstClause} ${ifKeyword} ${secondClause}) ${and} (${secondClause} ${ifKeyword} ${thirdClause})`;
    const parsedMarxVictory = parsePropositionFromString(marxVictoryString);

    if (parsedMarxVictory) {
      truePropositions.push({
        owner: player,
        type: "victory",
        source: "marx_revolution",
        text: propositionToPlainText(parsedMarxVictory),
        proposition: parsedMarxVictory,
        ultimate_target: {
          type: "atomic",
          subject: subject,
          predicate: wins,
        },
        core_goal: {
          type: "atomic",
          subject: revolutionSubjectCard.text,
          predicate: revolutionPredicateCard.text,
        },
      });
      internalTruthSet.push(parsedMarxVictory);
    } else {
      console.error(
        "CRITICAL: Failed to parse Marx's victory string.",
        marxVictoryString
      );
    }
  };

  if (p1_id === "marx") {
    setupMarxVictory("A", subjectA);
  }
  if (p2_id === "marx") {
    setupMarxVictory("B", subjectB);
  }

  // 6. 테스트 모드 초기 참 명제 처리
  if (testConfig && testConfig.trueProps) {
    const propStrings = testConfig.trueProps
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean);
    propStrings.forEach((str) => {
      const parsed = parsePropositionFromString(str);
      if (parsed) {
        const verificationResult = verifyAndExpandTruths(
          parsed,
          internalTruthSet
        );
        if (verificationResult.success) {
          truePropositions.push({
            propId: `prop_${Date.now()}_${Math.random()}`,
            type: "user-made",
            round: 0,
            proposition: parsed,
            original_cards: [],
          });
          internalTruthSet = verificationResult.expandedSet;
        } else {
          alert(
            `입력한 초기 참 명제 "${str}"가 기존 공리 또는 다른 명제와 모순되어 추가할 수 없습니다.`
          );
        }
      } else {
        alert(`입력한 초기 참 명제 "${str}"의 형식이 잘못되었습니다.`);
      }
    });
  }

  // 7. 초상화 및 능력 사용 상태 초기화
  const portraitA_El = document.getElementById("player-a-portrait");
  if (portraitA_El) {
    portraitA_El.style.backgroundImage = `url('${playerA_Data.image.p1}')`;
  }
  const portraitB_El = document.getElementById("player-b-portrait");
  if (portraitB_El) {
    portraitB_El.style.backgroundImage = `url('${playerB_Data.image.p2}')`;
  }

  abilityUsedState = {};

  // 플레이어 A의 능력 상태 설정 (이미 선언된 p1_id 변수 사용)
  if (p1_id === "hume" || p1_id === "socrates") {
    abilityUsedState["A"] = { usedCount: 0, maxUses: 2 };
  } else {
    abilityUsedState["A"] = { used: false };
  }

  // 플레이어 B의 능력 상태 설정 (이미 선언된 p2_id 변수 사용)
  if (p2_id === "hume" || p2_id === "socrates") {
    abilityUsedState["B"] = { usedCount: 0, maxUses: 2 };
  } else {
    abilityUsedState["B"] = { used: false };
  }

  render();
  checkNextTurn();
}

function resetGame(selectedCharacters, testConfig = null) {
  audioManager.stop("main-menu");
  audioManager.play("game-play");

  // 만약 선택된 캐릭터 정보가 없다면, 기본값으로 소크라테스와 플라톤을 설정
  if (!selectedCharacters) {
    selectedCharacters = { p1: "socrates", p2: "plato" };
  }

  clearAllAITimeouts();

  socratesDisabledProps = []; // 소크라테스 능력으로 비활성화된 명제 목록 초기화

  playerA_Hand = [];
  playerB_Hand = [];
  truePropositions = [];
  currentProposition = [];
  currentPlayer = "A";
  gameIsOver = false;
  currentRound = 1;
  isThinkingTime = false;

  eurekaUsedInRound = { A: false, B: false };

  cardsPlayedThisTurn = { A: 0, B: 0 };

  document.getElementById("thinking-time-controls").style.display = "none";
  document.getElementById("status").innerHTML = "";

  setupGame(selectedCharacters, testConfig);
}
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

  document.getElementById("puzzle-level-select-modal").classList.add("visible");
});

document
  .getElementById("close-puzzle-modal-btn")
  .addEventListener("click", () => {
    document
      .getElementById("puzzle-level-select-modal")
      .classList.remove("visible");
    showMainMenu();
  });

// --- CHARACTER SELECTION LOGIC (NEW SECTION) ---

function addGlobalSoundEvents() {
  // body에 단 하나의 클릭 이벤트 리스너를 추가합니다 (이벤트 위임 방식).
  document.body.addEventListener("click", (event) => {
    // 클릭된 요소 또는 그 부모 중에서 우리가 소리를 내고 싶은 대상을 찾습니다.
    const targetElement = event.target.closest("button");

    // 대상이 없으면 아무것도 하지 않습니다.
    if (!targetElement) {
      return;
    }

    // 비활성화된 요소나 AI의 손패에서는 소리를 재생하지 않습니다.
    if (targetElement.disabled || targetElement.classList.contains("ai-hand")) {
      return;
    }

    // 모든 조건을 통과하면 사운드를 재생합니다.
    audioManager.playSfx("hover");
  });
}

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

  updatePlayerDisplay("p1", null);
  updatePlayerDisplay("p2", null);
  document.getElementById("p1-ready-overlay").classList.remove("visible");
  document.getElementById("p2-ready-overlay").classList.remove("visible");

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

// --- GAME FLOW & TURN MANAGEMENT ---
function modusPonens(p1, p2) {
  if (!p1 || !p2) return null;
  if (p2.type === "conditional" && arePropositionsEqual(p1, p2.left))
    return p2.right;
  if (p1.type === "conditional" && arePropositionsEqual(p2, p1.left))
    return p1.right;
  return null;
}

function modusTollens(p1, p2) {
  if (!p1 || !p2) return null;
  const check = (c, o) => {
    if (c.type !== "conditional") return null;
    const consequent = c.right;
    let isContradiction = false;
    if (
      o.type === "negation" &&
      arePropositionsEqual(o.proposition, consequent)
    ) {
      isContradiction = true;
    }
    if (
      consequent.type === "negation" &&
      arePropositionsEqual(consequent.proposition, o)
    ) {
      isContradiction = true;
    }
    if (isContradiction) {
      return { type: "negation", proposition: c.left };
    }
    return null;
  };
  return check(p1, p2) || check(p2, p1);
}

function disjunctiveSyllogism(p1, p2) {
  /**
   * 두 명제가 서로 모순 관계인지 확인하는 헬퍼 함수.
   * 예: (P, ~P) 또는 (~P, P)는 참을 반환합니다.
   * @param {object} propA - 명제 객체 1
   * @param {object} propB - 명제 객체 2
   * @returns {boolean} 모순 관계이면 true
   */
  const areContradictory = (propA, propB) => {
    // propA가 ~X이고 propB가 X인 경우
    if (
      propA.type === "negation" &&
      arePropositionsEqual(propA.proposition, propB)
    ) {
      return true;
    }
    // propB가 ~X이고 propA가 X인 경우
    if (
      propB.type === "negation" &&
      arePropositionsEqual(propB.proposition, propA)
    ) {
      return true;
    }
    return false;
  };

  /**
   * 선언적 삼단논법을 적용하는 내부 함수.
   * @param {object} d - disjunction 타입으로 추정되는 명제
   * @param {object} o - 나머지 명제
   * @returns {object|null} 추론 결과 또는 null
   */
  const check = (d, o) => {
    if (d.type !== "disjunction") return null;

    // 다른 전제(o)가 선언문의 왼쪽 부분(d.left)과 모순 관계일 때
    // 예: (P ∨ Q)와 ~P가 주어지면 Q를 반환 (이때 ~P는 ~~P와도 모순)
    if (areContradictory(d.left, o)) {
      return d.right;
    }

    // 다른 전제(o)가 선언문의 오른쪽 부분(d.right)과 모순 관계일 때
    // 예: (P ∨ Q)와 ~Q가 주어지면 P를 반환
    if (areContradictory(d.right, o)) {
      return d.left;
    }

    return null;
  };

  // p1, p2 순서와 p2, p1 순서 모두 확인
  return check(p1, p2) || check(p2, p1);
}

function conjunctionIntroduction(p1, p2) {
  if (!p1 || !p2) return null;
  return { type: "conjunction", left: p1, right: p2 };
}

function conjunctionElimination(p) {
  if (p && p.type === "conjunction") return [p.left, p.right];
  return null;
}

function doubleNegationElimination(p) {
  if (p && p.type === "negation" && p.proposition.type === "negation")
    return p.proposition.proposition;
  return null;
}

function hypotheticalSyllogism(p1, p2) {
  if (!p1 || !p2) return null;
  const check = (c1, c2) => {
    if (
      c1.type === "conditional" &&
      c2.type === "conditional" &&
      arePropositionsEqual(c1.right, c2.left)
    )
      return { type: "conditional", left: c1.left, right: c2.right };
    return null;
  };
  return check(p1, p2) || check(p2, p1);
}

function existentialInstantiation(p) {
  if (p && p.type === "universal") {
    return {
      type: "existential",
      entity: p.entity,
      predicate: p.predicate,
    };
  }
  return null;
}

function universalApplication(p1, p2) {
  if (!p1 || !p2) return null;
  const getBaseNoun = (text) => {
    if (currentLang.langCode === "ko") {
      return text.replace(/(이다|는|은)$/, "").trim();
    } else {
      return text.replace(/^is a /, "").trim();
    }
  };
  const check = (propA, propB) => {
    if (propA.type === "atomic" && propB.type === "universal") {
      const atomicPredicateBase = getBaseNoun(propA.predicate);
      const universalEntityBase = getBaseNoun(propB.entity);
      if (atomicPredicateBase === universalEntityBase) {
        return {
          type: "atomic",
          subject: propA.subject,
          predicate: propB.predicate,
        };
      }
    }
    if (propA.type === "existential" && propB.type === "universal") {
      const existentialPredicateBase = getBaseNoun(propA.predicate);
      const universalEntityBase = getBaseNoun(propB.entity);
      if (existentialPredicateBase === universalEntityBase) {
        return {
          type: "existential",
          entity: propA.entity,
          predicate: propB.predicate,
        };
      }
    }
    if (propA.type === "universal" && propB.type === "universal") {
      const propAPredicateBase = getBaseNoun(propA.predicate);
      const propBEntityBase = getBaseNoun(propB.entity);
      if (propAPredicateBase === propBEntityBase) {
        return {
          type: "universal",
          entity: propA.entity,
          predicate: propB.predicate,
        };
      }
    }
    return null;
  };
  return check(p1, p2) || check(p2, p1);
}

function reductioAdAbsurdum(p1, p2, assumption) {
  if (!p1 || !p2) return null;
  const isContradiction =
    (p1.type === "negation" && arePropositionsEqual(p1.proposition, p2)) ||
    (p2.type === "negation" && arePropositionsEqual(p2.proposition, p1));
  if (isContradiction && assumption) {
    return { type: "negation", proposition: assumption };
  }
  return null;
}

function proofByCases(p1, p2, p3) {
  if (!p1 || !p2 || !p3) return null;
  const premises = [p1, p2, p3];
  const disjunction = premises.find((p) => p.type === "disjunction");
  if (!disjunction) return null;
  const conditionals = premises.filter((p) => p.type === "conditional");
  if (conditionals.length !== 2) return null;
  const p = disjunction.left;
  const q = disjunction.right;
  const cond1 = conditionals[0];
  const cond2 = conditionals[1];
  const caseA =
    arePropositionsEqual(cond1.left, p) &&
    arePropositionsEqual(cond2.left, q) &&
    arePropositionsEqual(cond1.right, cond2.right);
  const caseB =
    arePropositionsEqual(cond1.left, q) &&
    arePropositionsEqual(cond2.left, p) &&
    arePropositionsEqual(cond1.right, cond2.right);
  if (caseA || caseB) {
    return cond1.right;
  }
  return null;
}

function isContradictory(newProp, allTrueProps) {
  for (const trueProp of allTrueProps) {
    if (
      trueProp.type === "negation" &&
      arePropositionsEqual(newProp, trueProp.proposition)
    )
      return true;
    if (
      newProp.type === "negation" &&
      arePropositionsEqual(newProp.proposition, trueProp)
    )
      return true;
  }
  if (newProp.type === "atomic" || newProp.type === "universal") {
    const predicatePairs = currentLang.contradictoryPredicates;
    let oppositePredicate = null;
    for (const key in predicatePairs) {
      if (key === newProp.predicate) {
        oppositePredicate = predicatePairs[key];
        break;
      }
      if (predicatePairs[key] === newProp.predicate) {
        oppositePredicate = key;
        break;
      }
    }
    if (oppositePredicate) {
      for (const trueProp of allTrueProps) {
        if (trueProp.type === newProp.type) {
          const sameSubject =
            (newProp.type === "atomic" &&
              trueProp.subject === newProp.subject) ||
            (newProp.type === "universal" &&
              trueProp.entity === newProp.entity);
          if (sameSubject && trueProp.predicate === oppositePredicate) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

function verifyAndExpandTruths(
  newProposition,
  initialTruths = internalTruthSet
) {
  let knownTruths = [...initialTruths];

  // 1. newProposition이 null이 아닐 경우에만 초기 모순 검사를 수행합니다.
  if (newProposition && isContradictory(newProposition, knownTruths)) {
    return { success: false, expandedSet: null };
  }

  // 2. 모순이 없을 경우, newProposition이 null이 아닐 경우에만 집합에 추가합니다.
  if (
    newProposition &&
    !knownTruths.some((p) => arePropositionsEqual(p, newProposition))
  ) {
    knownTruths.push(newProposition);
  }

  let newTruthsFoundInIteration = true;
  let iterations = 0;
  const maxIterations = 50; // 깊이는 50으로 유지

  // 2. 더 이상 새로운 결론이 나오지 않을 때까지 모든 조합을 반복적으로 검사합니다.
  while (newTruthsFoundInIteration && iterations < maxIterations) {
    newTruthsFoundInIteration = false;
    iterations++;

    const currentSnapshot = [...knownTruths]; // 현재까지 알려진 모든 진실의 스냅샷

    // ★★★ 핵심 수정: 기존의 모든 명제들끼리 서로 비교하는 완전 탐색 (N x N)
    for (let i = 0; i < currentSnapshot.length; i++) {
      const p1 = currentSnapshot[i];

      // 1개의 전제만 필요한 규칙들을 먼저 적용합니다.
      const onePremiseRules = [
        doubleNegationElimination,
        conjunctionElimination,
        existentialInstantiation,
      ];
      for (const rule of onePremiseRules) {
        const results = rule(p1);
        if (results) {
          const resultArray = Array.isArray(results) ? results : [results];
          for (const result of resultArray) {
            if (isContradictory(result, knownTruths))
              return { success: false, expandedSet: null };
            if (!knownTruths.some((p) => arePropositionsEqual(p, result))) {
              knownTruths.push(result);
              newTruthsFoundInIteration = true;
            }
          }
        }
      }

      // 2개의 전제가 필요한 규칙들을 적용합니다.
      for (let j = 0; j < currentSnapshot.length; j++) {
        if (i === j) continue;
        const p2 = currentSnapshot[j];
        const twoPremiseRules = [
          modusPonens,
          modusTollens,
          hypotheticalSyllogism,
          disjunctiveSyllogism,
          universalApplication,
        ];

        for (const rule of twoPremiseRules) {
          const result = rule(p1, p2);
          if (result) {
            if (isContradictory(result, knownTruths))
              return { success: false, expandedSet: null };
            if (!knownTruths.some((p) => arePropositionsEqual(p, result))) {
              knownTruths.push(result);
              newTruthsFoundInIteration = true;
            }
          }
        }
      }
    }
  }

  return { success: true, expandedSet: knownTruths };
}

function isValidPlay(cardToPlay, proposition) {
  if (inTutorialMode) {
    const highlightedCard = document.querySelector(".tutorial-highlight");
    return highlightedCard && highlightedCard.textContent === cardToPlay.text;
  }

  const propLength = proposition.length;
  const { if: ifKeyword, and, or, not } = currentLang.keywords;
  const isConnective = (card) => [ifKeyword, and, or].includes(card.text);
  const [properNoun, quantifier, entity, predicate, operator] =
    currentLang.cardTypes;

  if (propLength === 0) {
    return cardToPlay.type === properNoun || cardToPlay.type === quantifier;
  }

  const lastCardInfo = proposition[propLength - 1];

  if (cardToPlay.text === not) {
    // '는 거짓이다'가 적용될 절(clause)을 찾습니다.
    const connectiveIndex = proposition
      .map((info) => info.card)
      .findIndex(isConnective);
    const clauseToNegate =
      connectiveIndex > -1
        ? proposition.slice(connectiveIndex + 1)
        : [...proposition];
    const newClauseWithNegation = [
      ...clauseToNegate,
      { card: cardToPlay, player: currentPlayer },
    ];
    return parsePropositionFromCards(newClauseWithNegation) !== null;
  }

  if (isConnective(cardToPlay)) {
    if (proposition.some((info) => isConnective(info.card))) return false;
    const connectiveIndex = proposition
      .map((info) => info.card)
      .findIndex(isConnective);
    const partToCheck =
      connectiveIndex > -1
        ? proposition.slice(connectiveIndex + 1)
        : proposition;
    return parsePropositionFromCards(partToCheck) !== null;
  }

  if (isConnective(lastCardInfo.card)) {
    return cardToPlay.type === properNoun || cardToPlay.type === quantifier;
  }

  const connectiveIndex = proposition
    .map((info) => info.card)
    .findIndex(isConnective);
  const currentSimpleProp =
    connectiveIndex > -1 ? proposition.slice(connectiveIndex + 1) : proposition;

  if (currentSimpleProp.length === 1) {
    const lastType = currentSimpleProp[0].card.type;
    if (lastType === properNoun) return cardToPlay.type === predicate;
    if (lastType === quantifier) return cardToPlay.type === entity;
  }
  if (currentSimpleProp.length === 2) {
    if (
      currentSimpleProp[0].card.type === quantifier &&
      currentSimpleProp[1].card.type === entity
    ) {
      return cardToPlay.type === predicate;
    }
  }
  return false;
}

function checkNextTurn() {
  if (gameIsOver || inTutorialMode) return; // 게임오버, 튜토리얼 중에는 실행 안 함

  clearAllAITimeouts(); // 기존에 예약된 AI 동작이 있다면 모두 취소

  if (isThinkingTime) {
    // --- 사유 시간일 때의 턴 관리 ---
    // 현재 생각해야 할 플레이어가 AI라면, AI의 사유 시간 턴을 예약
    if (isPlayerAI[thinkingTimeTurn]) {
      aiTimeoutId = setTimeout(aiThinkingTimeTurn, 1500);
    }
    // 사람이 턴이라면, 아무것도 하지 않고 사용자 입력을 기다림
  } else {
    // --- 일반 턴일 때의 턴 관리 ---
    // 현재 턴의 플레이어가 AI라면, AI의 일반 턴을 예약
    if (isPlayerAI[currentPlayer]) {
      const delay = gameMode === "AI_VS_AI" ? 250 : 1500;
      aiTimeoutId = setTimeout(aiTurn, delay);
    }
    // 사람이 턴이라면, 행동 가능 여부만 체크 (행동 없으면 사유 시간 전환)
    else {
      checkRoundEndConditions();
    }
  }
}
function endTurn() {
  // 사유 시간 중일 때의 턴 종료 로직
  if (isThinkingTime) {
    audioManager.playSfx("end");
    // 해당 라운드를 먼저 시작했던 플레이어 (사유 시간에는 두 번째로 행동함)
    const roundStarter = currentRound % 2 === 1 ? "A" : "B";

    // 지금 턴을 마친 플레이어가 '두 번째' 순서라면, 사유 시간을 완전히 종료합니다.
    if (thinkingTimeTurn === roundStarter) {
      endThinkingTime();
    } else {
      // '첫 번째' 순서의 플레이어라면, 턴을 상대에게 넘깁니다.
      thinkingTimeTurn = roundStarter;

      if (gameMode === "AI" && thinkingTimeTurn === aiPlayer) {
        clearAllAITimeouts();
        aiTimeoutId = setTimeout(aiThinkingTimeTurn, 2000);
      }
      render();

      // ✅ [핵심 수정]
      // 두 번째 AI에게 턴을 넘겼으니, 턴 관리자(checkNextTurn)를 호출해서
      // 두 번째 AI의 턴을 실제로 시작시킵니다.
      checkNextTurn();
    }
    return;
  }

  // --- 이하 일반 턴 종료 로직 (수정 없음) ---
  if (cardsPlayedThisTurn[currentPlayer] === 0) return;

  audioManager.playSfx("end");

  const playerWhoEndedTurn = currentPlayer;
  cardsPlayedThisTurn[playerWhoEndedTurn] = 0;

  currentPlayer = currentPlayer === "A" ? "B" : "A";

  render();
  checkNextTurn();
}

function activateAbility(player) {
  if (inTutorialMode) {
    return; // 튜토리얼 모드에서는 아무것도 하지 않고 즉시 함수를 종료합니다.
  }
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;

  const state = abilityUsedState[player];
  if (state) {
    // 흄의 경우 usedCount가 maxUses 이상인지 확인
    if (philosopherId === "hume" && state.usedCount >= state.maxUses) {
      showAlert(
        currentLang.langCode === "ko"
          ? "이미 능력을 모두 사용했습니다."
          : "Ability has already been used up."
      );
      return;
    }
    // 그 외 철학자는 기존 방식대로 used 플래그 확인
    else if (philosopherId !== "hume" && state.used) {
      showAlert(
        currentLang.langCode === "ko"
          ? "이미 능력을 사용했습니다."
          : "Ability has already been used."
      );
      return;
    }
  }

  console.log(`Activating ability for ${philosopherId}`);
  switch (philosopherId) {
    case "plato":
      activatePlatoAbility(player); // 이 부분을 수정합니다.
      break;
    case "socrates":
      activateSocratesAbility(player);
      break;
    case "descartes":
      activateDescartesAbility(player);
      break;
    case "wittgenstein":
      activateWittgensteinAbility(player);
      break;
    case "derrida":
      activateDerridaAbility(player);
      break;
    case "hume":
      activateHumeAbility(player);
      break;
    case "kuhn":
      activateKuhnAbility(player);
      break;
    case "kant":
      activateKantAbility(player);
      break;

    // ... 다른 모든 철학자들의 능력 호출 ...
    default:
      showAlert(
        currentLang.langCode === "ko"
          ? "이 철학자는 사용할 수 있는 능력이 없습니다."
          : "This philosopher has no active ability."
      );
  }
}

function updateAbilityButtonsState() {
  // 플레이어 A의 능력 버튼 상태를 가져옵니다.
  const stateA = getAbilityButtonStateFor("A");
  const buttonA = document.getElementById("ability-a");
  buttonA.style.display = stateA.visible ? "block" : "none";
  buttonA.disabled = stateA.disabled;
  buttonA.textContent = stateA.text;

  // 플레이어 B의 능력 버튼 상태를 가져옵니다.
  const stateB = getAbilityButtonStateFor("B");
  const buttonB = document.getElementById("ability-b");
  buttonB.style.display = stateB.visible ? "block" : "none";
  buttonB.disabled = stateB.disabled;
  buttonB.textContent = stateB.text;
}

function getAbilityButtonStateFor(player) {
  // 기본값: 버튼은 보이지 않고 비활성화 상태
  const defaultState = { visible: false, disabled: true, text: "" };

  // 현재 게임이 진행 중이 아니거나, 해당 플레이어의 철학자 정보가 없으면 기본 상태 반환
  if (
    gameIsOver ||
    (player === "A" && !playerA_Data) ||
    (player === "B" && !playerB_Data)
  ) {
    return defaultState;
  }

  const philosopherData = player === "A" ? playerA_Data : playerB_Data;
  const philosopherId = philosopherData.id;

  // 해당 철학자의 능력이 이미 사용되었다면 기본 상태 반환
  if (abilityUsedState[player] && abilityUsedState[player].used) {
    return defaultState;
  }

  // ⭐ 앞으로 모든 능력의 조건은 이 switch 문 안에 추가됩니다.
  switch (philosopherId) {
    case "plato":
      // 능력 사용 조건: '사유 시간'일 때 항상 버튼을 표시
      if (isThinkingTime) {
        return {
          visible: true,
          // 자기 턴이 아닐 때(!==) 비활성화(disabled: true)
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player),
          text: currentLang.ui.useAbilityButton,
        };
      }

      break; // platocase 끝

    case "socrates":
      // 사유 시간이고, 사용 횟수가 남아있을 때 버튼 표시
      if (
        isThinkingTime &&
        abilityUsedState[player].usedCount < abilityUsedState[player].maxUses
      ) {
        return {
          visible: true,
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player),
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;

    case "nietzsche":
      // 니체의 능력은 패시브이므로, 활성화 버튼이 필요 없습니다.
      // 따라서 아무것도 반환하지 않고 그냥 break 합니다.
      break;

    case "descartes":
      if (isThinkingTime) {
        return {
          visible: true,
          // 자신의 사유 시간 턴이 아닐 경우 버튼을 비활성화합니다.
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player),
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;

    case "wittgenstein":
      if (isThinkingTime) {
        return {
          visible: true,
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player), // 자신의 턴일 때만 활성화
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;

    case "derrida":
      if (isThinkingTime) {
        return {
          visible: true,
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player), // 자신의 턴일 때만 활성화
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;
    case "hume":
      // 사유 시간이고, 사용 횟수가 남아있을 때 버튼 표시
      if (
        isThinkingTime &&
        abilityUsedState[player].usedCount < abilityUsedState[player].maxUses
      ) {
        return {
          visible: true,
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player), // 자신의 턴일 때만 활성화
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;
    case "kuhn":
      // 플레이어가 카드를 놓아 생성한 명제만 카운트
      const userMadePropsCount = truePropositions.filter(
        (p) => p.type === "user-made"
      ).length;

      if (isThinkingTime && userMadePropsCount >= 15) {
        return {
          visible: true,
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player), // 자신의 턴일 때만 활성화
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;
    case "kant":
      // 사유 시간이고, 아직 능력을 사용하지 않았을 때 버튼 표시
      if (isThinkingTime && !abilityUsedState[player]?.used) {
        return {
          visible: true,
          // 자신의 턴이 아니면 비활성화
          disabled:
            thinkingTimeTurn !== player ||
            (isPlayerAI[player] && thinkingTimeTurn === player),
          text: currentLang.ui.useAbilityButton,
        };
      }
      break;

    // --- 여기에 새로운 철학자들의 case를 계속 추가 ---
    // case 'descartes':
    //     if (isThinkingTime && thinkingTimeTurn === player) { ... }
    //     break;
  }

  // 위 switch 문에서 아무 조건도 맞지 않으면 기본 상태를 반환합니다.
  return defaultState;
}

function playCard(player, cardToPlay) {
  if (player !== currentPlayer || gameIsOver || isThinkingTime) return;

  if (cardsPlayedThisTurn[player] >= 1) {
    showAlert(currentLang.alerts.oneCardPerTurn);
    return;
  }

  if (!isValidPlay(cardToPlay, currentProposition)) {
    if (player !== aiPlayer) {
      showAlert(currentLang.alerts.invalidCard);
    }
    return;
  }
  if (currentProposition.length === 0) propositionStarter = player;
  const hand = player === "A" ? playerA_Hand : playerB_Hand;
  const cardIndex = hand.findIndex(
    (card) => card.text === cardToPlay.text && card.type === cardToPlay.type
  );
  if (cardIndex === -1) return;
  currentProposition.push({
    card: hand.splice(cardIndex, 1)[0],
    player: player,
    originalIndex: cardIndex, // 카드의 원래 위치를 함께 저장
  });

  audioManager.playSfx("playCard");

  lastCardPlayer = player;
  cardsPlayedThisTurn[player]++;

  render();
}

function completeProposition() {
  if (currentProposition.length === 0 || gameIsOver || isThinkingTime)
    return false;

  const parsedProp = parsePropositionFromCards([...currentProposition]);
  if (!parsedProp) {
    if (currentPlayer !== aiPlayer) {
      showAlert(currentLang.alerts.incompleteProposition);
    }
    return false;
  }

  const isAxiom = parsedAxioms.some((a) =>
    arePropositionsEqual(a.proposition, parsedProp)
  );
  const isAlreadyInTrueList = truePropositions.some(
    (p) => p.proposition && arePropositionsEqual(p.proposition, parsedProp)
  );

  // 공리이거나, 이미 참 목록에 있으면 '증명된 것'으로 간주합니다.
  const isAlreadyProven = isAxiom || isAlreadyInTrueList;
  const currentPlayerId =
    currentPlayer === "A" ? playerA_Data.id : playerB_Data.id;

  // 1. "불가능한 경우"를 먼저 확인하고 함수를 즉시 종료시킵니다.
  // 현재 플레이어가 니체가 "아닌데" 중복 명제를 완성하려는 경우 -> 거부
  if ((isAxiom || isAlreadyProven) && currentPlayerId !== "nietzsche") {
    if (currentPlayer !== aiPlayer) {
      showAlert(currentLang.alerts.duplicateProposition);
    }
    return false;
  }

  // 2. 여기까지 왔다면, 아래 두 경우 중 하나입니다:
  //    - 새로운 명제인 경우 (모든 플레이어)
  //    - 중복 명제인 경우 (니체만 해당)

  const verificationResult = verifyAndExpandTruths(parsedProp);

  if (verificationResult.success) {
    // 3. 논리적으로 참임이 증명되었으므로, 명제를 추가합니다.
    internalTruthSet = verificationResult.expandedSet;

    // 추가할 명제 객체를 기본 형태로 생성합니다.
    const propToAdd = {
      propId: `prop_${Date.now()}_${Math.random()}`,
      type: "user-made",
      round: currentRound,
      proposition: parsedProp,
      original_cards: [...currentProposition],
    };

    // 만약 "니체가 중복 명제를 완성"한 경우, 'source'를 추가합니다.
    if (isAlreadyProven && currentPlayerId === "nietzsche") {
      propToAdd.source = "nietzsche_ability";
    }

    console.log("니체 명제 생성 시점: ", propToAdd);

    truePropositions.push(propToAdd);

    // --- 명제 추가 성공 후 공통 로직 ---
    audioManager.playSfx("complete");
    lastPropositionMaker =
      currentProposition[currentProposition.length - 1].player;
    currentPlayer = lastPropositionMaker === "A" ? "B" : "A";
    currentProposition = [];
    lastCardPlayer = null;
    cardsPlayedThisTurn = { A: 0, B: 0 };
    render();
    const truePropositionsEl = document.getElementById("true-propositions");
    truePropositionsEl.scrollTo({
      top: truePropositionsEl.scrollHeight,
      behavior: "smooth",
    });
    checkNextTurn();
    return true;
  } else {
    // 4. 모순이 발견된 경우
    if (currentPlayer !== aiPlayer) {
      showAlert(currentLang.alerts.contradictionFound);
    }
    return false;
  }
}

function undoProposition() {
  if (gameIsOver || isThinkingTime) return;
  if (gameMode === "AI" && currentPlayer === aiPlayer) return;

  if (currentProposition.length > 0) {
    audioManager.playSfx("undo");
    const lastPlayedInfo = currentProposition.pop();
    if (gameMode === "AI" && lastPlayedInfo.player === aiPlayer) {
      currentProposition.push(lastPlayedInfo);
      return;
    }
    const hand = lastPlayedInfo.player === "A" ? playerA_Hand : playerB_Hand;

    // hand.push 대신 splice를 사용하여 원래 위치에 카드를 삽입합니다.
    if (typeof lastPlayedInfo.originalIndex !== "undefined") {
      hand.splice(lastPlayedInfo.originalIndex, 0, lastPlayedInfo.card);
    } else {
      // 혹시 모를 예외 상황을 위한 대비 코드
      hand.push(lastPlayedInfo.card);
    }
    cardsPlayedThisTurn[lastPlayedInfo.player]--;
    currentPlayer = lastPlayedInfo.player;

    if (currentProposition.length > 0) {
      lastCardPlayer = currentProposition[currentProposition.length - 1].player;
    } else {
      lastCardPlayer = null;
    }

    render();
  } else {
    let lastUserMadePropIndex = -1;
    for (let i = truePropositions.length - 1; i >= 0; i--) {
      if (truePropositions[i].type === "user-made") {
        lastUserMadePropIndex = i;
        break;
      }
    }
    if (lastUserMadePropIndex !== -1) {
      const propToUndo = truePropositions[lastUserMadePropIndex];
      const lastMaker =
        propToUndo.original_cards[propToUndo.original_cards.length - 1].player;
      if (gameMode === "AI" && lastMaker === aiPlayer) {
        showAlert(currentLang.alerts.nothingToUndo);
        return;
      }
      audioManager.playSfx("undo");
      truePropositions.splice(lastUserMadePropIndex, 1);
      let newTruthSet = parsedAxioms.map((a) => a.proposition);
      const propositionsToReverify = truePropositions
        .filter(
          (p) =>
            p.type === "victory" ||
            p.type === "theorem" ||
            p.type === "user-made"
        )
        .map((p) => p.proposition);
      for (const prop of propositionsToReverify) {
        internalTruthSet = JSON.parse(JSON.stringify(newTruthSet));
        const verificationResult = verifyAndExpandTruths(prop);
        if (verificationResult.success) {
          newTruthSet = verificationResult.expandedSet;
        } else {
          console.error(
            "Critical error: Inconsistency found while rebuilding truth set after undo.",
            prop
          );
          showAlert(currentLang.alerts.criticalErrorUndo);
          truePropositions.splice(lastUserMadePropIndex, 0, propToUndo);
          return;
        }
      }
      internalTruthSet = newTruthSet;
      currentProposition = propToUndo.original_cards;
      currentPlayer = currentProposition[currentProposition.length - 1].player;
      lastCardPlayer = currentProposition[currentProposition.length - 1].player;
      cardsPlayedThisTurn = { A: 0, B: 0 };
      showAlert(currentLang.alerts.undoLastProposition);
      render();
    } else {
      showAlert(currentLang.alerts.nothingToUndo);
    }
  }
}

function declareEureka(player) {
  if (gameIsOver) return;

  if (!isThinkingTime && player !== currentPlayer) return;

  if (gameMode === "AI" && player === aiPlayer) return;

  if (!isThinkingTime) {
    if (eurekaUsedInRound[player]) {
      return;
    }

    showConfirm(currentLang.alerts.confirmDeclareEureka, (event) => {
      // 💡 변경점: event 객체를 받도록 수정
      event.stopPropagation(); // 💡 변경점: 이벤트 전파를 막아 중복 소리를 제거

      audioManager.playSfx("eureka");
      eurekaUsedInRound[player] = true;
      openEurekaModal();
      render();
    });
  } else {
    openEurekaModal();
    render();
  }
}

function endGame(winner, winningProposition) {
  audioManager.playSfx("victory");
  audioManager.fadeOut("game-play");
  audioManager.fadeOut("thinking-time");
  gameIsOver = true;
  document.getElementById("eureka-modal").classList.remove("visible");
  const statusEl = document.getElementById("status");
  let winnerName;
  const isMirrorMatch = playerA_Data.id === playerB_Data.id;

  if (winner === "A") {
    winnerName = getLastName(playerA_Data.name[currentLang.langCode]);
    if (isMirrorMatch) {
      // 미러전일 경우, A플레이어(선공)에게 색상 식별자를 추가합니다.
      winnerName += currentLang.langCode === "ko" ? "(백)" : " (White)";
    }
  } else {
    // winner === 'B'
    winnerName = getLastName(playerB_Data.name[currentLang.langCode]);
    if (isMirrorMatch) {
      // 미러전일 경우, B플레이어(후공)에게 색상 식별자를 추가합니다.
      winnerName += currentLang.langCode === "ko" ? "(흑)" : " (Black)";
    }
  }
  const victoryText = `${winnerName} ${currentLang.ui.victoryMessage}<br>${currentLang.ui.victorySubMessage}`;
  statusEl.innerHTML = `<span class="turn-indicator">${victoryText}</span>`;
  render();

  // 1. 모든 오버레이 이미지를 일단 숨깁니다.
  document.querySelectorAll(".overlay-image").forEach((img) => {
    img.classList.add("hidden");
  });

  // 2. ★★★ 수정된 핵심 로직 ★★★
  //    승리한 철학자의 '승리' 오버레이를 논리 증명과 관계없이 즉시 표시합니다.
  const winnerOverlayId =
    winner === "A" ? "socrates-win-overlay" : "plato-win-overlay";
  const winnerOverlay = document.getElementById(winnerOverlayId);
  if (winnerOverlay) {
    winnerOverlay.classList.remove("hidden");
    // z-index를 다른 승리 이미지보다 높게 설정하여 항상 위에 오도록 보장합니다.
    // (CSS에서 이미 z-index: 3으로 설정했으므로 이 줄은 선택적입니다.)
    winnerOverlay.style.zIndex = "5";
  }

  // 3. '승리'를 제외한 나머지 상태 오버레이들은 기존처럼 논리적 참/거짓에 따라 표시합니다.
  const characters = [
    currentLang.keywords.socrates,
    currentLang.keywords.plato,
  ];
  const predicates = [
    ...currentLang.cards
      .filter(
        (card) =>
          card.type === currentLang.cardTypes[3] || card.type === "Predicate"
      )
      // ★★★ '승리한다' 서술어는 위에서 수동으로 처리했으므로, 반복문에서 제외합니다.
      .filter(
        (card) =>
          card.text !== currentLang.keywords.wins && card.text !== "승리한다"
      )
      .map((card) => card.text),
  ];

  characters.forEach((subjectText) => {
    predicates.forEach((predicateText) => {
      const targetProposition = {
        type: "atomic",
        subject: subjectText,
        predicate: predicateText,
      };

      if (aiFindProof(targetProposition, internalTruthSet)) {
        const subjectId =
          subjectText === currentLang.keywords.socrates ? "socrates" : "plato";
        const predicateMap = {
          선하다: "good",
          "is good": "good",
          악하다: "evil",
          "is evil": "evil",
          지혜롭다: "wise",
          "is wise": "wise",
          어리석다: "foolish",
          "is foolish": "foolish",
          새이다: "bird",
          "is a bird": "bird",
          물고기이다: "fish",
          "is a fish": "fish",
          개이다: "dog",
          "is a dog": "dog",
        };
        const predicateId = predicateMap[predicateText];

        if (predicateId) {
          const overlayId = `${subjectId}-${predicateId}-overlay`;
          const overlayToShow = document.getElementById(overlayId);
          if (overlayToShow) {
            overlayToShow.classList.remove("hidden");
          }
        }
      }
    });
  });
}
function checkRoundEndConditions() {
  if (gameIsOver || isThinkingTime || cardsPlayedThisTurn[currentPlayer] > 0)
    return;

  const hand = currentPlayer === "A" ? playerA_Hand : playerB_Hand;
  const hasValidCardMove = hand.some((card) =>
    isValidPlay(card, currentProposition)
  );

  let canComplete = false;
  if (currentProposition.length > 0 && lastCardPlayer !== currentPlayer) {
    const parsedProp = parsePropositionFromCards(currentProposition);
    if (parsedProp) {
      const verificationResult = verifyAndExpandTruths(parsedProp);
      if (verificationResult.success) {
        canComplete = true;
      }
    }
  }

  if (!hasValidCardMove && !canComplete) {
    const playerName =
      currentPlayer === "A"
        ? playerA_Data.name[currentLang.langCode]
        : playerB_Data.name[currentLang.langCode];

    // 'AI vs AI' 모드일 경우에만 경고창을 건너뜁니다.
    if (gameMode === "AI_VS_AI") {
      console.log(
        `AI (${currentPlayer}) has no moves. Starting Thinking Time automatically in AI_VS_AI mode.`
      );
      startThinkingTime();
    } else {
      // 그 외의 모든 모드(사람 vs AI 포함)에서는 경고창을 띄웁니다.
      showAlert(
        currentLang.alerts.roundEndNoMoves.replace("{player}", playerName),
        () => startThinkingTime()
      );
    }
  }
}

function startThinkingTime() {
  audioManager.fadeOut("game-play");
  audioManager.play("thinking-time");

  currentProposition = [];
  lastCardPlayer = null;
  isThinkingTime = true;
  cardsPlayedThisTurn = { A: 0, B: 0 };

  const thinkingTimeEl = document.getElementById("thinking-time-controls");
  thinkingTimeEl.classList.remove("hidden");
  thinkingTimeEl.style.display = "";

  // 후공 플레이어부터 사유 시간 턴을 시작
  const roundStarter = currentRound % 2 === 1 ? "A" : "B";
  const thinkingTimeStarter = roundStarter === "A" ? "B" : "A";
  thinkingTimeTurn = thinkingTimeStarter;

  render();

  // ✅ [핵심 수정] 턴 시작은 이제 checkNextTurn 함수가 전담하므로,
  // 상태 변경 후 checkNextTurn을 호출하여 턴 관리를 넘겨줍니다.
  checkNextTurn();
}
function endThinkingTime() {
  audioManager.fadeOut("thinking-time"); // 기존 코드
  audioManager.play("game-play"); // 기존 코드

  socratesDisabledProps = socratesDisabledProps.filter(
    (prop) => prop.reEnableRound > currentRound + 1
  ); // 기존 코드

  isThinkingTime = false; // 기존 코드
  thinkingTimeTurn = null; // 기존 코드

  document.getElementById("thinking-time-controls").classList.add("hidden"); // 기존 코드

  currentRound++; // 기존 코드
  eurekaUsedInRound = { A: false, B: false }; // 기존 코드

  // 손패를 새로 분배하는 부분 (기존 코드)
  const nonPlayerCards = [currentLang.keywords.wins]; // 기존 코드
  playerA_Hand = JSON.parse(
    JSON.stringify(fullDeck.filter((c) => !nonPlayerCards.includes(c.text)))
  ); // 기존 코드
  playerB_Hand = JSON.parse(
    JSON.stringify(fullDeck.filter((c) => !nonPlayerCards.includes(c.text)))
  ); // 기존 코드

  // 현재 게임에 마르크스가 있는지 확인합니다.
  const isMarxInGame = playerA_Data.id === "marx" || playerB_Data.id === "marx"; // playerA_Data와 playerB_Data를 참조하여 마르크스 존재 여부 확인

  // 마르크스가 있다면, 새로 분배된 손패에서 플레이 불가능한 카드들을 제거합니다.
  if (isMarxInGame) {
    const unplayableCardTexts = [
      currentLang.langCode === "ko" ? "혁명이" : "A revolution",
      currentLang.langCode === "ko" ? "일어난다" : "occurs",
    ]; // 제거할 카드 목록 정의

    playerA_Hand = playerA_Hand.filter(
      (card) => !unplayableCardTexts.includes(card.text)
    ); // 손패 A에서 필터링
    playerB_Hand = playerB_Hand.filter(
      (card) => !unplayableCardTexts.includes(card.text)
    ); // 손패 B에서 필터링
  }

  currentPlayer = currentRound % 2 === 1 ? "A" : "B"; // 기존 코드
  render(); // 기존 코드

  // 새로운 라운드 시작 시 참 명제 목록을 맨 아래로 스크롤
  const truePropositionsElement = document.getElementById("true-propositions");
  if (truePropositionsElement) {
    truePropositionsElement.scrollTop = truePropositionsElement.scrollHeight;
  }

  checkNextTurn(); // 기존 코드
}
function openEurekaModal() {
  derivedPropositionsInModal = [];
  currentAssumption = null;
  const modal = document.getElementById("eureka-modal");
  const premiseList = document.getElementById("premise-list");
  premiseList.innerHTML = "";
  const allSelectablePropositions = [
    ...parsedAxioms,
    ...truePropositions
      .map((p) => ({ ...p, proposition: p.proposition }))
      .filter((p) => p.proposition),
  ].filter(
    (propData) =>
      // ✅ propData에 propId가 있고, 그 ID가 socratesDisabledProps 배열에 포함되지 않은 경우만 true를 반환
      !propData.propId ||
      !socratesDisabledProps.some((dp) => dp.propId === propData.propId)
  );

  // 공리들을 그룹별로 분류하고 순서대로 추가
  const axioms = allSelectablePropositions.filter((p) => p.type === "axiom");
  const nonAxioms = allSelectablePropositions.filter((p) => p.type !== "axiom");

  // 공리를 그룹화하여 추가 - 작은 서브그룹별로 구분선 추가
  if (currentAxioms.groups && axioms.length > 0) {
    const groups = currentAxioms.groups;
    const templates = currentLang.axiom_templates;
    let axiomIndex = 0;

    // 정체성 공리 그룹
    if (groups.identity && groups.identity.length > 0) {
      for (let i = 0; i < groups.identity.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 정체성 그룹 구분선 추가
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }

    // 개체별 속성 대립 그룹 - 서브그룹별로 나누기
    if (groups.subjectOpposition && groups.subjectOpposition.length > 0) {
      // 첫 번째 철학자 선악 공리
      for (let i = 0; i < templates.subject_good_evil.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 첫 번째 철학자 지혜 공리
      for (let i = 0; i < templates.subject_wise_foolish.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 두 번째 철학자 선악 공리
      for (let i = 0; i < templates.subject_good_evil.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 두 번째 철학자 지혜 공리
      for (let i = 0; i < templates.subject_wise_foolish.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 개체별 속성 대립 그룹 구분선 추가
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }

    // 집단별 속성 대립 그룹 - 서브그룹별로 나누기
    if (groups.quantifierOpposition && groups.quantifierOpposition.length > 0) {
      // 새 집단 순방향
      for (let i = 0; i < templates.bird_good_evil_forward.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 새 집단 역방향
      for (let i = 0; i < templates.bird_good_evil_reverse.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 물고기 집단 순방향
      for (let i = 0; i < templates.fish_good_evil_forward.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 물고기 집단 역방향
      for (let i = 0; i < templates.fish_good_evil_reverse.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 개 집단 순방향
      for (let i = 0; i < templates.dog_good_evil_forward.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 개 집단 역방향
      for (let i = 0; i < templates.dog_good_evil_reverse.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 마르크스 공리가 있으면 추가
      const remainingAxioms = axioms.slice(axiomIndex);
      const marxAxioms = remainingAxioms.filter((a) => {
        const text = propositionToNaturalText(a.proposition);
        return text.includes("브루주아") || text.includes("Bourgeois");
      });

      if (marxAxioms.length > 0) {
        // 서브그룹 구분선
        addPremiseToWorkbench({
          type: "separator",
          label: "",
          proposition: null,
          isSeparator: true,
        });

        marxAxioms.forEach((axiomData) => {
          addPremiseToWorkbench({
            ...axiomData,
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        });
      }

      // 집단별 속성 대립 그룹 마지막 구분선 추가
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }
  } else {
    // 기존 방식으로 공리 추가 (하위 호환성)
    axioms.forEach((propData) => {
      addPremiseToWorkbench({
        ...propData,
        label: currentLang.labels.axiom,
      });
    });

    // 공리 마지막 구분선 추가
    if (axioms.length > 0) {
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }
  }

  // 공리가 아닌 명제들 추가
  nonAxioms.forEach((propData) => {
    let label;
    switch (propData.type) {
      case "victory":
        label = currentLang.labels.victory_condition;
        break;
      case "theorem":
        label = currentLang.labels.theorem;
        break;
      default:
        label = currentLang.labels.proposition;
    }
    addPremiseToWorkbench({
      proposition: propData.proposition,
      type: propData.type,
      dependsOnAssumption: false,
      isAssumption: false,
      label: label,
    });
  });
  const modalTitle = document.getElementById("eureka-title");
  const confirmBtn = document.getElementById("modal-confirm-btn");
  if (isThinkingTime) {
    modalTitle.textContent = currentLang.modals.eurekaTitleTheorem;
    confirmBtn.textContent = currentLang.modals.confirmTheoremButton;
    confirmBtn.onclick = addTheoremsToList;
  } else {
    modalTitle.textContent = currentLang.modals.eurekaTitleVictory;
    confirmBtn.textContent = currentLang.modals.confirmVictoryButton;
    confirmBtn.onclick = proveVictory;
  }
  renderModal();
  document.getElementById("inference-rule-select").onchange =
    updateConclusionPreview;

  // 추론 규칙을 전건 긍정으로 초기화
  document.getElementById("inference-rule-select").value = "modusPonens";

  updateConclusionPreview(); // Initialize preview

  modal.classList.add("visible");

  // DOM 렌더링 후 스크롤 위치를 맨 아래로 설정 (애니메이션 없이)
  setTimeout(() => {
    if (premiseList) {
      // 마지막 자식 요소를 찾아서 스크롤
      const lastChild = premiseList.lastElementChild;
      if (lastChild) {
        lastChild.scrollIntoView({ block: "end" });
      } else {
        // 자식 요소가 없으면 직접 스크롤
        premiseList.scrollTop = premiseList.scrollHeight;
      }
    }
  }, 0);
}

function addAssumption() {
  if (currentAssumption) {
    showAlert(currentLang.alerts.oneAssumptionOnly);
    return;
  }
  showPrompt(currentLang.modals.promptInputPlaceholder, (propositionText) => {
    if (propositionText) {
      const parsedProp = parsePropositionFromString(propositionText);
      if (parsedProp) {
        currentAssumption = parsedProp;
        addPremiseToWorkbench({
          proposition: parsedProp,
          type: "assumption",
          dependsOnAssumption: true,
          isAssumption: true,
          label: currentLang.labels.assumption,
        });
        // 가정 추가 성공 시 pop 사운드 재생
        audioManager.playSfx("pop");
        renderModal();
        updateConclusionPreview();

        // 가정 추가 성공 시 스크롤을 맨 아래로 부드럽게 이동
        setTimeout(() => {
          const premiseList = document.getElementById("premise-list");
          if (premiseList) {
            const lastChild = premiseList.lastElementChild;
            if (lastChild) {
              lastChild.scrollIntoView({
                behavior: "smooth",
                block: "end",
              });
            } else {
              premiseList.scrollTo({
                top: premiseList.scrollHeight,
                behavior: "smooth",
              });
            }
          }
        }, 100);
      } else {
        showAlert(currentLang.alerts.parsingFailed);
      }
    }
  });
}

function cancelAssumption() {
  if (inTutorialMode) return;
  currentAssumption = null;
  derivedPropositionsInModal = derivedPropositionsInModal.filter(
    (p) => !p.dependsOnAssumption
  );
  renderModal();
  updateConclusionPreview();
}

function addPremiseToWorkbench(propObject) {
  derivedPropositionsInModal.push(propObject);
}

function applyRule() {
  const selectedLis = Array.from(
    document.querySelectorAll('#premise-list input[type="checkbox"]:checked')
  );
  const rule = document.getElementById("inference-rule-select").value;

  // 이 증명에 직접적으로 사용된 전제 데이터 (이것이 부모 전제가 됨)
  const premisesData = selectedLis.map((chk) =>
    JSON.parse(chk.parentElement.dataset.propObject)
  );
  const premises = premisesData.map((data) => data.proposition);
  let conclusions = [];

  const onePremiseRules = [
    "conjunctionElimination",
    "doubleNegationElimination",
    "conditionalIntroduction",
    "existentialInstantiation",
  ];
  const twoPremiseRules = [
    "modusPonens",
    "modusTollens",
    "hypotheticalSyllogism",
    "disjunctiveSyllogism",
    "universalApplication",
  ];
  const threePremiseRules = ["proofByCases"];

  if (rule === "conditionalIntroduction") {
    if (premises.length !== 1) {
      showAlert(currentLang.alerts.premiseNeededForIntro);
      return;
    }
    if (!currentAssumption) {
      showAlert(currentLang.alerts.assumptionNeededForIntro);
      return;
    }
    const conclusionData = premisesData[0];
    if (!conclusionData.dependsOnAssumption) {
      showAlert(currentLang.alerts.premiseNotFromAssumption);
      return;
    }
    const newConditional = {
      type: "conditional",
      left: currentAssumption,
      right: conclusionData.proposition,
    };

    // '가정'과 그로부터 도출된 '결론' 모두를 source로 추적
    const assumptionData = derivedPropositionsInModal.find(
      (p) => p.isAssumption
    );
    const sourcePremisesForCI = [assumptionData, conclusionData];

    derivedPropositionsInModal = derivedPropositionsInModal.filter(
      (p) => !p.dependsOnAssumption
    );
    currentAssumption = null;
    addPremiseToWorkbench({
      proposition: newConditional,
      type: "theorem",
      dependsOnAssumption: false,
      isAssumption: false,
      label: currentLang.labels.ci_theorem,
      sourcePremises: sourcePremisesForCI, // source 정보 추가
    });
    // 조건부 도입 성공 시 사운드 재생
    audioManager.playSfx("pop");
  } else if (rule === "reductioAdAbsurdum") {
    if (premises.length !== 2) {
      showAlert(currentLang.alerts.contradictionNeededForRAA);
      return;
    }
    if (!currentAssumption) {
      showAlert(currentLang.alerts.assumptionNeededForRAA);
      return;
    }

    // '가정'과 모순을 이끌어낸 '두 전제' 모두를 source로 추적
    const assumptionData = derivedPropositionsInModal.find(
      (p) => p.isAssumption
    );
    const sourcePremisesForRAA = [assumptionData, ...premisesData];

    const result = reductioAdAbsurdum(
      premises[0],
      premises[1],
      currentAssumption
    );
    if (result) {
      derivedPropositionsInModal = derivedPropositionsInModal.filter(
        (p) => !p.dependsOnAssumption
      );
      currentAssumption = null;
      addPremiseToWorkbench({
        proposition: result,
        type: "theorem",
        dependsOnAssumption: false,
        isAssumption: false,
        label: currentLang.labels.raa_theorem,
        sourcePremises: sourcePremisesForRAA, // source 정보 추가
      });
      // 귀류법 성공 시 사운드 재생
      audioManager.playSfx("pop");
    } else {
      showAlert(currentLang.alerts.notAContradiction);
    }
  } else if (threePremiseRules.includes(rule)) {
    if (premises.length !== 3) {
      showAlert(currentLang.alerts.premiseCountError.replace("{count}", 3));
      return;
    }
    const result = window[rule](premises[0], premises[1], premises[2]);
    if (result) conclusions.push(result);
  } else if (twoPremiseRules.includes(rule)) {
    if (premises.length !== 2) {
      showAlert(currentLang.alerts.premiseCountError.replace("{count}", 2));
      return;
    }
    const result = window[rule](premises[0], premises[1]);
    if (result) conclusions.push(result);
  } else if (onePremiseRules.includes(rule)) {
    if (premises.length !== 1) {
      showAlert(currentLang.alerts.premiseCountError.replace("{count}", 1));
      return;
    }
    const result = window[rule](premises[0]);
    if (result) {
      if (Array.isArray(result)) conclusions.push(...result);
      else conclusions.push(result);
    }
  }

  if (conclusions.length > 0 && conclusions[0] != null) {
    const isDependent = premisesData.some((p) => p.dependsOnAssumption);
    conclusions.forEach((conc) => {
      addPremiseToWorkbench({
        proposition: conc,
        type: "theorem",
        dependsOnAssumption: isDependent,
        isAssumption: false,
        label: currentLang.labels.theorem,
        sourcePremises: premisesData, // source 정보 추가
      });
    });
    // 추론 규칙 적용 성공 시 사운드 재생
    audioManager.playSfx("pop");
  } else if (
    rule !== "reductioAdAbsurdum" &&
    rule !== "conditionalIntroduction" &&
    conclusions.length === 0
  ) {
    showAlert(currentLang.alerts.ruleFailed);
  }

  renderModal();
  updateConclusionPreview();

  // 추론 규칙 적용 성공 시 스크롤을 맨 아래로 부드럽게 이동
  if (conclusions.length > 0) {
    setTimeout(() => {
      const premiseList = document.getElementById("premise-list");
      if (premiseList) {
        const lastChild = premiseList.lastElementChild;
        if (lastChild) {
          lastChild.scrollIntoView({ behavior: "smooth", block: "end" });
        } else {
          premiseList.scrollTo({
            top: premiseList.scrollHeight,
            behavior: "smooth",
          });
        }
      }
    }, 100);
  }
}

function addTheoremsToList() {
  const selectedLis = Array.from(
    document.querySelectorAll('#premise-list input[type="checkbox"]:checked')
  );
  if (selectedLis.length === 0) {
    showAlert(currentLang.alerts.noTheoremsToAdd);
    return;
  }

  const selectedPropsData = selectedLis.map((chk) =>
    JSON.parse(chk.parentElement.dataset.propObject)
  );

  let potentialTheorems = selectedPropsData.filter(
    (p) => p.type === "theorem" && !p.dependsOnAssumption
  );

  const trulyNewTheorems = potentialTheorems.filter((theoremData) => {
    const isAxiom = parsedAxioms.some((a) =>
      arePropositionsEqual(a.proposition, theoremData.proposition)
    );
    const isAlreadyProven = truePropositions.some(
      (p) =>
        p.proposition &&
        arePropositionsEqual(p.proposition, theoremData.proposition)
    );
    return !isAxiom && !isAlreadyProven;
  });

  if (trulyNewTheorems.length === 0) {
    showAlert(currentLang.alerts.duplicateProposition);
    return;
  }

  let theoremsAdded = 0;
  for (const theoremData of trulyNewTheorems) {
    const verificationResult = verifyAndExpandTruths(theoremData.proposition);

    if (verificationResult.success) {
      truePropositions.push({
        propId: `prop_${Date.now()}_${Math.random()}`, // ✅ 이 줄이 추가되었습니다.
        type: "theorem",
        round: currentRound,
        proposition: theoremData.proposition,
      });
      internalTruthSet = verificationResult.expandedSet;
      theoremsAdded++;
    } else {
      console.error(
        "Contradiction detected while adding a new theorem.",
        theoremData.proposition
      );
      showAlert(currentLang.alerts.contradictionFound);
      break;
    }
  }

  if (theoremsAdded > 0) {
    document.getElementById("eureka-modal").classList.remove("visible");
    render();
  }
}

function proveVictory() {
  if (isThinkingTime) return;

  if (inPuzzleMode) {
    const myVictoryCondition = truePropositions.find(
      (p) => p.type === "victory" && p.owner === "A"
    );
    const opponentVictoryCondition = truePropositions.find(
      (p) => p.type === "victory" && p.owner === "B"
    );

    if (!myVictoryCondition || !opponentVictoryCondition) return;

    const myUltimateTarget = myVictoryCondition.ultimate_target;
    const opponentLossCondition = {
      type: "negation",
      proposition: opponentVictoryCondition.ultimate_target,
    };

    const isMyVictoryProven = derivedPropositionsInModal.some(
      (p) =>
        !p.dependsOnAssumption &&
        arePropositionsEqual(p.proposition, myUltimateTarget)
    );
    const isOpponentLossProven = derivedPropositionsInModal.some(
      (p) =>
        !p.dependsOnAssumption &&
        arePropositionsEqual(p.proposition, opponentLossCondition)
    );

    if (isMyVictoryProven || isOpponentLossProven) {
      try {
        // 1. 기존 클리어 데이터 불러오기 (없으면 빈 객체)
        const clearedPuzzles =
          JSON.parse(localStorage.getItem("logos_cleared_puzzles")) || {};
        // 2. 현재 클리어한 퍼즐 번호 기록
        clearedPuzzles[currentPuzzleLevel] = true;
        // 3. 다시 로컬 스토리지에 저장
        localStorage.setItem(
          "logos_cleared_puzzles",
          JSON.stringify(clearedPuzzles)
        );
      } catch (e) {
        console.error("퍼즐 클리어 데이터 저장 실패:", e);
      }

      showAlert(currentLang.alerts.puzzleCleared, () => {
        document.getElementById("eureka-modal").classList.remove("visible");
        document.getElementById("puzzle-goal-box").classList.add("hidden");
        inPuzzleMode = false;
        populatePuzzleLevels();
        document
          .getElementById("puzzle-level-select-modal")
          .classList.add("visible");
      });
    } else {
      showAlert(
        currentLang.alerts.proofIncomplete
          .replace("{myGoal}", propositionToPlainText(myUltimateTarget))
          .replace(
            "{opponentGoal}",
            propositionToPlainText(opponentLossCondition)
          )
      );
    }
    return; // 퍼즐 모드일 경우 여기서 함수 종료
  }

  // --- 튜토리얼 마지막 단계 성공 처리 로직 (새로 추가된 부분) ---
  if (inTutorialMode && tutorialStep === 8) {
    const myVictoryCondition = truePropositions.find(
      (p) => p.type === "victory" && p.owner === currentPlayer
    );
    const opponentPlayer = currentPlayer === "A" ? "B" : "A";
    const opponentVictoryCondition = truePropositions.find(
      (p) => p.type === "victory" && p.owner === opponentPlayer
    );

    if (!myVictoryCondition || !opponentVictoryCondition) return;

    const myUltimateTarget = myVictoryCondition.ultimate_target;
    const opponentLossCondition = {
      type: "negation",
      proposition: opponentVictoryCondition.ultimate_target,
    };

    const isMyVictoryProven = derivedPropositionsInModal.some(
      (p) =>
        !p.dependsOnAssumption &&
        arePropositionsEqual(p.proposition, myUltimateTarget)
    );
    const isOpponentLossProven = derivedPropositionsInModal.some(
      (p) =>
        !p.dependsOnAssumption &&
        arePropositionsEqual(p.proposition, opponentLossCondition)
    );

    if (isMyVictoryProven || isOpponentLossProven) {
      // 성공 시, 새로 추가한 알림 메시지를 띄우고 확인을 누르면 튜토리얼을 종료합니다.
      showAlert(currentLang.alerts.tutorialVictory, endTutorial);
    } else {
      // 실패 시, 기존처럼 증명 미완료 메시지를 띄웁니다.
      showAlert(
        currentLang.alerts.proofIncomplete
          .replace("{myGoal}", propositionToPlainText(myUltimateTarget))
          .replace(
            "{opponentGoal}",
            propositionToPlainText(opponentLossCondition)
          )
      );
    }
    return; // 튜토리얼 케이스 처리가 끝나면 함수를 즉시 종료합니다.
  }
  // --- 튜토리얼 로직 끝 ---

  // --- 이하 기존의 일반 게임 승리 증명 로직 ---
  const myVictoryCondition = truePropositions.find(
    (p) => p.type === "victory" && p.owner === currentPlayer
  );
  if (!myVictoryCondition) return;
  const myUltimateTarget = myVictoryCondition.ultimate_target;

  const opponentPlayer = currentPlayer === "A" ? "B" : "A";
  const opponentVictoryCondition = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponentPlayer
  );
  if (!opponentVictoryCondition) return;
  const opponentLossCondition = {
    type: "negation",
    proposition: opponentVictoryCondition.ultimate_target,
  };

  const isMyVictoryProven = derivedPropositionsInModal.some(
    (p) =>
      !p.dependsOnAssumption &&
      arePropositionsEqual(p.proposition, myUltimateTarget)
  );
  const isOpponentLossProven = derivedPropositionsInModal.some(
    (p) =>
      !p.dependsOnAssumption &&
      arePropositionsEqual(p.proposition, opponentLossCondition)
  );

  if (isMyVictoryProven || isOpponentLossProven) {
    const newTheorems = derivedPropositionsInModal.filter(
      (p) =>
        p.type === "theorem" &&
        !p.dependsOnAssumption &&
        !truePropositions.some((existing) =>
          arePropositionsEqual(p.proposition, existing.proposition)
        )
    );

    for (const theoremData of newTheorems) {
      const verificationResult = verifyAndExpandTruths(theoremData.proposition);
      if (verificationResult.success) {
        internalTruthSet = verificationResult.expandedSet;
      } else {
        console.error(
          "치명적 오류: 승리 증명에 사용된 정리가 기존 사실과 모순됩니다.",
          theoremData
        );
        showAlert(currentLang.alerts.criticalErrorUndo);
        return;
      }
    }
    endGame(currentPlayer);
    return;
  }

  showAlert(
    currentLang.alerts.proofIncomplete
      .replace("{myGoal}", propositionToPlainText(myUltimateTarget))
      .replace("{opponentGoal}", propositionToPlainText(opponentLossCondition))
  );
}

function render() {
  if (playerA_Data && playerB_Data) {
    // 데이터가 있을 때만 실행
    const isMirrorMatch = playerA_Data.id === playerB_Data.id;
    if (isMirrorMatch) {
      // 미러전일 경우
      document.getElementById("player-a-title").innerHTML = `⚪️ ${
        playerA_Data.name[currentLang.langCode]
      }(백)`;
      document.getElementById("player-b-title").innerHTML = `⚫️ ${
        playerB_Data.name[currentLang.langCode]
      }(흑)`;
    } else {
      // 일반 대전일 경우
      document.getElementById("player-a-title").innerHTML = `⚪️ ${
        playerA_Data.name[currentLang.langCode]
      }`;
      document.getElementById("player-b-title").innerHTML = `⚫️ ${
        playerB_Data.name[currentLang.langCode]
      }`;
    }
  }
  document.getElementById("round-display").textContent =
    currentLang.ui.roundDisplay.replace("{round}", currentRound);
  const handA_El = document.getElementById("player-a-hand"),
    handB_El = document.getElementById("player-b-hand");
  handA_El.innerHTML = "";
  handB_El.innerHTML = "";
  playerA_Hand.sort(
    (a, b) => cardTypeOrder.indexOf(a.type) - cardTypeOrder.indexOf(b.type)
  );
  playerB_Hand.sort(
    (a, b) => cardTypeOrder.indexOf(a.type) - cardTypeOrder.indexOf(b.type)
  );
  let lastTypeA = null;
  playerA_Hand.forEach((card) => {
    if (card.type !== lastTypeA) {
      if (lastTypeA !== null) {
        const br = document.createElement("div");
        br.style.flexBasis = "100%";
        br.style.height = "0";
        handA_El.appendChild(br);
      }
      lastTypeA = card.type;
    }
    const cardEl = document.createElement("div");
    cardEl.className = "card card-white";
    cardEl.textContent = card.text;
    // 사유 시간에는 모든 카드를 비활성화
    if (isThinkingTime) {
      cardEl.classList.add("unplayable");
    } else {
      // 사유 시간이 아닐 때의 기존 로직
      if (gameMode === "AI" && aiPlayer === "A") {
        cardEl.classList.add("ai-hand");
      } else {
        if (currentPlayer === "A" && !gameIsOver) {
          if (cardsPlayedThisTurn["A"] >= 1) {
            cardEl.classList.add("unplayable");
          } else {
            if (isValidPlay(card, currentProposition)) {
              cardEl.addEventListener("click", () => {
                if (!inTutorialMode) playCard("A", card);
              });
            } else {
              cardEl.classList.add("unplayable");
            }
          }
        }
      }
    }
    handA_El.appendChild(cardEl);
  });
  let lastTypeB = null;
  playerB_Hand.forEach((card) => {
    if (card.type !== lastTypeB) {
      if (lastTypeB !== null) {
        const br = document.createElement("div");
        br.style.flexBasis = "100%";
        br.style.height = "0";
        handB_El.appendChild(br);
      }
      lastTypeB = card.type;
    }
    const cardEl = document.createElement("div");
    cardEl.className = "card card-black";
    cardEl.textContent = card.text;
    // 사유 시간에는 모든 카드를 비활성화
    if (isThinkingTime) {
      cardEl.classList.add("unplayable");
    } else {
      // 사유 시간이 아닐 때의 기존 로직
      if (gameMode === "AI" && aiPlayer === "B") {
        cardEl.classList.add("ai-hand");
      } else {
        if (currentPlayer === "B" && !gameIsOver) {
          if (cardsPlayedThisTurn["B"] >= 1) {
            cardEl.classList.add("unplayable");
          } else {
            if (isValidPlay(card, currentProposition)) {
              cardEl.addEventListener("click", () => {
                if (!inTutorialMode) playCard("B", card);
              });
            } else {
              cardEl.classList.add("unplayable");
            }
          }
        }
      }
    }
    handB_El.appendChild(cardEl);
  });
  const propositionEl = document.getElementById("proposition-display");
  propositionEl.innerHTML = "";
  currentProposition.forEach((info) => {
    const cardEl = document.createElement("div");
    const colorClass = info.player === "A" ? "card-white" : "card-black";
    cardEl.className = `card ${colorClass}`;
    cardEl.textContent = info.card.text;
    propositionEl.appendChild(cardEl);
  });
  const trueList_El = document.getElementById("true-list");
  trueList_El.innerHTML = "";
  const liAxiom = document.createElement("li");
  liAxiom.className = "axiom-wrapper";
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = currentLang.ui.axiomTitle;
  details.appendChild(summary);
  const axiomContainer = document.createElement("div");
  axiomContainer.className = "axiom-list";

  // 공리들을 그룹별로 표시
  if (currentAxioms.groups) {
    const groups = currentAxioms.groups;

    // 정체성 공리
    if (groups.identity.length > 0) {
      groups.identity.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const separator = document.createElement("hr");
      separator.style.margin = "8px 0";
      separator.style.border = "none";
      separator.style.borderTop = "1px solid #ddd";
      axiomContainer.appendChild(separator);
    }

    // 개체별 속성 대립 - 세부 그룹으로 나누기
    if (groups.subjectOpposition.length > 0) {
      const templates = currentLang.axiom_templates;
      const subjectA = playerA_Data
        ? playerA_Data.cardText[currentLang.langCode]
        : "";
      const subjectB = playerB_Data
        ? playerB_Data.cardText[currentLang.langCode]
        : "";

      // 첫 번째 철학자 선악 공리
      templates.subject_good_evil.forEach((template) => {
        const axiomText = template.replaceAll("{S}", subjectA);
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep1 = document.createElement("hr");
      sep1.style.margin = "4px 0";
      sep1.style.border = "none";
      sep1.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep1);

      // 첫 번째 철학자 지혜 공리
      templates.subject_wise_foolish.forEach((template) => {
        const axiomText = template.replaceAll("{S}", subjectA);
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep2 = document.createElement("hr");
      sep2.style.margin = "4px 0";
      sep2.style.border = "none";
      sep2.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep2);

      // 두 번째 철학자 선악 공리
      templates.subject_good_evil.forEach((template) => {
        const axiomText = template.replaceAll("{S}", subjectB);
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep3 = document.createElement("hr");
      sep3.style.margin = "4px 0";
      sep3.style.border = "none";
      sep3.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep3);

      // 두 번째 철학자 지혜 공리
      templates.subject_wise_foolish.forEach((template) => {
        const axiomText = template.replaceAll("{S}", subjectB);
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const separator = document.createElement("hr");
      separator.style.margin = "8px 0";
      separator.style.border = "none";
      separator.style.borderTop = "1px solid #ddd";
      axiomContainer.appendChild(separator);
    }

    // 집단별 속성 대립 - 세부 그룹으로 나누기
    if (groups.quantifierOpposition.length > 0) {
      const templates = currentLang.axiom_templates;

      // 새 집단 순방향
      templates.bird_good_evil_forward.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep4 = document.createElement("hr");
      sep4.style.margin = "4px 0";
      sep4.style.border = "none";
      sep4.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep4);

      // 새 집단 역방향
      templates.bird_good_evil_reverse.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep5 = document.createElement("hr");
      sep5.style.margin = "4px 0";
      sep5.style.border = "none";
      sep5.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep5);

      // 물고기 집단 순방향
      templates.fish_good_evil_forward.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep6 = document.createElement("hr");
      sep6.style.margin = "4px 0";
      sep6.style.border = "none";
      sep6.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep6);

      // 물고기 집단 역방향
      templates.fish_good_evil_reverse.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep7 = document.createElement("hr");
      sep7.style.margin = "4px 0";
      sep7.style.border = "none";
      sep7.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep7);

      // 개 집단 순방향
      templates.dog_good_evil_forward.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      const sep8 = document.createElement("hr");
      sep8.style.margin = "4px 0";
      sep8.style.border = "none";
      sep8.style.borderTop = "1px solid #ccc";
      axiomContainer.appendChild(sep8);

      // 개 집단 역방향
      templates.dog_good_evil_reverse.forEach((axiomText) => {
        const p = document.createElement("p");
        p.textContent = `• ${axiomText}`;
        axiomContainer.appendChild(p);
      });

      // 마르크스 공리가 있으면 추가
      if (
        currentAxioms.some(
          (axiom) => axiom.includes("브루주아") || axiom.includes("Bourgeois")
        )
      ) {
        const sep9 = document.createElement("hr");
        sep9.style.margin = "4px 0";
        sep9.style.border = "none";
        sep9.style.borderTop = "1px solid #ccc";
        axiomContainer.appendChild(sep9);

        currentAxioms
          .filter(
            (axiom) => axiom.includes("브루주아") || axiom.includes("Bourgeois")
          )
          .forEach((axiomText) => {
            const p = document.createElement("p");
            p.textContent = `• ${axiomText}`;
            axiomContainer.appendChild(p);
          });
      }
    }
  } else {
    // 기존 방식 (하위 호환성)
    currentAxioms.forEach((axiomText) => {
      const p = document.createElement("p");
      p.textContent = `• ${axiomText}`;
      axiomContainer.appendChild(p);
    });
  }

  details.appendChild(axiomContainer);
  liAxiom.appendChild(details);
  trueList_El.appendChild(liAxiom);

  truePropositions.forEach((propData) => {
    if (propData.source === "nietzsche_ability") {
      console.log("니체 명제 렌더링 시점: ", propData);
    }
    const li = document.createElement("li");

    // 이제 propData에 ID가 있는지, 그리고 그 ID가 비활성화 목록에 있는지 확인합니다.
    const isDisabled =
      propData.propId &&
      socratesDisabledProps.some((dp) => dp.propId === propData.propId);

    if (isDisabled) {
      li.classList.add("socrates-disabled");
    }

    if (propData.type === "victory") {
      li.classList.add("victory-condition");

      if (propData.source === "marx_revolution") {
        li.classList.add("marx-victory-condition");
      }
      const ownerName = getLastName(
        propData.owner === "A"
          ? playerA_Data.name[currentLang.langCode]
          : playerB_Data.name[currentLang.langCode]
      );
      const ownerPrefix =
        propData.owner === "A" ? `⚪️ ${ownerName}` : `⚫️ ${ownerName}`;
      li.innerHTML = currentLang.labels.victory_text
        .replace("{owner}", ownerPrefix)
        .replace("{text}", propData.text);
    } else if (propData.type === "user-made") {
      // 1. 모든 'user-made' 명제에 대해 단어 색상을 먼저 입힙니다.
      if (propData.original_cards && propData.original_cards.length > 0) {
        propData.original_cards.forEach((info) => {
          const wordSpan = document.createElement("span");
          wordSpan.textContent = info.card.text + " ";
          wordSpan.className = info.player === "A" ? "word-a" : "word-b";
          li.appendChild(wordSpan);
        });
      } else if (propData.proposition) {
        li.textContent = propositionToPlainText(propData.proposition);
      }

      // 2. 만약 니체의 능력으로 만들어진 명제라면, 스타일 클래스와 라벨을 추가합니다.
      if (propData.source === "nietzsche_ability") {
        li.classList.add("nietzsche-theorem"); // [추가] 니체 명제에 전용 클래스 추가

        const rawLabel = currentLang.labels.nietzsche_ability_source;
        const labelText = rawLabel.replace("{text}", "").trim();

        const labelSpan = document.createElement("span");
        labelSpan.textContent = ` ${labelText}`;
        li.appendChild(labelSpan);
      }
    } else if (propData.type === "theorem") {
      let theoremText = propositionToPlainText(propData.proposition);

      // 2. 정규식을 사용하여 모든 괄호를 제거합니다.
      let strippedText = theoremText.replace(/\(|\)/g, "");

      // 3. 능력의 종류에 따라 적절한 라벨을 붙여 최종 텍스트를 완성합니다.
      if (propData.source === "plato_ability") {
        li.classList.add("plato-theorem");
        li.textContent = currentLang.labels.plato_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else if (propData.source === "wittgenstein_ability") {
        li.classList.add("wittgenstein-theorem");
        li.textContent = currentLang.labels.wittgenstein_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else if (propData.source === "derrida_ability") {
        li.classList.add("derrida-theorem");
        li.textContent = currentLang.labels.derrida_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else if (propData.source === "hume_ability") {
        li.classList.add("hume-theorem");
        li.textContent = currentLang.labels.hume_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else if (propData.source === "kuhn_ability") {
        li.classList.add("kuhn-theorem");
        li.textContent = currentLang.labels.kuhn_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else if (propData.source === "kant_ability") {
        li.classList.add("kant-theorem");
        li.textContent = currentLang.labels.kant_ability_source.replace(
          "{text}",
          strippedText // 괄호가 모두 제거된 텍스트 사용
        );
      } else {
        // 일반적인 정리일 경우
        li.classList.add("theorem");
        li.textContent = currentLang.labels.theorem_source
          .replace("{text}", strippedText) // 괄호가 모두 제거된 텍스트 사용
          .replace("{round}", propData.round);
      }
    }

    if (isDisabled) {
      li.textContent +=
        currentLang.langCode === "ko"
          ? " (무지의 자각)"
          : " (Awareness of Ignorance)";
    }

    trueList_El.appendChild(li);
  });

  const playerATitleBox = document.querySelector(
    "#player-a-area .player-title-box"
  );
  const playerBTitleBox = document.querySelector(
    "#player-b-area .player-title-box"
  );

  if (playerATitleBox && playerBTitleBox) {
    // 사유 시간인지 일반 턴인지에 따라 현재 활성화된 플레이어를 결정
    const activePlayer = isThinkingTime ? thinkingTimeTurn : currentPlayer;

    // 게임오버가 아닐 때, 활성화된 플레이어에게만 'active-turn' 클래스를 적용
    playerATitleBox.classList.toggle(
      "active-turn",
      activePlayer === "A" && !gameIsOver
    );
    playerBTitleBox.classList.toggle(
      "active-turn",
      activePlayer === "B" && !gameIsOver
    );
  }

  const statusEl = document.getElementById("status");
  const mainCenter = document.querySelector(".main-center-bg");

  if (mainCenter && !mainCenter.classList.contains("hidden")) {
    statusEl.innerHTML = "";
  } else {
    const playerAreaA = document.getElementById("player-a-area"),
      playerAreaB = document.getElementById("player-b-area");
    const eurekaBtnA = document.getElementById("eureka-a"),
      eurekaBtnB = document.getElementById("eureka-b");
    const completeBtn = document.getElementById("complete-btn"),
      undoBtn = document.getElementById("undo-btn"),
      endTurnBtn = document.getElementById("end-turn-btn");

    let winnerName = "";
    if (gameIsOver) {
      statusEl.style.color = "#c0392b";
      playerAreaA.classList.add("disabled");
      playerAreaB.classList.add("disabled");
      eurekaBtnA.disabled = true;
      eurekaBtnB.disabled = true;
      completeBtn.disabled = true;
      undoBtn.disabled = true;
      endTurnBtn.disabled = true;
    } else if (isThinkingTime) {
      // 1. 전용 UI의 제목과 설명을 업데이트합니다.
      document.getElementById("thinking-time-title").textContent =
        currentLang.ui.thinkingTimeTitle;
      document.getElementById("thinking-time-desc").innerHTML =
        currentLang.ui.thinkingTimeDesc;

      // 2. 하단 상태바에 현재 턴인 플레이어를 표시합니다.
      const thinkingPlayerName = getLastName(
        thinkingTimeTurn === "A"
          ? playerA_Data.name[currentLang.langCode]
          : playerB_Data.name[currentLang.langCode]
      );
      const thinkingPlayerColor = thinkingTimeTurn === "A" ? "⚪️" : "⚫️";
      statusEl.innerHTML = `<span class="turn-indicator">${thinkingPlayerColor} ${thinkingPlayerName}${currentLang.ui.thinkingTimeTurnMessage}</span>`;

      // 3. 현재 턴인 플레이어의 영역만 활성화합니다.
      if (thinkingTimeTurn === "A") {
        playerAreaA.classList.remove("disabled");
        playerAreaB.classList.add("disabled");
        eurekaBtnA.disabled = gameMode === "AI" && aiPlayer === "A";
        eurekaBtnB.disabled = true;
      } else {
        // thinkingTimeTurn === 'B'
        playerAreaA.classList.add("disabled");
        playerAreaB.classList.remove("disabled");
        eurekaBtnA.disabled = true;
        eurekaBtnB.disabled = gameMode === "AI" && aiPlayer === "B";
      }

      // '유레카!' 버튼 텍스트를 '정리 추가'로 변경합니다.
      eurekaBtnA.textContent = currentLang.ui.addTheoremButton;
      eurekaBtnB.textContent = currentLang.ui.addTheoremButton;

      // 4. 중앙 하단의 컨트롤 버튼 상태를 설정합니다.
      // '명제 완성', '되돌리기' 버튼은 비활성화하고, '턴 종료' 버튼은 활성화합니다.
      completeBtn.disabled = true;
      undoBtn.disabled = true;
      endTurnBtn.disabled =
        (gameMode === "AI" && thinkingTimeTurn === aiPlayer) ||
        (inTutorialMode && thinkingTimeTurn !== "A");
    } else {
      statusEl.style.color = "#333";
      eurekaBtnA.textContent = currentLang.ui.eurekaButton;
      eurekaBtnB.textContent = currentLang.ui.eurekaButton;
      const isAITurn = gameMode === "AI" && currentPlayer === aiPlayer;
      const isCompletable =
        currentProposition.length > 0 &&
        parsePropositionFromCards(currentProposition) !== null;

      if (isAITurn) {
        statusEl.innerHTML = `<span class="turn-indicator">${currentLang.ui.statusAITurn}</span>`;
        playerAreaA.classList.add("disabled");
        playerAreaB.classList.add("disabled");
        eurekaBtnA.disabled = true;
        eurekaBtnB.disabled = true;
        completeBtn.disabled = true;
        undoBtn.disabled = true;
        endTurnBtn.disabled = true;
      } else {
        if (currentPlayer === "A") {
          const playerAName = playerA_Data
            ? getLastName(playerA_Data.name[currentLang.langCode])
            : currentLang.ui.playerAName;
          statusEl.innerHTML = `<span class="turn-indicator">⚪️ ${playerAName}${currentLang.ui.statusTurn}</span>`;
          playerAreaA.classList.remove("disabled");
          playerAreaB.classList.add("disabled");
          // ⭐️ 핵심 수정: eurekaUsedInRound['A']가 true이면 버튼 비활성화
          eurekaBtnA.disabled = eurekaUsedInRound["A"];
          eurekaBtnB.disabled = true;
        } else {
          const playerBName = playerB_Data
            ? getLastName(playerB_Data.name[currentLang.langCode])
            : currentLang.ui.playerBName;
          statusEl.innerHTML = `<span class="turn-indicator">⚫️ ${playerBName}${currentLang.ui.statusTurn}</span>`;
          playerAreaB.classList.remove("disabled");
          playerAreaA.classList.add("disabled");
          eurekaBtnA.disabled = true;
          // ⭐️ 핵심 수정: eurekaUsedInRound['B']가 true이면 버튼 비활성화
          eurekaBtnB.disabled = eurekaUsedInRound["B"];
        }
        completeBtn.disabled =
          !isCompletable || lastCardPlayer === currentPlayer;
        undoBtn.disabled = cardsPlayedThisTurn[currentPlayer] === 0;
        endTurnBtn.disabled = cardsPlayedThisTurn[currentPlayer] === 0;
      }
    }
    updateAbilityButtonsState();
  }
}

function renderModal() {
  const premiseList = document.getElementById("premise-list");
  premiseList.innerHTML = "";

  const hasAssumption = !!currentAssumption;
  document.getElementById("add-assumption-btn").disabled = hasAssumption;
  document.getElementById("cancel-assumption-btn").style.display = hasAssumption
    ? "inline-block"
    : "none";

  derivedPropositionsInModal.forEach((propData) => {
    // 구분선인 경우 특별히 처리
    if (propData.isSeparator) {
      const li = document.createElement("li");
      li.style.height = "8px";
      li.style.background = "transparent";
      li.style.border = "none";
      li.style.padding = "0";
      li.style.margin = "4px 0";
      li.style.pointerEvents = "none"; // 클릭 불가능
      li.style.listStyle = "none";
      li.innerHTML =
        "<hr style='border: none; border-top: 1px solid rgba(221, 221, 221, 0.3); margin: 0;'>";
      premiseList.appendChild(li);
      return;
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.dataset.propObject = JSON.stringify(propData);

    if (propData.isAssumption) li.classList.add("assumption-itself");
    else if (propData.dependsOnAssumption)
      li.classList.add("assumption-dependent");

    // 체크박스 비활성화는 handleTutorialRuleApplication에서 처리

    li.appendChild(checkbox);
    let tagClass = "";
    // propData.type에 따라 적절한 CSS 클래스를 할당합니다.
    switch (propData.type) {
      case "axiom":
        tagClass = "tag-axiom";
        break;
      case "victory":
        tagClass = "tag-victory";
        break;
      case "theorem":
        tagClass = "tag-theorem";
        break;
      case "assumption": // 가정을 위한 case 분리
        tagClass = "tag-assumption";
        break;
      default: // "user-made" 등 나머지는 "proposition"으로 처리
        tagClass = "tag-proposition";
        break;
    }

    // 클래스가 적용된 span 태그로 감싸서 HTML에 추가합니다.
    li.innerHTML += ` <span class="${tagClass}">${
      propData.label
    }</span> ${propositionToNaturalText(propData.proposition)}`;

    premiseList.appendChild(li);
  });
}
function updateConclusionPreview() {
  const titleEl = document.getElementById("conclusion-preview-title");
  const textEl = document.getElementById("conclusion-preview-text");

  // UI 텍스트 업데이트 (다국어 지원)
  titleEl.innerHTML =
    currentLang.langCode === "ko"
      ? "<strong>결론 미리보기</strong>"
      : "<strong>Conclusion Preview</strong>";

  const selectedLis = Array.from(
    document.querySelectorAll('#premise-list input[type="checkbox"]:checked')
  );
  const rule = document.getElementById("inference-rule-select").value;
  const premises = selectedLis
    .map((chk) => {
      const propString = chk.parentElement.dataset.propObject;
      return propString ? JSON.parse(propString).proposition : null;
    })
    .filter(Boolean);

  let conclusion = null;
  let requiredPremises = 0;

  // 각 규칙에 필요한 전제 개수 확인
  const onePremiseRules = [
    "conjunctionElimination",
    "doubleNegationElimination",
    "existentialInstantiation",
  ];
  const twoPremiseRules = [
    "modusPonens",
    "modusTollens",
    "hypotheticalSyllogism",
    "disjunctiveSyllogism",
    "universalApplication",
  ];
  const threePremiseRules = ["proofByCases"];

  if (onePremiseRules.includes(rule)) requiredPremises = 1;
  else if (twoPremiseRules.includes(rule)) requiredPremises = 2;
  else if (threePremiseRules.includes(rule)) requiredPremises = 3;
  else if (rule === "conditionalIntroduction") requiredPremises = 1;
  else if (rule === "reductioAdAbsurdum") requiredPremises = 2;

  if (premises.length === requiredPremises && requiredPremises > 0) {
    try {
      if (rule === "conditionalIntroduction") {
        if (currentAssumption) {
          conclusion = {
            type: "conditional",
            left: currentAssumption,
            right: premises[0],
          };
        }
      } else if (rule === "reductioAdAbsurdum") {
        conclusion = reductioAdAbsurdum(
          premises[0],
          premises[1],
          currentAssumption
        );
      } else if (threePremiseRules.includes(rule)) {
        conclusion = window[rule](premises[0], premises[1], premises[2]);
      } else if (twoPremiseRules.includes(rule)) {
        conclusion = window[rule](premises[0], premises[1]);
      } else if (onePremiseRules.includes(rule)) {
        conclusion = window[rule](premises[0]);
      }
    } catch (e) {
      console.error("Preview calculation error:", e);
      conclusion = null;
    }
  }

  if (conclusion) {
    if (Array.isArray(conclusion)) {
      // 단순화 규칙처럼 결과가 여러 개일 경우
      textEl.innerHTML = conclusion
        .map((c) => propositionToNaturalText(c))
        .join("<br>");
    } else {
      textEl.innerHTML = propositionToNaturalText(conclusion);
    }
  } else {
    textEl.innerHTML = `<i>${
      currentLang.langCode === "ko"
        ? "규칙을 적용할 수 없습니다."
        : "Cannot apply rule."
    }</i>`;
  }
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
document.getElementById("vs-player-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  // ✅ 1인 대전과 마찬가지로 새로운 캐릭터 선택 함수를 호출합니다.
  startCharacterSelection("2P");
});
document.getElementById("vs-ai-btn").addEventListener("click", () => {
  if (inTutorialMode || gameMode === "AI") return;
  document.querySelector(".main-center-bg").classList.add("hidden"); // 메인 센터 숨김
  document.getElementById("credits-btn").classList.add("hidden");
  document.getElementById("character-select-modal").classList.add("visible");
});

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

document.getElementById("vs-player-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  // ✅ 1인 대전과 마찬가지로 새로운 캐릭터 선택 함수를 호출합니다.
  startCharacterSelection("2P");
});
document.getElementById("vs-ai-btn").addEventListener("click", () => {
  if (inTutorialMode || gameMode === "AI") return;
  document.querySelector(".main-center-bg").classList.add("hidden");
  document.getElementById("credits-btn").classList.add("hidden");
  updateMainMenuBtnVisibility();
  document.getElementById("character-select-modal").classList.add("visible");
});

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
document.getElementById("main-menu-btn").addEventListener("click", () => {
  // 1. 튜토리얼 중이었다면 튜토리얼을 종료하고 메인 메뉴로 갑니다.
  if (inTutorialMode) {
    endTutorial(); // endTutorial 함수가 음악 전환을 포함한 모든 것을 처리합니다.
    return;
  }
  isTestMode = false;

  // 2. 게임 상태를 초기화합니다.
  clearAllAITimeouts();
  aiPlayer = null;
  gameMode = null;
  gameIsOver = true; // 게임이 끝났음을 명시

  // 3. 메인 메뉴 UI를 표시하고 관련 음악을 재생합니다.
  // 이 함수가 게임 음악 fade-out과 메뉴 음악 fade-in을 모두 담당합니다.
  showMainMenu();
});
document.getElementById("vs-player-btn").addEventListener("click", () => {
  if (inTutorialMode) return;
  // ✅ 1인 대전과 마찬가지로 새로운 캐릭터 선택 함수를 호출합니다.
  startCharacterSelection("2P");
});
document.getElementById("vs-ai-btn").addEventListener("click", () => {
  if (inTutorialMode || gameMode === "AI") return;
  document.querySelector(".main-center-bg").classList.add("hidden");
  document.getElementById("credits-btn").classList.add("hidden");
  updateMainMenuBtnVisibility();
  updateMainCenterVisibility();
  document.getElementById("character-select-modal").classList.add("visible");
});

// 초기화 시에도 호출
updateMainCenterVisibility();

// 초기화 시에도 호출
updateMainMenuBtnVisibility();

function clearAllAITimeouts() {
  if (aiTimeoutId) {
    clearTimeout(aiTimeoutId);
    aiTimeoutId = null;
  }
}
function goToMainMenu() {
  isTestMode = false;

  document.getElementById("character-selection-screen").classList.add("hidden");
  document.getElementById("character-select-indicator").classList.add("hidden");
  document.getElementById("turn-order-modal").classList.remove("visible");

  showMainMenu();

  tempSelections = { p1: null, p2: null };
  characterSelectionTurn = null;
  selectionMode = null;
  gameMode = null;
  aiPlayer = null;
  humanPlayerId = null;

  clearAllAITimeouts();
}

function promptAndSetupTestGame(selectedCharacters) {
  try {
    const victoryA = prompt(
      "플레이어 A(1P)의 승리 조건 서술어를 입력하세요. (예: 선하다, is wise)"
    );
    const victoryB = prompt(
      "플레이어 B(AI)의 승리 조건 서술어를 입력하세요. (예: 악하다, is evil)"
    );
    const handA = prompt(
      "플레이어 A의 초기 손패를 쉼표(,)로 구분하여 입력하세요. (예: 소크라테스는, 지혜롭다, 라면)"
    );
    const handB = prompt(
      "플레이어 B의 초기 손패를 쉼표(,)로 구분하여 입력하세요."
    );
    const trueProps = prompt(
      "초기 참 명제들을 세미콜론(;)으로 구분하여 입력하세요. (없으면 비워두세요)"
    );

    const testConfig = {
      victoryA: victoryA || null,
      victoryB: victoryB || null,
      handA: handA || null,
      handB: handB || null,
      trueProps: trueProps || null,
    };

    resetGame(selectedCharacters, testConfig); // 입력받은 설정으로 resetGame 호출
  } catch (e) {
    console.error("테스트 모드 설정 중 오류 발생:", e);
    alert("테스트 모드 설정 중 오류가 발생했습니다. 메인 메뉴로 돌아갑니다.");
    goToMainMenu();
  }
}
function calculateStrategicValue(proposition, perspectivePlayer) {
  if (!proposition) return 0;

  // ★★★ 핵심 수정: 어떤 명제든 평가하기 전에 먼저 정규화합니다. ★★★
  const normalizedProp = normalizeProposition(proposition);

  const opponentPlayer = perspectivePlayer === "A" ? "B" : "A";
  const myVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === perspectivePlayer
  );
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponentPlayer
  );

  if (!myVictoryData || !opponentVictoryData) return 0;

  let score = 0;
  const myUltimateGoal = myVictoryData.ultimate_target;
  const opponentLossCondition = {
    type: "negation",
    proposition: opponentVictoryData.ultimate_target,
  };

  // 1. 직접적인 승/패 조건과 일치하는지 확인 (정규화된 명제로 비교)
  if (arePropositionsEqual(normalizedProp, myUltimateGoal)) score += 50000;
  if (arePropositionsEqual(normalizedProp, opponentLossCondition))
    score += 50000;

  // 2. 전칭 양화문('모든')의 가치 평가 (정규화된 명제로 비교)
  if (normalizedProp.type === "universal") {
    const myWinPredicate = myVictoryData.core_goal.predicate;
    const opponentWinPredicate = opponentVictoryData.core_goal.predicate;
    const predicatePairs = currentLang.contradictoryPredicates;
    const opponentDefeatPredicate =
      predicatePairs[opponentWinPredicate] ||
      Object.keys(predicatePairs).find(
        (key) => predicatePairs[key] === opponentWinPredicate
      );

    if (normalizedProp.predicate === myWinPredicate) score += 8000;
    if (
      opponentDefeatPredicate &&
      normalizedProp.predicate === opponentDefeatPredicate
    )
      score += 7000;
    if (normalizedProp.predicate === opponentWinPredicate) score -= 9000;
  }

  return score;
}

/**
 * 특정 계획(경로)을 수행했을 때의 위험성을 평가하는 함수
 * @param {Array<object>} path - findAllProofPaths가 반환한 계획 경로
 * @param {string} perspectivePlayer - 'A' 또는 'B', 누구의 관점에서 평가할지
 * @returns {boolean} 위험하면 true, 아니면 false
 */
function isPlanTooRisky(path, perspectivePlayer) {
  if (!path || path.length === 0) return false;

  const opponentPlayer = perspectivePlayer === "A" ? "B" : "A";
  const opponentVictoryData = truePropositions.find(
    (p) => p.type === "victory" && p.owner === opponentPlayer
  );
  if (!opponentVictoryData) return false;

  // 계획의 최종 목표를 달성했을 때의 가상 진리 집합을 만듭니다.
  const finalStep = path[path.length - 1];
  const { success, expandedSet } = verifyAndExpandTruths(
    finalStep,
    internalTruthSet
  );

  if (!success) return true; // 계획 자체가 모순을 일으키면 위험

  // 그 결과 상대의 승리가 증명된다면 이 계획은 위험합니다.
  if (aiFindProof(opponentVictoryData.ultimate_target, expandedSet)) {
    return true;
  }

  return false;
}

function activatePlatoAbility(player) {
  const availablePropositions = truePropositions.filter(
    (p) => p.proposition && p.proposition.type === "existential"
  );

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "보편화할 수 있는 명제가 없습니다."
        : "There are no propositions to universalize."
    );
    return;
  }

  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.ui.platoAbilityTitle;
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.ui.platoConfirmButton;

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection"; // 공통 이름 사용
    radio.value = index;
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 범용 모달의 닫기/확인 버튼에 *플라톤*의 로직을 연결
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick = confirmPlatoAbility;

  modal.classList.add("visible");
}

/**
 * 플라톤 능력 모달에서 '확인' 버튼을 눌렀을 때 실행되는 함수
 */
function confirmPlatoAbility() {
  // 1. 선택된 라디오 버튼과 명제를 찾습니다.
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) {
    return;
  }

  const selectedIndex = parseInt(selectedRadio.value, 10);
  const availablePropositions = truePropositions.filter(
    (p) => p.proposition && p.proposition.type === "existential"
  );
  const selectedPropData = availablePropositions[selectedIndex];

  if (!selectedPropData) {
    console.error(
      "Plato Ability Error: Could not find the selected proposition."
    );
    return;
  }

  // 2. 선택된 '어떤' 명제를 '모든' 명제로 변환합니다.
  const originalProp = selectedPropData.proposition;
  const universalProp = {
    type: "universal",
    entity: originalProp.entity,
    predicate: originalProp.predicate,
  };

  // 3. 새로운 '모든' 명제가 기존 진리 체계와 모순되지 않는지 검증합니다.
  const verificationResult = verifyAndExpandTruths(universalProp);

  if (verificationResult.success) {
    // 4. 검증 성공 시, 능력 사용 상태를 기록하고 새 명제를 추가합니다.
    const philosopherId =
      thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
    abilityUsedState[thinkingTimeTurn].used = true;

    truePropositions.push({
      propId: `prop_${Date.now()}_${Math.random()}`,
      type: "theorem", // 타입은 'theorem'으로 유지
      source: "plato_ability", // '이데아 회상' 출처 명시
      proposition: universalProp,
    });
    internalTruthSet = verificationResult.expandedSet;

    // 5. 모달을 닫고 게임 상태를 갱신합니다.
    document.getElementById("ability-modal").classList.remove("visible");
    showAlert(
      currentLang.langCode === "ko"
        ? "새로운 보편 명제가 참 목록에 추가되었습니다!"
        : "A new universal proposition has been added to the true list!"
    );
    render();
  } else {
    // 6. 모순 발생 시, 사용자에게 알립니다.
    showAlert(currentLang.alerts.contradictionFound);
  }
}

function activateSocratesAbility(player) {
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  const state = abilityUsedState[player];

  if (state && state.usedCount >= state.maxUses) {
    showAlert(
      currentLang.langCode === "ko"
        ? "이미 능력을 모두 사용했습니다."
        : "Ability has already been used up."
    );
    return;
  }
  const availablePropositions = truePropositions.filter((p) => {
    // 1. 타입이 'user-made' 또는 'theorem'이어야 함 (기존 조건)
    const isTargetType = p.type === "user-made" || p.type === "theorem";
    if (!isTargetType) return false;

    // 2. 해당 명제가 이미 비활성화 목록에 있는지 확인 (새로운 조건)
    const isDisabled = socratesDisabledProps.some(
      (disabledProp) => disabledProp.propId === p.propId
    );

    // 3. 비활성화되지 않은 명제만 최종 목록에 포함
    return !isDisabled;
  });

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "비활성화할 수 있는 명제가 없습니다."
        : "There are no propositions to disable."
    );
    return;
  }

  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.ui.socratesAbilityTitle;
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.ui.socratesConfirmButton;

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection"; // 공통 이름 사용
    radio.value = propData.propId;
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 범용 모달의 닫기/확인 버튼에 *소크라테스*의 로직을 연결
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick =
    confirmSocratesAbility;

  modal.classList.add("visible");
}
function confirmSocratesAbility() {
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) return;

  const selectedPropId = selectedRadio.value;

  // socratesDisabledProps 배열에는 이제 propId만 저장합니다.
  // 더 이상 proposition 객체를 저장할 필요가 없습니다.
  socratesDisabledProps.push({
    propId: selectedPropId,
    reEnableRound: currentRound + 2,
  });

  // 능력 사용 처리
  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].usedCount++;

  document.getElementById("ability-modal").classList.remove("visible");
  showAlert(
    currentLang.langCode === "ko"
      ? "선택한 명제가 다음 라운드 동안 논증에서 제외됩니다."
      : "The selected proposition will be excluded from arguments for the next round."
  );
  render(); // UI 즉시 갱신
}
function activateDescartesAbility(player) {
  // 삭제 가능한 명제 (공리, 승리조건 제외) 목록을 준비합니다.
  const availablePropositions = truePropositions.filter(
    (p) => p.type === "user-made" || p.type === "theorem"
  );

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "삭제할 수 있는 명제가 없습니다."
        : "There are no propositions to delete."
    );
    return;
  }

  // 범용 능력 모달창을 가져와 내용을 데카르트에 맞게 수정합니다.
  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.langCode === "ko" ? "방법적 회의" : "Methodic Doubt";
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.langCode === "ko"
      ? "이 명제를 삭제하기"
      : "Delete this Proposition";

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화

  // 삭제 가능한 명제들로 선택 목록을 채웁니다.
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection";
    // propId를 값으로 사용하여 어떤 명제를 삭제할지 식별합니다.
    radio.value = propData.propId;
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 모달의 닫기/확인 버튼에 데카르트 전용 함수를 연결합니다.
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick =
    confirmDescartesAbility;

  modal.classList.add("visible");
}

function confirmDescartesAbility() {
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) return;

  const selectedPropId = selectedRadio.value;

  // 1. truePropositions 배열에서 삭제할 명제의 인덱스를 찾습니다.
  const propIndex = truePropositions.findIndex(
    (p) => p.propId === selectedPropId
  );

  if (propIndex === -1) {
    console.error("Descartes Ability Error: Proposition ID not found.");
    return;
  }

  // 2. 해당 명제를 배열에서 제거합니다.
  truePropositions.splice(propIndex, 1);

  // 3. ★★★ 핵심 단계 ★★★
  //    명제 하나가 사라졌으므로, 전체 논리 체계에 모순이 생겼을 수 있습니다.
  //    따라서 공리부터 시작하여 남아있는 명제들로 진리 집합(internalTruthSet)을 완전히 재구성합니다.
  let newTruthSet = parsedAxioms.map((a) => a.proposition);
  const propositionsToReverify = truePropositions
    .filter((p) => p.proposition)
    .map((p) => p.proposition);

  for (const prop of propositionsToReverify) {
    const verificationResult = verifyAndExpandTruths(prop, newTruthSet);
    if (verificationResult.success) {
      newTruthSet = verificationResult.expandedSet;
    } else {
      console.error(
        "Critical error after Descartes' ability: Inconsistency found while rebuilding truth set."
      );
      // 실제 게임에서는 이 오류를 더 견고하게 처리해야 할 수 있습니다.
    }
  }
  internalTruthSet = newTruthSet;

  // 4. 능력 사용 상태를 기록하고 UI를 갱신합니다.
  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].used = true;

  document.getElementById("ability-modal").classList.remove("visible");
  showAlert(
    currentLang.langCode === "ko"
      ? "선택한 명제가 참 목록에서 삭제되었습니다."
      : "The selected proposition has been deleted from the true list."
  );
  render();
}
function activateWittgensteinAbility(player) {
  // 유레카 모달과 동일하게 내부 상태를 초기화합니다.
  derivedPropositionsInModal = [];
  currentAssumption = null;

  const modal = document.getElementById("eureka-modal");
  const premiseList = document.getElementById("premise-list");
  premiseList.innerHTML = "";

  // 유레카 모달과 똑같이 사용 가능한 모든 전제를 가져옵니다.
  const allSelectablePropositions = [
    ...parsedAxioms,
    ...truePropositions
      .map((p) => ({ ...p, proposition: p.proposition }))
      .filter((p) => p.proposition),
  ].filter(
    (propData) =>
      !propData.propId ||
      !socratesDisabledProps.some((dp) => dp.propId === propData.propId)
  );

  // 공리들을 그룹별로 분류하고 순서대로 추가 (openEurekaModal과 동일)
  const axioms = allSelectablePropositions.filter((p) => p.type === "axiom");
  const nonAxioms = allSelectablePropositions.filter((p) => p.type !== "axiom");

  // 공리를 그룹화하여 추가 - 작은 서브그룹별로 구분선 추가
  if (currentAxioms.groups && axioms.length > 0) {
    const groups = currentAxioms.groups;
    const templates = currentLang.axiom_templates;
    let axiomIndex = 0;

    // 정체성 공리 그룹
    if (groups.identity && groups.identity.length > 0) {
      for (let i = 0; i < groups.identity.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 정체성 그룹 구분선 추가
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }

    // 개체별 속성 대립 그룹 - 서브그룹별로 나누기
    if (groups.subjectOpposition && groups.subjectOpposition.length > 0) {
      // 첫 번째 철학자 선악 공리
      for (let i = 0; i < templates.subject_good_evil.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 첫 번째 철학자 지혜 공리
      for (let i = 0; i < templates.subject_wise_foolish.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 두 번째 철학자 선악 공리
      for (let i = 0; i < templates.subject_good_evil.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 두 번째 철학자 지혜 공리
      for (let i = 0; i < templates.subject_wise_foolish.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 개체별 속성 대립 그룹 구분선 추가
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }

    // 집단별 속성 대립 그룹 - 서브그룹별로 나누기
    if (groups.quantifierOpposition && groups.quantifierOpposition.length > 0) {
      // 새 집단 순방향
      for (let i = 0; i < templates.bird_good_evil_forward.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 새 집단 역방향
      for (let i = 0; i < templates.bird_good_evil_reverse.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 물고기 집단 순방향
      for (let i = 0; i < templates.fish_good_evil_forward.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 물고기 집단 역방향
      for (let i = 0; i < templates.fish_good_evil_reverse.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 개 집단 순방향
      for (let i = 0; i < templates.dog_good_evil_forward.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 서브그룹 구분선
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });

      // 개 집단 역방향
      for (let i = 0; i < templates.dog_good_evil_reverse.length; i++) {
        if (axiomIndex < axioms.length) {
          addPremiseToWorkbench({
            ...axioms[axiomIndex],
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        }
      }

      // 마르크스 공리가 있으면 추가
      const remainingAxioms = axioms.slice(axiomIndex);
      const marxAxioms = remainingAxioms.filter((a) => {
        const text = propositionToNaturalText(a.proposition);
        return text.includes("브루주아") || text.includes("Bourgeois");
      });

      if (marxAxioms.length > 0) {
        // 서브그룹 구분선
        addPremiseToWorkbench({
          type: "separator",
          label: "",
          proposition: null,
          isSeparator: true,
        });

        marxAxioms.forEach((axiomData) => {
          addPremiseToWorkbench({
            ...axiomData,
            label: currentLang.labels.axiom,
          });
          axiomIndex++;
        });
      }

      // 집단별 속성 대립 그룹 마지막 구분선 추가
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }
  } else {
    // 기존 방식으로 공리 추가 (하위 호환성)
    axioms.forEach((propData) => {
      addPremiseToWorkbench({
        ...propData,
        label: currentLang.labels.axiom,
      });
    });

    // 공리 마지막 구분선 추가
    if (axioms.length > 0) {
      addPremiseToWorkbench({
        type: "separator",
        label: "",
        proposition: null,
        isSeparator: true,
      });
    }
  }

  // 공리가 아닌 명제들 추가
  nonAxioms.forEach((propData) => {
    let label;
    switch (propData.type) {
      case "victory":
        label = currentLang.labels.victory_condition;
        break;
      case "theorem":
        label = currentLang.labels.theorem;
        break;
      default:
        label = currentLang.labels.proposition;
    }
    addPremiseToWorkbench({
      proposition: propData.proposition,
      type: propData.type,
      propId: propData.propId, // propId도 함께 전달
      dependsOnAssumption: false,
      isAssumption: false,
      label: label,
    });
  });

  const modalTitle = document.getElementById("eureka-title");
  const confirmBtn = document.getElementById("modal-confirm-btn");

  // 모달의 제목과 버튼을 비트겐슈타인 전용으로 설정합니다.
  modalTitle.textContent = currentLang.ui.wittgensteinAbilityTitle;
  confirmBtn.textContent = currentLang.ui.wittgensteinConfirmButton;

  // 확인 버튼 클릭 시, 비트겐슈타인 전용 확인 함수를 호출하도록 연결합니다.
  confirmBtn.onclick = confirmWittgensteinAbility;

  renderModal();
  document.getElementById("inference-rule-select").onchange =
    updateConclusionPreview;

  // 추론 규칙을 전건 긍정으로 초기화
  document.getElementById("inference-rule-select").value = "modusPonens";

  updateConclusionPreview();

  modal.classList.add("visible");

  // DOM 렌더링 후 스크롤 위치를 맨 아래로 설정 (애니메이션 없이)
  setTimeout(() => {
    if (premiseList) {
      // 마지막 자식 요소를 찾아서 스크롤
      const lastChild = premiseList.lastElementChild;
      if (lastChild) {
        lastChild.scrollIntoView({ block: "end" });
      } else {
        // 자식 요소가 없으면 직접 스크롤
        premiseList.scrollTop = premiseList.scrollHeight;
      }
    }
  }, 0);
}
function confirmWittgensteinAbility() {
  const selectedLis = Array.from(
    document.querySelectorAll('#premise-list input[type="checkbox"]:checked')
  );

  // 1. 유효성 검사: 반드시 하나의 '정리'만 선택해야 합니다.
  if (selectedLis.length !== 1) {
    showAlert(currentLang.alerts.selectOneTheoremOnly);
    return;
  }
  const finalTheoremData = JSON.parse(
    selectedLis[0].parentElement.dataset.propObject
  );
  if (
    finalTheoremData.type !== "theorem" ||
    finalTheoremData.dependsOnAssumption
  ) {
    showAlert(currentLang.alerts.selectOneTheoremOnly);
    return;
  }

  // 2. 재귀적으로 모든 상위 전제를 추적합니다.
  const premisesToKick = new Map(); // 중복 방지를 위해 Map 사용 (key: propId 또는 proposition 텍스트)

  function findAndAddSources(theoremData) {
    if (
      !theoremData.sourcePremises ||
      theoremData.sourcePremises.length === 0
    ) {
      return; // 더 이상 거슬러 올라갈 전제가 없으면 종료
    }

    for (const source of theoremData.sourcePremises) {
      // source.propId가 있는 경우 (원본 참 명제) 그것을 key로 사용
      const key = source.propId
        ? source.propId
        : propositionToText(source.proposition);
      if (!premisesToKick.has(key)) {
        premisesToKick.set(key, source);
        // 계속해서 상위 전제를 추적
        findAndAddSources(source);
      }
    }
  }

  findAndAddSources(finalTheoremData);

  // 3. 추적된 전제들을 '참 명제 목록'에서 삭제합니다.
  const idsToDelete = new Set();
  premisesToKick.forEach((source) => {
    // 원본 참 명제 목록에서 온 전제들만 ID가 있습니다.
    if (source.propId) {
      if (
        source.propId &&
        source.type !== "victory" &&
        source.type !== "axiom"
      ) {
        idsToDelete.add(source.propId);
      }
    }
  });

  truePropositions = truePropositions.filter((p) => !idsToDelete.has(p.propId));

  // 4. 최종적으로 도출된 새로운 정리를 참 목록에 추가합니다.
  truePropositions.push({
    propId: `prop_${Date.now()}_${Math.random()}`,
    type: "theorem",
    round: currentRound,
    proposition: finalTheoremData.proposition,
    source: "wittgenstein_ability",
  });

  // 5. 전체 진리 집합을 재구성하여 논리적 일관성을 유지합니다.
  let newTruthSet = parsedAxioms.map((a) => a.proposition);
  const propositionsToReverify = truePropositions
    .filter((p) => p.proposition)
    .map((p) => p.proposition);

  for (const prop of propositionsToReverify) {
    const verificationResult = verifyAndExpandTruths(prop, newTruthSet);
    if (verificationResult.success) {
      newTruthSet = verificationResult.expandedSet;
    } else {
      console.error(
        "Wittgenstein ability critical error: Inconsistency found."
      );
    }
  }
  internalTruthSet = newTruthSet;

  // 6. 능력 사용 상태를 업데이트하고 마무리합니다.
  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].used = true;

  document.getElementById("eureka-modal").classList.remove("visible");
  showAlert(currentLang.alerts.wittgensteinSuccess);
  render();
}
function activateDerridaAbility(player) {
  // 1. 분해 가능한 명제(연결사로 이어진 명제)만 필터링합니다.
  const availablePropositions = truePropositions.filter(
    (p) =>
      p.type !== "victory" &&
      p.proposition &&
      (p.proposition.type === "conditional" ||
        p.proposition.type === "conjunction" ||
        p.proposition.type === "disjunction")
  );

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "분해할 수 있는 명제가 없습니다."
        : "There are no compound propositions to deconstruct."
    );
    return;
  }

  // 2. 범용 능력 모달 UI를 설정합니다.
  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.langCode === "ko" ? "해체" : "Deconstruction";
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.langCode === "ko"
      ? "이 명제를 해체하기"
      : "Deconstruct this Proposition";

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화

  // 3. 필터링된 명제로 선택 목록을 만듭니다.
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection";
    // propId를 값으로 저장하여 어떤 명제를 선택했는지 식별합니다.
    radio.value = propData.propId;
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 4. 확인/취소 버튼에 데리다 전용 함수를 연결하고 모달을 엽니다.
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick =
    confirmDerridaAbility;

  modal.classList.add("visible");
}

/**
 * 데리다 능력 실행 및 검증 함수
 */
function confirmDerridaAbility() {
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) return;

  const selectedPropId = selectedRadio.value;
  const selectedPropData = truePropositions.find(
    (p) => p.propId === selectedPropId
  );

  if (!selectedPropData) {
    console.error("Derrida Ability Error: Selected proposition not found.");
    return;
  }

  const { left, right } = selectedPropData.proposition;

  // --- 핵심 로직: 삭제와 추가가 모두 가능한지 '미리' 검증하는 단계 ---

  // 1. 선택된 원본 명제를 '제외한' 나머지 명제 목록을 만듭니다.
  const propositionsWithoutOriginal = truePropositions.filter(
    (p) => p.propId !== selectedPropId
  );

  // 2. 이 임시 목록을 기반으로 진리 집합을 '재구성'하여, 원본 명제가 없었을 때의 상태를 만듭니다.
  let baseTruthSetForTest = parsedAxioms.map((a) => a.proposition);
  const propsToReverify = propositionsWithoutOriginal
    .filter((p) => p.proposition)
    .map((p) => p.proposition);
  for (const prop of propsToReverify) {
    const verification = verifyAndExpandTruths(prop, baseTruthSetForTest);
    if (verification.success) {
      baseTruthSetForTest = verification.expandedSet;
    } else {
      console.error(
        "Derrida Pre-check Error: Inconsistency found when creating base set."
      );
      showAlert(currentLang.alerts.criticalErrorUndo); // 내부 오류 알림
      return;
    }
  }

  // 3. '원본이 삭제된' 상태에서, 분해된 첫 번째(left) 명제를 추가했을 때 모순이 없는지 확인합니다.
  const verification1 = verifyAndExpandTruths(left, baseTruthSetForTest);
  if (!verification1.success) {
    showAlert(currentLang.alerts.contradictionFound);
    return;
  }

  // 4. 이어서 두 번째(right) 명제를 추가했을 때 모순이 없는지 최종 확인합니다.
  const verification2 = verifyAndExpandTruths(right, verification1.expandedSet);
  if (!verification2.success) {
    showAlert(currentLang.alerts.contradictionFound);
    return;
  }

  // 5. 모든 검증을 통과했으므로 능력 사용을 확정합니다.
  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].used = true;

  // 6. 검증이 모두 끝났으므로, 실제 게임 상태를 변경합니다.
  //    - 원본 복합 명제를 삭제합니다. (이미 만들어 둔 리스트 재활용)
  truePropositions = propositionsWithoutOriginal;
  //    - 분해된 두 명제를 추가합니다.
  const newProps = [
    {
      propId: `prop_${Date.now()}_${Math.random()}`,
      type: "theorem",
      source: "derrida_ability",
      proposition: left,
    },
    {
      propId: `prop_${Date.now()}_${Math.random()}`,
      type: "theorem",
      source: "derrida_ability",
      proposition: right,
    },
  ];
  truePropositions.push(...newProps);

  // 7. 최종적으로 검증된 진리 집합으로 내부 상태를 업데이트합니다.
  internalTruthSet = verification2.expandedSet;

  document.getElementById("ability-modal").classList.remove("visible");
  showAlert(
    currentLang.langCode === "ko"
      ? "명제가 성공적으로 해체되었습니다."
      : "The proposition has been successfully deconstructed."
  );
  render();
}
function activateHumeAbility(player) {
  // 1. 교체 가능한 명제('모든'으로 시작하는 전칭 양화문)만 필터링합니다.
  const availablePropositions = truePropositions.filter(
    (p) => p.proposition && p.proposition.type === "universal"
  );

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "교체할 수 있는 전칭 명제가 없습니다."
        : "There are no universal propositions to replace."
    );
    return;
  }

  // 2. 범용 능력 모달 UI를 흄에 맞게 설정합니다.
  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.langCode === "ko" ? "귀납의 문제" : "Problem of Induction";
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.langCode === "ko"
      ? "이 명제를 교체하기"
      : "Replace this Proposition";

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화

  // 3. 필터링된 명제로 선택 목록을 채웁니다.
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection";
    radio.value = propData.propId; // propId를 값으로 저장
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 4. 모달의 버튼에 흄 전용 확인 함수를 연결하고 모달을 엽니다.
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick = confirmHumeAbility;

  modal.classList.add("visible");
}

/**
 * 흄 능력 실행: 선택한 명제를 교체하고 게임 상태를 업데이트합니다.
 */
function confirmHumeAbility() {
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) return;

  const selectedPropId = selectedRadio.value;
  const propIndex = truePropositions.findIndex(
    (p) => p.propId === selectedPropId
  );

  if (propIndex === -1) {
    console.error("Hume Ability Error: Proposition ID not found.");
    return;
  }

  const originalProp = truePropositions[propIndex].proposition;

  // 1. 선택된 전칭 명제를 존재 명제로 변환합니다.
  const newExistentialProp = {
    type: "existential",
    entity: originalProp.entity,
    predicate: originalProp.predicate,
  };

  // 2. 기존 '모든' 명제를 새로 만든 '어떤' 명제로 교체합니다.
  truePropositions[propIndex].proposition = newExistentialProp;

  // 💡 [버그 수정] 렌더링 문제를 해결하기 위해 기존 카드 정보를 제거합니다.
  // 이렇게 하면 render() 함수가 새로운 proposition 객체를 기반으로 텍스트를 그리게 됩니다.
  truePropositions[propIndex].original_cards = null;
  truePropositions[propIndex].type = "theorem";
  truePropositions[propIndex].source = "hume_ability";

  // 3. 데카르트 능력처럼, 강력한 전제가 약화되었으므로 전체 진리 집합을 재구성하여 논리적 일관성을 보장합니다.
  let newTruthSet = parsedAxioms.map((a) => a.proposition);
  const propositionsToReverify = truePropositions
    .filter((p) => p.proposition)
    .map((p) => p.proposition);

  for (const prop of propositionsToReverify) {
    const verificationResult = verifyAndExpandTruths(prop, newTruthSet);
    if (verificationResult.success) {
      newTruthSet = verificationResult.expandedSet;
    } else {
      console.error(
        "Critical error after Hume's ability: Inconsistency found."
      );
    }
  }
  internalTruthSet = newTruthSet;

  // 4. 능력 사용 횟수를 1 증가시킵니다.
  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].usedCount++;

  // 5. 모달을 닫고, 결과를 알리고, 화면을 새로고침합니다.
  document.getElementById("ability-modal").classList.remove("visible");
  showAlert(
    currentLang.langCode === "ko"
      ? "선택한 명제가 존재 양화문으로 교체되었습니다."
      : "The selected proposition has been replaced with an existential one."
  );
  render();
}

function activateKuhnAbility(player) {
  // 1. '모든'으로 시작하는 보편 명제인지 확인합니다.
  // 2. getOppositePredicate 함수를 이용해 해당 명제의 술어에 반대 개념이 존재하는지 확인합니다.
  const availablePropositions = truePropositions.filter(
    (p) =>
      p.proposition &&
      p.proposition.type === "universal" &&
      getOppositePredicate(p.proposition.predicate) !== null
  );

  if (availablePropositions.length === 0) {
    showAlert(
      currentLang.langCode === "ko"
        ? "패러다임을 전환할 보편 명제가 없습니다."
        : "There are no universal propositions for a paradigm shift."
    );
    return;
  }

  // 2. 범용 능력 모달 UI를 쿤에 맞게 설정합니다.
  const modal = document.getElementById("ability-modal");
  document.getElementById("ability-title").textContent =
    currentLang.langCode === "ko" ? "패러다임 전환" : "Paradigm Shift";
  document.getElementById("ability-confirm-btn").textContent =
    currentLang.langCode === "ko" ? "패러다임 전환하기" : "Shift Paradigm";

  const listEl = document.getElementById("ability-list");
  listEl.innerHTML = ""; // 목록 초기화

  // 3. 필터링된 명제로 선택 목록을 채웁니다.
  availablePropositions.forEach((propData, index) => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "ability-selection";
    radio.value = propData.propId; // propId를 값으로 저장
    if (index === 0) radio.checked = true;

    const label = document.createElement("label");
    label.innerHTML = propositionToNaturalText(propData.proposition);

    li.appendChild(radio);
    li.appendChild(label);
    li.addEventListener("click", () => {
      radio.checked = true;
    });
    listEl.appendChild(li);
  });

  // 4. 모달의 버튼에 쿤 전용 확인 함수를 연결하고 모달을 엽니다.
  document.getElementById("close-ability-modal-btn").onclick = () =>
    modal.classList.remove("visible");
  document.getElementById("ability-confirm-btn").onclick = confirmKuhnAbility;

  modal.classList.add("visible");
}

function confirmKuhnAbility() {
  const selectedRadio = document.querySelector(
    'input[name="ability-selection"]:checked'
  );
  if (!selectedRadio) return;

  const selectedPropId = selectedRadio.value;
  const originalPropData = truePropositions.find(
    (p) => p.propId === selectedPropId
  );

  if (!originalPropData) {
    console.error("Kuhn Ability Error: Selected proposition not found.");
    return;
  }

  // --- (1) 새로운 패러다임 명제 생성 ---
  const originalPredicate = originalPropData.proposition.predicate;
  const predicatePairs = currentLang.contradictoryPredicates;

  let newPredicate = null;
  for (const key in predicatePairs) {
    if (key === originalPredicate) {
      newPredicate = predicatePairs[key];
      break;
    }
    if (predicatePairs[key] === originalPredicate) {
      newPredicate = key;
      break;
    }
  }

  if (!newPredicate) {
    showAlert(
      currentLang.langCode === "ko"
        ? "이 명제의 반대 술어를 찾을 수 없습니다."
        : "Cannot find an opposite predicate for this proposition."
    );
    return;
  }

  const newParadigmProposition = {
    type: "universal",
    entity: originalPropData.proposition.entity,
    predicate: newPredicate,
  };

  const newParadigmPropForList = {
    propId: `prop_${Date.now()}_paradigm`,
    type: "theorem", // 새로운 패러다임은 '정리'로 취급
    source: "kuhn_ability",
    proposition: newParadigmProposition,
  };

  // --- (2) 기반 진리 목록 생성 및 사전 검증 ---
  const axioms = parsedAxioms.map((a) => a.proposition);
  const victoryConditions = truePropositions
    .filter((p) => p.type === "victory")
    .map((p) => p.proposition);

  const foundationOfTruths = [
    ...axioms,
    ...victoryConditions,
    newParadigmProposition,
  ];

  const preCheckResult = verifyAndExpandTruths(null, foundationOfTruths);

  if (!preCheckResult.success) {
    showAlert(
      currentLang.langCode === "ko"
        ? "새로운 패러다임이 기존 공리나 승리 조건과 모순되어 능력을 발동할 수 없습니다."
        : "The new paradigm contradicts basic axioms or win conditions and cannot be activated."
    );
    return;
  }

  let currentValidatedTruths = preCheckResult.expandedSet;
  let survivingPropositions = [
    ...truePropositions.filter((p) => p.type === "victory"),
    newParadigmPropForList,
  ];

  // --- (3) 기존 명제 재검증 ---
  const candidatesForRevalidation = truePropositions.filter(
    (p) =>
      (p.type === "user-made" || p.type === "theorem") &&
      p.propId !== selectedPropId
  );

  for (const candidate of candidatesForRevalidation) {
    const validationResult = verifyAndExpandTruths(
      candidate.proposition,
      currentValidatedTruths
    );

    if (validationResult.success) {
      // 모순 없음 (생존)
      currentValidatedTruths = validationResult.expandedSet;
      survivingPropositions.push(candidate);
    }
    // 모순 발생 시 (폐기), 아무것도 하지 않음.
  }

  // --- (4) 최종 목록 확정 및 UI 갱신 ---
  truePropositions = survivingPropositions;
  internalTruthSet = currentValidatedTruths;

  const philosopherId =
    thinkingTimeTurn === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[thinkingTimeTurn].used = true;

  document.getElementById("ability-modal").classList.remove("visible");
  showAlert(
    currentLang.langCode === "ko"
      ? "패러다임이 전환되었습니다!"
      : "Paradigm has shifted!"
  );
  render();
}
function renderKantModal(player) {
  const hand = player === "A" ? playerA_Hand : playerB_Hand;
  const handDisplay = document.getElementById("kant-hand-display");
  const propDisplay = document.getElementById("kant-proposition-display");

  const colorClass = player === "A" ? "card-white" : "card-black";

  handDisplay.innerHTML = "";
  propDisplay.innerHTML = "";

  // 1. 손패 영역 렌더링
  hand.forEach((card) => {
    const cardEl = document.createElement("div");

    cardEl.className = `card ${colorClass}`;
    cardEl.textContent = card.text;
    cardEl.onclick = () => {
      const tempPropositionForValidation = kantProposition.map((c) => ({
        card: c,
        player: player,
      }));

      if (isValidPlay(card, tempPropositionForValidation)) {
        const cardIndex = hand.findIndex(
          (c) => c.text === card.text && c.type === card.type
        );
        if (cardIndex > -1) {
          const [movedCard] = hand.splice(cardIndex, 1);
          kantProposition.push(movedCard);
          renderKantModal(player);
        }
      } else {
        showAlert(currentLang.alerts.invalidCard);
      }
    };
    handDisplay.appendChild(cardEl);
  });

  // 2. 명제 구성 영역 렌더링
  kantProposition.forEach((card) => {
    const cardEl = document.createElement("div");

    cardEl.className = `card ${colorClass}`;
    cardEl.textContent = card.text;
    propDisplay.appendChild(cardEl);
  });

  // 3. 되돌리기 버튼 활성화/비활성화
  document.getElementById("kant-undo-btn").disabled =
    kantProposition.length === 0;
}

function confirmKantAbility(player) {
  // 1. 명제가 비어있는지 확인
  if (kantProposition.length === 0) {
    return;
  }

  // 2. 문법적 완결성 검사
  // parsePropositionFromCards는 {card: cardObject} 형태의 배열을 기대하므로 변환
  const parsedProp = parsePropositionFromCards(
    kantProposition.map((c) => ({ card: c }))
  );
  if (!parsedProp) {
    showAlert(currentLang.alerts.incompleteProposition);
    return;
  }

  // 4. 논리적 모순 검사
  const verificationResult = verifyAndExpandTruths(parsedProp);
  if (!verificationResult.success) {
    showAlert(currentLang.alerts.contradictionFound);
    return;
  }

  // 5. 모든 검사를 통과: 능력 사용 처리
  const philosopherId = player === "A" ? playerA_Data.id : playerB_Data.id;
  abilityUsedState[player].used = true;

  // 6. 새로운 명제를 참 목록에 추가
  truePropositions.push({
    propId: `prop_${Date.now()}_${Math.random()}`,
    type: "theorem", // 능력으로 만든 명제는 '정리'로 취급
    source: "kant_ability", // 칸트 능력 출처 명시
    proposition: parsedProp,
  });

  // 7. 내부 진리 집합 업데이트
  internalTruthSet = verificationResult.expandedSet;

  // 8. 마무리
  const modal = document.getElementById("kant-ability-modal");
  modal.classList.remove("visible");
  kantProposition = []; // 임시 명제 배열 비우기

  showAlert(currentLang.alerts.kantSuccess);
  render(); // 게임 화면 전체 갱신
}

/**
 * 칸트 능력 활성화: 모달창을 설정하고 띄웁니다.
 */
function activateKantAbility(player) {
  kantProposition = []; // 명제 배열 초기화
  const modal = document.getElementById("kant-ability-modal");

  // UI 텍스트 설정
  document.getElementById("kant-ability-title").textContent =
    currentLang.langCode === "ko"
      ? "선험적 종합판단"
      : "Synthetic A Priori Judgment";
  document.getElementById("kant-current-proposition-title").textContent =
    currentLang.langCode === "ko"
      ? "구성중인 명제"
      : "Proposition under Construction";
  document.getElementById("kant-hand-title").textContent =
    currentLang.langCode === "ko" ? "사용 가능한 카드" : "Available Cards";
  document.getElementById("kant-undo-btn").textContent =
    currentLang.ui.undoButton;
  document.getElementById("kant-confirm-btn").textContent =
    currentLang.ui.completeButton;

  // 되돌리기 버튼 기능 연결
  document.getElementById("kant-undo-btn").onclick = () => {
    audioManager.playSfx("hover");
    if (kantProposition.length > 0) {
      const cardToReturn = kantProposition.pop();
      const hand = player === "A" ? playerA_Hand : playerB_Hand;
      hand.push(cardToReturn);
      // 손패 정렬을 다시 해주는 것이 좋습니다.
      hand.sort(
        (a, b) => cardTypeOrder.indexOf(a.type) - cardTypeOrder.indexOf(b.type)
      );
      renderKantModal(player);
    }
  };

  // 닫기 버튼 기능 연결 (중요: 취소 시 카드를 모두 손패로 되돌림)
  document.getElementById("close-kant-modal-btn").onclick = () => {
    audioManager.playSfx("hover");
    if (kantProposition.length > 0) {
      const hand = player === "A" ? playerA_Hand : playerB_Hand;
      hand.push(...kantProposition);
      kantProposition = [];
      hand.sort(
        (a, b) => cardTypeOrder.indexOf(a.type) - cardTypeOrder.indexOf(b.type)
      );
    }
    modal.classList.remove("visible");
    render(); // 메인 게임 화면도 갱신
  };

  document.getElementById("kant-confirm-btn").onclick = () => {
    audioManager.playSfx("hover");
    confirmKantAbility(player);
  };

  // 초기 모달 렌더링 및 표시
  renderKantModal(player);
  modal.classList.add("visible");
}

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
