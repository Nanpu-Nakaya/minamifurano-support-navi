// src/programs/business/startupSupport.js

export const startupSupport = {
  id: "business-startup",
  name: "商工業等起業支援事業",
  category: "business",
  description: "町内での新規起業や事業拡大を支援する制度",

  calculateSupport: (userInput) => {
    const result = {
      eligible: false,
      amount: 0,
      details: {
        baseSupport: 0, // 基本支援額
        constructionCosts: 0, // 施設関連費用
        equipmentCosts: 0, // 設備・備品費用
        vehicleCosts: 0, // 車両費用
      },
    };

    // 基本的な適格性チェック
    if (
      !userInput.isResident ||
      !userInput.willJoinCommerce ||
      userInput.hasTaxDelay
    ) {
      return result;
    }

    // 事業タイプに基づく助成率の決定
    const subsidyRate = userInput.businessType === "startup" ? 0.5 : 0.333; // 起業:1/2, 拡大:1/3

    // 各費用の計算
    if (userInput.constructionCosts) {
      result.details.constructionCosts =
        userInput.constructionCosts * subsidyRate;
    }

    if (userInput.equipmentCosts) {
      result.details.equipmentCosts = userInput.equipmentCosts * subsidyRate;
    }

    if (userInput.vehicleCosts) {
      result.details.vehicleCosts = userInput.vehicleCosts * subsidyRate;
    }

    // 総支援額の計算（上限200万円）
    result.amount = Math.min(
      Object.values(result.details).reduce((a, b) => a + b, 0),
      2000000
    );

    // 1万円未満切り捨て
    result.amount = Math.floor(result.amount / 10000) * 10000;

    result.eligible = result.amount > 0;

    // 各詳細金額も1万円未満切り捨て処理
    Object.keys(result.details).forEach((key) => {
      result.details[key] = Math.floor(result.details[key] / 10000) * 10000;
    });

    return result;
  },
};

// インデックスファイル作成のため、default exportも追加
export default startupSupport;
