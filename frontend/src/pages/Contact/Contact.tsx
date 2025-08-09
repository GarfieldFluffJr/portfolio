import styles from "../../styles/modules/contactPage.module.css";

export const ContactHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>Contact Me</h1>
        <hr className={styles.titleHR} />
        <div className={styles.titleDesc}>Get in touch with me!</div>
      </div>
    </div>
  );
};
