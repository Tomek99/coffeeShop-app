import React, { useContext } from "react";
import { Context } from "../../Contexts/Context";
import Button from "../Buttons/Button";
import styles from "./MenuProduct.module.scss";
import PropTypes from "prop-types";

function MenuProduct(props) {
  const { id, imageUrl, name, newPrice, oldPrice, quantity } = props;
  const { addItem, deleteItem } = useContext(Context);

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

MenuProduct.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  newPrice: PropTypes.number,
  oldPrice: PropTypes.number,
  addItem: PropTypes.func,
  quantity: PropTypes.number,
};

export default MenuProduct;
