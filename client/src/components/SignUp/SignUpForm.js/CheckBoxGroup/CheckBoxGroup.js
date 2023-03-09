import { ErrorMessage, Field } from "formik";
import React from "react";
import styles from "./CheckBoxGroup.module.scss";

function CheckBoxGroup({ setFieldValue, values }) {
  return (
    <div role="group" className={styles.checkboxGroup}>
      <h3>Formal consents</h3>
      <label>
        <Field
          type="checkbox"
          name="checkAll"
          className={styles.inputCheckbox}
          onClick={() => {
            if (values.checkAll) {
              setFieldValue("checked", (values.checked = []));
              setFieldValue("acceptTerms", (values.acceptTerms = false));
            } else {
              setFieldValue("checked", (values.checked = ["Two", "Three"]));
              setFieldValue("acceptTerms", (values.acceptTerms = true));
            }
          }}
        />
        Check all
      </label>
      <label>
        <Field
          type="checkbox"
          name="acceptTerms"
          className={styles.inputCheckbox}
        />
        Accept Terms & Conditions*
      </label>
      <ErrorMessage name="acceptTerms">
        {(msg) => <div className={styles.checkBoxMessage}>{msg}</div>}
      </ErrorMessage>

      <label>
        <Field
          type="checkbox"
          name="checked"
          value="Two"
          className={styles.inputCheckbox}
        />
        I want to receive information about current offers
        <br /> and special one in the e-mail message.
      </label>
      <label>
        <Field
          type="checkbox"
          name="checked"
          value="Three"
          className={styles.inputCheckbox}
        />
        I want to receive offers matched to my needs.
      </label>
    </div>
  );
}

export default CheckBoxGroup;
