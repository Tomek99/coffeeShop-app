import { Field } from "formik";
import React from "react";
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

// width: 100%;
// border: var(--border);
// border-radius: 16px;
// padding: 10px 0px 10px 10px;
// background: var(--black);
// color: #fff;
