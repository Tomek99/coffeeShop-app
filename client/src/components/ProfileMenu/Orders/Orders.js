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

function Orders() {
  const { orders } = useContext(Context);
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();
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
      <HeaderInfo title="Orders" />
      <Filter />
      <div className={styles.divOrders}>
        {orders
          .slice(pagesVisited, pagesVisited + ordersPerPage)
          .map((item, index) => (
            <SingleOrder item={item} key={index} />
          ))}
      </div>
      {orders.length > 5 ? (
        <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      ) : null}
      <Support />
    </>
  );
}

export default Orders;
