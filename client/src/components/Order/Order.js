import React, { useEffect, useState } from "react";
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

function Order({ handleUserNavigateToSummary }) {
  /*---------Deliver state---------*/
  const [deliver, setDeliver] = useState("0");

  function handleDeliver(e) {
    setDeliver(e.target.value);
  }

  /*---------Shopper state---------*/
  const [shopper, setShopper] = useState("0");

  function handleShopper(e) {
    setShopper(e.target.value);
  }

  /*---------Payment state---------*/
  const [payment, setPayment] = useState("0");

  function handlePayment(e) {
    setPayment(e.target.value);
  }

  /*---------Initial values---------*/

  const initialValues = {
    activeAddress: true,
    activeCompany: false,
    activeInvoice: false,
    name: "",
    street: "",
    house: "",
    ZIP_code: "",
    city: "",
    number: "",
    email: "",
    companyNip: "",
    comapnyName: "",
    companyStreet: "",
    comapnyZIPcode: "",
    companyCity: "",
    i_name: "",
    i_street: "",
    i_ZIP_code: "",
    i_city: "",
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
    comapnyName: Yup.string().when("activeCompany", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    companyStreet: Yup.string().when("activeCompany", {
      is: true,
      then: Yup.string().required("Required"),
    }),
    comapnyZIPcode: Yup.string().when("activeCompany", {
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
  });

  let navigate = useNavigate();

  const routeChange = () => {
    handleUserNavigateToSummary();
    navigate("/order/summary");
  };

  function onSubmit(values, actions) {
    routeChange();
  }

  return (
    <div className={styles.Order}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.gridTemplate}>
            <div className={styles.columnLeft}>
              <HeaderInfo title="Deliver and payment" />
              <div className={styles.cardFeature}>
                <Deliver
                  handleDeliver={handleDeliver}
                  deliver={deliver}
                  setFieldValue={setFieldValue}
                  values={values}
                />
                <Shopper
                  handleShopper={handleShopper}
                  shopper={shopper}
                  setFieldValue={setFieldValue}
                />
                {shopper === "1" ? <Company /> : null}
                {deliver === "1" ? <Recipient /> : <DeliveryAddress />}
                {shopper === "0" ? (
                  <UserInvoice
                    deliver={deliver}
                    setFieldValue={setFieldValue}
                  />
                ) : null}
                <Payment handlePayment={handlePayment} payment={payment} />
                <ExtraInfo />
              </div>
            </div>
            <div className={styles.columnRight}>
              <DisplayProducts />
              <DeliverMethod deliver={deliver} />
              <CartSummary path="/order/summary" text="Summary" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Order;
