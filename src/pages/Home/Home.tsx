import styles from "../../styles/modules/homePage.module.css";

import SectionScrollIndicator from "../../components/SectionScrollIndicator";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";

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
            Hi, I'm <strong>Louie Yin</strong>, a software engineering student
            and varsity swimmer at the University of Waterloo. I love to learn
            and you will often find me spending my time reading up code
            documentation or building the next multi-million dollar VC-backed
            startup.
            <br /> <br />
            In the occasions when I'm not developing my skills, I'm probably{" "}
            <strong>drowning in the pool</strong> or lifting really really heavy
            weights in the gym.
            <br /> <br />I absolutely love <strong>touching grass</strong> and
            you will always find me eating food no matter where I go. Thank you
            so much for visiting my site, please don't hesitate to reach out!
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

      {/* Connect Section */}
      <section className={styles.sectionContainer}>
        <div className={styles.sectionInnerContainer}>
          <h1 className={styles.sectionHeader}>Connect</h1>
          <div className={styles.sectionDescriptionContainer}>
            <hr className={styles.sectionHeaderHr} />
            <div className={styles.sectionDescription}>
              Want to chat? Feel free to reach out via any of the following
              methods!
            </div>
          </div>

          <div className={styles.connectContainer}>
            <a
              className={styles.connectLinkWrapper}
              href="https://github.com/GarfieldFluffJr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.connectItem} card`}>
                <div className={styles.connectIcon}>
                  <FiGithub size={24} />
                </div>
                <span className={styles.connectTitle}>GitHub</span>
              </div>
            </a>
            <a
              className={styles.connectLinkWrapper}
              href="https://www.linkedin.com/in/louieyin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.connectItem} card`}>
                <div className={styles.connectIcon}>
                  <FiLinkedin size={24} />
                </div>
                <span className={styles.connectTitle}>LinkedIn</span>
              </div>
            </a>
            <a
              className={styles.connectLinkWrapper}
              href="mailto:louieyin6@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.connectItem} card`}>
                <div className={styles.connectIcon}>
                  <FiMail size={24} />
                </div>
                <span className={styles.connectTitle}>Email</span>
              </div>
            </a>
          </div>
          <NavLink to="/contact" className="big-black-button">
            <span>Contact Me</span>
            <FiArrowRight size={16} />
          </NavLink>
          <p className={styles.connectEmail}>
            Or send me an email at louieyin6@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};
