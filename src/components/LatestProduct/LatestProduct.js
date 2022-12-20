import React from "react";
import { BsFillEyeFill, BsCartFill, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./LatestProduct.module.scss";

function LatestProduct(props) {
  const { imageUrl, name, newPrice, oldPrice, idProduct, addItem, isHome } =
    props;

  const productDetails = {
    idProduct: idProduct,
    quantity: 1,
    imageUrl: imageUrl,
    name: name,
    newPrice: newPrice,
    oldPrice: oldPrice,
  };
  const handleItem = () => {
    addItem(productDetails);
  };

  return (
    <div key={idProduct} className={styles.singleItemSection}>
      <div className={styles.iconSection}>
        <Link to={isHome ? `products/${idProduct}` : idProduct}>
          <BsFillEyeFill />
        </Link>

        <button onClick={handleItem}>
          <BsCartFill />
        </button>
        <button>
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
