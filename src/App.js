import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllArticles from "./pages/AllArticles/AllArticles";
import AllProducts from "./pages/AllProducts/AllProducts";
import AllMenu from "./pages/AllMenu/AllMenu";
import AllReviews from "./pages/AllReviews/AllReviews";
import ArticleAboutUs from "./pages/ArticleAboutUs/ArticleAboutUs";
import {
  HeaderSection,
  ContactSection,
  FooterSection,
} from "./components/index";
function App() {
  const [basketItems, setBasketItem] = useState([]);
  const [basketPrice, setBasketPrice] = useState({ currentPrice: 0, save: 0 });

  const addItem = (item) => {
    if (isRepeat(item.idProduct)) setBasketItem([...basketItems, item]);

    setBasketPrice((prevPrice) => ({
      ...prevPrice,
      currentPrice:
        Math.round((prevPrice.currentPrice + item.newPrice) * 100) / 100,
      save:
        Math.round((prevPrice.save + (item.oldPrice - item.newPrice)) * 100) /
        100,
    }));
  };

  const deleteItem = (id, newPrice, oldPrice) => {
    const basketList = basketItems.filter((item) => item.idProduct !== id);
    const findItem = basketItems.filter((item) => item.idProduct === id);

    setBasketItem(basketList);

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

  const isRepeat = (idProduct) => {
    for (let i = 0; i < basketItems.length; i++) {
      if (basketItems[i].idProduct === idProduct) {
        basketItems[i].quantity += 1;
        return false;
      }
    }
    return true;
  };

  return (
    <section className="columnWeb">
      <Router>
        <HeaderSection
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
              />
            }
          />
          <Route path="/ArticleAboutUs" element={<ArticleAboutUs />} />
          <Route path="/AllMenu" element={<AllMenu />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/AllReviews" element={<AllReviews />} />
          <Route path="/Contact" element={<ContactSection />} />
          <Route path="/AllArticles" element={<AllArticles />} />
        </Routes>
        <FooterSection />
      </Router>
    </section>
  );
}

export default App;
