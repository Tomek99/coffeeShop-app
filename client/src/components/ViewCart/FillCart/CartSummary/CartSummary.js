import React, { useState, useContext } from "react";
import styles from "./CartSummary.module.scss";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Context } from "../../../../Contexts/Context";
import { Link } from "react-router-dom";
import BtnNavigateOrder from "../../../Buttons/BtnNavigateOrder/BtnNavigateOrder";
import BtnActive from "../../../Buttons/BtnActive/BtnActive";

function CartSummary({ path, text }) {
  const [hide, setHide] = useState(false);
  const [discount, setDiscount] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");

  const { cartValue, cartSave, addOrder } = useContext(Context);

  function handleButton() {
    setHide(!hide);
  }

  function handleDiscount() {
    setDiscountAmount("Wrong code, try again");
  }

  return (
    <div className={styles.cartSummary}>
      <div className={styles.discountKey}>
        <button
          type="button"
          className={styles.btnDiscount}
          onClick={handleButton}
        >
          <span>{hide ? "Enter your code" : "Do you have a discount?"} </span>
          {hide ? <SlArrowUp /> : <SlArrowDown />}
        </button>
        <div
          style={hide ? { display: "flex" } : { display: "none" }}
          className={styles.activeKey}
        >
          <input
            type="text"
            className={styles.inputDiscount}
            value={discount}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />
          <BtnActive handleBtn={handleDiscount} />
        </div>
        <p className={styles.discountBar}>{discountAmount}</p>
      </div>
      <div className={styles.checkout}>
        <div>
          <p className={styles.save}>
            <span>Save</span>
            <span>${cartSave.toFixed(2)}</span>
          </p>
          <p>
            <span>Total cost</span>
            <span>${cartValue.toFixed(2)}</span>
          </p>
        </div>
        <BtnNavigateOrder onClick={addOrder} text={text} path={path} />
      </div>
    </div>
  );
}

export default CartSummary;
