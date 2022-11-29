import React from 'react'

function MenuProduct(props) {
    return (
        <div key={props.id} className="singleProduct">
            <img src={props.imageUrl} alt={props.name} />
            <p>{props.name}</p>
            <p><span> ${props.newPrice}</span><span> ${props.oldPrice}</span></p>
            <button type='button' className='btn1'>Add To Cart</button>
        </div>
    )
}

export default MenuProduct