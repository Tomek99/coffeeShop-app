import React from "react";
import BtnPurchasePay from "../../Buttons/BtnPurchasePay/BtnPurchasePay";
import styles from "./CheckoutSummary.module.scss";
import PropTypes from "prop-types";

function CheckoutSummary({ deliveryFee, paymentFee, save, cartValue }) {
  const noPrizeSave = (cartValue + save).toFixed(2);
  const totalCost =
    cartValue + parseFloat(paymentFee) + parseFloat(deliveryFee);
  return (
    <div className={styles.CheckoutSummary}>
      <div className={styles.divContent}>
        <div className={styles.divRow}>
          <span style={{ alignSelf: "flex-end" }}>Cart value</span>
          <p className={styles.pCol}>
            <span className={styles.noDiscount}>${noPrizeSave}</span>
            <span>${cartValue}</span>
          </p>
        </div>
        <div className={styles.divRow}>
          <span>Delivery</span>
          <div>
            <span>{deliveryFee !== "Free" ? `$${deliveryFee}` : "$0.00"}</span>
          </div>
        </div>
        <div className={styles.divRow}>
          <span>Payment</span>
          <span>{paymentFee === "Free" ? "$0.00" : `$${paymentFee}`}</span>
        </div>
      </div>
      <div className={styles.divContent}>
        <div className={styles.divBorder}>
          <div
            className={styles.divRow}
            style={{ color: "#38b32a", fontWeight: "bold" }}
          >
            <span style={{ marginBottom: "5px" }}>Save</span>
            <span>${save}</span>
          </div>
          <div className={styles.divRow} style={{ fontWeight: "bold" }}>
            <span>Total cost</span>
            <span>${totalCost}</span>
          </div>
        </div>
        <BtnPurchasePay />
      </div>
    </div>
  );
}
CheckoutSummary.propTypes = {
  deliveryFee: PropTypes.string,
  paymentFee: PropTypes.string,
  save: PropTypes.number,
  cartValue: PropTypes.number,
};
export default CheckoutSummary;
