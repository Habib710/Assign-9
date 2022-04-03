import React from 'react';
import './home-review.css';

const HomeReview = (props) => {
    const{name,comment}=props.data;
    return (
        <div className='home-review-css'>
            <h4>name:{name}</h4>
            
        </div>
    );
};

export default HomeReview;