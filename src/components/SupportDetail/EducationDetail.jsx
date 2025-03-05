// EducationDetail.jsx
import React, { useEffect } from "react";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const EducationDetail = () => {
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
      case "30":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-purple-50">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    保育所・小中学校給食費助成事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-lg">
                    教育分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    給食費助成
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
                保育所：３歳以上の保育所入所児の保護者に対して、給食費を助成するもの。
                <br />
                小中学校：町内全児童生徒の保護者に対して、学校給食費助成金を交付するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="text-xl text-gray-600 list-disc pl-6 space-y-2">
                <li>
                  保育所：町内に住所を有する南富良野町立保育所に入所している児童の保護者
                  （児童に対して親権を行う者（未成年後見人、又は現に監護を行う者））
                </li>
                <li>
                  小中学校：南富良野町立小学校又は中学校に就学している児童生徒の保護者
                  （児童生徒に対して親権を行う者（未成年後見人、又は現に監護を行う者））
                </li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="text-xl text-gray-600 list-disc pl-6 space-y-2">
                  <li>
                    保育所：保育所入所当初に申請を受け、決定後に毎月の給食費に対して全額助成。
                  </li>
                  <li>
                    小中学校：毎月の給食費に対して全額助成（※一部国の補助制度等も適用）。
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold mb-4">補助金額</h3>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li>保育所：給食費の全額</li>
                  <li>小中学校：給食費の全額 ※一部国の助成制度等も適用</li>
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
                  <p className="text-xl font-semibold">教育委員会 学校教育係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2145
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "31":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-purple-50">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    児童生徒遠距離通学費助成事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-lg">
                    教育分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    通学費助成
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
                町立小中学校に通学する児童生徒の者で遠距離から通学する者に対して、予算の範囲内で通学費用を助成するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="text-xl text-gray-600 list-disc pl-6 space-y-2">
                <li>町立小中学校に通学する児童生徒</li>
                <li>遠距離通学者で自宅から学校までの通学距離が3km以上の者</li>
              </ul>
              <p className="text-lg bg-gray-50 p-4 rounded-lg mt-4">
                ※通学距離の測定は自宅から学校までの距離とし、スクールバス利用者はスクールバス停留所までの距離とする。
              </p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  通学費用の助成（片道100円×2（往復分）×25日×10か月）
                </p>
                <p className="text-lg font-semibold mt-4">助成額：50,000円</p>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">教育委員会 学校教育係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2145
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "32":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-purple-50">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    アスリート派遣補助金交付事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-lg">
                    教育分野
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
              <p className="text-gray-600 text-xl leading-relaxed">
                町内在住の小・中学生及び高等学校に在学している児童・生徒が各種スポーツの
                全道・全国・国際大会等に出場する際に、経費の一部を補助するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                南富良野町に住所を有するものであって、大会要領などの規程等に基づき当該大会等に
                参加する選手及び監督又はコーチ。
              </p>
              <h3 className="text-xl font-semibold text-primary-dark mb-2">
                交付対象大会等：
              </h3>
              <ul className="text-xl text-gray-600 list-disc pl-6 space-y-2">
                <li>
                  全道大会：大会予選（参加標準記録を満たした者）又はランキングにより
                  出場権を得て出場する大会
                </li>
                <li>全国大会：全道大会等で出場権を得て出場する大会</li>
                <li>
                  国際大会：北海道又は日本の選抜・指定強化選手として出場する大会
                </li>
                <li>
                  選手強化事業：北海道又は日本の選抜・指定強化選手として参加する
                  強化合宿等
                </li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">補助対象経費：</h3>
                <ul className="text-xl text-gray-600 list-disc pl-6 space-y-2">
                  <li>大会参加費</li>
                  <li>交通費</li>
                  <li>宿泊費</li>
                  <li>車両借上料</li>
                  <li>高速道路料金</li>
                  <li>駐車料金</li>
                  <li>旅行損害保険料 等</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold mb-4">補助率：</h3>
                <p className="text-xl text-gray-600">対象経費の10分の8以内</p>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">教育委員会 生涯学習係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2145
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "33":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-purple-50">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    奨学資金貸付事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-lg">
                    教育分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    貸付事業
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
                町内の優秀な生徒、学生で経済的理由により就学困難な者に対し、学資金を貸付けるもの。
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
                      町内の子弟であって、親権者若しくはこれに代るべき者が本町に住所を有する者であること
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(2)</span>
                    <span>
                      成績優秀、素行善良にして学校長の推選する者であること
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(3)</span>
                    <span>経済的理由により修学困難な者であること</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">学資金の貸付け</h3>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li className="flex items-start gap-3">
                    <span>(1)</span>
                    <span>高等学校生徒：在学期間中 月額 25,000円以内</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(2)</span>
                    <span>専門・専修学校生：在学期間中 月額 50,000円以内</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(3)</span>
                    <span>短期大学生：在学期間中 月額 50,000円以内</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(4)</span>
                    <span>大学生：在学期間中 月額 50,000円以内</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold mb-4">備考</h3>
                <p className="text-lg text-gray-600">
                  償還方法：5年以内の年賦償還、又は、一括償還（据置期間1年）
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
                  <p className="text-xl font-semibold">教育委員会 総務係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2145
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "34":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-purple-50">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    住民自主企画活動支援事業補助金交付事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-lg">
                    教育分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    補助金交付
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
                住民（個人・団体）が自ら講演会、ワークショップ、学習会、発表会、
                展示会、各種大会等を企画または参加し、さらには本町のPRに繋がる物品製作など、
                生涯学習の機会を通じて地域力向上に資する事業に対し、予算の範囲内において補助することで、
                今日的課題の解消及び個人・団体の活動の促進、向上を図ることを目的とします。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="space-y-4 text-xl text-gray-600">
                <li className="flex items-start gap-3">
                  <span>（1）</span>
                  <span>町内に居住する個人又は団体であること。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（2）</span>
                  <span>補助を受けなければ、事業の実施が困難であること。</span>
                </li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">対象となる事業</h3>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li className="flex items-start gap-3">
                    <span>（1）</span>
                    <span>
                      町民を対象とした生涯学習活動に関連する講演会、ワークショップ、学習会事業
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>（2）</span>
                    <span>地域力向上、文化振興に繋がる事業</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>（3）</span>
                    <span>町のPRに繋がる事業（物品製作も含む）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>（4）</span>
                    <span>その他教育長が適当と認める事業</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold mb-4">補助金額</h3>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li>
                    事業に係る講師謝礼金、交通費、宿泊費、事業消耗品、使用料を補助。
                  </li>
                  <li>補助金の上限額は１事業につき３０千円。</li>
                  <li>
                    但し、一般参加型の事業で５０人以上または地域振興に繋がることが十分に見込める事業を対象として
                    実施されるものについては、特別事業加算として２０千円を加算。
                  </li>
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
                  <p className="text-xl font-semibold">教育委員会 生涯学習係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2145
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "35":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-purple-50">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    町立高等学校生徒通学費助成金交付事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-lg">
                    教育分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    通学費助成
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
                町立高等学校に通学する生徒で交通機関を利用し通学する者に対して、予算の範囲内で通学費用を助成するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="space-y-4 text-xl text-gray-600">
                <li className="flex items-start gap-3">
                  <span>（1）</span>
                  <span>南富良野町立高等学校に通学する生徒</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（2）</span>
                  <span>交通機関利用通学者</span>
                </li>
              </ul>
              <div className="bg-gray-50 rounded-lg p-4 mt-4">
                <p className="font-semibold">利用する交通機関：</p>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li className="flex items-start gap-3">
                    <span>ア</span>
                    <span>北海道旅客鉄道株式会社の列車</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>イ</span>
                    <span>ふらのバス株式会社のバス</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>ウ</span>
                    <span>占冠村村営バス</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  北海道旅客鉄道株式会社の列車及びふらのバス株式会社のバス利用者並びに占冠村営バス利用者の定期券購入者にあって、定期運賃を基準とし、購入費の全額を助成。
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
                  <p className="text-xl font-semibold">教育委員会 高等学校</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2022
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "36":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-purple-50">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    高等学校総合支援対策事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-lg">
                    教育分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    総合支援
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
                南富良野町立高等学校の生徒確保及び保護者の経済的負担並びに特色ある教育活動を支援するもの。内容は以下のとおり。
              </p>
              <ul className="text-xl text-gray-600 list-disc pl-6 space-y-2 mt-4">
                <li className="flex items-start gap-3">
                  <span>（1）</span>
                  <span>教科書購入費補助事業</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（2）</span>
                  <span>制服等購入費補助事業</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（3）</span>
                  <span>介護職員初任者研修受講料助成事業</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（4）</span>
                  <span>各種資格取得検定料等助成事業</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（5）</span>
                  <span>下宿家賃等助成事業</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（6）</span>
                  <span>オープンキャンパス参加助成事業</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（7）</span>
                  <span>学校給食費助成事業</span>
                </li>
              </ul>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="text-xl text-gray-600 list-disc pl-6 space-y-2">
                <li className="flex items-start gap-3">
                  <span>（1）</span>
                  <span>南富良野高等学校に在籍する生徒</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（2）</span>
                  <span>
                    南富良野中学校を卒業し南富良野高等学校へ新入学する生徒
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（3）</span>
                  <span>介護職員初任者研修を受講する生徒</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（4）</span>
                  <span>
                    学校が定める検定に合格した生徒。ただし、初回受検に限り全生徒。また、学校が定める模擬試験を受検した生徒
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（5）</span>
                  <span>
                    遠方より通学が困難で、町内の下宿、アパート等から通学する生徒
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（6）</span>
                  <span>
                    大学、専門学校等のオープンキャンパスに参加する生徒
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span>（7）</span>
                  <span>学校給食を希望する生徒</span>
                </li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="text-xl text-gray-600 list-disc pl-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <span>（1）</span>
                    <span>
                      入学時及び進級時の教科書（準教科書を含む）購入費の全額を補助
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>（2）</span>
                    <span>
                      制服（基本一式）購入費及び指定ジャージ等購入費の全額を補助
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>（3）</span>
                    <span>介護職員初任者研修受講料の全額</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>（4）</span>
                    <span>学校が定める検定の受験料及び模擬試験受験料</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>（5）</span>
                    <span>下宿等の部屋代、食費等の一部を助成</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>（6）</span>
                    <span>
                      オープンキャンパス参加に要する交通費、宿泊費等を学校種に応じ助成（在学中1人2回まで）
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>（7）</span>
                    <span>給食費の半額を助成</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 補助の場合その額 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                補助の場合その額
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="text-xl text-gray-600 space-y-4">
                  <li className="flex items-start gap-3">
                    <span>(1)</span>
                    <span>
                      1～3年合計で約46,000円を補助（例：文系大学進学コース）
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(2)</span>
                    <span>約90,000円を補助</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(3)</span>
                    <span>受講費総額 約70,000円を助成</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(4)</span>
                    <span>
                      各種資格取得検定料
                      <br />
                      例）漢検2級、英検2級、数検2級 約18,800円
                      <br />
                      大学進学模擬受験料
                      <br />
                      例）ベネッセ総合学力テストを3年間で13回受検 約42,350円
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(5)</span>
                    <span>
                      部屋代等月額25,000円、食費等月額20,000円、合計45,000円を限度に助成
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(6)</span>
                    <span>
                      国公立大学は参加経費の80％以内、私立大学は60％以内、専門学校は50％以内
                      <br />
                      例）東京の国公立大学のオープンキャンパスに2泊で参加する費用、約113,000円に対し、約90,000円を助成
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(7)</span>
                    <span>給食1食あたり310円のうち半額の155円を助成</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 備考 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                備考
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4 text-xl text-gray-600">
                  <li className="flex items-start gap-3">
                    ・⑴～⑶は委任状の提出により納入業者へ直接の支払い
                  </li>
                  <li className="flex items-start gap-3">
                    ・⑸は下宿の最低限必要な家電製品、家具等を貸与、Wi-Fi環境も完備
                  </li>
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
                  <p className="text-xl font-semibold">教育委員会 高等学校</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2022
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "37":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-purple-50">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    部活動大会参加費助成事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-lg">
                    教育分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    大会参加費助成
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
                南富良野町立高等学校の生徒確保及び保護者の経済的負担並びに特色ある教育活動を支援するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="text-xl text-gray-600 list-disc pl-6 space-y-2">
                <li>部活動で全道大会、全国大会に参加する生徒。</li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  全道大会、全国大会参加等に係る費用を助成。
                </p>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問合せ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">教育委員会 高等学校</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2022
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "38":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-purple-50">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    国際交流派遣事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-lg">
                    教育分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    国際交流
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
                南富良野町立高等学校の生徒確保及び保護者の経済的負担並びに特色ある教育活動を支援するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600">
                国際交流派遣対象生徒（年2人～3人）。
              </p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <p className="text-xl text-gray-600">
                国際交流派遣（約10日間）に係る主要な費用を補助。
              </p>
            </section>

            {/* 補助の額 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                補助の額
              </h2>
              <p className="text-xl text-gray-600">1人約580,000円。</p>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">教育委員会 高等学校</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2022
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "39":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-purple-50">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-16 h-16 text-purple-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    ICT学習環境整備事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-lg">
                    教育分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    ICT支援
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
                南富良野町立高等学校の生徒確保及び保護者の経済的負担並びに特色ある教育活動を支援するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-gray-600 text-xl">南富良野高等学校全生徒</p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4 text-xl text-gray-600">
                  <li className="flex items-start gap-3">
                    <span>⑴</span>
                    <span>
                      在学中、学校・家庭で使用できるiPad（付属品含む）を1人に1台貸与
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>⑵</span>
                    <span>
                      e-ラーニング教材の利用料及び学習アプリケーションの利用料を全額負担
                    </span>
                  </li>
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
                  <p className="text-xl font-semibold">教育委員会 高等学校</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2022
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

  // 共通のラッパーはここで一度だけ使用
  return <div className="max-w-4xl mx-auto px-4">{renderContent()}</div>;
};

export default EducationDetail;
