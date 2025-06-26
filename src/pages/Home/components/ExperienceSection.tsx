import styles from "../../../styles/modules/homePage.module.css";

type Experience = {
  company: string;
  title: string;
  duration: string;
  logo: string;
  tech: string[];
  location: string;
};

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "Levanta Labs",
      title: "Software Engineer Intern",
      duration: "May 2025 - Present",
      logo: "/images/levanta-labs.png",
      tech: [
        "React",
        "TypeScript",
        "Express.js",
        "Docker",
        "Tailwind.css",
        "MySQL",
        "Astro",
      ],
      location: "Toronto, ON, CA",
    },
    {
      company: "City of Toronto",
      title: "Lifeguard and Swim Instructor",
      duration: "Apr 2022 - Aug 2024",
      logo: "/images/city-of-toronto.png",
      tech: [
        "National Lifeguard",
        "Standard First-Aid",
        "CPR-C",
        "Instructor",
        "Patron Rapport",
      ],
      location: "Toronto, ON, CA",
    },
  ];

  return (
    <div className={styles.sectionInnerContainer}>
      <h1 className={styles.sectionHeader}>Highlighted Work Experience</h1>
      <div className={styles.sectionDescriptionContainer}>
        <hr className={styles.sectionHeaderHr} />
        <div className={styles.sectionDescription}>
          Some of my most memorable and impactful experiences.
        </div>
      </div>
      <div className={styles.workTimeline}>
        {experiences.map((exp, i) => (
          <div key={i} className={styles.workItem}>
            <div className={styles.workGrid}>
              <div className={`${styles.workLogo} card`}>
                <img src={exp.logo} alt={`${exp.company} logo`} width={80} />
              </div>
              <div className={`card`}>
                <div className={styles.workHeaderWrapper}>
                  <h3 className={styles.workTitle}>{exp.title}</h3>
                  <div className="grey-caption">{exp.duration}</div>
                </div>
                <div className={styles.workSubHeaderWrapper}>
                  <div className={styles.workCompany}>{exp.company}</div>
                  <div className={styles.workLocation}>{exp.location}</div>
                </div>

                <div className={styles.workTechList}>
                  {exp.tech.map((tech, j) => (
                    <span key={j} className="skill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.workDot} />
          </div>
        ))}
        <div className={styles.verticalLine} />
      </div>
    </div>
  );
}
