import React, { useEffect } from "react";
import styles from "./ContactSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import Map from "../Map/Map";
import ContactForm from "../ContactForm/ContactForm";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { SlCreditCard } from "react-icons/sl";
import { RiShoppingBagFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
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

function ContactSection() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const contactInformation = [
    {
      title: `Coffee Shop`,
      text_one: `111 222 333`,
      text_two: "test@gmail.com",
      text_three: "Litewska 20 | 00-000 Warsaw",
    },
    {
      title: "Company details",
      text_one: "Coffee Shop Adam Kowalski",
      text_two: "Litewska 20 | 00-000 Warsaw",
      text_three: "NIP 0000000000 | BDO 000000000",
    },
  ];

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

  const accountBank = ["Bank account", "70 1140 2004 0000 3402 8249 4626"];

  return (
    <div className={styles.ContactSection} id="contactSection">
      <HeaderSection firstWord="contact" secondWord="us" />
      <p className={styles.openHours}>
        We are at your service from Monday to Saturday from 10:00 am to 8:00 pm
      </p>
      {/* <div className={styles.mapForm}>
        
        <ContactForm />
      </div> */}
      <div className={styles.wrapperDiv}>
        <div className={styles.content}>
          {contactInformation.map((item, index) => (
            <div key={index} className={styles.infoItem}>
              <p className={styles.title}>{item.title}</p>
              <p>{item.text_one}</p>
              <p>{item.text_two}</p>
              <p>{item.text_three}</p>
            </div>
          ))}
          <div className={styles.infoItem}>
            <p className={styles.title}>{accountBank[0]}</p>
            <p>
              <SlCreditCard size={25} />
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
