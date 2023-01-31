import React from "react";
import styles from "./AccountContent.module.scss";
import Support from "../Support/Support";
import WishProducts from "../WishList/WishProducts/WishProducts";
import OrderSummary from "../Orders/OrderSummary/OrderSummary";
import orders from "../../../data/orders.json";

function AccountContent() {
  const displayOrders = orders
    .slice(0, 1)
    .map((item, index) => <OrderSummary item={item} key={index} />);
  return (
    <div className={styles.accountContent}>
      <div className={styles.divCol}>
        <div className={styles.divRow}>
          <h2>Orders</h2>
          <button>Check all</button>
        </div>
        {displayOrders}
      </div>
      <div className={styles.divCol}>
        <div className={styles.divRow}>
          <h2>Shopping lists</h2>
          <button>Check all</button>
        </div>
        <WishProducts />
      </div>
      <Support />
    </div>
  );
}

export default AccountContent;
