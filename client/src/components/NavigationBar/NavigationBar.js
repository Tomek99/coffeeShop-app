import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import { BsCartFill, BsSearch, BsHeart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import PopupSearch from "../PopupSearch/PopupSearch";
import Cart from "../Cart/Cart";
import NavListElement from "../NavListElement/NavListElement";
import PropTypes from "prop-types";
import PopupUserNav1 from "../PopupUserNav/PopupUserNav1/PopupUserNav1";
import PopupUserNav2 from "../PopupUserNav/PopupUserNav2/PopupUserNav2";
import { Context } from "../../Contexts/Context";
import BlurScreen from "../BlurScreen/BlurScreen";

function NavigationBar(props) {
  const { basketQuantity } = props;
  const { isLogIn } = useContext(Context);

  const navBarList = [
    { name: "Home", path: "/" },
    { name: "Products", path: "products" },
    { name: "Menu", path: "menu" },
    { name: "Review", path: "reviews" },
    { name: "About", path: "about-us" },
    { name: "Contact", path: "contact" },
    { name: "Blog", path: "blog" },
  ];

  const [isAsideOpen, setAsideOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const location = useLocation();

  let elementHTML = window.document.getElementsByTagName("html")[0];

  const handleSearch = () => {
    setSearchOpen(!isSearchOpen);
    setNavigationOpen(false);
    setAsideOpen(false);
    setCartOpen(false);
  };

  const handleNavigation = () => {
    setNavigationOpen(!isNavigationOpen);
    setAsideOpen(false);
    setSearchOpen(false);
    setCartOpen(false);
  };

  const handleAside = () => {
    if (!isAsideOpen) elementHTML.style.overflow = "hidden";
    else elementHTML.style.overflow = "scroll";

    setAsideOpen(!isAsideOpen);
    setNavigationOpen(false);
    setSearchOpen(false);
    setCartOpen(false);
  };

  const handleCart = (location) => {
    if (location === "/cart") return;

    if (!isCartOpen) elementHTML.style.overflow = "hidden";
    else elementHTML.style.overflow = "scroll";

    setCartOpen(!isCartOpen);
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
          <div className={styles.divLogo}>
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
              to={isLogIn ? "account" : "log-in"}
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

            <button
              className={styles.btnDisplay}
              onClick={() => handleCart(location.pathname)}
            >
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
              handleCart={handleCart}
              isCartOpen={isCartOpen}
              basketQuantity={basketQuantity}
            />
            {isCartOpen || isAsideOpen ? (
              <BlurScreen
                isCartOpen={isCartOpen}
                handleAside={handleAside}
                handleCart={handleCart}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

NavigationBar.propTypes = {
  basketQuantity: PropTypes.number,
};
export default NavigationBar;
