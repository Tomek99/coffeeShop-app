import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Context } from "./Contexts/Context";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Home,
  Articles,
  Products,
  Menu,
  Reviews,
  AboutUs,
  Account,
  Wish,
} from "./pages";
import {
  NavigationBar,
  ContactSection,
  Footer,
  ProductDetails,
  Orders,
  UserReviews,
  Address,
  Settings,
  ReturnComplaint,
  LogIn,
  SignUp,
  RecoverPassword,
  Protected,
  ViewCart,
  AccountContent,
  OrderDetails,
} from "./components";

function App() {
  /*----------- cart ----------- */
  const [cartItems, setCartItems] = useState(() => {
    const storedValue = localStorage.getItem("cart");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return [];
  });

  const [wishList, setWishList] = useState([]);

  const [cartValue, setCartValue] = useState(() => {
    const storedValue = localStorage.getItem("cart-value");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return 0;
  });
  const [cartSave, setCartSave] = useState(() => {
    const storedValue = localStorage.getItem("cart-save");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return 0;
  });

  const [cartQuantity, setCartQuantity] = useState(() => {
    const storedValue = localStorage.getItem("cart-quantity");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return 0;
  });

  useEffect(() => {
    localStorage.setItem("cart-save", cartSave);
    localStorage.setItem("cart-value", cartValue);
    localStorage.setItem("cart-quantity", cartQuantity);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartValue, cartQuantity, cartItems, cartSave]);

  /*----------- products ----------- */
  const [products, setProducts] = useState([]);

  /*----------- loading ----------- */
  const [loading, setLoading] = useState(true);

  /*----------- isLogged ----------- */
  const [isLogIn, setIsLogIn] = useState(() => {
    if (localStorage.getItem("is-logged") !== null) {
      const storedValue = localStorage.getItem("is-logged");
      return storedValue === "true" ? true : false;
    } else return false;
  });

  const [user, setUser] = useState(() => {
    const storedValue = localStorage.getItem("user-data");
    if (storedValue !== null && isLogIn) return JSON.parse(storedValue);
    else return {};
  });

  /*----------- api request ----------- */
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const products = await axios.get("http://localhost:5000/api/products");
      setLoading(false);
      setProducts(products.data);
    };
    fetchData();
  }, []);

  /*----------- login ----------- */
  function logIn(data) {
    setIsLogIn(true);
    setUser(data);
    localStorage.clear(); // TEST
    localStorage.setItem("user-data", JSON.stringify(data));
    localStorage.setItem("is-logged", true);
  }

  function logOut() {
    setIsLogIn(false);
    setUser({});
    localStorage.clear();
  }

  /*----------- cart ----------- */

  function addItem(item) {
    const newItemIndex = cartItems.findIndex(
      (element) => element._id === item._id
    );

    if (newItemIndex === -1) {
      setCartItems([...cartItems, { ...item }]);
    } else {
      let newArr = [...cartItems];

      newArr[newItemIndex].quantity =
        newArr[newItemIndex].quantity + item.quantity;

      setCartItems(newArr);
    }

    setCartQuantity(cartQuantity + item.quantity);
    appendPrice(item.newPrice, item.oldPrice, item.quantity);
  }

  function deleteItem(id, newPrice, oldPrice) {
    const cartList = cartItems.filter((item) => item._id !== id);
    const findItem = cartItems.filter((item) => item._id === id);

    setCartItems(cartList);
    setCartQuantity(cartQuantity - findItem[0].quantity);
    subtractPrice(newPrice, oldPrice, findItem[0].quantity);
  }

  function appendPrice(newPrice, oldPrice, quantity) {
    setCartValue(
      Math.round((cartValue + parseFloat(newPrice) * quantity) * 100) / 100
    );

    if (oldPrice !== 0) {
      setCartSave(
        Math.round(
          (cartSave +
            (parseFloat(oldPrice) - parseFloat(newPrice)) * quantity) *
            100
        ) / 100
      );
    }
  }

  function subtractPrice(newPrice, oldPrice, quantity) {
    setCartValue(
      Math.round((cartValue - parseFloat(newPrice) * quantity) * 100) / 100
    );

    if (oldPrice !== 0) {
      setCartSave(
        Math.round(
          (cartSave -
            (parseFloat(oldPrice) - parseFloat(newPrice)) * quantity) *
            100
        ) / 100
      );
    }
  }

  function clearTheCart() {
    setCartItems([]);
    setCartQuantity(0);
    setCartValue(0);
    setCartSave(0);

    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("cart-quantity", 0);
    localStorage.setItem("cart-value", 0);
    localStorage.setItem("cart-save", 0);
  }
  /*----------- wishList ----------- */

  function addItemWishList(item) {
    setWishList([...wishList, { ...item }]);
  }

  /*----------- blurScreen ----------- */

  return (
    <Context.Provider
      value={{
        addItem,
        deleteItem,
        addItemWishList,
        logIn,
        logOut,
        clearTheCart,
        isLogIn,
        cartItems,
        cartValue,
        cartSave,
        cartQuantity,
        products,
        user,
        loading,
      }}
    >
      {" "}
      <NavigationBar basketQuantity={cartQuantity} />
      <section className="columnWeb">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />

          <Route path="menu" element={<Menu />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<ContactSection />} />
          <Route path="articles" element={<Articles />} />
          <Route path="blog" element={<Articles />} />

          <Route
            path="log-in"
            element={
              <Protected isLogIn={!isLogIn} navigate="/">
                <LogIn />
              </Protected>
            }
          />
          <Route
            path="sign-up"
            element={
              <Protected isLogIn={!isLogIn} navigate="/">
                <SignUp />
              </Protected>
            }
          />
          <Route
            path="recover-password"
            element={
              <Protected isLogIn={!isLogIn} navigate="/">
                <RecoverPassword />
              </Protected>
            }
          />

          <Route
            path="/"
            element={
              <Protected isLogIn={isLogIn} navigate="/log-in">
                <Account />
              </Protected>
            }
          >
            <Route path="account" element={<AccountContent />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:id" element={<OrderDetails />} />
            <Route path="returns" element={<ReturnComplaint />} />
            <Route path="user-reviews" element={<UserReviews />} />
            <Route path="address" element={<Address />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="wish-list" element={<Wish />} />
          <Route path="cart" element={<ViewCart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </section>
      <Footer />
    </Context.Provider>
  );
}

export default App;
