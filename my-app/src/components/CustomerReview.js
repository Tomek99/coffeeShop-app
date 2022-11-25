import React from 'react'

function CustomerReview(props) {
    return (
        <div key={props.id} className="singleCustomer">
            <img src={props.imageUrl} alt="quote" />
            <p>{props.text}</p>
            <img src={props.avatarUrl} alt="" />
            <p>{props.name}</p>
            <p>STAR COMPONENT SOON</p>
        </div>
    )
}

export default CustomerReview