import React from "react";
import { Link } from "react-router-dom";
import styles from "./Content.module.scss";
import BtnNavigate from "../../Buttons/BtnNavigate/BtnNavigate";

function Content({ obj, slideIndex }) {
  return (() => {
    switch (slideIndex) {
      case 1:
        return (
          <div className={styles.content}>
            <header>{obj.title}</header>
            <p>{obj.text}</p>
            <BtnNavigate text={obj.btnText} redirectPage={"products"} />
          </div>
        );
      case 2:
        return (
          <div className={styles.content}>
            <header>{obj.title}</header>
            <p>{obj.text}</p>

            <BtnNavigate
              text={obj.btnText}
              redirectPage={"products/63dc02c4c2a0e09b2d62f8e8"}
            />
          </div>
        );

      default:
        return (
          <div className={`${styles.content} ${styles.content_3}`}>
            <header>{obj.title}</header>
            <p>{obj.text}</p>
            <BtnNavigate text={obj.btnText} redirectPage={"products"} />
          </div>
        );
    }
  })();
}

export default Content;
