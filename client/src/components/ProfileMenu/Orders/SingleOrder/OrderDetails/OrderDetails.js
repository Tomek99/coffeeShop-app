import React from "react";
import BtnReturn from "../../../../Buttons/BtnReturn/BtnReturn";
import styles from "./OrderDetails.module.scss";
import LoaderSpinner from "../../../../LoaderSpinner/LoaderSpinner";
import { useLocation, useNavigate } from "react-router-dom";
import usePostData from "../../../../../hooks/usePostData";
import OrderDetailsData from "./OrderDetailsData/OrderDetailsData";

function OrderDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const productId = location.pathname.slice(37);

  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/orders/getSelectedPurchaseDetails`;
  const { data, isLoaded } = usePostData(apiEndpoint, productId);

  const isOrderExist = Object.keys(data).length !== 0 ? true : false;

  return !isLoaded ? (
    isOrderExist ? (
      <OrderDetailsData data={data} />
    ) : (
      <div className={styles.buttonShowOrders}>
        <BtnReturn text="Show all orders" returnPath="/purchased-products" />
        <span className={styles.orderStatus}>This order doesn't exist</span>
      </div>
    )
  ) : (
    <LoaderSpinner />
  );
}

export default OrderDetails;
