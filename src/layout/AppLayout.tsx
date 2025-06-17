import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
        <div className={styles.horizontalNavContainer}>
          <div className={styles.navbar}>
            <nav className={styles.container}>
              <div className={styles.content}>
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    onClick={() => setCurrentPage(item.label)}
                    className={`${styles.navLink} ${
                      currentPage === item.label ? styles.active : ""
                    }`}
                    to={item.to}
                  >
                    {/* Active background - this animates between navlinks */}
                    {currentPage === item.label && (
                      <motion.div
                        layoutId="activeBackground"
                        className={styles.activeBackgroundStyle}
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover background - static per item */}
                    <motion.div
                      className={styles.hoverBackgroundStyle}
                      whileHover={{
                        opacity: currentPage !== item.label ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />

                    <span className={styles.textStyle}>{item.label}</span>
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Vertical */}
        <div
          className={`${styles.floatingNavContainer} ${
            scrolled ? "show" : "hide"
          }`}
        >
          <div className={styles.hoverTrigger}>
            <Menu size={16} className={styles.menuIcon} />
            <span className={styles.verticalNavHeader}>menu</span>
          </div>
          <div className={styles.dropdown}>
            {navItems.map((item) => (
              <NavLink
                to={item.to}
                key={item.to}
                onClick={() => setCurrentPage(item.label)}
                className={`${styles.VnavLink} ${
                  currentPage === item.label ? styles.Vactive : ""
                }`}
              >
                {/* Active background - this animates between navlinks */}
                {currentPage === item.label && (
                  <motion.div
                    layoutId="VactiveBackground"
                    className={styles.VactiveBackgroundStyle}
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover background - static per item */}
                <motion.div
                  className={styles.VhoverBackgroundStyle}
                  whileHover={{
                    opacity: currentPage !== item.label ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />

                <span className={styles.textStyle}>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </>
      <div>{children}</div>
    </div>
  );
}
