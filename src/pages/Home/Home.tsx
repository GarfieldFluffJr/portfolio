import { NavLink } from "react-router-dom";

import styles from "../../styles/modules/homePage.module.css";
import { FiPlay, FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

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
        <div>
          <SectionScrollIndicator />
        </div>
      </div>

      {/* Projects Section */}
      <div className={styles.sectionContainer}>
        <div className={styles.sectionInnerContainer}>
          <h1 className={styles.sectionHeader}>Projects</h1>
          <div className={styles.sectionDescriptionContainer}>
            <hr className={styles.sectionHeaderHr} />
            <div className={styles.sectionDescription}>
              A few of my favourite projects. Go to my projects page to see all
              my work!
            </div>
          </div>

          <div className={styles.projectsContainer}>
            <div className={styles.projectsCard}>
              <div className={styles.projectsImage}>
                <img
                  src="/images/cook-buddy.png"
                  alt="Cook Buddy photo"
                  width={400}
                />

                <a href="#" target="_blank">
                  <div className={styles.projectsImageLink}>
                    <FiPlay size={30} />
                    {""}
                  </div>
                </a>
              </div>
              <div className={styles.projectsCardText}>
                <div className={styles.projectsCardName}>Cook Buddy</div>
                <div className={styles.projectsCardDescriptionContainer}>
                  <div className={styles.projectsCardDescription}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus facere officia ipsum soluta, corrupti odit
                    autem ex corporis ipsa voluptatum?
                  </div>
                  <div className={styles.projectsSkillsContainer}>
                    <span className={styles.projectsSkills}>Node.js</span>
                    <span className={styles.projectsSkills}>Python</span>
                  </div>
                </div>
                <div className={styles.projectsCardActions}>
                  <a
                    className={`${styles.projectsDemo} ${styles.projectsAction}`}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiPlay size={12} />
                    <span>Watch Demo</span>
                  </a>
                  <a
                    className={`${styles.projectsGitHub} ${styles.projectsAction}`}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={12} />
                    <span>GitHub</span>
                  </a>
                  <a
                    className={`${styles.projectsGitHub} ${styles.projectsAction}`}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={12} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projectsCard}>
              <div className={styles.projectsImage}>
                <img
                  src="/images/cook-buddy.png"
                  alt="Cook Buddy photo"
                  width={400}
                />

                <a href="#" target="_blank">
                  <div className={styles.projectsImageLink}>
                    <FiPlay size={30} />
                    {""}
                  </div>
                </a>
              </div>

              <div className={styles.projectsCardText}>
                <div className={styles.projectsCardName}>Cook Buddy</div>
                <div className={styles.projectsCardDescriptionContainer}>
                  <div className={styles.projectsCardDescription}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus facere officia ipsum soluta, corrupti odit
                    autem ex corporis ipsa voluptatum?
                  </div>
                  <div className={styles.projectsSkillsContainer}>
                    <span className={styles.projectsSkills}>Node.js</span>
                    <span className={styles.projectsSkills}>Python</span>
                  </div>
                </div>
                <div className={styles.projectsCardActions}>
                  <a
                    className={`${styles.projectsDemo} ${styles.projectsAction}`}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiPlay size={12} />
                    <span>Watch Demo</span>
                  </a>
                  <a
                    className={`${styles.projectsGitHub} ${styles.projectsAction}`}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={12} />
                    <span>GitHub</span>
                  </a>
                  <a
                    className={`${styles.projectsGitHub} ${styles.projectsAction}`}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={12} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <NavLink to="/projects" className={styles.viewAllProjectsButton}>
              <span>View All Projects</span>
              <FiArrowRight size={16} />
            </NavLink>
          </div>
        </div>
        <div>
          <SectionScrollIndicator />
        </div>
      </div>
    </div>
  );
};
