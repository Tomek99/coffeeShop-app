import React from "react";
import "../../styles/PopupSearch.scss";

function Popup(props) {
  const isSearchOpen = props.isSearchOpen;
  return (
    <div className={isSearchOpen ? "popup-box active" : "popup-box"}>
      <input type="text" id="search" name="search" />
    </div>
  );
}

export default Popup;
