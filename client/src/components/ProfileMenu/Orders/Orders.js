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

function Orders() {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const storedValue = await axios.get(
        `${process.env.REACT_APP_API_URI}/api/orders/user-orders/${user._id}`
      );
      if (storedValue.data) {
        setOrderData(storedValue.data);
        setLoading(false);
      } else setOrderData([]);
    }
    fetchData();
  }, [user._id]);

  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();
  const ordersPerPage = 5;
  const pagesVisited = pageNumber * ordersPerPage;
  const pageCount = Math.ceil(orderData.length / ordersPerPage);

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);

    navigate({
      pathname: "/orders",
      search: selected !== 0 ? `?page=${selected + 1}` : null,
    });
  };
  return (
    <>
      <HeaderInfo title="Orders" />
      <Filter />
      {loading ? (
        <LoaderSpinner loading={loading} />
      ) : (
        <div>
          <div className={styles.divOrders}>
            {orderData
              .slice(pagesVisited, pagesVisited + ordersPerPage)
              .map((item, index) => (
                <SingleOrder item={item} key={index} />
              ))}
          </div>
          {orderData.length > 5 ? (
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
