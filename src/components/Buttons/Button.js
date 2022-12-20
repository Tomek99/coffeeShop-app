import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { handleItem, text, isTrue } = props;

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

export default Button;
