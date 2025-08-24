const TUTORIAL_TEXTS = {
  ko: [
    // Stage 1 (Index 0)
    [
      "LOGOS ORGANON에 오신 것을 환영합니다!",
      "시작하기 전에, 몇 가지 핵심 규칙을 알려드릴게요.",
      "<strong>승리 조건:</strong> 매 게임 시작 시, 각자 무작위로 정해진 <strong>승리 조건</strong>을 받습니다.</br><br>한 라운드에 한 번 가능한 <strong>유레카!</strong>선언으로 <strong>자신의 승리</strong>를 증명하거나 <strong>상대의 패배</strong>를 증명하면 이깁니다.<br><br>예를 들어, 당신의 철학자가 소크라테스, 상대의 철학자가 플라톤이라면<br><strong>소크라테스는 승리한다</strong>나 <strong>플라톤은 승리한다 는 거짓이다</strong>를 증명하면 됩니다.",
      "<strong>첫 턴:</strong> 첫 라운드는 언제나 백 플레이어가 먼저 시작합니다.<br><br><strong>선공 교대:</strong> 라운드가 바뀔 때마다 선공하는 플레이어가 교대됩니다.",
      "그럼, 가장 기본인 <strong>명제</strong>를 만드는 법부터 배워봅시다.",
      "이곳이 당신의 <strong>패</strong>입니다. 여러 단어 카드가 있죠.",
      "카드를 이곳으로 옮겨 <strong>명제</strong>를 만들게 됩니다.",
      "카드를 클릭해서 <strong>현재 명제</strong> 영역으로 옮겨보세요.",
      "아주 좋습니다! <strong>소크라테스는</strong> 같은 <strong>고유 명사</strong>는 바로 명제를 시작할 수 있습니다.",
      "하지만 <strong>개는</strong>, <strong>새는</strong>, <strong>물고기는</strong> 같은 <strong>개체</strong> 카드는 '모든 새는', '어떤 새는'과 같이 <strong>모든</strong>이나 <strong>어떤</strong>과 같은 <strong>양화사</strong> 카드 뒤에만 놓을 수 있습니다.<br><br>또한, 고유명사 카드는 양화사 뒤에 놓을 수 없습니다.<br>'모든 소크라테스'나 '어떤 소크라테스'라는 말은 직관적으로도, 규칙 상으로도 불가능합니다.<br><br>이 점을 꼭 기억해주세요!",
      "각 플레이어는 한 턴에 반드시 한 장의 카드를 내야 하며, 낼 수 있는 카드가 있다면 반드시 내야 합니다.<br><br>카드를 냈으니 이제 턴을 마쳐볼까요?.",
      "<strong>턴 종료</strong> 버튼을 눌러 상대에게 턴을 넘겨주세요.",
      "다음으로, 상대방이 넘겨준 명제에 어떻게 대응하는지 배워보겠습니다.",
    ],
    // Stage 2 (Index 1)
    [
      "상대방의 턴이 끝났습니다. 다시 당신의 턴입니다.",
      "상대방이 만든 명제가 문법적으로 완결되었네요. 이때 여러 행동을 선택할 수 있습니다.",
      "<strong>첫 번째 선택: 명제 완성.</strong> 현재 명제를 <strong>참</strong>으로 인정하는 것입니다. 지금은 아무런 모순이 없으니, <strong>명제 완성</strong> 버튼을 눌러 <strong>참 명제 목록</strong>에 추가해 봅시다.",
      "참 명제 목록에 명제가 추가되었습니다.<br><br>명제가 추가되려면 두 가지 중요한 조건이 있습니다.",
      "첫째, 완전히 같은 명제가 이미 존재한다면 다시 추가할 수 없습니다.",
      "둘째, 기존 참 목록의 명제들과 모순되는 명제는 추가할 수 없습니다.",
      "상대방이 넘겨준 명제를 완성하는 대신, 다른 선택도 가능합니다.",
      "<strong>두 번째 선택: 확장하기.</strong> <strong>그리고</strong>, <strong>또는</strong>, <strong>라면</strong> 같은 <strong>연결사</strong> 카드를 추가하여 명제를 더 복잡하게 만들 수도 있습니다.<br><br>단, 연결사는 하나의 명제에 한 번만 사용할 수 있다는 점을 기억하세요.",
      "<strong>세 번째 선택: 부정하기.</strong> 자신에게 불리한 명제라면, 손패의 <strong>는 거짓이다</strong> 카드를 추가하여 명제를 부정할 수 있습니다.<br>하지만 조심하세요! 만약 상대방도 부정 카드를 낸다면, <strong>이중 부정</strong> 규칙에 따라 당신의 부정이 바로 무효화될 수 있습니다.<br><br>또한, 연결사로 연결된 문장에 <strong>는 거짓이다</strong>가 붙으면, 문장 전체가 아닌 연결사가 결합된 최소 단위 명제만 부정됩니다.<br><br>예를 들어, <strong>어떤 개는 선하다 그리고 소크라테스는 악하다 는 거짓이다</strong>에서 부정되는 부분은 <strong>소크라테스는 악하다</strong> 뿐입니다.",
      "이제 상대의 명제에 대응하는 여러 방법을 배웠습니다. 다음으로, 논증의 기반으로 삼을 수 있는 <strong>기본 공리</strong>에 대해 알아봅시다.",
    ],
    // Stage 3 (Index 2)
    [
      "참 명제 목록에는 우리가 만든 명제뿐만 아니라, 모든 논증의 기반이 되는 <strong>기본 공리</strong>가 들어있습니다.",
      "이 항목을 클릭해서 어떤 공리들이 있는지 확인해 보세요.",
      "공리는 증명할 필요 없이 참으로 받아들여지는 명제들입니다. 예를 들어 '모든 개는 개이다' 와 같은 것들이죠.",
      "공리에 따라, 동일한 개체가 '선하다'와 '악하다'처럼 <strong>두 가지 상반된 속성을 동시에 가질 수 없습니다</strong>.<br><br>또한, <strong>모든 개</strong>와 같은 집단은 <strong>어떤 개</strong>와 같은 일부와 상반된 속성을 가질 수 없습니다.<br><br>예를 들어, <strong>모든 개는 선하다</strong>와 <strong>어떤 개는 악하다</strong>는 동시에 참일 수 없습니다.",
      "논증을 구성할 때, 이 공리들을 중요한 전제로 사용할 수 있습니다.",
      "이제 기본적인 공리들을 확인했으니, 카드를 낼 수 없을 때 어떤 일이 일어나는지 알아봅시다.",
    ],
    // Stage 4 (Index 3)
    [
      "게임이 진행되면, 턴이 돌아온 플레이어가 카드 내기와 명제 완성 모두 불가능한 상황이 오게 됩니다.",
      "이때 라운드가 종료되고 <strong>사유 시간</strong>이 시작됩니다.",
      "사유 시간 턴은 해당 라운드의 후공 플레이어부터 각각 한 턴씩 진행하며, 이미 참인 명제들을 바탕으로 새로운 <strong>정리</strong>를 도출할 수 있습니다.",
      "상대방이 턴을 넘기는 중입니다.",
      "이제 당신의 턴입니다. <strong>정리 추가</strong> 버튼을 눌러봅시다.",
      "논증 구성창이 열렸습니다. <strong>보편 적용</strong> 규칙을 사용해 가볍게 새로운 정리를 만들어 봅시다.<br><br>추론 규칙들의 구체적인 용법은 이후에 배울 것입니다.",
      "전제 목록에서 <strong>소크라테스는 개이다</strong>와 <strong>모든 개는 지혜롭다</strong>를 선택하세요.",
      "추론 규칙에서 <strong>보편 적용</strong>을 선택하고, <strong>규칙 적용</strong> 버튼을 누르세요.",
      "<strong>소크라테스는 지혜롭다</strong>라는 정리가 도출되었습니다.<br><br>이제 이 정리를 선택하고 <strong>선택한 정리들을 참 목록에 추가</strong> 버튼을 눌러 증명을 마칩시다.",
      "새로운 정리가 <strong>참 명제 목록</strong>에 추가되었습니다.<br>사유 시간에는 새로운 정리를 만드는 것 외에, 철학자의 <strong>고유 능력</strong>을 사용할 수도 있습니다. 능력은 게임당 사용 횟수가 제한되어 있지만, 불리한 상황을 뒤집거나 유리한 상황을 굳힐 수 있는 강력한 무기입니다.",
      "이제 <strong>턴 종료</strong> 버튼을 눌러 사유 시간을 마치고 다음 라운드를 시작하세요.<br>라운드가 새로 시작되면 냈던 모든 카드를 돌려받으며, 참 명제 목록은 그대로 유지됩니다.",
    ],
    // Stage 5 (Index 4) - UPDATED & EXPANDED
    [
      "지금까지 게임의 흐름을 배웠습니다. 이제 논증을 구성하는 데 쓰일 <strong>추론 규칙</strong>들을 하나씩 익혀봅시다. <strong>유레카!</strong> 버튼을 눌러 논증 구성창을 여세요.",
      // 1. Modus Ponens
      "먼저 <strong>전건 긍정</strong>입니다. '라면'으로 연결된 명제의 앞쪽이 참이면 뒤쪽도 참이라는 가장 직관적인 규칙이죠.",
      "전제 목록에서 <strong>소크라테스는 선하다</strong>와 <strong>소크라테스는 선하다 라면 소크라테스는 승리한다</strong>를 선택하세요.",
      "규칙 목록에서 <strong>전건 긍정</strong>을 선택하고 <strong>규칙 적용</strong> 버튼을 누르세요.",
      // 2. Modus Tollens
      "좋습니다. <strong>소크라테스는 승리한다</strong>는 결론이 도출되었습니다.<br><br>이번에는 <strong>후건 부정</strong>을 연습해 봅시다. '라면'으로 연결된 명제의 뒤쪽이 거짓이라면, 앞쪽도 반드시 거짓입니다.<br>예를 들어, '비가 온다면 땅이 젖는다'에서, 땅이 젖지 않았다면 비가 오지 않았다는 것을 직관적으로 알 수 있습니다.",
      "전제 목록에서 <strong>플라톤은 지혜롭다 는 거짓이다</strong>와 <strong>플라톤은 승리한다 라면 플라톤은 지혜롭다</strong>를 선택하세요.",
      "규칙 목록에서 <strong>후건 부정</strong>을 선택하고 <strong>규칙 적용</strong> 버튼을 누르세요.",
      // 3. Disjunctive Syllogism
      "<strong>플라톤은 승리한다 는 거짓이다</strong>라는 결론이 나왔군요.<br><br>다음은 <strong>선언적 삼단논법</strong>입니다.<br><strong>또는</strong>으로 연결된 명제 중 하나가 거짓이면, 나머지 하나는 반드시 참입니다.",
      "전제 목록에서 <strong>어떤 새는 물고기이다 또는 어떤 새는 새이다</strong>와 <strong>어떤 새는 물고기이다 는 거짓이다</strong>를 선택하세요.",
      "규칙 목록에서 <strong>선언적 삼단논법</strong>을 선택하고 <strong>규칙 적용</strong> 버튼을 누르세요.",
      // 4. Hypothetical Syllogism
      "<strong>어떤 새는 새이다</strong>가 도출되었습니다.<br><br>이번엔 <strong>가언적 삼단논법</strong>입니다. 꼬리물기처럼 이어지는 두 명제를 하나로 합쳐봅시다.",
      "전제 목록에서 <strong>플라톤은 개이다 라면 플라톤은 선하다</strong>와 <strong>플라톤은 선하다 라면 플라톤은 승리한다</strong>를 선택하세요.",
      "규칙 목록에서 <strong>가언적 삼단논법</strong>을 선택하고 <strong>규칙 적용</strong> 버튼을 누르세요.",
      // 5. Conjunction Elimination (Simplification)
      "<strong>플라톤은 개이다 라면 플라톤은 승리한다</strong>라는 더 간결한 명제가 만들어졌습니다. 다음은 <strong>단순화</strong> 규칙입니다.",
      "<strong>그리고</strong>로 연결된 명제는 각각이 참입니다. 전제 목록에서 <strong>소크라테스는 지혜롭다 그리고 플라톤은 어리석다</strong>를 선택하세요.",
      "규칙 목록에서 <strong>단순화</strong>를 선택하고 <strong>규칙 적용</strong> 버튼을 눌러보세요. 두 개의 명제가 한 번에 도출될 겁니다.",
      // 6. Double Negation Elimination
      "보시다시피 두 명제가 각각 분리되었습니다.<br><br>이제 <strong>이중 부정 제거</strong> 규칙을 배워봅시다. 부정을 두 번 하면 긍정이 됩니다.",
      "전제 목록에서 <strong>어떤 물고기는 선하다 는 거짓이다 는 거짓이다</strong>를 선택하세요.",
      "규칙 목록에서 <strong>이중 부정 제거</strong>를 선택하고 <strong>규칙 적용</strong> 버튼을 누르세요.",
      // 7. Universal Application
      "원래의 긍정 명제로 돌아왔습니다.<br><br>다음은 <strong>보편 적용</strong> 규칙입니다. 보편적인 규칙은 개별 사례에도 적용됩니다.",
      "전제 목록에서 <strong>모든 새는 선하다</strong>와 <strong>플라톤은 새이다</strong>를 선택하세요.",
      "규칙 목록에서 <strong>보편 적용</strong>을 선택하고 <strong>규칙 적용</strong> 버튼을 누르세요.",
      // 8. Existential Instantiation
      "<strong>플라톤은 선하다</strong>가 도출되었습니다.<br><br>다음은 <strong>존재화</strong> 규칙입니다. '어떤 새는 새이다', '어떤 개는 개이다', '어떤 물고기는 물고기이다' 공리에 의해 새, 개, 물고기가 존재한다는 것이 보장되므로, <strong>모든</strong>으로 서술된 속성을 가진 <strong>어떤</strong> 일부가 존재한다는 사실을 도출할 수 있습니다.",
      "전제 목록에서 <strong>모든 개는 선하다</strong>를 선택하세요.",
      "규칙 목록에서 <strong>존재화</strong>를 선택하고 <strong>규칙 적용</strong> 버튼을 누르세요.",
      // End of Stage 5
      "<strong>어떤 개는 선하다</strong>가 도출되었습니다.<br><br>다음으로 여러 개의 명제를 한번에 조합하는 강력한 규칙을 배워봅시다.",
    ],
    // Stage 6 (Index 5)
    [
      "이번에 배울 <strong>경우 논증</strong>은 여러 갈래의 길을 하나의 결론으로 모으는 규칙입니다.",
      "<strong>플라톤은 선하거나 악하다</strong>는 두 가지 경우가 있습니다. 그런데 어느 경우든 <strong>플라톤은 지혜롭다</strong>는 결론에 도달하는군요. 먼저, 필요한 전제 세 가지를 모두 선택해주세요.",
      "이제 추론 규칙 목록에서 <strong>경우 논증</strong>을 선택하고 <strong>규칙 적용</strong> 버튼을 눌러 결론을 도출하세요.",
      "<strong>플라톤은 지혜롭다</strong>는 결론이 도출되었습니다.<br><br>다음은 논리학의 꽃이라 불리는 <strong>가정</strong>을 사용하는 규칙입니다.",
    ],
    // Stage 7 (Index 6) - ★★★ MODIFIED SECTION ★★★
    [
      "때로는 증명을 위해 무언가를 <strong>만약 ~라면</strong> 하고 가정해야 할 때가 있습니다. 이번에는 두 개의 전제를 논리적으로 연결해 봅시다.",
      "<strong>가정하기</strong> 버튼을 눌러 <strong>소크라테스는 지혜롭다</strong>를 입력해 가정해 보세요.",
      "좋습니다. 이제 가정과 첫 번째 전제인 <strong>소크라테스는 지혜롭다 라면 플라톤은 개이다</strong>를 선택하세요.",
      "<strong>전건 긍정</strong> 규칙을 적용해 중간 결론을 도출하세요.",
      "이제 방금 얻은 중간 결론과 두 번째 전제인 <strong>플라톤은 개이다 라면 플라톤은 선하다</strong>를 선택하세요.",
      "다시 <strong>전건 긍정</strong> 규칙을 적용해 최종 결론을 이끌어내세요.",
      "최종 결과물인 <strong>플라톤은 선하다</strong>를 선택하세요.",
      "마지막으로, <strong>조건문 도입</strong> 규칙을 적용하세요. 그러면 <strong>소크라테스는 지혜롭다 라면 플라톤은 선하다</strong>라는 새로운 정리가 완성됩니다.",
      "이제 귀류법에 대해 알아봅시다.",
    ],
    // Stage 8 (Index 7) - NEWLY ADDED
    [
      "<strong>귀류법</strong>은 증명하고 싶은 것의 <strong>반대</strong>를 가정하여 모순을 이끌어내는 방법입니다.",
      "우리의 목표는 <strong>소크라테스는 악하다</strong>를 증명하는 것입니다. <strong>가정하기</strong>로 그 반대인 <strong>소크라테스는 악하다 는 거짓이다</strong>를 가정하세요.",
      "가정이 추가되었습니다. 이제 이 가정을 이용해 명백한 모순, 즉 'P'와 'P 는 거짓이다' 형태의 한 쌍을 만들어 봅시다. 방금 만든 가정과 다른 전제를 선택하고 <strong>전건 긍정</strong> 규칙을 적용해 보세요.",
      "<strong>플라톤은 지혜롭다</strong>가 도출되었습니다. 하지만 이미 참인 명제 목록에 <strong>플라톤은 지혜롭다 는 거짓이다</strong>가 존재합니다. 이것이 바로 모순입니다.",
      "이제 모순되는 두 명제를 모두 선택하고 <strong>귀류법</strong> 규칙을 적용하세요.",
      "최초의 가정이 틀렸다는 것이 증명되었습니다. 이제 마지막으로 <strong>이중 부정 제거</strong> 규칙을 적용하여 최종 결론을 얻어내세요.",
      "좋습니다. 이제 LOGOS ORGANON의 모든 추론 규칙을 배우셨습니다.<br><br>사유시간 외 언제라도 유레카! 버튼을 눌러 논증 구성 창을 열고, 방금 배운 추론 규칙들을 활용해 자신의 승리 또는 상대의 승리 불가능을 증명하면 즉시 게임에서 승리합니다.",
    ],
    // Stage 9 (Index 8) - 새로 추가되는 부분
    [
      "마지막으로 지금까지 배운 추론 규칙을 활용해 당신의 승리 [소크라테스는 승리한다]나 상대의 패배 [플라톤은 승리한다 는 거짓이다]를 증명해 보세요.",
    ],
  ],
  en: [
    // Stage 1 (Index 0)
    [
      "Welcome to LOGOS ORGANON!",
      "Before we begin, let's go over a few core rules.",
      "<strong>Win Condition:</strong> At the start of each game, you get a random <strong>Win Condition</strong>.<br><br>You win by declaring <strong>Eureka!</strong>, which is possible once per round, and proving either <strong>your own victory</strong> or <strong>your opponent's defeat</strong>.<br><br>For example, if your philosopher is Socrates and your opponent's is Plato, you win by proving either <strong>Socrates wins</strong> or <strong>Plato wins is false</strong>.",
      "<strong>First Turn:</strong> The first round always begins with the White player.<br><br><strong>Alternating Turns:</strong> The starting player alternates each round.",
      "Now, let's learn the most basic action: how to form a <strong>proposition</strong>.",
      "This is your <strong>hand</strong>. It contains various word cards.",
      "You will move cards here to form a <strong>proposition</strong>.",
      "Click a card to move it to the <strong>Current Proposition</strong> area.",
      "Excellent! A <strong>Proper Noun</strong> like <strong>Socrates</strong> can start a proposition directly.",
      "However, <strong>Entity</strong> cards like <strong>dog</strong>, <strong>bird</strong>, and <strong>fish</strong> must always follow a <strong>Quantifier</strong> card like <strong>Every</strong> or <strong>Some</strong>.<br><br>Also, a proper noun card cannot be placed after a quantifier.<br>Saying 'Every Socrates' or 'Some Socrates' is impossible, both intuitively and by the rules.<br><br>Please remember this crucial point!",
      "Each player must play exactly one card per turn, and if they have a playable card, they must play it.<br><br>Now that you've played a card, shall we end the turn?",
      "Press the <strong>End Turn</strong> button to pass the turn to your opponent.",
      "Next, let's learn how to respond to the proposition passed by your opponent.",
    ],
    // Stage 2 (Index 1)
    [
      "Your opponent's turn is over. It's your turn again.",
      "The proposition your opponent made is grammatically complete. You have several options now.",
      "<strong>First Option: Complete Proposition.</strong> This accepts the current statement as <strong>true</strong>. Since there are no contradictions for now, let's press the <strong>Complete Proposition</strong> button to add it to the <strong>List of True Propositions</strong>.",
      "The proposition has been added to the List of True Propositions.<br><br>There are two important conditions for a proposition to be added.",
      "First, you cannot add a proposition if the exact same one already exists.",
      "Second, you cannot add a proposition that contradicts an existing truth.",
      "Instead of completing the proposition, other options are also available.",
      "<strong>Second Option: Extend.</strong> You can add <strong>connective</strong> cards like <strong>and</strong>, <strong>or</strong>, or <strong>then</strong> to make the proposition more complex.<br><br>Remember, you can only use one connective per proposition.",
      "<strong>Third Option: Negate.</strong> If a proposition is disadvantageous, you can add the <strong>is false</strong> card from your hand to negate it.<br>But be careful! If your opponent also plays a negation card, your negation can be immediately nullified by the <strong>Double Negation</strong> rule.<br><br>Also, when <strong>is false</strong> is attached to a sentence with a connective, it only negates the smallest proposition it's attached to, not the whole sentence.<br><br>For example, in <strong>Some dog is good and Socrates is evil is false</strong>, only the <strong>Socrates is evil</strong> part is negated.",
      "Now you've learned the various ways to respond to an opponent's proposition. Next, let's learn about the <strong>Basic Axioms</strong> that form the foundation of our arguments.",
    ],
    // Stage 3 (Index 2)
    [
      "The List of True Propositions contains not only the propositions we've made, but also the <strong>Basic Axioms</strong> which are the foundation of all arguments.",
      "Click this item to see what axioms are available.",
      "Axioms are propositions that are accepted as true without proof, such as 'Every dog is a dog'.",
      "According to the axioms, the same entity <strong>cannot have two opposing properties at the same time</strong>, like being both 'good' and 'evil'.<br><br>Furthermore, a statement about an entire group, such as <strong>Every dog</strong>, cannot be contradicted by a statement about a part of that group, such as <strong>Some dog</strong>.<br><br>For example, <strong>Every dog is good</strong> and <strong>Some dog is evil</strong> cannot both be true at the same time.",
      "You can use these axioms as important premises when constructing your arguments.",
      "Now that you've checked the basic axioms, let's find out what happens when you cannot play any card.",
    ],
    // Stage 4 (Index 3)
    [
      "As the game progresses, a situation will arise where the current player can neither play a card nor complete the proposition.",
      "When this happens, the round ends and <strong>Thinking Time</strong> begins.",
      "During Thinking Time, players take one turn each, starting with the player who went second in that round. You can derive new <strong>theorems</strong> based on the existing true propositions.",
      "Your opponent is ending their turn.",
      "Now it's your turn. Press the <strong>Add Theorem</strong> button.",
      "The proof workbench has opened. Let's create a new theorem using the <strong>Universal Application</strong> rule. We will learn the specific uses of inference rules later.",
      "Select the premises <strong>Socrates is a dog</strong> and <strong>Every dog is wise</strong> from the list.",
      "Now, select <strong>Universal Application</strong> from the dropdown and click the <strong>Apply Rule</strong> button.",
      "The new theorem <strong>Socrates is wise</strong> has been derived.<br><br>Now, select this theorem and press the <strong>Add Selected Theorems to True List</strong> button to finalize the proof.",
      "The new theorem has been added to the <strong>List of True Propositions</strong>.<br>In Thinking Time, besides creating new theorems, you can also use your philosopher's <strong>unique ability</strong>. Abilities have limited uses per game, but they are powerful tools that can turn the tide or solidify your advantage.",
      "Now press the <strong>End Turn</strong> button to finish Thinking Time and start the next round.<br>When a new round starts, you get all your played cards back, and the List of True Propositions remains.",
    ],
    // Stage 5 (Index 4)
    [
      "You've learned the game flow. Now, let's learn the <strong>inference rules</strong> used to construct arguments. Press the <strong>Eureka!</strong> button to open the proof workbench.",
      // 1. Modus Ponens
      "First up is <strong>Modus Ponens</strong>. It's the most intuitive rule: if the first part of a 'then' statement is true, the second part must also be true.",
      "From the premise list, select <strong>Socrates is good</strong> and <strong>Socrates is good then Socrates wins</strong>.",
      "Select <strong>Modus Ponens</strong> from the rule list and click <strong>Apply Rule</strong>.",
      // 2. Modus Tollens
      "Great. The conclusion <strong>Socrates wins</strong> has been derived.<br><br>Now let's practice <strong>Modus Tollens</strong>. If the second part of a 'then' statement is false, the first part must also be false.<br>For example, from 'If it rains, then the ground is wet', if the ground is not wet, you intuitively know it didn't rain.",
      "From the premise list, select <strong>Plato is wise is false</strong> and <strong>Plato wins then Plato is wise</strong>.",
      "Select <strong>Modus Tollens</strong> from the rule list and click <strong>Apply Rule</strong>.",
      // 3. Disjunctive Syllogism
      "The conclusion <strong>Plato wins is false</strong> has been derived.<br><br>Next is <strong>Disjunctive Syllogism</strong>.<br>In an <strong>or</strong> statement, if one part is false, the other must be true.",
      "From the premise list, select <strong>Some bird is a fish or Some bird is a bird</strong> and <strong>Some bird is a fish is false</strong>.",
      "Select <strong>Disjunctive Syllogism</strong> from the rule list and click <strong>Apply Rule</strong>.",
      // 4. Hypothetical Syllogism
      "<strong>Some bird is a bird</strong> has been derived.<br><br>Now for <strong>Hypothetical Syllogism</strong>. Let's combine two chaining propositions into one.",
      "Select <strong>Plato is a dog then Plato is good</strong> and <strong>Plato is good then Plato wins</strong>.",
      "Select <strong>Hypothetical Syllogism</strong> from the rule list and click <strong>Apply Rule</strong>.",
      // 5. Conjunction Elimination (Simplification)
      "A more concise proposition <strong>Plato is a dog then Plato wins</strong> has been created. Next is the <strong>Simplification</strong> rule.",
      "A statement connected by <strong>and</strong> means both parts are true. From the premise list, select <strong>Socrates is wise and Plato is foolish</strong>.",
      "Select <strong>Simplification</strong> from the rule list and click <strong>Apply Rule</strong>. Two propositions will be derived at once.",
      // 6. Double Negation Elimination
      "As you can see, the two propositions have been separated.<br><br>Now let's learn the <strong>Double Negation Elimination</strong> rule. Two negatives make a positive.",
      "Select <strong>Some fish is good is false is false</strong> from the premise list.",
      "Select <strong>Double Negation Elimination</strong> from the rule list and click <strong>Apply Rule</strong>.",
      // 7. Universal Application
      "It's back to the original positive statement.<br><br>Next up is the <strong>Universal Application</strong> rule. A universal rule applies to specific instances.",
      "Select <strong>Every bird is good</strong> and <strong>Plato is a bird</strong> from the premise list.",
      "Select <strong>Universal Application</strong> from the rule list and click <strong>Apply Rule</strong>.",
      // 8. Existential Instantiation
      "<strong>Plato is good</strong> has been derived.<br><br>Next is the <strong>Existential Instantiation</strong> rule. Axioms like 'Some bird is a bird', 'Some dog is a dog', and 'Some fish is a fish' guarantee that entities exist. Therefore, if a property is true for <strong>Every</strong> member of a group, it can be derived that it is true for <strong>Some</strong> members.",
      "Select <strong>Every dog is good</strong> from the premise list.",
      "Select <strong>Existential Instantiation</strong> from the rule list and click <strong>Apply Rule</strong>.",
      // End of Stage 5
      "<strong>Some dog is good</strong> has been derived.<br><br>Next, let's learn a powerful rule for combining multiple propositions at once.",
    ],
    // Stage 6 (Index 5)
    [
      "The <strong>Proof by Cases</strong> rule we'll learn now brings multiple diverging paths to a single conclusion.",
      "We have two cases: <strong>Plato is good or Plato is evil</strong>. However, either case leads to the conclusion <strong>Plato is wise</strong>. First, please select all three required premises.",
      "Now, select <strong>Proof by Cases</strong> from the rule list and click <strong>Apply Rule</strong> to derive the conclusion.",
      "The conclusion <strong>Plato is wise</strong> has been derived.<br><br>Next up are rules that use <strong>assumptions</strong>, the heart of logic.",
    ],
    // Stage 7 (Index 6)
    [
      "Sometimes, to prove something, you need to assume <strong>what if...</strong>. This time, let's logically connect two premises.",
      "Click the <strong>Assume</strong> button and assume <strong>Socrates is wise</strong> by typing it in.",
      "Great. Now, select the assumption and the first premise: <strong>Socrates is wise then Plato is a dog</strong>.",
      "Apply the <strong>Modus Ponens</strong> rule to derive an intermediate conclusion.",
      "Now, select the intermediate conclusion you just got and the second premise: <strong>Plato is a dog then Plato is good</strong>.",
      "Apply the <strong>Modus Ponens</strong> rule again to derive the final conclusion.",
      "Select the final result, <strong>Plato is good</strong>.",
      "Finally, apply the <strong>Conditional Introduction</strong> rule. This will create the new theorem <strong>Socrates is wise then Plato is good</strong>.",
      "Now let's learn about Reductio ad Absurdum.",
    ],
    // Stage 8 (Index 7)
    [
      "<strong>Reductio ad Absurdum</strong> is a method of proving something by assuming its <strong>opposite</strong> to find a contradiction.",
      "Our goal is to prove <strong>Socrates is evil</strong>. Click <strong>Assume</strong> and assume the opposite: <strong>Socrates is evil is false</strong>.",
      "The assumption has been added. Now, let's use it to create an obvious contradiction, a pair of 'P' and '~P'. Select the assumption you just made and the other premise, then apply the <strong>Modus Ponens</strong> rule.",
      "<strong>Plato is wise</strong> has been derived. But we already have <strong>Plato is wise is false</strong> in our list of true propositions. This is a contradiction!",
      "Now, select the two contradictory propositions and apply the <strong>Reductio ad Absurdum</strong> rule.",
      "This proves our initial assumption was wrong. Now, apply the <strong>Double Negation Elimination</strong> rule to the result to get our final conclusion.",
      "Excellent. You have now learned all the inference rules of LOGOS ORGANON.<br><br>At any time outside of Thinking Time, you can open the proof workbench with the Eureka! button. Use the rules you've learned to prove your own victory or your opponent's inability to win, and you will immediately win the game.",
    ],
    [
      "Finally, using the inference rules you've learned so far, try to prove your victory [Socrates wins] or your opponent's defeat [Plato wins is false].",
    ],
  ],
};

