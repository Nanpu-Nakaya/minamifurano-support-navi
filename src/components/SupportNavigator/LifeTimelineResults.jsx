import React, { useState, useEffect, useRef } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";
import { ChevronLeft, Info } from "lucide-react";
import { getSupportPath } from "../../utils/supportMapping";

// 大カテゴリーの日本語変換関数
const getCategoryLabel = (category, subcategory) => {
  switch (category) {
    case "industry":
      return subcategory === "agriculture" || subcategory === "forestry"
        ? "農業・林業分野"
        : "商工分野";
    case "housing":
      return "住宅分野";
    case "living":
      if (subcategory === "construction" || subcategory === "water") {
        return "建設・水道分野";
      } else if (
        subcategory === "welfare" ||
        subcategory === "childcare" ||
        subcategory === "medical" ||
        subcategory === "moving" // 移動関連も適切なカテゴリーに分類
      ) {
        return "保健福祉分野"; // または別のカテゴリーに割り当て
      } else if (subcategory === "education") {
        return "教育分野";
      }
      return subcategory;
    default:
      return category;
  }
};

// プログラムを大カテゴリーごとにグループ化する関数を追加
const groupProgramsByMainCategory = (programs) => {
  const groupedPrograms = {
    "農業・林業分野": [],
    "商工分野": [],
    "建設・水道分野": [],
    "住宅分野": [],
    "保健福祉分野": [],
    "教育分野": [],
    "その他": [], // 分類されないものを捕捉するカテゴリー
  };

  programs.forEach((program) => {
    const category = getCategoryLabel(program.category, program.subcategory);
    if (groupedPrograms[category]) {
      groupedPrograms[category].push(program);
    } else {
      // カテゴリーに当てはまらない場合は「その他」に追加
      groupedPrograms["その他"].push(program);
    }
  });

  return groupedPrograms;
};

