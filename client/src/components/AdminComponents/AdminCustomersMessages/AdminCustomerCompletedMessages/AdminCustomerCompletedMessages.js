import React from "react";
import AdminCustomerMessageItem from "../AdminCustomerMessageItem/AdminCustomerMessageItem";
import usePaginationHook from "../../../../hooks/usePaginationHook";
import Pagination from "../../../Pagination/Pagination";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";
import styles from "./AdminCustomerCompletedMessages.module.scss";

function AdminCustomerCompletedMessages({ data }) {
  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 10, "/admin/customers-messages");

  return (
    <div
      className={styles.AdminCustomerCompletedMessages}
      data-testid="completedMessages"
    >
      <div className={styles.itemsDiv}>
        {data
          .slice(pagesVisited, pagesVisited + itemsPerPage)
          .map((item, i) => (
            <AdminCustomerMessageItem item={item} key={i} />
          ))}
      </div>
      <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      <ScrollToTop pageNumber={pageNumber} />
    </div>
  );
}

export default AdminCustomerCompletedMessages;
