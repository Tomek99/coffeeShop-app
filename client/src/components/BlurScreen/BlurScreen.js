import React from "react";
import styles from "./BlurScreen.module.scss";
import PropTypes from "prop-types";

function BlurScreen({ isCartOpen, handleAside, handleCart }) {
  function handleBlurScreen() {
    if (isCartOpen) handleCart();
    else handleAside();
  }

  return <div className={styles.BlurScreen} onClick={handleBlurScreen}></div>;
}

BlurScreen.propTypes = {
  isCartOpen: PropTypes.bool,
  handleAside: PropTypes.func,
  handleCart: PropTypes.func,
};
export default BlurScreen;
