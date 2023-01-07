import React from "react";
import styles from "./OrderSummary.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import Order from "../Order/Order";

function OrderSummary({ orderDetails }) {
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
        {orderDetails.products.map((item) => (
          <div>
            <img src={item.imageUrl} alt="" className={styles.imgResponsive} />
          </div>
        ))}
      </div>
      <button className={styles.btnInvoice}>
        <BsThreeDotsVertical size={20} />
      </button>
    </div>
  );
}

export default OrderSummary;
