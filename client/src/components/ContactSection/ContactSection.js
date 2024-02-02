import React, { useEffect, useRef } from "react";
import styles from "./ContactSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import Map from "./Map/Map";
import ContactForm from "./ContactForm/ContactForm";
import contactData from "../../data/input_contact_data.json";
import * as Yup from "yup";
import ContactElement from "./ContactElement/ContactElement";
import dataContact from "../../data/dataContact";
import postDataUtils from "../../utils/postDataUtils";

import EmailContactForm from "./EmailContactForm/EmailContactForm";

const validationSchema_one = Yup.object().shape({
  name_form_one: Yup.string()
    .min(4, "Must be 4 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  comment: Yup.string()
    .required("Required")
    .min(5, "Must be 5 characters or more"),
});

const phoneRegExp = /^[1-9]\d{2}(?:\s?\d{3}){2}$/;
const validationSchema_two = Yup.object().shape({
  name_form_two: Yup.string()
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
  name_form_one: "",
  email: "",
  comment: "",
};

const initialValues_2 = {
  name_form_two: "",
  number: "",
  comment: "",
};

function ContactSection() {
  const onSubmitMessage = async (values, { setSubmitting, resetForm }) => {
    const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/messages/message/post-message`;

    const response = await postDataUtils(apiEndpoint, {
      fullName: values.name_form_two,
      number: values.number,
      message: values.comment,
    });
    console.log(response);
    setTimeout(() => {
      alert("Message has been sent");
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <div className={styles.ContactSection} id="contactSection">
      <HeaderSection firstWord="contact" secondWord="us" />
      <p className={styles.openHours}>
        We are at your service from Monday to Saturday from 10:00 am to 8:00 pm
      </p>
      <div className={styles.wrapperDiv}>
        <div className={styles.content}>
          {dataContact.map((item, index) => (
            <ContactElement item={item} key={index} />
          ))}
        </div>
        <div className={styles.contactFormWrapper}>
          {/* <ContactForm
            initValue={initialValues_1}
            formData={contactData.contact_form_one}
            validationSchema={validationSchema_one}
            title="Write us an e-mail"
            index={0}
            onSubmit={sendEmail}
          /> */}
          <EmailContactForm />
          <ContactForm
            initValue={initialValues_2}
            formData={contactData.contact_form_two}
            validationSchema={validationSchema_two}
            title="Write us a text message"
            index={1}
            onSubmit={onSubmitMessage}
          />
          <Map />
        </div>
      </div>
    </div>
  );
}
export default ContactSection;
