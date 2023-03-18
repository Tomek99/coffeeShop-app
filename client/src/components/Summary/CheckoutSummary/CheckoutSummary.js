import React, { useContext } from "react";
import BtnPurchasePay from "../../Buttons/BtnPurchasePay/BtnPurchasePay";
import styles from "./CheckoutSummary.module.scss";
import PropTypes from "prop-types";
import axios from "axios";
import { Context } from "../../../Contexts/Context";

function CheckoutSummary() {
  const { order } = useContext(Context);

  const noPrizeSave = (order.cartValue + order.save).toFixed(2);

  async function handleCheckout() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URI}/api/stripe/create-checkout-session`,
        order
      );

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className={styles.CheckoutSummary}>
      <div className={styles.divContent}>
        <div className={styles.divRow}>
          <span style={{ alignSelf: "flex-end" }}>Cart value</span>
          <p className={styles.pCol}>
            <span className={styles.noDiscount}>${noPrizeSave}</span>
            <span>${order.cartValue.toFixed(2)}</span>
          </p>
        </div>
        <div className={styles.divRow}>
          <span>Delivery</span>
          <div>
            <span>
              {order.deliveryFee !== "Free" ? `$${order.deliveryFee}` : "$0.00"}
            </span>
          </div>
        </div>
        <div className={styles.divRow}>
          <span>Payment</span>
          <span>
            {order.paymentFee === "Free" ? "$0.00" : `$${order.paymentFee}`}
          </span>
        </div>
      </div>
      <div className={styles.divContent}>
        <div className={styles.divBorder}>
          <div
            className={styles.divRow}
            style={{ color: "#38b32a", fontWeight: "bold" }}
          >
            <span style={{ marginBottom: "5px" }}>Save</span>
            <span>${order.save.toFixed(2)}</span>
          </div>
          <div className={styles.divRow} style={{ fontWeight: "bold" }}>
            <span>Total cost</span>
            <span>${order.totalCost.toFixed(2)}</span>
          </div>
        </div>

        <BtnPurchasePay handleCheckout={handleCheckout} />
      </div>
    </div>
  );
}
CheckoutSummary.propTypes = {
  // deliveryFee: PropTypes.string,
  // paymentFee: PropTypes.string,
  // save: PropTypes.number,
  // cartValue: PropTypes.number,
};
export default CheckoutSummary;
