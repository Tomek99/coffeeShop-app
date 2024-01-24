import React from "react";
import styles from "./AdminReviewsBtnsAction.module.scss";
function AdminReviewsBtnsAction({ handleSelectedSubPage, selectedSubPage }) {
  return (
    <section className={styles.AdminReviewsBtnsAction}>
      <button
        onClick={() => handleSelectedSubPage("acceptedReviews")}
        className={
          selectedSubPage === "acceptedReviews"
            ? `${styles.AdminBtnAction} ${styles.clickedButton}`
            : `${styles.AdminBtnAction}`
        }
      >
        Accepted reviews
      </button>
      <button
        onClick={() => handleSelectedSubPage("veryficationReviews")}
        className={
          selectedSubPage === "veryficationReviews"
            ? `${styles.AdminBtnAction} ${styles.clickedButton}`
            : `${styles.AdminBtnAction}`
        }
      >
        Review Verification
      </button>
    </section>
  );
}

export default AdminReviewsBtnsAction;
