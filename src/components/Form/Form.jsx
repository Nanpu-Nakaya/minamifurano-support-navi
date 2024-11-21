// src/components/Form/Form.jsx

import React, { useState } from "react";
import { categoryNames, allPrograms } from "../../programs";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    selectedCategory: "",
    selectedProgram: "",
    // 共通入力項目
    isResident: false, // 町内在住
    hasResidedSixMonths: false, // 6ヶ月以上の居住
    age: "", // 年齢
    hasTaxDelay: false, // 税金の滞納有無

    // 住宅関連
    constructionType: "", // 建設種類
    constructionCost: 0, // 建設費用

    // 農業関連
    needsHousing: false, // 住宅必要性
    landPurchasePrice: 0, // 農地取得価格

    // 事業関連
    businessType: "", // 起業・拡大の区分
    willJoinCommerce: false, // 商工会加入予定

    // 子育て・教育関連
    isPregnant: false, // 妊娠中
    hasGivenBirth: false, // 出産
    hasNurseryChild: false, // 保育所児童の有無
    hasSchoolChild: false, // 小中学生の有無
  });

  // カテゴリー選択時の処理
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFormData((prev) => ({
      ...prev,
      selectedCategory: category,
      selectedProgram: "",
    }));
  };

  // プログラム選択時の処理
  const handleProgramChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      selectedProgram: e.target.value,
    }));
  };

  // 入力値の変更処理
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // フォーム送信処理
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // 選択されたカテゴリーのプログラム一覧を取得
  const getPrograms = () => {
    if (!formData.selectedCategory) return [];
    return Object.entries(allPrograms[formData.selectedCategory] || {});
  };

  // 選択されたプログラムに応じた入力フィールドを表示
  const renderProgramFields = () => {
    const { selectedCategory, selectedProgram } = formData;

    if (!selectedCategory || !selectedProgram) return null;

    // カテゴリーに応じたフィールドを表示
    switch (selectedCategory) {
      case "housing":
        return (
          <>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                建設の種類
                <select
                  name="constructionType"
                  value={formData.constructionType}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="new">新築</option>
                  <option value="rebuild">建替え</option>
                  <option value="purchase">購入</option>
                </select>
              </label>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                建設費用（予定）
                <input
                  type="number"
                  name="constructionCost"
                  value={formData.constructionCost}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded"
                  min="0"
                  required
                />
              </label>
            </div>
          </>
        );

      case "agriculture":
        return (
          <>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                年齢
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded"
                  min="0"
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="needsHousing"
                  checked={formData.needsHousing}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-sm font-medium">住宅支援が必要</span>
              </label>
            </div>
          </>
        );

      // 他のカテゴリーのフィールドも同様に実装
      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow"
    >
      {/* カテゴリー選択 */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">
          支援カテゴリー
          <select
            name="selectedCategory"
            value={formData.selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-2 mt-1 border rounded"
            required
          >
            <option value="">選択してください</option>
            {Object.entries(categoryNames).map(([key, name]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* プログラム選択 */}
      {formData.selectedCategory && (
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            支援プログラム
            <select
              name="selectedProgram"
              value={formData.selectedProgram}
              onChange={handleProgramChange}
              className="w-full p-2 mt-1 border rounded"
              required
            >
              <option value="">選択してください</option>
              {getPrograms().map(([key, program]) => (
                <option key={key} value={key}>
                  {program.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {/* 共通フィールド */}
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="isResident"
            checked={formData.isResident}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-sm font-medium">町内在住</span>
        </label>
      </div>

      {/* プログラム固有のフィールド */}
      {renderProgramFields()}

      {/* 送信ボタン */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        シミュレーション実行
      </button>
    </form>
  );
};

export default Form;
