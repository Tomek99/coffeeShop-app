import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Company.module.scss";
import CompanyInvoiceForm from "./CompanyInvoiceForm/CompanyInvoiceForm";

function Company() {
  return (
    <div className={styles.Company}>
      <HeadingThree title="Company details invoice" />
      <CompanyInvoiceForm />
    </div>
  );
}

export default Company;
