import React, { useState } from "react";
import styles from "./AdminRatedReviewItem.module.scss";
import AdminIconBtn from "../../../AdminBtns/AdminIconBtn/AdminIconBtn";
import AdminReviewItemDetails from "../../AdminReviewItemDetails/AdminReviewItemDetails";
import AdminReviewItemDetailsExtended from "../../AdminReviewItemDetailsExtended/AdminReviewItemDetailsExtended";
import AdminModeratorAttention from "../../AdminModeratorAttention/AdminModeratorAttention";
import AdminUserReviewRatingForm from "../../AdminUserReviewRatingForm/AdminUserReviewRatingForm";
import AdminTextBtn from "../../../AdminBtns/AdminTextBtn/AdminTextBtn";
import deleteDateUtil from "../../../../../utils/deleteDataUtil";

function AdminRatedReviewItem({ item }) {
  const [action, setAction] = useState(null);

  function handleBtn(currentAction) {
    setAction(currentAction === action ? null : currentAction);
  }

  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/reviews/delete-review`;
  async function deleteReview() {
    const response = await deleteDateUtil(apiEndpoint, item._id);
    window.location.reload();
  }

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
          handleBtn={handleBtn}
          action={"editReview"}
        />
        <AdminIconBtn
          btnType="ImBin"
          handleBtn={handleBtn}
          action={"deleteReview"}
        />
      </div>

      {(() => {
        switch (action) {
          case "editReview":
            return (
              <div className={styles.editReviewForm}>
                <AdminUserReviewRatingForm item={item} />
              </div>
            );
          case "deleteReview":
            return (
              <div className={styles.btnsAction}>
                <AdminTextBtn
                  textBtn="Yes, delete review"
                  typeBtn="button"
                  action="reject"
                  handleBtn={deleteReview}
                />
              </div>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default AdminRatedReviewItem;
