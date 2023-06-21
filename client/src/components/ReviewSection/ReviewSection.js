import React, { useEffect, useState, useRef } from "react";
import styles from "./ReviewSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import customerData from "../../data/customer.json";
import CustomerReview from "./CustomerReview/CustomerReview";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

function ReviewSection() {
  return (
    <div className={styles.ReviewSection}>
      <HeaderSection firstWord="customer's" secondWord="review" />
      <div className={styles.reviewSectionCarousel}>
        <Swiper
          slidesPerView={"auto"}
          grabCursor={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          style={{ padding: "2px" }}
        >
          {customerData.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <CustomerReview key={index} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

ReviewSection.propTypes = {
  isTrue: PropTypes.bool,
};
export default ReviewSection;

// import required modules
