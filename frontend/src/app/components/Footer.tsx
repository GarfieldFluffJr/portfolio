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
      <div className={styles.webringContainer}>
        <a
          href="https://se-webring.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.webring}
        >
          <img
            src="/icons/se-webring-icon.svg"
            alt="Webring icon"
            width="24"
            height="24"
          />
          <span>SE Webring</span>
        </a>
      </div>
    </footer>
  );
}
