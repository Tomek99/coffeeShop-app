import React from "react";
import styles from "./AdminModeratorAttention.module.scss";
import AdminReviewStatus from "./AdminReviewStatus/AdminReviewStatus";

function AdminModeratorAttention({ item }) {
  return (
    <div className={styles.AdminModeratorAttention}>
      <AdminReviewStatus status={item.isModeratorApprovedReview} />
      {item.isModeratorApprovedReview !== "approved" ? (
        <>
          <div className={styles.textContent}>
            <span>Case:</span>
            <p>{item.moderatorAttention}</p>
          </div>
          <div className={styles.textContent}>
            <span>Addition comments:</span>
            <p>{item.extraMmoderatorAttention}</p>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default AdminModeratorAttention;
