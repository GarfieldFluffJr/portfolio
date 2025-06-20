import styles from "../../styles/modules/homePage.module.css";

import SectionScrollIndicator from "../../components/SectionScrollIndicator";
import HeroSection from "./components/HeroSection";

export const Home = () => {
  return (
    <div className="overflow-page">
      <div className={styles.sectionGrid}>
        <HeroSection />
        <div>
          <SectionScrollIndicator />
        </div>
      </div>

      <hr />
      <span>Hello</span>
    </div>
  );
};
