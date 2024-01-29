import React from "react";
import styles from "./AdminTransactionItem.module.scss";
import AdminOrderedItems from "./AdminOrderedItems/AdminOrderedItems";
import AdminDeliveryAddress from "./AdminDeliveryAddress/AdminDeliveryAddress";
import AdminTranscationDetails from "./AdminTranscationDetails/AdminTranscationDetails";

function AdminTransactionItem({ item, index }) {
  return (
    <section className={styles.AdminTransactionItem}>
      <AdminTranscationDetails item={item} index={index} />
      <AdminOrderedItems products={item.products} />
      <AdminDeliveryAddress shipping={item.shipping} />
    </section>
  );
}

export default AdminTransactionItem;
