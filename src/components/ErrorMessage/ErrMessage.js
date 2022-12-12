import React from "react";
import { ErrorMessage } from "formik";
import "./ErrMessage.scss";

function ErrMessage(pros) {
  return (
    <div className="errorComponent">
      <ErrorMessage name={pros.name} />
    </div>
  );
}

export default ErrMessage;
