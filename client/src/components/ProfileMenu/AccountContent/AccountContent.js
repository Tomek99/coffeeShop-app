import React, { useContext, useEffect, useState } from "react";
import styles from "./AccountContent.module.scss";
import Support from "../Support/Support";
import WishProducts from "../WishList/WishProducts/WishProducts";
import SingleOrder from "../Orders/SingleOrder/SingleOrder";
import axios from "axios";
import { Context } from "../../../Contexts/Context";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";

function AccountContent() {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const storedValue = await axios.get(
        `${process.env.REACT_APP_API_URI}/api/orders/user-orders/${user.orders}`
      );
      if (storedValue.data.orders) {
        setOrderData(storedValue.data.orders);
        setLoading(false);
      } else setOrderData([]);
    }
    fetchData();
  }, [user.orders]);

  return (
    <div className={styles.accountContent}>
      <div className={styles.divCol}>
        <div className={styles.divRow}>
          <h2>Orders</h2>
          <button>Check all</button>
        </div>
      </div>
      <div className={styles.divCol}>
        <div className={styles.divRow}>
          <h2>Shopping lists</h2>
          <button>Check all</button>
        </div>
        {/* <WishProducts /> */}
      </div>
      <Support />
    </div>
  );
}

export default AccountContent;
