# 南富良野支援ナビ - Minamifurano Support Navi

このプロジェクトは、南富良野町の移住・定住支援を可視化し、最大受給額を確認できる Web アプリです。

## 動作確認

GitHub Pages にて、以下の URL で問題なく動作していることを確認済みです:

https://nanpu-nakaya.github.io/minamifurano-support-navi/

### 開発環境

Node.js: v18.20.5
npm: 10.8.2

## 🚀 セットアップ方法

### 1. 依存パッケージのインストール

以下のコマンドを実行し、必要なパッケージをインストールしてください。

npm install

### 2. 開発環境の起動

ローカルで開発サーバーを起動するには、以下のコマンドを実行してください。

npm start

### 3. ビルド

本番環境用のビルドを作成する場合は、以下のコマンドを実行してください。

npm run build

## 最新バージョンの変更点（2025 年 3 月）

### 1. ルーティングの変更

react-router-dom の BrowserRouter を HashRouter に変更しました。
変更理由: 一部環境でページ遷移が機能しなかったため。
変更前
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

変更後
import { HashRouter as Router, Routes, Route } from "react-router-dom";

### 2. 画像の読み込み方法を修正

public フォルダ内の画像が正しく表示されない問題を修正しました。
変更前
const seasonImages = {
spring: "/images/kanayama_sp.JPG",
summer: "/images/kosui_su.JPG",
autumn: "/images/kanayama_au.JPG",
winter: "/images/ski_wi.jpg",
};

変更後
const seasonImages = {
spring: `${process.env.PUBLIC_URL}/images/kanayama_sp.JPG`,
summer: `${process.env.PUBLIC_URL}/images/kosui_su.JPG`,
autumn: `${process.env.PUBLIC_URL}/images/kanayama_au.JPG`,
winter: `${process.env.PUBLIC_URL}/images/ski_wi.jpg`,
};

変更理由: 絶対パスに変更することで、どの環境でも正しく画像を読み込めるようにしました。

### 3. 各リンクを絶対パスに変更

以前は ./page などの相対パスを使用していましたが、/page などの絶対パスを使用するよう修正しました。
変更理由: 相対パスでは環境によってリンク切れが発生するため。

### 4. その他の修正

ナビゲーションが開かない問題の修正
支援一覧ページが開かないバグの修正
レイアウトの微調整
軽微なバグ修正
