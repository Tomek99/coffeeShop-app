import React from "react";
import styles from "./AdminCustomerMessageItem.module.scss";

function AdminCustomerMessageItem({ item }) {
  return (
    <div className={styles.AdminCustomerMessageItem}>
      <section className={styles.customerData}>
        <span>ID: {item._id}</span>
        <span>Full name: {item.fullName}</span>
        <span>Phone number: {item.number}</span>
      </section>
      <div>
        <p>{item.message}</p>
      </div>
      <div className={styles.btnsAction}>
        <button className={styles.btnCustomerMessageItem}>Confirm</button>
        <button className={styles.btnCustomerMessageItem}>Ignore</button>
      </div>
    </div>
  );
}

export default AdminCustomerMessageItem;