// --- TUTORIAL STATE ---
let inTutorialMode = false;
let inPuzzleMode = false;
let tutorialStep = 0;
let tutorialSubStep = 0;
let temporaryListener = null;

function startTutorial(startStep = 0) {
  const exitBtn = document.getElementById("emergency-exit-tutorial-btn");
  exitBtn.classList.remove("hidden");
  exitBtn.textContent = currentLang.ui.endTutorialButton;
  audioManager.fadeOut("main-menu");
  audioManager.play("game-play");

  // 튜토리얼 시작 시, 철학자를 소크라테스와 플라톤으로 강제 초기화합니다.
  playerA_Data = PHILOSOPHERS["socrates"];
  playerB_Data = PHILOSOPHERS["plato"];

  // 튜토리얼에 사용될 철학자(소크라테스, 플라톤)의 능력 사용 상태를 초기화합니다.
  abilityUsedState = {};
  abilityUsedState["A"] = { used: false }; // 소크라테스는 1회 사용 가능
  abilityUsedState["B"] = { used: false }; // 플라톤은 1회 사용 가능

  fullDeck = currentLang.cards;

  inTutorialMode = true;
  tutorialStep = startStep;
  tutorialSubStep = 0;

  const tutorialBtn = document.getElementById("tutorial-btn");
  tutorialBtn.textContent = currentLang.ui.endTutorialButton;
  tutorialBtn.removeEventListener("click", startTutorial);
  tutorialBtn.addEventListener("click", endTutorial);

  document.querySelector(".main-center-bg").classList.add("hidden");
  document.getElementById("credits-btn").classList.add("hidden");
  updateMainMenuBtnVisibility();
  updateMainCenterVisibility();
  updateLanguageSelectState(); // 언어 선택 드롭다운 비활성화

  document
    .querySelectorAll(
      ".header-buttons-left button, .header-buttons-right button"
    )
    .forEach((btn) => {
      if (
        btn.id !== "tutorial-btn" &&
        btn.id !== "main-menu-btn" &&
        btn.id !== "fullscreen-btn" &&
        btn.id !== "settings-btn"
      ) {
        btn.disabled = true;
      }
    });

  document.getElementById("tutorial-guide").classList.remove("hidden");
  document.getElementById("tutorial-next-btn").textContent =
    currentLang.ui.nextButton;

  setupTutorialScenario(startStep + 1);
  advanceTutorial();
}

