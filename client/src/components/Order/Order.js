import React, { useContext, useEffect, useRef, useState } from "react";
import Deliver from "./ColumnLeft/Deliver/Deliver";
import ExtraInfo from "./ColumnLeft/ExtraInfo/ExtraInfo";
import UserInvoice from "./ColumnLeft/UserInvoice/UserInvoice";
import styles from "./Order.module.scss";
import Payment from "./ColumnLeft/Payment/Payment";
import Recipient from "./ColumnLeft/Recipient/Recipient";
import * as Yup from "yup";
import Shopper from "./ColumnLeft/Shopper/Shopper";
import DisplayProducts from "./ColumnRight/DisplayProducts/DisplayProducts";
import DeliverMethod from "./ColumnRight/DeliverMethod/DeliverMethod";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import Company from "./ColumnLeft/Comapny/Company";
import DeliveryAddress from "./ColumnLeft/DeliveryAddress/DeliveryAddress";
import CartSummary from "../ViewCart/FillCart/CartSummary/CartSummary";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Contexts/Context";

function Order({ handleUserNavigateToSummary }) {
  const { addOrder } = useContext(Context);
  /*---------Field Delivery---------*/

  /*---------Initial values---------*/
  const [initialValuesLocal, setInitialValuesLocal] = useState(() => {
    const storedValue = localStorage.getItem("orderSummary");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return false;
  });

  const initialValues = {
    activeAddress: true,
    activeCompany: false,
    activeInvoice: false,
    activeComment: false,
    name: "",
    street: "",
    house: "",
    ZIP_code: "",
    city: "",
    number: "",
    email: "",
    companyNip: "",
    companyName: "",
    companyStreet: "",
    companyZIPcode: "",
    companyCity: "",
    i_name: "",
    i_street: "",
    i_ZIP_code: "",
    i_city: "",
    payment: "",
    delivery: "",
    shopper: "",
    comment: "",
  };

  const phoneRegExp = /^(\+48|48)?([1-9]{2})(\d{7})$/;

  const validationSchema = Yup.object().shape({
    activeAddress: Yup.boolean(),
    activeCompany: Yup.boolean(),
    activeInvoice: Yup.boolean(),
    name: Yup.string().required("Required"),
    street: Yup.string().when("activeAddress", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    house: Yup.string().when("activeAddress", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    ZIP_code: Yup.string().when("activeAddress", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    city: Yup.string().when("activeAddress", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    email: Yup.string().email().required("Required"),
    number: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    companyNip: Yup.string().when("activeCompany", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    companyName: Yup.string().when("activeCompany", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    companyStreet: Yup.string().when("activeCompany", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    companyZIPcode: Yup.string().when("activeCompany", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    companyCity: Yup.string().when("activeCompany", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    i_name: Yup.string().when("activeInvoice", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    i_street: Yup.string().when("activeInvoice", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    i_ZIP_code: Yup.string().when("activeInvoice", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    i_city: Yup.string().when("activeInvoice", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    payment: Yup.string().required("Required"),
    delivery: Yup.string().required("Required"),
    shopper: Yup.string().required("Required"),
  });

  /*---------Navigate ---------*/
  let navigate = useNavigate();
  const routeChange = () => {
    handleUserNavigateToSummary();
    navigate("/order/summary");
  };

  /*---------Active Delivery---------*/
  const [activeDelivery, setDeliveryActive] = useState(() => {
    const storedValue = localStorage.getItem("activeDelivery");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return "";
  });

  function handleDelivery(index) {
    setDeliveryActive(index);
  }

  /*---------Active Delivery---------*/
  const [activeShopper, setActiveShopper] = useState(() => {
    const storedValue = localStorage.getItem("activeShopper");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return "";
  });

  function handleShopper(index) {
    setActiveShopper(index);
  }

  /*---------Active Delivery---------*/
  const [activePayment, setActivePayment] = useState(() => {
    const storedValue = localStorage.getItem("activePayment");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return "";
  });

  function handlePayment(index) {
    setActivePayment(index);
  }

  function onSubmit(values, actions) {
    routeChange();
    addOrder(values);

    localStorage.setItem("orderSummary", JSON.stringify(values));
    localStorage.setItem("activeDelivery", activeDelivery);
    localStorage.setItem("activeShopper", activeShopper);
    localStorage.setItem("activePayment", activePayment);
  }

  return (
    <div className={styles.Order}>
      <Formik
        initialValues={initialValuesLocal || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.gridTemplate}>
            <div className={styles.columnLeft}>
              <HeaderInfo title="Delivery and payment" />
              <div className={styles.cardFeature}>
                <Deliver
                  activeDelivery={activeDelivery}
                  handleDelivery={handleDelivery}
                  setFieldValue={setFieldValue}
                />
                <Shopper
                  setFieldValue={setFieldValue}
                  handleShopper={handleShopper}
                  activeShopper={activeShopper}
                />
                {values.activeCompany ? <Company /> : null}
                {values.activeAddress ? <DeliveryAddress /> : <Recipient />}
                {!values.activeCompany ? (
                  <UserInvoice
                    delivery={values.activeAddress}
                    activeInvoice={values.activeInvoice}
                    setFieldValue={setFieldValue}
                  />
                ) : null}

                <Payment
                  activePayment={activePayment}
                  handlePayment={handlePayment}
                />
                <ExtraInfo
                  setFieldValue={setFieldValue}
                  activeComment={values.activeComment}
                  comment={initialValuesLocal.comment}
                />
              </div>
            </div>
            <div className={styles.columnRight}>
              <DisplayProducts />
              <DeliverMethod delivery={values.delivery} />
              <CartSummary path="/order/summary" text="Summary" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Order;
