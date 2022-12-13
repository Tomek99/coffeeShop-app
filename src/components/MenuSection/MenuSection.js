import React from "react";
import styles from "./MenuSection.module.scss";
import Menu from "../../data/menu.json";
import HeaderSection from "../HeaderSection/HeaderSection";
import MenuProduct from "../MenuProudct/MenuProduct";

function MenuSection(props) {
  return (
    <div className={styles.MenuSection} id="menuSection">
      <HeaderSection firstWord="our" secondWord="menu" />
      <div className={styles.itemsProduct}>
        {Menu.map((item) => {
          return (
            <MenuProduct
              idProduct={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              addItem={props.addItem}
              basketItems={props.basketItems}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MenuSection;
