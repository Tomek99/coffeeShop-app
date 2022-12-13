import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { BsTwitter, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
function FooterSection() {
  return (
    <div className={styles.FooterSection}>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/">
          <ImFacebook />
        </a>
        <a href="https://twitter.com/">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/">
          <BsLinkedin />
        </a>
        <a href="https://www.youtube.com/?gl=PL">
          <BsYoutube />
        </a>
      </div>
      <div>
        <ul className={styles.navBarFooter}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="menu">Menu</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="reviews">Review</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="articles">Blogs</Link>
          </li>
        </ul>
      </div>
      <p>
        Created By <span>Tomasz Skupień</span> | All Rights Reserved
      </p>
    </div>
  );
}

export default FooterSection;
