import React from "react";
import styles from "./AdminRatedReviewItem.module.scss";
import AdminIconBtn from "../../../AdminBtns/AdminIconBtn/AdminIconBtn";
import AdminReviewItemDetails from "../../AdminReviewItemDetails/AdminReviewItemDetails";
import AdminReviewItemDetailsExtended from "../../AdminReviewItemDetailsExtended/AdminReviewItemDetailsExtended";
import AdminModeratorAttention from "../../AdminModeratorAttention/AdminModeratorAttention";

function AdminRatedReviewItem({ item }) {
  return (
    <div className={styles.AdminReviewItem}>
      <div className={styles.reviewItemContent}>
        <AdminReviewItemDetails item={item} />
        <AdminReviewItemDetailsExtended item={item} />
        <AdminModeratorAttention item={item} />
      </div>
      <div className={styles.adminActionBtns}>
        <AdminIconBtn
          btnType="CiEdit"
          handleBtn={(action) => {
            console.log(action);
          }}
          btnAction={"deleteReview"}
        />
        <AdminIconBtn
          btnType="ImBin"
          handleBtn={(action) => {
            console.log(action);
          }}
          btnAction={"editReview"}
        />
      </div>
      <div>edit</div>
    </div>
  );
}

export default AdminRatedReviewItem;
