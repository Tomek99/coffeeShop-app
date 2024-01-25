import React from "react";
import styles from "./AdminReviewItemDetailsExtended.module.scss";
import RatingsStars from "../../../RatingStars/RatingStars";

function AdminReviewItemDetailsExtended({ item }) {
  return (
    <div className={styles.AdminReviewItemDetailsExtended}>
      <span>Review date: {item.userReviewDate}</span>
      <span className={styles.ratingSpan}>
        Rate:
        <RatingsStars tab={0} rate={item.rate} size={"medium"} />
      </span>
      <p>Comment: {item.comment}</p>
    </div>
  );
}

export default AdminReviewItemDetailsExtended;
