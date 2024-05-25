import React from "react";
import styles from "./OrderDetailsCostSummary.module.scss";

function OrderDetailsCostSummary({ subtotal, total }) {
  return (
    <div className={styles.costSummary}>
      <div>
        Value of products <span>${subtotal}</span>
      </div>
      <div>
        Delivery cost <span>$0</span>
      </div>
      <div>
        Discount <span>$0</span>
      </div>
      <div className={styles.total}>
        Total <span>${total}</span>
      </div>
    </div>
  );
}

export default OrderDetailsCostSummary;
