// supportMapping.js
export const SUPPORT_PROGRAMS = [
  {
    id: 1,
    name: "住宅建設等促進及び危険廃屋解体撤去促進事業",
    path: "/housing-support",
  },
  {
    id: 2,
    name: "移住体験住宅整備事業",
    path: "/housing-support",
  },
  {
    id: 3,
    name: "民間賃貸住宅家賃助成事業",
    path: "/housing-support",
  },
  {
    id: 4,
    name: "転居費用助成事業",
    path: "/housing-support",
  },
  {
    id: 5,
    name: "新規就農者等育成事業",
    path: "/agriculture-support",
  },
  {
    id: 6,
    name: "農業後継者育成奨学金支給事業",
    path: "/agriculture-support",
  },
  {
    id: 7,
    name: "農業振興融資事業",
    path: "/agriculture-support",
  },
  {
    id: 8,
    name: "農業経営基盤強化利子助成金交付事業",
    path: "/agriculture-support",
  },
  {
    id: 9,
    name: "林業担い手新規定着通年雇用支援事業",
    path: "/agriculture-support",
  },
  {
    id: 10,
    name: "民有地流動促進事業",
    path: "/agriculture-support",
  },
  {
    id: 11,
    name: "林業労働安全・機械化推進事業",
    path: "/agriculture-support",
  },
  {
    id: 12,
    name: "商工業等起業支援事業",
    path: "/commerce-support",
  },
  {
    id: 13,
    name: "特産品開発支援事業",
    path: "/commerce-support",
  },
  {
    id: 14,
    name: "奨学金返還支援事業",
    path: "/commerce-support",
  },
  {
    id: 15,
    name: "水洗化改造資金融資あっせん事業",
    path: "/construction-support",
  },
  {
    id: 16,
    name: "水洗化等改造に関する補助金事業",
    path: "/construction-support",
  },
  {
    id: 17,
    name: "合併処理浄化槽水洗化改造資金融資あっせん事業",
    path: "/construction-support",
  },
  {
    id: 18,
    name: "合併処理浄化槽設置整備事業補助金交付事業",
    path: "/construction-support",
  },
  {
    id: 19,
    name: "合併処理浄化槽設置整備事業促進補助金交付事業",
    path: "/construction-support",
  },
  {
    id: 20,
    name: "出産・子育て応援事業",
    path: "/welfare-support",
  },
  {
    id: 21,
    name: "すこやか子ども医療費助成事業",
    path: "/welfare-support",
  },
  {
    id: 22,
    name: "多子世帯の保育料軽減支援事業補助金交付事業",
    path: "/welfare-support",
  },
  {
    id: 23,
    name: "療育支援交通費助成事業",
    path: "/welfare-support",
  },
  {
    id: 24,
    name: "インフルエンザワクチン接種費用負担軽減事業",
    path: "/welfare-support",
  },
  {
    id: 25,
    name: "妊婦初回産科受診料助成",
    path: "/welfare-support",
  },
  {
    id: 26,
    name: "妊産婦安心出産支援事業",
    path: "/welfare-support",
  },
  {
    id: 27,
    name: "産後ケア事業",
    path: "/welfare-support",
  },
  {
    id: 28,
    name: "おたふくかぜワクチン接種費用助成事業",
    path: "/welfare-support",
  },
  {
    id: 29,
    name: "不妊治療費等助成事業",
    path: "/welfare-support",
  },
  {
    id: 30,
    name: "保育所・小中学校給食費助成事業",
    path: "/education-support",
  },
  {
    id: 31,
    name: "児童生徒遠距離通学費助成事業",
    path: "/education-support",
  },
  {
    id: 32,
    name: "アスリート派遣補助金交付事業",
    path: "/education-support",
  },
  {
    id: 33,
    name: "奨学資金貸付事業",
    path: "/education-support",
  },
  {
    id: 34,
    name: "住民自主企画活動支援事業補助金交付事業",
    path: "/education-support",
  },
  {
    id: 35,
    name: "町立高等学校生徒通学費助成金交付事業",
    path: "/education-support",
  },
  {
    id: 36,
    name: "高等学校総合支援対策事業",
    path: "/education-support",
  },
  {
    id: 37,
    name: "部活動大会参加費助成事業",
    path: "/education-support",
  },
  {
    id: 38,
    name: "国際交流派遣事業",
    path: "/education-support",
  },
  {
    id: 39,
    name: "ICT学習環境整備事業",
    path: "/education-support",
  },
];

// 既存のマッピング情報を配列から生成
export const SUPPORT_CATEGORY_MAP = SUPPORT_PROGRAMS.reduce((acc, program) => {
  acc[program.name] = { path: program.path, id: program.id };
  return acc;
}, {});

export const getSupportPath = (programName) => {
  // 完全一致で検索
  if (SUPPORT_CATEGORY_MAP[programName]) {
    return SUPPORT_CATEGORY_MAP[programName];
  }

  // 正規化関数
  const normalizeText = (text) => {
    return text.trim().toLowerCase().replace(/\s+/g, " ");
  };

  const normalizedSearchName = normalizeText(programName);

  // 部分一致検索
  const found = SUPPORT_PROGRAMS.find((program) => {
    const normalizedProgramName = normalizeText(program.name);
    return (
      normalizedSearchName === normalizedProgramName ||
      normalizedProgramName.includes(normalizedSearchName) ||
      normalizedSearchName.includes(normalizedProgramName)
    );
  });

  return found ? { path: found.path, id: found.id } : null;
};
