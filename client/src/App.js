import "./App.css";
import React, { useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import "react-toastify/dist/ReactToastify.css";
import useWishListHook from "./hooks/useWishListHook";
import { Context } from "./Contexts/Context";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import FooterSwitcher from "./components/Switcher/FooterSwitcher/FooterSwitcher";
import NavigationBarSwitcher from "./components/Switcher/NavigationBarSwitcher/NavigationBarSwitcher";
import ToastContainerCom from "./components/ToastContainerCom/ToastContainerCom";
import useNotifyHook from "./hooks/useNotifyHook";
import useUserOrderHook from "./hooks/useUserOrderHook";
import useLoginHook from "./hooks/useLoginHook";
import useCartHook from "./hooks/useCartHook";
import useFetchData from "./hooks/useFetchData";
import useViewedProductsHook from "./hooks/useViewedProductsHook";
import {
  Home,
  Blog,
  Products,
  AboutUs,
  Account,
  Wish,
  AdminPage,
} from "./pages";
import {
  ContactSection,
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
  AdminCustomersMessages,
  AdminSettings,
  OrderDetails,
} from "./components";

function App() {
  /*----------- location ----------- */
  const location = useLocation();
  const setColumnPattern = location.pathname.includes("/admin");
  /*----------- notification ----------- */
  const { notify, notifyError } = useNotifyHook();
  /*----------- login ----------- */
  const { isLogIn, user, logIn, logOut } = useLoginHook(notify);
  /*----------- products ----------- */
  const apiProductEndpoint = `${process.env.REACT_APP_API_URI}/api/products`;
  const { data } = useFetchData(apiProductEndpoint);
  /*----------- cart ----------- */
  const {
    cartItems,
    cartValue,
    cartSave,
    cartQuantity,
    addItem,
    deleteItem,
    changeQuantity,
    clearTheCart,
  } = useCartHook(notify);
  /*----------- wishList ----------- */
  const { addWishItem, wishList } = useWishListHook(notify);
  /*----------- order ----------- */
  const { addOrder, order } = useUserOrderHook(
    user,
    cartSave,
    cartValue,
    cartItems
  );
  /*----------- userHistory ----------- */
  // const {userHistory} = useUserHistoryHook();
  const { viewedProducts, saveViewedProduct } = useViewedProductsHook();

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
        saveViewedProduct,

        viewedProducts,
        isLogIn,
        cartItems,
        cartValue,
        cartSave,
        products: data,
        cartQuantity,
        wishList,
        user,
        order,
      }}
    >
      <NavigationBarSwitcher pathname={location.pathname} />
      <section className={setColumnPattern ? "adminWeb" : "columnWeb"}>
        <div className="absoluteDivApp">
          <ToastContainerCom />
          {/* <MessengerCustomerChat
            pageId={process.env.REACT_APP_PB_ID}
            appId={process.env.REACT_APP_FB_PAGE_ID}
          /> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
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
            <Route path="purchased-products" element={<Orders />} />
            <Route
              path="purchased-products/purchase-details/:id"
              element={<OrderDetails />}
            />

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
            <Route path="customers-reviews" element={<AdminReviews />} />
            <Route path="admin-management" element={<AdminSettings />} />
            <Route
              path="customers-messages"
              element={<AdminCustomersMessages />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </section>
      <FooterSwitcher pathname={location.pathname} />
    </Context.Provider>
  );
}

export default App;
