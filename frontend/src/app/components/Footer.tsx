import { FiGithub, FiLinkedin } from "react-icons/fi";

import styles from "../styles/modules/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a
          href="https://github.com/GarfieldFluffJr"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FiGithub size={20} />
          {}
        </a>
        <a
          href="https://www.linkedin.com/in/louieyin/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FiLinkedin size={20} />
          {}
        </a>
      </div>
      <span>© {new Date().getFullYear()} Louie Yin. Made with ❤️</span>
    </footer>
  );
}
