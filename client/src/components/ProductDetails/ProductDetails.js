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

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const productId = useParams();
  const navigate = useNavigate();

  const { addItem, addWishItem } = useContext(Context);
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  // Protected route if the route is not exist

  console.log("hi");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/product-details/${productId.id}`)
      .then((response) => {
        const productDetails = response.data;
        if (productDetails._id) {
          setLoading(false);
          setProductData(response.data);
        } else {
          navigate("/products");
        }
      });
  }, [productId, navigate]);

  const onClickAddToCart = () => {
    productData.quantity = quantity;
    addItem(productData);
  };

  const increaseAmount = () => {
    setQuantity(quantity + 1);
  };

  const decreaseAmount = () => {
    if (quantity === 1) setQuantity(1);
    else setQuantity(quantity - 1);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className={styles.ProductDetails}>
      {loading ? (
        <LoaderSpinner loading={loading} />
      ) : (
        <>
          <div className={styles.productDetailsSection}>
            <div className={styles.productDetailsImage}>
              <img src={productData.imageUrl} alt="Img" />
            </div>
            <div className={styles.productDetailsContent}>
              <h1>{productData.name}</h1>
              <p>
                ${productData.price}
                {productData.oldPrice ? ` $${productData.oldPrice}` : null}
              </p>
              <p>country of origin:{productData.origin} </p>
              <p>Weight: 500g</p>
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
          <ExtraDetails />
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
