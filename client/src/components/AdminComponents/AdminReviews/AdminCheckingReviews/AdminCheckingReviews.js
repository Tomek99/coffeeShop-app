import React from "react";
import styles from "./AdminCheckingReviews.module.scss";
import Pagination from "../../../Pagination/Pagination";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";
import usePaginationHook from "../../../../hooks/usePaginationHook";

function AdminCheckingReviews({ data }) {
  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 15, "/admin/customers-reviews");

  return (
    <div className={styles.adminReviewsAccepted}>
      <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      <ScrollToTop pageNumber={pageNumber} />
    </div>
  );
}

export default AdminCheckingReviews;
