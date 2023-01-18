import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ isLogIn, children, navigate }) {
  if (!isLogIn) {
    return <Navigate to={navigate} replace />;
  }
  return children;
}

export default Protected;
