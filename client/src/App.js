import "./App.css";
import React, { useState, useEffect } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./Contexts/Context";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import {
  Home,
  Blog,
  Products,
  Reviews,
  AboutUs,
  Account,
  Wish,
  AdminPage,
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
  Summary,
  PaymentSuccess,
  PaymentCanceled,
  ProtectedOrder,
  AdminProducts,
  AdminCustomers,
  AdminTransactions,
  AdminDashboard,
  AdminReviews,
} from "./components";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import useFetchData from "./hooks/useFetchData";

function App() {
  /*----------- location ----------- */
  const location = useLocation();
  const setColumnPattern = location.pathname.includes("/admin");

  /*----------- products ----------- */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/products`;
  const { isLoaded, productsData: data } = useFetchData(apiEndpoint);

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
    notify("You have been logged in!");
    localStorage.clear(); // TEST
    localStorage.setItem("user-data", JSON.stringify(data));
    localStorage.setItem("is-logged", true);
  }

  function logOut() {
    setIsLogIn(false);
    setUser({});
    notify("You have been logged out!");
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
    const cartItemsCopy = cartItems.map((item) => ({ ...item }));

    const newItemIndex = cartItemsCopy.findIndex(
      (element) => element._id === item._id
    );

    if (newItemIndex === -1) {
      setCartItems([...cartItemsCopy, { ...item }]);
    } else {
      cartItemsCopy[newItemIndex].quantity =
        cartItemsCopy[newItemIndex].quantity + item.quantity;

      setCartItems(cartItemsCopy);
    }
    notify("Product(s) added to cart!");
    setCartQuantity(cartQuantity + item.quantity);
    appendPrice(item.price, item.oldPrice, item.quantity);
  }

  function deleteItem(id, newPrice, oldPrice) {
    const cartList = cartItems.filter((item) => item._id !== id);
    const findItem = cartItems.filter((item) => item._id === id);

    setCartItems(cartList);
    setCartQuantity(cartQuantity - findItem[0].quantity);
    subtractPrice(newPrice, oldPrice, findItem[0].quantity);
    notify("Product(s) has been removed!");
  }

  function appendPrice(newPrice, oldPrice, quantity) {
    setCartValue(
      Math.round((cartValue + parseFloat(newPrice) * quantity) * 100) / 100
    );

    if (oldPrice) {
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

    if (oldPrice) {
      setCartSave(
        Math.round(
          (cartSave -
            (parseFloat(oldPrice) - parseFloat(newPrice)) * quantity) *
            100
        ) / 100
      );
    }
  }

  function changeQuantity(e, id) {
    const cartItemsCopy = cartItems.map((item) => ({ ...item }));
    const foundIndex = cartItemsCopy.findIndex(
      (item, index) => item._id === id
    );
    const previousQuantity = cartItemsCopy[foundIndex].quantity;
    cartItemsCopy[foundIndex].quantity = parseInt(e.target.value);

    const currentQuantity = cartItemsCopy[foundIndex].quantity;
    setCartItems(cartItemsCopy);
    setCartQuantity(cartQuantity + currentQuantity - previousQuantity);

    if (currentQuantity > previousQuantity) {
      appendPrice(
        cartItemsCopy[foundIndex].price,
        cartItemsCopy[foundIndex].oldPrice,
        Math.abs(currentQuantity - previousQuantity)
      );
    } else if (currentQuantity < previousQuantity) {
      subtractPrice(
        cartItemsCopy[foundIndex].price,
        cartItemsCopy[foundIndex].oldPrice,
        Math.abs(currentQuantity - previousQuantity)
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

    if (window.location.href !== `${process.env.REACT_APP_URI}/order/success`)
      notify("Cart has been cleared!");
  }
  useEffect(() => {
    localStorage.setItem("cart-save", cartSave);
    localStorage.setItem("cart-value", cartValue);
    localStorage.setItem("cart-quantity", cartQuantity);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartValue, cartQuantity, cartItems, cartSave]);

  /*----------- wishList ----------- */
  const [wishList, setWishList] = useState(() => {
    const storedValue = localStorage.getItem("wishList");

    if (storedValue !== null) return JSON.parse(storedValue);
    else return [];
  });

  function addWishItem(id) {
    const foundId = wishList.find((value) => value === id);

    if (!foundId) {
      setWishList([...wishList, id]);
      localStorage.setItem("wishList", JSON.stringify([...wishList, id]));

      notify("Product added to wish list!");
    } else {
      const filteredItems = wishList.filter((value) => value !== id);
      setWishList(filteredItems);
      localStorage.setItem("wishList", JSON.stringify(filteredItems));

      notify("Product has been deleted!");
    }
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
      userId: user._id,
      userName: user.firstName,
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

  /*----------- notification ----------- */

  const notify = (text) =>
    toast.success(text, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = (text) =>
    toast.error(text, {
      position: "top-right",
      autoClose: 3000,

      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

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
        addWishItem,
        logIn,
        logOut,
        clearTheCart,
        addOrder,
        changeQuantity,
        notify,
        notifyError,
        isLogIn,
        cartItems,
        cartValue,
        cartSave,
        cartQuantity,
        wishList,
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

          case "/admin":
          case "/admin/products":
          case "/admin/customers":
          case "/admin/transactions":
          case "/admin/reviews":
            return <null />;
          default:
            return <NavigationBar />;
        }
      })()}
      <section className={setColumnPattern ? "adminWeb" : "columnWeb"}>
        <div className="absoluteDivApp">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* <MessengerCustomerChat
            pageId="109980154081140"
            appId="1174144033276048"
          /> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<ContactSection />} />
          <Route path="blog" element={<Blog />} />

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
            element={
              <PaymentSuccess
                clearTheCart={clearTheCart}
                cartItems={cartItems}
                user={user}
              />
            }
          />
          <Route path="order/canceled" element={<PaymentCanceled />} />
          <Route path="wish-list" element={<Wish />} />
          <Route path="cart" element={<ViewCart />} />
          <Route path="admin" element={<AdminPage />}>
            <Route path="" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="transactions" element={<AdminTransactions />} />
            <Route path="reviews" element={<AdminReviews />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </section>
      {(() => {
        switch (location.pathname) {
          case "/order":
          case "/order/summary":
          case "/cart":
          case "/order/success":
          case "/order/canceled":
            return <FooterOrder />;

          case "/admin":
          case "/admin/products":
          case "/admin/customers":
          case "/admin/transactions":
          case "/admin/reviews":
            return null;
          default:
            return <Footer />;
        }
      })()}
    </Context.Provider>
  );
}

export default App;
