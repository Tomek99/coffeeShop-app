import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./ProductsSection.module.scss";
import LatestProduct from "../LatestProduct/LatestProduct";
import HeaderSection from "../HeaderSection/HeaderSection";
import { Context } from "../../Contexts/Context";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { useSwipeable } from "react-swipeable";
import CarouselDots from "../CarouselDots/CarouselDots";
import BtnRight from "../Buttons/BtnRight/BtnRight";
import BtnLeft from "../Buttons/BtnLeft/BtnLeft";

function ProductsSection() {
  const { products, loading } = useContext(Context);
  const selectedProducts = products.slice(0, 8);

  const [activeIndex, setActiveIndex] = useState(0);

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = displayElements() - 1;
    } else if (newIndex >= displayElements()) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }

  const [width, setWidth] = useState(0);
  const carouselRef = useRef(0);

  function displayElements() {
    if (width <= 520) {
      return 8;
    } else if (width <= 1240) {
      return 4;
    } else {
      return 2;
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(carouselRef.current.offsetWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.ProductsSection} id="productsSection">
      <HeaderSection firstWord="latest" secondWord="products" />
      <div className={styles.wrapperDiv} {...handlers}>
        {loading ? (
          <LoaderSpinner loading={loading} />
        ) : (
          <div className={styles.carouselDiv} ref={carouselRef}>
            <div
              className={styles.innerDiv}
              style={{
                transform: `translateX(-${activeIndex * width}px)`,
              }}
            >
              {selectedProducts.map((item, index) => (
                <LatestProduct key={index} item={item} isHome={true} />
              ))}
            </div>
            <div className={styles.indicators}>
              <BtnLeft activeIndex={activeIndex} updateIndex={updateIndex} />
              <BtnRight activeIndex={activeIndex} updateIndex={updateIndex} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ProductsSection;
