import "./App.css";
import React, { useState } from "react";
import { Context } from "./Contexts/Context";
import { Route, Routes } from "react-router-dom";
import { Home, Articles, Products, Menu, Reviews, AboutUs } from "./pages";
import {
  NavigationBar,
  ContactSection,
  Footer,
  ProductDetails,
  UserOrders,
  UserProfile,
  UserReviews,
  UserSettings,
  UserWishList,
  UserReturnComplaint,
  SignIn,
  SignUp,
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
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<ContactSection />} />
          <Route path="articles" element={<Articles />} />
          <Route path="blog" element={<Articles />} />

          <Route path="account" element={<UserProfile />} />
          <Route path="orders" element={<UserOrders />} />
          <Route
            path="user-return-complaint"
            element={<UserReturnComplaint />}
          />
          <Route path="wish-list" element={<UserWishList />} />
          <Route path="user-reviews" element={<UserReviews />} />
          <Route path="" element={<UserSettings />} />
          <Route path="settings" element={<UserSettings />} />
        </Routes>

        <Footer />
      </section>
    </Context.Provider>
  );
}

export default App;
