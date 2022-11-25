import React from 'react'
import '../styles/MenuSection.scss'
import { stockData } from "../data/Data"
import Header from './Header'
import MenuProduct from './MenuProduct'



function MenuSection() {
    return (
        <div className='MenuSection' id='menuSection'>
            <Header firstWord="our" secondWord="menu" />
            <div className='itemsProduct'>
                {
                    stockData.map((item) => {
                        return (
                            <MenuProduct
                                id={item.id}
                                imageUrl={item.imageUrl}
                                name={item.name}
                                newPrice={item.newPrice}
                                oldPrice={item.oldPrice}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MenuSection