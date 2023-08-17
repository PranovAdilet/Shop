import React, {useEffect, useState} from 'react';
import stars from '../../images/filterProduct/stars.svg'
import stars4 from '../../images/reviews/rating (1).svg'
import stars5 from '../../images/reviews/rating (2).svg'
import stars3 from '../../images/reviews/rating (4).svg'
import stars1 from '../../images/reviews/rating (3).svg'
import stars0 from '../../images/reviews/rating (5).svg'
import avatar from '../../images/reviews/avatart.png'
import axios from "axios";
import {AiTwotoneStar} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {openPopup} from "../../redux/popup";
import Popup from "../../components/Popup/Popup";
import {getProduct} from "../../redux/product";
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'

const Reviews = ({product}) => {

    const dispatch = useDispatch()

    const [comment, setComment] = useState("")
    const [star, setStar] = useState(0)

    const {user} = useSelector(s => s.reducer.user)
    const ratingProduct = [1, 2, 3, 4, 5];
    const params = useParams()


    const postComment = () => {
        axios.patch(`http://localhost:8080/products/${product.id}`,
            {
                    comments: [...product.comments, {
                        id: uuidv4(),
                        name: user.name,
                        text: comment,
                        date: (new Date()).toISOString().slice(0,10),
                        rating: star
                     }]
            }).then(() => {
                setComment("")
                setStar(0)
            Swal.fire(
                'Вы успешно добавили комментарий!',
                '',
                'success'
            )
                dispatch(getProduct(product.id))
        })
    }

    return (
        <div className="reviews">
            <div className="container">
                <div className="reviews__content">
                    <h2 className="reviews__title">Отзывы</h2>
                    <div className="reviews__blocks">
                            <div className="reviews__block-left">
                               <div className="reviews__block-left-top">
                                   <img className="reviews__block-left-img" src={stars4} alt=""/>
                                   <p className="reviews__block-left-text">4 из 5</p>
                               </div>
                                <div className="reviews__block-left-bot">
                                    <div className="reviews__block-left-bot-box">
                                        <p className="reviews__block-left-rating">5</p>
                                        <img className="reviews__block-left-img" src={stars5} alt=""/>
                                        <p className="reviews__block-left-rating">1</p>
                                    </div>
                                    <div className="reviews__block-left-bot-box">
                                        <p className="reviews__block-left-rating">4</p>
                                        <img className="reviews__block-left-img" src={stars4} alt=""/>
                                        <p className="reviews__block-left-rating">1</p>
                                    </div>
                                    <div className="reviews__block-left-bot-box">
                                        <p className="reviews__block-left-rating">3</p>
                                        <img className="reviews__block-left-img" src={stars3} alt=""/>
                                        <p className="reviews__block-left-rating">0</p>
                                    </div>
                                    <div className="reviews__block-left-bot-box">
                                        <p className="reviews__block-left-rating">2</p>
                                        <img className="reviews__block-left-img" src={stars} alt=""/>
                                        <p className="reviews__block-left-rating">0</p>
                                    </div>
                                    <div className="reviews__block-left-bot-box">
                                        <p className="reviews__block-left-rating">1</p>
                                        <img className="reviews__block-left-img" src={stars1} alt=""/>
                                        <p className="reviews__block-left-rating">1</p>
                                    </div>
                                </div>
                        </div>
                        <div className="reviews__block-right">
                            {
                                product.comments && product.comments.map((item) => (
                                    <div className="reviews__comment">
                                        <div className="reviews__comment-block-top">
                                            <img className="reviews__comment-avatar" src={avatar} alt=""/>
                                            <p className="reviews__comment-name">{item.name}</p>
                                        </div>
                                        <div className="reviews__block-left-top">
                                            <div className="reviews__stars-block">
                                                {
                                                    ratingProduct.map((el) => (
                                                        item.rating < el ? <span className="reviews__products-star2"><AiTwotoneStar/></span>:
                                                            <span className="reviews__products-star"><AiTwotoneStar/></span>
                                                    ))
                                                }
                                            </div>
                                            <p className="reviews__block-right-data">{item.date}</p>
                                        </div>
                                        <p className="reviews__comment-text">{item.text}</p>
                                    </div>
                                ))
                            }
                            <div className="reviews__rating">
                                <div className="reviews__rating-block">
                                    <h4 className="reviews__rating-text">Ваша оценка</h4>
                                    <div className="products__stars">
                                        {
                                            ratingProduct.map((item) => (
                                                <span onClick={() => setStar(item) } className={`${item <= star ? "reviews__products-star" : "reviews__products-star2 "}`}><AiTwotoneStar/></span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="reviews__rating-area" placeholder="Отзыв" id="" cols="30" rows="10"/>
                                <button type="button" onClick={() => {
                                    user.email ? postComment()  : dispatch(openPopup())
                                }} className="reviews__rating-btn">Отправить отзыв</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;