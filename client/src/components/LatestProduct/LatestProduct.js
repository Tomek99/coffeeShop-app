import React, { useContext } from "react";
import { Context } from "../../Contexts/Context";
import { BsFillEyeFill, BsCartFill, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./LatestProduct.module.scss";
import PropTypes from "prop-types";
import RatingsStars from "../RatingStars/RatingStars";

function LatestProduct({ item, isHome }) {
  const { imageUrl, name, newPrice, oldPrice, id, quantity, rate } = item;

  const { addItem } = useContext(Context);

  const productDetails = {
    id: id,
    quantity: quantity,
    imageUrl: imageUrl,
    name: name,
    newPrice: newPrice,
    oldPrice: oldPrice,
  };

  return (
    <div key={id} className={styles.singleItemSection}>
      <div className={styles.iconSection}>
        <Link to={isHome ? `products/${id.toString()}` : id.toString()}>
          <BsFillEyeFill />
        </Link>

        <button onClick={() => addItem(productDetails)}>
          <BsCartFill />
        </button>
        <button>
          <BsFillHeartFill />
        </button>
      </div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <div>
        <RatingsStars rate={rate} size="large" />
      </div>
      <p className={styles.price}>
        <span>${newPrice} </span>
        <span className={styles.oldPrice}>${oldPrice}</span>
      </p>
    </div>
  );
}

LatestProduct.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  newPrice: PropTypes.number,
  oldPrice: PropTypes.number,
  addItem: PropTypes.func,
  isHome: PropTypes.bool,
  quantity: PropTypes.number,
  rate: PropTypes.number,
};
export default LatestProduct;
