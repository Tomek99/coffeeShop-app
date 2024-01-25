import React, { useEffect, useState } from "react";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import styles from "./AdminReviews.module.scss";
import AdminRatedReviewItem from "./AdminAcceptedReviews/AdminRatedReviewItem/AdminRatedReviewItem";
import useFetchData from "../../../hooks/useFetchData";
import usePaginationHook from "../../../hooks/usePaginationHook";
import Pagination from "../../Pagination/Pagination";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import AdminRatedReviews from "./AdminAcceptedReviews/AdminRatedReviews";
import AdminCheckingReviews from "./AdminCheckingReviews/AdminCheckingReviews";
import AdminReviewsBtnsAction from "./AdminReviewsBtnsAction/AdminReviewsBtnsAction";

function AdminReviews() {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/reviews`;
  const { isLoaded, data } = useFetchData(apiEndpoint);

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
          case "ratedReviews":
            return <AdminRatedReviews data={data} />;
          case "checkingReviews":
            return <AdminCheckingReviews data={data} />;
          default:
            return null;
        }
      })()}
    </section>
  );
}

export default AdminReviews;
