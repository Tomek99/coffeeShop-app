import React from "react";
import BtnReturn from "../../../../Buttons/BtnReturn/BtnReturn";
import styles from "./OrderDetails.module.scss";

function OrderDetails() {
  return (
    <div className={styles.OrderDetails}>
      <div className={styles.buttonShowOrders}>
        <BtnReturn text="Show all orders" returnPath="/orders" />
      </div>
      <div>
        <p>fwafawfa</p>
        <p>fwafawfa</p>
        <p>fwafawfa</p>
        <p>fwafawfa</p>
        <p>fwafawfas</p>
      </div>
    </div>
  );
}

export default OrderDetails;
