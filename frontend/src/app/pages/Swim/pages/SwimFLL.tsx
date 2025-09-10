import { NavLink } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import styles from "../../../styles/modules/swimPage.module.css";

import { Fort_Lauderdale_2025 } from "../Data/photoAlbum";

export const SwimFLLHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>Fort Lauderdale 2025</h1>
        <hr className={styles.titleHR} />
      </div>

      <NavLink to="/swim#photos" className={styles.photoAlbumsButton}>
        <FiArrowLeft size={16} />
        <span>Back to Swim Page</span>
      </NavLink>

      <div className={styles.albumContainer}>
        {Fort_Lauderdale_2025.photos.map((photo, index) => (
          <div key={index} className={styles.photoCard}>
            <img
              src={photo}
              alt={`Fort Lauderdale 2025 - ${index + 1}`}
              width={350}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
