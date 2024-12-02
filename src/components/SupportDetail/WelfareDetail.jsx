import React from "react";
import { Heart } from "lucide-react"; // ピンクのアイコン
import { Card, CardContent } from "../ui/card";

const WelfareDetail = () => {
  // URLの#support-20などを取得して、どの支援制度を表示するか判断
  const hash = window.location.hash;
  const supportId = hash.replace("#support-", "");

  // 支援制度IDに応じて表示内容を切り替える
  const renderContent = () => {
    switch (supportId) {
      case "20":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-pink-50">
                <div className="flex items-center gap-4">
                  <Heart className="w-16 h-16 text-pink-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    出産・子育て応援事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg">
                    保健福祉分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    支援金
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
                妊娠・出産等に要する経済的負担の軽減を図り、安心して子どもを産みすこやかに育てることができる環境を整えるとともに、次代を担う子どもの誕生を祝福するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <div className="space-y-4 text-xl text-gray-600">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>妊娠届を提出した者</li>
                  <li>出産した者又は当該子を養育する者</li>
                </ol>
                <p className="text-lg bg-gray-50 p-4 rounded-lg mt-4">
                  ※①②とも届け出時点において６ヶ月以上引き続き支給対象者若しくは配偶者が本町の住民基本台帳に登録されている者
                </p>
              </div>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ol className="list-decimal pl-6 space-y-2 text-xl text-gray-600">
                  <li>妊娠届出につき１０万円</li>
                  <li>出産１人につき１０万円</li>
                </ol>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">
                    保健福祉課 すこやかこども室
                  </p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2211
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "21":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-pink-50">
                <div className="flex items-center gap-4">
                  <Heart className="w-16 h-16 text-pink-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    すこやか子ども医療費助成事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg">
                    保健福祉分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    医療費助成
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
                保護者に対して、子どもの医療費を助成するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600">
                医療保険各法の規定による被保険者若しくは被扶養者であり、かつ本町の区域内に住所を有する世帯に属する子ども（満22歳に達する日（誕生日の前日）以後の最初の３月31日までの者で、かつ義務教育修了後にあっては学校教育法（昭和22年法律第26号）に規定する高等学校及び大学等若しくは修学年限が１年以上の学校等に進学している者）。
              </p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  子どもにかかる医療費から、食事療養標準負担額及び付加給付される額を控除して得た額を保護者に対して助成。
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
                  <p className="text-xl font-semibold">保健福祉課 介護医療係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2211
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "22":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-pink-50">
                <div className="flex items-center gap-4">
                  <Heart className="w-16 h-16 text-pink-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    多子世帯の保育料軽減支援事業補助金交付事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg">
                    保健福祉分野
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
                保育所を利用する第２子以降の３歳未満児の世帯に対し保育料軽減支援として無償化するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600">
                該当児童が第２子以降の３歳未満児であり、市町村民税所得割合算額が１６９，０００円未満の世帯であること。
              </p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  該当児童の保育料の全額相当額を無償化。
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
                  <p className="text-xl font-semibold">
                    保健福祉課 すこやかこども室
                  </p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2211
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "23":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-pink-50">
                <div className="flex items-center gap-4">
                  <Heart className="w-16 h-16 text-pink-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    療育支援交通費助成事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg">
                    保健福祉分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    交通費助成
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
                児童の療育支援と通院・通園に伴う経済的負担の軽減をするもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600">
                本町の住民基本台帳に登録されている者で、１８歳到達後最初の３月３１日までの児童並びに通院・通園に同行する介護者であり、市町村民税が非課税世帯の者。
              </p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  通院・通園に要する交通費の２分の１を助成し、交通費の算定は、自宅の最寄り駅から通院する病院等の最寄駅までのバス料金となります。
                </p>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p className="text-lg">
                    ※車を利用した場合でもバス料金で算定。
                  </p>
                  <p className="text-lg">
                    ※小学校入学前の児童が通院・通園する場合は、介護者のみの助成となる。
                  </p>
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
                  <p className="text-xl font-semibold">
                    保健福祉課 すこやかこども室
                  </p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2211
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "24":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-pink-50">
                <div className="flex items-center gap-4">
                  <Heart className="w-16 h-16 text-pink-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    インフルエンザワクチン接種費用負担軽減事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg">
                    保健福祉分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    費用助成
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
                インフルエンザによる重症化の防止及び蔓延を防ぐとともに、高校生以下にあつては、保護者の予防接種にかかる経済的負担を軽減し、安心して子育てができる環境を提供することを目的とし助成するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600">
                満18歳に達する日以後の最初の３月31日までの間にある者
              </p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  助成の対象となる経費は、接種費として対象者又はその保護者が医療機関に支払う費用とし、助成の対象となる費用は医療機関が定めた額とする。
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
                  <p className="text-xl font-semibold">保健福祉課 保健指導係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2211
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "25":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-pink-50">
                <div className="flex items-center gap-4">
                  <Heart className="w-16 h-16 text-pink-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    妊婦初回産科受診料助成
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg">
                    保健福祉分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    受診料助成
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
                妊娠判定のために初めて産科医療機関を受診し妊娠が判明した方へ、受診料のうち妊娠判定にかかる項目について、全額助成するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <div className="space-y-4 text-xl text-gray-600">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    妊娠判定のために初めて産科医療機関を受診し、妊娠が判明した方。
                  </li>
                  <li>初回受診時に南富良野町に住民登録している方。</li>
                  <li>
                    以下に同意する方
                    <ul className="list-none pl-6 pt-2 space-y-2">
                      <li>
                        ア
                        所得の状況を把握するため、対象者世帯の課税状況を確認すること。
                      </li>
                      <li>
                        イ
                        医療機関と南富良野町が必要に応じて対象者に対する支援に必要な情報を共有すること。
                      </li>
                    </ul>
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
                  受診料は妊娠判定にかかる項目を全額助成。交通費は基準額を助成
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
                  <p className="text-xl font-semibold">保健福祉課 保健指導係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2211
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "26":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-pink-50">
                <div className="flex items-center gap-4">
                  <Heart className="w-16 h-16 text-pink-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    妊産婦安心出産支援事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg">
                    保健福祉分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    交通費・宿泊費助成
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
                妊婦健診、産婦健診で町外の産科医療機関等へ通院する際の交通費と出産準備（出産）で通院する際の交通費と宿泊費を助成するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <div className="space-y-6 text-gray-600">
                <ul className="text-xl list-disc pl-6 space-y-2">
                  <li>南富良野町に住民登録し、居住している方。</li>
                  <li>
                    住民登録のある自宅から産科医療機関等に通院し、妊婦一般健康診査、産婦健康診査、または出産した方。
                  </li>
                  <li>
                    南富良野町妊産婦支援プランに沿って、妊婦一般健康診査、産婦健康診査を受けている方。
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold mb-2">※以下の場合は対象外</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>妊産婦が里帰りした場合</li>
                    <li>入院中に各健康診査を受けた場合</li>
                    <li>救急車で搬送された場合</li>
                    <li>対象者及び配偶者が町税等滞納している場合</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4 text-xl text-gray-600">
                  <ul className="space-y-2">
                    <li>
                      <span className="font-semibold">宿泊費：</span>
                      宿泊施設（ホテル等）に宿泊した場合、１泊につき5,000円
                    </li>
                    <li>
                      <span className="font-semibold">交通費：</span>
                      通院に要した往復相当額（基準額）
                    </li>
                  </ul>
                  <div className="pt-4 space-y-2 text-lg">
                    <p>※健康診査の交通費は産前１４回、産後２回を限度</p>
                    <p>※出産準備の交通費は１回、宿泊費は５泊を限度とする。</p>
                  </div>
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
                  <p className="text-xl font-semibold">保健福祉課 保健指導係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2211
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "27":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-pink-50">
                <div className="flex items-center gap-4">
                  <Heart className="w-16 h-16 text-pink-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    産後ケア事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg">
                    保健福祉分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    無料サービス
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
                南富良野町産後ケア事業は、産後において家族等の支援が十分に受けられず、
                心身の不調や育児不安等を抱える母親とその子を対象に、母親の心身のケアや
                育児のサポート等を行うことにより、安心して育児ができるよう支援することを
                目的とするもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="text-xl text-gray-600 list-disc pl-6 space-y-2">
                <li>
                  南富良野町に住民登録がある産後6か月未満の赤ちゃんとそのお母さん
                </li>
                <p>※ご家族等から家事や育児等の支援が受けられない方</p>

                <p>
                  ※心身の不調または育児でお困りごとや心配なことがある方 など
                </p>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  指定医療機関（富良野協会病院）にて、産後のお母さんがゆっくり体を休めたり、
                  助産師による授乳指導や育児相談が受けられます。
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  ※日帰り型、宿泊型合わせて合計7日間利用可能。
                </p>
              </div>
            </section>

            {/* 支援費用 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                利用料金
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  利用料金は日帰り型・宿泊型両方とも無料。
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
                  <p className="text-xl font-semibold">保健福祉課 保健指導係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2211
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "28":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-pink-50">
                <div className="flex items-center gap-4">
                  <Heart className="w-16 h-16 text-pink-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    おたふくかぜワクチン接種費用助成事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg">
                    保健福祉分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    費用助成
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
                重症化の防止及び蔓延を防ぐとともに保護者の予防接種にかかる経済的負担を軽減し、
                安心して子育てができる環境を提供することを目的とし助成するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600">1歳から就学前のお子さん</p>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  指定医療機関で接種した接種費用を全額助成。
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
                  <p className="text-xl font-semibold">保健福祉課 保健指導係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2211
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "29":
        return (
          <>
            {/* タイトルカード */}
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-pink-50">
                <div className="flex items-center gap-4">
                  <Heart className="w-16 h-16 text-pink-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    不妊治療費等助成事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-lg">
                    保健福祉分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    費用助成
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
                不妊治療を受けている夫婦に対し、その治療に要する交通費および医療保険適用外の費用の一部を助成することにより、経済的負担の軽減を図ることを目的とする。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                ※以下のいずれにも該当する方
              </p>
              <ul className="text-xl text-gray-600 list-disc pl-6 space-y-2">
                <li>婚姻している夫婦</li>
                <li>医師から不妊症と診断されている方</li>
                <li>
                  治療期間および申請日に夫婦いずれもが南富良野町に住民登録を有し、かつ引き続き居住している。
                </li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="list-disc pl-6 space-y-2 text-xl text-gray-600">
                  <li>
                    <span className="font-semibold">治療費：</span>
                    保険適用外の治療に要した費用に係る本人負担額に4分の3を乗じた額（千円未満切り捨て）
                  </li>
                  <li>
                    <span className="font-semibold">交通費：</span>
                    自宅から医療機関までの片道距離に応じた交通費基準額
                  </li>
                </ul>
                <p className="text-lg text-gray-600 mt-4">
                  ※助成対象となる交通費は保険適用の不妊治療と保険適用外の先進医療を併用した治療に要する交通費
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
                  <p className="text-xl font-semibold">保健福祉課 保健指導係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2211
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

export default WelfareDetail;
