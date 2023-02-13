import React from "react";
import ReturnBtn from "../../../../Buttons/ReturnBtn/ReturnBtn";
import styles from "./OrderDetails.module.scss";

function OrderDetails() {
  return (
    <div className={styles.OrderDetails}>
      <div className={styles.buttonShowOrders}>
        <ReturnBtn text="Show all orders" returnPath="/orders" />
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
