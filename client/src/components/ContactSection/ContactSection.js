import React, { useEffect, useRef } from "react";
import styles from "./ContactSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import Map from "./Map/Map";
import ContactForm from "./ContactForm/ContactForm";
import contactData from "../../data/input_contact_data.json";
import ContactElement from "./ContactElement/ContactElement";
import dataContact from "../../data/dataContact";
import EmailContactForm from "./EmailContactForm/EmailContactForm";

function ContactSection() {
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
          <EmailContactForm />
          <ContactForm
            formData={contactData.contact_form_two}
            title="Write us a text message"
            index={1}
          />
          <Map />
        </div>
      </div>
    </div>
  );
}
export default ContactSection;
