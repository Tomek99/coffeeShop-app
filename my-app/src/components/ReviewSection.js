import React from 'react'
import '../styles/ReviewSection.scss'
import Header from './Header'
import { stockCustomer } from '../data/Data'
import CustomerReview from './CustomerReview'

function ReviewSection() {
    return (
        <div className='ReviewSection' id='reviewSection'>
            <Header firstWord="customer's" secondWord="review" />
            <div className='customerReview'>
                {stockCustomer.map((item) =>
                    <CustomerReview
                        id={item.id}
                        imageUrl={item.imageUrl}
                        avatarUrl={item.avatarUrl}
                        name={item.name}
                        text={item.text}
                    />
                )}
            </div>
        </div>
    )
}

export default ReviewSection