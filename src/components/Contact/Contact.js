import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"./images/emailIcon.png"} alt="Email icon" />
          <a href="rohankatagi22@email.com">rohankatagi22@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"./images/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rohan-katagi">linkedin.com/rohan-katagi</a>
        </li>
        <li className={styles.link}>
          <img src={"./images/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/ronnietorohan">github.com/ronnietorohan</a>
        </li>
      </ul>
    </footer>
  );
};