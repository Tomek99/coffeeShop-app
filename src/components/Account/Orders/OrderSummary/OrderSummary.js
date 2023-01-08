import React from "react";
import styles from "./OrderSummary.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import Order from "../Order/Order";
import ProductsPurchased from "./ProductsPurchased/ProductsPurchased";
import { useWindowWidth } from "@react-hook/window-size";

function OrderSummary({ orderDetails }) {
  //ADD HIDDEN PRODUCTS IN ORDER COMPONENT !!!

  const width = useWindowWidth();
  let hiddenElements = orderDetails.products.length;
  let items = [...orderDetails.products];
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
    <div className={styles.OrderSummary} key={orderDetails.idNumber}>
      <div className={styles.details}>
        <h2>{orderDetails.status}</h2>
        <div>
          <p style={{ color: "#ccc", fontWeight: 300, marginBottom: "5px" }}>
            {orderDetails.date}
          </p>
          <p style={{ color: "#ccc", fontWeight: 300 }}>
            nr {orderDetails.idNumber}
          </p>
        </div>
        <p style={{ fontWeight: "bold" }}>${orderDetails.totalCost}</p>
      </div>
      <div className={styles.products}>
        {items.map((item) => (
          <ProductsPurchased url={item.imageUrl} />
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
  );
}

export default OrderSummary;
