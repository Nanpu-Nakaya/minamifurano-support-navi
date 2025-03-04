// App.js

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewHomePage from "./components/NewHomePage";
import Contact from "./components/Contact/Contact";
import SupportList from "./components/SupportList";
import SupportNavigator from "./components/SupportNavigator/SupportNavigator";
// 各詳細ページのインポート
import HousingDetail from "./components/SupportDetail/HousingDetail";
import AgricultureDetail from "./components/SupportDetail/AgricultureDetail";
import CommerceDetail from "./components/SupportDetail/CommerceDetail";
import ConstructionDetail from "./components/SupportDetail/ConstructionDetail";
import WelfareDetail from "./components/SupportDetail/WelfareDetail";
import EducationDetail from "./components/SupportDetail/EducationDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<NewHomePage />} />
          <Route
            path="/support"
            element={
              <div className="min-h-screen bg-gray-100 py-8 pt-20">
                <div className="container mx-auto px-4">
                  <SupportNavigator />
                </div>
              </div>
            }
          />

          {/* 支援制度一覧ページのルートを追加 */}
          <Route
            path="/support-list"
            element={
              <div className="pt-20">
                <SupportList />
              </div>
            }
          />

          {/* 支援制度詳細ページのルート */}
          <Route
            path="/housing-support"
            element={
              <div className="pt-20">
                <HousingDetail />
              </div>
            }
          />

          <Route
            path="/contact"
            element={
              <div className="pt-10">
                <Contact />
              </div>
            }
          />
          <Route
            path="/agriculture-support"
            element={
              <div className="pt-20">
                <AgricultureDetail />
              </div>
            }
          />
          <Route
            path="/commerce-support"
            element={
              <div className="pt-20">
                <CommerceDetail />
              </div>
            }
          />
          <Route
            path="/construction-support"
            element={
              <div className="pt-20">
                <ConstructionDetail />
              </div>
            }
          />
          <Route
            path="/welfare-support"
            element={
              <div className="pt-20">
                <WelfareDetail />
              </div>
            }
          />
          <Route
            path="/education-support"
            element={
              <div className="pt-20">
                <EducationDetail />
              </div>
            }
          />

          <Route
            path="/experiences"
            element={<div className="pt-20">移住体験談ページ（準備中）</div>}
          />
          <Route
            path="/contact"
            element={<div className="pt-20">お問い合わせページ（準備中）</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
