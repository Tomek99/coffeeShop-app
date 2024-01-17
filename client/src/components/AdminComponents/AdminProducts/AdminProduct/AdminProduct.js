import React, { useState } from "react";
import styles from "./AdminProduct.module.scss";
import AdminActionBtns from "./AdminActionBtns/AdminActionBtns";
import AdminProductDetails from "./AdminProductDetails/AdminProductDetails";
import AdminEditProductDetails from "./AdminEditProductDetails/AdminEditProductDetails";
import AdminDeleteProduct from "./AdminDeleteProduct/AdminDeleteProduct";

function AdminProduct({ product }) {
  const [action, setAction] = useState(null);

  function handleAction(currentAction) {
    if (currentAction === action) {
      setAction(null);
    } else {
      setAction(currentAction);
    }
  }
  return (
    <section className={styles.AdminProduct}>
      <div className={styles.singleProduct}>
        <img
          src={product.imageUrl}
          className={styles.singleProductImg}
          alt={product.name}
        />
        <div className={styles.productContent}>
          <span>
            <b>ID:{product._id}</b>
          </span>
          <span>{product.name}</span>
          <span>
            ${product.price}{" "}
            {product.oldPrice === null ? null : `- $${product.oldPrice}`}
          </span>
        </div>
        <AdminActionBtns handleAction={handleAction} />
      </div>
      {(() => {
        switch (action) {
          case "viewDetails":
            return <AdminProductDetails productDetails={product} />;
          case "editDetails":
            return <AdminEditProductDetails productDetails={product} />;
          case "deleteProduct":
            return (
              <AdminDeleteProduct
                handleAction={handleAction}
                productId={product._id}
              />
            );
          default:
            return null;
        }
      })()}
    </section>
  );
}

export default AdminProduct;
