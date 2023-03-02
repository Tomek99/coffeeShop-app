import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnNavigateOrder.module.scss";

function BtnNavigateOrder({ addOrder, text, path }) {
  return (
    <Link to={path} onClick={addOrder} className={styles.BtnNavigateOrder}>
      {text}
    </Link>
  );
}

export default BtnNavigateOrder;
