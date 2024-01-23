import React from "react";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import AdminTransactionItem from "./AdminTransactionItem/AdminTransactionItem";
import styles from "./AdminTransactions.module.scss";
import useFetchData from "../../../hooks/useFetchData";
import usePaginationHook from "../../../hooks/usePaginationHook";
import Pagination from "../../Pagination/Pagination";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

function AdminTransactions() {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/orders`;
  const { isLoaded, data } = useFetchData(apiEndpoint);

  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 10, "/admin/transactions");

  return isLoaded ? (
    <LoaderSpinner loading={isLoaded} />
  ) : (
    <div className={styles.AdminTransactions}>
      {data
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((item, index) => (
          <AdminTransactionItem item={item} index={index} key={index} />
        ))}
      <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      <ScrollToTop pageNumber={pageNumber} />
    </div>
  );
}

export default AdminTransactions;
