import React, { useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";
import { ChevronLeft, Info } from "lucide-react";

const LifeTimelineResults = ({ results, onReset }) => {
  // 金額フォーマット関数を追加
  const formatMoney = (amount) => {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // ユーザー入力に基づいてライフステージデータを生成
  const generateLifeStageData = () => {
    const timeline = [];
    let cumulativeAmount = 0;
    // 年齢の取得と型変換を確実に行う
    const baseAge = results.userProfile?.user_age
      ? parseInt(results.userProfile.user_age)
      : 30;

    // デバッグ用（あとで消してOK）
    console.log("User age:", baseAge);

    // 支援プログラムを年齢順にソート
    const sortedPrograms = [...results.programs].sort((a, b) => {
      const timeA = a.timing || 0;
      const timeB = b.timing || 0;
      return timeA - timeB;
    });

    // 各支援金を時系列で追加
    sortedPrograms.forEach((program) => {
      cumulativeAmount += program.amount;
      timeline.push({
        age: baseAge + (program.timing || 0),
        stage: program.name,
        amount: program.amount,
        programs: [program.name],
        cumulative: cumulativeAmount,
      });
    });

    return timeline;
  };

  const timelineData = generateLifeStageData();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg border shadow-sm">
      <div className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">
            ライフステージ別 支援制度シミュレーション
          </h2>
          <p className="text-gray-600 mt-2">
            あなたの人生における支援制度の活用イメージ
          </p>
          <div className="mt-4">
            <p className="text-4xl font-bold text-blue-600">
              {formatMoney(results.totalAmount)}
            </p>
            <p className="text-sm text-gray-600">生涯支援総額（概算）</p>
          </div>
        </div>
        {/* 累積支援額の推移グラフ */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">支援額の推移</h3>
          <AreaChart
            width={800}
            height={300}
            data={timelineData}
            margin={{ top: 10, right: 30, left: 50, bottom: 0 }} // 左マージンを増やして金額表示のスペースを確保
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
              domain={["dataMin", "dataMax"]} // データの最小値から最大値までを表示
              tickCount={5} // 目盛りの数を調整
              label={{ value: "年齢", position: "bottom" }}
            />
            <YAxis
              name="支援額"
              tickFormatter={(value) => `${value / 10000}万円`} // 単位を万円で表示
              domain={[0, "dataMax + 1000000"]} // Y軸の表示範囲を設定
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
              type="stepAfter" // ステップ状のグラフに変更
              dataKey="cumulative"
              stroke="#3B82F6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorAmount)"
            />
          </AreaChart>
        </div>

        {/* ライフステージタイムライン */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">対象となる支援制度</h3>

          {/* カテゴリーごとのセクション */}
          {["industry", "housing", "living"].map((category) => {
            const categoryPrograms = results.programs.filter(
              (p) => p.category === category
            );
            if (categoryPrograms.length === 0) return null;

            return (
              <div key={category} className="mb-6">
                <h4 className="text-md font-semibold mb-3 px-4">
                  {category === "industry"
                    ? "産業支援"
                    : category === "housing"
                    ? "住宅支援"
                    : "暮らし支援"}
                </h4>
                <div className="space-y-3">
                  {categoryPrograms.map((program) => (
                    <div
                      key={program.id}
                      className="bg-white border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      {/* ヘッダー部分 */}
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-semibold text-lg">
                            {program.name}
                          </h5>
                          <p className="text-sm text-gray-600 mt-1">
                            {program.description}
                          </p>
                        </div>
                        {/* ここを以下のように変更 */}
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

                      {/* カテゴリータグ */}
                      <div className="mt-3 flex gap-2">
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            program.category === "industry"
                              ? "bg-green-100 text-green-800"
                              : program.category === "housing"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {program.subcategory === "agriculture"
                            ? "農業"
                            : program.subcategory === "business"
                            ? "商工業"
                            : program.subcategory === "construction"
                            ? "建設"
                            : program.subcategory === "rent"
                            ? "賃貸"
                            : program.subcategory === "moving"
                            ? "転入"
                            : program.subcategory === "education"
                            ? "教育"
                            : program.subcategory === "childcare"
                            ? "子育て"
                            : program.subcategory}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* 支援金合計 */}
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
          <p className="flex items-center">
            <Info className="w-4 h-4 mr-2" />
            このシミュレーション結果は一般的なケースを想定した概算です。
          </p>
          <p className="flex items-center">
            <Info className="w-4 h-4 mr-2" />
            実際の支援開始時期は、申請時期や審査状況により変動する場合があります。
          </p>
          <p className="flex items-center">
            <Info className="w-4 h-4 mr-2" />
            多くの支援制度は次年度からの開始となります。
          </p>
          <p className="flex items-center">
            <Info className="w-4 h-4 mr-2" />
            支援額や条件の詳細は、南富良野町役場の担当窓口にお問い合わせください。
          </p>
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
