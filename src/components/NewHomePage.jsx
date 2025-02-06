import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Building2,
  // ChevronDown,
  ChevronRight,
  GraduationCap,
  Heart,
  Home,
  Snowflake,
  Store,
  Sun,
  TreePine,
  Users,
} from "lucide-react"; // ChevronDownを追加
import { Card, CardContent } from "./ui/card";

const seasonImages = {
  spring: "/images/kanayama_sp.JPG",
  summer: "/images/kosui_su.JPG",
  autumn: "/images/kanayama_au.JPG",
  winter: "/images/ski_wi.png",
};

const NewHomePage = () => {
  const [currentSeason, setCurrentSeason] = useState("spring");
  const [prevSeason, setPrevSeason] = useState("spring");

  useEffect(() => {
    const seasons = ["spring", "summer", "autumn", "winter"];
    let index = 0;
    const interval = setInterval(() => {
      setPrevSeason(seasons[index]);
      index = (index + 1) % seasons.length;
      setCurrentSeason(seasons[index]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen pt-16 flex items-center justify-center overflow-hidden">
        {/* 前の画像（背面） */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${seasonImages[prevSeason]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* 現在の画像（アニメーション付き） */}
        <AnimatePresence>
          <motion.div
            key={currentSeason}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              backgroundImage: `url(${seasonImages[currentSeason]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* コンテンツ部分は変更なし */}
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            南富良野町で
            <br className="md:hidden" />
            新生活を始めよう
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            充実した支援制度であなたの夢を応援します
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-light/70 hover:bg-primary-light/70 text-secondary-light hover:text-primary-dark font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              支援ナビを確認する
            </Link>
          </motion.div>
        </div>

        {/* スクロールインジケーター */}
        {/* <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50" // z-20 を追加
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="text-white w-10 h-10" />
        </motion.div> */}
      </section>

      {/* ----------------------- 支援制度セクション ----------------------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            充実した支援制度
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            南富良野町では、さまざまな分野で手厚い支援を行っています
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 農業・林業分野 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary-dark rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center bg-green-50 rounded-xl h-full">
                <TreePine className="w-16 h-16 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">農業・林業分野</h3>
                <p className="text-gray-600 mb-4">
                  新規就農支援や林業担い手支援など、第一次産業を応援する制度が充実
                </p>
                <div className="text-sm text-gray-500 mt-auto">
                  支援制度数：7件
                </div>
              </CardContent>
            </Card>

            {/* 商工分野 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary-dark rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center bg-blue-50 rounded-xl h-full">
                <Store className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">商工分野</h3>
                <p className="text-gray-600 mb-4">
                  起業支援や特産品開発支援など、地域経済の活性化をサポート
                </p>
                <div className="text-sm text-gray-500 mt-auto">
                  支援制度数：3件
                </div>
              </CardContent>
            </Card>

            {/* 建設・水道分野 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary-dark rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center bg-gray-50 rounded-xl h-full">
                <Building2 className="w-16 h-16 text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">建設・水道分野</h3>
                <p className="text-gray-600 mb-4">
                  水洗化改造や合併処理浄化槽設置など、生活インフラを整備支援
                </p>
                <div className="text-sm text-gray-500 mt-auto">
                  支援制度数：5件
                </div>
              </CardContent>
            </Card>

            {/* 住宅分野 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary-dark rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center bg-yellow-50 rounded-xl h-full">
                <Home className="w-16 h-16 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">住宅分野</h3>
                <p className="text-gray-600 mb-4">
                  住宅建設促進や家賃助成など、住まいづくりを総合的に支援
                </p>
                <div className="text-sm text-gray-500 mt-auto">
                  支援制度数：4件
                </div>
              </CardContent>
            </Card>

            {/* 保健福祉分野 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary-dark rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center bg-pink-50 rounded-xl h-full">
                <Heart className="w-16 h-16 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">保健福祉分野</h3>
                <p className="text-gray-600 mb-4">
                  出産・子育て支援や医療費助成など、健康で安心な暮らしを支援
                </p>
                <div className="text-sm text-gray-500 mt-auto">
                  支援制度数：10件
                </div>
              </CardContent>
            </Card>

            {/* 教育分野 */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary-dark rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center bg-purple-50 rounded-xl h-full">
                <GraduationCap className="w-16 h-16 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">教育分野</h3>
                <p className="text-gray-600 mb-4">
                  給食費助成や奨学資金など、教育環境の充実を支援
                </p>
                <div className="text-sm text-gray-500 mt-auto">
                  支援制度数：10件
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* グリッドの後に追加 */}
      <div className="text-center mt-12">
        <Link
          to="/support-list"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-accent-light/70 hover:bg-primary-light/70 text-secondary-light hover:text-primary-dark font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <span>支援制度一覧を見る</span>
          <ChevronRight className="w-5 h-5" />
        </Link>
        <p className="mt-4 text-gray-600 text-sm mb-8">
          39の支援制度の詳しい内容をご確認いただけます
        </p>
      </div>

      {/* ----------------------- 町の魅力セクション ---------------------------- */}
      <section className="py-20 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
            南富良野町の魅力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <Card className="border-2 border-primary-dark/50 rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Sun className="w-16 h-16 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary-dark">
                  豊かな自然
                </h3>
                <p className="text-primary-dark">
                  四季折々の美しい景色と、新鮮な空気を楽しめます
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-dark/50 rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary-dark">
                  温かいコミュニティ
                </h3>
                <p className="text-primary-dark">
                  地域の絆が強く、互いに支え合う環境があります
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-dark/50 rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Briefcase className="w-16 h-16 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary-dark">
                  多様な仕事機会
                </h3>
                <p className="text-primary-dark">
                  農業や観光業など、様々な分野で活躍できます
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-dark/50 rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Snowflake className="w-16 h-16 text-blue-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary-dark">
                  冬のアクティビティ
                </h3>
                <p className="text-primary-dark">
                  スキーやスノーボードなど、冬を楽しめます
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ------------------------- 移住者の声セクション ------------------------- */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
            移住者の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 rounded-full h-15 w-15 mr-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-primary-dark">
                      田中さん家族
                    </h3>
                    <p className="text-sm text-primary-dark">2023年移住</p>
                  </div>
                </div>
                <p className="text-primary-dark mb-4">
                  "子育て支援が充実していて、安心して移住できました。自然豊かな環境で子どもたちものびのびと成長しています。町の方々も温かく、すぐに地域に溶け込むことができました。"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 rounded-full h-15 w-15 mr-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-primary-dark">
                      佐藤さん
                    </h3>
                    <p className="text-sm text-primary-dark">2022年移住</p>
                  </div>
                </div>
                <p className="text-primary-dark mb-4">
                  "起業支援を利用して、念願のカフェをオープンできました。町の特産品を使ったメニューが好評で、地域の方々にも喜んでいただいています。自然に囲まれた環境で仕事ができる幸せを日々感じています。"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* ---------------------- CTA セクション ------------------------------ */}
      {/* CTAセクション */}
      <section className="py-20 bg-accent-light/70 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            あなたの新生活、始めませんか？
          </h2>
          <p className="text-xl mb-12">
            南富良野町があなたの夢の実現をサポートします
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-light text-primary-dark hover:bg-secondary-light font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            移住相談を申し込む
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NewHomePage;
