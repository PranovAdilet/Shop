import React, {useEffect, useState} from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import {BsBagDash} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../redux/cards";
import Product from "../Product";
import {ScrollToTopOnMount} from "../../scrollTop";
import {getOrder} from "../../redux/order";



const Order = () => {
    ScrollToTopOnMount()

    const dispatch = useDispatch()
    const {cards} = useSelector(s => s.reducer.cards)
    const basket = useSelector(s => s.reducer.basket.order)

    const {order} = useSelector(s => s.reducer.order)
    const {user} = useSelector(s => s.reducer.user)


    function toDate (date) {
        return new Intl.DateTimeFormat('ru-Ru', {
            day:'2-digit',
            month:'2-digit',
            hour:'2-digit',
            minute:'2-digit',
        }).format(new Date(date))

    }

    console.log(order)




    useEffect(() => {
        dispatch(getAllCards())
    }, [])
    useEffect(() => {
        dispatch(getOrder(user.email))
    }, [user])

    console.log(order)


    return (
        <div className="order">
            <div className="container">
                <div className="order__content">
                <div className="catalog__navigation">
                    <Link to="/" className="catalog__navigation-road">Главная</Link>
                    <span className="all__top-icon"><IoIosArrowForward/></span>
                    <p className="catalog__navigation-place">Заказы</p>
                </div>
                <h2 className="order__title">Заказы</h2>
                    {
                        order.length ? order.map((item) => (
                            <div>
                                <div className="order__row">
                                    <div className="order__left">
                                        <h4 className="order__time">{user.email === item.user.email && item.productData}</h4>
                                        <h4 className="order__time">{user.email === item.user.email && item.choose}</h4>
                                        <p className="order__left-text">В процессе</p>
                                    </div>
                                    <div className="order__right">
                                        <div className="order__right">
                                            <p className="order__price">{user.email === item.user.email &&  item.order.reduce((acc, rec) => Math.round(acc + +rec.priceCard * rec.count) , 0)}сом</p>
                                            <button className="order__right-btn">
                                                <span className="order__right-icon"><BsBagDash/></span>
                                                <p className="order__right-text">Когда доставить</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <ul className="products__list">
                                    {
                                        user.email === item.user.email &&  item.order.map((card) => (
                                            <Product key={card.id} card={card} />
                                        ))
                                    }
                                </ul>
                                <div className="order__btn-block">
                                    <button className="order__btn">
                                        <span className="order__btn-icon"><AiOutlineEye/></span>
                                        <p className="order__btn-text">Просмотреть заказ</p>
                                    </button>
                                </div>
                            </div>
                        )).reverse() : <h2 className="order__empty">Ваш список заказов пуст!</h2>
                    }



               </div>
            </div>

        </div>
    );
};

export default Order;