import React from "react";
import styles from "./CarouselItem.module.scss";

function CarouselItem({ children, width }) {
  return (
    <div className={styles.carouselItem} styles={{ width: width }}>
      {children}
    </div>
  );
}

export default CarouselItem;
