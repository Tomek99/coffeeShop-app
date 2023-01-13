import "./App.css";
import React, { useState, useEffect } from "react";
import { Context } from "./Contexts/Context";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Home,
  Articles,
  Products,
  Menu,
  Reviews,
  AboutUs,
  Account,
} from "./pages";
import {
  NavigationBar,
  ContactSection,
  Footer,
  ProductDetails,
  Orders,
  UserReviews,
  Settings,
  WishList,
  ReturnComplaint,
  LogIn,
  SignUp,
  RecoverPassword,
  Protected,
} from "./components";
import productData from "./data/product.json";

function App() {
  const [basketItems, setBasketItems] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [basketPrice, setBasketPrice] = useState({ currentPrice: 0, save: 0 });
  const [basketQuantity, setBasketQuantity] = useState(0);

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
        isLogIn,
      }}
    >
      <section className="columnWeb">
        {/* <Provider store={store}> */}

        <NavigationBar
          basketItems={basketItems}
          basketPrice={basketPrice}
          basketQuantity={basketQuantity}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                basketItems={basketItems}
                basketPrice={basketPrice}
                productData={productData}
              />
            }
          />
          <Route path="about-us" element={<AboutUs />} />

          <Route path="menu" element={<Menu />} />
          <Route
            path="products"
            element={<Products productData={productData} />}
          />
          <Route
            path="products/:id"
            element={<ProductDetails productData={productData} />}
          />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<ContactSection />} />
          <Route path="articles" element={<Articles />} />
          <Route path="blog" element={<Articles />} />

          <Route path="log-in" element={<LogIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="recover-password" element={<RecoverPassword />} />

          <Route
            path="/"
            element={
              <Protected isLogIn={isLogIn}>
                <Account />
              </Protected>
            }
          >
            <Route path="account" />
            <Route path="orders" element={<Orders />} />
            <Route path="returns" element={<ReturnComplaint />} />
            <Route path="wish-list" element={<WishList />} />
            <Route path="user-reviews" element={<UserReviews />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>

        <Footer />
        {/* </Provider> */}
      </section>
    </Context.Provider>
  );
}

export default App;
