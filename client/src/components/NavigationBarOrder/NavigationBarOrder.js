import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationBarOrder.module.scss";
import NavElement from "./NavElement/NavElement";

function NavigationBarOrder() {
  const [tab, setTab] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/order") {
      setTab(1);
    } else if (location.pathname === "/order/summary") {
      setTab(2);
    } else if (
      location.pathname === "/order/success" ||
      location.pathname === "/order/canceled"
    ) {
      setTab(3);
    }
  }, [location, tab]);
  const navList = [
    {
      text: "Cart",
      path: "cart",
    },
    { text: "Deliver and payment", path: "order" },
    { text: "Summary", path: "summary" },
    { text: "Done", path: "" },
  ];

  return (
    <div className={styles.NavigationBarOrder}>
      <div className={styles.flexDiv}>
        <Link to="/" className={styles.divImg}>
          <img src="../images/logo.png" alt="" />
        </Link>
        <div className={styles.navigationDivList}>
          <ul className={styles.ulList}>
            {navList.map((item, index) => (
              <NavElement item={item} id={index} key={index} tab={tab} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationBarOrder;
