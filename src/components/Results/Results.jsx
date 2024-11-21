// src/components/Results/Results.jsx

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { categoryNames } from "../../programs";

const Results = ({ results }) => {
  if (!results) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-4">
        <p className="text-gray-500 text-center">
          支援額を計算するには、フォームを入力してください。
        </p>
      </div>
    );
  }

  // 金額のフォーマット関数
  const formatMoney = (amount) => {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // プログラムの種類に応じた結果表示を生成
  const renderProgramResult = () => {
    const { selectedCategory, selectedProgram } = results;
    const program = results.programDetails;

    switch (selectedCategory) {
      case "housing":
        return (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">支援金の内訳</h3>
            <div className="space-y-2">
              {program.details.baseSupport > 0 && (
                <div className="flex justify-between">
                  <span>基本支援額：</span>
                  <span className="font-medium">
                    {formatMoney(program.details.baseSupport)}
                  </span>
                </div>
              )}
              {program.details.movingBonus > 0 && (
                <div className="flex justify-between">
                  <span>移住加算：</span>
                  <span className="font-medium">
                    {formatMoney(program.details.movingBonus)}
                  </span>
                </div>
              )}
              {program.details.childrenBonus > 0 && (
                <div className="flex justify-between">
                  <span>子育て世帯加算：</span>
                  <span className="font-medium">
                    {formatMoney(program.details.childrenBonus)}
                  </span>
                </div>
              )}
            </div>
          </div>
        );

      case "agriculture":
        return (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">支援金の内訳</h3>
            <div className="space-y-2">
              {program.details.guidanceSupport > 0 && (
                <div className="flex justify-between">
                  <span>営農指導助成金：</span>
                  <span className="font-medium">
                    {formatMoney(program.details.guidanceSupport)}
                  </span>
                </div>
              )}
              {program.details.rentSupport > 0 && (
                <div className="flex justify-between">
                  <span>家賃助成金：</span>
                  <span className="font-medium">
                    {formatMoney(program.details.rentSupport)}
                  </span>
                </div>
              )}
              {program.details.farmingGrant > 0 && (
                <div className="flex justify-between">
                  <span>就農奨励金：</span>
                  <span className="font-medium">
                    {formatMoney(program.details.farmingGrant)}
                  </span>
                </div>
              )}
            </div>
          </div>
        );

      // 他のカテゴリーの結果表示も同様に実装
      default:
        return null;
    }
  };

  // グラフ用のデータを生成
  const getChartData = () => {
    const details = results.programDetails.details;
    return Object.entries(details)
      .filter(([_, value]) => value > 0)
      .map(([key, value]) => ({
        name: getDetailName(key),
        amount: value,
      }));
  };

  // 詳細項目の日本語名を取得
  const getDetailName = (key) => {
    const nameMapping = {
      baseSupport: "基本支援",
      movingBonus: "移住加算",
      childrenBonus: "子育て加算",
      guidanceSupport: "営農指導",
      rentSupport: "家賃助成",
      farmingGrant: "就農奨励",
      // 他の項目も追加
    };
    return nameMapping[key] || key;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        支援金シミュレーション結果
      </h2>

      {/* プログラム情報 */}
      <div className="mb-4 text-center">
        <p className="text-sm text-gray-600">
          {categoryNames[results.selectedCategory]} /{" "}
          {results.programDetails.name}
        </p>
      </div>

      {/* 合計金額表示 */}
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-600">予想される支援総額</p>
        <p className="text-3xl font-bold text-blue-600">
          {formatMoney(results.programDetails.amount)}
        </p>
      </div>

      {/* プログラム固有の結果表示 */}
      {renderProgramResult()}

      {/* グラフ表示 */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">支援金の構成</h3>
        <div className="w-full h-64">
          <BarChart
            width={800}
            height={300}
            data={getChartData()}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => formatMoney(value)} />
            <Legend />
            <Bar dataKey="amount" fill="#3B82F6" />
          </BarChart>
        </div>
      </div>

      {/* 注意事項 */}
      <div className="mt-8 text-sm text-gray-500">
        <p>
          ※
          このシミュレーション結果は概算です。実際の支援額は諸条件により変動する場合があります。
        </p>
        <p>
          ※
          詳細な条件や正確な支援額については、南富良野町役場の担当窓口にお問い合わせください。
        </p>
      </div>
    </div>
  );
};

export default Results;
