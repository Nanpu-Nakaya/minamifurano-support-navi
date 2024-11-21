// src/programs/education/mealSupport.js

export const mealSupport = {
  id: "school-meal-support",
  name: "保育所・小中学校給食費助成事業",
  category: "education",
  description: "保育所及び小中学校の給食費を助成する制度",

  calculateSupport: (userInput) => {
    const result = {
      eligible: false,
      amount: 0,
      details: {
        nurseryMealSupport: 0, // 保育所給食費助成
        schoolMealSupport: 0, // 小中学校給食費助成
        monthlyAmount: 0, // 月額支援金
        annualAmount: 0, // 年間支援金
      },
    };

    // 基本的な適格性チェック（町内在住・対象施設在籍）
    if (!userInput.isResident) {
      return result;
    }

    // 月額給食費の計算（仮の金額を設定）
    const monthlyNurseryMeal = 6000; // 保育所の月額給食費
    const monthlySchoolMeal = 5000; // 小中学校の月額給食費

    // 保育所児童の給食費計算
    if (userInput.hasNurseryChild) {
      result.details.nurseryMealSupport = monthlyNurseryMeal;
    }

    // 小中学校児童・生徒の給食費計算
    if (userInput.hasSchoolChild) {
      result.details.schoolMealSupport = monthlySchoolMeal;
    }

    // 月額合計の計算
    result.details.monthlyAmount =
      result.details.nurseryMealSupport + result.details.schoolMealSupport;

    // 年間支援額の計算（12ヶ月分）
    result.details.annualAmount = result.details.monthlyAmount * 12;

    // 総支援額（年間）を設定
    result.amount = result.details.annualAmount;
    result.eligible = result.amount > 0;

    return result;
  },
};

export default mealSupport;
