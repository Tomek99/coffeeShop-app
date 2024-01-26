import React, { useState } from "react";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import styles from "./AdminReviews.module.scss";
import useFetchData from "../../../hooks/useFetchData";
import AdminRatedReviews from "./AdminRatedReviews/AdminRatedReviews";
import AdminCheckingReviews from "./AdminCheckingReviews/AdminCheckingReviews";
import AdminReviewsBtnsAction from "./AdminReviewsBtnsAction/AdminReviewsBtnsAction";

function AdminReviews() {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/reviews`;
  const { isLoaded, data } = useFetchData(apiEndpoint);
  const ratedReviews = data.filter(
    (item) =>
      item.isUserAddedReview === true &&
      ["rejected", "approved"].includes(item.isModeratorApprovedReview)
  );

  const checkingReviews = data.filter(
    (item) =>
      item.isUserAddedReview === true &&
      item.isModeratorApprovedReview === "checking"
  );

  const [selectedSubPage, setSelectedSubPage] = useState("checkingReviews");
  function handleSelectedSubPage(page) {
    setSelectedSubPage(page);
  }

  return isLoaded ? (
    <LoaderSpinner loading={isLoaded} />
  ) : (
    <section className={styles.AdminTransactions}>
      <AdminReviewsBtnsAction
        handleSelectedSubPage={handleSelectedSubPage}
        selectedSubPage={selectedSubPage}
      />

      {(() => {
        switch (selectedSubPage) {
          case "checkingReviews":
            return <AdminCheckingReviews data={checkingReviews} />;
          case "ratedReviews":
            return <AdminRatedReviews data={ratedReviews} />;
          default:
            return null;
        }
      })()}
    </section>
  );
}

export default AdminReviews;
