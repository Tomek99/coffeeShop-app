import React from "react";
import NavListElement from "../NavListElement/NavListElement";
import styles from "./AboutUsNavList.module.scss";

function AboutUsNavList() {
  const navBarList = [
    { name: "about us", path: "about-coffee-shop" },
    { name: "our team", path: "our-team" },
    { name: "FAQ", path: "faq" },
  ];
  return (
    <nav className={styles.AboutUsNavList}>
      <ul className={styles.navListElements}>
        {navBarList.map((item) => (
          <NavListElement
            isLink={false}
            key={item.name}
            name={item.name}
            path={item.path}
            activeStyle={styles.activeStyle}
          />
        ))}
      </ul>
    </nav>
  );
}

export default AboutUsNavList;
