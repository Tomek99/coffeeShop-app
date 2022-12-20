import React from "react";
import Header from "../HeaderSection/HeaderSection";
import styles from "./AboutCs.module.scss";

function AboutCs() {
  return (
    <div className={styles.AboutCs}>
      <Header firstWord="Our" secondWord="company" />
      <div>
        <p>
          The Coffee shop brand has been on the market since 2020. Its priority
          is high product quality going hand in hand with affordable prices and
          a personalized approach to customers. We offer all kinds of nuts, a
          wide selection of seeds, dried, candied, freeze-dried fruits and
          flakes. We sell both retail and wholesale. We serve confectioneries,
          bakeries, ice cream stores, wholesalers, stores, caterers and
          individual customers.
        </p>
        <p>
          Intensive expansion of storage space, high storage standards,
          adherence to strict quality standards and the selection of only
          reliable suppliers means that we can serve the most demanding
          customers. Each product undergoes laboratory testing and rigorous
          quality control before being packaged. Purchases in our online store
          are insured through Trusted Shops buyer protection.
        </p>
      </div>
    </div>
  );
}

export default AboutCs;
