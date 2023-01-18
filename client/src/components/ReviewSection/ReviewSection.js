import React from "react";
import styles from "./ReviewSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import customerData from "../../data/customer.json";
import CustomerReview from "../CustomerReview/CustomerReview";
import PropTypes from "prop-types";

function ReviewSection({ isTrue }) {
  return (
    <div className={styles.ReviewSection} id="reviewSection">
      <HeaderSection firstWord="customer's" secondWord="review" />
      <div className={styles.customerReview}>
        {isTrue
          ? customerData
              .slice(0, 3)
              .map((item) => (
                <CustomerReview
                  id={item.id}
                  key={item.id}
                  imageUrl={item.imageUrl}
                  avatarUrl={item.avatarUrl}
                  name={item.name}
                  text={item.text}
                  isTrue={isTrue}
                  rate={item.rate}
                />
              ))
          : customerData.map((item) => (
              <CustomerReview
                id={item.id}
                key={item.id}
                imageUrl={item.imageUrl}
                avatarUrl={item.avatarUrl}
                name={item.name}
                text={item.text}
                isTrue={isTrue}
                rate={item.rate}
              />
            ))}
      </div>
    </div>
  );
}

ReviewSection.propTypes = {
  isTrue: PropTypes.bool,
};
export default ReviewSection;
