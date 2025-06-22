import styles from "../../styles/modules/homePage.module.css";

import SectionScrollIndicator from "../../components/SectionScrollIndicator";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroGrid}>
        <HeroSection />
        <div>
          <SectionScrollIndicator />
        </div>
      </div>

      {/* About Me Section */}
      <div className={styles.sectionContainer}>
        <AboutMeSection />
        <div>
          <SectionScrollIndicator />
        </div>
      </div>
    </div>
  );
};
