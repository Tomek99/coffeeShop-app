import React from "react";

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
        <div key={idProduct} className="singleProduct">
            <img src={imageUrl} alt={name} />
            <p>{name}</p>
            <p>
                <span> ${newPrice}</span>
                <span> ${oldPrice}</span>
            </p>
            <button onClick={handleItem} type="button" className="btn1">
                Add To Cart
            </button>
        </div>
    );
}

export default MenuProduct;
