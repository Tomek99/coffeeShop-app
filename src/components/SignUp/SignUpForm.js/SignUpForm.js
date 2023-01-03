import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrMessage from "../../ErrorMessage/ErrMessage";
import styles from "./SignUpForm.module.scss";

const onSubmit = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  }, 400);
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  acceptTerms: false,
  checkAll: false,
  checked: [],
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Must be 3 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Must be 3 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Required"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required"
  ),
});

const fieldData = [
  {
    type: "text",
    name: "firstName",
    placeholder: "First name",
  },
  {
    type: "text",
    name: "lastName",
    placeholder: "Last name",
  },
  {
    type: "email",
    name: "email",
    placeholder: "E-mail",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
  },
];

function SignUpForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue, values }) => (
        <Form className={styles.formInputs}>
          {fieldData.map((item) => (
            <div className={styles.formInput} key={item.name}>
              <Field
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                className={styles.inputText}
              />

              <ErrMessage name={item.name} />
            </div>
          ))}

          <div role="group" className={styles.checkboxGroup}>
            <h3>Formal consents {initialValues.acceptTerms}</h3>
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
                    setFieldValue(
                      "checked",
                      (values.checked = ["Two", "Three"])
                    );
                    setFieldValue("acceptTerms", (values.acceptTerms = true));
                  }

                  console.log(values);
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
          <button type="submit" className={styles.btnSignUp}>
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
