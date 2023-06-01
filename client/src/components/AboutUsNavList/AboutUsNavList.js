import React from "react";
import NavListBtn from "./NavListBtn/NavListBtn";
import styles from "./AboutUsNavList.module.scss";
import PropTypes from "prop-types";

function AboutUsNavList({ switchTab, tabNumber }) {
  const navBarList = [
    { name: "About Us", number: 0 },
    { name: "Our Team", number: 1 },
    { name: "FAQ", number: 2 },
  ];
  return (
    <nav className={styles.AboutUsNavList}>
      <ul className={styles.navListElements}>
        {navBarList.map((item, index) => (
          <NavListBtn
            key={index}
            item={item}
            switchTab={switchTab}
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
