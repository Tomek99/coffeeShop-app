import React from "react";
import styles from "./BlurScreen.module.scss";
import PropTypes from "prop-types";

function BlurScreen({
  isCartOpen,
  isSearchOpen,
  isNavigationOpen,
  handleAside,
  handleCart,
  handleNavigation,
  handleSearch,
}) {
  function handleBlurScreen() {
    if (isCartOpen) handleCart();
    else if (isNavigationOpen) handleNavigation();
    else if (isSearchOpen) handleSearch();
    else handleAside();
  }

  return <div className={styles.BlurScreen} onClick={handleBlurScreen}></div>;
}

BlurScreen.propTypes = {
  isCartOpen: PropTypes.bool,
  isSearchOpen: PropTypes.bool,
  isNavigationOpen: PropTypes.bool,
  handleAside: PropTypes.func,
  handleCart: PropTypes.func,
  handleNavigation: PropTypes.func,
  handleSearch: PropTypes.func,
};
export default BlurScreen;
