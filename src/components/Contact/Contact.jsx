// Contact.jsx
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Phone, Printer, Clock, MapPin, Mail } from "lucide-react";

const ContactPage = () => {
  // コンポーネントがマウントされた時にページトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-secondary-light py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-primary-dark">
          お問い合わせ
        </h1>

        {/* 役場基本情報 */}
        <Card className="mb-8 border-primary-dark/20">
          <CardHeader className="bg-accent-light/10">
            <CardTitle className="text-2xl text-primary-dark">
              南富良野町役場
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-light mt-1" />
                  <div>
                    <p className="font-semibold text-primary-dark">所在地</p>
                    <p>〒079-2402</p>
                    <p>北海道空知郡南富良野町字幾寅867番地</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent-light mt-1" />
                  <div>
                    <p className="font-semibold text-primary-dark">
                      代表電話番号（総務課）
                    </p>
                    <p>0167-52-2112</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Printer className="w-5 h-5 text-accent-light mt-1" />
                  <div>
                    <p className="font-semibold text-primary-dark">FAX</p>
                    <p>0167-52-2922・0167-52-2225</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent-light mt-1" />
                  <div>
                    <p className="font-semibold text-primary-dark">開庁時間</p>
                    <p>平日 8:30～17:15</p>
                    <p className="text-sm text-gray-600">
                      ※土日祝日、年末年始を除く
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent-light mt-1" />
                  <div>
                    <p className="font-semibold text-primary-dark">
                      メールアドレス
                    </p>
                    <p>kikaku@town.minamifurano.hokkaido.jp</p>
                  </div>
                </div>
              </div>

              {/* Google Maps埋め込み */}
              <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  title="南富良野町役場の地図"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.166738387952!2d142.5659863756301!3d43.16402408393259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f735c58c355761f%3A0x59cfd8cd82ecbd70!2z5Y2X5a-M6Imv6YeO55S65b255aC0!5e0!3m2!1sja!2sjp!4v1732681672868!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 各課連絡先 */}
        <h2 className="text-2xl font-bold mb-6 text-primary-dark">
          担当課のご案内
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow duration-200 border-primary-dark/20"
            >
              <CardHeader className="bg-accent-light/10">
                <CardTitle className="text-xl text-primary-dark">
                  {dept.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent-light" />
                    <p>{dept.phone}</p>
                  </div>
                  <p className="text-sm text-gray-600">{dept.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 注意事項 */}
        <div className="mt-12 bg-accent-light/10 rounded-lg p-6 border border-primary-dark/20">
          <h3 className="text-lg font-semibold mb-4 text-primary-dark">
            お問い合わせに関する注意事項
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>• 内容によっては回答に時間を要する場合がございます。</li>
            <li>
              • お急ぎの場合は、お電話でのお問い合わせをおすすめいたします。
            </li>
            <li>
              •
              年末年始など、閉庁日のお問い合わせについては、開庁後の対応となります。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 支援制度関連の部署データ
const departments = [
  {
    name: "企画課（まちづくりプロジェクト推進室）",
    phone: "0167-52-2115",
    description: "移住定住支援、まちづくり計画全般に関すること",
  },
  {
    name: "産業課",
    phone: "0167-52-2178",
    description: "農業・林業・商工業に関する支援制度について",
  },
  {
    name: "建設課",
    phone: "0167-52-2179",
    description: "住宅支援、上下水道に関する支援制度について",
  },
  {
    name: "保健福祉課（すこやかこども室）",
    phone: "0167-52-2211",
    description: "子育て支援、福祉に関する支援制度について",
  },
  {
    name: "教育委員会",
    phone: "0167-52-2145",
    description: "教育支援、奨学金等の教育関連支援制度について",
  },
  {
    name: "総務課",
    phone: "0167-52-2112",
    description: "各種証明書の発行、その他行政サービスについて",
  },
];

export default ContactPage;
