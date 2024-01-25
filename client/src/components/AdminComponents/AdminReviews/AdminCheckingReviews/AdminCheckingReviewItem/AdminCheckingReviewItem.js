import React from "react";
import styles from "./AdminCheckingReviewItem.module.scss";
import AdminTextBtn from "../../../AdminBtns/AdminTextBtn/AdminTextBtn";
import AdminReviewItemDetails from "../../AdminReviewItemDetails/AdminReviewItemDetails";
import AdminReviewItemDetailsExtended from "../../AdminReviewItemDetailsExtended/AdminReviewItemDetailsExtended";

function AdminCheckingReviewItem({ item }) {
  function handleCheckingReview(action) {
    console.log(action);
    console.log(item);
  }
  return (
    <section className={styles.AdminCheckingReviewItem}>
      <div className={styles.checkingReviewContent}>
        <AdminReviewItemDetails item={item} />
        <AdminReviewItemDetailsExtended item={item} />
        <div>Test</div>
      </div>
      <div className={styles.btnsAction}>
        <AdminTextBtn
          handleBtn={handleCheckingReview}
          textBtn="Confirm"
          action="confirm"
        />
        <AdminTextBtn
          handleBtn={handleCheckingReview}
          textBtn="Reject"
          action="reject"
        />
      </div>
    </section>
  );
}

export default AdminCheckingReviewItem;
