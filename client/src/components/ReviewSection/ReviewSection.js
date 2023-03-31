import React, { useEffect, useState } from "react";
import styles from "./ReviewSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import customerData from "../../data/customer.json";
import CustomerReview from "../CustomerReview/CustomerReview";
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
    }, 6000);

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
      newIndex = 7;
    } else if (newIndex >= 8) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }

  return (
    <div
      className={styles.ReviewSection}
      id="reviewSection"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <HeaderSection firstWord="customer's" secondWord="review" />
      <div className={styles.wrapperDiv}>
        <div className={styles.carouselDiv} {...handlers}>
          <div
            className={styles.innerDiv}
            style={{ transform: `translateX(-${activeIndex * 6.5}%)` }}
          >
            {customerData.map((item, index) => (
              <CustomerReview key={index} item={item} />
            ))}
          </div>
        </div>
        <BtnLeft activeIndex={activeIndex} updateIndex={updateIndex} />
        <BtnRight activeIndex={activeIndex} updateIndex={updateIndex} />
      </div>
    </div>
  );
}

ReviewSection.propTypes = {
  isTrue: PropTypes.bool,
};
export default ReviewSection;
{
  /* <button
onClick={() => {
  updateIndex(activeIndex - 1);
}}
></button>
<button
onClick={() => {
  updateIndex(activeIndex + 1);
}}
>
Prawo
</button> */
}
