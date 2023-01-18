import React from "react";
import styles from "./RecoverPassword.module.scss";
import Benefits from "../Benefits/Benefits";

function RecoverPassword() {
  return (
    <div className={styles.RecoverPassword}>
      <div className={styles.divRow}>
        <div className={styles.divCol}>
          <header>Don't remember the password?</header>
          <p>
            If account is created for this e-mail we will send a message to it.
          </p>
          <form action="" className={styles.formInputs}>
            <input type="email" placeholder="E-mail" />
            <input
              type="submit"
              value="Recover passsword"
              className={styles.btnRecoverPassword}
            />
          </form>
        </div>
        <Benefits />
      </div>
    </div>
  );
}

export default RecoverPassword;
