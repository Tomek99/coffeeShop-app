import React, { useContext } from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Recipient.module.scss";
import { Context } from "../../../../Contexts/Context";

function Recipient() {
  const { user } = useContext(Context);
  console.log(user.invoices + " " + user.addresses);
  return (
    <div className={styles.Recipient}>
      <HeadingThree title="Recipient details" />
    </div>
  );
}

export default Recipient;
