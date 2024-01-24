import React from "react";
import styles from "./AdminAcceptedReviews.module.scss";
import AdminReviewItem from "../AdminReviewItem/AdminReviewItem";
import Pagination from "../../../Pagination/Pagination";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";
import usePaginationHook from "../../../../hooks/usePaginationHook";

function AdminAcceptedReviews({ data }) {
  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 15, "/admin/customers-reviews");

  return (
    <div className={styles.AdminAcceptedReviews}>
      <div className={styles.reviewItems}>
        {data
          .slice(pagesVisited, pagesVisited + itemsPerPage)
          .map((item, index) => (
            <AdminReviewItem item={item} key={index} />
          ))}
      </div>
      <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      <ScrollToTop pageNumber={pageNumber} />
    </div>
  );
}

export default AdminAcceptedReviews;
