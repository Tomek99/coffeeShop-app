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
import HeaderInfo from "../../HeaderInfo/HeaderInfo";
import HeadingThree from "../../HeadingThree/HeadingThree";

function Address() {
  const { user } = useContext(Context);
  const [blurScreen, setBlurScreen] = useState(false);
  const [isVisibleAddress, setVisibleAddress] = useState(false);
  const [isVisibleInvoice, setVisibleInovice] = useState(false);
  const [idAddresses, setIdAddresses] = useState(null);
  const [idInvoices, setIdInvoices] = useState(null);
  const [address, setAddress] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const width = useWindowWidth();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URI}/api/addresses/user-address/${user.addresses}`
      )
      .then(({ data }) => {
        setAddress(data.addresses);
        setIdAddresses(data._id);
      });
  }, [user.addresses]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URI}/api/invoices/user-invoice/${user.invoices}`
      )
      .then(({ data }) => {
        setIdInvoices(data._id);
        setInvoice(data.invoices);
      });
  }, [user.invoices]);

  function addAddress(addresses) {
    setAddress(addresses);
  }
  function editAddress(addresses) {
    setAddress(addresses);
  }
  function deleteAddress(addresses) {
    setAddress(addresses);
  }

  function addInvoice(invoices) {
    setInvoice(invoices);
  }
  function editInvoice(invoices) {
    setInvoice(invoices);
  }
  function deleteInvoice(invoices) {
    setInvoice(invoices);
  }

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
    <AddressContext.Provider
      value={{
        handleBlurScreen,
        addAddress,
        editAddress,
        deleteAddress,
        addInvoice,
        editInvoice,
        deleteInvoice,
      }}
    >
      <div className={styles.Address}>
        <div className={styles.firstDiv}>
          <HeaderInfo title="Address details" />
          <p>
            Here you will find saved addresses and ordering details. Due to this
            you don't have to enter them during the shopping process
          </p>
        </div>
        <div className={styles.secondDiv}>
          <HeadingThree title="Recipient details and delivery addresses" />
          <div className={styles.btnHide}>
            {address.length !== 0 ? (
              <BtnAdd name="address" handleBtn={handleShowAddress} />
            ) : null}
          </div>
        </div>
        <div className={styles.thirdDiv}>
          {address.map((item, index) => (
            <AddressItem item={item} key={index} idAddresses={idAddresses} />
          ))}

          <div>
            {address.length === 0 || width < 560 ? (
              <BtnAdd name="address" handleBtn={handleShowAddress} />
            ) : null}
          </div>
        </div>
        <div>
          <div className={styles.secondDiv}>
            <HeadingThree title="Invoice details" />
            <div className={styles.btnHide}>
              {invoice.length !== 0 ? (
                <BtnAdd name="invoice" handleBtn={handleShowInvoice} />
              ) : null}
            </div>
          </div>
          <div className={styles.thirdDiv}>
            {invoice.map((item, index) => (
              <InvoiceItem item={item} key={index} idInvoices={idInvoices} />
            ))}
            <div>
              {invoice.length === 0 || width < 560 ? (
                <BtnAdd name="invoice" handleBtn={handleShowInvoice} />
              ) : null}
            </div>
          </div>
        </div>
        {isVisibleAddress ? <AddAddress idAddresses={idAddresses} /> : null}
        {isVisibleInvoice ? <AddInvoice idInvoices={idInvoices} /> : null}
        {isVisibleAddress || isVisibleInvoice ? (
          <BlurScreen handleBlurScreen={handleBlurScreen} />
        ) : null}

        <Support />
      </div>
    </AddressContext.Provider>
  );
}

export default Address;
