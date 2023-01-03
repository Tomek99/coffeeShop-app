import React, { useState } from "react";
import Support from "../Support/Support";
import AccountData from "./AccountData/AccountData";
import ConsentForm from "./ConsentForm/ConsentForm";
import styles from "./Settings.module.scss";

function Settings() {
  const [data, setData] = useState({
    name: "Tomasz Skupień",
    number: "111 222 333",
    email: "test@gmail.com",
    password: "Za@1234a",
  });
  return (
    <>
      <header>Account settings</header>
      <h3>Account data</h3>
      <div>
        <AccountData
          text="Your data"
          content={data.number}
          fullName={data.name}
          btnText="Edit"
        />
        <AccountData
          text="E-mail address"
          content={data.email}
          btnText="Change"
        />
        <AccountData text="Password" content={data.password} btnText="Change" />
      </div>
      <ConsentForm />
      <div>
        <h2>Unsubscribe from product availability notifications</h2>
        <p>Currently, you are not waiting for any notifications.</p>
      </div>
      <div>
        <h2>Logging out of all devices</h2>
        <p>
          Due to this option, you can log out from our website and application
          on all browsers and devices at once - also the account that you are
          using right now.
        </p>
        <button>Log out me everywhere</button>
      </div>
      <div>
        <h2>Deleting account</h2>
        <p>
          If you click on this button, you will delete your account in our
          store. Make sure you definitely want to do this - your account cannot
          be restored.
        </p>
        <p>
          If you want to keep your account, but don't want to get messages from
          us - uncheck the consents in the notification settings.
        </p>
        <button>Delete account</button>
      </div>
      <Support />
    </>
  );
}

export default Settings;
