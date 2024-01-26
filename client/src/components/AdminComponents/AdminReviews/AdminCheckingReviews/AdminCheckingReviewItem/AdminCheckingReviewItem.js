import React from "react";
import styles from "./AdminCheckingReviewItem.module.scss";
import AdminReviewItemDetails from "../../AdminReviewItemDetails/AdminReviewItemDetails";
import AdminReviewItemDetailsExtended from "../../AdminReviewItemDetailsExtended/AdminReviewItemDetailsExtended";
import AdminUserReviewRatingForm from "../../AdminUserReviewRatingForm/AdminUserReviewRatingForm";
import AdminTextBtn from "../../../AdminBtns/AdminTextBtn/AdminTextBtn";
function AdminCheckingReviewItem({ item }) {
  return (
    <section className={styles.AdminCheckingReviewItem}>
      <div className={styles.checkingReviewContent}>
        <AdminReviewItemDetails item={item} />
        <AdminReviewItemDetailsExtended item={item} />
        <AdminUserReviewRatingForm item={item} />
      </div>
    </section>
  );
}

export default AdminCheckingReviewItem;
