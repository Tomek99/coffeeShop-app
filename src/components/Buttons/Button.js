import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ handleItem, text, isTrue }) {
  const btnMenu = { padding: "12px 35px 12px 35px" };
  const btnArticle = { padding: "6px 17.5px 6px 17.5px" };

  return (
    <button
      className={styles.btn}
      style={isTrue ? btnMenu : btnArticle}
      onClick={handleItem}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  handleItem: PropTypes.func,
  text: PropTypes.string,
  isTrue: PropTypes.bool,
};

export default Button;
