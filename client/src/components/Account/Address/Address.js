import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../Contexts/Context";
import axios from "axios";
import AddressItem from "./AddressItem/AddressItem";
import BtnAddAddress from "./BtnAddAddress/BtnAddAddress";
import styles from "./Address.module.scss";
import Support from "../Support/Support";
import { useWindowWidth } from "@react-hook/window-size";
function Address() {
  const { user } = useContext(Context);
  const [address, setAddress] = useState([]);
  const width = useWindowWidth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/addresses/user-address/${user.address}`)
      .then(({ data }) => {
        setAddress(data.addresses);
      });
  }, [user.address]);
  return (
    <div className={styles.Address}>
      <div className={styles.firstDiv}>
        <header>Ordering details</header>
        <p>
          Here you will find saved addresses and ordering details. Due to this
          you don't have to enter them during the shopping process
        </p>
      </div>
      <div className={styles.secondDiv}>
        <h3>Recipient details and delivery addresses</h3>
        <div className={styles.btnHide}>
          {address.length !== 0 ? <BtnAddAddress /> : null}
        </div>
      </div>
      <div className={styles.thirdDiv}>
        {address.map((item, index) => (
          <AddressItem item={item} key={index} />
        ))}
      </div>
      <div>
        {address.length === 0 || width < 560 ? <BtnAddAddress /> : null}
      </div>
      <Support />
    </div>
  );
}

export default Address;
