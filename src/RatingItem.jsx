import React from 'react';
import {AiTwotoneStar} from 'react-icons/ai'

const RatingItem = ({rating}) => {

    const ratingProduct = [1, 2, 3, 4, 5];

        return (
            <div className="products__stars">
                {
                   ratingProduct.map((item) => (
                       item <= rating ? <span className="products__star"><AiTwotoneStar/></span>:
                           <span className="products__star2"><AiTwotoneStar/></span>
                   ))
                }
            </div>
        );
};

export default RatingItem;

