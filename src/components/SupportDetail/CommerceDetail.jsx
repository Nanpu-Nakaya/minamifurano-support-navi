// CommerceDetail.jsx
import React, { useEffect } from "react";
import { Store } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const CommerceDetail = () => {
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
      // CommerceDetail.jsx
      // 前略 - switch文のcase "12"の部分を以下のように更新

      case "12":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-blue-50">
                <div className="flex items-center gap-4">
                  <Store className="w-16 h-16 text-blue-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    商工業等起業支援事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-lg">
                    商工分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    起業支援
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
                町内で新たに起業しようとする者や既に事業を営んでいる者が新たな分野の事業を行おうとする場合（事業拡大）に対し、その起業や拡大に伴う経費の一部を支援するもの。
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
                      <span className="font-semibold">起業～</span>
                      本町において、新たに商工業等を営もうとする個人又は法人
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(2)</span>
                    <span>
                      <span className="font-semibold">事業拡大～</span>
                      既に事業を営む商工業者が日本標準産業分類の大分類で異なる事業を新たに行う者
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(3)</span>
                    <span>
                      事業者又はその事業所の代表となる者が町内に居住し、連続して３年以上の事業継続が見込まれること
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(4)</span>
                    <span>南富良野町商工会の会員となること</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(5)</span>
                    <span>町税等の滞納及び遅延がないこと</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>(6)</span>
                    <span>連帯保証人を設定していること</span>
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
                  <h3 className="text-xl font-semibold mb-4">対象経費</h3>
                  <ul className="space-y-3 text-xl text-gray-600">
                    <li>⑴ 営業施設の新築及び増築並びに購入に係る費用</li>
                    <li>⑵ 営業施設に必要な備品購入に係る費用</li>
                    <li>⑶ 営業施設と一体となる設備の導入費用</li>
                    <li>⑷ 事業に直接必要な車両及び備品購入費用</li>
                    <li>⑸ その他、町長が特に必要と認めたもの</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">助成金額</h3>
                  <div className="space-y-4 text-xl text-gray-600">
                    <p className="font-semibold">⑴各事業の助成率及び上限額</p>
                    <ul className="space-y-2 pl-4">
                      <li>
                        ア 起業～事業に要した費用の2分の1以内とし、200万円を限度
                      </li>
                      <li>
                        イ
                        事業拡大～事業に要した費用の3分の1以内とし、200万円を限度
                      </li>
                    </ul>
                    <p>⑵助成金の額は、1万円未満を切り捨てる。</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">備考</h3>
                  <ul className="space-y-3 text-lg text-gray-600">
                    <li>
                      • 助成金の交付は、起業、事業拡大ともに1事業者1回限りとする
                    </li>
                    <li>
                      •
                      経営権並びに前条各号に掲げる設備等について、他の者から継承しようとする場合は助成の対象外
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
                  <p className="text-xl font-semibold">企画課 商工観光係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2115
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      // 以下略

      // CommerceDetail.jsx
      // switch文のcase "13"の部分を以下のように更新

      case "13":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-blue-50">
                <div className="flex items-center gap-4">
                  <Store className="w-16 h-16 text-blue-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    特産品開発支援事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-lg">
                    商工分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    商品開発
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
                南富良野町の素材（農畜林産物等）を利用した商品を販売するための調査研究・製造・販路拡大等に要する経費の一部を支援するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-xl text-gray-600">
                  南富良野町に住民票を有する個人若しくは団体（事業者）
                </p>
              </div>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">対象経費</h3>
                  <ul className="space-y-6 text-xl text-gray-600">
                    <li>
                      <p className="font-semibold">
                        (1)特産品及びそのデザインの開発並びに改良に要する経費
                      </p>
                      <p className="pl-4 text-lg">
                        消耗品費、印刷製本費、通信運搬費、広告宣伝費、会議費、会場借上料
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold">
                        ⑵特産品の生産、流通及び販路開拓に関する調査に要する経費
                      </p>
                      <p className="pl-4 text-lg">
                        原材料費、機械器具及び工具購入費、コンサルタント料、成分分析及び品質検査にかかる費用等
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold">⑶販売に要する費用等</p>
                      <p className="pl-4 text-lg">
                        容器・ラベル・パッケージ作成費、チラシ・パンフレット作成に要する費用
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold">⑷販路拡大に要する費用</p>
                      <p className="pl-4 text-lg">
                        販路拡大のために要した旅費及び消耗品費等の事務費、広告宣伝費に要する費用
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold">
                        ⑸その他町長が特に必要と認める費用
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">助成金額</h3>
                  <p className="text-xl text-gray-600">
                    対象経費の総額の2分の1以内 上限額100万円（千円未満切捨て）
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">備考</h3>
                  <ul className="space-y-3 text-lg text-gray-600">
                    <li>• 1商品について1回まで、同一者2商品まで</li>
                    <li>
                      •
                      同一者が2商品目の助成を希望する場合は先の商品が市場等での販売実績後とする
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
                  <p className="text-xl font-semibold">企画課 商工観光係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2115
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      // CommerceDetail.jsx
      // switch文のcase "14"の部分を以下のように更新

      case "14":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-blue-50">
                <div className="flex items-center gap-4">
                  <Store className="w-16 h-16 text-blue-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    奨学金返還支援事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-lg">
                    商工分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    奨学金支援
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
                若年層の町内流入の促進と定着、町外流出の抑制を図り、奨学金返還金の一部を支援し経済的負担を軽減するもの。
              </p>
            </section>

            {/* 対象者要件 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者要件
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">
                    以下の全てに該当する方
                  </h3>
                  <ul className="space-y-3 text-xl text-gray-600 list-disc pl-5">
                    <li>令和６年４月１日以降、新たに町で働くこととなった方</li>
                    <li>町民の方</li>
                    <li>
                      大学等の卒業者で、且つ就労開始日における年齢が35歳未満である方
                    </li>
                    <li>町税等及び奨学金の償還に滞納がない方</li>
                    <li>奨学金の償還に対する他からの助成を受けていない方</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">
                    以下のいずれかに該当する方
                  </h3>
                  <ul className="space-y-3 text-xl text-gray-600 list-disc pl-5">
                    <li>町内事業所等に就業し、被雇用保険者である方</li>
                    <li>個人で事業を営む方、または事業専従者である方</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">
                    対象外となる方
                  </h3>
                  <ul className="space-y-3 text-xl text-gray-600 list-disc pl-5">
                    <li>国家公務員、地方公務員、事業所等の役員</li>
                    <li>
                      転勤など、将来にわたり町内で勤務しないことが見込まれる方
                    </li>
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
                <p className="text-xl text-gray-600">
                  奨学金返還に要する費用の一部を助成
                </p>
              </div>
            </section>

            {/* 助成内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                助成内容
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">助成金額と期間</h3>
                  <ul className="space-y-4 text-xl text-gray-600">
                    <li>20,000円／月 最大120か月間</li>
                    <li>
                      （地元南富良野高等学校卒業生は40,000円／月
                      最大60か月間との選択が可能）
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">支給方法</h3>
                  <p className="text-xl text-gray-600">
                    年度末に実績報告書を提出後、年1回の支給
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
                  <p className="text-xl font-semibold">企画課 企画振興係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2115
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

export default CommerceDetail;
