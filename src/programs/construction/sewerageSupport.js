// src/programs/construction/sewerageSupport.js

export const sewerageSupport = {
  id: "sewerage-support",
  name: "水洗化改造資金融資あっせん事業",
  category: "construction",
  description: "公共下水道への接続に関する改造工事の支援制度",

  calculateSupport: (userInput) => {
    const result = {
      eligible: false,
      amount: 0,
      details: {
        loanAmount: 0, // 融資額
        repaymentPeriod: 0, // 返済期間（月数）
        monthlyPayment: 0, // 月々の返済額
      },
    };

    // 基本的な適格性チェック
    if (!userInput.isHomeowner && !userInput.hasOwnerConsent) {
      return result;
    }

    if (userInput.hasTaxDelay && !userInput.hasSpecialPermission) {
      return result;
    }

    // 融資額の計算（上限100万円）
    const totalCost = userInput.constructionCost || 0;
    result.details.loanAmount = Math.min(totalCost, 1000000);

    // 1万円未満切り捨て
    result.details.loanAmount =
      Math.floor(result.details.loanAmount / 10000) * 10000;

    if (result.details.loanAmount > 0) {
      // 返済期間は60ヶ月（5年）以内
      result.details.repaymentPeriod = 60;
      // 月々の返済額（単純な等分割）
      result.details.monthlyPayment = Math.ceil(
        result.details.loanAmount / result.details.repaymentPeriod
      );
    }

    result.amount = result.details.loanAmount;
    result.eligible = result.amount > 0;

    return result;
  },
};

export default sewerageSupport;
