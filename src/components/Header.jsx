// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-accent-light/70 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ部分 */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/logomina01.png`}
                alt="南富良野町ロゴ"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* PC用メニュー */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { href: "/", label: "ホーム" },
                { href: "/support", label: "支援ナビ" },
                { href: "/support-list", label: "支援制度一覧" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((link) => (
                <li key={link.href} className="relative group">
                  <Link
                    to={link.href}
                    className="text-secondary-light hover:text-primary-light transition-colors duration-300"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* モバイル用メニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-light hover:text-primary-light focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイル用メニュー */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-accent-dark border-t border-secondary-light/20`}
      >
        <div className="container mx-auto px-4 py-2">
          <ul className="space-y-2">
            {[
              { href: "/", label: "ホーム" },
              { href: "/support", label: "支援ナビ" },
              { href: "/support-list", label: "支援制度一覧" },
              { href: "/contact", label: "お問い合わせ" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block py-2 text-secondary-light hover:text-primary-light transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
