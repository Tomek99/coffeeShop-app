import React, { useState } from "react";
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

function Order() {
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

  /*---------SubmitHanlder state---------*/
  // const initialValues = {
  //   NIP: "",
  //   name: "",
  //   street: "",
  //   ZIP_code: "",
  //   city: "",
  // };

  // const validationSchema = Yup.object().shape({
  //   NIP: Yup.string().required("Required"),
  //   name: Yup.string().required("Required"),
  //   street: Yup.string().required("Required"),
  //   ZIP_code: Yup.string().required("Required"),
  //   city: Yup.string().required("Required"),
  // });

  const initialValues = {
    name: "",
    street: "",
    house: "",
    ZIP_code: "",
    city: "",
    number: "",
    email: "",
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    street: Yup.string().required("Required"),
    house: Yup.string().required("Required"),
    ZIP_code: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    number: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    email: Yup.string().email().required("Required"),
  });
  // const initialValues = {
  //   name: "",
  //   street: "",
  //   ZIP_code: "",
  //   city: "",
  // };

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required("Required"),
  //   street: Yup.string().required("Required"),
  //   ZIP_code: Yup.string().required("Required"),
  //   city: Yup.string().required("Required"),
  // });

  function onSubmit(values, actions) {
    alert("HELLLO");
  }

  return (
    <div className={styles.Order}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={styles.gridTemplate}>
          <div className={styles.columnLeft}>
            <HeaderInfo title="Deliver and payment" />
            <div className={styles.cardFeature}>
              <Deliver handleDeliver={handleDeliver} deliver={deliver} />
              <Shopper handleShopper={handleShopper} shopper={shopper} />
              {shopper === "1" ? <Company /> : null}
              {deliver === "1" ? <Recipient /> : <DeliveryAddress />}
              {shopper === "0" ? <UserInvoice /> : null}
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
      </Formik>
    </div>
  );
}

export default Order;
