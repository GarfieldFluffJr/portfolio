import { NavLink } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import styles from "../../styles/modules/resumePage.module.css";

export const ResumeHome = () => {
  const screenWidth = window.innerWidth;
  const zoom = screenWidth < 550 ? "10" : "page-width";

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <h1 className={styles.title}>Resume</h1>
          <hr className={styles.titleHR} />
          <div className={styles.titleDesc}>Louie Yin's Resume</div>
        </div>
        <div className={styles.resumeContainer}>
          <iframe
            src={`/assets/Louie_Yin_Resume.pdf#page=1&zoom=${zoom}`}
            width="100%"
            height="100%"
          >
            This browser does not support PDFs. Please download the PDF to view
            it:
            <a href="/path/to/your.pdf">Download PDF</a>
          </iframe>
        </div>

        <div className={styles.resumeFooterText}>
          Download my resume:{" "}
          <a href="/assets/Louie_Yin_Resume.pdf" className="resume-link">
            here
          </a>
        </div>

        <NavLink to="/" className="big-black-button">
          <FiArrowLeft size={16} />
          <span>Back to Home</span>
        </NavLink>
      </div>
    </div>
  );
};
