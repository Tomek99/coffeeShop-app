import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../Contexts/Context";
import Support from "../Support/Support";
import AccountData from "./AccountData/AccountData";
import ConsentForm from "./ConsentForm/ConsentForm";
import styles from "./Settings.module.scss";
import settings_data from "../../../data/settings_data.json";
import settings_information from "../../../data/settings_information.json";
import Information from "./Information/Information";
import BtnEditSettings from "../../Buttons/BtnEditSettings/BtnEditSettings";
import BlurScreen from "../BlurScreen/BlurScreen";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import UserData from "./Edit/UserData/UserData";
import UserEmail from "./Edit/UserEmail/UserEmail";
import UserPassword from "./Edit/UserPassword/UserPassword";

function Settings() {
  const { user } = useContext(Context);
  const [tab, setTab] = useState("");

  settings_data[0].fullName = `${user.firstName} ${user.lastName}`;
  settings_data[0].content = user.number;
  settings_data[1].content = user.email;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  function handleActive(active) {
    setTab(active);
  }

  return (
    <>
      <header style={{ fontSize: "2.5rem" }}>Account settings</header>
      <h3 style={{ fontSize: "2rem" }}>Account data</h3>
      <div className={styles.AccountDataContainer}>
        {settings_data.map((item, index) => (
          <AccountData item={item} key={index} handleActive={handleActive} />
        ))}
      </div>

      <Information
        header={settings_information[0].header}
        paragraph={settings_information[0].paragraph}
      />
      <ConsentForm />

      <Information
        header={settings_information[1].header}
        paragraph={settings_information[1].paragraph}
      ></Information>
      <Information
        header={settings_information[2].header}
        paragraph={settings_information[2].paragraph}
        paragraph_2={settings_information[2].paragraph_2}
      >
        <BtnEditSettings text="Log out me everywhere" />
      </Information>
      <Information
        header={settings_information[3].header}
        paragraph={settings_information[3].paragraph}
        paragraph_2={settings_information[3].paragraph_2}
      >
        <BtnEditSettings
          text="Delete account"
          handleBtn={handleActive}
          userSettings={true}
        />
      </Information>
      <Support />
      {(() => {
        switch (tab) {
          case "deleteAccount":
            return <DeleteAccount handleActive={handleActive} />;
          case "userData":
            return <UserData handleActive={handleActive} />;
          case "userEmail":
            return <UserEmail handleActive={handleActive} />;
          case "userPassword":
            return <UserPassword handleActive={handleActive} />;
          default:
            return null;
        }
      })()}
      {(() => {
        switch (tab) {
          case "deleteAccount":
          case "userData":
          case "userEmail":
          case "userPassword":
            return <BlurScreen handleBlurScreen={handleActive} />;
          default:
            return null;
        }
      })()}
    </>
  );
}

export default Settings;
