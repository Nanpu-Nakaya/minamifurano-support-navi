// AgricultureDetail.jsx
import React, { useEffect } from "react";
import { TreePine } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const AgricultureDetail = () => {
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
      case "5":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-green-50">
                <div className="flex items-center gap-4">
                  <TreePine className="w-16 h-16 text-green-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    新規就農者等育成事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-lg">
                    農業・林業分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    補助金
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
                南富良野町において新たに農業を営もうとする者に対し必要な援助を行い、新規就農者等の育成確保を図るもの
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="space-y-4 text-xl text-gray-600 list-disc pl-5">
                <li>
                  (1)北海道就農計画認定制度実施要領に基づき、北海道知事から就農計画の認定を受けた者
                </li>
                <li>(2)実践的農業実習を６月以上２年以内の期間行うこと</li>
                <li>
                  (3)受入れ農業者又は農業指導機関は、新規就農予定者に対し、円滑な就農に必要な生産技術や経営管理能力等を修得させること
                </li>
                <li>
                  (4)新規就農者
                  <ul className="pl-8 mt-2 space-y-2">
                    <li>ア 年齢は、２０歳以上４６歳未満であること</li>
                    <li>
                      イ
                      経営面積が農地法(昭和２７年法律第２２９号)第３条第２項第５号の規定に基づく２ヘクタール以上を確保できる者。ただし、施設園芸を中心とする経営にあつてはこの限りでない
                    </li>
                    <li>
                      ウ
                      農用地の取得又は賃貸借は、農業委員会の許可を得たものであること
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-4 text-xl text-gray-600">
                    <li>
                      ⑴営農指導助成金
                      <ul className="pl-8 mt-2 space-y-2">
                        <li>新規就農希望者 日額3,000円 8ヵ月以内</li>
                        <li>新規就農予定者 日額4,000円 2年以内</li>
                      </ul>
                    </li>
                    <li>⑵家賃助成金 1／2以内 月額2万円 最長3年間</li>
                    <li>⑶農地取得補助金 取得価格の25％以内 100万円限度</li>
                    <li>
                      ⑷農地賃貸借補助金 年間賃貸料の1／2以内 50万円限度 最長5年
                    </li>
                    <li>
                      ⑸固定資産税補助金 固定資産税相当額 賦課年から最長5年間
                    </li>
                    <li>⑹就農奨励金 就農時から2年間 年額120万円</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">産業課 農政係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2178
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "6":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-green-50">
                <div className="flex items-center gap-4">
                  <TreePine className="w-16 h-16 text-green-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    農業後継者育成奨学金支給事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-lg">
                    農業・林業分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    奨学金
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
                農業後継者の育成対策として、高等学校、専修学校、短期大学又は大学へ進学するものに奨学金を支給し、優秀な農業後継者を育成するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="space-y-4 text-xl text-gray-600 list-disc pl-5">
                <li>
                  ⑴南富良野町で農業を営むものの子弟等で学校等へ進学するもの
                </li>
                <li>
                  ⑵将来南富良野町で農業経営の担い手になろうとするものであること
                </li>
                <li>
                  ⑶心身ともに健康で、将来農業経営者又は補助者としてふさわしい資質を有するもの
                </li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-4 text-xl text-gray-600">
                    <li>・奨学金 月額５万円 最長４年間</li>
                    <li>
                      ・富良野緑峰高等学校農業特別専攻科に進学する場合については、学校を卒業後引き続き支給を受ける場合にあっては、月額の1/2を、奨学金を受けずに進学する場合は同額を2年間支給。
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">産業課 農政係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2178
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "7":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-green-50">
                <div className="flex items-center gap-4">
                  <TreePine className="w-16 h-16 text-green-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    農業振興融資事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-lg">
                    農業・林業分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    融資制度
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
                南富良野町で農業を営む方や農業生産法人等が、農業経営の安定向上を図るため、必要な資金の貸付を行うもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600">
                南富良野町で農業を営む方や農業生産法人等
              </p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                南富良野町の農業振興に寄与すると認められる次の事業に対して、融資枠の範囲内で必要な資金を貸付する。（貸付種類別に限度額あり：１００万円～５，０００万円）
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4 text-xl text-gray-600">
                  <li>(１)優良家畜の導入事業</li>
                  <li>(２)農業経営近代化事業</li>
                  <li>(３)その他特に必要と認めた事業</li>
                </ul>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">産業課 農政係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2178
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "8":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-green-50">
                <div className="flex items-center gap-4">
                  <TreePine className="w-16 h-16 text-green-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    農業経営基盤強化利子助成金交付事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-lg">
                    農業・林業分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    利子助成
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* 制度概要 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                制度の概要
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                農業経営基盤強化促進法（昭和55年法律第65号）の農業経営改善計画等の認定を受けた農業者が借り入れる農業経営基盤強化資金の実質金利を引き下げるため、予算の範囲内で利子助成を行い、自主性と創意工夫を活かして作成された経営改善のための計画に即して効率的・安定的な経営体を目指す農業者の計画達成を支援するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600">
                農業経営基盤強化資金を借り入れた認定農業者で、町長が利子助成対象者と承認した農業者
              </p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    利子助成対象経費
                  </h3>
                  <p className="text-xl text-gray-600">
                    平成６年10月13日以降に借り入れた農業経営基盤強化資金の毎年の約定償還利額
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    助成金額の計算方法
                  </h3>
                  <ul className="space-y-4 text-lg text-gray-600">
                    <li>
                      <span className="font-semibold">計算期間：</span>
                      <br />
                      毎年12月１日（借入年は借入日）から翌年11月30日までの期間
                    </li>
                    <li>
                      <span className="font-semibold">
                        融資平均残高の算出：
                      </span>
                      <br />
                      計算期間中の毎日の最高残高（延滞金を除く。）の総額を、年間の日数（365日）で除して得た金額
                    </li>
                    <li>
                      <span className="font-semibold">助成金額：</span>
                      <br />
                      融資平均残高に、株式会社日本政策金融公庫の貸付利率から公益財団法人農林水産長期金融協会の利子助成率を減した残りの利率以内を乗じて得た金額
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">産業課 農政係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2178
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "9":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-green-50">
                <div className="flex items-center gap-4">
                  <TreePine className="w-16 h-16 text-green-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    林業担い手新規定着通年雇用支援事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-lg">
                    農業・林業分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    雇用支援
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
                新規に林業の担い手として参入する者を通年雇用する事業者に対し必要な支援を行なうことにより、新規林業担い手参入者の育成と定着を図るもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                補助対象となる新規作業員の要件
              </h2>
              <p className="text-gray-600 text-base mb-4">
                ※補助対象事業者要件は割愛
              </p>
              <ul className="space-y-4 text-xl text-gray-600">
                <li>
                  (１)
                  緑の雇用事業の３箇年の研修を修了した者又は３箇年の研修を修了見込みの者で、本町の林業事業体に就労している者
                </li>
                <li>
                  (２)
                  本町の住民基本台帳に記録されている者で、かつ、生活の本拠を本町に有すること
                </li>
                <li>(３) 町税を完納している者</li>
                <li>
                  (４)
                  当該年度に新規採用された者（採用時１年を経過していない者で、雇用契約の変更により、月給制等かつ通年雇用となった者を含む）で採用時又は契約変更時の年齢が45歳以下であること。
                </li>
                <li>(５) 月給制等により通年雇用されていること。</li>
                <li>
                  (６)
                  支給対象期間中、造林、素材生産等に従事する日数が、全就労日数の３分の２以上であること
                </li>
                <li>
                  (７)
                  中退共又は林退共若しくは独自の退職金制度に加入していること
                </li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                緑の雇用事業採用年度から起算して5年以内とし、最長2箇年とする。
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">補助金額</h3>
                <p className="text-xl text-gray-600">
                  年額108万円を限度（事業者に交付）
                </p>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">産業課 林政係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2178
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "10":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-green-50">
                <div className="flex items-center gap-4">
                  <TreePine className="w-16 h-16 text-green-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    民有林地流動促進事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-lg">
                    農業・林業分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    利子補給
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* 制度概要 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                制度の概要
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                南富良野町森林整備計画に基づき、町内民有林の木材生産のほか、国土の保全、水資源のかん養など自然環境保全等の公益的機能の最大限発揮に寄与するため、未整備森林の解消と森林所有者の経営意欲の向上、違法伐採の防止に資するため、民有林地の取得に必要な資金を借入れた場合、その者に係る利子補給をなし、適切な森林整備の推進を図るもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                下記の条件を満たすものを対象者とする。
              </p>
              <ul className="space-y-4 text-xl text-gray-600">
                <li>
                  （１）南富良野町森林組合員及び森林組合員になる予定である者
                </li>
                <li>（２）町内に居住し、町税を完納している者</li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                南富良野町森林組合の斡旋を受けて民有林地を取得した対象者が、取得に際して町長が指定する金融機関（旭川信用金庫富良野支店）から必要な資金を借り入れた場合、その利子補給を実施する。ただし、下記の条件を満たすものとする。
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">条件</h3>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li>
                    （１）貸付金の額が年１件につき５００万円以内のものであること
                  </li>
                  <li>（２）償還期限が５年以内のものであること。</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">補助金額</h3>
                <p className="text-xl text-gray-600">
                  利子の全額（ただし利子補給率は町長が指定する金融機関が定める年率とする）
                </p>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">産業課 林政係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2178
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "11":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-green-50">
                <div className="flex items-center gap-4">
                  <TreePine className="w-16 h-16 text-green-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    林業労働安全・機械化推進事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-lg">
                    農業・林業分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    設備補助
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
                林業従事者の安全かつ効率的な労働環境を整備しようとする事業者に対し必要な支援を行うことで、林業労働災害の抑制及び林業従事者の安全意識の向上並びに森林作業の軽労化・省力化を通じ、林業従事者の定着及び本町における森林整備の更なる促進を図ることを目的として補助金を交付するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600">
                林業を営み本町の住民基本台帳に登録されている個人及び町内に事務所及び事業所を有する法人
              </p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4 text-xl text-gray-600">
                  <li>（１）労働安全装備品等の購入</li>
                  <li>（２）林業機械等の購入</li>
                  <li>
                    （３）林業機械等の１２ヵ月以内のリース。ただし稼働日数の２分の１以上を本町内の森林で作業したものに限る
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4">補助金額</h3>
                <p className="text-xl text-gray-600">
                  事業に要する経費の２分の１以内。ただし、（２）の事業については上限額を１千万円とする。
                </p>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">産業課 林政係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2178
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

export default AgricultureDetail;
