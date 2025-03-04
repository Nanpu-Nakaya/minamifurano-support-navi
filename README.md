# 南富良野町 支援ナビ Web アプリ

南富良野町の支援制度を検索・表示できる Web アプリです。

## 🛠 セットアップ手順

### 1. 必要な環境 & セットアップ

```sh
# 必要な環境
# - Node.js v18.20.5 をインストール
# - npm（パッケージマネージャ）を使用
node -v  # Node.js のバージョン確認
npm -v   # npm のバージョン確認

# 必要なパッケージをインストール
npm install

# 開発モードでアプリを起動
npm start

# 本番環境用にビルド
npm run build

# 環境変数の設定

# 必要な場合は .env ファイルを作成し、以下の形式で記述

echo "REACT_APP_API_URL=https://example.com/api" > .env
echo "REACT_APP_GOOGLE_MAPS_KEY=your_google_maps_api_key" >> .env

# このプロジェクトで使用している技術

echo "React（Create React App）"
echo "Tailwind CSS"
echo "Netlify（デプロイ）"
```
