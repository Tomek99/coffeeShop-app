import React, { useState } from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import ConciseInfo from "../ExtraInfo/ConciseInfo/ConciseInfo";
import styles from "./UserInvoice.module.scss";
import user_invoice_data from "../../../../data/user_invoice_data.json";
import FieldComponent from "../../../FormikComponents/FieldComponent/FieldComponent";
import PropTypes from "prop-types";
import { Field } from "formik";

function UserInvoice({ delivery, activeInvoice }) {
  const conciseInfoOne =
    "In our online store, the proof of purchase is an invoice. As a standard, we issue it to the data from the delivery address.";

  const conciseInfoTwo =
    "We will issue a receipt for your purchases at the salon, upon receipt. If you need an invoice, please provide us with additional details.";

  const radioInputOne = "I would like to provide other invoice details";
  const radioInputTwo = "I would like to add the invoice";

  return (
    <div className={styles.Invoice}>
      <HeadingThree title="Invoice details" />
      <ConciseInfo text={delivery ? conciseInfoOne : conciseInfoTwo} />
      <div>
        <label htmlFor="invoice" className={styles.invoiceLabel}>
          <Field id="invoice" type="checkbox" name="activeInvoice" />
          <span>{delivery ? radioInputOne : radioInputTwo}</span>
        </label>
      </div>
      {activeInvoice ? (
        <div className={styles.invoiceForm}>
          {user_invoice_data.map((item, index) => (
            <FieldComponent item={item} key={index} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

UserInvoice.propTypes = {
  delivery: PropTypes.bool,
};
export default UserInvoice;
