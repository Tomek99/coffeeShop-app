import React from "react";
import styles from "./SingleOrder.module.scss";
// import Order from "./Orderff/Order";
import ProductsPurchased from "./ProductsPurchased/ProductsPurchased";
import { useWindowWidth } from "@react-hook/window-size";
import PropTypes from "prop-types";
import BtnDots from "../../../Buttons/BtnDots/BtnDots";
// import { redirect } from "react-router-dom";

function SingleOrder({ item }) {
  //ADD HIDDEN PRODUCTS IN ORDER COMPONENT !!!
  const { _id, delivery_status, date, total } = item;
  const width = useWindowWidth();
  // console.log(date);
  // redirect(`/orders/${_id}`); po co?

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
    // <Link to={`${idNumber}`}>
    <div className={styles.SingleOrder}>
      <div className={styles.details}>
        <h2 className={styles.headline}>{delivery_status}</h2>
        <div>
          <p style={{ color: "#ccc", fontWeight: 300, marginBottom: "5px" }}>
            {date}
          </p>
          <p style={{ color: "#ccc", fontWeight: 300 }}>nr {_id}</p>
        </div>
        <p style={{ color: "#fff", fontWeight: "bold" }}>${total}</p>
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
      <BtnDots />
    </div>
    // </Link>
  );
}
SingleOrder.propTypes = {
  idNumber: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  totalCost: PropTypes.number,
};
export default SingleOrder;
