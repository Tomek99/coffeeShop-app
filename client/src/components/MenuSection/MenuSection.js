import React from "react";
import styles from "./MenuSection.module.scss";
import Menu from "../../data/menu.json";
import HeaderSection from "../HeaderSection/HeaderSection";
import MenuProduct from "../MenuProudct/MenuProduct";
import PropTypes from "prop-types";

function MenuSection({ isTrue }) {
  return (
    <div className={styles.MenuSection} id="menuSection">
      <HeaderSection firstWord="our" secondWord="menu" />

      <div className={styles.itemsProduct}>
        {isTrue
          ? Menu.slice(0, 3).map((item, index) => (
              <MenuProduct key={index} item={item} id={item.id} />
            ))
          : Menu.map((item, index) => (
              <MenuProduct key={index} item={item} id={item.id} />
            ))}
      </div>
    </div>
  );
}

MenuSection.propTypes = {
  isTrue: PropTypes.bool,
  basketItems: PropTypes.func,
};
export default MenuSection;
