import React from 'react'
import { ImBin } from 'react-icons/im'

function BasketList(props) {

    return (
        <div className='singleProduct' key={props.id}>
            <img src={props.imageUrl} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <p>
                    <span className='s-p-newPrice'>${props.newPrice} </span>
                    <span className='s-p-oldPrice'> ${props.oldPrice}</span></p>
            </div>
            <button type='button' onClick={() => props.deleteItem(props.id, props.newPrice, props.oldPrice)}><ImBin size={15} color="var(--main-color)" /></button>
        </div>
    )
}

export default BasketList