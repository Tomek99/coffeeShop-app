import React from "react";
import styles from "./OrderDetailsContent.module.scss";
import BtnTrackOrder from "../../../../../../Buttons/BtnTrackOrder/BtnTrackOrder";
import BtnGetInvoice from "../../../../../../Buttons/BtnGetInvoice/BtnGetInvoice";

function OrderDetailsContent({ data }) {
  const { _id, createdAt, delivery_status, shipping } = data;
  const { address, email, name, phone } = shipping;
  return (
    <div className={styles.OrderDetailsContent}>
      {" "}
      <h1 className={styles.title}>Purchase details</h1>
      <div className={styles.divContent}>
        <div className={styles.rowDiv}>
          <div className={styles.colDiv}>
            <span className={styles.spanInfo}>Order number</span>
            <span>{_id}</span>
          </div>
          <div className={styles.colDiv}>
            <span className={styles.spanInfo}>Payment</span>
            <span>Credit card</span>
          </div>
          <div className={styles.colDiv}>
            <span className={styles.spanInfo}>Order status</span>
            <span>{delivery_status}</span>
          </div>
        </div>
        <div className={styles.rowDiv}>
          <div className={styles.colDiv}>
            <span className={styles.spanInfo}>Date of submission</span>
            <span>{createdAt.slice(0, 16)}</span>
          </div>
          <div className={styles.colDiv}>
            <span className={styles.spanInfo}>Delivery</span>
            <span>Courier (Friday 24.05.2024)</span>
          </div>
          <div className={styles.colDiv}>
            <span className={styles.spanInfo}>Delivery address</span>
            <div>
              <span>{name},</span>
              <span>{address.postal_code},</span>
            </div>
            <div>
              <span>{address.city},</span>
              <span>{address.line1},</span>
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <BtnTrackOrder />
          <BtnGetInvoice />
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsContent;
