import { React, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./HomeSection.module.scss";
import Photos from "../../data/photos.json";

function HomeSection() {
  const iconStyles = {
    color: "white",
    fontSize: "1.5em",
    width: "50px",
    height: "50px",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const externalImage = `/images/home-img${currentIndex}.jpeg`;
  const next = () => {
    setCurrentIndex((currentIndex + 1) % Photos.length);
  };
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + Photos.length) % Photos.length);
  };

  return (
    <div
      className={styles.HomeSection}
      style={{
        backgroundImage: `url(${externalImage})`,
      }}
    >
      {/* <img src={`${externalImage}`} alt="fafa" /> */}
      <div className={styles.btnArrow} onClick={prev}>
        <SlArrowLeft style={iconStyles} />
      </div>
      <div className={styles.btnArrow} onClick={next}>
        <SlArrowRight style={iconStyles} />
      </div>

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
