import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import styles from "../styles/modules/homePage.module.css";

import SectionScrollIndicator from "../components/SectionScrollIndicator";

export const Home = () => {
  const handleSocialsClick = (social: string) => {
    switch (social) {
      case "GitHub":
        window.open("https://github.com/GarfieldFluffJr", "_blank");
        break;
      case "LinkedIn":
        window.open("https://www.linkedin.com/in/louieyin/", "_blank");
        break;
      case "Email":
        const email = "louieyin6@gmail.com";
        const subject = "I would like to connect";
        const body = "Hi Louie, I would like to get in touch...";

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, "_blank");
        break;
      default:
        window.open("");
        console.error("Social was not found");
    }
  };
  return (
    <div className="overflow-page">
      {/* Main hero section */}
      <div className={styles.heroGrid}>
        <div className={styles.heroContainer}>
          <div className={styles.heroName}>Louie Yin</div>
          <div className={styles.heroDesc}>
            SOFTWARE ENGINEER | VARSITY ATHLETE
          </div>
          <div className={styles.heroSocialsContainer}>
            <div
              className={styles.heroSocials}
              onClick={() => handleSocialsClick("GitHub")}
            >
              <FiGithub className={styles.heroSocialItem} />
              <span className={styles.heroSocialItem}>GitHub</span>
            </div>
            <div
              className={styles.heroSocials}
              onClick={() => handleSocialsClick("LinkedIn")}
            >
              <FiLinkedin className={styles.heroSocialItem} />
              <span className={styles.heroSocialItem}>LinkedIn</span>
            </div>
            <div
              className={styles.heroSocials}
              onClick={() => handleSocialsClick("Email")}
            >
              <FiMail className={styles.heroSocialItem} />
              <span className={styles.heroSocialItem}>Email</span>
            </div>
          </div>
        </div>
        <div>
          <SectionScrollIndicator />
        </div>
      </div>

      <hr />
      <span>Hello</span>
    </div>
  );
};
