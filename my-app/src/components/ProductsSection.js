import React from 'react'
import '../styles/ProductsSection.scss'
import LatestProduct from './LatestProduct';
import Header from './Header';
import Product from '../data/product.json';

function ProductsSection() {
    return (
        <div className='ProductsSection' id='productsSection'>
            <Header firstWord="Latest" secondWord="Products" />
            <div className='itemSection'>
                {Product.map((item) =>
                    <LatestProduct
                        id={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        newPrice={item.newPrice}
                        oldPrice={item.oldPrice}
                    />
                )}
            </div>
        </div>
    )
}

export default ProductsSection