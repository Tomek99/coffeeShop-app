import React from "react";
import styles from "./BlurScreen.module.scss";

function BlurScreen({ isCartOpen, handleAside, handleCart }) {
  function handleBlurScreen() {
    if (isCartOpen) handleCart();
    else handleAside();
  }

  return <div className={styles.BlurScreen} onClick={handleBlurScreen}></div>;
}

export default BlurScreen;
