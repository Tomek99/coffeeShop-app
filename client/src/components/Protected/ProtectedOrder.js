import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function Protected({ isLogIn, cartItemsLen, children, navigate }) {
  if (!(isLogIn && cartItemsLen)) {
    return <Navigate to={navigate} replace />;
  }
  return children;
}

Protected.propTypes = {
  isLogIn: PropTypes.any,
  children: PropTypes.object,
  navigate: PropTypes.string,
  productsLen: PropTypes.number,
};
export default Protected;
