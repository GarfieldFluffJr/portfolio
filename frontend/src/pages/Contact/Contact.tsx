import { useState, useRef } from "react";

import { FiSend, FiCheckCircle } from "react-icons/fi";

import styles from "../../styles/modules/contactPage.module.css";

export const ContactHome = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    const form = formRef.current;
    if (!form) return;

    const newErrors: { [key: string]: string } = {};

    form
      .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        "input, textarea"
      )
      .forEach((input) => {
        if (!input.checkValidity()) {
          let message = "Invalid input value";

          if (input.validity.valueMissing) {
            message = `${
              input.name[0].toUpperCase() + input.name.slice(1)
            } is required`;
          } else if (input.validity.typeMismatch) {
            if (input.type === "email") {
              message = "Please enter a valid email address";
            }
          } else if (input.validity.patternMismatch) {
            message = "Please match the requested format";
          }

          newErrors[input.name] = message;
        }
      });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted");
      setIsSubmitted(true);
      // form.submit();
    }
  };

  const SuccessCard = () => (
    <div className={`card ${styles.successCard}`}>
      <div className={styles.successContent}>
        <FiSend className={styles.successIcon} />
        <h2 className={styles.successTitle}>Message Sent Successfully!</h2>
        <p className={styles.successMessage}>
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className={styles.successButton}
        >
          Send Another Message
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>Contact Me</h1>
        <hr className={styles.titleHR} />
        <div className={styles.titleDesc}>Get in touch with me!</div>
      </div>

      {isSubmitted ? (
        <SuccessCard />
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`card ${styles.formContainer}`}
          ref={formRef}
          noValidate={true}
        >
          <div className={styles.formSubContainer}>
            <div className={styles.formItem}>
              <label>Name</label>
              <div className={styles.formError}>{errors.name}</div>
            </div>
            <div className={styles.formItem}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className={styles.formText}
                required
              />
            </div>
          </div>
          <div className={styles.formSubContainer}>
            <div className={styles.formItem}>
              <label>Email</label>
              <div className={styles.formError}>{errors.email}</div>
            </div>
            <div className={styles.formItem}>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className={styles.formText}
                required
              />
            </div>
          </div>
          <div className={styles.formSubContainer}>
            <div className={styles.formItem}>
              <label>Message</label>
              <div className={styles.formError}>{errors.message}</div>
            </div>
            <div className={styles.formItem}>
              <textarea
                name="message"
                placeholder="Your message"
                className={`${styles.formText} ${styles.formTextarea}`}
                rows={5}
                required
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
      )}
    </div>
  );
};
