import React from 'react'
import '../styles/ReviewSection.scss'
import Header from './Header'
import StockCustomer from '../data/StockCustomer.json'
import CustomerReview from './CustomerReview'
import Blog from '../data/blog.json';

function ReviewSection() {
    console.log(Blog.map((item) => item.imageUrl));
    return (
        <div className='ReviewSection' id='reviewSection'>
            <Header firstWord="customer's" secondWord="review" />
            <div className='customerReview'>
                {StockCustomer.map((item) =>
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