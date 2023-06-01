import React from "react";
import NavListElement from "../NavListElement/NavListElement";
import styles from "./DesktopNavigation.module.scss";
import navigationBarList from "../../../data/navigationBarList.json";
function DesktopNavigation() {
  return (
    <ul className={styles.DesktopNavigation}>
      {navigationBarList.map((item, index) => (
        <NavListElement
          isLink={false}
          key={index}
          name={item.name}
          path={item.path}
        />
      ))}
    </ul>
  );
}

export default DesktopNavigation;
