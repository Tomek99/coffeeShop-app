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
} from "./components";

function App() {
  const [basketItems, setBasketItems] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [basketPrice, setCartPrice] = useState({ currentPrice: 0, save: 0 });
  const [basketQuantity, setCartQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLogIn, setIsLogIn] = useState(() => {
    const storedValue = localStorage.getItem("is-logged");
    return storedValue === "true" ? true : false;
  });
  const [user, setUser] = useState(() => {
    const storeValue = localStorage.getItem("user-data");
    return typeof storeValue == "string" && isLogIn
      ? JSON.parse(storeValue)
      : {};
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then(({ data }) => setProducts(data));
  }, []);

  function logIn(data) {
    setIsLogIn(true);
    setUser(data);
    localStorage.setItem("user-data", JSON.stringify(data));
    localStorage.setItem("is-logged", true);
  }

  function logOut() {
    setIsLogIn(false);
    setUser({});
    localStorage.clear();
  }

  function addItem(item) {
    const newItemIndex = basketItems.findIndex(
      (element) => element._id === item._id
    );

    if (newItemIndex === -1) {
      setBasketItems([...basketItems, { ...item }]);
    } else {
      let newArr = [...basketItems];

      newArr[newItemIndex].quantity =
        newArr[newItemIndex].quantity + item.quantity;

      setBasketItems(newArr);
    }

    setCartQuantity(basketQuantity + item.quantity);
    appendPrice(item.newPrice, item.oldPrice, item.quantity);
  }

  function deleteItem(id, newPrice, oldPrice) {
    const basketList = basketItems.filter((item) => item._id !== id);
    const findItem = basketItems.filter((item) => item._id === id);

    setBasketItems(basketList);
    setCartQuantity(basketQuantity - findItem[0].quantity);
    subtractPrice(newPrice, oldPrice, findItem[0].quantity);
  }

  function appendPrice(newPrice, oldPrice, quantity) {
    if (Boolean(oldPrice)) {
      setCartPrice((prevPrice) => ({
        ...prevPrice,
        currentPrice:
          Math.round((prevPrice.currentPrice + newPrice * quantity) * 100) /
          100,
        save:
          Math.round(
            (prevPrice.save + (oldPrice - newPrice) * quantity) * 100
          ) / 100,
      }));
    } else {
      setCartPrice((prevPrice) => ({
        ...prevPrice,
        currentPrice:
          Math.round((prevPrice.currentPrice + newPrice * quantity) * 100) /
          100,
      }));
    }
  }

  function subtractPrice(newPrice, oldPrice, quantity) {
    if (Boolean(oldPrice)) {
      setCartPrice((prevPrice) => ({
        ...prevPrice,
        currentPrice:
          Math.round((prevPrice.currentPrice - newPrice * quantity) * 100) /
          100,
        save:
          Math.round(
            (prevPrice.save - (oldPrice - newPrice) * quantity) * 100
          ) / 100,
      }));
    } else {
      setCartPrice((prevPrice) => ({
        ...prevPrice,
        currentPrice:
          Math.round((prevPrice.currentPrice - newPrice * quantity) * 100) /
          100,
      }));
    }
  }

  function clearTheCart() {
    setBasketItems([]);
    setCartQuantity(0);
    setCartPrice({ currentPrice: 0, save: 0 });
  }

  function addItemWishList(item) {
    setWishList([...wishList, { ...item }]);
  }

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
        basketItems,
        basketPrice,
        basketQuantity,
        products,
        user,
      }}
    >
      {" "}
      <NavigationBar basketQuantity={basketQuantity} />
      <section className="columnWeb">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />

          <Route path="menu" element={<Menu />} />
          <Route path="products" element={<Products />} />
          <Route
            path="products/:id"
            element={<ProductDetails products={products} />}
          />
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
