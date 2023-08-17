import React, {useEffect, useState} from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../redux/cards";
import {AddInputText, ClearInputText} from "../../redux/search";
import Product from "../Product";
import {useLocation, useNavigate} from "react-router-dom"

const Search = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const {cards} = useSelector(s => s.reducer.cards)
    const {input, valueInput} = useSelector(s => s.reducer.search)
    const filterProducts = cards.filter(item => {
        return item.title.toLowerCase().includes(valueInput.toLowerCase())
    })
    useEffect(() => {
        dispatch(getAllCards())
    }, []);

    return (
        <div className="search">
            <div className="container">
                <div className="search__content">
                    {
                        !filterProducts.length ? <h2 style={{ height: !filterProducts.length &&"55vh"}} className="search__title">По данному запросу ничего не найдено!</h2> : <div className="search__top">
                            <h2 className="search__title">Результат поиска</h2>
                            <p className="search__text">по запросу <span className="search__text-search">{valueInput}</span></p>
                        </div>
                    }
                    <ul className="products__list">
                    {
                            filterProducts.map((card) => (
                                <Product key={card.id} card={card}/>
                            ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Search;