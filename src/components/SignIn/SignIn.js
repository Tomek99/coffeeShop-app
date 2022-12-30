import React from "react";
import { useState } from "react";
import styles from "./SignIn.module.scss";

import { Link } from "react-router-dom";
import Benefits from "../Benefits/Benefits";
import RegisterReference from "./RegisterReference/RegisterReference";

function SignIn() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          <header>Sign in</header>
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
                value="Sign in"
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
