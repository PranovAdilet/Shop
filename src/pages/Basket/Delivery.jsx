import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'
import {openPopup} from "../../redux/popup";
import {useDispatch, useSelector} from "react-redux";
import {ScrollToTopOnMount} from "../../scrollTop";
import {RemoveAllProducts} from "../../redux/basket";
import {BuyProducts} from "../../redux/user";

import {AddOrderProduct, AddProductsTime} from "../../redux/order";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'





const Delivery = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    ScrollToTopOnMount()
    const [toggle, setToggle] = useState(false)



    const [select, setSelect] = useState(false)
    const basket = useSelector(s => s.reducer.basket.order)
    const {user} = useSelector(s => s.reducer.user)
    const {order} = useSelector(s => s.reducer.order)

    const [totalPrice, setTotalPrice] = useState()
    const MySwal = withReactContent(Swal)

    const [productData, setProductData] = useState()

    const [choose, setChoose] = useState("")
    const handleSubmit = (e) => {
        const balance = basket.reduce((acc, rec) => Math.round(toggle ? (acc + +rec.priceCard * rec.count) - 8.01 / basket.length - 200 / basket.length : (acc + +rec.priceCard * rec.count) - 8.01 / basket.length     ), 0)
        e.preventDefault()
        axios.patch(`http://localhost:8080/users/${user.id}`, {
            balance: user.balance - balance
        }).then(() => {
            dispatch(BuyProducts(balance))
            Swal.fire(
                'Ваш заказ был принят!',
                '',
                'success'
            )

        })
    }




    return (
        <div className="delivery">
            <div className="container">
                <div className="catalog__navigation">
                    <Link to="/" className="catalog__navigation-road">Главная</Link>
                    <span className="all__top-icon"><IoIosArrowForward/></span>
                    <p className="catalog__navigation-place">Корзина</p>
                </div>
                <div className="basket__top">
                    <h2 className="favorite__title">Доставка</h2>
                    <span className="basket__length">{basket.length}</span>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    axios.post('http://localhost:8080/order', {
                        order: basket, user, choose, productData, totalPrice
                    }).then((res) => {
                        dispatch(RemoveAllProducts())
                    }).catch(err => alert(err))
                    handleSubmit(e)
                    navigate("/order")
                }} className="delivery__form">
                    <div className="delivery__left">
                        <h3 className="delivery__subtitle">Куда</h3>
                        <div className="delivery__place">
                            <div className="delivery__place-info">
                                <p className="delivery__info">Населенный пункт</p>
                                <select className="delivery__select">
                                    <option>Бишкек</option>
                                    <option>Ош</option>
                                    <option>Баткен</option>
                                    <option>Талас</option>
                                </select>
                            </div>
                            <div className="delivery__place-info">
                                <p className="delivery__info">Улица</p>
                                <input required  className="delivery__input" type="text"/>
                            </div>
                            <div className="delivery__place-info">
                                <p className="delivery__info">Дом</p>
                                <input required  className="delivery__input" type="text"/>
                            </div>
                            <div className="delivery__place-info">
                                <p className="delivery__info">Квартира</p>
                                <input className="delivery__input" type="text"/>
                            </div>
                        </div>
                        <h3 className="delivery__subtitle">Когда</h3>
                        <div className="delivery__place">
                            <div className="delivery__place-info">
                                <p className="delivery__info">Дата</p>
                                <input min="2023-02-14" max="2023-05-31" required onChange={(e) => setProductData(e.target.value)} className="delivery__input" type="date"/>

                            </div>

                            <div className="delivery__place-info">
                                <p className="delivery__info">Время</p>
                                <div className="delivery__place-time">
                                    <p onClick={() => setChoose("8:00 - 14:00")} className={`delivery__time ${choose === "8:00 - 14:00" ? "delivery__time_active" : "delivery__time"}`}>8:00 - 14:00</p>
                                    <p onClick={() => setChoose("14:00 - 18:00")} className={`delivery__time ${choose === "14:00 - 18:00" ? "delivery__time_active" : "delivery__time"}`}>14:00 - 18:00</p>
                                    <p onClick={() => setChoose("18:00 - 20:00")} className={`delivery__time ${choose === "18:00 - 20:00" ? "delivery__time_active" : "delivery__time"}`}>18:00 - 20:00</p>
                                    <p onClick={() => setChoose("20:00 - 22:00")} className={`delivery__time ${choose === "20:00 - 22:00" ? "delivery__time_active" : "delivery__time"}`}>20:00 - 22:00</p>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="basket__ordering">
                        <div className="basket__ordering-top">
                            <div className="basket__ordering-top">
                                <div onClick={() => setToggle(!toggle)} className={`switch-btn2 ${toggle && "switch-on2"}`}></div>
                                <p className="basket__ordering-top-text">Списать 200 сом </p>
                            </div>
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
                            <h4 className="basket__ordering-total">{basket.reduce((acc, rec) => Math.round(toggle ? (acc + +rec.priceCard * rec.count) - 8.01 / basket.length - 200 / basket.length : (acc + +rec.priceCard * rec.count) - 8.01 / basket.length     ), 0)} сом </h4>
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
                            <p className="basket__ordering-sum">Минимальная сумма заказа 1000р</p>
                        </div>
                        <button type="submit"  className="delivery__btn-top">Оплатить</button>
                        <button type="button" className="delivery__btn">Оплатить при получении</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Delivery;