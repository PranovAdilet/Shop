import React, {useEffect} from 'react';
import Actions from "../Home/Actions";
import Product from "../Product";
import {IoIosArrowForward} from 'react-icons/io'
import {useDispatch, useSelector} from "react-redux";
import {filterTypeProducts, filterViewProducts, getAllCards} from "../../redux/cards";
import {Link} from "react-router-dom";
import {ScrollToTopOnMount} from "../../scrollTop";


const ActionPage = () => {
    const dispatch = useDispatch()
    ScrollToTopOnMount()
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
        <div className="actionsPage">
            <div className="container">
                <div className="actionsPage__navigation">
                    <Link to="/" className="catalog__navigation-road">Главная</Link>
                    <span className="all__top-icon"><IoIosArrowForward/></span>
                    <p className="catalog__navigation-place">Акции</p>
                </div>
                <div className="all__content">
                    <div className="all__top">
                        <h2 className="all__title">Акции</h2>
                    </div>
                    <ul className="products__list">
                        {
                            cards.map((card) => (
                                card.priceSale && <Product key={card.id} card={card} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ActionPage;