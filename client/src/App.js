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
  OrderData,
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
  const [basketPrice, setBasketPrice] = useState({ currentPrice: 0, save: 0 });
  const [basketQuantity, setBasketQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  // http://localhost:5000/api/products

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/products");
      setProducts(result.data);
    };

    fetchData();
  }, []);

  const [isLogIn, setIsLogIn] = useState(() => {
    const storedValue = localStorage.getItem("is-logged");
    return storedValue === "true" ? true : false;
  });

  function logIn() {
    setIsLogIn(true);
    localStorage.setItem("is-logged", true);
  }

  function logOut() {
    setIsLogIn(false);

    localStorage.setItem("is-logged", false);
  }

  function addItem(item) {
    const newItemIndex = basketItems.findIndex(
      (element) => element.id === item.id
    );

    if (newItemIndex === -1) {
      setBasketItems([...basketItems, { ...item }]);
    } else {
      let newArr = [...basketItems];

      newArr[newItemIndex].quantity =
        newArr[newItemIndex].quantity + item.quantity;

      setBasketItems(newArr);
    }

    setBasketQuantity(basketQuantity + item.quantity);

    setBasketPrice((prevPrice) => ({
      ...prevPrice,
      currentPrice:
        Math.round(
          (prevPrice.currentPrice + item.newPrice * item.quantity) * 100
        ) / 100,
      save:
        Math.round(
          (prevPrice.save + (item.oldPrice - item.newPrice) * item.quantity) *
            100
        ) / 100,
    }));
  }

  function deleteItem(id, newPrice, oldPrice) {
    const basketList = basketItems.filter((item) => item.id !== id);
    const findItem = basketItems.filter((item) => item.id === id);

    setBasketItems(basketList);
    setBasketQuantity(basketQuantity - findItem[0].quantity);

    setBasketPrice((prevPrice) => ({
      ...prevPrice,
      currentPrice:
        Math.round(
          (prevPrice.currentPrice - newPrice * findItem[0].quantity) * 100
        ) / 100,
      save:
        Math.round(
          (prevPrice.save - (oldPrice - newPrice) * findItem[0].quantity) * 100
        ) / 100,
    }));
  }

  function clearTheCart() {
    setBasketItems([]);
    setBasketQuantity(0);
    setBasketPrice({ currentPrice: 0, save: 0 });
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
      }}
    >
      <section className="columnWeb">
        {/* <Provider store={store}> */}

        <NavigationBar basketQuantity={basketQuantity} />
        <Routes>
          <Route path="/" element={<Home productData={products} />} />
          <Route path="about-us" element={<AboutUs />} />

          <Route path="menu" element={<Menu />} />
          <Route
            path="products"
            element={<Products productData={products} />}
          />
          <Route
            path="products/:id"
            element={<ProductDetails productData={products} />}
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
            <Route path="order-data" element={<OrderData />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="wish-list" element={<Wish />} />
          <Route path="cart" element={<ViewCart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
        {/* </Provider> */}
      </section>
    </Context.Provider>
  );
}

export default App;
