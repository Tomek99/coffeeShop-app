import React, { useEffect, useState } from "react";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import styles from "./AdminReviews.module.scss";
import AdminReviewItem from "./AdminReviewItem/AdminReviewItem";
import useFetchData from "../../../hooks/useFetchData";
import usePaginationHook from "../../../hooks/usePaginationHook";
import Pagination from "../../Pagination/Pagination";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import AdminAcceptedReviews from "./AdminAcceptedReviews/AdminAcceptedReviews";
import AdminVerificationReviews from "./AdminVerificationReviews/AdminVerificationReviews";
import AdminReviewsBtnsAction from "./AdminReviewsBtnsAction/AdminReviewsBtnsAction";

function AdminReviews() {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/reviews`;
  const { isLoaded, data } = useFetchData(apiEndpoint);

  const [selectedSubPage, setSelectedSubPage] = useState("acceptedReviews");
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
          case "acceptedReviews":
            return <AdminAcceptedReviews data={data} />;
          case "veryficationReviews":
            return <AdminVerificationReviews data={data} />;
          default:
            return null;
        }
      })()}
    </section>
  );
}

export default AdminReviews;
