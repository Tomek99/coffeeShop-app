import React from "react";
import PropTypes from "prop-types";
import styles from "./NavListBtn.module.scss";

function NavListElement({ name, number, switchTab, tabNumber }) {
  return (
    <li key={name}>
      <button
        className={tabNumber === number ? styles.activeStyle : undefined}
        onClick={() => switchTab(number)}
      >
        {name}
      </button>
    </li>
  );
}

NavListElement.propTypes = {
  isLink: PropTypes.bool,
  name: PropTypes.string,
  path: PropTypes.string,
  activeStyle: PropTypes.string,
  style: PropTypes.string,
};
export default NavListElement;
