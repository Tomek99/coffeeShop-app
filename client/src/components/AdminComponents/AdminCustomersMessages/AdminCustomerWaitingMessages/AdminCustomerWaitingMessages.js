import React from "react";
import AdminCustomerMessageItem from "../AdminCustomerMessageItem/AdminCustomerMessageItem";
import Pagination from "../../../Pagination/Pagination";
import usePaginationHook from "../../../../hooks/usePaginationHook";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";
import styles from "./AdminCustomerWaitingMessages.module.scss";
function AdminCustomerWaitingMessages({ data }) {
  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 10, "/admin/customers-messages");

  return data.length !== 0 ? (
    <div className={styles.AdminCustomerWaitingMessages}>
      <div data-testid="pendingMessages">
        {data
          .slice(pagesVisited, pagesVisited + itemsPerPage)
          .map((item, i) => (
            <AdminCustomerMessageItem item={item} key={i} />
          ))}
      </div>
      <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      <ScrollToTop pageNumber={pageNumber} />
    </div>
  ) : (
    <p className={styles.noMessages}>No news...</p>
  );
}

export default AdminCustomerWaitingMessages;
