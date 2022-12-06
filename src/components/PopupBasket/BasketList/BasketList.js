import React from 'react'

function BasketList(props) {
    return (
        <div className='singleProduct' key={props.id}>
            <img src={props.imageUrl} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <p><span>${props.newPrice}</span><span>{props.oldPrice}</span></p>
            </div>
            <button type='button' onClick={() => props.deleteItem(props.id)}>X</button>
        </div>
    )
}

export default BasketList