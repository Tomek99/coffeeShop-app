import React from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterReference.module.scss";

function RegisterReference() {
  return (
    <div className={styles.RegisterReference}>
      <header>Don't have an account yet?</header>
      <Link to="/sign-up" className={styles.btnReference}>
        Create an account
      </Link>
      <button></button>
    </div>
  );
}

export default RegisterReference;
