import React from "react";
import { MenuSection } from "../../components";

function Menu(props) {
  return (
    <>
      <MenuSection isTrue={false} addItem={props.addItem} />
    </>
  );
}

export default Menu;
