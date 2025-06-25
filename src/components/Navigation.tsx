import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import styles from "../styles/modules/navBar.module.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [VNavIsOpen, setVNavIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const location = useLocation();

  // Determine current page based on location
  const getCurrentPage = () => {
    const currentItem = navItems.find((item) => item.to === location.pathname);
    return currentItem ? currentItem.label : "Home";
  };

  const currentPage = getCurrentPage();

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setVNavIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setVNavIsOpen(false);
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className={styles.horizontalNavContainer}>
        <div className={styles.navbar}>
          <nav className={styles.container}>
            <div className={styles.content}>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
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
          scrolled ? styles.show : ""
        }`}
      >
        <div
          className={`${styles.hoverTrigger} ${scrolled ? styles.show : ""}`}
          onMouseEnter={() => setVNavIsOpen(true)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Menu size={16} className={styles.menuIcon} />
          <span className={styles.verticalNavHeader}>menu</span>
        </div>
        <div
          className={`${styles.dropdown} ${VNavIsOpen ? styles.show : ""}`}
          onMouseEnter={() => {
            handleMouseEnter();
          }}
          onMouseLeave={() => {
            setVNavIsOpen(false);
          }}
        >
          {navItems.map((item) => (
            <NavLink
              to={item.to}
              key={item.to}
              onClick={() => {
                setVNavIsOpen(false);
              }}
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
  );
}
