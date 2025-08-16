import styles from "../../styles/modules/swimPage.module.css";

export const SwimHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>My Swim Career</h1>
        <hr className={styles.titleHR} />
        <div className={styles.titleDesc}>
          Welcome to my swim page! Here, you can learn all about my personal
          swim journey along with all of my achievements and milestones.
        </div>
      </div>

      {/* Content will go here */}
      <div>Swim content coming soon...</div>
    </div>
  );
};
