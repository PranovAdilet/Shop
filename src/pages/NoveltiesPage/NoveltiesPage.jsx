import React, {useEffect, useState} from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../redux/cards";
import Product from "../Product";
import {Link} from "react-router-dom";
import {ScrollToTopOnMount} from "../../scrollTop";

const NoveltiesPage = () => {
    ScrollToTopOnMount()
    const dispatch = useDispatch()
    const {cards} = useSelector(s => s.reducer.cards)
    useEffect(() => {
        dispatch(getAllCards())
    }, [])
    return (
        <div className="noveltiesPage">
            <div className="container">
                <div className="all__content">
                    <div className="noveltiesPage__navigation">
                        <Link to="/" className="catalog__navigation-road">Главная</Link>
                        <span className="all__top-icon"><IoIosArrowForward/></span>
                        <p className="catalog__navigation-place">Новинки</p>
                    </div>
                    <div className="all__top">
                        <h2 className="all__title">Новинки</h2>
                    </div>
                    <ul className="products__list">
                        {
                            cards.map((card) => (
                                <Product key={card.id} card={card} />
                            )).reverse()
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default NoveltiesPage;