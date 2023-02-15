import React, { useState } from "react";
import BtnDelete from "../../../Buttons/BtnDelete/BtnDelete";
import BtnEdit from "../../../Buttons/BtnEdit/BtnEdit";
import PropTypes from "prop-types";
import styles from "./AddressItem.module.scss";
import EditData from "../EditData/EditData";
import DeleteData from "../DeleteData/DeleteData";
import BlurScreen from "../../BlurScreen/BlurScreen";

function AddressItem({ item }) {
  const { name, street, ZIP_code, city, number, email } = item;

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
      {isVisibleEdit ? <EditData /> : null}
      {isVisibleDelete ? (
        <DeleteData handleBlurScreen={handleBlurScreen} />
      ) : null}
      {isVisibleEdit || isVisibleDelete ? (
        <BlurScreen handleBlurScreen={handleBlurScreen} />
      ) : null}
    </>
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
