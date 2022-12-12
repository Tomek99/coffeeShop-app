import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <header>
      {props.firstWord} <span>{props.secondWord}</span>
    </header>
  );
}

export default Header;
