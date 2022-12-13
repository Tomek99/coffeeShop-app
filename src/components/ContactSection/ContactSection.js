import React from "react";
import styles from "./ContactSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import Map from "../Map/Map";
import ContactForm from "../ContactForm/ContactForm";

function ContactSection() {
  return (
    <div className={styles.ContactSection} id="contactSection">
      <HeaderSection firstWord="contact" secondWord="us" />
      <div className={styles.mapForm}>
        <Map />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactSection;
