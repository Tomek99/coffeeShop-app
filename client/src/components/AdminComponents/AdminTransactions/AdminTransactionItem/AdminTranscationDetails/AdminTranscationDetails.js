import React from "react";
import styles from "./AdminTranscationDetails.module.scss";

function AdminTranscationDetails({ item, index }) {
  return (
    <div className={styles.AdminTranscationDetails}>
      <span>Transaction nr: {index + 1}</span>
      <span>Transcation id: {item._id}</span>
      <span>payment intent id: {item.paymentIntentId}</span>
      <span>Payment status: {item.payment_status}</span>
      <span>Subtotal: ${item.subtotal}</span>
      <span>Total: ${item.total}</span>
      <span>User id: {item.userId}</span>
      <span>Updated at: {item.updatedAt}</span>
      <span>Created at: {item.createdAt}</span>
    </div>
  );
}

export default AdminTranscationDetails;
