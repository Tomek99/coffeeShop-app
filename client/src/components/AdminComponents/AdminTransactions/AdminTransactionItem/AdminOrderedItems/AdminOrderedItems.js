import React from "react";
import styles from "./AdminOrderedItems.module.scss";

function AdminOrderedItems({ products }) {
  return (
    <div className={styles.AdminOrderedItems}>
      <span style={{ fontWeight: "bold" }}>Ordered products:</span>
      <div className={styles.productsList}>
        {products.map((item, index) => (
          <div key={index} className={styles.prItem}>
            <span>Id:{item._id}</span>
            <span>Name:{item.name}</span>
            <span>Price:{item.price}</span>
            <span>Amount:{item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminOrderedItems;
