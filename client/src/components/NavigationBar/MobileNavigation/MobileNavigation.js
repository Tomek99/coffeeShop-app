import React from "react";
import { Link } from "react-router-dom";
import NBarAside from "../../NBarAside/NBarAside";
import styles from "./MobileNavigation.module.scss";

function MobileNavigation({ handleNavigation, isNavigationOpen }) {
  const navBarList = [
    { name: "Home", path: "/" },
    { name: "Products", path: "products" },
    { name: "About", path: "about-us" },
    { name: "Contact", path: "contact" },
    { name: "Blog", path: "blog" },
  ];

  return (
    <ul
      className={
        isNavigationOpen
          ? `${styles.MobileNavigation} ${styles.active}`
          : styles.MobileNavigation
      }
    >
      <NBarAside handleBtn={handleNavigation} />
      <div className={styles.divList}>
        {navBarList.map((item) => (
          <li key={item.key}>
            <Link to={item.path} className={styles.linkElement}>
              {item.name}
            </Link>
          </li>
        ))}
      </div>
    </ul>
  );
}
export default MobileNavigation;
