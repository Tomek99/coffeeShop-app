import React from "react";
import FooterOrder from "../../FooterOrder/FooterOrder";
import Footer from "../../Footer/Footer";

function FooterSwitcher({ pathname }) {
  return (() => {
    switch (pathname) {
      case "/order":
      case "/order/summary":
      case "/cart":
      case "/order/success":
      case "/order/canceled":
        return <FooterOrder />;

      case "/admin":
      case "/admin/products":
      case "/admin/customers":
      case "/admin/transactions":
      case "/admin/customers-reviews":
      case "/admin/customers-messages":
        return null;
      default:
        return <Footer />;
    }
  })();
}

export default FooterSwitcher;
