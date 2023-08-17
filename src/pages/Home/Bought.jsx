import React, {useEffect} from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import Product from "../Product";
import {useDispatch, useSelector} from "react-redux";
import {filterTypeProducts, filterViewProducts, getAllCards} from "../../redux/cards";
import {useNavigate} from 'react-router-dom'
import {getOrder} from "../../redux/order";

const Bought = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {cards, filter} = useSelector(s => s.reducer.cards)
    const {order} = useSelector(s => s.reducer.order)
    const {user} = useSelector(s => s.reducer.user)


    useEffect( () => {
        dispatch(filterViewProducts(''))
    }, [])

    useEffect( () => {
        dispatch(filterTypeProducts(''))
    }, [])

    useEffect(() => {
        dispatch(getAllCards(filter))
    }, [filter.view, filter.type])

    useEffect(() => {
        dispatch(getOrder(user.email))
    },[])









    return (
        <div className="bought">
            <div className="container">
                <div className="all__content">
                    <div className="all__top">
                        <h2 className="all__title">Покупали раньше</h2>
                        <div className="all__top-group">
                            <button className="all__top-btn">Все покупки</button>
                            <span onClick={() => navigate("bought")} className="all__top-icon"><IoIosArrowForward/></span>
                        </div>
                    </div>
                    <ul className="products__list">
                        {
                            cards.map((card) => (
                            <Product key={card.id} card={card} />
                            )).filter((_, idx) => window.innerWidth <= 1200 ? idx < 3 : idx < 4)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Bought;