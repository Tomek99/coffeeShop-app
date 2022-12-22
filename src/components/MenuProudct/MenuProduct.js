import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import styles from "./MenuProduct.module.scss";

function MenuProduct(props) {
  const { id, imageUrl, name, newPrice, oldPrice, addItem, quantity } = props;

  const handleItem = () => {
    const productDetails = {
      id: id,
      quantity: quantity,
      imageUrl: imageUrl,
      name: name,
      newPrice: newPrice,
      oldPrice: oldPrice,
    };
    addItem(productDetails);
  };
  return (
    <div key={id} className={styles.singleProduct}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>
        <span> ${newPrice}</span>
        <span> ${oldPrice}</span>
      </p>
      <Button handleItem={handleItem} text="add to cart" isTrue={true} />
    </div>
  );
}

export default MenuProduct;
