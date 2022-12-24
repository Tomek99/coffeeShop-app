import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
function FooterSection() {
  const navBarList = [
    { name: "Home", path: "/" },
    { name: "About", path: "about-us" },
    { name: "Menu", path: "menu" },
    { name: "Products", path: "products" },
    { name: "Review", path: "reviews" },
    { name: "Contact", path: "contact" },
    { name: "Blog", path: "blog" },
  ];

  const hrefLinks = [
    { name: <ImFacebook />, url: "https://www.facebook.com/" },
    { name: <BsTwitter />, url: "https://www.facebook.com/" },
    { name: <BsInstagram />, url: "https://www.facebook.com/" },
    { name: <BsLinkedin />, url: "https://www.facebook.com/" },
    { name: <BsYoutube />, url: "https://www.facebook.com/" },
  ];
  return (
    <div className={styles.FooterSection}>
      <div className={styles.socialMedia}>
        {hrefLinks.map((item, index) => (
          <a key={index} href={item.url}>
            {item.name}
          </a>
        ))}
      </div>
      <div>
        <ul className={styles.navBarFooter}>
          {navBarList.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p>
        Created By <span>Tomasz Skupień</span> | All Rights Reserved
      </p>
    </div>
  );
}

export default FooterSection;
