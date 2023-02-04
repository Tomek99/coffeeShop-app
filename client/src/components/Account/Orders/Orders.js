import React from "react";
import styles from "./Orders.module.scss";
import orders from "../../../data/orders.json";
import OrderSummary from "./OrderSummary/OrderSummary";
import Support from "../Support/Support";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter/Filter";
import Pagination from "../../Pagination/Pagination";

function Orders() {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);

  const ordersPerPage = 5;
  const pagesVisited = pageNumber * ordersPerPage;
  const pageCount = Math.round(orders.length / ordersPerPage);

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);

    navigate({
      pathname: "/orders",
      search: selected !== 0 ? `?page=${selected + 1}` : null,
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pageNumber]);
  return (
    <>
      <header style={{ fontSize: "2.5rem" }}>Orders</header>
      <Filter />
      <div className={styles.divOrders}>
        {orders
          .slice(pagesVisited, pagesVisited + ordersPerPage)
          .map((item, index) => (
            <OrderSummary item={item} key={index} />
          ))}
      </div>
      <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      <Support />
    </>
  );
}

export default Orders;
