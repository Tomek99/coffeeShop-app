import React from "react";
import styles from "./ReviewSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import Customer from "../../data/customer.json";
import CustomerReview from "../CustomerReview/CustomerReview";

function ReviewSection(props) {
  return (
    <div className={styles.ReviewSection} id="reviewSection">
      <HeaderSection firstWord="customer's" secondWord="review" />
      <div className={styles.customerReview}>
        {props.isTrue
          ? Customer.slice(0, 3).map((item) => (
              <CustomerReview
                id={item.id}
                key={item.id}
                imageUrl={item.imageUrl}
                avatarUrl={item.avatarUrl}
                name={item.name}
                text={item.text}
                isTrue={props.isTrue}
              />
            ))
          : Customer.map((item) => (
              <CustomerReview
                id={item.id}
                key={item.id}
                imageUrl={item.imageUrl}
                avatarUrl={item.avatarUrl}
                name={item.name}
                text={item.text}
                isTrue={props.isTrue}
              />
            ))}
      </div>
    </div>
  );
}

export default ReviewSection;
