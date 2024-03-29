import React, { useState } from "react";
import styles from "./AdminProduct.module.scss";
import AdminProductDetails from "./AdminProductDetails/AdminProductDetails";
import AdminEditProductDetails from "./AdminEditProductDetails/AdminEditProductDetails";
import AdminDeleteProduct from "./AdminDeleteProduct/AdminDeleteProduct";
import AdminIconBtn from "../../AdminBtns/AdminIconBtn/AdminIconBtn";

function AdminProduct({ product }) {
  const [action, setAction] = useState(null);

  function handleBtn(currentAction) {
    setAction(currentAction === action ? null : currentAction);
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

        <div className={styles.adminActionBtns}>
          <AdminIconBtn
            handleBtn={handleBtn}
            btnType="BsEye"
            action="viewDetails"
          />

          <AdminIconBtn
            handleBtn={handleBtn}
            btnType="CiEdit"
            action="editDetails"
          />
          <AdminIconBtn
            handleBtn={handleBtn}
            btnType="ImBin"
            action="deleteProduct"
          />
        </div>
      </div>
      {(() => {
        switch (action) {
          case "viewDetails":
            return <AdminProductDetails productDetails={product} />;
          case "editDetails":
            return (
              <AdminEditProductDetails
                productDetails={product}
                handleAction={handleBtn}
              />
            );
          case "deleteProduct":
            return (
              <AdminDeleteProduct
                handleAction={handleBtn}
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
