// src/programs/agriculture/newFarming.js

export const newFarmingSupport = {
  id: "new-farming",
  name: "新規就農者等育成事業",
  category: "agriculture",
  description: "新規就農者への総合的な支援制度",

  calculateSupport: (userInput) => {
    const result = {
      eligible: false,
      amount: 0,
      details: {
        guidanceSupport: 0, // 営農指導助成金
        rentSupport: 0, // 家賃助成金
        landPurchaseSupport: 0, // 農地取得補助金
        landRentSupport: 0, // 農地賃貸借補助金
        taxSupport: 0, // 固定資産税補助金
        farmingGrant: 0, // 就農奨励金
      },
    };

    // 基本的な適格性チェック
    if (!userInput.age || userInput.age < 20 || userInput.age >= 46) {
      return result;
    }

    // 就農奨励金（2年間で240万円）
    result.details.farmingGrant = 1200000 * 2;

    // 家賃助成金（最大月2万円×36ヶ月）
    if (userInput.needsHousing) {
      result.details.rentSupport = 20000 * 36;
    }

    // 農地取得補助金（取得価格の25%、上限100万円）
    if (userInput.landPurchasePrice) {
      result.details.landPurchaseSupport = Math.min(
        userInput.landPurchasePrice * 0.25,
        1000000
      );
    }

    // 合計額の計算
    result.amount = Object.values(result.details).reduce((a, b) => a + b, 0);
    result.eligible = true;

    return result;
  },
};

export default newFarmingSupport;
