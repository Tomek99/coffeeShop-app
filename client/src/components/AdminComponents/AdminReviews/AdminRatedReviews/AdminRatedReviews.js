import React from "react";
import styles from "./AdminRatedReviews.module.scss";
import AdminRatedReviewItem from "./AdminRatedReviewItem/AdminRatedReviewItem";
import Pagination from "../../../Pagination/Pagination";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";
import usePaginationHook from "../../../../hooks/usePaginationHook";

function AdminRatedReviews({ data }) {
  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 15, "/admin/customers-reviews");

  return data.length ? (
    <div className={styles.AdminRatedReviews}>
      <div className={styles.reviewItems}>
        {data
          .slice(pagesVisited, pagesVisited + itemsPerPage)
          .map((item, index) => (
            <AdminRatedReviewItem item={item} key={index} />
          ))}
      </div>
      <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      <ScrollToTop pageNumber={pageNumber} />
    </div>
  ) : (
    <p style={{ fontSize: "1.5rem" }}>There are no rated reviews yet.</p>
  );
}

export default AdminRatedReviews;
