import React from "react";
import styles from "./ReviewSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import Customer from "../../data/customer.json";
import CustomerReview from "../CustomerReview/CustomerReview";

function ReviewSection() {
  return (
    <div className={styles.ReviewSection} id="reviewSection">
      <HeaderSection firstWord="customer's" secondWord="review" />
      <div className={styles.customerReview}>
        {Customer.slice(0, 3).map((item) => (
          <CustomerReview
            id={item.id}
            imageUrl={item.imageUrl}
            avatarUrl={item.avatarUrl}
            name={item.name}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
