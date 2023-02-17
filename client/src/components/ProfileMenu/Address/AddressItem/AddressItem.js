import React, { useState } from "react";
import BtnDelete from "../../../Buttons/BtnDelete/BtnDelete";
import BtnEdit from "../../../Buttons/BtnEdit/BtnEdit";
import PropTypes from "prop-types";
import styles from "./AddressItem.module.scss";
import DeleteData from "../DeleteData/DeleteData";
import BlurScreen from "../../BlurScreen/BlurScreen";
import EditAddress from "./EditAddress/EditAddress";

function AddressItem({ item, idAddresses }) {
  const { _id, name, street, ZIP_code, city, number, email } = item;

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
          <p className={styles.name}>{name}</p>
          <p>{street}</p>
          <p>{ZIP_code}</p>
          <p>{city}</p>
          <p>{number}</p>
          <p>{email}</p>
        </div>
        <div className={styles.buttons}>
          <BtnDelete handleShowDelete={handleShowDelete} />
          <BtnEdit handleShowEdit={handleShowEdit} />
        </div>
      </div>
      {isVisibleEdit ? (
        <EditAddress userAddress={item} handleBlurScreen={handleBlurScreen} />
      ) : null}
      {isVisibleDelete ? (
        <DeleteData
          handleBlurScreen={handleBlurScreen}
          idDocuments={idAddresses}
          idDocument={_id}
          documentType="address"
        />
      ) : null}
      {isVisibleEdit || isVisibleDelete ? (
        <BlurScreen handleBlurScreen={handleBlurScreen} />
      ) : null}
    </>
  );
}
AddressItem.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  street: PropTypes.string,
  ZIP_code: PropTypes.string,
  city: PropTypes.string,
  number: PropTypes.string,
  email: PropTypes.string,
  idAddresses: PropTypes.string,
};

export default AddressItem;
