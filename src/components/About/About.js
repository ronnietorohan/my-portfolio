import React from "react";

import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={"./images/aboutImage.png"}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={"./images/uiIcon.png"} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Hey there! I'm Rohan. I got into web development out of curiosity, and I've been hooked ever since. 
              I started with simple stuff like HTML and CSS, then moved on to JavaScript for making things interactive. 
              I've also played around with React, a cool framework for building dynamic interfaces.
               And I've dipped my toes into MySQL for handling data on the backend. 
              It's been a fun journey of learning and trying new things, and I'm excited to see what comes next!
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};