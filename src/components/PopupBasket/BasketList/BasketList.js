import React from 'react'
import { ImBin } from 'react-icons/im'

function BasketList(props) {
    const { id, name, imageUrl, newPrice, oldPrice, quantity, deleteItem } = props

    return (
        <div className='singleProduct' key={id}>
            <img src={imageUrl} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>
                    <span className='s-p-newPrice'>${newPrice} </span>
                    <span className='s-p-oldPrice'> ${oldPrice}</span></p>
            </div>
            <span>{quantity}</span>
            <button type='button' onClick={() => deleteItem(id, newPrice, props.oldPrice)}><ImBin size={15} color="var(--main-color)" /></button>
        </div>
    )
}

export default BasketList