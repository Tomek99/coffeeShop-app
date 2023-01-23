import React, { useContext } from "react";
import { useState } from "react";
import styles from "./LogIn.module.scss";

import { Link } from "react-router-dom";
import Benefits from "../Benefits/Benefits";
import RegisterReference from "./RegisterReference/RegisterReference";
import { Context } from "../../Contexts/Context";
import axios from "axios";

function SignIn() {
  const [errorMessages, setErrorMessages] = useState({});
  const { logIn } = useContext(Context);

  axios
    .get("/api/auth/data")
    .then(function (response) {
      // handle success
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };
  return (
    <div className={styles.SignIn}>
      <div className={styles.divRow}>
        <div className={styles.formContainer}>
          <header>Log in</header>
          <form onSubmit={handleSubmit} className={styles.formInputs}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                name="uname"
                placeholder="E-mail or username"
                required
              />
              {renderErrorMessage("uname")}
            </div>
            <div className={styles.inputContainer}>
              <input
                type="password"
                name="pass"
                placeholder="Password"
                required
              />
              {renderErrorMessage("pass")}
              <Link to="/recover-password" className={styles.recoverPassword}>
                Don't remember the password?
              </Link>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="submit"
                className={styles.btnSignIn}
                value="Log in"
                onClick={logIn}
              />
            </div>
          </form>
        </div>
        <div className={styles.additionInfo}>
          <RegisterReference />
          <Benefits />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