function advanceTutorial() {
  // Clear previous temporary listeners to prevent stacking
  if (temporaryListener) {
    temporaryListener.element.removeEventListener(
      temporaryListener.type,
      temporaryListener.handler
    );
    temporaryListener = null;
  }

  const script = currentLang.tutorial[tutorialStep];
  if (!script || tutorialSubStep >= script.length) {
    tutorialStep++;
    tutorialSubStep = 0;
    if (tutorialStep >= currentLang.tutorial.length) {
      endTutorial();
      return;
    }
    setupTutorialScenario(tutorialStep + 1); // Setup for the *next* stage
  }

  const newScript = currentLang.tutorial[tutorialStep];
  if (!newScript || tutorialSubStep >= newScript.length) {
    endTutorial();
    return;
  }

  const guideTextEl = document.getElementById("tutorial-text");
  const tutorialGuideEl = document.getElementById("tutorial-guide");
  const nextBtn = document.getElementById("tutorial-next-btn");
  guideTextEl.innerHTML = newScript[tutorialSubStep];
  nextBtn.classList.remove("hidden");

  // Reset position and highlights
  tutorialGuideEl.classList.remove("top");
  clearHighlights();

  handleTutorialStepLogic();

  tutorialSubStep++;
}

function handleTutorialStepLogic() {
  if (tutorialStep === 0) {
    // Stage 1
    switch (tutorialSubStep) {
      case 5:
        highlightElement("#player-a-hand");
        break;
      case 6:
        highlightElement("#proposition-display");
        break;
      case 7:
        const cardToClick = Array.from(
          document.querySelectorAll("#player-a-hand .card")
        ).find((c) => c.textContent === currentLang.keywords.socrates);
        if (cardToClick) {
          highlightElement(cardToClick);
          document.getElementById("tutorial-next-btn").classList.add("hidden");
          waitForInteraction(cardToClick, "click", () => {
            const cardData = playerA_Hand.find(
              (c) => c.text === currentLang.keywords.socrates
            );
            playCardTutorial(cardData);
            advanceTutorial();
          });
        }
        break;
      case 9:
        clearHighlights();
        const entityCards = Array.from(
          document.querySelectorAll("#player-a-hand .card")
        ).filter((c) => {
          const cardData = fullDeck.find((card) => card.text === c.textContent);
          return cardData && cardData.type === currentLang.cardTypes[2]; // 개체 or Entity
        });
        const quantifierCards = Array.from(
          document.querySelectorAll("#player-a-hand .card")
        ).filter((c) => {
          const cardData = fullDeck.find((card) => card.text === c.textContent);
          return cardData && cardData.type === currentLang.cardTypes[1]; // 양화사 or Quantifier
        });
        entityCards.forEach((card) => {
          card.classList.add("tutorial-highlight");
          card.classList.remove("unplayable"); // 이 줄을 추가합니다.
        });
        quantifierCards.forEach((card) => {
          card.classList.add("tutorial-highlight");
          card.classList.remove("unplayable"); // 이 줄을 추가합니다.
        });
        break;
      case 11:
        const endTurnBtn = document.getElementById("end-turn-btn");
        highlightElement(endTurnBtn);
        document.getElementById("tutorial-next-btn").classList.add("hidden");
        waitForInteraction(endTurnBtn, "click", () => {
          endTurnTutorial();
          advanceTutorial();
        });
        break;
    }
  } else if (tutorialStep === 1) {
    // Stage 2
    switch (tutorialSubStep) {
      case 2:
        const completeBtn = document.getElementById("complete-btn");
        highlightElement(completeBtn);
        document.getElementById("tutorial-next-btn").classList.add("hidden");
        waitForInteraction(completeBtn, "click", () => {
          completePropositionTutorial();
          advanceTutorial();
        });
        break;
      case 7:
        clearHighlights();
        const connectiveCards = Array.from(
          document.querySelectorAll("#player-a-hand .card")
        ).filter(
          (c) =>
            c.textContent === currentLang.keywords.and ||
            c.textContent === currentLang.keywords.or ||
            c.textContent === currentLang.keywords.if
        );
        connectiveCards.forEach((card) => {
          card.classList.add("tutorial-highlight");
          card.classList.remove("unplayable"); // 이 줄을 추가합니다.
        });
        break;
      case 8:
        const negationCard = Array.from(
          document.querySelectorAll("#player-a-hand .card")
        ).find((c) => c.textContent === currentLang.keywords.not);
        if (negationCard) highlightElement(negationCard);
        break;
    }
  } else if (tutorialStep === 2) {
    // Stage 3
    switch (tutorialSubStep) {
      case 0:
        highlightElement("#true-propositions");
        break;
      case 1:
        const axiomSummary = document.querySelector(".axiom-wrapper summary");
        if (axiomSummary) {
          highlightElement(axiomSummary);
          document.getElementById("tutorial-next-btn").classList.add("hidden");
          waitForInteraction(axiomSummary, "click", () => {
            advanceTutorial();
          });
        }
        break;
      case 2:
      case 3:
      case 4:
      case 5:
        document.getElementById("tutorial-guide").classList.add("top");
        break;
    }
    // handleTutorialStepLogic 함수 내의 'else if (tutorialStep === 3)' 블록을 찾아 통째로 교체합니다.
  } else if (tutorialStep === 3) {
    // Stage 4 - Thinking Time
    document.getElementById("tutorial-guide").classList.add("top");
    switch (tutorialSubStep) {
      case 2: // "후공 플레이어부터 시작합니다..." 텍스트 표시
        // 특별한 동작 없이 다음으로 넘어갑니다.
        break;
      case 3: // "(상대방이 턴을 마쳤습니다...)" 텍스트 표시
        document.getElementById("tutorial-next-btn").classList.add("hidden");
        // 상대 턴을 시뮬레이션하고 자동으로 플레이어 턴으로 넘깁니다.
        setTimeout(() => {
          endTurn(); // 상대 턴 종료
          advanceTutorial(); // 다음 단계로 자동 진행
        }, 1500); // 1.5초 후 실행
        break;
      case 4: // "이제 당신의 턴입니다. 정리 추가 버튼을..."
        const addTheoremBtn = document.getElementById("eureka-a");
        highlightElement(addTheoremBtn);
        document.getElementById("tutorial-next-btn").classList.add("hidden");
        waitForInteraction(addTheoremBtn, "click", () => {
          openEurekaModalTutorial();
          advanceTutorial();
        });
        break;
      case 6: // "전제 목록에서..."
        handleTutorialRuleInteraction(
          currentLang.langCode === "ko"
            ? ["소크라테스는 개이다", "모든 개는 지혜롭다"]
            : ["Socrates is a dog", "Every dog is wise"]
        );
        break;
      case 7: // "추론 규칙에서..."
        handleTutorialRuleApplication("universalApplication");
        break;
      case 8: // "좋습니다! ... 이제 이 정리를 선택하고..."
        const confirmBtn = document.getElementById("modal-confirm-btn");
        const newTheoremText =
          currentLang.langCode === "ko"
            ? "소크라테스는 지혜롭다"
            : "Socrates is wise";
        const newTheoremProp = parsePropositionFromString(newTheoremText);
        const theoremLi = Array.from(
          document.querySelectorAll("#premise-list li")
        ).find((li) => {
          if (!li.dataset.propObject) {
            return false;
          }
          const data = JSON.parse(li.dataset.propObject);
          return (
            data.type === "theorem" &&
            arePropositionsEqual(data.proposition, newTheoremProp)
          );
        });

        if (theoremLi && confirmBtn) {
          highlightElement(theoremLi);
          confirmBtn.classList.add("tutorial-highlight");
          document.getElementById("tutorial-next-btn").classList.add("hidden");

          const confirmHandler = () => {
            const checkbox = theoremLi.querySelector("input");
            if (checkbox && checkbox.checked) {
              addTheoremsToListTutorial();
              advanceTutorial();
            } else {
              showAlert(
                currentLang.langCode === "ko"
                  ? "새로 도출된 정리를 먼저 선택해주세요."
                  : "Please select the newly derived theorem first."
              );
            }
          };
          waitForInteraction(confirmBtn, "click", confirmHandler);
        }
        break;
      case 9: // "훌륭합니다! 사유 시간에는..."
        // '능력 사용' 버튼을 하이라이트합니다.
        highlightElement("#ability-a");
        break;
      case 10: // "새로운 정리가... 이제 턴 종료 버튼을..."
        const endTurnBtn = document.getElementById("end-turn-btn");
        highlightElement(endTurnBtn);
        document.getElementById("tutorial-next-btn").classList.add("hidden");
        waitForInteraction(endTurnBtn, "click", () => {
          endThinkingTime(); // 사유 시간을 종료하는 함수 호출
          advanceTutorial();
        });

        break;
    }
  } else if (tutorialStep === 4) {
    // Stage 5 - Basic Rules
    document.getElementById("tutorial-guide").classList.add("top");
    switch (tutorialSubStep) {
      // Intro
      case 0:
        const eurekaBtn = document.getElementById("eureka-a");
        highlightElement(eurekaBtn);
        document.getElementById("tutorial-next-btn").classList.add("hidden");
        waitForInteraction(eurekaBtn, "click", (event) => {
          // event를 인자로 받도록 수정
          event.stopPropagation(); // 전역 리스너로 이벤트가 가는 것을 막음
          audioManager.playSfx("eureka"); // 고유 효과음 재생
          openEurekaModalTutorial();
          advanceTutorial();
        });
        break;
      // Modus Ponens
      case 2:
        handleTutorialRuleInteraction(
          currentLang.langCode === "ko"
            ? [
                "소크라테스는 선하다",
                "(소크라테스는 선하다) 라면 (소크라테스는 승리한다)",
              ]
            : ["Socrates is good", "(Socrates is good) then (Socrates wins)"]
        );
        break;
      case 3:
        handleTutorialRuleApplication("modusPonens");
        break;
      // Modus Tollens
      case 5:
        handleTutorialRuleInteraction(
          currentLang.langCode === "ko"
            ? [
                "플라톤은 지혜롭다 는 거짓이다",
                "(플라톤은 승리한다) 라면 (플라톤은 지혜롭다)",
              ]
            : ["Plato is wise is false", "(Plato wins) then (Plato is wise)"]
        );
        break;
      case 6:
        handleTutorialRuleApplication("modusTollens");
        break;
      // Disjunctive Syllogism
      case 8:
        handleTutorialRuleInteraction(
          currentLang.langCode === "ko"
            ? [
                "(어떤 새는 물고기이다) 또는 (어떤 새는 새이다)",
                "어떤 새는 물고기이다 는 거짓이다",
              ]
            : [
                "(Some bird is a fish) or (Some bird is a bird)",
                "Some bird is a fish is false",
              ]
        );
        break;
      case 9:
        handleTutorialRuleApplication("disjunctiveSyllogism");
        break;
      // Hypothetical Syllogism
      case 11:
        handleTutorialRuleInteraction(
          currentLang.langCode === "ko"
            ? [
                "(플라톤은 개이다) 라면 (플라톤은 선하다)",
                "(플라톤은 선하다) 라면 (플라톤은 승리한다)",
              ]
            : [
                "(Plato is a dog) then (Plato is good)",
                "(Plato is good) then (Plato wins)",
              ]
        );
        break;
      case 12:
        handleTutorialRuleApplication("hypotheticalSyllogism");
        break;
      // Conjunction Elimination
      case 14:
        handleTutorialRuleInteraction(
          currentLang.langCode === "ko"
            ? ["(소크라테스는 지혜롭다) 그리고 (플라톤은 어리석다)"]
            : ["(Socrates is wise) and (Plato is foolish)"]
        );
        break;
      case 15:
        handleTutorialRuleApplication("conjunctionElimination");
        break;
      // Double Negation
      case 17:
        handleTutorialRuleInteraction(
          currentLang.langCode === "ko"
            ? ["어떤 물고기는 선하다 는 거짓이다 는 거짓이다"]
            : ["Some fish is good is false is false"]
        );
        break;
      case 18:
        handleTutorialRuleApplication("doubleNegationElimination");
        break;
      // Universal Application
      case 20:
        handleTutorialRuleInteraction(
          currentLang.langCode === "ko"
            ? ["모든 새는 선하다", "플라톤은 새이다"]
            : ["Every bird is good", "Plato is a bird"]
        );
        break;
      case 21:
        handleTutorialRuleApplication("universalApplication");
        break;
      // Existential Instantiation
      case 23:
        handleTutorialRuleInteraction(
          currentLang.langCode === "ko"
            ? ["모든 개는 선하다"]
            : ["Every dog is good"]
        );
        break;
      case 24:
        handleTutorialRuleApplication("existentialInstantiation");
        break;
    }
  } else if (tutorialStep === 5) {
    // Stage 6 - Advanced Rules (Proof by Cases)
    document.getElementById("tutorial-guide").classList.add("top");
    switch (tutorialSubStep) {
      case 1:
        const premises =
          currentLang.langCode === "ko"
            ? [
                "플라톤은 선하다 또는 플라톤은 악하다",
                "(플라톤은 선하다) 라면 (플라톤은 지혜롭다)",
                "(플라톤은 악하다) 라면 (플라톤은 지혜롭다)",
              ]
            : [
                "Plato is good or Plato is evil",
                "(Plato is good) then (Plato is wise)",
                "(Plato is evil) then (Plato is wise)",
              ];
        handleTutorialRuleInteraction(premises);
        break;
      case 2:
        handleTutorialRuleApplication("proofByCases");
        break;
    }
  } else if (tutorialStep === 6) {
    // Stage 7 - Assumption (Conditional Intro) ★★★ MODIFIED SECTION ★★★
    document.getElementById("tutorial-guide").classList.add("top");
    switch (tutorialSubStep) {
      case 1: // Assume
        highlightElement("#add-assumption-btn");
        document.getElementById("tutorial-next-btn").classList.add("hidden");
        const correctAssumptionCI =
          currentLang.langCode === "ko"
            ? "소크라테스는 지혜롭다"
            : "Socrates is wise";
        const originalShowPrompt = window.showPrompt;
        window.showPrompt = (message, callback) => {
          originalShowPrompt(message, (value) => {
            if (value === correctAssumptionCI) {
              window.showPrompt = originalShowPrompt;
              callback(value);
              advanceTutorial();
            } else {
              showAlert(
                currentLang.langCode === "ko"
                  ? "올바른 명제를 입력해 주십시오."
                  : "Please enter a valid proposition."
              );
              callback(null);
            }
          });
        };
        break;
      case 2: // Select premises for 1st MP
        const premisesCI_1 =
          currentLang.langCode === "ko"
            ? [
                "소크라테스는 지혜롭다",
                "(소크라테스는 지혜롭다) 라면 (플라톤은 개이다)",
              ]
            : ["Socrates is wise", "(Socrates is wise) then (Plato is a dog)"];
        handleTutorialRuleInteraction(premisesCI_1);
        break;
      case 3: // Apply 1st MP
        handleTutorialRuleApplication("modusPonens");
        break;
      case 4: // Select premises for 2nd MP
        const premisesCI_2 =
          currentLang.langCode === "ko"
            ? ["플라톤은 개이다", "(플라톤은 개이다) 라면 (플라톤은 선하다)"]
            : ["Plato is a dog", "(Plato is a dog) then (Plato is good)"];
        handleTutorialRuleInteraction(premisesCI_2);
        break;
      case 5: // Apply 2nd MP
        handleTutorialRuleApplication("modusPonens");
        break;
      case 6: // Select final result
        const conclusionTextCI =
          currentLang.langCode === "ko" ? "플라톤은 선하다" : "Plato is good";
        const conclusionPropCI = parsePropositionFromString(conclusionTextCI);
        const conclusionLi = Array.from(
          document.querySelectorAll("#premise-list li")
        ).find((li) => {
          if (!li.dataset.propObject) {
            return false;
          }
          const data = JSON.parse(li.dataset.propObject);
          return (
            data.dependsOnAssumption &&
            arePropositionsEqual(data.proposition, conclusionPropCI)
          );
        });
        if (conclusionLi) {
          highlightElement(conclusionLi);
          document.getElementById("tutorial-next-btn").classList.add("hidden");
          waitForInteraction(
            document.getElementById("premise-list"),
            "click",
            () => {
              const selectedCheckbox = conclusionLi.querySelector("input");
              const allCheckboxes = document.querySelectorAll(
                "#premise-list input:checked"
              );
              if (selectedCheckbox.checked && allCheckboxes.length === 1) {
                advanceTutorial();
              }
            }
          );
        }
        break;
      case 7: // Apply CI
        handleTutorialRuleApplication("conditionalIntroduction");
        break;
    }
  } else if (tutorialStep === 7) {
    // Stage 8 - Assumption (RAA)
    document.getElementById("tutorial-guide").classList.add("top");
    switch (tutorialSubStep) {
      case 1:
        highlightElement("#add-assumption-btn");
        document.getElementById("tutorial-next-btn").classList.add("hidden");
        const correctAssumptionRAA =
          currentLang.langCode === "ko"
            ? "소크라테스는 악하다 는 거짓이다"
            : "Socrates is evil is false";
        const originalShowPrompt = window.showPrompt;
        window.showPrompt = (message, callback) => {
          originalShowPrompt(message, (value) => {
            if (value === correctAssumptionRAA) {
              window.showPrompt = originalShowPrompt;
              callback(value);
              advanceTutorial();
            } else {
              showAlert(
                currentLang.langCode === "ko"
                  ? "올바른 명제를 입력해 주십시오."
                  : "Please enter a valid proposition."
              );
              callback(null);
            }
          });
        };
        break;
      case 2:
        const premisesRAA_texts =
          currentLang.langCode === "ko"
            ? [
                "소크라테스는 악하다 는 거짓이다",
                "(소크라테스는 악하다 는 거짓이다) 라면 (플라톤은 지혜롭다)",
              ]
            : [
                "(Socrates is evil is false) then (Plato is wise)",
                "Socrates is evil is false",
              ];

        document.getElementById("tutorial-next-btn").classList.add("hidden");
        const premiseList_mp = document.getElementById("premise-list");
        const premiseProps_mp = premisesRAA_texts.map((text) =>
          parsePropositionFromString(text)
        );
        const premiseLis_mp = premiseProps_mp
          .map((prop) =>
            Array.from(premiseList_mp.querySelectorAll("li")).find((li) => {
              if (!li.dataset.propObject) {
                return false;
              }
              const data = JSON.parse(li.dataset.propObject);
              return arePropositionsEqual(data.proposition, prop);
            })
          )
          .filter(Boolean);

        premiseLis_mp.forEach((li) => li.classList.add("tutorial-highlight"));
        document
          .getElementById("inference-rule-select")
          .classList.add("tutorial-highlight");
        document
          .getElementById("apply-rule-btn")
          .classList.add("tutorial-highlight");

        const applyBtn_mp = document.getElementById("apply-rule-btn");
        const select_mp = document.getElementById("inference-rule-select");

        const applyRuleHandler_mp = () => {
          const allChecked = premiseLis_mp.every(
            (li) => li.querySelector("input").checked
          );
          const totalChecked =
            premiseList_mp.querySelectorAll("input:checked").length;
          if (!allChecked || totalChecked !== premiseLis_mp.length) {
            showAlert(
              currentLang.langCode === "ko"
                ? "먼저 가정과 다른 전제를 선택해주세요."
                : "Please select the assumption and the other premise first."
            );
            return;
          }

          if (select_mp.value === "modusPonens") {
            applyRuleTutorial();
            advanceTutorial(); // Advances to subStep 3
          } else {
            showAlert(currentLang.alerts.ruleFailed);
          }
        };
        waitForInteraction(applyBtn_mp, "click", applyRuleHandler_mp);
        break;
      case 3:
        // This substep now just shows the result text.
        // The logic is handled in case 2.
        // We just need to clear highlights and let the user click "Next".
        clearHighlights();
        break;
      case 4: // This case now handles both selection and application for RAA.
        const contradictionPairTexts =
          currentLang.langCode === "ko"
            ? ["플라톤은 지혜롭다", "플라톤은 지혜롭다 는 거짓이다"]
            : ["Plato is wise", "Plato is wise is false"];

        document.getElementById("tutorial-next-btn").classList.add("hidden");
        const premiseList = document.getElementById("premise-list");
        const premiseProps = contradictionPairTexts.map((text) =>
          parsePropositionFromString(text)
        );
        const premiseLis = premiseProps
          .map((prop) =>
            Array.from(premiseList.querySelectorAll("li")).find((li) => {
              if (!li.dataset.propObject) {
                return false;
              }
              const data = JSON.parse(li.dataset.propObject);
              return arePropositionsEqual(data.proposition, prop);
            })
          )
          .filter(Boolean);

        premiseLis.forEach((li) => li.classList.add("tutorial-highlight"));
        highlightElement("#inference-rule-select");
        document
          .getElementById("apply-rule-btn")
          .classList.add("tutorial-highlight");

        const applyBtn = document.getElementById("apply-rule-btn");
        const select = document.getElementById("inference-rule-select");

        const applyRuleHandler = () => {
          const allChecked = premiseLis.every(
            (li) => li.querySelector("input").checked
          );
          const totalChecked =
            premiseList.querySelectorAll("input:checked").length;
          if (!allChecked || totalChecked !== premiseLis.length) {
            showAlert(
              currentLang.langCode === "ko"
                ? "먼저 모순되는 두 전제를 선택해주세요."
                : "Please select the two contradictory premises first."
            );
            return;
          }

          if (select.value === "reductioAdAbsurdum") {
            applyRuleTutorial();
            advanceTutorial(); // Advances to subStep 5
          } else {
            showAlert(currentLang.alerts.ruleFailed);
          }
        };
        waitForInteraction(applyBtn, "click", applyRuleHandler);
        break;
      case 5: // This is the step where the RAA result is shown and DNE is expected
        clearHighlights();
        document.getElementById("tutorial-next-btn").classList.add("hidden"); // Hide the "Next" button

        const raaResultText =
          currentLang.langCode === "ko"
            ? "소크라테스는 악하다 는 거짓이다 는 거짓이다"
            : "Socrates is evil is false is false";
        const raaResultProp = parsePropositionFromString(raaResultText);

        const premiseListForDNE = document.getElementById("premise-list");
        const raaResultLi = Array.from(
          premiseListForDNE.querySelectorAll("li")
        ).find((li) => {
          if (!li.dataset.propObject) {
            return false;
          }
          const data = JSON.parse(li.dataset.propObject);
          // Check if it's a theorem derived from RAA and matches the expected proposition
          return (
            data.type === "theorem" &&
            data.label === currentLang.labels.raa_theorem &&
            arePropositionsEqual(data.proposition, raaResultProp)
          );
        });

        if (raaResultLi) {
          highlightElement(raaResultLi); // Highlight the RAA result
          highlightElement("#inference-rule-select"); // Highlight the rule dropdown
          document
            .getElementById("apply-rule-btn")
            .classList.add("tutorial-highlight"); // Highlight the apply button

          const applyBtnDNE = document.getElementById("apply-rule-btn");
          const selectDNE = document.getElementById("inference-rule-select");

          const applyRuleHandlerDNE = () => {
            const selectedCheckboxes = premiseListForDNE.querySelectorAll(
              'input[type="checkbox"]:checked'
            );
            const isRaaResultSelected = Array.from(selectedCheckboxes).some(
              (chk) => chk.parentElement === raaResultLi
            );

            // Check if exactly one premise is selected, it's the RAA result, and DNE rule is chosen
            if (
              selectedCheckboxes.length === 1 &&
              isRaaResultSelected &&
              selectDNE.value === "doubleNegationElimination"
            ) {
              applyRuleTutorial(); // Apply the rule
              advanceTutorial(); // Proceed to the next tutorial step
            } else {
              showAlert(currentLang.alerts.ruleFailed); // Show error if conditions not met
            }
          };
          waitForInteraction(applyBtnDNE, "click", applyRuleHandlerDNE);
        } else {
          // Fallback if RAA result not found (shouldn't happen in normal tutorial flow)
          console.error("Tutorial Error: RAA result not found for DNE step.");
          advanceTutorial(); // Proceed to next step if something went wrong
        }
        break;
      case 6: // This is the final text step
        clearHighlights();
        // No specific interaction needed, just display text and allow "Next" to end tutorial
        break;
    }
  } else if (tutorialStep === 8) {
    // Stage 9 - Final Puzzle Logic
    document.getElementById("tutorial-guide").classList.add("top");
    document.getElementById("tutorial-next-btn").classList.add("hidden"); // 다음 버튼 숨김
    // 사용자가 직접 문제를 해결해야 하므로, 여기서 더 이상 자동 진행하지 않습니다.
  }
}

