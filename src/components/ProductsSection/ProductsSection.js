import React from "react";
import "../../styles/ProductsSection.scss";
import LatestProduct from "../LatestProduct/LatestProduct";
import Header from "../Header/Header";
import Product from "../../data/product.json";

function ProductsSection(props) {
    return (
        <div className="ProductsSection" id="productsSection">
            <Header firstWord="Latest" secondWord="Products" />
            <div className="itemSection">
                {Product.map((item) => (
                    <LatestProduct
                        idProduct={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        newPrice={item.newPrice}
                        oldPrice={item.oldPrice}
                        addItem={props.addItem}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsSection;
