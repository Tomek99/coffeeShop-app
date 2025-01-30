import React from "react";
import styles from "./AdminCustomerItemOrders.module.scss";

function AdminCustomerItemOrders({ item }) {
  return (
    <div className={styles.AdminCustomerItemOrders}>
      <div className={styles.orderContent}>
        <span>
          <b>Order id:</b> {item._id}
        </span>
        <span>
          <b>Created at:</b> {item.createdAt}
        </span>
        <span>
          <b>Updated at:</b> {item.updatedAt}
        </span>
        <span>
          <b>Delivery status: </b>
          {item.delivery_status}
        </span>
        <span>
          <b>Payment intent id: </b>
          {item.paymentIntentId}
        </span>
        <span>
          <b>Subtotal:</b> ${item.subtotal}
        </span>
        <span>
          <b>Total: </b>${item.total}
        </span>
      </div>
    </div>
  );
}

export default AdminCustomerItemOrders;
