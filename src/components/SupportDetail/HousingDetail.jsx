// HousingDetail.jsx
import React from "react";
import { Home } from "lucide-react"; // アイコンを追加
import { Card, CardContent } from "../ui/card";

const HousingDetail = () => {
  // URLの#support-1 などを取得して、どの支援制度を表示するか判断
  const hash = window.location.hash;
  const supportId = hash.replace("#support-", "");

  // 支援制度IDに応じて表示内容を切り替える
  const renderContent = () => {
    switch (supportId) {
      case "1":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-yellow-50">
                <div className="flex items-center gap-4">
                  <Home className="w-16 h-16 text-yellow-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    住宅建設等促進及び危険廃屋解体撤去促進事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-lg">
                    住宅分野
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
                住宅等の建設を促進するとともに、町外からの移住を推進し、定住者の拡大を目的に、
                住宅の新築や賃貸共同住宅の建設及び景観及び住環境の向上を図るもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="space-y-4 text-xl text-gray-600 list-disc pl-5">
                <li>
                  <span className="font-semibold">
                    新築、購入、建替え、中古住宅購入：
                  </span>
                  町に住民登録のある者及び移住しようとする者
                </li>
                <li>
                  <span className="font-semibold">住宅リフォーム：</span>
                  町に住民登録のある者及び移住しようとするもので、自己の居住の用に供するため町内事業者を利用し実施する者
                </li>
                <li>
                  <span className="font-semibold">賃貸共同住宅：</span>
                  新築する個人又は法人
                </li>
                <li>
                  <span className="font-semibold">危険廃屋解体撤去：</span>
                  個人が所有する危険廃屋を町内事業者を利用して解体撤去をする者
                </li>
              </ul>
            </section>

            {/* 補助金額 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                補助金額
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    新築、購入、建替え、中古住宅購入の場合
                  </h3>
                  <ul className="space-y-4 text-xl text-gray-600">
                    <li>
                      新築費、購入費又は建替費の10％以内（うち30万円は商工会商品券）
                    </li>
                    <li className="pl-4">
                      ※新築の場合で町内事業者を利用する場合は300万円（うち100万円は商品券）
                    </li>
                    <li className="pl-4">
                      ※併せて土地購入した場合は、固定資産税評価額÷0.7×取得面積×50％又は取得額×50％のいずれか低い方を加算
                    </li>
                    <li className="pl-4">
                      ※町内に移住しようとする者は又は移住のため住民登録をした日から1年を経過していない者は20万円を加算（義務教育終了前の被扶養者と同居する場合は更に20万円（全額商品券））
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    住宅リフォームの場合
                  </h3>
                  <p className="text-xl text-gray-600">
                    対象事業費が30万円以上の場合で対象経費の50％以内とし、50万円を上限
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    賃貸共同住宅の場合
                  </h3>
                  <ul className="space-y-4 text-xl text-gray-600">
                    <li>1LDKで床面積が51㎡未満で1戸当たり60万円</li>
                    <li>2LDKで床面積が51㎡以上で1戸当たり80万円</li>
                    <li>3LDKで床面積が63㎡以上で1戸当たり100万円</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    危険廃屋解体撤去の場合
                  </h3>
                  <p className="text-xl text-gray-600">
                    建物の面積に、住宅の場合は1㎡当たり5,000円、住宅以外の場合は1㎡当たり3,000円を乗じたものと事業費実績額の50％以内で50万円を上限
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
                  <p className="text-xl font-semibold">建設課 建築係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2179
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "2":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-yellow-50">
                <div className="flex items-center gap-4">
                  <Home className="w-16 h-16 text-yellow-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    移住体験住宅整備事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-lg">
                    住宅分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    住宅貸付
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
                町内へ移住を希望する方へ向け、町内での居住・生活を体験してもらうため、家具家電付きの住宅を整備するもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="space-y-4 text-xl text-gray-600 list-disc pl-5">
                <li>（1）18歳以上の方</li>
                <li>（2）町外に住所を有する移住希望者</li>
                <li>（3）町内に両親がおり里帰りや旅行が目的ではない方 等</li>
                <li>（4）国家公務員、地方公務員でない方</li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <p className="text-xl text-gray-600">
                ソファ、テーブル、ベッドなど家具やテレビ、冷蔵庫、洗濯機などの家電を備え付けた住宅の貸付
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold mb-4">○貸付料</h3>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li>月額 40,000円（1か月に満たない場合は日割り算出）</li>
                  <li className="pl-4 text-lg">
                    ※電気代、上下水道料、インターネット回線使用料、NHK受信料含む
                  </li>
                  <li className="pl-4 text-lg">
                    ※11月～4月の間は暖房使用料600円／日は別途
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold mb-4">＜減免規定＞</h3>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li>※利用者に中学生以下の子どもがいる世帯 10分の4</li>
                  <li>
                    ※利用者にいずれかの者に30歳未満の婚姻関係にある者を含む場合10分の2
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold mb-4">○貸付期間</h3>
                <p className="text-xl text-gray-600">7日以上1年以内</p>
              </div>
            </section>

            {/* お問い合わせ */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                お問い合わせ先
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

      case "3":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-yellow-50">
                <div className="flex items-center gap-4">
                  <Home className="w-16 h-16 text-yellow-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    民間賃貸住宅家賃助成事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-lg">
                    住宅分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    家賃助成
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
                南富良野町に移住し民間賃貸住宅に居住した場合に家賃の一部を助成することで、町内で継続した居住を促すとともに、人手・担い手の確保をし地域経済の活性化を図るもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="space-y-4 text-xl text-gray-600 list-disc pl-5">
                <li>
                  （1）申請時において満40歳未満であり、令和６年４月１日以降新たに南富良野町に転入した方で、転勤等による一時的な居住によらず、今後継続して５年以上本町に居住する意思のある方
                </li>
                <li>
                  （2）入居者が民間賃貸住宅の賃貸借契約の名義人となり、当該住宅の家賃を支払っていること
                </li>
                <li>（3）世帯員に町税等の滞納がないこと</li>
                <li>（4）居住行政区の町内会に入会し、地域活動に協力すること</li>
                <li>
                  （5）雇用関係にある企業又は雇用関係にある企業の役員並びに雇用主の所有する住宅ではないこと
                </li>
                <li>（6）３親等以内の親族が所有している住宅ではないこと</li>
                <li>（7）国家及び地方公務員でないこと</li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                月額家賃の一部を助成（四半期ごとの年4回支給）
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold mb-4">補助金額</h3>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li>
                    賃貸借契約している家賃の月額（共益費、駐車場等は除く）のうち、就労先から住宅手当の支給額を控除した後の額の1/2以内で、15,000円／月を上限とし、申請月から最大60か月間支給
                  </li>
                  <li>
                    更に、配偶者及び高校生以下の子どもひとりにつき5,000円を上限加算（上限加算の限度額は10,000円）
                  </li>
                  <li className="pl-4 text-lg">
                    ※支給額の1/3は商工会で発行する商品券により支給
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
                  <p className="text-xl font-semibold">企画課 企画振興係</p>
                  <p className="text-3xl font-bold text-blue-600">
                    0167-52-2115
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "4":
        return (
          <>
            <Card className="border-2 border-primary-dark rounded-xl mb-8">
              <CardContent className="p-6 bg-yellow-50">
                <div className="flex items-center gap-4">
                  <Home className="w-16 h-16 text-yellow-600" />
                  <h2 className="text-4xl font-bold text-primary-dark">
                    転居費用助成事業
                  </h2>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-lg">
                    住宅分野
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-lg">
                    引越費用助成
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
                南富良野町内への移住に伴う転居費用を助成し経済的負担を軽減することで、町内で継続した居住を促すとともに、人手・担い手の確保をし地域経済の活性化を図るもの。
              </p>
            </section>

            {/* 対象者 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                対象者
              </h2>
              <ul className="space-y-4 text-xl text-gray-600 list-disc pl-5">
                <li>
                  （1）申請時において満40歳未満であり、令和６年４月１日以降新たに南富良野町に転入した方で、転勤等による一時的な居住によらず、今後継続して５年以上本町に居住する意思のある方
                </li>
                <li>（2）世帯員に町税等の滞納がないこと</li>
                <li>（3）居住行政区の町内会に入会し、地域活動に協力すること</li>
                <li>（4）国家及び地方公務員でないこと</li>
              </ul>
            </section>

            {/* 支援内容 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                支援内容
              </h2>
              <p className="text-xl text-gray-600 mb-4">転居費用の一部を助成</p>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold mb-4">補助金額</h3>
                <ul className="space-y-4 text-xl text-gray-600">
                  <li>
                    引越し業者又は運送業者に支払った転居に要する経費の1/2以内で、前住所地が道内の場合5万円、道外の場合10万円を上限に助成
                  </li>
                  <li className="mt-6 font-semibold">加算措置：</li>
                  <li className="pl-4">
                    更に、配偶者及び高校生以下の子どもひとりにつき30,000円を上限加算（上限加算の限度額は60,000円）
                  </li>
                  <li className="pl-4 text-lg mt-4">
                    ※企業等から同様の助成等がある場合は控除後の額にて算出
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

  // 共通のラッパーはここで一度だけ使用
  return <div className="max-w-4xl mx-auto px-4">{renderContent()}</div>;
};

export default HousingDetail;
