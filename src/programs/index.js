// src/programs/index.js

// 基本的な支援プログラムの定義
const basicProgram = {
  // eslint-disable-next-line no-unused-vars
  calculateSupport: (userInput) => {
    return {
      amount: 1000000,
      eligible: true,
      details: {
        baseSupport: 1000000,
      },
    };
  },
};

// 住宅支援プログラム
export const housingPrograms = {
  newConstruction: {
    id: "new-construction",
    name: "住宅新築支援",
    description: "新築住宅建設に対する補助金制度",
    calculateSupport: (userInput) => {
      return {
        amount: 2000000,
        eligible: true,
        details: {
          baseSupport: 1500000,
          childrenBonus: userInput.hasChildren ? 500000 : 0,
        },
      };
    },
  },
  existingHouse: {
    id: "existing-house",
    name: "中古住宅購入支援",
    description: "中古住宅購入に対する補助金制度",
    calculateSupport: (userInput) => {
      return {
        amount: 1500000,
        eligible: true,
        details: {
          baseSupport: 1000000,
          renovationSupport: 500000,
        },
      };
    },
  },
  rental: {
    id: "rental",
    name: "賃貸住宅支援",
    description: "賃貸住宅入居に対する支援制度",
    calculateSupport: (userInput) => {
      return {
        amount: 360000,
        eligible: true,
        details: {
          monthlySupport: 30000,
          duration: "12ヶ月",
          totalSupport: 360000,
        },
      };
    },
  },
};

// 農業支援プログラム
export const agriculturePrograms = {
  newFarming: {
    id: "new-farming",
    name: "新規就農支援",
    description: "新規就農者への総合的な支援制度",
    calculateSupport: (userInput) => {
      return {
        amount: 3000000,
        eligible: true,
        details: {
          initialSupport: 1500000,
          equipmentSupport: 1000000,
          trainingSupport: 500000,
        },
      };
    },
  },
};

// 商工支援プログラム
export const businessPrograms = {
  startup: {
    id: "startup",
    name: "起業支援",
    description: "新規創業者への支援制度",
    calculateSupport: (userInput) => {
      return {
        amount: 2000000,
        eligible: true,
        details: {
          initialSupport: 1000000,
          rentSupport: 600000,
          equipmentSupport: 400000,
        },
      };
    },
  },
};

// 建設・水道支援プログラム
export const constructionPrograms = {
  waterworks: {
    id: "waterworks",
    name: "水道設備支援",
    description: "水道設備の整備・改修に対する支援",
    calculateSupport: (userInput) => {
      return {
        amount: 500000,
        eligible: true,
        details: {
          baseSupport: 500000,
        },
      };
    },
  },
};

// 教育支援プログラム
export const educationPrograms = {
  schoolSupport: {
    id: "school-support",
    name: "学校教育支援",
    description: "児童・生徒への教育支援制度",
    calculateSupport: (userInput) => {
      return {
        amount: 120000,
        eligible: true,
        details: {
          monthlySupport: 10000,
          duration: "12ヶ月",
          totalSupport: 120000,
        },
      };
    },
  },
};

// 福祉支援プログラム
export const welfarePrograms = {
  childcare: {
    id: "childcare",
    name: "子育て支援",
    description: "子育て世帯への支援制度",
    calculateSupport: (userInput) => {
      return {
        amount: 500000,
        eligible: true,
        details: {
          monthlySupport: 30000,
          duration: "12ヶ月",
          additionalSupport: 140000,
        },
      };
    },
  },
};

// すべての支援プログラムをカテゴリーごとにまとめたオブジェクト
export const allPrograms = {
  agriculture: agriculturePrograms,
  business: businessPrograms,
  construction: constructionPrograms,
  education: educationPrograms,
  housing: housingPrograms,
  welfare: welfarePrograms,
};

// カテゴリー名の日本語マッピング
export const categoryNames = {
  agriculture: "農業・林業",
  business: "商工",
  construction: "建設・水道",
  education: "教育",
  housing: "住宅",
  welfare: "保健福祉",
};

// すべてのプログラムを配列として取得する補助関数
export const getAllProgramsArray = () => {
  const programs = [];
  Object.keys(allPrograms).forEach((category) => {
    Object.keys(allPrograms[category]).forEach((programKey) => {
      programs.push({
        ...allPrograms[category][programKey],
        category,
        key: programKey,
      });
    });
  });
  return programs;
};

// 特定のカテゴリーのプログラムを取得する補助関数
export const getProgramsByCategory = (category) => {
  return allPrograms[category] || {};
};

// プログラムIDから特定のプログラムを取得する補助関数
export const getProgramById = (programId) => {
  for (const category of Object.keys(allPrograms)) {
    for (const program of Object.values(allPrograms[category])) {
      if (program.id === programId) {
        return { ...program, category };
      }
    }
  }
  return null;
};

export default allPrograms;
