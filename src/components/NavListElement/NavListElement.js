import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavListElement(props) {
  const { isLink, name, path, activeStyle, style } = props;
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

export default NavListElement;
