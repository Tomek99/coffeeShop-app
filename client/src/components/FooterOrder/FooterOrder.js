import React, { useState } from "react";
import styles from "./FooterOrder.module.scss";
import { BsHeadphones } from "react-icons/bs";
import BtnMore from "../Buttons/BtnMore/BtnMore";
import { Link } from "react-router-dom";
function FooterOrder() {
  const [isActive, setIsActive] = useState(false);

  function handleBtn() {
    setIsActive(!isActive);
  }
  return (
    <div className={styles.FooterOrder}>
      <div className={styles.flexColumn}>
        <div className={styles.columnLeft}>
          <div className={styles.divAsk}>
            <p>Do you have any questions?</p>
            <p>
              <span
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <BsHeadphones size={20} /> 24 242 24 24
              </span>
            </p>
          </div>
          <div className={styles.divStatue}>
            <Link>Statute</Link>
            <Link>Privacy policy</Link>
          </div>
        </div>
        <div className={styles.columnRight}>
          <p className={styles.dataOwner}>
            The administrator of your personal data is coffeShop sp. z o.o.
            based in Jarosław, 25 XYZ St., 00-000 Jaroslaw.
            <BtnMore handleBtn={handleBtn} />
          </p>
          {isActive ? (
            <p className={styles.moreInfo}>
              We will process your personal data to register and operate your
              account in our store or to process orders you place. If you give
              the appropriate consents, we will also use your data for profiling
              and sending you marketing content. Remember that you can withdraw
              your consent at any time. The security of your data is very
              important to us. You can find detailed rules for processing your
              personal data and the rights you have in this regard in ourPrivacy
              Policy
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default FooterOrder;
