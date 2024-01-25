import React from "react";
import styles from "./AdminRatedReviewItem.module.scss";
import { GrStatusGood } from "react-icons/gr";
import RatingsStars from "../../../../RatingStars/RatingStars";
import AdminIconBtn from "../../../AdminBtns/AdminIconBtn";

function AdminRatedReviewItem({ item }) {
  return (
    <div className={styles.AdminReviewItem}>
      <div className={styles.reviewItemContent}>
        <div className={styles.columnItem}>
          <h1 className={styles.reviewItemHeader}>Review id: {item._id}</h1>
          <span
            style={{ display: "flex", alignItems: "center" }}
            className={styles.reviewItemHeader}
          >
            Review status: <GrStatusGood size={20} color="var(--green)" />
          </span>
          <span>Product id:{item.productId}</span>
          <span>Product name:{item.productName}</span>
          <span>User id: {item.userId}</span>
          <span>User Name: {item.userName}</span>
        </div>
        <div className={styles.columnItem}>
          <span>Review date: {item.userReviewDate}</span>
          <span className={styles.ratingSpan}>
            Rate:
            <RatingsStars tab={0} rate={item.rate} size={"medium"} />
          </span>
          <p>Comment: {item.comment}</p>
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
      </div>
    </div>
  );
}

export default AdminRatedReviewItem;
