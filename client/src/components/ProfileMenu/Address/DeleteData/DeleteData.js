import React, { useContext, useEffect } from "react";
import BtnCancell from "../../../Buttons/BtnCancell/BtnCancell";
import BtnRemoveData from "../../../Buttons/BtnRemoveData/BtnRemoveData";
import styles from "./DeleteData.module.scss";
import CloseBtn from "../../../Buttons/CloseBtn/CloseBtn";
import axios from "axios";
import PropTypes from "prop-types";
import { AddressContext } from "../../../../Contexts/AddressContext";

function DeleteData({
  handleBlurScreen,
  idDocuments,
  idDocument,
  documentType,
}) {
  const { deleteAddress, deleteInvoice } = useContext(AddressContext);
  function deleteDocument() {
    if (documentType === "address") {
      axios
        .put("http://localhost:5000/api/addresses/user-address/deleteAddress", {
          data: { idDocuments, idDocument },
        })
        .then(({ data }) => deleteAddress(data.addresses));
    } else {
      axios
        .put("http://localhost:5000/api/invoices/user-invoice/deleteInvoice", {
          data: { idDocuments, idDocument },
        })
        .then(({ data }) => deleteInvoice(data.invoices));
    }

    handleBlurScreen();
  }

  return (
    <div className={styles.DeleteData}>
      <div className={styles.firstRowDiv}>
        <h3>Are you sure you want to delete this data?</h3>
        <CloseBtn handleBtn={handleBlurScreen} />
      </div>
      <p>
        If you do this, you will not be able to select them when placing a new
        order.
      </p>
      <div className={styles.btnsDiv}>
        <BtnCancell handleBlurScreen={handleBlurScreen} />
        <BtnRemoveData deleteDocument={deleteDocument} />
      </div>
    </div>
  );
}
DeleteData.propTypes = {
  handleBlurScreen: PropTypes.func,
  idDocuments: PropTypes.string,
  idDocument: PropTypes.string,
  documentType: PropTypes.string,
};
export default DeleteData;
