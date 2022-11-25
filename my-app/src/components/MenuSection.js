import React from 'react'
import '../styles/MenuSection.scss'
import { stockData } from "../data/Data"
import Header from './Header'



function MenuSection() {
    return (
        <div className='MenuSection' id='menuSection'>
            <Header firstWord="our" secondWord="menu" />
            <div className='itemsProduct'>
                {
                    stockData.map((item) => {
                        return (
                            <div key={item.id}>
                                <img src={item.imageName} alt={item.name} />
                                <p>{item.name}</p>
                                <p><span> ${item.newPrice}</span><span> ${item.oldPrice}</span></p>
                                <button type='button' className='btn1'>Add To Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MenuSection