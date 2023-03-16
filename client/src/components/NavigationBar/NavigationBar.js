import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import { BsCartFill, BsSearch, BsHeart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import PopupSearch from "../PopupSearch/PopupSearch";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types";
import PopupUserNav1 from "../PopupUserNav/PopupUserNav1/PopupUserNav1";
import PopupUserNav2 from "../PopupUserNav/PopupUserNav2/PopupUserNav2";
import { Context } from "../../Contexts/Context";
import BlurScreen from "../BlurScreen/BlurScreen";
import BtnHamburger from "../Buttons/BtnHamburger/BtnHamburger";
import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

function NavigationBar() {
  const { isLogIn, cartQuantity } = useContext(Context);
  // { name: "Review", path: "reviews" },

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
    if (!isNavigationOpen) elementHTML.style.overflowY = "hidden";
    else elementHTML.style.overflowY = "scroll";

    setNavigationOpen(!isNavigationOpen);
  };

  const handleAside = () => {
    if (!isAsideOpen) elementHTML.style.overflowY = "hidden";
    else elementHTML.style.overflowY = "scroll";

    setAsideOpen(!isAsideOpen);
  };

  const handleCart = (location) => {
    if (location === "/cart") return;

    if (!isCartOpen) elementHTML.style.overflowY = "hidden";
    else elementHTML.style.overflowY = "scroll";

    setCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className={styles.NavigationBar}>
        <BtnHamburger
          isActive={isNavigationOpen}
          handleBtn={handleNavigation}
        />
        <div className={styles.navBar}>
          <div className={styles.divLogo}>
            <Link to="/">
              <img src="/images/logo.png" className={styles.logo} alt="" />
            </Link>
          </div>
          <nav>
            <DesktopNavigation />
            <MobileNavigation
              handleNavigation={handleNavigation}
              isNavigationOpen={isNavigationOpen}
            />
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

            <button
              className={styles.btnDisplay}
              onClick={() => handleCart(location.pathname)}
            >
              <BsCartFill size={30} color={"#fff"} />
              <span
                className={styles.quantityProductsInBasket}
                style={
                  cartQuantity !== 0 ? { display: "flex" } : { display: "none" }
                }
              >
                {cartQuantity}
              </span>
            </button>
            <PopupUserNav2
              isAsideOpen={isAsideOpen}
              handleAside={handleAside}
            />
            <Cart handleCart={handleCart} isCartOpen={isCartOpen} />
            {isCartOpen || isAsideOpen || isNavigationOpen ? (
              <BlurScreen
                isCartOpen={isCartOpen}
                isNavigationOpen={isNavigationOpen}
                handleAside={handleAside}
                handleCart={handleCart}
                handleNavigation={handleNavigation}
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
