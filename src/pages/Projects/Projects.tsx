import { useState } from "react";
import styles from "../../styles/modules/projectsPage.module.css";
import { projectsData } from "./projectsData";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

type Project = {
  name: string;
  description: string;
  githubLink: string;
  liveLink: string;
  techStack: string[];
};

export const ProjectsHome = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>My Projects</h1>
        <hr className={styles.titleHR} />
        <div className={styles.titleDesc}>
          A collection of all my projects. Click on each one to learn more!
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            onClick={() => openModal(project)}
          >
            <div className={styles.projectHeader}>
              <h3 className={styles.projectTitle}>{project.name}</h3>
              {(project.githubLink || project.liveLink) && (
                <div className={styles.projectLinks}>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label="View GitHub repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={16} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label="View live project"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>

            <p className={styles.projectDescription}>{project.description}</p>

            <hr className={styles.projectDivider} />

            <div className={styles.techStackContainer}>
              {project.techStack.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{selectedProject.name}</h2>
              <button
                className={styles.modalCloseButton}
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>
                {selectedProject.description}
              </p>

              <div className={styles.modalTechStack}>
                <h3 className={styles.modalTechTitle}>Technologies Used:</h3>
                <div className={styles.modalTechContainer}>
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <hr className={styles.modalDivider} />

              <div className={styles.modalLinks}>
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalLinkButton}
                  >
                    <FiGithub size={20} />
                    View on GitHub
                  </a>
                )}
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalLinkButton}
                  >
                    <FiExternalLink size={20} />
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
