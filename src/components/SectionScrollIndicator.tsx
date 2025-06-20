import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import styles from "../styles/modules/homePage.module.css";

function SectionScrollIndicator() {
  return (
    <div className="flex justify-center mt-4">
      <motion.div
        className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity will-change-transform will-change-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 5, 0] }}
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
      </motion.div>
    </div>
  );
}

export default React.memo(SectionScrollIndicator);
