import React from "react";

import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rohan</h1>
        <p className={styles.description}>
        Hey, I'm Rohan! I make websites look cool and easy to use. 
        I like playing with colors, buttons, and animations to create awesome online experiences. 
        Let's make the web more fun and user-friendly together!
        </p>
        <a href="mailto:rohankatagi22@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={"./images/heroImage.png"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};