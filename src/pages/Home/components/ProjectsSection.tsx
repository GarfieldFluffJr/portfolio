import { NavLink } from "react-router-dom";

import { FiPlay, FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

import styles from "../../../styles/modules/homePage.module.css";

export default function ProjectsSection() {
  return (
    <div className={styles.sectionInnerContainer}>
      <h1 className={styles.sectionHeader}>Projects</h1>
      <div className={styles.sectionDescriptionContainer}>
        <hr className={styles.sectionHeaderHr} />
        <div className={styles.sectionDescription}>
          A few of my favourite projects. Go to my projects page to see all my
          work!
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
                Voluptatibus facere officia ipsum soluta, corrupti odit autem ex
                corporis ipsa voluptatum?
              </div>
              <div className={styles.projectsSkillsContainer}>
                <span className="grey-caption">Node.js</span>
                <span className="grey-caption">Python</span>
              </div>
            </div>
            <div className={styles.projectsCardActions}>
              <a
                className="small-black-button"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiPlay size={12} />
                <span>Watch Demo</span>
              </a>
              <a
                className="small-transparent-button"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={12} />
                <span>GitHub</span>
              </a>
              <a
                className="small-transparent-button"
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
                Voluptatibus facere officia ipsum soluta, corrupti odit autem ex
                corporis ipsa voluptatum?
              </div>
              <div className={styles.projectsSkillsContainer}>
                <span className="grey-caption">Node.js</span>
                <span className="grey-caption">Python</span>
              </div>
            </div>
            <div className={styles.projectsCardActions}>
              <a
                className="small-black-button"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiPlay size={12} />
                <span>Watch Demo</span>
              </a>
              <a
                className="small-transparent-button"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={12} />
                <span>GitHub</span>
              </a>
              <a
                className="small-transparent-button"
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
        <NavLink to="/projects" className="big-black-button">
          <span>View All Projects</span>
          <FiArrowRight size={16} />
        </NavLink>
      </div>
    </div>
  );
}
