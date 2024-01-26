import React from "react";
import styles from "./AdminCheckingReviews.module.scss";
import Pagination from "../../../Pagination/Pagination";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";
import usePaginationHook from "../../../../hooks/usePaginationHook";
import AdminCheckingReviewItem from "./AdminCheckingReviewItem/AdminCheckingReviewItem";

function AdminCheckingReviews({ data }) {
  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 15, "/admin/customers-reviews");

  return data.length ? (
    <div className={styles.adminReviewsAccepted}>
      {data.slice(pagesVisited, pagesVisited + itemsPerPage).map((item, i) => (
        <AdminCheckingReviewItem item={item} key={i} />
      ))}
      <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      <ScrollToTop pageNumber={pageNumber} />
    </div>
  ) : (
    <p style={{ fontSize: "1.5rem" }}>There are no reviews yet.</p>
  );
}

export default AdminCheckingReviews;
