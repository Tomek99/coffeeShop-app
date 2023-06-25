import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./ProductsSection.module.scss";
import LatestProduct from "../LatestProduct/LatestProduct";
import HeaderSection from "../HeaderSection/HeaderSection";
import { Context } from "../../Contexts/Context";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Autoplay } from "swiper";

function ProductsSection() {
  const { products, loading } = useContext(Context);
  const selectedProducts = products.slice(0, 8);

  return (
    <div className={styles.ProductsSection} id="productsSection">
      <HeaderSection firstWord="latest" secondWord="products" />
      <div className={styles.wrapperDiv}>
        {loading ? (
          <LoaderSpinner loading={loading} />
        ) : (
          <div className={styles.productsSectionCarousel}>
            <Swiper
              slidesPerView={"auto"}
              grabCursor={true}
              spaceBetween={32}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              autoplay={{
                delay: 10000,
                disableOnInteraction: true,
              }}
              className="mySwiper"
              style={{ padding: "2px" }}
            >
              {selectedProducts.map((item, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <LatestProduct key={index} item={item} isHome={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsSection;
