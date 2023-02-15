import React, { useEffect } from "react";
import styles from "./SingleOrder.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
// import Order from "./Orderff/Order";
import ProductsPurchased from "./ProductsPurchased/ProductsPurchased";
import { useWindowWidth } from "@react-hook/window-size";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate, redirect } from "react-router-dom";

function SingleOrder({ item }) {
  //ADD HIDDEN PRODUCTS IN ORDER COMPONENT !!!
  const { idNumber, status, date, totalCost } = item;
  const width = useWindowWidth();

  redirect(`/orders/${idNumber}`);

  let hiddenElements = item.products.length;
  let items = [...item.products];
  if (width < 370) {
    items = items.slice(0, 0);
  } else if (width < 500) {
    items = items.slice(0, 1);
  } else if (width < 700) {
    items = items.slice(0, 2);
  } else if (width < 800) {
    items = items.slice(0, 4);
  } else if (width < 900) {
    items = items.slice(0, 6);
  } else if (width < 1000) {
    items = items.slice(0, 3);
  } else if (width < 1050) {
    items = items.slice(0, 4);
  } else {
    items = items.slice(0, 5);
  }

  hiddenElements -= items.length;
  return (
    <Link to={`${idNumber}`}>
      <div className={styles.SingleOrder}>
        <div className={styles.details}>
          <h2 style={{ color: "#fff" }}>{status}</h2>
          <div>
            <p style={{ color: "#ccc", fontWeight: 300, marginBottom: "5px" }}>
              {date}
            </p>
            <p style={{ color: "#ccc", fontWeight: 300 }}>nr {idNumber}</p>
          </div>
          <p style={{ color: "#fff", fontWeight: "bold" }}>${totalCost}</p>
        </div>
        <div className={styles.products}>
          {items.map((item, index) => (
            <ProductsPurchased url={item.imageUrl} key={index} />
          ))}

          {hiddenElements !== 0 ? (
            <div className={styles.hiddenElements}>
              <span>+{hiddenElements}</span>
            </div>
          ) : null}
        </div>

        <button className={styles.btnInvoice}>
          <BsThreeDotsVertical size={20} />
        </button>
      </div>
    </Link>
  );
}
SingleOrder.propTypes = {
  idNumber: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  totalCost: PropTypes.number,
};
export default SingleOrder;
