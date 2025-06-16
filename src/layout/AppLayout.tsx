import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import styles from "../styles/layout.module.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

// Make navbar, which is horizontal at first, but upon scroll, animate to side dropdown menu
export default function AppLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <>
        <div className={styles.navContainer}>
          <div className={styles.navbar}>
            <div className={styles.container}>
              <div className={styles.content}>
                {/* Navigation Links */}
                <div className={styles.navLinks}>
                  {navItems.map((item, index) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={`${styles.navLink} ${
                        currentPage === item.label ? styles.active : ""
                      }`}
                      style={{
                        transitionDelay: scrolled ? "0ms" : `${index * 50}ms`,
                      }}
                      onClick={() => setCurrentPage(item.label)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed top-4 left-4 z-50 transition-all duration-700 ease-in-out group ${
            scrolled
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          {/* Hover trigger area - invisible but extends hover zone */}
          <div className="absolute inset-0 w-64 h-full -z-10 group-hover:bg-transparent" />

          {/* Main button */}
          <div className="relative">
            {/* Expandable dropdown */}
            <div
              className={`
            absolute top-0 left-0 bg-white/98 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50
            transition-all duration-500 ease-out origin-top-left overflow-hidden
            group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
            opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:pointer-events-auto
          `}
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Menu size={16} className="text-white" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Navigation
                  </span>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="p-2">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={`
                    flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                    text-gray-700 hover:text-blue-600 transition-all duration-200 group/item
                    transform translate-x-0 opacity-100
                  `}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      minWidth: "200px",
                    }}
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover/item:bg-blue-500 transition-colors duration-200" />
                    <span className="font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:w-4 transition-all duration-300 ml-auto" />
                  </NavLink>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-100 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
                <p className="text-xs text-gray-500 text-center">
                  Hover to navigate
                </p>
              </div>
            </div>

            {/* Floating action button */}
            <div
              className={`
            w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl
            flex items-center justify-center cursor-pointer
            transition-all duration-300 hover:shadow-2xl hover:scale-110
            group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-700
          `}
            >
              <Menu
                size={24}
                className="text-white transition-transform duration-300 group-hover:rotate-90"
              />
            </div>

            {/* Pulse effect */}
            <div className="absolute inset-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl animate-ping opacity-20" />
          </div>
        </div>
      </>
      <div>{children}</div>
    </div>
  );
}
