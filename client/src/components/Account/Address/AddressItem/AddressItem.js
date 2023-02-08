import React from "react";
import BtnDelete from "./BtnDelete/BtnDelete";
import BtnEdit from "./BtnEdit/BtnEdit";
import PropTypes from "prop-types";
import styles from "./AddressItem.module.scss";

function AddressItem({ item }) {
  const { name, street, ZIP_code, city, number, email } = item;
  return (
    <div className={styles.AddressItem}>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p>{street}</p>
        <p>{ZIP_code}</p>
        <p>{city}</p>
        <p>{number}</p>
        <p>{email}</p>
      </div>
      <div className={styles.buttons}>
        <BtnDelete />
        <BtnEdit />
      </div>
    </div>
  );
}
AddressItem.propTypes = {
  name: PropTypes.string,
  street: PropTypes.string,
  ZIP_code: PropTypes.string,
  city: PropTypes.string,
  number: PropTypes.string,
  email: PropTypes.string,
};

export default AddressItem;
