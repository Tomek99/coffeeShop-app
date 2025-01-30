import React, { useRef } from "react";
import "./BlogsSection.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import LatestBlog from "./LatestBlog/LatestBlog";
import blogs from "../../data/blog.json";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

function BlogsSection() {
  return (
    <div className="blogsSection" id="blogsSection">
      <HeaderSection firstWord="our" secondWord="news" />
      <div className="blogsCarousel">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {blogs.map((item, i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <LatestBlog item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
BlogsSection.propTypes = {
  isTrue: PropTypes.bool,
};

export default BlogsSection;
