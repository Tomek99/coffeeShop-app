import React from "react";
import styles from "./HomeSection.module.scss";

function HomeSection() {
  return (
    <div className={styles.HomeSection} id="homeSection">
      <div className={styles.textAreaHome}>
        <header>
          fresh coffee in <br />
          the morning
        </header>
        <p>
          Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sit,
          <br /> Consequuntur? Et Veritatis Velit Nesciunt Odio!
        </p>
        <a href="#menuSection">Get It Now</a>
      </div>
    </div>
  );
}

export default HomeSection;
