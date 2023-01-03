import "./App.css";
import React, { useState } from "react";
import { Context } from "./Contexts/Context";
import { Route, Routes } from "react-router-dom";
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
  SignIn,
  SignUp,
  RecoverPassword,
} from "./components";
import productData from "./data/product.json";

function App() {
  const [basketItems, setBasketItems] = useState([]);
  const [basketPrice, setBasketPrice] = useState({ currentPrice: 0, save: 0 });
  const [basketQuantity, setBasketQuantity] = useState(0);

  const addItem = (item) => {
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
  };

  const deleteItem = (id, newPrice, oldPrice) => {
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
  };

  return (
    <Context.Provider
      value={{
        addItem,
        deleteItem,
      }}
    >
      <section className="columnWeb">
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
            path="products/"
            element={<Products productData={productData} />}
          ></Route>
          <Route
            path="products/:id"
            element={<ProductDetails productData={productData} />}
          />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<ContactSection />} />
          <Route path="articles" element={<Articles />} />
          <Route path="blog" element={<Articles />} />

          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="recover-password" element={<RecoverPassword />} />

          <Route path="/" element={<Account />}>
            <Route path="account" />
            <Route path="orders" element={<Orders />} />
            <Route path="returns" element={<ReturnComplaint />} />
            <Route path="wish-list" element={<WishList />} />
            <Route path="user-reviews" element={<UserReviews />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>

        <Footer />
      </section>
    </Context.Provider>
  );
}

export default App;
