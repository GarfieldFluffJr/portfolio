import { NavLink } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import styles from "../../../styles/modules/swimPage.module.css";

import { UW_First_Year } from "../Data/photoAlbum";

export const SwimFirstYearHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>UW First Year (2024-2025)</h1>
        <hr className={styles.titleHR} />
      </div>

      <NavLink to="/swim#photos" className={styles.photoAlbumsButton}>
        <FiArrowLeft size={16} />
        <span>Back to Swim Page</span>
      </NavLink>

      <div className={styles.albumContainer}>
        {UW_First_Year.photos.map((photo, index) => (
          <div key={index} className={styles.photoCard}>
            <img src={photo} alt={`UW First Year - ${index + 1}`} width={350} />
          </div>
        ))}
      </div>
    </div>
  );
};
