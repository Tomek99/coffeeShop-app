import React from "react";
import { Field } from "formik";
import ErrMessage from "../../ErrorMessage/ErrMessage";
import styles from "./FieldComponent.module.scss";

function FieldComponent({ item }) {
  return (
    <div>
      <Field
        type={item.type}
        name={item.name}
        placeholder={item.placeholder}
        className={styles.inputText}
      />
      <ErrMessage name={item.name} />
    </div>
  );
}

export default FieldComponent;
