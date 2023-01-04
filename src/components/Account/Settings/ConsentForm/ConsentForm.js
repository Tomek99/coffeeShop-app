import React from "react";
import { Field, Form, Formik } from "formik";
import styles from "./ConsentForm.module.scss";

const initialValues = {
  checked: [],
};

function ConsentForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={styles.ConsentForm}>
          <label
            className={styles.inputLabel}
            onClick={() => {
              if (values.checked.length !== 0) {
                setFieldValue("checked", (values.checked = []));
              } else {
                setFieldValue(
                  "checked",
                  values.checked.push(
                    ...values.checked,
                    "One",
                    "Two",
                    "Five",
                    "Three"
                  )
                );
              }
            }}
          >
            <Field
              type="checkbox"
              name="checked"
              value="Zero"
              className={styles.bgInput}
            />
            Check all
          </label>
          <label className={styles.inputLabel}>
            <Field
              type="checkbox"
              name="checked"
              value="One"
              className={styles.bgInput}
            />
            I want to receive information about current offers and promotions by
            email <span className={styles.moreInfo}>More</span>
          </label>
          <label className={styles.inputLabel}>
            <Field
              type="checkbox"
              name="checked"
              value="Two"
              className={styles.bgInput}
            />
            I want to receive information by phone{" "}
            <span className={styles.moreInfo}>More</span>
          </label>
          <label className={styles.inputLabel}>
            <Field
              type="checkbox"
              name="checked"
              value="Five"
              className={styles.bgInput}
            />
            I want to recive by phone{" "}
            <span className={styles.moreInfo}>More</span>
          </label>
          <label className={styles.inputLabel}>
            <Field
              type="checkbox"
              name="checked"
              value="Three"
              className={styles.bgInput}
            />
            I want to receive an offer tailored to my needs{" "}
            <span className={styles.moreInfo}>More</span>
          </label>
          <button type="submit" className={styles.btnSaveConsents}>
            Save consents
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ConsentForm;
