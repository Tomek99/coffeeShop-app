import React, { useState } from "react";
import styles from "./InvoiceItem.module.scss";
import BtnDelete from "../../../Buttons/BtnDelete/BtnDelete";
import BtnEdit from "../../../Buttons/BtnEdit/BtnEdit";
import DeleteData from "../DeleteData/DeleteData";
import PropTypes from "prop-types";
import BlurScreen from "../../BlurScreen/BlurScreen";
import EditInvoice from "./EditInvoice/EditInvoice";

function InvoiceItem({ item, idInvoices }) {
  const { _id, NIP, name, street, ZIP_code, city } = item;
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
      {isVisibleEdit ? (
        <EditInvoice
          handleBlurScreen={handleBlurScreen}
          userData={item}
          idDocuments={idInvoices}
        />
      ) : null}
      {isVisibleDelete ? (
        <DeleteData
          handleBlurScreen={handleBlurScreen}
          idDocuments={idInvoices}
          idDocument={_id}
          documentType="invoice"
        />
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
