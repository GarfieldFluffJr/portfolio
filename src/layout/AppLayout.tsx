import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

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
                  {navItems.map((item, index) => {
                    return (
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Vertical */}
        <div
          className={`${styles.floatingNavContainer} ${
            scrolled ? "show" : "hide"
          }`}
        >
          <div className={styles.hoverTrigger} />

          <div className={styles.navWrapper}>
            <div className={styles.dropdown}>
            </div>
          </div>
        </div>
      </>
      <div>{children}</div>
    </div>
  );
}