function handleTutorialRuleInteraction(premiseTexts) {
  document.getElementById("tutorial-next-btn").classList.add("hidden");
  const premiseList = document.getElementById("premise-list");
  const premiseProps = premiseTexts.map((text) =>
    parsePropositionFromString(text)
  );
  const premiseLis = premiseProps
    .map((prop) =>
      Array.from(premiseList.querySelectorAll("li")).find((li) => {
        // 구분선 요소는 건너뛰기
        if (!li.dataset.propObject) return false;
        const data = JSON.parse(li.dataset.propObject);
        return arePropositionsEqual(data.proposition, prop);
      })
    )
    .filter(Boolean);

  if (premiseLis.length !== premiseTexts.length) {
    console.error(
      "Tutorial Error: Could not find all required premises in the list.",
      premiseTexts
    );
    return;
  }

  premiseLis.forEach((li) => li.classList.add("tutorial-highlight"));

  const checkPremises = () => {
    const allChecked = premiseLis.every(
      (li) => li.querySelector("input").checked
    );
    const totalChecked = premiseList.querySelectorAll("input:checked").length;
    if (allChecked && totalChecked === premiseLis.length) {
      advanceTutorial();
    }
  };
  waitForInteraction(premiseList, "click", checkPremises);
}

function handleTutorialRuleApplication(ruleValue) {
  document.getElementById("tutorial-next-btn").classList.add("hidden");
  highlightElement("#inference-rule-select");
  document.getElementById("apply-rule-btn").classList.add("tutorial-highlight");

  // 체크박스들을 비활성화
  const checkboxes = document.querySelectorAll(
    "#premise-list input[type='checkbox']"
  );
  checkboxes.forEach((checkbox) => {
    checkbox.disabled = true;
  });

  const applyBtn = document.getElementById("apply-rule-btn");
  const select = document.getElementById("inference-rule-select");

  const applyRuleHandler = () => {
    if (select.value === ruleValue) {
      // 전제가 선택되었는지 확인
      const selectedPremises = document.querySelectorAll(
        "#premise-list input:checked"
      );
      if (selectedPremises.length === 0) {
        showAlert(
          currentLang.langCode === "ko"
            ? "전제를 선택해주세요."
            : "Please select premises."
        );
        return;
      }

      applyRuleTutorial();
      advanceTutorial();
    } else {
      showAlert(currentLang.alerts.ruleFailed);
    }
  };
  waitForInteraction(applyBtn, "click", applyRuleHandler);
}

function playCardTutorial(cardToPlay) {
  const hand = currentPlayer === "A" ? playerA_Hand : playerB_Hand;
  const cardIndex = hand.findIndex(
    (c) => c.text === cardToPlay.text && c.type === cardToPlay.type
  );

  audioManager.playSfx("playCard");

  if (cardIndex > -1) {
    const [playedCard] = hand.splice(cardIndex, 1);
    currentProposition.push({ card: playedCard, player: currentPlayer });
    cardsPlayedThisTurn[currentPlayer]++;
    lastCardPlayer = currentPlayer;
    render();
  }
}

function endTurnTutorial() {
  audioManager.playSfx("end");
  currentPlayer = currentPlayer === "A" ? "B" : "A";
  cardsPlayedThisTurn.A = 0;
  cardsPlayedThisTurn.B = 0;
  render();
}

function completePropositionTutorial() {
  const parsedProp = parsePropositionFromCards([...currentProposition]);
  if (parsedProp) {
    truePropositions.push({
      type: "user-made",
      round: currentRound,
      proposition: parsedProp,
      original_cards: [...currentProposition],
    });

    audioManager.playSfx("complete");

    lastPropositionMaker =
      currentProposition[currentProposition.length - 1].player;
    currentPlayer = lastPropositionMaker === "A" ? "B" : "A";
    currentProposition = [];
    lastCardPlayer = null;
    cardsPlayedThisTurn = { A: 0, B: 0 };
    render();
  }
}

function openEurekaModalTutorial() {
  derivedPropositionsInModal = [];
  currentAssumption = null;
  const modal = document.getElementById("eureka-modal");
  const premiseList = document.getElementById("premise-list");
  premiseList.innerHTML = "";

  const allSelectablePropositions = [
    ...parsedAxioms,
    ...truePropositions.filter(
      (p) =>
        p.type === "user-made" || p.type === "theorem" || p.type === "victory"
    ),
  ];
  // 공리들을 그룹별로 분류하고 순서대로 추가 (튜토리얼 버전)
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axioms[axiomIndex].proposition,
            type: axioms[axiomIndex].type,
            dependsOnAssumption: false,
            isAssumption: false,
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
            proposition: axiomData.proposition,
            type: axiomData.type,
            dependsOnAssumption: false,
            isAssumption: false,
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
        proposition: propData.proposition,
        type: propData.type,
        dependsOnAssumption: false,
        isAssumption: false,
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
  modalTitle.textContent = isThinkingTime
    ? currentLang.modals.eurekaTitleTheorem
    : currentLang.modals.eurekaTitleVictory;
  confirmBtn.textContent = isThinkingTime
    ? currentLang.modals.confirmTheoremButton
    : currentLang.modals.confirmVictoryButton;

  confirmBtn.onclick = isThinkingTime ? addTheoremsToList : proveVictory;

  document.getElementById("cancel-assumption-btn").style.display =
    currentAssumption ? "inline-block" : "none";

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

function applyRuleTutorial() {
  const selectedLis = Array.from(
    document.querySelectorAll('#premise-list input[type="checkbox"]:checked')
  );
  const rule = document.getElementById("inference-rule-select").value;
  const premisesData = selectedLis
    .map((chk) => {
      const propString = chk.parentElement.dataset.propObject;
      return propString ? JSON.parse(propString) : null;
    })
    .filter(Boolean);

  const premises = premisesData.map((data) => data.proposition);
  let conclusions = [];

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

  if (rule === "conditionalIntroduction") {
    const result = {
      type: "conditional",
      left: currentAssumption,
      right: premises[0],
    };
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
        label: currentLang.labels.ci_theorem,
      });
      // 튜토리얼 조건부 도입 성공 시 사운드 재생
      audioManager.playSfx("pop");
    }
  } else if (rule === "reductioAdAbsurdum") {
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
      });
      // 튜토리얼 귀류법 성공 시 사운드 재생
      audioManager.playSfx("pop");
    }
  } else if (threePremiseRules.includes(rule)) {
    const result = window[rule](premises[0], premises[1], premises[2]);
    if (result) conclusions.push(result);
  } else if (twoPremiseRules.includes(rule)) {
    const result = window[rule](premises[0], premises[1]);
    if (result) conclusions.push(result);
  } else if (onePremiseRules.includes(rule)) {
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
      });
    });
    // 튜토리얼 추론 규칙 적용 성공 시 사운드 재생
    audioManager.playSfx("pop");
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

function addTheoremsToListTutorial() {
  const selectedLis = Array.from(
    document.querySelectorAll('#premise-list input[type="checkbox"]:checked')
  );
  const newTheorems = selectedLis
    .map((li) => {
      const propString = li.parentElement.dataset.propObject;
      return propString ? JSON.parse(propString) : null;
    })
    .filter((p) => p && p.type === "theorem" && !p.dependsOnAssumption);

  newTheorems.forEach((theoremData) => {
    const isDuplicate = truePropositions.some((p) =>
      arePropositionsEqual(p.proposition, theoremData.proposition)
    );
    if (!isDuplicate) {
      truePropositions.push({
        propId: `prop_${Date.now()}_${Math.random()}`, // ✅ 이 줄이 추가되었습니다.
        type: "theorem",
        round: currentRound,
        proposition: theoremData.proposition,
      });
    }
  });
  document.getElementById("eureka-modal").classList.remove("visible");
  render();
}

function highlightElement(elementOrSelector, remove = false) {
  clearHighlights();
  if (remove) return;

  const element =
    typeof elementOrSelector === "string"
      ? document.querySelector(elementOrSelector)
      : elementOrSelector;
  if (element) {
    element.classList.add("tutorial-highlight");
    element.classList.remove("unplayable");
  }
}

function clearHighlights() {
  const previouslyHighlighted = document.querySelectorAll(
    ".tutorial-highlight"
  );

  previouslyHighlighted.forEach((el) => {
    el.classList.remove("tutorial-highlight");

    // 하이라이트가 제거된 요소가 손패에 있는 카드라면,
    if (
      el.classList.contains("card") &&
      el.parentElement &&
      (el.parentElement.id === "player-a-hand" ||
        el.parentElement.id === "player-b-hand")
    ) {
      const cardText = el.textContent;
      const player = el.parentElement.id === "player-a-hand" ? "A" : "B";
      const hand = player === "A" ? playerA_Hand : playerB_Hand;
      const cardData = hand.find((c) => c.text === cardText);

      if (cardData) {
        // 현재 게임 상태에 따라 카드가 비활성화 되어야 하는지 다시 확인합니다.
        const shouldBeUnplayable =
          isThinkingTime ||
          player !== currentPlayer ||
          cardsPlayedThisTurn[player] >= 1 ||
          !isValidPlay(cardData, currentProposition);

        if (shouldBeUnplayable) {
          el.classList.add("unplayable");
        }
      }
    }
  });
}

function waitForInteraction(element, eventType, callback) {
  if (temporaryListener) {
    temporaryListener.element.removeEventListener(
      temporaryListener.type,
      temporaryListener.handler
    );
  }
  const handler = (event) => {
    // For checkbox clicks, we don't want to stop propagation
    if (eventType !== "click" || event.target.type !== "checkbox") {
    }
    callback(event);
  };
  element.addEventListener(eventType, handler, {
    once: eventType !== "click",
  });

  temporaryListener = { element, type: eventType, handler };
}

function endTutorial() {
  document
    .getElementById("emergency-exit-tutorial-btn")
    .classList.add("hidden");
  audioManager.fadeOut("game-play");
  audioManager.fadeOut("thinking-time");

  // --- 💡[수정된 부분 시작] ---

  // 1. 튜토리얼 진행 단계를 완전히 초기화합니다.
  inTutorialMode = false;
  tutorialStep = 0;
  tutorialSubStep = 0;

  // 2. 튜토리얼 진행을 위해 임시로 추가되었을 수 있는 이벤트 리스너를 안전하게 제거합니다.
  if (temporaryListener) {
    temporaryListener.element.removeEventListener(
      temporaryListener.type,
      temporaryListener.handler
    );
    temporaryListener = null;
  }

  // --- [수정된 부분 끝] ---

  document.getElementById("tutorial-guide").classList.add("hidden");
  clearHighlights();

  const tutorialBtn = document.getElementById("tutorial-btn");
  tutorialBtn.textContent = currentLang.ui.tutorialButton;
  tutorialBtn.removeEventListener("click", endTutorial);
  tutorialBtn.addEventListener("click", startTutorial);

  document
    .querySelectorAll(
      ".header-buttons-left button, .header-buttons-right button"
    )
    .forEach((btn) => {
      btn.disabled = false;
    });
  document.getElementById("eureka-modal").classList.remove("visible");

  // 메인 메뉴를 표시하여 게임 상태를 완전히 초기화합니다.
  showMainMenu();
}

