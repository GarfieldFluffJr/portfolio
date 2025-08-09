import { FiSend } from "react-icons/fi";

import styles from "../../styles/modules/contactPage.module.css";

export const ContactHome = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>Contact Me</h1>
        <hr className={styles.titleHR} />
        <div className={styles.titleDesc}>Get in touch with me!</div>
      </div>

      <form onSubmit={handleSubmit} className={`card ${styles.formContainer}`}>
        <div className={styles.formSubContainer}>
          <div className={styles.formItem}>
            <label>Name</label>
          </div>
          <div className={styles.formItem}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className={styles.formText}
            />
          </div>
        </div>
        <div className={styles.formSubContainer}>
          <div className={styles.formItem}>
            <label>Email</label>
          </div>
          <div className={styles.formItem}>
            <input
              type="text"
              name="email"
              placeholder="you@example.com"
              required
              className={styles.formText}
            />
          </div>
        </div>
        <div className={styles.formSubContainer}>
          <div className={styles.formItem}>
            <label>Message</label>
          </div>
          <div className={styles.formItem}>
            <textarea
              name="message"
              placeholder="Your message"
              required
              className={`${styles.formText} ${styles.formTextarea}`}
              rows={5}
            />
          </div>
        </div>
        <button
          type="submit"
          className={`${styles.formItem} ${styles.formSubmitBtn}`}
        >
          Send Message <FiSend />
        </button>
      </form>
    </div>
  );
};
