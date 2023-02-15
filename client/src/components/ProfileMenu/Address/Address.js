import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../Contexts/Context";
import { AddressContext } from "../../../Contexts/AddressContext";
import axios from "axios";
import AddressItem from "./AddressItem/AddressItem";
import BtnAdd from "../../Buttons/BtnAdd/BtnAdd";
import styles from "./Address.module.scss";
import Support from "../Support/Support";
import { useWindowWidth } from "@react-hook/window-size";
import InvoiceItem from "./InvoiceItem/InvoiceItem";
import BlurScreen from "../BlurScreen/BlurScreen";
import AddInvoice from "./AddInvoice/AddInvoice";
import AddAddress from "./AddAddress/AddAddress";

function Address() {
  const { user } = useContext(Context);
  const [blurScreen, setBlurScreen] = useState(false);
  const [isVisibleAddress, setVisibleAddress] = useState(false);
  const [isVisibleInvoice, setVisibleInovice] = useState(false);
  const [address, setAddress] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const width = useWindowWidth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/addresses/user-address/${user.address}`)
      .then(({ data }) => {
        setAddress(data.addresses);
      });

    axios
      .get(`http://localhost:5000/api/invoices/user-invoice/${user.invoice}`)
      .then(({ data }) => {
        setInvoice(data.invoices);
      });
  }, [user.address, user.invoice]);

  function handleShowAddress() {
    setVisibleAddress(!isVisibleAddress);
    setBlurScreen(false);
  }

  function handleShowInvoice() {
    setVisibleInovice(!isVisibleInvoice);
    setBlurScreen(false);
  }

  function handleBlurScreen() {
    setVisibleAddress(false);
    setVisibleInovice(false);
    setBlurScreen(!blurScreen);
  }
  return (
    <AddressContext.Provider value={{ handleBlurScreen }}>
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
            {address.length !== 0 ? (
              <BtnAdd name="address" handleBtn={handleShowAddress} />
            ) : null}
          </div>
        </div>
        <div className={styles.thirdDiv}>
          {address.map((item, index) => (
            <AddressItem item={item} key={index} />
          ))}
          <div>
            {address.length === 0 || width < 560 ? (
              <BtnAdd name="address" handleBtn={handleShowAddress} />
            ) : null}
          </div>
        </div>
        <div>
          <div className={styles.secondDiv}>
            <h3>Invoice details</h3>
            <div className={styles.btnHide}>
              {invoice.length !== 0 ? (
                <BtnAdd name="invoice" handleBtn={handleShowInvoice} />
              ) : null}
            </div>
          </div>
          <div className={styles.thirdDiv}>
            {invoice.map((item, index) => (
              <InvoiceItem item={item} key={index} />
            ))}
            <div>
              {invoice.length === 0 || width < 560 ? (
                <BtnAdd name="invoice" handleBtn={handleShowInvoice} />
              ) : null}
            </div>
          </div>
        </div>
        {isVisibleAddress ? <AddAddress /> : null}
        {isVisibleInvoice ? <AddInvoice /> : null}
        {isVisibleAddress || isVisibleInvoice ? (
          <BlurScreen handleBlurScreen={handleBlurScreen} />
        ) : null}

        <Support />
      </div>
    </AddressContext.Provider>
  );
}

export default Address;
