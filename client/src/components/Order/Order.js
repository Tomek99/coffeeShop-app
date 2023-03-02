import React, { useState } from "react";
import Deliver from "./ColumnLeft/Deliver/Deliver";
import ExtraInfo from "./ColumnLeft/ExtraInfo/ExtraInfo";
import Invoice from "./ColumnLeft/Invoice/Invoice";
import styles from "./Order.module.scss";
import Payment from "./ColumnLeft/Payment/Payment";
import Recipient from "./ColumnLeft/Recipient/Recipient";
import Shopper from "./ColumnLeft/Shopper/Shopper";
import DisplayProducts from "./ColumnRight/DisplayProducts/DisplayProducts";
import DeliverMethod from "./ColumnRight/DeliverMethod/DeliverMethod";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import Company from "./ColumnLeft/Comapny/Company";
import DeliveryAddress from "./ColumnLeft/DeliveryAddress/DeliveryAddress";
import CartSummary from "../ViewCart/FillCart/CartSummary/CartSummary";

function Order() {
  /*---------Deliver component---------*/
  const [deliver, setDeliver] = useState("0");

  function handleDeliver(e) {
    setDeliver(e.target.value);
  }
  /*---------Shopper component---------*/
  const [shopper, setShopper] = useState("0");

  function handleShopper(e) {
    setShopper(e.target.value);
  }
  /*---------Payment component---------*/
  const [payment, setPayment] = useState("0");

  function handlePayment(e) {
    setPayment(e.target.value);
  }
  return (
    <div className={styles.Order}>
      <div className={styles.gridTemplate}>
        <div className={styles.columnLeft}>
          <HeaderInfo title="Deliver and payment" />
          <div className={styles.cardFeature}>
            <Deliver handleDeliver={handleDeliver} deliver={deliver} />
            <Shopper handleShopper={handleShopper} shopper={shopper} />
            {shopper === "1" ? <Company /> : null}
            {deliver === "1" ? <Recipient /> : <DeliveryAddress />}
            {shopper === "0" ? <Invoice /> : null}
            <Payment handlePayment={handlePayment} payment={payment} />
            <ExtraInfo />
          </div>
        </div>
        <div className={styles.columnRight}>
          <DisplayProducts />
          <DeliverMethod deliver={deliver} />
          <CartSummary path="/order/summary" text="Summary" />
        </div>
      </div>
    </div>
  );
}

export default Order;
