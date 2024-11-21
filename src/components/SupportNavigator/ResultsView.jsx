import React from "react";
import { ChevronLeft } from "lucide-react";

const ResultsView = ({ results, onReset }) => {
  const formatMoney = (amount) => {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg border shadow-sm">
      <div className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">支援制度シミュレーション結果</h2>
          <p className="text-gray-600">
            あなたが利用できる可能性のある支援制度
          </p>
        </div>

        <div className="mb-8 text-center mt-6">
          <p className="text-sm text-gray-600">予想される支援総額</p>
          <p className="text-4xl font-bold text-blue-600">
            {formatMoney(results.totalAmount)}
          </p>
        </div>

        <div className="space-y-6">
          {results.programs.map((program) => (
            <div
              key={program.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{program.name}</h3>
                <span className="text-blue-600 font-semibold">
                  {formatMoney(program.amount)}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4 text-sm text-gray-500">
          <p>
            ※
            このシミュレーション結果は概算です。実際の支援額は諸条件により変動する場合があります。
          </p>
          <p>
            ※
            詳細な条件や正確な支援額については、南富良野町役場の担当窓口にお問い合わせください。
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

export default ResultsView;
