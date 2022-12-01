import React from 'react'
import { BsFillEyeFill, BsCartFill, BsFillHeartFill } from 'react-icons/bs';

function LatestProduct(props) {
    return (

        <div key={props.id} className="singleItemSection">
            <div className='iconSection'>
                <button type="button"><BsFillEyeFill /></button>
                <button type="button"><BsCartFill /></button>
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