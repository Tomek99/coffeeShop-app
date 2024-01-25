import React from "react";
import styles from "./SingleOrder.module.scss";
// import Order from "./Orderff/Order";

import { useWindowWidth } from "@react-hook/window-size";
import PropTypes from "prop-types";
import BtnDots from "../../../Buttons/BtnDots/BtnDots";
// import { redirect } from "react-router-dom";

function SingleOrder({ item }) {
  //ADD HIDDEN PRODUCTS IN ORDER COMPONENT !!!
  const { _id, delivery_status, date, total, products } = item;
  const width = useWindowWidth();
  // console.log(date);
  // redirect(`/orders/${_id}`); po co?
  const calculateVisibleItems = (width) => {
    if (width < 370) return 0;
    if (width < 500) return 1;
    if (width < 700) return 2;
    if (width < 800) return 4;
    if (width < 900) return 6;
    if (width < 1000) return 3;
    if (width < 1050) return 4;
    return 5;
  };
  const visibleItemsCount = calculateVisibleItems(width);
  const items = products.slice(0, visibleItemsCount);
  const hiddenElements = products.length - items.length;

  // let hiddenElements = item.products.length;
  // let items = [...item.products];
  // if (width < 370) {
  //   items = items.slice(0, 0);
  // } else if (width < 500) {
  //   items = items.slice(0, 1);
  // } else if (width < 700) {
  //   items = items.slice(0, 2);
  // } else if (width < 800) {
  //   items = items.slice(0, 4);
  // } else if (width < 900) {
  //   items = items.slice(0, 6);
  // } else if (width < 1000) {
  //   items = items.slice(0, 3);
  // } else if (width < 1050) {
  //   items = items.slice(0, 4);
  // } else {
  //   items = items.slice(0, 5);
  // }

  // hiddenElements -= items.length;
  return (
    // <Link to={`${idNumber}`}>
    <div className={styles.SingleOrder}>
      <div className={styles.details}>
        <h2 className={styles.headline}>{delivery_status}</h2>
        <div>
          <p
            style={{
              color: "var(--text-color)",
              fontWeight: 300,
              marginBottom: "5px",
            }}
          >
            {date}
          </p>
          <p style={{ color: "var(--text-color)", fontWeight: 300 }}>
            nr {_id}
          </p>
        </div>
        <p style={{ color: "var(--text-color)", fontWeight: "bold" }}>
          ${total}
        </p>
      </div>
      <div className={styles.products}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.imageUrl} alt="" className={styles.imgResponsive} />
          </div>
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
