import React from "react";
import styles from "./AboutSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import { Link } from "react-router-dom";
function AboutSection() {
  return (
    <div className={styles.AboutSection} id="aboutSection">
      <HeaderSection firstWord="about" secondWord="us" />
      <div className={styles.divRow}>
        <img src="/images/about-img.jpeg" alt="AboutImg" />
        <div className={styles.textArea}>
          <h1>What makes our coffee special?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
            Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
            Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi
            Ut Aliquip.
          </p>
          <br />
          <p>
            Lorfffem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <br />
          <Link to="about-us">Learn more</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
