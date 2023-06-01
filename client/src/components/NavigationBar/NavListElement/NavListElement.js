import React from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavListElement.module.scss";

function NavListElement({ isLink, name, path }) {
  return (
    <li className={styles.NavListElement}>
      {isLink ? (
        <Link to={path}>{name}</Link>
      ) : (
        <NavLink
          to={path}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? styles.activeNavLink
              : styles.navLink
          }
        >
          {name}
        </NavLink>
      )}
    </li>
  );
}

NavListElement.propTypes = {
  isLink: PropTypes.bool,
  name: PropTypes.string,
  path: PropTypes.string,

  style: PropTypes.string,
};
export default NavListElement;
