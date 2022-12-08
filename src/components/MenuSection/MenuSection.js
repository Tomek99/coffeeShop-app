import React from "react";
import "../../styles/MenuSection.scss";
import Menu from "../../data/menu.json";
import Header from "../Header/Header";
import MenuProduct from "../MenuProudct/MenuProduct";

function MenuSection(props) {
  return (
    <div className="MenuSection" id="menuSection">
      <Header firstWord="our" secondWord="menu" />
      <div className="itemsProduct">
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
