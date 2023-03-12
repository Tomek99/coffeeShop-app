import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BtnNavigateOrder.module.scss";

function BtnNavigateOrder({ addOrder, text, path }) {
  const location = useLocation();

  return location.pathname === "/order" ? (
    <button type="submit" className={styles.BtnNavigateOrder}>
      {text}
    </button>
  ) : (
    <Link to={path} onClick={addOrder} className={styles.BtnNavigateOrder}>
      {text}
    </Link>
  );
}

export default BtnNavigateOrder;
