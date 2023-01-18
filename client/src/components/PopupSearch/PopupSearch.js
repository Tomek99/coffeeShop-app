import React from "react";
import styles from "./PopupSearch.module.scss";
import PropTypes from "prop-types";

function Popup({ isSearchOpen }) {
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

Popup.propTypes = {
  isSearchOpen: PropTypes.bool,
};

export default Popup;
