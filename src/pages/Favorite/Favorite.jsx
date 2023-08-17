import React, {useEffect, useState} from 'react';
import {IoIosArrowForward, IoIosArrowUp} from 'react-icons/io'
import {IoMdClose} from 'react-icons/io'
import Product from "../Product";
import {useDispatch, useSelector} from "react-redux";
import {
    filterPopularProducts,
    filterTitleProducts,
    filterTypeProducts,
    getAllCards
} from "../../redux/cards";
import {filterTitleFavoriteProducts, filterDefaultFavoriteProducts, filterPopularFavoriteProducts, changeFavoritePriceFrom ,changeFavoritePriceTo} from "../../redux/favorite";
import {Link, useLocation, useParams} from 'react-router-dom'
import {RemoveAllFavoriteProducts} from "../../redux/favorite";
import PriceBar from "../../components/Ranges/RangePrice";
import {ScrollToTopOnMount} from "../../scrollTop";
import {catalog} from "../../catalog";
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'


const Favorite = () => {
    const [count, setCount] = useState(1)

    const favorite = useSelector(s => s.reducer.favorite.products)
    const dispatch = useDispatch()

    ScrollToTopOnMount()

    const {cards,filter} = useSelector(state => state.reducer.cards)

    const [valueFromPrice, setValueFromPrice] = useState(filter.price.from || 0)
    const [valueToPrice, setValueToPrice] = useState(filter.price.to || 100)


    const [toggle, setToggle] = useState(false)
    const [rating, setRating] = useState({
        status: false,
        value: ""
    })
    const [title, setTitle] = useState({
        status: false,
        value: ""
    })
    const [price, setPrice] = useState({
        status: false,
        value: "",
        to: false
    })


    useEffect(() => {
        dispatch(getAllCards(filter))
    }, [filter.view, filter.type, filter.rating, filter.title, filter.price]);

    useEffect(() => {
        dispatch(filterTypeProducts())
    }, [filter.type])

    const onClickBtnFilterPopularProducts = () => {
        setRating({
            status: !rating.status,
            value: ""
        })
        setTitle({
            ...title,
            status: rating.status && false
        })
        setPrice({
            ...price,
            status: rating.status && false
        })
    }
    const onClickBtnFilterTitleProducts = () => {
        setTitle({
            status: !title.status,
            value: ""
        })
        setRating({
            ...rating,
            status: title.status && false
        })
        setPrice({
            ...price,
            status: title.status && false
        })
    }
    const onClickBtnFilterPriceProducts = () => {
        setPrice({
            status: !price.status,
            value: ""
        })
        setRating({
            ...rating,
            status: title.status && false
        })
        setTitle({
            ...title,
            status: price.status && false
        })
    }






    return (
        <div className="favorite">
            <div className="container">
                <div className="catalog__navigation">
                    <Link to="/" className="catalog__navigation-road">Главная</Link>
                    <span className="all__top-icon"><IoIosArrowForward/></span>
                    <p className="catalog__navigation-place">Избраное</p>
                </div>
                <h2 className="favorite__title">Избраное</h2>
                <div className="filter__content">
                    <div className="filter__left">
                        <h3 className="filter__left-title">Фильтр</h3>
                        <div className="filter__left-filter">



                            <p className="filter__sort-text favorite__sort">Сортировать по:</p>
                            <div className="filter__sort">
                                <button onClick={() => {
                                    onClickBtnFilterPopularProducts()
                                }} className="filter__sort-item">по популярности
                                    {
                                        !rating.status ? <span className="filter__arrow"><MdOutlineKeyboardArrowDown/></span> :
                                            <span className="filter__arrow-up"><IoIosArrowUp/></span>
                                    }
                                </button>
                                <button onClick={() => {
                                    onClickBtnFilterTitleProducts()
                                }} className="filter__sort-item">по имени
                                    {
                                        !title.status ? <span className="filter__arrow"><MdOutlineKeyboardArrowDown/></span> :
                                            <span className="filter__arrow-up"><IoIosArrowUp/></span>
                                    }

                                </button>
                                <button onClick={() => {
                                    onClickBtnFilterPriceProducts()
                                }} className="filter__sort-item">по цене
                                    {
                                        !price.status ? <span className="filter__arrow"><MdOutlineKeyboardArrowDown/></span> :
                                            <span className="filter__arrow-up"><IoIosArrowUp/></span>
                                    }

                                </button>
                            </div>
                            <div className="filter__left-subtitles">
                                {
                                    // data.filters && data?.filters.map(item => (
                                    //     <p onClick={() => dispatch(filterViewProducts(item))} className="filter__left-subtitle">{item}</p>
                                    // ))
                                }
                            </div>
                            <div className="filter__left-stock">

                                <div onClick={() => setToggle(!toggle)} className={`switch-btn ${toggle && "switch-on"}`}></div>
                                <p className="filter__left-subtitle">Cо скидкой</p>
                            </div>
                            <button className="filter__left-btn">Применить</button>
                        </div>
                    </div>
                    <div className="filter__right">
                        <div className="filter__right-filters">
                            <div onClick={() => setPrice({
                                ...price,
                                to: !price.to
                            })} className="filter__right-filter-block">
                                <p  className="filter__right-filter">Цена до 100 сом</p>
                                <span className="filter__right-filter-close"><IoMdClose/></span>
                            </div>
                            <div style={{display: title.status || rating.status || price.status ? "flex" : ""}} className="filter__sort-btns">
                                <div onClick={() => {
                                    if (rating.status){
                                        setRating({
                                            ...rating,
                                            value: "top"
                                        })
                                    }else if(title.status){
                                        setTitle({
                                            ...title,
                                            value: "top"
                                        })
                                    }else if(price.status){
                                        setPrice({
                                            ...price,
                                            value: "top"
                                        })
                                    }
                                }}   className="filter__right-filter-block">
                                    <p className="filter__right-filter">По возрастанию</p>
                                    {
                                        <span className="filter__arrow-up"><IoIosArrowUp/></span>
                                    }
                                </div>
                                <div onClick={() => {
                                    if (rating.status){
                                        setRating({
                                            ...rating,
                                            value: "bot"
                                        })
                                    }else if(title.status){
                                        setTitle({
                                            ...title,
                                            value: "bot"
                                        })
                                    }else if(price.status){
                                        setPrice({
                                            ...price,
                                            value: "bot"
                                        })
                                    }

                                }}  className="filter__right-filter-block">
                                    <p  className="filter__right-filter">По убыванию</p>
                                    {
                                        <span className="filter__arrow"><MdOutlineKeyboardArrowDown/></span>
                                    }
                                </div>
                            </div>
                            <div onClick={() => dispatch(RemoveAllFavoriteProducts())} className="filter__right-filter-block">
                                <p className="filter__right-filter">Очистить список</p>
                                <span className="filter__right-filter-close"><IoMdClose/></span>
                            </div>
                        </div>
                        <ul className="filter__products">
                            {
                                favorite.map((card) => (
                                    <Product card={card}/>
                                )).filter((item,idx)=> idx < 6 * count).filter((el) => toggle ? el.props.card.priceSale ? el : "" : el)
                                    .sort((a,b) => {
                                        return  title.value === "bot" ? a.props.card.title > b.props.card.title ? 1 : -1 : title.value === "top" ? b.props.card.title > a.props.card.title ? 1: -1 : ""
                                    })
                                    .sort((a, b) => {
                                        return  rating.value === "top" ? a.props.card.rating - b.props.card.rating : rating.value === "bot" ? b.props.card.rating - a.props.card.rating : ""
                                    }).sort((a, b) => {
                                    return  price.value === "top" ? a.props.card.priceCard - b.props.card.priceCard : price.value === "bot" ? b.props.card.priceCard - a.props.card.priceCard : ""})
                                    .filter((item) => {
                                        return price.to ? item.props.card.priceCard < 100 : item
                                    })                            }
                        </ul>
                        {
                            !favorite.length && <h2 className="filter__empty">Ваш список избранных пуст!</h2>
                        }
                        <div className="filter__center">
                            {
                                count * 3 >= cards.length ?
                                    <button className="filter__btn" type="button" onClick={() => setCount(1)}>Скрыть</button> :
                                    <button className="filter__btn" style={{display: count * 6 >= favorite.length ? 'none': 'inline-block'}} type="button"
                                            onClick={()=>{setCount(count + 2)}}>
                                        Показать еще
                                    </button>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorite;