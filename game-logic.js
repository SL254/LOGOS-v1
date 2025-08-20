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
