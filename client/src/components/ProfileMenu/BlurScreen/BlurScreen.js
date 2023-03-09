import React from "react";
import styles from "./BlurScreen.module.scss";
import PropTypes from "prop-types";

function BlurScreen({ handleBlurScreen }) {
  return <div className={styles.BlurScreen} onClick={handleBlurScreen}></div>;
}
BlurScreen.propTypes = {
  handleBlurScreen: PropTypes.func,
};
export default BlurScreen;
