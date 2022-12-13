import React from "react";
import ButtonMenu from "../Buttons/ButtonMenu";
import styles from "./MenuProduct.module.scss";

function MenuProduct(props) {
  const { idProduct, imageUrl, name, newPrice, oldPrice, addItem } = props;

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
    <div key={idProduct} className={styles.singleProduct}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>
        <span> ${newPrice}</span>
        <span> ${oldPrice}</span>
      </p>
      <ButtonMenu handleItem={handleItem} text="add to cart" />
    </div>
  );
}

export default MenuProduct;
