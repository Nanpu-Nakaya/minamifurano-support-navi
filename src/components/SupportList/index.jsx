import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TreePine,
  Store,
  Building2,
  Home,
  Heart,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

const SupportList = () => {
  // コンポーネントがマウントされた時にページトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const categories = [
    {
      id: "housing",
      title: "住宅分野",
      path: "/housing-support",
      icon: Home,
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      items: [
        { id: 1, title: "住宅建設等促進及び危険廃屋解体撤去促進事業" },
        { id: 2, title: "移住体験住宅整備事業" },
        { id: 3, title: "民間賃貸住宅家賃助成事業" },
        { id: 4, title: "転居費用助成事業" },
      ],
    },
    {
      id: "agriculture",
      title: "農業・林業分野",
      path: "/agriculture-support",
      icon: TreePine,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      items: [
        { id: 5, title: "新規就農者等育成事業" },
        { id: 6, title: "農業後継者育成奨学金支給事業" },
        { id: 7, title: "農業振興融資事業" },
        { id: 8, title: "農業経営基盤強化利子助成金交付事業" },
        { id: 9, title: "林業担い手新規定着通年雇用支援事業" },
        { id: 10, title: "民有地流動促進事業" },
        { id: 11, title: "林業労働安全・機械化推進事業" },
      ],
    },
    {
      id: "commerce",
      title: "商工分野",
      path: "/commerce-support",
      icon: Store,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        { id: 12, title: "商工業等起業支援事業" },
        { id: 13, title: "特産品開発支援事業" },
        { id: 14, title: "奨学金返還支援事業" },
      ],
    },
    {
      id: "construction",
      title: "建設・水道分野",
      path: "/construction-support",
      icon: Building2,
      iconColor: "text-gray-600",
      bgColor: "bg-gray-50",
      items: [
        { id: 15, title: "水洗化改造資金融資あっせん事業" },
        { id: 16, title: "水洗化等改造に関する補助金事業" },
        { id: 17, title: "合併処理浄化槽水洗化改造資金融資あっせん事業" },
        { id: 18, title: "合併処理浄化槽設置整備事業補助金交付事業" },
        { id: 19, title: "合併処理浄化槽設置整備事業促進補助金交付事業" },
      ],
    },
    {
      id: "welfare",
      title: "保健福祉分野",
      path: "/welfare-support",
      icon: Heart,
      iconColor: "text-pink-600",
      bgColor: "bg-pink-50",
      items: [
        { id: 20, title: "出産・子育て応援事業" },
        { id: 21, title: "すこやか子ども医療費助成事業" },
        { id: 22, title: "多子世帯の保育料軽減支援事業補助金交付事業" },
        { id: 23, title: "療育支援交通費助成事業" },
        { id: 24, title: "インフルエンザワクチン接種費用負担軽減事業" },
        { id: 25, title: "妊婦初回産科受診料助成" },
        { id: 26, title: "妊産婦安心出産支援事業" },
        { id: 27, title: "産後ケア事業" },
        { id: 28, title: "おたふくかぜワクチン接種費用助成事業" },
        { id: 29, title: "不妊治療費等助成事業" },
      ],
    },
    {
      id: "education",
      title: "教育分野",
      path: "/education-support",
      icon: GraduationCap,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      items: [
        { id: 30, title: "保育所・小中学校給食費助成事業" },
        { id: 31, title: "児童生徒遠距離通学費助成事業" },
        { id: 32, title: "アスリート派遣補助金交付事業" },
        { id: 33, title: "奨学資金貸付事業" },
        { id: 34, title: "住民自主企画活動支援事業補助金交付事業" },
        { id: 35, title: "町立高等学校生徒通学費助成金交付事業" },
        { id: 36, title: "高等学校総合支援対策事業" },
        { id: 37, title: "部活動大会参加費助成事業" },
        { id: 38, title: "国際交流派遣事業" },
        { id: 39, title: "ICT学習環境整備事業" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">支援制度一覧</h1>

        <div className="space-y-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${category.bgColor}`}>
                    <Icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                <div className="grid gap-4">
                  {category.items.map((item) => (
                    <Card
                      key={item.id}
                      className="hover:shadow-md transition-shadow duration-200 cursor-pointer"
                    >
                      <Link to={`${category.path}#support-${item.id}`}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <span>{item.title}</span>
                            <button
                              className="text-blue-600 hover:text-blue-800"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              詳細を見る
                            </button>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SupportList;