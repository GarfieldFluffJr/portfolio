import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiX } from "react-icons/fi";

import styles from "../../styles/modules/aboutPage.module.css";
import { educationData } from "./Data/educationData";
import { HonoursData, type Honours } from "./Data/honoursData";
import { experienceData } from "./Data/experienceData";

export const AboutHome = () => {
  const location = useLocation();
  const [selectedHonours, setSelectedHonours] = useState<Honours | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (honours: Honours) => {
    setSelectedHonours(honours);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHonours(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>About Me</h1>
        <hr className={styles.titleHR} />
        <div className={styles.titleDesc}>
          Waterloo Software Engineer x Varsity Athlete
        </div>
        <div className={styles.titleTagsContainer}>
          <div className="grey-caption">Full Stack Development</div>
          <div className="grey-caption">UI/UX Design</div>
          <div className="grey-caption">AI/ML</div>
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
                  <div className="grey-caption">{education.duration}</div>
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
            <div
              className={styles.honoursItem}
              key={index}
              onClick={() => openModal(honours)}
            >
              <div className={styles.honoursItemLeftBorder} />
              <div className={styles.honoursHeader}>
                <div className={styles.honoursIcon}>
                  <honours.icon />
                </div>
                <div className={styles.honoursRightHeader}>
                  <div className={styles.honoursItemTitle}>{honours.name}</div>
                  <div className="grey-caption">{honours.status}</div>
                  <div className="grey-caption">{honours.date}</div>
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
                    <div className="grey-caption">{experience.duration}</div>
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

      {/* Modal */}
      {isModalOpen && selectedHonours && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{selectedHonours.name}</h2>
              <button
                className={styles.modalCloseButton}
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className={styles.modalBody}>
              {selectedHonours.image && (
                <div className={styles.modalImageContainer}>
                  <img
                    src={selectedHonours.image}
                    alt={selectedHonours.name}
                    className={styles.modalImage}
                  />
                </div>
              )}

              <hr className={styles.modalDivider} />

              <div className={styles.modalInfo}>
                <span className="grey-caption">{selectedHonours.status}</span>
                <span className="grey-caption">{selectedHonours.date}</span>
              </div>

              <div className={styles.modalDescription}>
                <h3 className={styles.modalDescriptionTitle}>Description</h3>
                <p className={styles.modalDescriptionText}>
                  {selectedHonours.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
