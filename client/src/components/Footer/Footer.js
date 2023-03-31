import React from "react";
import styles from "./Footer.module.scss";
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { SlCreditCard } from "react-icons/sl";
import { RiShoppingBagFill } from "react-icons/ri";
import { ImFacebook, ImLocation2 } from "react-icons/im";
import LinkElement from "./LinkElement/LinkElement";
import ParagraphElement from "./ParagraphElement/ParagraphElement";
import SocialMediaElement from "./SocialMediaElement/SocialMediaElement";
import footer_data from "../../data/footer_data.json";

function Footer() {
  const socialMedia = [
    { name: <ImFacebook />, url: "https://www.facebook.com/" },
    { name: <BsTwitter />, url: "https://www.facebook.com/" },
    { name: <BsInstagram />, url: "https://www.facebook.com/" },
    { name: <BsLinkedin />, url: "https://www.facebook.com/" },
    { name: <BsYoutube />, url: "https://www.facebook.com/" },
  ];

  const extraInformationIcons = [
    <AiOutlineClockCircle size={20} />,
    <BsFillTelephoneFill size={20} />,
    <GoMail size={20} />,
    <ImLocation2 size={20} />,
    <SlCreditCard size={20} />,
    <RiShoppingBagFill size={20} />,
  ];

  return (
    <div className={styles.Footer}>
      <div className={styles.GridTemplate}>
        <div className={styles.navMenu}>
          <h6>Company</h6>
          <div className={styles.menuContent}>
            <ul className={styles.menu}>
              {footer_data.company.map((item, index) => (
                <LinkElement item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.navMenu}>
          <h6>Help</h6>
          <div className={styles.menuContent}>
            <ul className={styles.menu}>
              {footer_data.help.map((item, index) => (
                <LinkElement item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.navMenu}>
          <h6>Account</h6>
          <div className={styles.menuContent}>
            <ul className={styles.menu}>
              {footer_data.account.map((item, index) => (
                <LinkElement item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.navMenu}>
          <h6>Coffee Shop</h6>
          <div className={styles.menuContent}>
            <div className={styles.menu}>
              {footer_data.extraInforamation.map((item, index) => (
                <ParagraphElement
                  item={item}
                  key={index}
                  icon={extraInformationIcons[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.SocialMedia}>
        <ul className={styles.SocialMediaMenu}>
          {socialMedia.map((item, index) => (
            <SocialMediaElement item={item} key={index} />
          ))}
        </ul>
        <div className={styles.author}>
          <p>
            Created By <span>Tomasz Skupień</span> | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
