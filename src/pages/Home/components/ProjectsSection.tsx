import { NavLink } from "react-router-dom";

import { FiPlay, FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

import styles from "../../../styles/modules/homePage.module.css";

type Project = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  demoLink: string;
  gitHubLink: string;
  liveLink: string;
};

export default function ProjectsSection() {
  // For the links, put "" to make element disappear
  const projects: Project[] = [
    {
      name: "Cook Buddy",
      description:
        "A friendly, interactive AI assistant who not only cooks alongside you but adapts recipes to fit whatever ingredients you have on hand. ",
      image: "/images/cook-buddy.png",
      tech: [
        "Python",
        "Raspberry Pi",
        "OpenAI",
        "LLaMa 3.1",
        "GCP",
        "HTML/CSS/JS",
        "Unsloth",
        "Hugging Face",
      ],
      demoLink: "https://www.youtube.com/watch?v=q-WvIjfFc7Q&ab_channel=Louie",
      gitHubLink: "https://github.com/GarfieldFluffJr/Cook-Buddy",
      liveLink: "",
    },
    {
      name: "Portfolio",
      description: "My own portfolio site! Made with ❤️",
      image: "/images/portfolio.png",
      tech: ["React", "TypeScript", "Tailwind.css", "Framer-Motion"],
      demoLink: "",
      gitHubLink: "https://github.com/GarfieldFluffJr/portfolio",
      liveLink: "https://www.louiefatooey.space",
    },
  ];
  return (
    <div className={styles.sectionInnerContainer}>
      <h1 className={styles.sectionHeader}>Featured Projects</h1>
      <div className={styles.sectionDescriptionContainer}>
        <hr className={styles.sectionHeaderHr} />
        <div className={styles.sectionDescription}>
          A few of my favourite projects. Go to my projects page to see all my
          work!
        </div>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((proj, i) => (
          <div key={i} className={styles.projectsCard}>
            {proj.demoLink !== "" ? (
              <div className={styles.projectsImage}>
                <img src={proj.image} alt={`${proj.name} image`} width={400} />

                <a href={proj.demoLink} target="_blank">
                  <div className={styles.projectsImageLink}>
                    <FiPlay size={30} />
                    {""}
                  </div>
                </a>
              </div>
            ) : (
              <div className={styles.projectsImageNoLink}>
                <img src={proj.image} alt={`${proj.name} image`} width={400} />
              </div>
            )}
            <div className={styles.projectsCardText}>
              <div className={styles.projectsCardName}>{proj.name}</div>
              <div className={styles.projectsCardDescriptionContainer}>
                <div className={styles.projectsCardDescription}>
                  {proj.description}
                </div>
                <div className={styles.projectsSkillsContainer}>
                  {proj.tech.map((cur, i) => (
                    <span key={i} className="grey-caption">
                      {cur}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.projectsCardActions}>
                {proj.demoLink !== "" && (
                  <a
                    className="small-black-button"
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiPlay size={12} />
                    <span>Watch Demo</span>
                  </a>
                )}
                {proj.gitHubLink !== "" && (
                  <a
                    className="small-transparent-button"
                    href={proj.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={12} />
                    <span>GitHub</span>
                  </a>
                )}
                {proj.liveLink !== "" && (
                  <a
                    className="small-transparent-button"
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={12} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
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
