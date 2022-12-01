import React from 'react'
import '../../styles/PopupBasket.scss'

function PopupBasket(pros) {
    return (
        <div className={pros.isBasketOpen ? "PopupBasket active" : "PopupBasket"}>
            <div className='products'>
                <div className='singleProduct'>
                    <img src="./images/cart-item-1.png" alt="" />
                    <div>
                        <h2>Cart item 01</h2>
                        <p>$15. 99/-</p>
                    </div>
                    <button type='button'>X</button>
                </div>
                <div className='singleProduct'>
                    <img src="./images/cart-item-2.png" alt="" />
                    <div>
                        <h2>Cart item 02</h2>
                        <p>$15. 99/-</p>
                    </div>
                    <button type='button'>X</button>
                </div>
                <div className='singleProduct'>
                    <img src="./images/cart-item-3.png" alt="" />
                    <div>
                        <h2>Cart item 03</h2>
                        <p>$15. 99/-</p>
                    </div>
                    <button type='button'>X</button>
                </div >
                <div className='singleProduct'>
                    <img src="./images/cart-item-4.png" alt="" />
                    <div>
                        <h2>Cart item 04</h2>
                        <p>$15. 99/-</p>
                    </div>
                    <button type='button'>X</button>
                </div>
                <div className='singleProduct'>
                    <img src="./images/cart-item-4.png" alt="" />
                    <div>
                        <h2>Cart item 04</h2>
                        <p>$15. 99/-</p>
                    </div>
                    <button type='button'>X</button>
                </div>
            </div>
            <button type='button' className='btn-buyProducts'>Checkout now</button>
        </div>
    )
}

export default PopupBasket