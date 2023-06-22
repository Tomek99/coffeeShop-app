import React, { useContext } from "react";
import { useState } from "react";
import styles from "./LogIn.module.scss";
import { Link } from "react-router-dom";
import Benefits from "../Benefits/Benefits";
import RegisterReference from "./RegisterReference/RegisterReference";
import { Context } from "../../Contexts/Context";
import { Formik, Form, Field } from "formik";
import ErrorMessage from "../ErrorMessage/ErrMessage";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import FieldComponent from "../FormikComponents/FieldComponent/FieldComponent";

const validationSchema = Yup.object({
  email: Yup.string().required("Enter email"),
  password: Yup.string().required(
    "Enter your password. This field can't be empty"
  ),
});

function LogIn() {
  const [showPassword, setShowPassowrd] = useState(false);
  const [error, setError] = useState(null);
  const { logIn } = useContext(Context);

  function showPasswordBtn() {
    setShowPassowrd(!showPassword);

    var x = document.getElementById("showPass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const onSubmit = async (values, { setSubmitting }) => {
    setError(null);
    try {
      const isSuccess = await axios.post(
        `${process.env.REACT_APP_API_URI}/api/users/login`,
        values
      );

      if (isSuccess.status === 200) logIn(isSuccess.data);
      else setError("Invalid email or password");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className={styles.SignIn}>
      <div className={styles.divRow}>
        <div className={styles.formContainer}>
          <header>Log in</header>
          <Formik
            initialValues={{ email: "", password: "", loggedDevice: uuidv4() }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className={styles.formInputs}>
              <div className={styles.inputContainer}>
                <Field type="text" name="email" placeholder="Email" />
                <ErrorMessage name="email" />
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputPassword}>
                  <Field
                    type="password"
                    name="password"
                    id="showPass"
                    placeholder="Password"
                  />
                  <button type="button" onClick={showPasswordBtn}>
                    {showPassword ? "hide" : "show"}
                  </button>
                </div>
                <ErrorMessage name="password" />
                <div>
                  {error !== null ? (
                    <p className={styles.error}>{error}</p>
                  ) : null}
                  <Link
                    to="/recover-password"
                    className={styles.recoverPassword}
                  >
                    Don't remember the password?
                  </Link>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <button type="submit" className={styles.btnSignIn}>
                  Log in
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className={styles.additionInfo}>
          <RegisterReference />
          <Benefits />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
