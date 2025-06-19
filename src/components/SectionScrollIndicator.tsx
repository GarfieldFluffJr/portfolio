import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import styles from "../styles/modules/homePage.module.css";

export default function SectionScrollIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 block">
      <motion.button
        className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 5, 0] }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          },
        }}
      >
        <span className={styles.sectionScrollText}>Scroll</span>
        <FiArrowDown size={16} className={styles.sectionScrollText} />
      </motion.button>
    </div>
  );
}
