import React from "react";
import styles from "./PopupSearch.module.scss";

function Popup(props) {
  const isSearchOpen = props.isSearchOpen;
  return (
    <div
      className={
        isSearchOpen ? `${styles.popupBox} ${styles.active}` : styles.popupBox
      }
    >
      <input type="text" id="search" name="search" />
    </div>
  );
}

export default Popup;
