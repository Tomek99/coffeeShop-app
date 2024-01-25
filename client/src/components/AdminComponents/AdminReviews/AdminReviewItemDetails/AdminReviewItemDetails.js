import React from "react";
import styles from "./AdminReviewItemDetails.module.scss";

import AdminReviewStatus from "./AdminReviewStatus/AdminReviewStatus";

function AdminReviewItemDetails({ item }) {
  return (
    <div className={styles.AdminReviewItemDetails}>
      <h1 className={styles.reviewItemHeader}>Review id: {item._id}</h1>
      <AdminReviewStatus status={item.isModeratorReviewApproved} />
      <span>Product id:{item.productId}</span>
      <span>Product name:{item.productName}</span>
      <span>User id: {item.userId}</span>
      <span>User Name: {item.userName}</span>
    </div>
  );
}

export default AdminReviewItemDetails;
