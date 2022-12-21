import React from "react";
import { BeansVideo, MenuSection } from "../../components";

function Menu(props) {
  return (
    <>
      <MenuSection isTrue={false} addItem={props.addItem} />
    </>
  );
}

export default Menu;
