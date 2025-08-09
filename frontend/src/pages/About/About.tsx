import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "../../styles/modules/aboutPage.module.css";
import { educationData } from "./Data/educationData";
import { HonoursData } from "./Data/honoursData";
import { experienceData } from "./Data/experienceData";

export const AboutHome = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 1300);
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>About Me</h1>
        <hr className={styles.titleHR} />
        <div className={styles.titleDesc}>
          Waterloo Software Engineer x Varsity Athlete
        </div>
        <div className={styles.titleTagsContainer}>
          <div className={styles.titleTag}>Full Stack Development</div>
          <div className={styles.titleTag}>UI/UX Design</div>
          <div className={styles.titleTag}>AI/ML</div>
        </div>
      </div>

      {/* Education Section */}
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>Education</h2>
        <div className={styles.educationContainer}>
          {educationData.map((education, index) => (
            <div key={index} className="card">
              <div className={styles.educationHeader}>
                <div className={styles.educationInnerHeader}>
                  <div className={styles.educationDuration}>
                    {education.duration}
                  </div>
                  <div className={styles.educationDegree}>
                    {education.degree}
                  </div>
                </div>
                <div className={styles.educationLocation}>
                  {education.location}
                </div>
              </div>
              <div className={styles.educationName}>{education.name}</div>
              <ul className={styles.educationNotes}>
                {education.notes.map((note, noteIndex) => (
                  <li key={noteIndex} className={styles.educationNote}>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Honours and Certifications Section */}
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>Honours and Certificates</h2>
        <div className={styles.honoursContainer}>
          {HonoursData.map((honours, index) => (
            <div className={styles.honoursItem} key={index}>
              <div className={styles.honoursItemLeftBorder} />
              <div className={styles.honoursHeader}>
                <div className={styles.honoursIcon}>
                  <honours.icon />
                </div>
                <div className={styles.honoursRightHeader}>
                  <div className={styles.honoursItemTitle}>{honours.name}</div>
                  <div
                    className={`${styles.titleTag} ${styles.honoursDuration}`}
                  >
                    {honours.status}
                  </div>
                  <div
                    className={`${styles.titleTag} ${styles.honoursDuration}`}
                  >
                    {honours.date}
                  </div>
                </div>
              </div>
              <div className={styles.honoursDescription}>
                {honours.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className={styles.sectionContainer} id="experience">
        <h2 className={styles.sectionHeader}>Experience</h2>
        <div className={styles.experienceContainer}>
          {experienceData.map((experience, index) => (
            <div key={index} className={styles.experienceGrid}>
              <div />
              <div className="card">
                <div className={styles.experienceHeader}>
                  <div className={styles.experienceInnerHeader}>
                    <div className={styles.experienceTitle}>
                      {experience.position}
                    </div>
                    <div className={styles.experienceDuration}>
                      {experience.duration}
                    </div>
                  </div>
                  <div className={styles.experienceSubHeader}>
                    <div className={styles.experienceCompany}>
                      {experience.company}
                    </div>
                    <div className={styles.experienceLocation}>
                      {experience.location}
                    </div>
                  </div>
                </div>
                <div className={styles.experienceDescription}>
                  {experience.description}
                </div>
                <div className={styles.experienceTechList}>
                  {experience.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="skill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.workDot} />
            </div>
          ))}
          <div className={styles.verticalLine} />
        </div>
      </div>
    </div>
  );
};
