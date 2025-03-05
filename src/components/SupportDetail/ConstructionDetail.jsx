// ConstructionDetail.jsx
import React, { useEffect } from "react";
import { Building2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const ConstructionDetail = () => {
  // コンポーネントがマウントされた時にページトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // URLのハッシュから支援制度IDを抽出
  const hash = window.location.hash;
  // "#/agriculture-support#support-5" のようなパターンにも対応
  const supportIdMatch = hash.match(/#support-(\d+)/);
  const supportId = supportIdMatch ? supportIdMatch[1] : "";

  // 支援制度IDに応じて表示内容を切り替える
  const renderContent = () => {
    switch (supportId) {
      case "15":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-gray-50">
                <div className="flex items-center gap-4">
                  <Building2 className="w-16 h-16 text-gray-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    水洗化改造資金融資あっせん事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-lg">
                    建設・水道分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    融資支援
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* 制度概要 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                制度の概要
              </h2>
              <p className="text-gray-600 text-xl">
                公共下水道処理区域内に建物を有する者の既設の便所等を水洗化に改造するため及び排水設備を設置するために要する資金について、水洗化の普及を図ることを目的に支援（貸付）するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4 text-xl text-gray-600">
                  <li className="flex items-start gap-3">
                    <span>(1)</span>
                    <span>
                      住宅の所有者又は、改造について所有者の同意を得た者であること
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(2)</span>
                    <span>確実な連帯保証人があること</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(3)</span>
                    <span>
                      融資を受けた資金の償還が確実にされると認められること
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(4)</span>
                    <span>
                      町税を完納していること。ただし、町長が特に認めたときは、この限りでない
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-xl text-gray-600">
                    便所を水洗式に改造して、公共下水道に接続するための工事及び汚水を公共下水道に流入させるために既設の排水管等を整備改造する工事の費用のうち、別途補助金を差し引いた額を、無利子で貸し付けるもの。（限度額１００万円、１万円未満端数切り捨て）
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">償還方法</h3>
                  <p className="text-xl text-gray-600">
                    交付のあった翌月から月賦払いで60ヵ月以内
                  </p>
                </div>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問合せ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">建設課 上下水道係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2179
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "16":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-gray-50">
                <div className="flex items-center gap-4">
                  <Building2 className="w-16 h-16 text-gray-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    水洗化等改造に関する補助金事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-lg">
                    建設・水道分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    改造補助
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* 制度概要 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                制度の概要
              </h2>
              <p className="text-gray-600 text-xl">
                指定される処理区域において、便所を水洗式に改造若しくは既設の排水設備を整備、改造しようとする方に対して、補助金を交付するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  指定される処理区域等に居住し、便所を水洗式に改造して、公共下水道に接続するための工事及び汚水を公共下水道に流入させるために既設の排水管等を整備改造する工事を行う、町税及び公共下水道受益者分担金を滞納していない方。
                </p>
              </div>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <p className="text-gray-600 text-xl mb-6">
                指定される処理区域等に居住する方に対して、便所を水洗式に改造して、公共下水道に接続するための工事及び汚水を公共下水道に流入させるために既設の排水管等を整備改造する工事を行う場合のその費用の1部を補助。
              </p>
            </section>

            {/* 補助金額 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                補助金額
              </h2>
              <div className="space-y-6">
                {/* 水洗化改造工事 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    (１) 水洗化改造工事に係る補助金
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    便所１基（大便器１個と小便器１個又は大小兼用便器１個）と併せて排水設備改造工事を行うものにつき、次に定める額
                  </p>
                  <ul className="space-y-4 text-xl text-gray-600">
                    <li className="flex flex-col gap-1">
                      <p className="font-semibold">
                        ア 処理開始の日から１年以内：
                      </p>
                      <p className="pl-4">• １基につき 90,000円</p>
                      <p className="pl-4 text-lg">
                        ただし、水洗化改造工事のみの場合 １基につき 60,000円
                      </p>
                    </li>
                    <li className="flex flex-col gap-1">
                      <p className="font-semibold">イ １年を超え２年以内：</p>
                      <p className="pl-4">• １基につき 60,000円</p>
                      <p className="pl-4 text-lg">
                        ただし、水洗化改造工事のみの場合 １基につき 40,000円
                      </p>
                    </li>
                    <li className="flex flex-col gap-1">
                      <p className="font-semibold">ウ ２年を超え３年以内：</p>
                      <p className="pl-4">• １基につき 40,000円</p>
                      <p className="pl-4 text-lg">
                        ただし、水洗化改造工事のみの場合 １基につき 20,000円
                      </p>
                    </li>
                    <li className="flex flex-col gap-1">
                      <p className="font-semibold">エ ３年を超えて：</p>
                      <p className="pl-4">• １戸につき 30,000円</p>
                      <p className="pl-4 text-lg">
                        ただし、水洗化改造工事のみの場合 １戸につき 10,000円
                      </p>
                    </li>
                    <li className="flex flex-col gap-1 mt-4">
                      <p className="font-semibold">オ 追加補助：</p>
                      <p className="pl-4">
                        • 便所２基以上は１基につき 20,000円を加算する。
                      </p>
                      <p className="pl-4 text-lg">
                        ただし、処理開始の日から３年以内の工事に限る。
                      </p>
                    </li>
                  </ul>
                </div>

                {/* 排水設備のみ工事 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    (２) 排水設備のみ工事に係る補助金
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">１戸１件として：</p>
                  <ul className="space-y-2 text-xl text-gray-600">
                    <li>
                      ア 処理開始の日から１年以内に工事を行つた者につき 30,000円
                    </li>
                    <li>
                      イ 処理開始の日から１年を超えて工事を行つた者 10,000円
                    </li>
                  </ul>
                </div>

                {/* 既設し尿浄化槽の廃止 */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    (３) 既設のし尿浄化槽を廃止し、排水設備工事に係る補助金の額
                  </h3>
                  <ul className="space-y-2 text-xl text-gray-600">
                    <li>
                      ア 処理開始の日から１年以内に工事を行つた者 １戸につき
                      50,000円
                    </li>
                    <li>
                      イ 処理開始の日から１年を超え２年以内に工事を行つた者
                      １戸につき 40,000円
                    </li>
                    <li>
                      ウ 処理開始の日から２年を超え３年以内に工事を行つた者
                      １戸につき 30,000円
                    </li>
                    <li>
                      エ 処理開始の日から３年を超えて工事を行つた者 １戸につき
                      20,000円
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問合せ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">建設課 上下水道係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2179
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "17":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-gray-50">
                <div className="flex items-center gap-4">
                  <Building2 className="w-16 h-16 text-gray-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    合併処理浄化槽水洗化改造資金融資あっせん事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-lg">
                    建設・水道分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    浄化槽融資
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* 制度概要 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                制度の概要
              </h2>
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <p className="text-lg text-yellow-800 font-semibold">
                  ※ この制度は公共下水道処理区域以外が対象です
                </p>
              </div>
              <p className="text-gray-600 text-xl leading-relaxed">
                公共下水道処理区域以外で、し尿及び生活雑排水による公共用水域の水質汚濁を防止し、生活環境の改善及び自然環境の保全並びに公衆衛生の向上に寄与するための浄化槽設置工事及び水洗便所改造工事並びに排水設備等改造工事を行うために必要とする資金について、融資のあっせんを行うもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4 text-xl text-gray-600">
                  <li className="flex items-start gap-3">
                    <span>(1)</span>
                    <span>
                      住宅の所有者又は、改造について所有者の同意を得た者であること
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(2)</span>
                    <span>確実な連帯保証人があること</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(3)</span>
                    <span>
                      融資を受けた資金の償還が確実にされると認められること
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(4)</span>
                    <span>
                      町税を完納していること。ただし、町長が特に認めたときは、この限りでない
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    対象工事と融資内容
                  </h3>
                  <p className="text-xl text-gray-600">
                    浄化槽設置工事、既設の便所を水洗式に改造するための工事、既設の排水設備等を改造して合併処理浄化槽に接続するための工事、合併処理浄化槽本体から放流先までの工事の費用のうち、別途補助金を差し引いた額を、無利子で貸し付け。
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">融資限度額</h3>
                  <p className="text-xl text-gray-600">
                    限度額１００万円、１万円未満端数切り捨て
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">償還方法</h3>
                  <p className="text-xl text-gray-600">
                    交付のあった翌月から月賦払いで60ヵ月以内
                  </p>
                </div>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問合せ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">建設課 環境衛生係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2179
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "18":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-gray-50">
                <div className="flex items-center gap-4">
                  <Building2 className="w-16 h-16 text-gray-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    合併処理浄化槽設置整備事業補助金交付事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-lg">
                    建設・水道分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    浄化槽設置補助
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* 制度概要 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                制度の概要
              </h2>
              <p className="text-gray-600 text-xl">
                合併処理浄化槽を設置しようとする方に対して補助金を交付するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象条件
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4 text-xl text-gray-600">
                  <li className="flex items-start gap-3">
                    <span>(１)</span>
                    <span>
                      補助対象区域内において、専用住宅等から排出されるし尿及び家庭用生活雑排水を処理するために設置する浄化槽であること
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(２)</span>
                    <span>
                      浄化槽法第13条に基づく認可を受けた浄化槽であること
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(３)</span>
                    <span>
                      その他町長が目的を達成するための条件を具備し、特に必要と認める者
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 補助金額 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                補助金額
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                合併処理浄化槽の設置に要する費用のうち次に定める額。
                <br />※ 下記の額に満たない場合はその額を限度額とする
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* 5-7人槽 */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">
                      小規模向け
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>5人槽</span>
                        <span className="font-semibold">853,000円</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>6人槽</span>
                        <span className="font-semibold">1,036,000円</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>7人槽</span>
                        <span className="font-semibold">1,036,000円</span>
                      </li>
                    </ul>
                  </div>

                  {/* 8-10人槽 */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">
                      中規模向け
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>8人槽</span>
                        <span className="font-semibold">1,443,000円</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>9人槽</span>
                        <span className="font-semibold">1,443,000円</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>10人槽</span>
                        <span className="font-semibold">1,443,000円</span>
                      </li>
                    </ul>
                  </div>

                  {/* 11-15人槽 */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">
                      大規模向け
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>11-15人槽</span>
                        <span className="font-semibold">2,191,000円</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問合せ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">建設課 環境衛生係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2179
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "19":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-gray-50">
                <div className="flex items-center gap-4">
                  <Building2 className="w-16 h-16 text-gray-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    合併処理浄化槽設置整備事業促進補助金交付事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-lg">
                    建設・水道分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    浄化槽維持管理
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* 制度概要 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                制度の概要
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 text-xl">
                  既設の便所の水洗化工事及び排水設備を改造しようとする方及び合併処理浄化槽を管理している方に対し、補助金を交付し合併処理浄化槽の設置の普及促進を図るもの。
                </p>
                <p className="text-red-600 text-lg mt-4">
                  ※ 新築家屋は対象外です
                </p>
              </div>
            </section>

            {/* 対象者要件 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象要件
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  以下の全ての条件を満たし、町税等、町に対する納入金に滞納のない方
                </p>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li className="flex items-start gap-3">
                    <span>(1)</span>
                    <span>
                      既設の便所を水洗式に改造して合併処理浄化槽に接続するための工事及び既設の排水設備を改造して合併処理浄化槽に接続するための工事で南富良野町合併処理浄化槽設置整備事業補助金交付要綱で定める施工基準により施行されるもの
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(2)</span>
                    <span>
                      浄化槽法に定める維持管理(保守点検）、清掃を委託契約し並びに法定検査を文書により依頼し、これを定められた時に行う者
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(3)</span>
                    <span>
                      排水設備のうち合併処理浄化槽本体から放流先までの配管工事を行う者
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                補助金額
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">工事関連の補助</h3>
                  <ul className="space-y-4 text-xl text-gray-600">
                    <li className="flex flex-col gap-2">
                      <span className="font-semibold">
                        (1) 排水設備とトイレの水洗化等改造工事：
                      </span>
                      <div className="pl-4">
                        <p>• 便所1基につき90,000円</p>
                        <p className="text-lg">
                          ※ 2基以上は1基につき20,000円を加算
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col gap-2">
                      <span className="font-semibold">
                        (2) 既設単独浄化槽の廃止と合併処理浄化槽新設：
                      </span>
                      <p className="pl-4">• 50,000円</p>
                    </li>
                    <li className="flex flex-col gap-2">
                      <span className="font-semibold">
                        (5) 放流管工事（浄化槽設置を行った全ての方）：
                      </span>
                      <p className="pl-4">• 30,000円</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    維持管理費用の補助
                  </h3>
                  <ul className="space-y-4 text-xl text-gray-600">
                    <li className="flex flex-col gap-2">
                      <span className="font-semibold">(3) 設置後5年間：</span>
                      <p className="pl-4">
                        • 保守点検及び法定検査費用等の50％（上限30,000円）
                      </p>
                    </li>
                    <li className="flex flex-col gap-2">
                      <span className="font-semibold">
                        (4) 設置後6年目以降：
                      </span>
                      <p className="pl-4">
                        • 保守点検及び法定検査費用等の50％（上限25,000円）
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問合せ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">建設課 環境衛生係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2179
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      default:
        return <div>該当する支援制度が見つかりません</div>;
    }
  };

  return <div className="max-w-4xl mx-auto px-4">{renderContent()}</div>;
};

export default ConstructionDetail;
