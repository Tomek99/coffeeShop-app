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

function Settings() {
  const { user } = useContext(Context);
  const [isActive, setIsActive] = useState(false);

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

  function handleActiveBtn() {
    setIsActive(!isActive);
  }

  return (
    <>
      <header style={{ fontSize: "2.5rem" }}>Account settings</header>
      <h3 style={{ fontSize: "2rem" }}>Account data</h3>
      <div className={styles.AccountDataContainer}>
        {settings_data.map((item, index) => (
          <AccountData item={item} key={index} />
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
        <BtnEditSettings text="Delete account" handleBtn={handleActiveBtn} />
      </Information>
      <Support />
      {isActive ? (
        <>
          <DeleteAccount handleActiveBtn={handleActiveBtn} />
          <BlurScreen handleBlurScreen={handleActiveBtn} />{" "}
        </>
      ) : null}
    </>
  );
}

export default Settings;
