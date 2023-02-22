import React, { useState, useContext } from "react";
import styles from "./CartSummary.module.scss";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Context } from "../../../../Contexts/Context";

function CartSummary() {
  const [hide, setHide] = useState(false);
  const { cartValue, cartSave } = useContext(Context);

  function handleButton() {
    setHide(!hide);
  }
  return (
    <div className={styles.cartSummary}>
      <div className={styles.discountKey}>
        <button className={styles.btnDiscount} onClick={handleButton}>
          <span>{hide ? "Enter your code" : "Do you have a discount?"} </span>
          {hide ? <SlArrowUp /> : <SlArrowDown />}
        </button>
        <div
          style={hide ? { display: "flex" } : { display: "none" }}
          className={styles.activeKey}
        >
          <input type="text" />
          <button type="button">Active</button>
        </div>
      </div>
      <div className={styles.checkout}>
        <div>
          <p>
            <span>Save</span>
            <span>${cartSave.toFixed(2)}</span>
          </p>
          <p>
            <span>Total cost</span>
            <span>${cartValue.toFixed(2)}</span>
          </p>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartSummary;
