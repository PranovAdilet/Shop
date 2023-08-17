import React, {useEffect, useState} from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import {useDispatch, useSelector} from "react-redux";
import {filterTypeProducts, filterViewProducts, getAllCards} from "../../redux/cards";
import Product from "../Product";
import {useNavigate} from 'react-router-dom'

const Novelties = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {cards, filter} = useSelector(s => s.reducer.cards)


    useEffect( () => {
        dispatch(filterViewProducts(''))
    }, [])

    useEffect( () => {
        dispatch(filterTypeProducts(''))
    }, [])

    useEffect(() => {
        dispatch(getAllCards(filter))
    }, [filter.view, filter.type])

    return (
        <div className="novelties">
            <div className="container">
                <div className="all__content">
                    <div className="all__top">
                        <h2 className="all__title">Новинки</h2>
                        <div className="all__top-group">
                            <button className="all__top-btn">Все новинки</button>
                            <span onClick={() => navigate("novelties")} className="all__top-icon"><IoIosArrowForward/></span>
                        </div>
                    </div>
                    <ul className="products__list">
                        {
                            cards.map((card) => (
                                <Product key={card.id} card={card} />
                            )).reverse().filter((el, idx) => window.innerWidth <= 1200 ? idx < 3 : idx < 4)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Novelties;