import React from "react";
import styles from "./AdminReviewItem.module.scss";
import { GrStatusGood } from "react-icons/gr";

function AdminReviewItem({ item }) {
  console.log(item);
  return (
    <div className={styles.AdminReviewItem}>
      <h1>Review id: {item._id}</h1>
      <div className={styles.reviewItemContent}>
        <span>Product id:{item.productId}</span>
        <span>Product name:{item.productName}</span>
        <span>User id: {item.userId}</span>
        <span>User Name: {item.userName}</span>
        <span>Comment: {item.comment}</span>
        <span>Rate: {item.rate}</span>
        <span style={{ display: "flex", alignItems: "center" }}>
          Review status: <GrStatusGood size={20} color="var(--green)" />
        </span>
        <span>Review date: {item.userReviewDate}</span>
      </div>
    </div>
  );
}

export default AdminReviewItem;
