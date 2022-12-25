import React from "react";
import NavListBtn from "./NavListBtn/NavListBtn";
import styles from "./AboutUsNavList.module.scss";
import PropTypes from "prop-types";

function AboutUsNavList({ switchTab, tabNumber }) {
  const navBarList = [
    { name: "about us", number: 0 },
    { name: "our team", number: 1 },
    { name: "FAQ", number: 2 },
  ];
  return (
    <nav className={styles.AboutUsNavList}>
      <ul className={styles.navListElements}>
        {navBarList.map((item) => (
          <NavListBtn
            number={item.number}
            key={item.name}
            name={item.name}
            switchTab={switchTab}
            activeStyle={styles.activeStyle}
            tabNumber={tabNumber}
          />
        ))}
      </ul>
    </nav>
  );
}

AboutUsNavList.propTypes = {
  switchTab: PropTypes.func,
  tabNumber: PropTypes.number,
};
export default AboutUsNavList;
