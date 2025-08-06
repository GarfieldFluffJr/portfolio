import styles from "../../styles/modules/aboutPage.module.css";
import { educationData } from "./Data/educationData";

export const AboutHome = () => {
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

      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>Education</h2>
        <div className={styles.educationContainer}>
          {educationData.map((education) => (
            <div className="card">
              <div className={styles.educationHeader}>
                <div className={styles.educationInnerHeader}>
                  <div className={styles.educationDuration}>
                    {education.duration}
                  </div>
                  <div className={styles.educationDegree}>{education.degree}</div>
                </div>
                <div>{education.location}</div>
              </div>
              <div className={styles.educationName}>{education.name}</div>
              <ul>
                {education.notes.map((note) => (
                  <li>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
