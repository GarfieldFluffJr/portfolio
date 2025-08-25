import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import BounceTitle from "../../../components/BounceTitle";

import useHero from "../hooks/useHero";

import styles from "../../../styles/modules/homePage.module.css";

export default function HeroSection() {
  const { imagesLoaded, handleSocialsClick } = useHero();

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroName}>
        <BounceTitle text="Louie Yin" />
      </div>
      <div className={styles.heroDesc}>SOFTWARE ENGINEER | VARSITY ATHLETE</div>
      <div className={styles.heroSchool}>University of Waterloo</div>
      <div className={styles.heroSocialsContainer}>
        <a
          href="https://github.com/GarfieldFluffJr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={styles.heroSocials}
            onClick={() => handleSocialsClick("GitHub")}
          >
            <FiGithub className={styles.heroSocialItem} />
            <span className={styles.heroSocialItem}>GitHub</span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/louieyin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={styles.heroSocials}
            onClick={() => handleSocialsClick("LinkedIn")}
          >
            <FiLinkedin className={styles.heroSocialItem} />
            <span className={styles.heroSocialItem}>LinkedIn</span>
          </div>
        </a>
        <a
          href="mailto:l5yin@uwaterloo.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={styles.heroSocials}
            id={styles.heroSocialsLast}
            onClick={() => handleSocialsClick("Email")}
          >
            <FiMail className={styles.heroSocialItem} />
            <span className={styles.heroSocialItem}>Email</span>
          </div>
        </a>
      </div>
      <img
        src={"/images/Home/Jollibee.jpeg"}
        alt={`Jollibee person image`}
        className={`${styles.heroImage} ${
          imagesLoaded ? styles.heroImageJollibee : ""
        }`}
      />
      <img
        src={"/images/Home/OUA.jpeg"}
        alt={`OUA medal image`}
        className={`${styles.heroImage} ${
          imagesLoaded ? styles.heroImageOUA : ""
        }`}
      />
      <img
        src={"/images/Home/Garfield.jpg"}
        alt={`Garfield ice cream image`}
        className={`${styles.heroImage} ${
          imagesLoaded ? styles.heroImageGarfield : ""
        }`}
      />
      <img
        src={"/images/Home/handwriting.png"}
        alt={`Handwriting image`}
        className={`${styles.heroImageHandwritingInitial} ${
          imagesLoaded ? styles.heroImageHandwriting : ""
        }`}
      />
    </div>
  );
}
