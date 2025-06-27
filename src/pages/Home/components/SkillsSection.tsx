import styles from "../../../styles/modules/homePage.module.css";

import { FiCode, FiDatabase, FiMonitor } from "react-icons/fi";
import { SiJavascript, SiTypescript } from "react-icons/si";

type FocusSkill = {
  tech: string;
  level: string;
  percentage: string;
};

export default function SkillsSection() {
  const frontend: FocusSkill[] = [
    {
      tech: "React, Next.js, Astro",
      level: "Advanced",
      percentage: "95",
    },
    {
      tech: "JavaScript, TypeScript",
      level: "Advanced",
      percentage: "98",
    },
    {
      tech: "CSS, Tailwind.css",
      level: "Advanced",
      percentage: "98",
    },
  ];

  const backend: FocusSkill[] = [
    {
      tech: "Node.js, Express.js, RESTful APIs",
      level: "Advanced",
      percentage: "90",
    },
    {
      tech: "Python, C, C++",
      level: "Proficient",
      percentage: "85",
    },
    {
      tech: "MySQL, PostgreSQL, MongoDB",
      level: "Proficient",
      percentage: "73",
    },
    {
      tech: "Docker",
      level: "Advanced",
      percentage: "94",
    },
  ];
  return (
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
              {frontend.map((focusSkill, i) => (
                <div key={i} className={styles.skillsFocusWrapper}>
                  <div className={styles.skillsFocusDescriptionWrapper}>
                    <span className={styles.skillsFocusSkills}>
                      {focusSkill.tech}
                    </span>
                    <span className={styles.skillsFocusDescription}>
                      {focusSkill.level}
                    </span>
                  </div>
                  <div className={styles.skillsFocusProgressContainer}>
                    <div
                      className={styles.skillsFocusProgressBar}
                      style={{ width: `${focusSkill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
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
              {backend.map((focusSkill, i) => (
                <div key={i} className={styles.skillsFocusWrapper}>
                  <div className={styles.skillsFocusDescriptionWrapper}>
                    <span className={styles.skillsFocusSkills}>
                      {focusSkill.tech}
                    </span>
                    <span className={styles.skillsFocusDescription}>
                      {focusSkill.level}
                    </span>
                  </div>
                  <div className={styles.skillsFocusProgressContainer}>
                    <div
                      className={styles.skillsFocusProgressBar}
                      style={{ width: `${focusSkill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
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
            <div>
              <div className={styles.skillsAllWrapper}>
                <div className={styles.skillsAllHeader}>
                  Programming Languages:
                </div>
                <div className={styles.skillsAllSkillsWrapper}>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiJavascript size={14} />
                    <span>JavaScript</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiTypescript size={14} />
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
