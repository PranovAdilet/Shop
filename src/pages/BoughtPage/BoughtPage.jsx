import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../redux/cards";
import {IoIosArrowForward} from 'react-icons/io'
import Product from "../Product";
import {Link} from "react-router-dom";
import {ScrollToTopOnMount} from "../../scrollTop";

const BoughtPage = () => {
    ScrollToTopOnMount()
    const dispatch = useDispatch()
    const {cards} = useSelector(s => s.reducer.cards)
    useEffect(() => {
        dispatch(getAllCards())
    }, [])
    return (
        <div className="boughtPage">
            <div className="container">
                <div className="actionsPage__navigation">
                    <Link to="/" className="catalog__navigation-road">Главная</Link>
                    <span className="all__top-icon"><IoIosArrowForward/></span>
                    <p className="catalog__navigation-place">Покупали раньше</p>
                </div>
                <div className="all__content">
                    <div className="all__top">
                        <h2 className="all__title">Покупали раньше</h2>
                    </div>
                    <ul className="products__list">
                        {
                            cards.map((card) => (
                                <Product key={card.id} card={card} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BoughtPage;