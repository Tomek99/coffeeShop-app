import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import LinkElement from "./LinkElement/LinkElement";
import ParagraphElement from "./ParagraphElement/ParagraphElement";
import SocialMediaElement from "./SocialMediaElement/SocialMediaElement";
function Footer() {
  const navBarList = [
    { name: "Home", path: "/" },
    { name: "About", path: "about-us" },
    { name: "Menu", path: "menu" },
    { name: "Products", path: "products" },
    { name: "Review", path: "reviews" },
    { name: "Contact", path: "contact" },
    { name: "Blog", path: "blog" },
  ];

  const socialMedia = [
    { name: <ImFacebook />, url: "https://www.facebook.com/" },
    { name: <BsTwitter />, url: "https://www.facebook.com/" },
    { name: <BsInstagram />, url: "https://www.facebook.com/" },
    { name: <BsLinkedin />, url: "https://www.facebook.com/" },
    { name: <BsYoutube />, url: "https://www.facebook.com/" },
  ];

  const company = [
    { name: "Products", path: "/" },
    { name: "Blog", path: "/" },
    { name: "About us", path: "/" },
    { name: "Personal pick-up points", path: "/" },
    { name: "Commercial offer", path: "/" },
    { name: "Collaboration", path: "/" },
    { name: "Our partners", path: "/" },
  ];

  const help = [
    { name: "Contact", path: "/" },
    { name: "Frequently asked questions", path: "/" },
    { name: "Payment methods", path: "/" },
    { name: "Delivery methods", path: "/" },
    { name: "Complaint", path: "/" },
    { name: "Return", path: "/" },
    { name: "Shop statute", path: "/" },
    { name: "Privacy Policy", path: "/" },
  ];

  const account = [
    { name: "My account", path: "/" },
    { name: "Cart", path: "/" },
    { name: "Wish list", path: "/" },
    { name: "Orders", path: "/" },
    { name: "Order tracking ", path: "/" },
    { name: "Return", path: "/" },
    { name: "Addresses", path: "/" },
    { name: "Recover password", path: "/" },
  ];

  const extraInforamation = [
    { name: " pon – sob | 10:00 – 20:00" },
    { name: "123456789" },
    { name: "contact@xyz.com" },
    { name: "Litewska 73 | 00-000 Warsaw" },
    { name: "00 0000 0000 0000 0000 0000 0000" },
    { name: "NIP 0000000000 | BDO 000000000" },
  ];

  return (
    <div className={styles.Footer}>
      <div className={styles.GridTemplate}>
        <div className={styles.navMenu}>
          <h6>Company</h6>
          <div className={styles.menuContent}>
            <ul className={styles.menu}>
              {company.map((item, index) => (
                <LinkElement item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.navMenu}>
          <h6>Help</h6>
          <div className={styles.menuContent}>
            <ul className={styles.menu}>
              {help.map((item, index) => (
                <LinkElement item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.navMenu}>
          <h6>Account</h6>
          <div className={styles.menuContent}>
            <ul className={styles.menu}>
              {account.map((item, index) => (
                <LinkElement item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.navMenu}>
          <h6>Coffee Shop</h6>
          <div className={styles.menuContent}>
            <div className={styles.menu}>
              {extraInforamation.map((item, index) => (
                <ParagraphElement item={item} key={index} />
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
