import React, { useEffect, useState } from "react";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import styles from "./AdminReviews.module.scss";
import AdminReviewItem from "./AdminReviewItem/AdminReviewItem";
import useFetchData from "../../../hooks/useFetchData";
import usePaginationHook from "../../../hooks/usePaginationHook";
import Pagination from "../../Pagination/Pagination";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

function AdminReviews() {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/reviews`;
  const { isLoaded, data } = useFetchData(apiEndpoint);

  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 15, "/admin/reviews");

  return isLoaded ? (
    <LoaderSpinner loading={isLoaded} />
  ) : (
    <div className={styles.AdminTransactions}>
      {data
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((item, index) => (
          <AdminReviewItem item={item} key={index} />
        ))}
      <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      <ScrollToTop pageNumber={pageNumber} />
    </div>
  );
}

export default AdminReviews;
