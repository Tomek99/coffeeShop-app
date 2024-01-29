import React from "react";
import styles from "./AdminDeleteProduct.module.scss";
import axios from "axios";

function AdminDeleteProduct({ handleAction, productId }) {
  async function deleteProduct() {
    const data = await axios.delete(
      `${process.env.REACT_APP_API_URI}/api/products`,
      { data: { productId } }
    );
    window.location.reload();
    console.log(data);
  }

  return (
    <div className={styles.AdminDeleteProduct}>
      <button className={styles.btnDeleteProduct} onClick={deleteProduct}>
        Yes, delete
      </button>

      <button
        className={styles.btnCancell}
        onClick={() => handleAction("deleteProduct")}
      >
        Cancell
      </button>
    </div>
  );
}

export default AdminDeleteProduct;
