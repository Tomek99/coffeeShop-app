import React from 'react'
import '../../styles/PopupBasket.scss'
import BasketList from './BasketList/BasketList'

function PopupBasket(props) {
    return (
        <div className={props.isBasketOpen ? "PopupBasket active" : "PopupBasket"}>
            <div className='products'>
                {
                    props.basketItems.map(item => (
                        <BasketList
                            id={item.id}
                            name={item.name}
                            newPrice={item.newPrice}
                            oldPrice={item.oldPrice}
                            imageUrl={item.imageUrl}
                            deleteItem={props.deleteItem}
                        />
                    ))

                }
            </div>
            <button type='button' className='btn-buyProducts'>Checkout now</button>
        </div>
    )
}

export default PopupBasket