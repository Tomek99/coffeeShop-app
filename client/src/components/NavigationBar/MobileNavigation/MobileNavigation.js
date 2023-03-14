import React from "react";
import { Link } from "react-router-dom";
import NBarAside from "../../NBarAside/NBarAside";
import styles from "./MobileNavigation.module.scss";
import navigationBarList from "../../../data/navigationBarList.json";

function MobileNavigation({ handleNavigation, isNavigationOpen }) {
  return (
    <ul
      className={
        isNavigationOpen
          ? `${styles.MobileNavigation} ${styles.active}`
          : styles.MobileNavigation
      }
    >
      <NBarAside
        handleBtn={handleNavigation}
        isCart={false}
        title="Navigation"
      />
      <div className={styles.divList}>
        {navigationBarList.map((item) => (
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