function setupTutorialScenario(step) {
  if (step === 4) {
    // 4단계는 '사유 시간' 튜토리얼이므로, 사유 시간 음악으로 변경
    audioManager.fadeOut("game-play");
    audioManager.play("thinking-time");
  } else if (step === 5) {
    // 5단계는 다시 일반 게임 규칙으로 돌아오므로, 게임 음악으로 변경
    audioManager.fadeOut("thinking-time");
    audioManager.play("game-play");
  }
  if (step === 1) {
    playerA_Hand = [];
    playerB_Hand = [];
    truePropositions = [];

    const socratesSubject = currentLang.keywords.socrates;
    const platoSubject = currentLang.keywords.plato;
    currentAxioms = generateAxioms(socratesSubject, platoSubject, currentLang);

    parsedAxioms = currentAxioms
      .map((str) => ({
        type: "axiom",
        proposition: parsePropositionFromString(str),
      }))
      .filter((a) => a.proposition);

    internalTruthSet = parsedAxioms.map((a) => a.proposition);
    const {
      if: ifKeyword,
      and: andKeyword,
      wins: winsKeyword,
      socrates: socratesKeyword,
      plato: platoKeyword,
    } = currentLang.keywords;

    const goodPredicate = currentLang.langCode === "ko" ? "선하다" : "is good";
    const evilPredicate = currentLang.langCode === "ko" ? "악하다" : "is evil";

    // 소크라테스 승리 조건
    const socratesVCText = `((${socratesKeyword} ${goodPredicate}) ${ifKeyword} (${socratesKeyword} ${winsKeyword})) ${andKeyword} ((${socratesKeyword} ${winsKeyword}) ${ifKeyword} (${socratesKeyword} ${goodPredicate}))`;
    const parsedSocratesVC = parsePropositionFromString(socratesVCText);
    if (parsedSocratesVC) {
      truePropositions.push({
        type: "victory",
        text: socratesVCText,
        owner: "A",
        proposition: parsedSocratesVC,
        ultimate_target: {
          type: "atomic",
          subject: socratesKeyword,
          predicate: winsKeyword,
        },
        core_goal: {
          type: "atomic",
          subject: socratesKeyword,
          predicate: goodPredicate,
        },
      });
      internalTruthSet.push(parsedSocratesVC);
    }

    // 플라톤 승리 조건
    const platoVCText = `((${platoKeyword} ${evilPredicate}) ${ifKeyword} (${platoKeyword} ${winsKeyword})) ${andKeyword} ((${platoKeyword} ${winsKeyword}) ${ifKeyword} (${platoKeyword} ${evilPredicate}))`;
    const parsedPlatoVC = parsePropositionFromString(platoVCText);
    if (parsedPlatoVC) {
      truePropositions.push({
        type: "victory",
        text: platoVCText,
        owner: "B",
        proposition: parsedPlatoVC,
        ultimate_target: {
          type: "atomic",
          subject: platoKeyword,
          predicate: winsKeyword,
        },
        core_goal: {
          type: "atomic",
          subject: platoKeyword,
          predicate: evilPredicate,
        },
      });
      internalTruthSet.push(parsedPlatoVC);
    }
    currentProposition = [];
    currentPlayer = "A";
    propositionStarter = "A";
    gameIsOver = false;
    currentRound = 1;
    isThinkingTime = false;
    lastPropositionMaker = null;
    currentAssumption = null;
    lastCardPlayer = null;
    cardsPlayedThisTurn = { A: 0, B: 0 };
    gameMode = "2P";

    // 튜토리얼을 위한 기본 철학자 데이터 설정
    playerA_Data = PHILOSOPHERS["socrates"];
    playerB_Data = PHILOSOPHERS["plato"];

    const portraitA_El = document.getElementById("player-a-portrait");
    if (portraitA_El) {
      portraitA_El.style.backgroundImage = `url('${playerA_Data.image.p1}')`;
    }
    const portraitB_El = document.getElementById("player-b-portrait");
    if (portraitB_El) {
      portraitB_El.style.backgroundImage = `url('${playerB_Data.image.p2}')`;
    }

    const socratesCardText = currentLang.keywords.socrates;
    const requiredA_CardTexts = [
      socratesCardText,
      currentLang.keywords.and,
      currentLang.keywords.or,
      currentLang.keywords.if,
      currentLang.keywords.not,
      currentLang.langCode === "ko" ? "개는" : "dog",
      currentLang.langCode === "ko" ? "새는" : "bird",
      currentLang.langCode === "ko" ? "물고기는" : "fish",
      currentLang.keywords.universal_q,
      currentLang.keywords.existential_q,
    ];
    playerA_Hand = fullDeck.filter((c) => requiredA_CardTexts.includes(c.text));

    const wiseCardText = currentLang.langCode === "ko" ? "지혜롭다" : "is wise";
    const requiredB_CardTexts = [wiseCardText, currentLang.keywords.plato];
    playerB_Hand = fullDeck.filter((c) => requiredB_CardTexts.includes(c.text));
    playerB_Hand.push(
      ...fullDeck
        .filter(
          (c) =>
            !requiredB_CardTexts.includes(c.text) &&
            c.type === (currentLang.langCode === "ko" ? "서술어" : "Predicate")
        )
        .slice(0, 2)
    );
  } else if (step === 2) {
    const socratesCardInfo = currentProposition.find(
      (info) => info.card.text === currentLang.keywords.socrates
    );
    const wiseCardText = currentLang.langCode === "ko" ? "지혜롭다" : "is wise";
    const wiseCardIndex = playerB_Hand.findIndex(
      (c) => c.text === wiseCardText
    );

    if (socratesCardInfo && wiseCardIndex > -1) {
      const [wiseCard] = playerB_Hand.splice(wiseCardIndex, 1);
      currentProposition = [socratesCardInfo, { card: wiseCard, player: "B" }];
      lastCardPlayer = "B";
      currentPlayer = "A";
    }
  } else if (step === 4) {
    currentProposition = [];
    playerA_Hand = fullDeck.filter(
      (c) =>
        c.type === (currentLang.langCode === "ko" ? "연산자" : "Operator") &&
        c.text !== currentLang.keywords.not
    );
    playerB_Hand = fullDeck.filter(
      (c) =>
        c.type === (currentLang.langCode === "ko" ? "서술어" : "Predicate") &&
        c.text !== (currentLang.langCode === "ko" ? "개이다" : "is a dog")
    );

    truePropositions = [];
    internalTruthSet = parsedAxioms.map((a) => a.proposition);

    const premises = [
      currentLang.langCode === "ko"
        ? "소크라테스는 개이다"
        : "Socrates is a dog",
      currentLang.langCode === "ko"
        ? "모든 개는 지혜롭다"
        : "Every dog is wise",
    ];
    premises.forEach((pText) => {
      const parsed = parsePropositionFromString(pText);
      if (parsed) {
        truePropositions.push({
          type: "user-made",
          text: pText,
          proposition: parsed,
          original_cards: [],
        });
        internalTruthSet.push(parsed);
      }
    });
    startThinkingTime();
  } else if (step === 5) {
    truePropositions = [];
    internalTruthSet = parsedAxioms.map((a) => a.proposition);
    currentPlayer = "A";
    isThinkingTime = false;
    document.getElementById("thinking-time-controls").style.display = "none";

    const premises = [
      currentLang.langCode === "ko"
        ? "소크라테스는 선하다"
        : "Socrates is good",
      currentLang.langCode === "ko"
        ? "(소크라테스는 선하다) 라면 (소크라테스는 승리한다)"
        : "(Socrates is good) then (Socrates wins)",
      currentLang.langCode === "ko"
        ? "플라톤은 지혜롭다 는 거짓이다"
        : "Plato is wise is false",
      currentLang.langCode === "ko"
        ? "(플라톤은 승리한다) 라면 (플라톤은 지혜롭다)"
        : "(Plato wins) then (Plato is wise)",
      currentLang.langCode === "ko"
        ? "(어떤 새는 물고기이다) 또는 (어떤 새는 새이다)"
        : "(Some bird is a fish) or (Some bird is a bird)",
      currentLang.langCode === "ko"
        ? "어떤 새는 물고기이다 는 거짓이다"
        : "Some bird is a fish is false",
      currentLang.langCode === "ko"
        ? "(플라톤은 개이다) 라면 (플라톤은 선하다)"
        : "(Plato is a dog) then (Plato is good)",
      currentLang.langCode === "ko"
        ? "(플라톤은 선하다) 라면 (플라톤은 승리한다)"
        : "(Plato is good) then (Plato wins)",
      currentLang.langCode === "ko"
        ? "(소크라테스는 지혜롭다) 그리고 (플라톤은 어리석다)"
        : "(Socrates is wise) and (Plato is foolish)",
      currentLang.langCode === "ko"
        ? "어떤 물고기는 선하다 는 거짓이다 는 거짓이다"
        : "Some fish is good is false is false",
      currentLang.langCode === "ko" ? "모든 새는 선하다" : "Every bird is good",
      currentLang.langCode === "ko" ? "플라톤은 새이다" : "Plato is a bird",
      currentLang.langCode === "ko" ? "모든 개는 선하다" : "Every dog is good",
    ];

    premises.forEach((pText) => {
      const parsed = parsePropositionFromString(pText);
      if (
        parsed &&
        !internalTruthSet.some((p) => arePropositionsEqual(p, parsed))
      ) {
        truePropositions.push({
          type: "user-made",
          text: pText,
          proposition: parsed,
          original_cards: [],
        });
        internalTruthSet.push(parsed);
      }
    });
  } else if (step === 6) {
    truePropositions = [];
    internalTruthSet = parsedAxioms.map((a) => a.proposition);
    currentPlayer = "A";
    isThinkingTime = false;
    document.getElementById("thinking-time-controls").style.display = "none";

    const premises =
      currentLang.langCode === "ko"
        ? [
            "플라톤은 선하다 또는 플라톤은 악하다",
            "(플라톤은 선하다) 라면 (플라톤은 지혜롭다)",
            "(플라톤은 악하다) 라면 (플라톤은 지혜롭다)",
          ]
        : [
            "Plato is good or Plato is evil",
            "(Plato is good) then (Plato is wise)",
            "(Plato is evil) then (Plato is wise)",
          ];

    premises.forEach((pText) => {
      const parsed = parsePropositionFromString(pText);
      if (
        parsed &&
        !internalTruthSet.some((p) => arePropositionsEqual(p, parsed))
      ) {
        truePropositions.push({
          type: "user-made",
          text: pText,
          proposition: parsed,
          original_cards: [],
        });
        internalTruthSet.push(parsed);
      }
    });
    openEurekaModalTutorial();
  } else if (step === 7) {
    truePropositions = [];
    internalTruthSet = parsedAxioms.map((a) => a.proposition);
    currentPlayer = "A";
    isThinkingTime = false;
    document.getElementById("thinking-time-controls").style.display = "none";
    const premises =
      currentLang.langCode === "ko"
        ? [
            "(소크라테스는 지혜롭다) 라면 (플라톤은 개이다)",
            "(플라톤은 개이다) 라면 (플라톤은 선하다)",
          ]
        : [
            "(Socrates is wise) then (Plato is a dog)",
            "(Plato is a dog) then (Plato is good)",
          ];

    premises.forEach((pText) => {
      const parsed = parsePropositionFromString(pText);
      if (parsed) {
        truePropositions.push({
          type: "user-made",
          text: propositionToNaturalText(parsed),
          proposition: parsed,
          original_cards: [],
        });
        internalTruthSet.push(parsed);
      }
    });
    openEurekaModalTutorial();
  } else if (step === 8) {
    truePropositions = [];
    internalTruthSet = parsedAxioms.map((a) => a.proposition);
    currentPlayer = "A";
    isThinkingTime = false;
    document.getElementById("thinking-time-controls").style.display = "none";
    const premises =
      currentLang.langCode === "ko"
        ? [
            "(소크라테스는 악하다 는 거짓이다) 라면 (플라톤은 지혜롭다)",
            "플라톤은 지혜롭다 는 거짓이다",
          ]
        : [
            "(Socrates is evil is false) then (Plato is wise)",
            "Plato is wise is false",
          ];

    premises.forEach((pText) => {
      const parsed = parsePropositionFromString(pText);
      if (
        parsed &&
        !internalTruthSet.some((p) => arePropositionsEqual(p, parsed))
      ) {
        truePropositions.push({
          type: "user-made",
          text: pText,
          proposition: parsed,
          original_cards: [],
        });
        internalTruthSet.push(parsed);
      }
    });
    openEurekaModalTutorial();
  } else if (step === 9) {
    // Stage 9 - Final Puzzle
    truePropositions = [];

    const socratesSubject = currentLang.keywords.socrates;
    const platoSubject = currentLang.keywords.plato;
    currentAxioms = generateAxioms(socratesSubject, platoSubject, currentLang);
    parsedAxioms = currentAxioms
      .map((str) => ({
        type: "axiom",
        proposition: parsePropositionFromString(str),
      }))
      .filter((a) => a.proposition);

    internalTruthSet = parsedAxioms.map((a) => a.proposition);
    currentPlayer = "A";
    isThinkingTime = false;
    document.getElementById("thinking-time-controls").style.display = "none";

    // 승리 조건 설정
    const socratesVC_Text =
      currentLang.langCode === "ko"
        ? "(소크라테스는 선하다 라면 소크라테스는 승리한다) 그리고 (소크라테스는 승리한다 라면 소크라테스는 선하다)"
        : "(Socrates is good then Socrates wins) and (Socrates wins then Socrates is good)";
    const socratesVC_Parsed = parsePropositionFromString(socratesVC_Text);
    if (socratesVC_Parsed) {
      truePropositions.push({
        type: "victory",
        owner: "A",
        text: propositionToPlainText(socratesVC_Parsed),
        proposition: socratesVC_Parsed,
        ultimate_target: {
          type: "atomic",
          subject: currentLang.keywords.socrates,
          predicate: currentLang.keywords.wins,
        },
        core_goal: {
          type: "atomic",
          subject: currentLang.keywords.socrates,
          predicate: currentLang.langCode === "ko" ? "선하다" : "is good",
        },
      });
      internalTruthSet.push(socratesVC_Parsed);
    }

    const platoVC_Text =
      currentLang.langCode === "ko"
        ? "(플라톤은 어리석다 라면 플라톤은 승리한다) 그리고 (플라톤은 승리한다 라면 플라톤은 어리석다)"
        : "(Plato is foolish then Plato wins) and (Plato wins then Plato is foolish)";
    const platoVC_Parsed = parsePropositionFromString(platoVC_Text);
    if (platoVC_Parsed) {
      truePropositions.push({
        type: "victory",
        owner: "B",
        text: propositionToPlainText(platoVC_Parsed),
        proposition: platoVC_Parsed,
        ultimate_target: {
          type: "atomic",
          subject: currentLang.keywords.plato,
          predicate: currentLang.keywords.wins,
        },
        core_goal: {
          type: "atomic",
          subject: currentLang.keywords.plato,
          predicate: currentLang.langCode === "ko" ? "어리석다" : "is foolish",
        },
      });
      internalTruthSet.push(platoVC_Parsed);
    }

    // 전제 명제 설정
    const premises =
      currentLang.langCode === "ko"
        ? [
            "소크라테스는 악하다 라면 모든 개는 어리석다",
            "어떤 개는 지혜롭다 라면 플라톤은 개이다",
            "모든 개는 지혜롭다",
          ]
        : [
            "(Socrates is evil) then (Every dog is foolish)",
            "(Some dog is wise) then (Plato is a dog)",
            "Every dog is wise",
          ];

    premises.forEach((pText) => {
      const parsed = parsePropositionFromString(pText);
      if (
        parsed &&
        !internalTruthSet.some((p) => arePropositionsEqual(p, parsed))
      ) {
        truePropositions.push({
          type: "user-made",
          text: pText,
          proposition: parsed,
          original_cards: [],
        });
        internalTruthSet.push(parsed);
      }
    });

    openEurekaModalTutorial();
  }

  render();
}

// 튜토리얼 '다음' 버튼 Enter 키 지원
window.addEventListener("keydown", (event) => {
  // 튜토리얼 모드가 아니거나, 게임오버 상태이면 아무것도 하지 않음
  if (!inTutorialMode || gameIsOver) return;

  const nextBtn = document.getElementById("tutorial-next-btn");

  // Enter 키를 눌렀고, '다음' 버튼이 화면에 보일 때 (hidden 클래스가 없을 때) 동작
  if (event.key === "Enter" && !nextBtn.classList.contains("hidden")) {
    // Enter 키의 기본 동작(예: 폼 제출)을 막아 다른 기능과의 충돌을 방지
    event.preventDefault();

    // '다음' 버튼에 클릭 이벤트를 발생시킴
    nextBtn.click();
  }
});
