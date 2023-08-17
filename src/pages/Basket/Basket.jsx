import React, {useEffect, useState} from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiOutlineDelete} from 'react-icons/ai'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import img from '../../images/basket/Item (3).png'
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from 'react-router-dom'
import {RemoveProduct, ProductCountPlus, ProductCountMinus, RemoveAllProducts} from "../../redux/basket";
import {closePopup, openPopup} from "../../redux/popup";
import {AddBasketProduct} from "../../redux/order";
import axios from "axios";
import {RegisterUser} from "../../redux/user";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Basket = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [select, setSelect] = useState(false)

    const [toggle, setToggle] = useState(false)
    const basket = useSelector(s => s.reducer.basket.order)
    const {user} = useSelector(s => s.reducer.user)
    const {order} = useSelector(s => s.reducer.order)

    console.log(basket)

    const MySwal = withReactContent(Swal)




    const [check, setCheck] = useState({
        product: basket.map(item => item),
        status: false
    })

    const addCheck = (item) => {
        setCheck({
            product: [...check.product, item],
            status: !check.status})
        console.log("Добавил")
    }


    const deleteCheck = (item) => {
       check.product = check.product.filter((el) => el.id !== item.id)
        console.log("удалил")
    }

    return (
        <div className="basket">
            <div className="container">
                <div className="catalog__navigation">
                    <Link to="/" className="catalog__navigation-road">Главная</Link>
                    <span className="all__top-icon"><IoIosArrowForward/></span>
                    <p className="catalog__navigation-place">Корзина</p>
                </div>
                <div className="basket__top">
                    <h2 className="favorite__title">Корзина</h2>
                    <span className="basket__length">{basket.length}</span>
                </div>
                <div className="basket__content">
                    <div className="basket__content-top">
                        <div onClick={() => setSelect(prevState => !prevState)} className="basket__content-btn-highlight">
                            {
                                select ? <span className="basket__content-icon"><AiOutlineMinus/></span> :
                                    <span className="basket__content-icon-check"><BsFillCheckSquareFill/></span>
                            }
                            <p className="basket__content-top-text">Выделить всё</p>
                        </div>
                        <div className="basket__delete-block">
                            <span className="basket__delete-block-btn"><AiOutlineDelete/></span>
                            <p onClick={() => dispatch(RemoveAllProducts())} className="basket__content-btn-delete">Очистить корзину</p>
                        </div>
                    </div>
                    <div className="basket__content-bot">
                        <ul className="basket__list">
                            {
                                basket.map(item => <li className="basket__item">
                                    <div className="basket__item-content">
                                        {
                                            select ? <span onClick={() => check.product.findIndex((el) => el.id === item.id) > -1 ? deleteCheck(item) : addCheck(item) }
                                                           className={`basket__item-check ${check.product.findIndex((el) => el.id === item.id) > -1  ? "basket__item-check_active" : "basket__item-check" }`}><BsFillCheckSquareFill/></span> : ""
                                        }

                                        <img className="basket__item-img" src={item.image} alt=""/>
                                        <div className="basket__item-info">
                                            <h4 className="basket__item-title">{item.title}</h4>
                                            <div className="basket__item-block">
                                                <p className="basket__item-block-price">{item.priceCard} с</p>
                                                <p className="basket__item-text">за шт.</p>
                                            </div>
                                        </div>
                                        <div className="basket__item-amount">
                                            <p onClick={() => dispatch(ProductCountMinus(item.id))} className="basket__item-minus"><AiOutlineMinus/></p>
                                            <p className="basket__item-num">{item.count}</p>
                                            <p onClick={() => {
                                                dispatch(ProductCountPlus(item.id))
                                            }} className="basket__item-plus"><AiOutlinePlus/></p>
                                        </div>
                                    </div>
                                    <div className="basket__item-left">
                                        <p className="basket__item-price">{Math.round(item.priceCard * item.count)} с</p>
                                        <span onClick={() => dispatch(RemoveProduct(item.id)) } className="basket__delete"><RiDeleteBin6Line/></span>
                                    </div>
                                </li> )
                            }
                            <li className="basket__item basket__item2">
                                <div className="basket__item-content">
                                    <img className="basket__item-img" src={img} alt=""/>
                                    <div className="basket__item-info">
                                        <h4 className="basket__item-title">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</h4>
                                        <div className="basket__item-block">
                                            <p className="basket__item-block-price">44,50 с</p>
                                            <p className="basket__item-text">за шт.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="basket__item-noprice">Нет в наличии</p>
                            </li>
                        </ul>
                        <div className="basket__ordering">
                            <div className="basket__ordering-top">
                                <div onClick={() => setToggle(!toggle)} className={`switch-btn2 ${toggle && "switch-on2"}`}></div>
                                <p className="basket__ordering-top-text">Списать 200 сом </p>
                            </div>
                            <p className="basket__ordering-text">На карте накоплено {
                                user.email ? user.balance : 0
                            } сом </p>
                            <div className="basket__ordering-line"></div>
                            <div className="basket__ordering-block">
                                <p className="basket__ordering-text">{basket.length} товара</p>
                                <p className="basket__ordering-price">{basket.reduce((acc, rec) => Math.round(acc + +rec.priceCard * rec.count) , 0)} сом </p>
                            </div>
                            <div className="basket__ordering-block">
                                <p className="basket__ordering-text">Скидка</p>
                                <p className="basket__ordering-priceSale">-8,01  сом </p>
                            </div>
                            <div className="basket__ordering-line2"></div>
                            <div className="basket__ordering-block">
                                <p className="basket__ordering-text">Итог</p>
                                <h4 className="basket__ordering-total">{basket.reduce((acc, rec) => Math.round(toggle ? (acc + +rec.priceCard * rec.count) - 8.01 / basket.length - 200 / basket.length : (acc + +rec.priceCard * rec.count) - 8.01 / basket.length     ) , 0)} сом </h4>
                            </div>
                            <div className="basket__ordering-center">
                                <div className="basket__ordering-block2">
                                            <span className="filterProduct__bot-right-svg"><svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.1883 0.666611H0.811961C0.343143 0.666611 -0.0396916 1.05823 0.0033005 1.52051C0.494639 7.0113 5.67826 11.3333 12.0001 11.3333C18.322 11.3333 23.5056 7.01332 23.997 1.52051C24.0379 1.05823 23.6571 0.666611 23.1883 0.666611Z" fill="#70C05B"/>
</svg></span>
                                    <p className="filterProduct__bot-right-text">Вы получаете {
                                        basket.length > 0 ? basket.reduce((acc, rec) => acc + +rec.bonus * rec.count, 0 ) : 0
                                    } бонусов</p>
                                </div>
                                <p className="basket__ordering-sum">Минимальная сумма заказа 1000сом</p>
                            </div>
                            <button onClick={() => {
                              user.email ? basket.reduce((acc, rec) => Math.round((acc + +rec.priceCard * rec.count) - 8.01 / basket.length), 0) > 1000
                                  ?  basket.reduce((acc, rec) => Math.round((acc + +rec.priceCard * rec.count) - 8.01 / basket.length), 0) > user.balance ?
                                      Swal.fire(
                                          'У вас недостаточно средств на балансе!',
                                          '',
                                          'error'
                                      ) :  navigate("/delivery") : Swal.fire(
                                      'Минимальная сумма заказа 1000сом!',
                                      '',
                                      'error'
                                  ) : dispatch(openPopup())
                            }} className="basket__ordering-btn">Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;