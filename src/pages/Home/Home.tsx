import styles from "../../styles/modules/homePage.module.css";

import SectionScrollIndicator from "../../components/SectionScrollIndicator";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

import { FiCode, FiDatabase, FiMonitor } from "react-icons/fi";

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
          <div className={styles.sectionDescriptionContainer}>
            <hr className={styles.sectionHeaderHr} />
          </div>
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
        <SectionScrollIndicator />
      </div>

      {/* Projects Section */}
      <div className={styles.sectionContainer}>
        <ProjectsSection />
        <SectionScrollIndicator />
      </div>

      {/* Technical Skills Section */}
      <div className={styles.sectionContainer}>
        <div className={styles.sectionInnerContainer}>
          <h1 className={styles.sectionHeader}>Technical Skills</h1>
          <div className={styles.sectionDescriptionContainer}>
            <hr className={styles.sectionHeaderHr} />
            <div className={styles.sectionDescription}>
              The technologies and tools and I use and harness.
            </div>
          </div>

          <div className={styles.skillsContainer}>
            <div className={styles.skillsInnerContainer}>
              <div className={`${styles.skillsFocusCard} card`}>
                <div className={styles.skillsFocusHeader}>
                  <div className={styles.skillsFocusIcon}>
                    <FiCode size={22} />
                  </div>
                  <span>Frontend Development</span>
                </div>
                <div>
                  <div className={styles.skillsFocusWrapper}>
                    <div className={styles.skillsFocusDescriptionWrapper}>
                      <span className={styles.skillsFocusSkills}>
                        React, Next.js
                      </span>
                      <span className={styles.skillsFocusDescription}>
                        Advanced
                      </span>
                    </div>
                    <div className={styles.skillsFocusProgressContainer}>
                      <div
                        className={styles.skillsFocusProgressBar}
                        style={{ width: `95%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.skillsFocusCard} card`}>
                <div className={styles.skillsFocusHeader}>
                  <div className={styles.skillsFocusIcon}>
                    <FiDatabase size={22} />
                  </div>
                  <span>Backend Development</span>
                </div>
                <div>
                  <div className={styles.skillsFocusWrapper}>
                    <div className={styles.skillsFocusDescriptionWrapper}>
                      <span className={styles.skillsFocusSkills}>
                        React, Next.js
                      </span>
                      <span className={styles.skillsFocusDescription}>
                        Advanced
                      </span>
                    </div>
                    <div className={styles.skillsFocusProgressContainer}>
                      <div
                        className={styles.skillsFocusProgressBar}
                        style={{ width: `95%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.skillsInnerContainer}>
              <div className={`${styles.skillsAllSkills} card`}>
                <div className={styles.skillsFocusHeader}>
                  <div className={styles.skillsFocusIcon}>
                    <FiMonitor size={22} />
                  </div>
                  <span>Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionScrollIndicator />
    </div>
  );
};
