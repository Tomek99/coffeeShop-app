import React from 'react'
import '../styles/ProductsSection.scss'
import LatestProduct from './LatestProduct';
import { stockItem } from '../data/Data.js';
import Header from './Header';


function ProductsSection() {
    return (
        <div className='ProductsSection' id='productsSection'>
            <Header firstWord="Latest" secondWord="Products" />
            <div className='itemSection'>
                {stockItem.map((item) =>
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