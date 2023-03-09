import React from "react";
import styles from "./SignUp.module.scss";
import Benefits from "../Benefits/Benefits";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm.js/SignUpForm";

function SignUp() {
  return (
    <div className={styles.SignUp}>
      <div className={styles.divRow}>
        <div className={styles.divLeft}>
          <div className={styles.formContainer}>
            <header>Register in 20 seconds</header>
            <SignUpForm />
          </div>
          <div className={styles.divSignIn}>
            <span>Do you have an account already?</span>
            <Link to="/log-in"> Log in</Link>
          </div>
        </div>
        <Benefits />
      </div>
    </div>
  );
}

export default SignUp;
