import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import { BsCartFill, BsSearch } from "react-icons/bs";
import PopupSearch from "../PopupSearch/PopupSearch";
import PopupBasket from "../PopupBasket/PopupBasket";

function Header(props) {
  const [isBasketOpen, setBasketOpen] = useState(false);
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearch = () => {
    setSearchOpen(!isSearchOpen);
    setNavigationOpen(false);
    setBasketOpen(false);
  };

  const handleNavigation = () => {
    setNavigationOpen(!isNavigationOpen);
    setBasketOpen(false);
    setSearchOpen(false);
  };

  const handleBasket = () => {
    setBasketOpen(!isBasketOpen);
    setNavigationOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      <div className={styles.NavigationBar}>
        <div
          className={
            isNavigationOpen
              ? `${styles.hamburger} ${styles.active}`
              : styles.hamburger
          }
          onClick={handleNavigation}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.navBar}>
          <div>
            <a href="#homeSection">
              <Link to="/">
                <img src="/images/logo.png" className={styles.logo} alt="" />
              </Link>
            </a>
          </div>
          <nav>
            <ul
              className={
                isNavigationOpen
                  ? `${styles.navMenu} ${styles.active}`
                  : styles.navMenu
              }
            >
              <li className={styles.navItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/about-us">About</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="menu">Menu</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="products">Products</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="reviews">Review</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="contact">Contact</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="articles">Blogs</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.btnSection}>
            <PopupBasket
              isBasketOpen={isBasketOpen}
              basketItems={props.basketItems}
              deleteItem={props.deleteItem}
              basketPrice={props.basketPrice}
            />

            <button className={styles.btnDisplay} onClick={handleSearch}>
              <BsSearch
                size={30}
                color={"#fff"}
                onMouseOver={({ target }) => (target.style.color = "d3ad7f")}
                onMouseOut={({ target }) => (target.style.color = "#fff")}
              />
            </button>
            <PopupSearch isSearchOpen={isSearchOpen} />

            <button className={styles.btnDisplay} onClick={handleBasket}>
              <BsCartFill
                size={30}
                color={"#fff"}
                onMouseOver={({ target }) => (target.style.color = "d3ad7f")}
                onMouseOut={({ target }) => (target.style.color = "#fff")}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
