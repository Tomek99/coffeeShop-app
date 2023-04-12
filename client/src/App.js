import "./App.css";
import React, { useState, useEffect } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import axios from "axios";
import { Context } from "./Contexts/Context";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import {
  Home,
  Articles,
  Products,
  Reviews,
  AboutUs,
  Account,
  Wish,
} from "./pages";
import {
  NavigationBar,
  NavigationBarOrder,
  ContactSection,
  Footer,
  FooterOrder,
  ProductDetails,
  Orders,
  Order,
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
  Summary,
  PaymentSuccess,
  PaymentCanceled,
  ProtectedOrder,
} from "./components";

function App() {
  /*----------- products ----------- */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const products = await axios.get(
        `${process.env.REACT_APP_API_URI}/api/products`
      );
      setLoading(false);
      setProducts(products.data);
    };
    fetchData();
  }, []);

  /*----------- login ----------- */
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
  const [cartItems, setCartItems] = useState(() => {
    const storedValue = localStorage.getItem("cart");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return [];
  });
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
    appendPrice(item.price, item.oldPrice, item.quantity);
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
  useEffect(() => {
    localStorage.setItem("cart-save", cartSave);
    localStorage.setItem("cart-value", cartValue);
    localStorage.setItem("cart-quantity", cartQuantity);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartValue, cartQuantity, cartItems, cartSave]);

  /*----------- wishList ----------- */
  const [wishList, setWishList] = useState([]);

  function addItemWishList(item) {
    setWishList([...wishList, { ...item }]);
  }

  /*----------- order ----------- */
  const [order, setOrder] = useState(() => {
    const storedValue = localStorage.getItem("order");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return {};
  });

  function addOrder(order) {
    const address = {
      name: order.name,
      street: order.street,
      house: order.house,
      ZIP_code: order.ZIP_code,
      city: order.city,
      number: order.number,
      email: order.email,
    };

    const company = {
      companyNip: order.companyNip,
      companyName: order.companyName,
      companyStreet: order.companyStreet,
      companyZIPcode: order.companyZIPcode,
      companyCity: order.companyCity,
    };

    let invoice = {
      name: order.i_name,
      street: order.i_street,
      ZIP_code: order.i_ZIP_code,
      city: order.i_city,
    };
    if (order.i_name) {
      invoice = {
        name: order.i_name,
        street: order.i_street,
        ZIP_code: order.i_ZIP_code,
        city: order.i_city,
      };
    } else {
      invoice = {
        name: order.name,
        street: order.street,
        ZIP_code: order.ZIP_code,
        city: order.city,
      };
    }
    const orderUpdate = {
      // userOrdersId: user.orders,
      userOrdersId: user.orders,
      save: cartSave,
      cartValue: cartValue,
      totalCost:
        cartValue +
        JSON.parse(order.deliveryFee) +
        JSON.parse(order.paymentFee),
      supplyPrice: 15,
      products: cartItems,
      address: address,
      company: company,
      invoice: invoice,
      payment: order.payment,
      paymentFee: order.paymentFee,
      delivery: order.delivery,
      deliveryFee: order.deliveryFee,
      shopper: order.shopper,
      comment: order.comment,
      activeAddress: order.activeAddress,
      activeCompany: order.activeCompany,
      activeInvoice: order.activeInvoice,
      activeComment: order.activeComment,
    };

    setOrder(orderUpdate);
    localStorage.setItem("order", JSON.stringify(orderUpdate));
  }

  /*----------- location ----------- */
  const location = useLocation();

  /*----------- params ----------- */

  /*----------- navigate on Summary ----------- */
  const [isUserNavigateToSummary, setIsUserNavigateToSummary] = useState(false);

  function handleUserNavigateToSummary() {
    setIsUserNavigateToSummary(true);
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
        addOrder,
        isLogIn,
        cartItems,
        cartValue,
        cartSave,
        cartQuantity,
        products,
        user,
        loading,
        order,
      }}
    >
      {(() => {
        switch (location.pathname) {
          case "/order":
          case "/order/summary":
          case "/order/success":
          case "/order/canceled":
            return <NavigationBarOrder />;

          default:
            return <NavigationBar />;
        }
      })()}
      <section className="columnWeb">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
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
            {/* <Route path="orders/:id" element={<OrderDetails />} /> */}
            <Route path="returns" element={<ReturnComplaint />} />
            <Route path="user-reviews" element={<UserReviews />} />
            <Route path="address" element={<Address />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route
            path="order"
            element={
              <ProtectedOrder
                isLogIn={isLogIn}
                cartItemsLen={cartItems.length}
                navigate="/log-in"
              >
                <Order
                  handleUserNavigateToSummary={handleUserNavigateToSummary}
                />
              </ProtectedOrder>
            }
          />

          <Route
            path="order/summary"
            element={
              <Protected isLogIn={isUserNavigateToSummary} navigate="/order">
                <Summary />
              </Protected>
            }
          />

          <Route
            path="order/success"
            element={<PaymentSuccess clearTheCart={clearTheCart} />}
          />
          <Route path="order/canceled" element={<PaymentCanceled />} />

          <Route path="wish-list" element={<Wish />} />
          <Route path="cart" element={<ViewCart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* <MessengerCustomerChat pageId="" appId="" htmlRef="" /> */}
      </section>
      {(() => {
        switch (location.pathname) {
          case "/order":
          case "/order/summary":
          case "/cart":
          case "/order/success":
          case "/order/canceled":
            return <FooterOrder />;

          default:
            return <Footer />;
        }
      })()}
    </Context.Provider>
  );
}

export default App;
