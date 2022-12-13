import React from "react";
import { BsFillEyeFill, BsCartFill, BsFillHeartFill } from "react-icons/bs";
import styles from "./LatestProduct.module.scss";

function LatestProduct(props) {
  const { imageUrl, name, newPrice, oldPrice, idProduct, addItem } = props;

  const handleItem = () => {
    const productDetails = {
      idProduct: idProduct,
      quantity: 1,
      imageUrl: imageUrl,
      name: name,
      newPrice: newPrice,
      oldPrice: oldPrice,
    };
    addItem(productDetails);
  };
  return (
    <div key={idProduct} className={styles.singleItemSection}>
      <div className={styles.iconSection}>
        <button type="button">
          <BsFillEyeFill />
        </button>
        <button type="button" onClick={handleItem}>
          <BsCartFill />
        </button>
        <button type="button">
          <BsFillHeartFill />
        </button>
      </div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>STAR COMPONENT SOONfff</p>
      <p className={styles.price}>
        <span>${newPrice} </span>
        <span className={styles.oldPrice}>${oldPrice}</span>
      </p>
    </div>
  );
}

export default LatestProduct;
