import {
  Home,
  Briefcase,
  Heart,
  Baby,
  School,
  Building,
  Sprout,
} from "lucide-react";

export const questions = [
  {
    id: "basic_info",
    title: "まずはあなたの基本情報を教えてください",
    options: [
      {
        id: "single_young",
        label: "20代～30代の単身",
        icon: Heart,
        description: "新しい生活を始めたい方",
      },
      {
        id: "family_young",
        label: "子育て世代（未就学児）",
        icon: Baby,
        description: "子どもと一緒に暮らしたい方",
      },
      {
        id: "family_school",
        label: "子育て世代（学童期）",
        icon: School,
        description: "教育環境を重視する方",
      },
      {
        id: "middle_career",
        label: "40代～50代",
        icon: Briefcase,
        description: "新しいキャリアを探す方",
      },
    ],
  },

  {
    id: "user_age", // 新しく追加
    title: "あなたの年齢を教えてください",
    type: "number",
    placeholder: "年齢を入力してください（18歳～65歳）",
    min: 18,
    max: 65,
    options: [],
  },

  {
    id: "living_plan",
    title: "南富良野町での暮らし方を教えてください",
    options: [
      {
        id: "new_house",
        label: "家を建てたい",
        icon: Home,
        description: "土地探しから始める方",
      },
      {
        id: "rent", // 変更
        label: "賃貸で住みたい",
        icon: Home,
        description: "様子を見ながら検討したい方",
      },
    ],
  },

  // questions.js の work_style 部分の改善案
  {
    id: "work_style",
    title: "お仕事について教えてください",
    subtitle: "南富良野町での働き方をお選びください", // サブタイトルを追加
    options: [
      // 農業関連（緑系統のアイコン背景）
      {
        id: "agriculture_new",
        label: "新規就農したい",
        icon: Sprout,
        description: "就農支援制度があります",
        iconBackground: "bg-green-100", // アイコン背景色を個別設定
      },
      {
        id: "agriculture_successor",
        label: "農業を継ぐ",
        icon: Sprout,
        description: "後継者支援制度があります",
        iconBackground: "bg-green-100",
      },
      // ビジネス関連（青系統のアイコン背景）
      {
        id: "business",
        label: "起業・お店を開きたい",
        icon: Briefcase,
        description: "起業支援制度があります",
        iconBackground: "bg-blue-100",
      },
      {
        id: "business_product",
        label: "特産品開発をしたい",
        icon: Briefcase,
        description: "特産品開発支援制度があります",
        iconBackground: "bg-blue-100",
      },
      // 一般就労（グレー系統のアイコン背景）
      {
        id: "local_employment",
        label: "町内で就職したい",
        icon: Building,
        description: "転入や子育てなど、条件に応じた支援制度をご案内します",
        iconBackground: "bg-slate-100",
      },
      {
        id: "remote_work",
        label: "リモートワークで働く",
        icon: Home,
        description: "転入や住宅取得など、条件に応じた支援制度をご案内します",
        iconBackground: "bg-slate-100",
      },
    ],
  },

  {
    id: "scholarship_status",
    title: "奨学金の返還状況について教えてください",
    options: [
      {
        id: "has_scholarship",
        label: "奨学金の返還がある",
        icon: School,
        description: "返還支援制度があります",
      },
      {
        id: "no_scholarship",
        label: "奨学金の返還はない",
        icon: School,
        description: "返還支援制度は対象外です",
      },
    ],
  },
];
