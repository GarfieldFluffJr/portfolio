import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import styles from "../styles/modules/homePage.module.css";

import type { RefObject } from "react";

const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
  if (ref?.current) {
    const yOffset = -50;
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};

const SectionScrollIndicator = ({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLElement | null>;
}) => (
  <div className="flex justify-center mt-4">
    <motion.button
      className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity will-change-transform will-change-opacity cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7, y: [0, 5, 0] }}
      onClick={() => scrollToSection(targetRef)}
      transition={{
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          type: "tween",
        },
      }}
    >
      <span className={styles.sectionScrollText}>Scroll</span>
      <FiArrowDown size={16} className={styles.sectionScrollText} />
    </motion.button>
  </div>
);

export default React.memo(SectionScrollIndicator);
