import React from "react";
import styles from "./ContactElement.module.scss";

function ContactElement({ item }) {
  const { headline, line_one, line_two, line_three } = item;

  return (
    <div className={styles.ContactElement}>
      <p className={styles.title}>{headline}</p>
      <p>
        {line_one.icon}
        {line_one.textOne}
      </p>
      {line_two ? (
        <p>
          {line_two.icon}
          {line_two.textTwo}
        </p>
      ) : null}
      {line_three ? (
        <p>
          {line_three.icon}
          {line_three.textThree}
        </p>
      ) : null}
    </div>
  );
}

export default ContactElement;
