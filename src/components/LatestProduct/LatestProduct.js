import React, { useContext } from "react";
import { Context } from "../../Contexts/Context";
import { BsFillEyeFill, BsCartFill, BsFillHeartFill } from "react-icons/bs";

import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import styles from "./LatestProduct.module.scss";
import PropTypes from "prop-types";

function LatestProduct(props) {
  const { imageUrl, name, newPrice, oldPrice, id, isHome, quantity, rate } =
    props;

  const { addItem, deleteItem } = useContext(Context);

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
        <Link to={isHome ? `products/${id}` : id}>
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
        <Rating
          name="read-only"
          value={rate}
          size="large"
          readOnly
          sx={{
            ".css-1c99szj-MuiRating-icon": {
              color: "#ffb74d",
            },
          }}
        />
      </div>
      <p className={styles.price}>
        <span>${newPrice} </span>
        <span className={styles.oldPrice}>${oldPrice}</span>
      </p>
    </div>
  );
}

LatestProduct.propTypes = {
  id: PropTypes.string,
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
