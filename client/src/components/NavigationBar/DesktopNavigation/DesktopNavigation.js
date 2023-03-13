import React from "react";
import NavListElement from "../NavListElement/NavListElement";
import styles from "./DesktopNavigation.module.scss";

function DesktopNavigation() {
  const navBarList = [
    { name: "Home", path: "/" },
    { name: "Products", path: "products" },
    { name: "About", path: "about-us" },
    { name: "Contact", path: "contact" },
    { name: "Blog", path: "blog" },
  ];

  return (
    <ul className={styles.DesktopNavigation}>
      {navBarList.map((item, index) => (
        <NavListElement
          isLink={true}
          key={index}
          name={item.name}
          path={item.path}
        />
      ))}
    </ul>
  );
}

export default DesktopNavigation;
