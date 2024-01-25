import React from "react";
import styles from "./AdminReviewsBtnsAction.module.scss";
function AdminReviewsBtnsAction({ handleSelectedSubPage, selectedSubPage }) {
  return (
    <section className={styles.AdminReviewsBtnsAction}>
      <button
        onClick={() => handleSelectedSubPage("checkingReviews")}
        className={
          selectedSubPage === "checkingReviews"
            ? `${styles.AdminBtnAction} ${styles.clickedButton}`
            : `${styles.AdminBtnAction}`
        }
      >
        Checking reviews
      </button>
      <button
        onClick={() => handleSelectedSubPage("ratedReviews")}
        className={
          selectedSubPage === "ratedReviews"
            ? `${styles.AdminBtnAction} ${styles.clickedButton}`
            : `${styles.AdminBtnAction}`
        }
      >
        Rated reviews
      </button>
    </section>
  );
}

export default AdminReviewsBtnsAction;
