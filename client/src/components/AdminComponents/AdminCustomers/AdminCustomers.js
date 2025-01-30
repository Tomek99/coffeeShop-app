import React, { useState } from "react";
import styles from "./AdminCustomers.module.scss";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import AdminCustomerItem from "./AdminCustomerItem/AdminCustomerItem";
import useFetchData from "../../../hooks/useFetchData";
import usePaginationHook from "../../../hooks/usePaginationHook";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Pagination from "../../Pagination/Pagination";

function AdminCustomers() {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/users`;
  const { isLoaded: isUsersDataLoaded, data: usersData } =
    useFetchData(apiEndpoint);

  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, usersData, 15, "/admin/customers");

  const apiEndpointOrders = `${process.env.REACT_APP_API_URI}/api/orders`;
  const { isLoaded: isOrdersDataLoaded, data: ordersData } =
    useFetchData(apiEndpointOrders);

  return isUsersDataLoaded ? (
    <LoaderSpinner loading={isUsersDataLoaded} />
  ) : (
    <div className={styles.AdminCustomers}>
      <table className={styles.tableContent}>
        <tbody>
          <tr className={styles.headers}>
            <td>Nr</td>
            <td>Id</td>
            <td>Customer name</td>
            <td>Email</td>
            <td>Phone number</td>
            <td>Password</td>
            <td>Orders</td>
            <td>Delete</td>
          </tr>
          {usersData
            .slice(pagesVisited, pagesVisited + itemsPerPage)
            .map((item, index) => (
              <AdminCustomerItem
                item={item}
                index={index + 1}
                key={index}
                ordersData={ordersData}
                isOrdersDataLoaded={isOrdersDataLoaded}
              />
            ))}
        </tbody>
      </table>

      <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      <ScrollToTop pageNumber={pageNumber} />
    </div>
  );
}

export default AdminCustomers;