// カテゴリーに応じた背景色とテキスト色を取得する関数
const getCategoryStyle = (category) => {
  switch (category) {
    case "農業・林業分野":
      return "bg-green-100 text-green-800";
    case "商工分野":
      return "bg-blue-100 text-blue-800";
    case "建設・水道分野":
      return "bg-gray-100 text-gray-800";
    case "住宅分野":
      return "bg-yellow-100 text-yellow-800";
    case "保健福祉分野":
      return "bg-pink-100 text-pink-800";
    case "教育分野":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const LifeTimelineResults = ({ results, onReset }) => {
  // グラフのコンテナ幅を管理するstate
  const [containerWidth, setContainerWidth] = useState(0);
  // グラフコンテナへの参照
  const graphRef = useRef(null);

  // コンポーネントマウント時とリサイズ時に幅を更新
  useEffect(() => {
    const updateWidth = () => {
      if (graphRef.current) {
        setContainerWidth(graphRef.current.offsetWidth);
      }
    };

    // 初回実行
    updateWidth();

    // リサイズイベントのリスナーを追加
    window.addEventListener("resize", updateWidth);

    // クリーンアップ関数
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // 金額フォーマット関数
  const formatMoney = (amount) => {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // 支援制度カードクリック時の処理を追加
  const handleProgramClick = (program) => {
    const supportInfo = getSupportPath(program.name);
    if (supportInfo) {
      window.open(`${supportInfo.path}#support-${supportInfo.id}`, "_blank");
    }
  };

  // ライフステージデータを生成（グラフ部分）
  // "年間"や"ヶ月"といった表記ゆれにもある程度対応し、
  // たとえば「5年」「5年間」「5 年」「５年間（全角）」などをまとめて処理します。
  const generateLifeStageData = () => {
    const timeline = [];
    // ユーザー年齢が未設定の場合はデフォルトで30歳とする
    const baseAge = results.userProfile?.user_age
      ? parseInt(results.userProfile.user_age, 10)
      : 30;

    // 年齢ごとの支援金額を計算するためのマップ
    const yearlyAmounts = {};

    // まず各プログラムを処理し、年齢ごとの支援金額を計算
    results.programs.forEach((program) => {
      // program.timing（開始年齢のオフセット）があれば加算して開始年齢を算出
      const startAge = baseAge + (program.timing || 0);

      if (program.duration) {
        // 全角数字を含む可能性がある場合は半角に変換
        // （例：５年間 → 5年間 に置き換え）
        const normalizedDuration = program.duration.replace(/[０-９]/g, (s) =>
          String.fromCharCode(s.charCodeAt(0) - 65248)
        );

        // 「○年」「○年間」「○ 年」などにも対応できるように
        const yearMatch = normalizedDuration.match(/(\d+)\s*年/);
        // 「○ヶ月」「○ ヶ月」「○か月」などにも対応
        const monthMatch = normalizedDuration.match(/(\d+)\s*ヶ?月/);

        if (yearMatch) {
          // 「○年」にマッチした場合
          const years = parseInt(yearMatch[1], 10);

          // 複数年にわたる支援なら、各年の支給を均等割りする
          const yearlyAmount = program.amount / years;

          for (let i = 0; i < years; i++) {
            const age = startAge + i;
            yearlyAmounts[age] = (yearlyAmounts[age] || 0) + yearlyAmount;
          }
        } else if (monthMatch) {
          // 「○ヶ月」にマッチした場合
          const months = parseInt(monthMatch[1], 10);

          // 複数月にわたる支援を1年単位に換算（端数は切り上げ）
          const years = Math.ceil(months / 12);
          const yearlyAmount = program.amount / years;

          for (let i = 0; i < years; i++) {
            const age = startAge + i;
            yearlyAmounts[age] = (yearlyAmounts[age] || 0) + yearlyAmount;
          }
        } else {
          // "年間"や"ヶ月"に当てはまらない場合は一括支給扱いとする
          yearlyAmounts[startAge] =
            (yearlyAmounts[startAge] || 0) + program.amount;
        }
      } else {
        // duration（支給期間）が明記されていない場合は一括支給扱い
        yearlyAmounts[startAge] =
          (yearlyAmounts[startAge] || 0) + program.amount;
      }
    });

    // 年齢順にソートしてから累積金額を計算
    const ages = Object.keys(yearlyAmounts)
      .map(Number)
      .sort((a, b) => a - b);

    let cumulativeAmount = 0;
    ages.forEach((age) => {
      cumulativeAmount += yearlyAmounts[age];
      timeline.push({
        age: age,
        amount: yearlyAmounts[age],
        cumulative: cumulativeAmount
      });
    });
    
    return timeline;
  };

  const timelineData = generateLifeStageData();

  const groupedPrograms = groupProgramsByMainCategory(results.programs);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg border shadow-sm">
      <div className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">
            ライフステージ別<br></br>支援制度シミュレーション
          </h2>
          <p className="text-gray-600 mt-2">
            あなたの人生における支援制度の活用イメージ
          </p>
          <div className="mt-4">
            <p className="text-4xl font-bold text-blue-600">
              {formatMoney(results.totalAmount)}
            </p>
            <p className="text-sm text-gray-600">生涯支援総額（概算）</p>
            <p className="text-sm text-gray-600">
              ※条件により支援額が変動する場合があります
            </p>
          </div>
        </div>

        {/* グラフセクション - レスポンシブ対応 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">支援額の推移</h3>
          <div ref={graphRef} className="w-full overflow-x-auto">
            <div className="min-w-[320px]">
              <AreaChart
                width={containerWidth || 320}
                height={Math.min(containerWidth * 0.5 || 300, 300)}
                data={timelineData}
                margin={{
                  top: 10,
                  right: 20,
                  left: 50,
                  bottom: 20,
                }}
              >
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="age"
                  name="年齢"
                  type="number"
                  domain={["dataMin", "dataMax"]}
                  tickCount={Math.min(5, timelineData.length)}
                  label={{
                    value: "年齢",
                    position: "bottom",
                    offset: 10,
                  }}
                />
                <YAxis
                  name="支援額"
                  tickFormatter={(value) => `${value / 10000}万円`}
                  domain={[0, "dataMax + 1000000"]}
                  width={50}
                />
                <Tooltip
                  formatter={(value) => formatMoney(value)}
                  labelFormatter={(label) => `${label}歳`}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-2 border rounded shadow">
                          <p className="font-semibold">{`${label}歳時点`}</p>
                          <p className="text-blue-600">
                            {`累計支援額: ${formatMoney(payload[0].value)}`}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="cumulative"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorAmount)"
                />
              </AreaChart>
            </div>
          </div>
        </div>

        {/* 以下は変更なし - 支援制度一覧 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">対象となる支援制度</h3>

          {Object.entries(groupedPrograms).map(([category, programs]) => {
            if (programs.length === 0) return null;

            return (
              <div key={category} className="mb-6">
                <h4 className="text-md font-semibold mb-3 px-4">{category}</h4>
                <div className="space-y-3">
                  {programs.map((program) => (
                    <div
                      key={program.id}
                      onClick={() => handleProgramClick(program)}
                      className="bg-white border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer group relative"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-semibold text-lg">
                            {program.name}
                          </h5>
                          <p className="text-sm text-gray-600 mt-1">
                            {program.description}
                          </p>
                        </div>
                        <div className="text-right">
                          {program.isVariable ? (
                            <>
                              <span className="text-blue-600 font-bold text-xl">
                                実費支給
                              </span>
                              <p className="text-sm text-gray-500">
                                {program.duration}
                              </p>
                            </>
                          ) : (
                            <>
                              <span className="text-blue-600 font-bold text-xl">
                                {formatMoney(program.amount)}
                              </span>
                              {program.duration && (
                                <p className="text-sm text-gray-500">
                                  {program.duration}
                                </p>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${getCategoryStyle(
                            category
                          )}`}
                        >
                          {category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="bg-blue-50 rounded-lg p-4 mt-6">
            <div className="flex justify-between items-center">
              <span className="font-semibold">支援金合計</span>
              <span className="text-blue-600 font-bold text-2xl">
                {formatMoney(results.totalAmount)}
              </span>
            </div>
            {results.programs.some((p) => p.isVariable) && (
              <p className="text-sm text-gray-600 mt-2">
                ※上記金額に加えて、実費支給の支援制度もご利用いただけます
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 space-y-4 text-sm text-gray-500">
          {[
            "このシミュレーション結果は一般的なケースを想定した概算です。",
            "実際の支援開始時期は、申請時期や審査状況により変動する場合があります。",
            "多くの支援制度は次年度からの開始となります。",
            "支援額や条件の詳細は、南富良野町役場の担当窓口にお問い合わせください。",
          ].map((text, index) => (
            <p key={index} className="flex items-start sm:items-center">
              <Info className="w-[16px] h-[16px] min-w-[16px] mt-[2px] sm:mt-0 mr-2 flex-shrink-0" />
              <span>{text}</span>
            </p>
          ))}
        </div>

        <button
          onClick={onReset}
          className="mt-6 flex items-center text-blue-500 hover:text-blue-600"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          最初からやり直す
        </button>
      </div>
    </div>
  );
};

export default LifeTimelineResults;