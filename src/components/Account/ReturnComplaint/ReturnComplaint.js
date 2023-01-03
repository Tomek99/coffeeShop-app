import React from "react";
import { Link } from "react-router-dom";
import Support from "../Support/Support";
import styles from "./ReturnComplaint.module.scss";

function ReturnComplaint() {
  return (
    <>
      <header className={styles.header}>Returns and complaints</header>
      <div className={styles.firstDiv}>
        <h1 className={styles.firstHeader}>
          Check status complain and return in coffee-shop
        </h1>
        <div className={styles.rowTwo}>
          <div className={styles.divContent}>
            <p className={styles.title}>Do you have any questions?</p>
            <p className={styles.paragraph}>
              If you have some questions about your application, call us: + 12
              12 122 00 30 or email:test@gmail.com
            </p>
          </div>
          <div className={styles.divContent}>
            <p className={styles.title}>Do you have our expertise?</p>
            <p className={styles.paragraph}>
              If we have sent you expertise, lease write in response whether you
              accept its terms. You can also call us + 12 12 122 00 30 or email:
              test@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <h2 className={styles.firstHeader}>How the application goes</h2>
        <div className={styles.rowThree}>
          <div className={styles.divContent}>
            <p className={styles.title}>Select the sort of application</p>
            <p className={styles.paragraph}>
              Select the sort of application depending on the sittuation or the
              time when your picked up the package
            </p>
          </div>
          <div>
            <p className={styles.title}>Add application</p>
            <p className={styles.paragraph}>
              Fill the form and describe the specifics of the return or
              complaint
            </p>
          </div>
          <div>
            <p className={styles.title}>We will contact you </p>
            <p className={styles.paragraph}>
              Once your application is verified within 2 days, we will send you
              an email with the next steps.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.thirdDiv}>
        <h2 className={styles.firstHeader}>Select the sort of application </h2>
        <div className={styles.rowTwo}>
          <div className={styles.divContent}>
            <div>
              <p className={styles.title}>Complaint</p>

              <p className={styles.paragraph}>
                - For example, the product does not work properly
              </p>
              <p className={styles.paragraph}>
                - Two years from the date of the defect in the case of warranty
                or as indicated by the manufacturer in the case of warranty
              </p>
            </div>

            <Link className={styles.btnComplaint}>Report complaint</Link>
          </div>
          <div className={styles.divContent}>
            <h2 className={styles.title}>Refund or exchange</h2>
            <p className={styles.paragraph}>
              - No reason for return or exchange
            </p>
            <p className={styles.paragraph}>
              - Up to 15 days after receiving the shipment, submit a statement
              of withdrawal from the contract
            </p>
            <p className={styles.paragraph}>
              - Return the product free of charge at the parcel machine
            </p>
            <p className={styles.paragraph}>
              - We will refund your money up to 7 days.
            </p>
            <Link className={styles.btnComplaint}>
              Report refund or exchange
            </Link>
          </div>
        </div>
      </div>
      <Support />
    </>
  );
}

export default ReturnComplaint;
