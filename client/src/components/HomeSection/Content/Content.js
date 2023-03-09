import React from "react";
import { Link } from "react-router-dom";
import styles from "./Content.module.scss";

function Content({ obj, slideIndex }) {
  return (() => {
    switch (slideIndex) {
      case 1:
        return (
          <div className={styles.content}>
            <header>{obj.title}</header>
            <p>{obj.text}</p>
            <a href="#menuSection">{obj.btnText}</a>
          </div>
        );
      case 2:
        return (
          <div className={styles.content}>
            <header>{obj.title}</header>
            <p>{obj.text}</p>
            <Link to="products/63dc02c4c2a0e09b2d62f8e8">{obj.btnText}</Link>
          </div>
        );

      default:
        return (
          <div className={`${styles.content} ${styles.content_3}`}>
            <header>{obj.title}</header>
            <p>{obj.text}</p>
            <Link to="products">{obj.btnText}</Link>
          </div>
        );
    }
  })();
}

export default Content;
