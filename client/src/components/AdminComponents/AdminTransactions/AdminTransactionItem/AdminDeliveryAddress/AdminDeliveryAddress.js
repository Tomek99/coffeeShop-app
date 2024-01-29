import React from "react";
import styles from "./AdminDeliveryAddress.module.scss";

function AdminDeliveryAddress({ shipping }) {
  return (
    <div className={styles.AdminDeliveryAddress}>
      <span style={{ fontWeight: "bold" }}>Delivery address:</span>
      <div className={styles.deliveryAddress}>
        <span>Name:{shipping.name}</span>
        <span>Email:{shipping.email}</span>
        <span>Number:{shipping.phone}</span>
        <span>City:{shipping.address.city}</span>
        <span>
          Postal address:{shipping.address.postal_code} {shipping.address.city}
        </span>
        <span>Street:</span>
        <span>House:</span>
      </div>
    </div>
  );
}

export default AdminDeliveryAddress;
