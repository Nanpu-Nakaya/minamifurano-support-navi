// supportCalculator.js
export const calculateSupportPrograms = (answers) => {
  const applicablePrograms = [];

  // supportCalculator.js の各支援プログラムにtimingを追加

  // 住宅関連支援 -------------------------------------------------------------
  if (answers.living_plan === "new_house") {
    applicablePrograms.push({
      id: "new_house_support",
      name: "住宅建設等促進及び危険廃屋解体撤去促進事業",
      amount: 3000000,
      description:
        "新築住宅建設に対する補助金（町内業者利用で最大300万円、うち100万円は商品券）",
      category: "housing",
      subcategory: "construction",
      duration: "建設時",
      timing: 0,
    });
  }

  if (answers.living_plan === "rent") {
    applicablePrograms.push({
      id: "rent_support",
      name: "民間賃貸住宅家賃助成事業",
      amount: 1500000,
      description: "賃貸住宅の家賃補助（最長5年間）",
      category: "housing",
      subcategory: "rent",
      duration: "5年間",
      timing: 0, // 移住直後から
    });
  }

  // 移住時すぐに受けられる支援
  if (answers.basic_info !== "none") {
    applicablePrograms.push({
      id: "moving_support",
      name: "転居費用助成事業",
      amount: 160000,
      description: "引っ越し費用の補助（道外からの場合最大額）",
      category: "living",
      subcategory: "moving",
      duration: "転入時",
      timing: 0, // 移住直後
    });
  }

  // 仕事関連支援 -------------------------------------------------------------
  switch (answers.work_style) {
    case "agriculture_new":
      applicablePrograms.push({
        id: "new_farmer_support",
        name: "新規就農者等育成事業",
        amount: 2400000,
        description: "新規就農者への就農奨励金（年額120万円、2年間）",
        category: "industry",
        subcategory: "agriculture",
        duration: "2年間",
        timing: 0,
      });
      break;

    case "agriculture_successor":
      applicablePrograms.push({
        id: "agriculture_successor_support",
        name: "農業後継者育成奨学金支給事業",
        amount: 2400000,
        description: "農業後継者への奨学金（月額5万円、最長4年間）",
        category: "industry",
        subcategory: "agriculture",
        duration: "4年間",
        timing: 0,
      });
      break;

    case "business":
      applicablePrograms.push({
        id: "business_support",
        name: "商工業等起業支援事業",
        amount: 2000000,
        description: "新規創業・事業拡大への支援金",
        category: "industry",
        subcategory: "business",
        duration: "創業時",
        timing: 0,
      });
      break;

    case "business_product":
      applicablePrograms.push({
        id: "product_development_support",
        name: "特産品開発支援事業",
        amount: 1000000,
        description: "地域資源を活用した特産品開発への支援金",
        category: "industry",
        subcategory: "business",
        duration: "開発時",
        timing: 0,
      });
      break;

    default:
      // デフォルトケース：何もしない
      break;
  }

  // 子育て支援 ---------------------------------------------------------------
  if (
    answers.basic_info === "family_young" ||
    answers.basic_info === "family_school"
  ) {
    // 全子育て世代向け支援
    applicablePrograms.push({
      id: "child_medical_support",
      name: "すこやか子ども医療費助成",
      amount: 0,
      description: "子どもの医療費を助成（食事療養費等を除く）",
      category: "living",
      subcategory: "medical",
      duration: "22歳到達後の最初の3月31日まで",
      timing: 0,
      isVariable: true,
      note: "※医療費の実費に応じて助成額が変動します",
    });

    applicablePrograms.push({
      id: "childcare_fee_support",
      name: "多子世帯の保育料軽減支援",
      amount: 0,
      description: "第2子以降の3歳未満児の保育料を全額無償化（所得制限あり）",
      category: "living",
      subcategory: "childcare",
      duration: "3歳になるまで",
      timing: 0,
      isVariable: true,
      note: "※保育料実費相当額が無償化されます",
    });

    applicablePrograms.push({
      id: "therapy_transport_support",
      name: "療育支援交通費助成",
      amount: 0,
      description:
        "児童の療育支援・通院・通園に伴う交通費の助成（所得制限あり）",
      category: "living",
      subcategory: "medical",
      duration: "18歳到達後の最初の3月31日まで",
      timing: 0,
      isVariable: true,
      note: "※通院・通園に要する交通費（バス料金相当）の2分の1を助成",
    });

    applicablePrograms.push({
      id: "flu_vaccine_support",
      name: "インフルエンザワクチン接種費用負担軽減事業",
      amount: 0,
      description: "18歳以下の子どものインフルエンザワクチン接種費用を助成",
      category: "living",
      subcategory: "medical",
      duration: "18歳到達後の最初の3月31日まで",
      timing: 0,
      isVariable: true,
      note: "※医療機関が定めた接種費用の実費を助成",
    });

    // 未就学児世帯（family_young）専用の支援
    if (answers.basic_info === "family_young") {
      applicablePrograms.push({
        id: "first_prenatal_visit_support",
        name: "妊婦初回産科受診料助成",
        amount: 0,
        description: "妊娠判定のための初回産科受診料を助成",
        category: "living",
        subcategory: "medical",
        duration: "初回受診時",
        timing: 0,
        isVariable: true,
        note: "※妊娠判定にかかる受診料を全額助成\n※交通費は基準額で助成",
      });

      applicablePrograms.push({
        id: "pregnancy_support",
        name: "妊産婦安心出産支援",
        amount: 0,
        description:
          "町外の産科医療機関への通院費用と出産準備の交通費・宿泊費を助成",
        category: "living",
        subcategory: "medical",
        duration: "妊娠期～産後",
        timing: 0,
        isVariable: true,
        note: "※健診の交通費：産前14回・産後2回まで\n※出産準備：交通費1回・宿泊費5泊まで（1泊5,000円）",
      });

      applicablePrograms.push({
        id: "postpartum_care_support",
        name: "産後ケア事業",
        amount: 0,
        description: "産後6ヶ月未満の母子を対象とした心身のケアと育児サポート",
        category: "living",
        subcategory: "childcare",
        duration: "産後6ヶ月まで",
        timing: 0,
        isVariable: true,
        note: "※富良野協会病院での日帰りまたは宿泊型ケア（最大7日間）\n※育児相談・授乳指導等のサービスを無料で利用可能",
      });

      applicablePrograms.push({
        id: "childbirth_support",
        name: "出産・子育て応援事業",
        amount: 200000,
        description: "妊娠・出産時の支援金",
        category: "living",
        subcategory: "childcare",
        duration: "出産時",
        timing: 0,
      });

      // おたふくかぜワクチン接種費用助成を追加
      applicablePrograms.push({
        id: "mumps_vaccine_support",
        name: "おたふくかぜワクチン接種費用助成",
        amount: 0,
        description:
          "1歳から就学前の子どものおたふくかぜワクチン接種費用を助成",
        category: "living",
        subcategory: "medical",
        duration: "1歳～就学前",
        timing: 0,
        isVariable: true,
        note: "※指定医療機関での接種費用を全額助成",
      });

      // 不妊治療費等助成を追加
      applicablePrograms.push({
        id: "fertility_treatment_support",
        name: "不妊治療費等助成",
        amount: 0,
        description: "不妊治療に要する費用と交通費の一部を助成",
        category: "living",
        subcategory: "medical",
        duration: "治療期間中",
        timing: 0,
        isVariable: true,
        note: "※保険適用外治療費の75%を助成（治療費）\n※通院交通費は距離に応じた基準額\n※夫婦ともに南富良野町に住民登録が必要",
      });
    }
  }

  // 教育関連の支援をまとめる --------------------------------------------------

  // 奨学金返還支援（既存）
  if (
    answers.basic_info !== "none" &&
    answers.scholarship_status === "has_scholarship"
  ) {
    applicablePrograms.push({
      id: "scholarship_support",
      name: "奨学金返還支援事業",
      amount: 2400000,
      description: "奨学金返還の補助（月額2万円、最長10年間）",
      category: "industry",
      subcategory: "education",
      duration: "10年間",
      timing: 0,
    });
  }

  // 子育て世代向けの教育支援
  if (
    answers.basic_info === "family_young" ||
    answers.basic_info === "family_school"
  ) {
    // 給食費助成
    applicablePrograms.push({
      id: "school_lunch_support",
      name: "保育所・小中学校給食費助成事業",
      amount: 0,
      description: "保育所（3歳以上）と小中学校の給食費を全額助成",
      category: "living",
      subcategory: "education",
      duration: "保育所（3歳以上）・小中学校在学中",
      timing: 0,
      isVariable: true,
      note: "※保育所・小中学校在学中の給食費を全額助成\n※町内の保育所・小中学校に通う児童生徒が対象",
    });

    // アスリート派遣補助
    applicablePrograms.push({
      id: "athlete_support",
      name: "アスリート派遣補助金交付事業",
      amount: 0,
      description: "全道・全国・国際大会等に出場する際の経費を補助",
      category: "living",
      subcategory: "education",
      duration: "小中高在学中",
      timing: 0,
      isVariable: true,
      note: "※対象経費の80%以内を補助\n※大会参加費、交通費、宿泊費等が対象\n※予選やランキングで出場権を得た大会が対象",
    });

    // 遠距離通学費助成
    applicablePrograms.push({
      id: "school_transport_support",
      name: "児童生徒遠距離通学費助成事業",
      amount: 0,
      description: "自宅から学校まで3km以上の遠距離通学者への通学費用助成",
      category: "living",
      subcategory: "education",
      duration: "小中学校在学中",
      timing: 0,
      isVariable: true,
      note: "※片道100円×往復×25日×10ヶ月で計算\n※スクールバス利用の場合は停留所までの距離で判定",
    });

    // 町立高校通学費助成を追加
    applicablePrograms.push({
      id: "high_school_transport_support",
      name: "町立高等学校生徒通学費助成金交付事業",
      amount: 0,
      description:
        "町立高校への通学に使用する公共交通機関の定期券購入費を全額助成",
      category: "living",
      subcategory: "education",
      duration: "町立高校在学中",
      timing: 0,
      isVariable: true,
      note: "※JR列車、ふらのバス、占冠村営バスの定期券購入費を全額助成\n※町立高等学校に通学する生徒が対象",
    });

    // 高校総合支援対策を追加
    applicablePrograms.push({
      id: "high_school_comprehensive_support",
      name: "高等学校総合支援対策事業",
      amount: 0,
      description:
        "町立高校生への総合的な支援（教科書、制服、検定料、給食費など）",
      category: "living",
      subcategory: "education",
      duration: "町立高校在学中",
      timing: 0,
      isVariable: true,
      note:
        "※以下の費用を助成します：\n" +
        "・教科書購入費：全額（約46,000円）\n" +
        "・制服等購入費：全額（約90,000円）\n" +
        "・介護職員初任者研修：全額（約70,000円）\n" +
        "・各種検定料：全額（例：英検、漢検等）\n" +
        "・下宿費用：月額最大45,000円\n" +
        "・オープンキャンパス参加費：最大80%\n" +
        "・給食費：半額助成",
    });

    // 高校部活動大会参加費助成を追加
    applicablePrograms.push({
      id: "high_school_club_activity_support",
      name: "部活動大会参加費助成事業",
      amount: 0,
      description: "全道大会・全国大会への参加費用を助成",
      category: "living",
      subcategory: "education",
      duration: "町立高校在学中",
      timing: 0,
      isVariable: true,
      note: "※全道大会・全国大会参加時の費用を助成\n※町立高等学校の部活動が対象",
    });

    // ICT学習環境整備支援を追加
    applicablePrograms.push({
      id: "high_school_ict_support",
      name: "ICT学習環境整備事業",
      amount: 0,
      description: "生徒1人1台のiPadと学習アプリ等を無償提供",
      category: "living",
      subcategory: "education",
      duration: "町立高校在学中",
      timing: 0,
      isVariable: true,
      note: "※iPadと付属品を無償貸与（家庭でも使用可）\n※e-ラーニング教材・学習アプリケーションの利用料を全額支援\n※デジタル教材を活用した学習環境を提供",
    });

    // 国際交流派遣事業を追加
    applicablePrograms.push({
      id: "high_school_international_exchange",
      name: "国際交流派遣事業",
      amount: 580000,
      description: "海外への国際交流派遣プログラム（約10日間）の費用を助成",
      category: "living",
      subcategory: "education",
      duration: "町立高校在学中",
      timing: 0,
      note: "※年間2～3名の派遣対象者を選考\n※渡航費用、滞在費等の主要な費用を補助\n※国際交流の貴重な機会を提供",
    });
  }

  // 総額計算 ----------------------------------------------------------------
  const totalAmount = applicablePrograms.reduce(
    (sum, program) => sum + program.amount,
    0
  );

  return {
    programs: applicablePrograms,
    totalAmount: totalAmount,
    userProfile: {
      basic_info: answers.basic_info,
      work_style: answers.work_style,
      living_plan: answers.living_plan,
      user_age: answers.user_age,
    },
  };
};
