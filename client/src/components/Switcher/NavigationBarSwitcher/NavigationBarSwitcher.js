import React from "react";
import NavigationBar from "../../NavigationBar/NavigationBar";
import NavigationBarOrder from "../../NavigationBarOrder/NavigationBarOrder";

function NavigationBarSwitcher({ pathname }) {
  return (() => {
    switch (pathname) {
      case "/order":
      case "/order/summary":
      case "/order/success":
      case "/order/canceled":
        return <NavigationBarOrder />;

      case "/admin":
      case "/admin/products":
      case "/admin/customers":
      case "/admin/transactions":
      case "/admin/reviews":
        return <null />;
      default:
        return <NavigationBar />;
    }
  })();
}

export default NavigationBarSwitcher;
