import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import productData from "./data/product.json";

import { Home, Articles, Products, Menu, Reviews, AboutUs } from "./pages";

import {
  NavigationBar,
  ContactSection,
  Footer,
  AboutCs,
  FAQ,
  OurTeam,
  ProductDetails,
} from "./components";

function App() {
  const [basketItems, setBasketItems] = useState([]);
  const [basketPrice, setBasketPrice] = useState({ currentPrice: 0, save: 0 });

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
    <section className="columnWeb">
      <NavigationBar
        basketItems={basketItems}
        deleteItem={deleteItem}
        basketPrice={basketPrice}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addItem={addItem}
              basketItems={basketItems}
              basketPrice={basketPrice}
              productData={productData}
            />
          }
        />
        <Route path="about-us" element={<AboutUs />}>
          <Route path="about-coffee-shop" element={<AboutCs />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<AboutCs />} />
        </Route>
        <Route path="menu" element={<Menu addItem={addItem} />} />
        <Route
          path="products/"
          element={<Products addItem={addItem} productData={productData} />}
        ></Route>
        <Route
          path="products/:id"
          element={
            <ProductDetails addItem={addItem} productData={productData} />
          }
        />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<ContactSection />} />
        <Route path="articles" element={<Articles />} />
        <Route path="blog" element={<Articles />} />
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
