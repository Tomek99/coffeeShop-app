import React, { useContext, useEffect } from "react";
import styles from "./ProductDetalis.module.scss";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import ExtraDetails from "./ExtraDetails/ExtraDetails";
import { useState } from "react";
import { Context } from "../../Contexts/Context";
import PropTypes from "prop-types";
import BtnAddWishList from "../Buttons/BtnAddWishList/BtnAddWishList";
import BtnAddCart from "../Buttons/BtnAddCart/BtnAddCart";
import BtnPlusMinus from "../Buttons/BtnPlusMinus/BtnPlusMinus";
import axios from "axios";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import useFetchData from "../../hooks/useFetchData";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const productId = useParams();

  const { addItem, addWishItem } = useContext(Context);

  // const [loading, setLoading] = useState(true);

  const endPoint = `${process.env.REACT_APP_API_URI}/api/products/product-details/${productId.id}`;
  const { isLoaded, data } = useFetchData(endPoint);
  // Protected route if the one is not exist
  const navigate = useNavigate();
  if (data === false) {
    navigate("/products");
  }

  const onClickAddToCart = () => {
    data.quantity = quantity;
    addItem(data);
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
      {isLoaded ? (
        <LoaderSpinner loading={isLoaded} />
      ) : (
        <>
          <div className={styles.productDetailsSection}>
            <div className={styles.productDetailsImage}>
              <img src={data.imageUrl} alt="Img" />
            </div>
            <div className={styles.productDetailsContent}>
              <h1>{data.name}</h1>
              <p className={styles.productPriceText}>
                ${data.price}
                &nbsp;
                <span className={styles.oldProductPrice}>
                  {data.oldPrice ? ` $${data.oldPrice}` : null}
                </span>
              </p>
              <p>Origin: {data.origin} </p>
              <p>Weight: {data.weight}</p>
              <div className={styles.productDetailsContentButtons}>
                <div className={styles.productQuantity}>
                  <div style={{ display: "flex" }}>
                    <BtnPlusMinus handleBtn={decreaseAmount}>
                      <FiMinus />
                    </BtnPlusMinus>
                    <input
                      type="text"
                      value={quantity > 1 ? quantity : quantity}
                      readOnly
                    />
                    <BtnPlusMinus handleBtn={increaseAmount}>
                      <FiPlus />
                    </BtnPlusMinus>
                  </div>
                  <BtnAddCart onClickAddToCart={onClickAddToCart} />
                </div>
                <BtnAddWishList handleBtn={addWishItem} id={productId.id} />
              </div>
            </div>
          </div>
          <ExtraDetails productId={productId.id} />
        </>
      )}
    </div>
  );
}

ProductDetails.propTypes = {
  addItem: PropTypes.func,
  productData: PropTypes.array,
};
export default ProductDetails;
