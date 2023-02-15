import React, { useState } from "react";
import styles from "./InvoiceItem.module.scss";
import BtnDelete from "../../../Buttons/BtnDelete/BtnDelete";
import BtnEdit from "../../../Buttons/BtnEdit/BtnEdit";
import EditData from "../EditData/EditData";
import DeleteData from "../DeleteData/DeleteData";
import PropTypes from "prop-types";
import BlurScreen from "../../BlurScreen/BlurScreen";

function InvoiceItem({ item }) {
  const { NIP, name, street, ZIP_code, city } = item;

  const [blurScreen, setBlurScreen] = useState(false);
  const [isVisibleEdit, setVisibleEdit] = useState(false);
  const [isVisibleDelete, setVisibleDelete] = useState(false);

  function handleShowDelete() {
    setVisibleDelete(!isVisibleDelete);
  }

  function handleShowEdit() {
    setVisibleEdit(!isVisibleEdit);
  }

  function handleBlurScreen() {
    setVisibleEdit(false);
    setVisibleDelete(false);
    setBlurScreen(!blurScreen);
  }
  return (
    <>
      <div className={styles.AddressItem}>
        <div className={styles.content}>
          <p>{NIP}</p>
          <p className={styles.name}>{name}</p>
          <p>{street}</p>
          <p>{ZIP_code}</p>
          <p>{city}</p>
        </div>
        <div className={styles.buttons}>
          <BtnDelete handleShowDelete={handleShowDelete} />
          <BtnEdit handleShowEdit={handleShowEdit} />
        </div>
      </div>
      {isVisibleEdit ? <EditData handleBlurScreen={handleBlurScreen} /> : null}
      {isVisibleDelete ? (
        <DeleteData handleBlurScreen={handleBlurScreen} />
      ) : null}
      {isVisibleEdit || isVisibleDelete ? (
        <BlurScreen handleBlurScreen={handleBlurScreen} />
      ) : null}
    </>
  );
}

InvoiceItem.propTypes = {
  NIP: PropTypes.string,
  name: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  ZIP_code: PropTypes.string,
  isVisibleEdit: PropTypes.bool,
  isVisibleDelete: PropTypes.bool,
};
export default InvoiceItem;
