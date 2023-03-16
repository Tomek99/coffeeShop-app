import React, { useContext } from "react";
import { Context } from "../../../Contexts/Context";
import BtnPurchasePay from "../../Buttons/BtnPurchasePay/BtnPurchasePay";
import styles from "./CheckoutSummary.module.scss";

function CheckoutSummary() {
  const { cartValue, cartSave } = useContext(Context);

  const price = (cartValue + cartSave).toFixed(2);
  return (
    <div className={styles.CheckoutSummary}>
      <div className={styles.divContent}>
        <div className={styles.divRow}>
          <span style={{ alignSelf: "flex-end" }}>Cart value</span>
          <p className={styles.pCol}>
            <span className={styles.noDiscount}>${price}</span>
            <span>${cartValue}</span>
          </p>
        </div>
        <div className={styles.divRow}>
          <span>Delivery</span>
          <div>
            <span>$0.00</span>
          </div>
        </div>
        <div className={styles.divRow}>
          <span>Payment</span>
          <span>$0.00</span>
        </div>
      </div>
      <div className={styles.divContent}>
        <div className={styles.divBorder}>
          <div
            className={styles.divRow}
            style={{ color: "#38b32a", fontWeight: "bold" }}
          >
            <span style={{ marginBottom: "5px" }}>Save</span>
            <span>${cartSave}</span>
          </div>
          <div className={styles.divRow} style={{ fontWeight: "bold" }}>
            <span>Total cost</span>
            <span>$</span>
          </div>
        </div>
        <BtnPurchasePay />
      </div>
    </div>
  );
}

export default CheckoutSummary;
