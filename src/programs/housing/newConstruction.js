// 住宅新築支援制度の定義
export const newConstructionSupport = {
  id: "new-construction",
  name: "住宅新築支援",
  category: "housing",
  description: "住宅の新築を支援する制度です",

  // 適格性と支援額を計算する関数
  calculateSupport: (userInput) => {
    // 基本の返却オブジェクト
    const result = {
      eligible: false,
      amount: 0,
      details: {
        baseSupport: 0,
        movingBonus: 0,
        childrenBonus: 0,
      },
    };

    // 新築の場合のみ適用
    if (!userInput.constructionType || userInput.constructionType !== "new") {
      return result;
    }

    // 基本支援額の計算（建設費用の10%、上限300万円）
    const constructionCost = userInput.constructionCost || 0;
    result.details.baseSupport = Math.min(constructionCost * 0.1, 3000000);

    // 移住者加算（20万円）
    if (userInput.isMoving) {
      result.details.movingBonus = 200000;
    }

    // 子育て世帯加算（20万円）
    if (userInput.hasChildren) {
      result.details.childrenBonus = 200000;
    }

    // 合計額の計算
    result.amount =
      result.details.baseSupport +
      result.details.movingBonus +
      result.details.childrenBonus;
    result.eligible = true;

    return result;
  },
};
