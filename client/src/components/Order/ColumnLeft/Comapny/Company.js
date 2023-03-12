import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Company.module.scss";
import company_invoice_data from "../../../../data/company_invoice_data.json";
import FieldComponent from "../../../FormikComponents/FieldComponent/FieldComponent";

function Company() {
  return (
    <div className={styles.Company}>
      <HeadingThree title="Company invoice details" />
      <div className={styles.InvoiceForm}>
        {company_invoice_data.map((item, index) => (
          <FieldComponent item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Company;
