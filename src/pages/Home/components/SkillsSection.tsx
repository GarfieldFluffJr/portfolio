import styles from "../../../styles/modules/homePage.module.css";

import { FiCode, FiDatabase, FiMonitor } from "react-icons/fi";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMarkdown,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiAstro,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSocketdotio,
  SiFlask,
  SiGit,
  SiLinux,
  SiGithub,
  SiDocker,
  SiFigma,
  SiVercel,
  SiHeroku,
  SiAutocad,
  SiRaspberrypi,
  SiOpenai,
} from "react-icons/si";

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
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiPython size={14} />
                    <span>Python</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiC size={14} />
                    <span>C</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiCplusplus size={14} />
                    <span>C++</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiHtml5 size={14} />
                    <span>HTML5</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiCss3 size={14} />
                    <span>CSS3</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiMarkdown size={14} />
                    <span>Markdown</span>
                  </div>
                </div>
              </div>
              <div className={styles.skillsAllWrapper}>
                <div className={styles.skillsAllHeader}>
                  Frameworks and Libraries:
                </div>
                <div className={styles.skillsAllSkillsWrapper}>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiReact size={14} />
                    <span>React</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiNodedotjs size={14} />
                    <span>Node.js</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiNextdotjs size={14} />
                    <span>Next.js</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiExpress size={14} />
                    <span>Express.js</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiAstro size={14} />
                    <span>Astro</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiTailwindcss size={14} />
                    <span>Tailwind.css</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiMysql size={14} />
                    <span>MySQL</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiPostgresql size={14} />
                    <span>PostgreSQL</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiMongodb size={14} />
                    <span>MongoDB</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiSocketdotio size={14} />
                    <span>Socket.io</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiFlask size={14} />
                    <span>Flask</span>
                  </div>
                </div>
              </div>
              <div className={styles.skillsAllWrapper}>
                <div className={styles.skillsAllHeader}>
                  Tools and Platforms:
                </div>
                <div className={styles.skillsAllSkillsWrapper}>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiGit size={14} />
                    <span>Git</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiLinux size={14} />
                    <span>Linux</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiGithub size={14} />
                    <span>GitHub</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiDocker size={14} />
                    <span>Docker</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiFigma size={14} />
                    <span>Figma</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiVercel size={14} />
                    <span>Vercel</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiHeroku size={14} />
                    <span>Heroku</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiAutocad size={14} />
                    <span>AutoCAD</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiRaspberrypi size={14} />
                    <span>Raspberry Pi</span>
                  </div>
                  <div className={`${styles.skillsWrapper} skill`}>
                    <SiOpenai size={14} />
                    <span>OpenAI</span>
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
