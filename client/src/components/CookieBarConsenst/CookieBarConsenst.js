import React from "react";
import CookieConsent from "react-cookie-consent";

function CookieBarConsenst() {
  const btnStyle = {
    color: "#fff",
    fontSize: "13px",
    borderRadius: "8px",
    background: "#0082fa",
  };
  const barStyle = {
    background: "#f2f2f2",
    color: "#000",
    fontSize: "1.2rem",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 0px 1px 1px,rgba(255, 255, 255, 0.13) 0px 0px 1px 1px",
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="myAwesomeCookieName2"
      style={barStyle}
      buttonStyle={btnStyle}
      expires={150}
    >
      We use cookies to enhance your experience 🍪 We use cookies and similar
      technologies to personalize content, analyze site traffic, and improve
      your browsing experience. By clicking “Accept” you consent to the use of
      all cookies.
    </CookieConsent>
  );
}

export default CookieBarConsenst;
