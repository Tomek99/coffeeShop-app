import { React, useState, useEffect } from "react";
import styles from "./HomeSection.module.scss";
import dataHomeSlider from "../../data/dataHomeSlider.json";
import BtnSlider from "./BtnSlider/BtnSlider";
import Content from "./Content/Content";

function HomeSection() {
  const [slideIndex, setSlideIndex] = useState(1);

  function nextSlide() {
    if (slideIndex !== dataHomeSlider.length) setSlideIndex(slideIndex + 1);
    else if (slideIndex === dataHomeSlider.length) setSlideIndex(1);
  }

  function preSlide() {
    if (slideIndex !== 1) setSlideIndex(slideIndex - 1);
    else if (slideIndex === 1) setSlideIndex(dataHomeSlider.length);
  }

  function setSlide(number) {
    setSlideIndex(number);
  }

  useEffect(() => {
    let slider = setInterval(() => {
      if (slideIndex === 3) {
        setSlide(1);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }, 6000);
    return () => clearInterval(slider);
  }, [slideIndex]);

  return (
    <div className={styles.HomeSection}>
      <div>
        {dataHomeSlider.map((obj, index) => {
          return (
            <div
              key={index}
              className={
                slideIndex === index + 1
                  ? `${styles.slider} ${styles.activeAnim}`
                  : styles.slider
              }
            >
              <Content obj={obj} slideIndex={slideIndex} />
              <img src={obj.url} alt={obj.title}></img>
            </div>
          );
        })}
      </div>

      <BtnSlider handlerBtn={preSlide} arrowDirect={"left"} />
      <BtnSlider handlerBtn={nextSlide} arrowDirect={"right"} />

      <div className={styles.containerDots}>
        {Array.from({ length: dataHomeSlider.length }).map((item, index) => (
          <span
            className={
              index + 1 === slideIndex
                ? `${styles.spanDot} ${styles.activeDot}`
                : styles.spanDot
            }
            key={index}
            onClick={() => setSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HomeSection;
