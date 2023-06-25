import React from "react";
import styles from "./CarouselArticles.module.scss";
import CarouselArticle from "./CarouselArticle/CarouselArticle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

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
        {Array.from({ length: 8 }, (e, i) => (
          <SwiperSlide key={i} style={{ width: "auto" }}>
            {" "}
            <CarouselArticle />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselArticles;
