import React from "react";
import styles from "./MenuSection.module.scss";
import Menu from "../../data/menu.json";
import HeaderSection from "../HeaderSection/HeaderSection";
import MenuProduct from "../MenuProudct/MenuProduct";
import PropTypes from "prop-types";

function MenuSection({ isTrue, basketItems }) {
  return (
    <div className={styles.MenuSection} id="menuSection">
      <HeaderSection firstWord="our" secondWord="menu" />

      <div className={styles.itemsProduct}>
        {isTrue
          ? Menu.slice(0, 3).map((item) => (
              <MenuProduct
                id={item.id}
                key={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                quantity={item.quantity}
                basketItems={basketItems}
              />
            ))
          : Menu.map((item) => (
              <MenuProduct
                id={item.id}
                key={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                quantity={item.quantity}
                basketItems={basketItems}
              />
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
