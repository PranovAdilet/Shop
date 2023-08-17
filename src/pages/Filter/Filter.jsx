import React, {useEffect, useState} from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import {IoMdClose, IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'
import Product from "../Product";
import {useParams, useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {catalog} from "../../catalog";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllCards,
    filterPopularProducts,
    filterTitleProducts,
    filterViewProducts,
    filterTypeProducts,
    filterDefaultProducts,
    changePriceFrom, changePriceTo
} from "../../redux/cards";
import PriceBar from "../../components/Ranges/RangePrice";
import {ScrollToTopOnMount} from "../../scrollTop";
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'



const Filter = () => {
    const dispatch = useDispatch();
    const location = useLocation()


    ScrollToTopOnMount()

    const {cards,filter} = useSelector(state => state.reducer.cards)

    const [valueFromPrice, setValueFromPrice] = useState(filter.price.from || 0)
    const [valueToPrice, setValueToPrice] = useState(filter.price.to || 100)





    const [data, setData] = useState({})

    const [toggle, setToggle] = useState(false)
    const [rating, setRating] = useState({
        status: false,
        value: ""
    })
    const [title, setTitle] = useState({
        status: false,
        value: ""
    })
    const [price, setPrice] = useState(false)



    const {id} = useParams()
    useEffect(() => {
        setRating({
            status: false,
            value: ""
        })
        setTitle({
            status: false,
            value: ""
        })
        setData(catalog.find(el => el.id == id))
    }, [id])


    useEffect(() => {
        dispatch(getAllCards(filter))
    }, [filter.view, id, filter.type, filter.rating, filter.title, filter.price]);

    useEffect(() => {
       dispatch(filterTypeProducts(data.title))
    }, [filter.type, data])


     const filterAscProducts = () => {
        return  rating.status && filter.rating !== "asc" ? dispatch(filterPopularProducts("asc")) :
            title.status && title.rating !== "asc" ?  dispatch(filterTitleProducts("asc")) : ""
    }
    const filterDescProducts = () => {
        return  rating.status && title.rating !== "desc" ? dispatch(filterPopularProducts("desc")) :
            title.status && title.rating !== "desc" ? dispatch(filterTitleProducts("desc")) : ""
    }
    const onClickBtnFilterPopularProducts = () => {
        setRating({
            status: !rating.status,
            value: ""
        })
        setTitle({
            ...title,
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
    }

    const ratingStateAscProducts = () => {
        setRating({
            ...rating,
            value: filter.rating
        })
        setTitle({
            ...title,
            value: filter.title
        })
    }
    const ratingStateDescProducts = () => {
        setRating({
            ...rating,
            value: filter.rating
        })
        setTitle({
            ...title,
            value: filter.title
        })
    }

    console.log(filter)







    return (
        <div className="filter">
            <div className="container">
                <div className="catalog__navigation">
                    <Link to="/" className="catalog__navigation-road">Главная</Link>
                    <span className="all__top-icon"><IoIosArrowForward/></span>
                    <Link to="/catalog" className="catalog__navigation-road">Каталог</Link>
                    <span className="all__top-icon"><IoIosArrowForward/></span>
                    <p className="catalog__navigation-place">{data.title}</p>
                </div>
                    <h2 className="filter__title">{data.title}</h2>
                    <ul className="filter__list">
                        <li className="filter__item">Товары нашего производства</li>
                        <li className="filter__item">Полезное питание</li>
                        <li className="filter__item">Без ГМО</li>
                    </ul>
                <div className="filter__content">
                    <div className="filter__left">
                        <h3 className="filter__left-title">Фильтр</h3>
                        <div className="filter__left-filter">
                            <div className="filter__left-price-group">
                                <p className="filter__left-price">Цена</p>
                                <button onClick={() => {
                                    dispatch(changePriceFrom(0))
                                    dispatch(changePriceTo(99))
                                    setValueToPrice(100)
                                    setValueFromPrice(0)
                                }} className="filter__left-price-btn">Очистить</button>
                            </div>
                            <label className="filter__left-label" htmlFor="">
                                <input min={0} max={100} value={valueFromPrice} onChange={(e) => setValueFromPrice(e.target.value)} placeholder="1" className="filter__left-input" type="number"/>
                                <span className="filter__left-line"> </span>
                                <input min={1} max={100} value={valueToPrice} onChange={(e) => setValueToPrice(e.target.value)} placeholder="100" className="filter__left-input" type="number"/>
                            </label>
                            <span className="filter__left-svg">
                                <PriceBar setValueFromPrice={setValueFromPrice} setValueToPrice={setValueToPrice}/>
                            </span>


                            <p className="filter__sort-text">Сортировать по:</p>
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
                                    setPrice(!price)
                                    price ? dispatch(filterTitleProducts("asc")) : dispatch(filterTitleProducts(""))
                                }} className="filter__sort-item">по цене
                                    {
                                        !price ? <span className="filter__arrow"><MdOutlineKeyboardArrowDown/></span> :
                                            <span className="filter__arrow-up"><IoIosArrowUp/></span>
                                    }

                                </button>
                            </div>
                            <div className="filter__left-subtitles">
                                {
                                    data.filters && data?.filters.map(item => (
                                        <p onClick={() => dispatch(filterViewProducts(item))} className="filter__left-subtitle">{item}</p>
                                    ))
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
                           <div className="filter__right-filter-block">
                               <p className="filter__right-filter">Фильтр 4</p>
                               <span className="filter__right-filter-close"><IoMdClose/></span>
                           </div>
                            <div className="filter__right-filter-block">
                                <p className="filter__right-filter">Цена от 99 до 2599</p>
                                <span className="filter__right-filter-close"><IoMdClose/></span>
                            </div>
                            <div style={{display: title.status || rating.status ? "flex" : ""}} className="filter__sort-btns">
                                <div onClick={() => {
                                    filterAscProducts()
                                    ratingStateAscProducts()
                                }}   className="filter__right-filter-block">
                                    <p className="filter__right-filter">По возрастанию</p>
                                    {
                                        rating.value !== "desc" && title.value !== "desc"  ? <span className="filter__arrow"><MdOutlineKeyboardArrowDown/></span> :  <span className="filter__arrow-up"><IoIosArrowUp/></span>
                                    }
                                </div>
                                <div onClick={() => {
                                    filterDescProducts()
                                    ratingStateDescProducts()
                                }}  className="filter__right-filter-block">
                                    <p  className="filter__right-filter">По убыванию</p>
                                    {
                                        rating.value !== "asc" && title.value !== "asc"  ? <span className="filter__arrow"><MdOutlineKeyboardArrowDown/></span> :  <span className="filter__arrow-up"><IoIosArrowUp/></span>
                                    }
                                </div>
                            </div>
                            <div onClick={() => {
                                dispatch(changePriceFrom(0))
                                dispatch(changePriceTo(99))
                                setValueToPrice(100)
                                setValueFromPrice(0)
                                setToggle(false)
                                setPrice(false)
                                setRating({
                                    status: false
                                })
                                setTitle({
                                    status: false
                                })
                                dispatch(filterDefaultProducts())
                                dispatch(filterViewProducts(""))
                            }} className="filter__right-filter-block">
                                <p className="filter__right-filter">Очистить фильтры</p>
                                <span className="filter__right-filter-close"><IoMdClose/></span>
                            </div>

                        </div>
                       <ul className="filter__products">
                           {
                               cards.map((card) => (
                                  <Product key={card.id} card={card} />
                               )).filter((el) => toggle ? el.props.card.priceSale ? el : "" : el)


                           }
                       </ul>
                        <div className="filter__center">


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;