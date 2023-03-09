import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderInfo from "../../HeaderInfo/HeaderInfo";
import HeadingThree from "../../HeadingThree/HeadingThree";
import Support from "../Support/Support";
import Paragraph from "./Paragraph/Paragraph";
import ReportOrder from "./ReportOrder/ReportOrder";
import styles from "./ReturnComplaint.module.scss";
import return_complaint_data from "../../../data/return_complaint_data.json";

function ReturnComplaint() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <HeaderInfo title="Returns and complaints" />
      <div className={styles.firstDiv}>
        <HeadingThree title="Check status complain and return in coffee-shop" />
        <div className={styles.rowTwo}>
          <Paragraph
            title="Do you have any questions?"
            text="If you have some questions about your application, call us: + 12
              12 122 00 30 or email:test@gmail.com"
          />

          <Paragraph
            title="Do you have our expertise?"
            text="If we have sent you expertise, lease write in response whether you
              accept its terms. You can also call us + 12 12 122 00 30 or email:
              test@gmail.com"
          />
        </div>
      </div>
      <div className={styles.secondDiv}>
        <HeadingThree title="How the application goes" />
        <div className={styles.rowThree}>
          <Paragraph
            title="Select the sort of application"
            text="Select the sort of application depending on the sittuation or the
              time when your picked up the package"
          />

          <Paragraph
            title="Add application"
            text="Fill the form and describe the specifics of the return or
              complaint"
          />

          <Paragraph
            title="We will contact you"
            text="Once your application is verified within 2 days, we will send you
              an email with the next steps."
          />
        </div>
      </div>
      <div className={styles.thirdDiv}>
        <HeadingThree title="Select the sort of application" />

        <div className={styles.rowTwo}>
          {return_complaint_data.map((item, index) => (
            <ReportOrder key={index} item={item} />
          ))}
        </div>
      </div>
      <Support />
    </>
  );
}

export default ReturnComplaint;
