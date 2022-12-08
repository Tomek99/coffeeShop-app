import React from 'react'
import nextId from "react-id-generator";
function MenuProduct(props) {
    const handleItem = () => {
        const productDetails = {
            id: nextId(),
            imageUrl: props.imageUrl,
            name: props.name,
            newPrice: props.newPrice,
            oldPrice: props.oldPrice
        }
        props.addItem(productDetails)
    }
    return (
        <div key={props.id} className="singleProduct">
            <img src={props.imageUrl} alt={props.name} />
            <p>{props.name}</p>
            <p><span> ${props.newPrice}</span><span> ${props.oldPrice}</span></p>
            <button onClick={handleItem} type='button' className='btn1'>Add To Cart</button>
        </div>
    )
}

export default MenuProduct