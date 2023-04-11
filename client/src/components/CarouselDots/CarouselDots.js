import React from "react";
import styles from "./CarouselDots.module.scss";
import PropTypes from "prop-types";

function CarouselDots({ carouselLength, setSlide, slideIndex }) {
  return (
    <div className={styles.CarouselDots}>
      {Array.from({ length: carouselLength }).map((item, index) => (
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
  );
}

CarouselDots.propTypes = {
  length: PropTypes.number,
};

export default CarouselDots;
