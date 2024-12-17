import React, { useContext } from "react";
import styles from "./ViewedProductsSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import SearchedProduct from "./SearchedProduct/SearchedProduct";
import { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Context } from "../../Contexts/Context";

function ViewedProductsSection() {
  const { viewedProducts } = useContext(Context);

  return viewedProducts.length ? (
    <div className={styles.historySection}>
      <HeaderSection firstWord={"Your"} secondWord={"history"} />
      <div className={styles.searchedProducts}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
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
          {viewedProducts.map((item, i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <SearchedProduct item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  ) : null;
}

export default ViewedProductsSection;
// const testingArray = [
//   {
//     id: "fafw9f9u29fu292f9",
//     productName: "test1",
//     productImg:
//       "https://res.cloudinary.com/dvoduabha/image/upload/v1679902515/coffee/lavazza/beans/9_CaffeCremaClassico500g_ndaszk.png",
//   },
//   {
//     id: "fafw9f9u29fu292f9",
//     productName: "test2",
//     productImg:
//       "https://res.cloudinary.com/dvoduabha/image/upload/v1679902515/coffee/lavazza/beans/9_CaffeCremaClassico500g_ndaszk.png",
//   },
//   {
//     id: "fafw9f9u29fu292f9",
//     productName: "test3",
//     productImg:
//       "https://res.cloudinary.com/dvoduabha/image/upload/v1679902515/coffee/lavazza/beans/9_CaffeCremaClassico500g_ndaszk.png",
//   },
//   {
//     id: "fafw9f9u29fu292f9",
//     productName: "test1",
//     productImg:
//       "https://res.cloudinary.com/dvoduabha/image/upload/v1679902515/coffee/lavazza/beans/9_CaffeCremaClassico500g_ndaszk.png",
//   },
//   {
//     id: "fafw9f9u29fu292f9",
//     productName: "test2",
//     productImg:
//       "https://res.cloudinary.com/dvoduabha/image/upload/v1679902515/coffee/lavazza/beans/9_CaffeCremaClassico500g_ndaszk.png",
//   },
//   {
//     id: "fafw9f9u29fu292f9",
//     productName: "test3",
//     productImg:
//       "https://res.cloudinary.com/dvoduabha/image/upload/v1679902515/coffee/lavazza/beans/9_CaffeCremaClassico500g_ndaszk.png",
//   },
//   {
//     id: "fafw9f9u29fu292f9",
//     productName: "test1",
//     productImg:
//       "https://res.cloudinary.com/dvoduabha/image/upload/v1679902515/coffee/lavazza/beans/9_CaffeCremaClassico500g_ndaszk.png",
//   },
//   {
//     id: "fafw9f9u29fu292f9",
//     productName: "test2",
//     productImg:
//       "https://res.cloudinary.com/dvoduabha/image/upload/v1679902515/coffee/lavazza/beans/9_CaffeCremaClassico500g_ndaszk.png",
//   },
//   {
//     id: "fafw9f9u29fu292f9",
//     productName: "test3",
//     productImg:
//       "https://res.cloudinary.com/dvoduabha/image/upload/v1679902515/coffee/lavazza/beans/9_CaffeCremaClassico500g_ndaszk.png",
//   },
// ];
