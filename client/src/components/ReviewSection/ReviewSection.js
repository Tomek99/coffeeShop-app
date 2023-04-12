import React, { useEffect, useState, useRef } from "react";
import styles from "./ReviewSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import customerData from "../../data/customer.json";
import CustomerReview from "./CustomerReview/CustomerReview";
import { useSwipeable } from "react-swipeable";
import PropTypes from "prop-types";
import BtnLeft from "../Buttons/BtnLeft/BtnLeft";
import BtnRight from "../Buttons/BtnRight/BtnRight";

function ReviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 12000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = displayElements() - 1;
    } else if (newIndex >= displayElements()) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }

  const [width, setWidth] = useState();
  const carouselRef = useRef(null);

  function displayElements() {
    if (width >= 1366) {
      return 3;
    } else if (width >= 1024) {
      return 4;
    } else if (width >= 640) {
      return 6;
    } else if (width >= 0) {
      return 12;
    }
  }

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

  useEffect(() => {
    if (width) {
      setActiveIndex(0);
    }
  }, [width]);

  return (
    <div
      className={styles.ReviewSection}
      id="reviewSection"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      {...handlers}
    >
      <HeaderSection firstWord="customer's" secondWord="review" />
      <div className={styles.wrapperDiv}>
        <div className={styles.carouselDiv} ref={carouselRef}>
          <div
            className={styles.innerDiv}
            style={{ transform: `translateX(-${activeIndex * width}px)` }}
          >
            {customerData.map((item, index) => (
              <CustomerReview key={index} item={item} />
            ))}
          </div>
        </div>
        <div className={styles.indicators}>
          <BtnLeft activeIndex={activeIndex} updateIndex={updateIndex} />
          <BtnRight activeIndex={activeIndex} updateIndex={updateIndex} />
        </div>
      </div>
    </div>
  );
}

ReviewSection.propTypes = {
  isTrue: PropTypes.bool,
};
export default ReviewSection;
