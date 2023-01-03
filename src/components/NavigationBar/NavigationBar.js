import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import { BsCartFill, BsSearch, BsHeart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import PopupSearch from "../PopupSearch/PopupSearch";
import Cart from "../Cart/Cart";
import NavListElement from "../NavListElement/NavListElement";
import PropTypes from "prop-types";
import PopupUserNav1 from "../PopupUserNav/PopupUserNav1/PopupUserNav1";
import PopupUserNav2 from "../PopupUserNav/PopupUserNav2/PopupUserNav2";

function NavigationBar(props) {
  const { basketItems, basketPrice, basketQuantity } = props;

  const navBarList = [
    { name: "Home", path: "/" },
    { name: "About", path: "about-us" },
    { name: "Menu", path: "menu" },
    { name: "Products", path: "products" },
    { name: "Review", path: "reviews" },
    { name: "Contact", path: "contact" },
    { name: "Blog", path: "blog" },
  ];

  const [isAsideOpen, setAsideOpen] = useState(false);
  const [isBasketOpen, setBasketOpen] = useState(false);
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearch = () => {
    setSearchOpen(!isSearchOpen);
    setNavigationOpen(false);
    setAsideOpen(false);
    setBasketOpen(false);
  };

  const handleNavigation = () => {
    setNavigationOpen(!isNavigationOpen);
    setAsideOpen(false);
    setSearchOpen(false);
    setBasketOpen(false);
  };

  const handleAside = () => {
    setAsideOpen(!isAsideOpen);
    setNavigationOpen(false);
    setSearchOpen(false);
    setBasketOpen(false);
  };

  const handleBasket = () => {
    setBasketOpen(!isBasketOpen);
    setAsideOpen(false);
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
            <Link to="/">
              <img src="/images/logo.png" className={styles.logo} alt="" />
            </Link>
          </div>
          <nav>
            <ul
              className={
                isNavigationOpen
                  ? `${styles.navMenu} ${styles.active}`
                  : styles.navMenu
              }
            >
              {navBarList.map((item) => (
                <NavListElement
                  isLink={true}
                  key={item.name}
                  name={item.name}
                  path={item.path}
                  style={styles.navItem}
                />
              ))}
            </ul>
          </nav>

          <div className={styles.btnSection}>
            <button className={styles.btnDisplay} onClick={handleSearch}>
              <BsSearch size={30} color={"#fff"} />
            </button>

            <PopupSearch isSearchOpen={isSearchOpen} />

            <Link to="wish-list" className={styles.btnDisplay}>
              <BsHeart size={30} color={"#fff"} />
            </Link>

            <Link
              to="account"
              className={`${styles.btnDisplay} ${styles.btnDisplayActive}`}
            >
              <FaRegUser size={30} color={"#fff"} />
            </Link>

            <PopupUserNav1 />

            <button
              className={`${styles.btnDisplay} ${styles.btnDisplayActiveAside}`}
              onClick={handleAside}
            >
              <FaRegUser size={30} color={"#fff"} />
            </button>

            <PopupUserNav2
              isAsideOpen={isAsideOpen}
              handleAside={handleAside}
            />

            <button className={styles.btnDisplay} onClick={handleBasket}>
              <BsCartFill size={30} color={"#fff"} />
              <span
                className={styles.quantityProductsInBasket}
                style={
                  basketQuantity !== 0
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                {basketQuantity}
              </span>
            </button>

            <Cart
              handleBasket={handleBasket}
              isBasketOpen={isBasketOpen}
              basketItems={basketItems}
              basketPrice={basketPrice}
              basketQuantity={basketQuantity}
            />
          </div>
        </div>
      </div>
    </>
  );
}

NavigationBar.propTypes = {
  basketItems: PropTypes.array,
  basketPrice: PropTypes.object,
  basketQuantity: PropTypes.number,
};
export default NavigationBar;
