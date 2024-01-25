import React from "react";
import FooterOrder from "../../FooterOrder/FooterOrder";
import Footer from "../../Footer/Footer";

function FooterSwitcher({ pathname }) {
  if (pathname.includes("/order")) return <FooterOrder />;
  else if (pathname.includes("/admin")) return <null />;
  else return <Footer />;
}

export default FooterSwitcher;
