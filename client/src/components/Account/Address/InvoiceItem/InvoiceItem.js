import React from "react";
import styles from "./InvoiceItem.module.scss";
import BtnDelete from "../BtnDelete/BtnDelete";
import BtnEdit from "../BtnEdit/BtnEdit";
import PropTypes from "prop-types";

function InvoiceItem({ item }) {
  const { NIP, name, street, ZIP_code, city } = item;
  return (
    <div className={styles.AddressItem}>
      <div className={styles.content}>
        <p>{NIP}</p>
        <p className={styles.name}>{name}</p>
        <p>{street}</p>
        <p>{ZIP_code}</p>
        <p>{city}</p>
      </div>
      <div className={styles.buttons}>
        <BtnDelete />
        <BtnEdit />
      </div>
    </div>
  );
}

InvoiceItem.propTypes = {
  NIP: PropTypes.string,
  name: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  ZIP_code: PropTypes.string,
};
export default InvoiceItem;
