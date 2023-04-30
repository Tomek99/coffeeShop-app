import React, { useEffect } from "react";
import styles from "./ContactSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import Map from "./Map/Map";
import ContactForm from "./ContactForm/ContactForm";
import { GoMail } from "react-icons/go";
import { SlCreditCard } from "react-icons/sl";
import { RiShoppingBagFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill, BsPerson } from "react-icons/bs";
import contactData from "../../data/input_contact_data.json";
import * as Yup from "yup";

const validationSchema_one = Yup.object().shape({
  name: Yup.string()
    .min(4, "Must be 4 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  comment: Yup.string()
    .required("Required")
    .min(5, "Must be 5 characters or more"),
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema_two = Yup.object().shape({
  name: Yup.string()
    .min(4, "Must be 4 characters or more")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  comment: Yup.string()
    .required("Required")
    .min(5, "Must be 5 characters or more"),
});

const initialValues_1 = {
  name: "",
  email: "",
  comment: "",
};

const initialValues_2 = {
  name: "",
  number: "",
  comment: "",
};

const accountBank = ["Bank account", "24 2424 2424 2424 2424 2424 2424"];

function ContactSection() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className={styles.ContactSection} id="contactSection">
      <HeaderSection firstWord="contact" secondWord="us" />
      <p className={styles.openHours}>
        We are at your service from Monday to Saturday from 10:00 am to 8:00 pm
      </p>
      <div className={styles.wrapperDiv}>
        <div className={styles.content}>
          <div className={styles.infoItem}>
            <p className={styles.title}>Coffee Shop</p>
            <p>
              {" "}
              <BsFillTelephoneFill size={20} /> 242 242 242
            </p>
            <p>
              <GoMail size={20} />
              test@coffeshop.com
            </p>
            <p>
              <ImLocation2 size={20} />
              Litewska 24 | 24-242 Warsaw
            </p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.title}>Warehouse</p>
            <p>
              {" "}
              <BsFillTelephoneFill size={20} /> 242 242 242
            </p>
            <p>
              <GoMail size={20} />
              warehouse@coffeshop.com
            </p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.title}>Driver</p>
            <p>
              {" "}
              <BsFillTelephoneFill size={20} /> 242 242 242
            </p>
            <p>
              <GoMail size={20} />
              driver@coffeshop.com
            </p>
            <p>
              <ImLocation2 size={20} />
              Litewska 24 | 24-242 Warsaw
            </p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.title}>Company details</p>
            <p>
              <BsPerson size={20} />
              Coffee Shop Tomasz Skupien
            </p>
            <p>
              <ImLocation2 size={20} />
              Litewska 24 | 24-242 Warsaw
            </p>
            <p>
              <RiShoppingBagFill size={20} /> NIP 2424242424 | BDO 242424242
            </p>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.title}>{accountBank[0]}</p>

            <p>
              {" "}
              <SlCreditCard size={20} />
              {accountBank[1]}
            </p>
          </div>
        </div>
        <div className={styles.contactFormWrapper}>
          <ContactForm
            initValue={initialValues_1}
            formData={contactData.contact_form_one}
            validationSchema={validationSchema_one}
            title="Write us an e-mail"
          />
          <ContactForm
            initValue={initialValues_2}
            formData={contactData.contact_form_two}
            validationSchema={validationSchema_two}
            title="Write us a text message"
          />

          <div>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactSection;
