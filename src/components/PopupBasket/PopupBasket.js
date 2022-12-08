import React from 'react'
import '../../styles/PopupBasket.scss'
import BasketList from './BasketList/BasketList'

function PopupBasket(props) {
    const { isBasketOpen, basketPrice } = props
    console.log(`new ${basketPrice.currentPrice}, old ${basketPrice.save}`);
    return (
        <div className={isBasketOpen ? "PopupBasket active" : "PopupBasket"}>
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
            <div className='summary-price'>
                <div className='s-p-save'><span>Save: </span><span className='.price'>{basketPrice.save}$</span></div>
                <div className='s-p-total-cost'><span>Total cost: $</span><span className='.price'>{basketPrice.currentPrice}$</span></div>
            </div>
        </div>
    )
}

export default PopupBasket