import { React, useState, useEffect } from "react";
import styles from "./HomeSection.module.scss";
import dataHomeSlider from "../../data/dataHomeSlider.json";
import BtnSlider from "./BtnSlider/BtnSlider";
import Content from "./Content/Content";
import CarouselDots from "../CarouselDots/CarouselDots";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import { Pagination, Navigation } from "swiper";

function HomeSection() {
  return (
    <div className={styles.HomeSection}>
      <div className={styles.homeSectionCenter}>
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          className={`${"mySwiper"} ${styles.paginationLeftSide}`}
          style={{ height: "600px", width: "100%" }}
        >
          {dataHomeSlider.map((obj, index) => {
            return (
              <SwiperSlide key={index}>
                <Content obj={obj} slideIndex={index} />
                <img src={obj.url} alt={obj.title}></img>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSection;
