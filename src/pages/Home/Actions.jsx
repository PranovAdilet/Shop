import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {IoIosArrowForward} from 'react-icons/io'
import {filterViewProducts, getAllCards, filterTypeProducts} from "../../redux/cards";
import {useNavigate} from 'react-router-dom'
import Product from "../Product";


const Actions = () => {
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
        <div className="actions">
            <div className="container">
                <div className="all__content">
                    <div className="all__top">
                        <h2 className="all__title">Акции</h2>
                        <div className="all__top-group">
                            <button className="all__top-btn">Все акции</button>
                            <span onClick={() =>navigate("/action") } className="all__top-icon"><IoIosArrowForward/></span>
                        </div>
                    </div>
                    <ul className="products__list">
                        {
                            cards.map((card) => (
                                card.priceSale && <Product key={card.id} card={card} />
                            )).filter((item, idx) => window.innerWidth <= 1200 ? idx < 3 : idx < 4 )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Actions;