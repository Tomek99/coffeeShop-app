import React from "react";
import { Link } from "react-router-dom";
import NBarAside from "../../NBarAside/NBarAside";
import styles from "./MobileNavigation.module.scss";
import navigationBarList from "../../../data/navigationBarList.json";
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import SocialMediaElement from "../../Footer/SocialMediaElement/SocialMediaElement";

function MobileNavigation({ handleNavigation, isNavigationOpen }) {
  const socialMedia = [
    { name: <ImFacebook />, url: "https://www.facebook.com/" },
    { name: <BsTwitter />, url: "https://www.facebook.com/" },
    { name: <BsInstagram />, url: "https://www.facebook.com/" },
    { name: <BsLinkedin />, url: "https://www.facebook.com/" },
    { name: <BsYoutube />, url: "https://www.facebook.com/" },
  ];
  return (
    <ul
      className={
        isNavigationOpen
          ? `${styles.MobileNavigation} ${styles.active}`
          : styles.MobileNavigation
      }
    >
      <NBarAside
        handleBtn={handleNavigation}
        isCart={false}
        title="NAVIGATION"
      />
      <div className={styles.divList}>
        {navigationBarList.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={styles.linkElement}
              onClick={handleNavigation}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </div>
      <div>
        <ul className={styles.socialMediaMenu}>
          {socialMedia.map((item, index) => (
            <SocialMediaElement item={item} key={index} />
          ))}
        </ul>
      </div>
    </ul>
  );
}
export default MobileNavigation;
