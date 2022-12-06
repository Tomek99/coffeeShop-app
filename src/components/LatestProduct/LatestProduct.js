import React from 'react'
import { BsFillEyeFill, BsCartFill, BsFillHeartFill } from 'react-icons/bs';
import nextId from "react-id-generator";

function LatestProduct(props) {

    const handleItem = () => {
        const productDetails = {
            id: nextId(),
            imageUrl: props.imageUrl,
            name: props.name,
            newPrice: props.name,
            oldPrice: props.oldPrice
        }
        props.addItem(productDetails)
    }
    return (
        <div key={props.id} className="singleItemSection">
            <div className='iconSection'>
                <button type="button"><BsFillEyeFill /></button>
                <button type="button" onClick={handleItem}><BsCartFill /></button>
                <button type="button"><BsFillHeartFill /></button>
            </div>
            <img src={props.imageUrl} alt={props.name} />
            <h3>{props.name}</h3>
            <p>STAR COMPONENT SOONfff</p>
            <p className="price"><span>${props.newPrice} </span><span className='oldPrice'>${props.oldPrice}</span></p>
        </div>
    )
}

export default LatestProduct