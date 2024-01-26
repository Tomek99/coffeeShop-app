import React from "react";
import styles from "./AdminReviewItemDetails.module.scss";

import AdminReviewStatus from "../AdminModeratorAttention/AdminReviewStatus/AdminReviewStatus";

function AdminReviewItemDetails({ item }) {
  return (
    <div className={styles.AdminReviewItemDetails}>
      <h1 className={styles.reviewItemHeader}>Review id: {item._id}</h1>

      <div>
        <b>Product id:</b>
        <span>{item.productId}</span>
      </div>
      <div>
        <b>Product name:</b>
        <span>{item.productName}</span>
      </div>
      <div>
        <b>User id:</b>
        <span>{item.userId}</span>
      </div>
      <div>
        <b>User Name:</b>
        <span>{item.userName}</span>
      </div>
    </div>
  );
}

export default AdminReviewItemDetails;
