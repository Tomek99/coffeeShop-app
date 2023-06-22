import React from "react";
import styles from "./NavElement.module.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavElement({ item, id, tab }) {
  const { text, path } = item;
  const check = <AiOutlineCheckCircle size={25} color={`var(--text-color)`} />;

  const dot = (
    <span
      className={styles.dot}
      style={tab === id ? { color: "var(--main-color)" } : null}
    >
      {id}
    </span>
  );
  return (
    <div className={styles.NavElement}>
      <li className={styles.LiElement}>
        <Link
          to={path}
          className={
            tab > id ? styles.link : `${styles.link} ${styles.disabledLink}`
          }
        >
          <span style={id < tab ? null : { marginBottom: "3px" }}>
            {id < tab ? check : dot}
          </span>
          <span
            style={
              tab === id
                ? { color: "var(--main-color" }
                : { color: "var(--text-color)" }
            }
          >
            {text}
          </span>
        </Link>
      </li>
    </div>
  );
}

export default NavElement;
