import React from "react";
import styles from "./CarouselArticles.module.scss";
import CarouselArticle from "./CarouselArticle/CarouselArticle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules

function CarouselArticles() {
  return (
    <div className={styles.CarouselArticles}>
      <Swiper
        slidesPerView={"auto"}
        grabCursor={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "auto" }}>
          {" "}
          <CarouselArticle />
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          {" "}
          <CarouselArticle />
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          {" "}
          <CarouselArticle />
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          {" "}
          <CarouselArticle />
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          {" "}
          <CarouselArticle />
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          {" "}
          <CarouselArticle />
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          {" "}
          <CarouselArticle />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselArticles;
