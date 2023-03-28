import React from "react";
import styles from "./ReviewSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import customerData from "../../data/customer.json";
import CustomerReview from "../CustomerReview/CustomerReview";
import PropTypes from "prop-types";

function ReviewSection() {
  return (
    <div className={styles.ReviewSection} id="reviewSection">
      <HeaderSection firstWord="customer's" secondWord="review" />
      <div className={styles.customerReview}>
        {customerData.slice(0, 4).map((item, index) => (
          <CustomerReview key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

ReviewSection.propTypes = {
  isTrue: PropTypes.bool,
};
export default ReviewSection;
