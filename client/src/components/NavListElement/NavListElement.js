import React from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavListElement({ isLink, name, path, activeStyle, style }) {
  return (
    <li className={style} key={name}>
      {isLink ? (
        <Link to={path}>{name}</Link>
      ) : (
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
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
  activeStyle: PropTypes.string,
  style: PropTypes.string,
};
export default NavListElement;
