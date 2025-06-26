import styles from "../../styles/modules/homePage.module.css";

import SectionScrollIndicator from "../../components/SectionScrollIndicator";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.heroGrid}>
        <HeroSection />
        <div>
          <SectionScrollIndicator />
        </div>
      </section>

      {/* About Me Section */}
      <section className={styles.sectionContainer}>
        <div className={styles.sectionInnerContainer}>
          <h1 className={styles.sectionHeader}>About Me</h1>
          <div className={styles.sectionDescriptionContainer}>
            <hr className={styles.sectionHeaderHr} />
          </div>
          <div className={`${styles.aboutContent} card`}>
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
        <SectionScrollIndicator />
      </section>

      {/* Work Experience Section */}
      <section className={styles.sectionContainer}>
        <ExperienceSection />
        <SectionScrollIndicator />
      </section>

      {/* Projects Section */}
      <section className={styles.sectionContainer}>
        <ProjectsSection />
        <SectionScrollIndicator />
      </section>

      {/* Technical Skills Section */}
      <section className={styles.sectionContainer}>
        <SkillsSection />
        <SectionScrollIndicator />
      </section>
    </div>
  );
};
