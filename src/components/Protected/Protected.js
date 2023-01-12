import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ isLogIn, children }) {
  if (!isLogIn) {
    return <Navigate to="/log-in" replace />;
  }
  return children;
}

export default Protected;
