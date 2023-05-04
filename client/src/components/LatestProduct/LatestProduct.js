import React, { useContext } from "react";
import { Context } from "../../Contexts/Context";
import { BsFillEyeFill, BsCartFill, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./LatestProduct.module.scss";
import PropTypes from "prop-types";
import RatingsStars from "../RatingStars/RatingStars";

function LatestProduct({ item, isHome }) {
  const { imageUrl, name, price, oldPrice, _id, rate, intensity } = item;
  const { addItem, products, addWishItem, wishList } = useContext(Context);

  let findProduct = products.find((product) => product._id === _id);
  findProduct.oldPrice = findProduct.oldPrice === null ? 0 : oldPrice;
  findProduct.quantity = 1;

  let foundWishProduct = wishList.find((value) => {
    if (value === _id) return true;
    return false;
  });

  return (
    <div key={_id} className={styles.LatestProduct}>
      <div className={styles.iconsSection}>
        <Link to={isHome ? `products/${_id}` : _id}>
          <BsFillEyeFill />
        </Link>

        <button onClick={() => addItem(findProduct)}>
          <BsCartFill />
        </button>
        <button
          className={foundWishProduct ? styles.activeBtn : null}
          onClick={() => addWishItem(_id)}
        >
          <BsFillHeartFill />
        </button>
      </div>
      <div className={styles.contentWrapper}>
        <img src={imageUrl} alt={name} />
        <h3 className={styles.nameProduct}>{name}</h3>
        <p className={styles.intensity}>
          Intensity <span>{intensity}</span>
        </p>
        <div>
          <RatingsStars rate={rate} size="large" />
        </div>
      </div>
      <p className={styles.price}>
        <span>${price} </span>
        <span className={styles.oldPrice}>
          {Boolean(oldPrice) ? `$${oldPrice}` : null}
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
