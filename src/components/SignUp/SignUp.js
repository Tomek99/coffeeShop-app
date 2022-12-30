import React from "react";
import styles from "./SignUp.module.scss";
import Benefits from "../Benefits/Benefits";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ErrMessage from "../ErrorMessage/ErrMessage";

const onSubmit = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  }, 400);
};

const initialValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
  toggle: false,
  checked: [],
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be 3 characters or less")
    .required("Required"),
  surname: Yup.string()
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
});

function SignUp() {
  return (
    <div className={styles.SignUp}>
      <div className={styles.divRow}>
        <div className={styles.divLeft}>
          <div className={styles.formContainer}>
            <header>Sign up</header>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form className={styles.formInputs}>
                <div className={styles.formInput}>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={styles.inputText}
                  />
                  <ErrMessage name="name" />
                </div>

                <div className={styles.formInput}>
                  <Field
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    className={styles.inputText}
                  />
                  <ErrMessage name="surname" />
                </div>

                <div className={styles.formInput}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className={styles.inputText}
                  />
                  <ErrMessage name="email" />
                </div>

                <div className={styles.formInput}>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={styles.inputText}
                  />
                  <ErrMessage name="password" />
                </div>

                <div role="group" className={styles.checkboxGroup}>
                  <h3>Formal consents</h3>
                  <label>
                    <Field
                      type="checkbox"
                      name="checked"
                      value="One"
                      className={styles.inputCheckbox}
                    />
                    Check all
                  </label>
                  <label>
                    <Field
                      type="checkbox"
                      name="checked"
                      value="Four"
                      className={styles.inputCheckbox}
                    />
                    I am accepted the store rules*
                  </label>
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
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
          <div className={styles.divSignIn}>
            <span>Do you have an account already?</span>
            <Link to="/sign-in"> Sign in</Link>
          </div>
        </div>
        <Benefits />
      </div>
    </div>
  );
}

export default SignUp;
