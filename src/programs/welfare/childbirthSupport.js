// src/programs/welfare/childbirthSupport.js

export const childbirthSupport = {
  id: "childbirth-support",
  name: "出産・子育て応援事業",
  category: "welfare",
  description: "妊娠・出産に関する経済的支援を行う制度",

  calculateSupport: (userInput) => {
    const result = {
      eligible: false,
      amount: 0,
      details: {
        pregnancySupport: 0, // 妊娠時の支援金
        childbirthSupport: 0, // 出産時の支援金
      },
    };

    // 6ヶ月以上の居住要件チェック
    if (!userInput.hasResidedSixMonths) {
      return result;
    }

    // 妊娠届出時の支援金（10万円）
    if (userInput.isPregnant) {
      result.details.pregnancySupport = 100000;
    }

    // 出産時の支援金（10万円）
    if (userInput.hasGivenBirth) {
      result.details.childbirthSupport = 100000;
    }

    // 合計支援額の計算
    result.amount = Object.values(result.details).reduce((a, b) => a + b, 0);
    result.eligible = result.amount > 0;

    return result;
  },
};

export default childbirthSupport;
