import React from "react";
import styles from "./Benefits.module.scss";
import { BsCardChecklist } from "react-icons/bs";
import { GoPackage } from "react-icons/go";
import { TbShoppingCartDiscount, TbWind } from "react-icons/tb";

function Benefits() {
  return (
    <div className={styles.Benefits}>
      <h1>Why you should create an account on cofee shop</h1>
      <p>
        <TbWind size={50} /> <span>Order faster</span>
      </p>
      <p>
        <BsCardChecklist size={50} />
        <span>Check previous orders</span>
      </p>
      <p>
        <GoPackage size={50} />
        <span>Track your order status</span>
      </p>
      <p>
        <TbShoppingCartDiscount size={50} />
        <span>Benefit from discounts and special bargains</span>
      </p>
    </div>
  );
}

export default Benefits;
