import React from "react";
import { Field } from "formik";
import ErrMessage from "../../ErrorMessage/ErrMessage";
import styles from "./FieldComponentEdit.module.scss";

function FieldComponentEdit({ item }) {
  return (
    <div className={styles.FieldComponentEdit}>
      <label htmlFor={item.name}>{item.placeholder}</label>
      <Field
        type={item.type}
        name={item.name}
        placeholder={item.placeholder}
        className={styles.inputText}
        id={item.name}
        disabled={item.inputDisabled}
        style={{
          backgroundColor: item.inputDisabled ? "var(--dark-grey)" : null,
        }}
      />
      <ErrMessage name={item.name} />
    </div>
  );
}
// --light-greay
//  --dark-grey
export default FieldComponentEdit;
