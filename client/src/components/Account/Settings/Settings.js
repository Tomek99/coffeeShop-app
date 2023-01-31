import React, { useEffect } from "react";
import Support from "../Support/Support";
import AccountData from "./AccountData/AccountData";
import ConsentForm from "./ConsentForm/ConsentForm";
import styles from "./Settings.module.scss";

function Settings() {
  const data = [
    {
      title: "Your data",
      content: "111 222 333",
      fullName: "Tomasz Skupień",
      btnText: "Edit",
    },
    {
      title: "E-mail address",
      content: "test@gmail.com",
      btnText: "Change",
    },
    {
      title: "Password",
      content: "fawfawf",
      btnText: "Change",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <header style={{ fontSize: "2.5rem" }}>Account settings</header>
      <h3 style={{ fontSize: "2rem" }}>Account data</h3>
      <div className={styles.AccountDataContainer}>
        {data.map((item, index) => (
          <AccountData item={item} key={index} />
        ))}
      </div>

      <div className={styles.extraInfo}>
        <h2 className={styles.headerTwo}>
          Your consents and notifications settings
        </h2>
        <p className={styles.paragraph}>
          By checking the boxes, you accept <span>the Privacy Policy</span>
        </p>
      </div>
      <ConsentForm />

      <div className={styles.extraInfo}>
        <h2 className={styles.headerTwo}>
          Unsubscribe from product availability notifications
        </h2>
        <p className={styles.paragraph}>
          Currently, you are not waiting for any notifications.
        </p>
      </div>
      <div className={styles.extraInfo}>
        <h2 className={styles.headerTwo}>Logging out of all devices</h2>
        <p className={styles.paragraph}>
          Due to this option, you can log out from our website and application
          on all browsers and devices at once - also the account that you are
          using right now.
        </p>
        <button className={styles.btnEdit}>Log out me everywhere</button>
      </div>
      <div className={styles.extraInfo}>
        <h2 className={styles.headerTwo}>Deleting account</h2>
        <p className={styles.paragraph}>
          If you click on this button, you will delete your account in our
          store. Make sure you definitely want to do this - your account cannot
          be restored.
        </p>
        <br />
        <p className={styles.paragraph}>
          If you want to keep your account, but don't want to get messages from
          us - uncheck the consents in the notification settings.
        </p>
        <button className={styles.btnEdit}>Delete account</button>
      </div>
      <Support />
    </>
  );
}

export default Settings;
