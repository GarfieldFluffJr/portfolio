import styles from "../../styles/modules/homePage.module.css";

import SectionScrollIndicator from "../../components/SectionScrollIndicator";
import HeroSection from "./components/HeroSection";
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
        <div className={styles.sectionInnerContainer}>
          <h1 className={styles.sectionHeader}>About Me</h1>
          <hr className={styles.sectionHeaderHr} />
          <div className={styles.aboutContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            molestiae tenetur in ipsam dolore inventore odio, rem eligendi
            mollitia quia accusamus impedit tempore obcaecati modi odit
            architecto numquam illum est excepturi? Possimus necessitatibus
            consectetur nisi fugit doloribus ipsa quod nemo voluptatibus fugiat,
            exercitationem quaerat molestias ea accusantium quam nobis tempore
            similique tenetur dignissimos expedita accusamus cupiditate culpa
            quasi illo. Deleniti suscipit doloremque necessitatibus adipisci
            saepe placeat nesciunt! Cumque vero commodi similique enim adipisci
            exercitationem? Inventore repudiandae vel beatae dicta nemo nam
            suscipit, officiis aliquid deleniti sunt illo labore, ratione sit
            eaque veritatis non assumenda blanditiis sed laborum illum libero
            sint.
          </div>
        </div>
        <div>
          <SectionScrollIndicator />
        </div>
      </div>

      {/* Projects Section */}
      <div className={styles.sectionContainer}>
        <div className={styles.sectionInnerContainer}>
          <h1 className={styles.sectionHeader}>Projects</h1>
          <hr className={styles.sectionHeaderHr} />
          <div className={styles.aboutContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            molestiae tenetur in ipsam dolore inventore odio, rem eligendi
            mollitia quia accusamus impedit tempore obcaecati modi odit
            architecto numquam illum est excepturi? Possimus necessitatibus
            consectetur nisi fugit doloribus ipsa quod nemo voluptatibus fugiat,
            exercitationem quaerat molestias ea accusantium quam nobis tempore
            similique tenetur dignissimos expedita accusamus cupiditate culpa
            quasi illo. Deleniti suscipit doloremque necessitatibus adipisci
            saepe placeat nesciunt! Cumque vero commodi similique enim adipisci
            exercitationem? Inventore repudiandae vel beatae dicta nemo nam
            suscipit, officiis aliquid deleniti sunt illo labore, ratione sit
            eaque veritatis non assumenda blanditiis sed laborum illum libero
            sint.
          </div>
        </div>
        <div>
          <SectionScrollIndicator />
        </div>
      </div>
    </div>
  );
};
