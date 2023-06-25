import React from "react";
import styles from "./CarouselArticle.module.scss";
import { AiOutlineCalendar, AiOutlineUserAdd } from "react-icons/ai";

function CarouselArticle() {
  return (
    <div className={styles.CarouselArticle}>
      {/* <img
        className={styles.articleImg}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
        alt="articleImg"
      /> */}
      <div className={styles.articleContent}>
        <span className={styles.spanContent}>
          {" "}
          <AiOutlineCalendar size={15} />
          Oct 08, 2023
        </span>
        <h1> 5 reasons why you should drink coffee in the morning</h1>
        <span className={styles.spanContent}>
          {" "}
          <AiOutlineUserAdd size={15} />
          Adam Nowak
        </span>
      </div>
    </div>
  );
}

export default CarouselArticle;
