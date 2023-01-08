import React, { useEffect } from "react";
import { MenuSection } from "../../components";

function Menu() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <MenuSection isTrue={false} />
    </>
  );
}

export default Menu;
