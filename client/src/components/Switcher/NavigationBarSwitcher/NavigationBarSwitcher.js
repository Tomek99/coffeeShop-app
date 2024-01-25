import React from "react";
import NavigationBar from "../../NavigationBar/NavigationBar";
import NavigationBarOrder from "../../NavigationBarOrder/NavigationBarOrder";

function NavigationBarSwitcher({ pathname }) {
  if (pathname.includes("/order")) return <NavigationBarOrder />;
  else if (pathname.includes("/admin")) return <null />;
  else return <NavigationBar />;
}

export default NavigationBarSwitcher;
