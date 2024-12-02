// supportMapping.js
export const SUPPORT_CATEGORY_MAP = {
  // 完全な制度名をキーとして使用
  住宅建設等促進及び危険廃屋解体撤去促進事業: {
    path: "/housing-support",
    id: 1,
  },
  移住体験住宅整備事業: { path: "/housing-support", id: 2 },
  民間賃貸住宅家賃助成事業: { path: "/housing-support", id: 3 },
  転居費用助成事業: { path: "/housing-support", id: 4 },

  新規就農者等育成事業: { path: "/agriculture-support", id: 5 },
  農業後継者育成奨学金支給事業: { path: "/agriculture-support", id: 6 },
  農業振興融資事業: { path: "/agriculture-support", id: 7 },
  農業経営基盤強化利子助成金交付事業: { path: "/agriculture-support", id: 8 },
  林業担い手新規定着通年雇用支援事業: { path: "/agriculture-support", id: 9 },
  民有地流動促進事業: { path: "/agriculture-support", id: 10 },
  林業労働安全・機械化推進事業: { path: "/agriculture-support", id: 11 },

  商工業等起業支援事業: { path: "/commerce-support", id: 12 },
  特産品開発支援事業: { path: "/commerce-support", id: 13 },
  奨学金返還支援事業: { path: "/commerce-support", id: 14 },

  水洗化改造資金融資あっせん事業: { path: "/construction-support", id: 15 },
  水洗化等改造に関する補助金事業: { path: "/construction-support", id: 16 },
  合併処理浄化槽水洗化改造資金融資あっせん事業: {
    path: "/construction-support",
    id: 17,
  },
  合併処理浄化槽設置整備事業補助金交付事業: {
    path: "/construction-support",
    id: 18,
  },
  合併処理浄化槽設置整備事業促進補助金交付事業: {
    path: "/construction-support",
    id: 19,
  },

  出産・子育て応援事業: { path: "/welfare-support", id: 20 },
  すこやか子ども医療費助成事業: { path: "/welfare-support", id: 21 },
  多子世帯の保育料軽減支援事業補助金交付事業: {
    path: "/welfare-support",
    id: 22,
  },
  療育支援交通費助成事業: { path: "/welfare-support", id: 23 },
  インフルエンザワクチン接種費用負担軽減事業: {
    path: "/welfare-support",
    id: 24,
  },
  妊婦初回産科受診料助成: { path: "/welfare-support", id: 25 },
  妊産婦安心出産支援事業: { path: "/welfare-support", id: 26 },
  産後ケア事業: { path: "/welfare-support", id: 27 },
  おたふくかぜワクチン接種費用助成事業: { path: "/welfare-support", id: 28 },
  不妊治療費等助成事業: { path: "/welfare-support", id: 29 },

  保育所・小中学校給食費助成事業: { path: "/education-support", id: 30 },
  児童生徒遠距離通学費助成事業: { path: "/education-support", id: 31 },
  アスリート派遣補助金交付事業: { path: "/education-support", id: 32 },
  奨学資金貸付事業: { path: "/education-support", id: 33 },
  住民自主企画活動支援事業補助金交付事業: {
    path: "/education-support",
    id: 34,
  },
  町立高等学校生徒通学費助成金交付事業: { path: "/education-support", id: 35 },
  高等学校総合支援対策事業: { path: "/education-support", id: 36 },
  部活動大会参加費助成事業: { path: "/education-support", id: 37 },
  国際交流派遣事業: { path: "/education-support", id: 38 },
  ICT学習環境整備事業: { path: "/education-support", id: 39 },
};

export const getSupportPath = (programName) => {
  // 完全一致で検索
  if (SUPPORT_CATEGORY_MAP[programName]) {
    return SUPPORT_CATEGORY_MAP[programName];
  }

  // 制度名を正規化（スペースや特殊文字を統一）する関数
  const normalizeText = (text) => {
    return text.trim().toLowerCase().replace(/\s+/g, ' ');
  };

  // 正規化したプログラム名
  const normalizedProgramName = normalizeText(programName);

  // より厳密な部分一致検索
  for (const [key, value] of Object.entries(SUPPORT_CATEGORY_MAP)) {
    const normalizedKey = normalizeText(key);
    if (normalizedProgramName === normalizedKey || 
        normalizedProgramName.includes(normalizedKey) || 
        normalizedKey.includes(normalizedProgramName)) {
      return value;
    }
  }
  return null;
};
