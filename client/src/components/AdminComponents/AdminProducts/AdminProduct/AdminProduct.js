import React, { useState } from "react";
import styles from "./AdminProduct.module.scss";
import AdminProductDetails from "./AdminProductDetails/AdminProductDetails";
import AdminEditProductDetails from "./AdminEditProductDetails/AdminEditProductDetails";
import AdminDeleteProduct from "./AdminDeleteProduct/AdminDeleteProduct";
import AdminIconBtn from "../../AdminBtns/AdminIconBtn";

function AdminProduct({ product }) {
  const [action, setAction] = useState(null);

  function handleBtn(currentAction) {
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

        <div className={styles.adminActionBtns}>
          <AdminIconBtn
            handleBtn={handleBtn}
            btnType="BsEye"
            btnAction="viewDetails"
          />

          <AdminIconBtn
            handleBtn={handleBtn}
            btnType="CiEdit"
            btnAction="editDetails"
          />
          <AdminIconBtn
            handleBtn={handleBtn}
            btnType="ImBin"
            btnAction="deleteProduct"
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
