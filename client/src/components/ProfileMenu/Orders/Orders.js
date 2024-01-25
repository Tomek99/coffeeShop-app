import React, { useContext } from "react";
import styles from "./Orders.module.scss";
import SingleOrder from "./SingleOrder/SingleOrder";
import Support from "../Support/Support";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter/Filter";
import Pagination from "../../Pagination/Pagination";
import { Context } from "../../../Contexts/Context";
import HeaderInfo from "../../HeaderInfo/HeaderInfo";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import usePaginationHook from "../../../hooks/usePaginationHook";
import useFetchData from "../../../hooks/useFetchData";

function Orders() {
  const { user } = useContext(Context);

  const endPoint = `${process.env.REACT_APP_API_URI}/api/orders/user-orders/${user._id}`;
  const { data, isLoaded } = useFetchData(endPoint);

  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 10, "purchased-products");

  return (
    <>
      <HeaderInfo title="Orders" />
      <Filter />
      {isLoaded ? (
        <LoaderSpinner loading={isLoaded} />
      ) : (
        <div>
          <div className={styles.divOrders}>
            {data
              .slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((item, index) => (
                <SingleOrder item={item} key={index} />
              ))}
          </div>
          {data.length > 5 ? (
            <Pagination
              pageCount={pageCount}
              handleChangePage={handleChangePage}
            />
          ) : null}
        </div>
      )}
      <Support />
      <ScrollToTop pageNumber={pageNumber} />
    </>
  );
}

export default Orders;
