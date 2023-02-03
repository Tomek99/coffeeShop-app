import React, { useContext } from "react";
import { Context } from "../../Contexts/Context";
import { BsFillEyeFill, BsCartFill, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./LatestProduct.module.scss";
import PropTypes from "prop-types";
import RatingsStars from "../RatingStars/RatingStars";

function LatestProduct({ item, isHome }) {
  const { imageUrl, name, newPrice, oldPrice, _id, quantity, rate, intensity } =
    item;

  const { addItem } = useContext(Context);
  console.log(oldPrice);
  const productDetails = {
    id: _id,
    quantity: quantity,
    imageUrl: imageUrl,
    name: name,
    newPrice: newPrice,
    oldPrice: oldPrice,
  };

  return (
    <div key={_id} className={styles.singleItemSection}>
      <div className={styles.iconsSection}>
        <Link to={isHome ? `products/${_id}` : _id}>
          <BsFillEyeFill />
        </Link>

        <button onClick={() => addItem(productDetails)}>
          <BsCartFill />
        </button>
        <button>
          <BsFillHeartFill />
        </button>
      </div>
      <div className={styles.middleOfproduct}>
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p>
          Intensity <span>{intensity}</span>
        </p>
        <div>
          <RatingsStars rate={rate} size="large" />
        </div>
      </div>
      <p className={styles.price}>
        <span>${newPrice} </span>
        <span className={styles.oldPrice}>
          {oldPrice === null ? null : `$${oldPrice}`}
        </span>
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
