import React from "react";
import styles from "./OrderDetailsData.module.scss";
import BtnReturn from "../../../../../Buttons/BtnReturn/BtnReturn";
import OrderDetailsCostSummary from "./OrderDetailsCostSummary/OrderDetailsCostSummary";
import OrderDetailsContent from "./OrderDetailsDelivery/OrderDetailsContent";
import OrderDetailsProductsOrdered from "./OrderDetailsProductsOrdered/OrderDetailsProductsOrdered";

function OrderDetailsData({ data }) {
  const { subtotal, total } = data;
  return (
    <div className={styles.OrderDetailsData}>
      <div className={styles.buttonShowOrders}>
        <BtnReturn text="Show all orders" returnPath="/purchased-products" />
      </div>
      <div className={styles.divContent}>
        <OrderDetailsContent data={data} />
        <OrderDetailsProductsOrdered data={data.products} />
        <OrderDetailsCostSummary total={total} subtotal={subtotal} />
      </div>{" "}
      :
    </div>
  );
}

export default OrderDetailsData;
