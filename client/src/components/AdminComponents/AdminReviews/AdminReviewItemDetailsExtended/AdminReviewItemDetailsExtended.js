import React from "react";
import styles from "./AdminReviewItemDetailsExtended.module.scss";
import RatingsStars from "../../../RatingStars/RatingStars";

function AdminReviewItemDetailsExtended({ item }) {
  return (
    <div className={styles.AdminReviewItemDetailsExtended}>
      <div>
        <b>Review date: </b>
        <span>{item.userReviewDate}</span>
      </div>
      <div className={styles.ratingSpan}>
        <b>Rate:</b>
        <RatingsStars tab={0} rate={item.rate} size={"medium"} />
      </div>
      <div>
        <b>Comment: </b>
        <p>{item.comment}</p>
      </div>
    </div>
  );
}

export default AdminReviewItemDetailsExtended;
