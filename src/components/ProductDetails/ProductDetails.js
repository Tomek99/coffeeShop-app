import React from "react";
import styles from "./ProductDetalis.module.scss";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import ExtraDetails from "./ExtraDetails/ExtraDetails";
import { useState } from "react";

function ProductDetails(props) {
  const [quantity, setQuantity] = useState(1);
  const productId = useParams();

  const thisProduct = props.productData.find(
    (item) => item.id === productId.id
  );

  const handleItem = () => {
    thisProduct.quantity = quantity;
    props.addItem(thisProduct);
  };

  const increaseAmount = () => {
    setQuantity(quantity + 1);
  };

  const decreaseAmount = () => {
    if (quantity === 1) setQuantity(1);
    else setQuantity(quantity - 1);
  };
  return (
    <div className={styles.ProductDetails}>
      <div className={styles.productDetailsSection}>
        <div className={styles.productDetailsImage}>
          <img src={"/" + thisProduct.imageUrl} alt="Img" />
        </div>
        <div className={styles.productDetailsContent}>
          <h1>{thisProduct.name}</h1>
          <p>
            ${thisProduct.newPrice} ${thisProduct.oldPrice}
          </p>
          <p>country of origin:{thisProduct.origin} </p>
          <p>Weight: 500g</p>
          <div className={styles.productDetailsContentButtons}>
            <div className={styles.productQuantity}>
              <button
                className={styles.btnProductQuantity}
                onClick={decreaseAmount}
              >
                <FiMinus />
              </button>
              <input
                type="text"
                value={quantity > 1 ? quantity : quantity}
                readOnly
              />
              <button
                className={styles.btnProductQuantity}
                onClick={increaseAmount}
              >
                <FiPlus />
              </button>
              <button className={styles.btnAddToBasket} onClick={handleItem}>
                Add to basket
              </button>
            </div>
            <button className={styles.wishList}>
              <AiOutlineHeart /> Add to wish list
            </button>
          </div>
        </div>
      </div>
      <ExtraDetails />
    </div>
  );
}

export default ProductDetails;
