// SupportNavigator.jsx
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { questions } from "../../data/questions";
import { calculateSupportPrograms } from "../../utils/supportCalculator";
import LifeTimelineResults from "./LifeTimelineResults";

const SupportNavigator = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [ageError, setAgeError] = useState(""); // 年齢入力のエラーメッセージ用state

  const handleSelect = (questionId, answerId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // 最後の質問が終わったら結果を計算
      const supportResults = calculateSupportPrograms({
        ...answers,
        [questionId]: answerId,
      });
      setResults(supportResults);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResults(null);
    setAgeError(""); // エラーメッセージもリセット
  };

  // 結果表示中の場合
  if (results) {
    return <LifeTimelineResults results={results} onReset={handleReset} />;
  }

  const currentQuestion = questions[step];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg border shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6 text-center">
        <h2 className="text-2xl font-bold">南富良野町 支援ナビ</h2>
        <p className="text-gray-600">あなたに合った支援制度をご案内します</p>
      </div>
      <div className="p-6 pt-0">
        <div className="mb-6">
          <div className="flex justify-between mb-6">
            {questions.map((_, index) => (
              <div key={index} className="flex items-center">
                {/* 丸い数字 - サイズを画面サイズに応じて変更 */}
                <div
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0
              ${index <= step ? "bg-blue-500 text-white" : "bg-gray-200"}
              text-sm md:text-base`}
                >
                  {index + 1}
                </div>
                {/* 接続線 - 最後の要素以外に表示 */}
                {index < questions.length - 1 && (
                  <div className="flex-1 mx-2">
                    <div
                      className={`h-1 ${
                        index < step ? "bg-blue-500" : "bg-gray-200"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-6">
            {Array.isArray(currentQuestion.title)
              ? currentQuestion.title.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < currentQuestion.title.length - 1 && <br />}
                  </React.Fragment>
                ))
              : currentQuestion.title}
          </h3>

          {currentQuestion.type === "number" ? (
            <div className="w-full max-w-xs mx-auto">
              <input
                type="text" // あえてtextのまま
                maxLength="2" // 最大長を2文字に制限
                placeholder={currentQuestion.placeholder}
                className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                onChange={(e) => {
                  const value = e.target.value;

                  // 1. 全角数字を半角数字に変換
                  const hankakuValue = value.replace(/[０-９]/g, (s) =>
                    String.fromCharCode(s.charCodeAt(0) - 0xfee0)
                  );

                  // 2. 半角数字以外の文字をすべて除去
                  const sanitizedValue = hankakuValue.replace(/[^0-9]/g, "");

                  // 3. 先頭の0を除去 (00018 -> 18)
                  const normalizedValue = sanitizedValue.replace(/^0+/, "");

                  // 4. エラーメッセージを初期化
                  setAgeError("");

                  // 5. 空文字でなければ、数値に変換して範囲チェック
                  if (normalizedValue !== "") {
                    const numAge = parseInt(normalizedValue, 10);
                    if (
                      numAge >= currentQuestion.min &&
                      numAge <= currentQuestion.max
                    ) {
                      handleSelect(currentQuestion.id, numAge);
                    } else {
                      // 範囲外の場合はエラーメッセージを設定
                      setAgeError(
                        `${currentQuestion.min}歳から${currentQuestion.max}歳の間で入力してください`
                      );
                    }
                  } else {
                    // 空の場合は処理をしない、またはエラーメッセージを設定(必要に応じて)
                  }
                }}
              />
              {ageError && (
                <p className="mt-2 text-red-500 text-sm">{ageError}</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(currentQuestion.id, option.id)}
                    className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors duration-150 flex items-start space-x-4"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-sm text-gray-500">
                        {option.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex justify-between mt-6">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center text-blue-500 hover:text-blue-600"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              前の質問に戻る
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportNavigator;
