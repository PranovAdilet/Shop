import React from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import Img1 from '../../images/articles/image 1.png'
import Img2 from '../../images/articles/image 2.png'
import Img3 from '../../images/articles/image 3.png'
import {Link} from "react-router-dom";
import {ScrollToTopOnMount} from "../../scrollTop";

const ArticlesPage = () => {
    ScrollToTopOnMount()
    return (
        <div className="articlesPage">
            <div className="container">
                <div className="all__content">
                    <div className="noveltiesPage__navigation">
                        <Link to="/" className="catalog__navigation-road">Главная</Link>
                        <span className="all__top-icon"><IoIosArrowForward/></span>
                        <p className="catalog__navigation-place">Cтатьи</p>
                    </div>
                    <div className="all__top">
                        <h2 className="all__title">Статьи</h2>
                    </div>
                    <ul className="articles__list">
                        <li className="articles__item">
                            <img className="articles__item-img" src={Img1} alt=""/>
                            <div className="articles__item-info">
                                <p className="articles__item-data">05.03.2021</p>
                                <h4 className="articles__item-title">Режим использования масок и перчаток на территории магазинов</h4>
                                <p className="articles__item-text">Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
                                <button className="articles__item-btn">Подробнее</button>
                            </div>
                        </li>
                        <li className="articles__item">
                            <img className="articles__item-img" src={Img2} alt=""/>
                            <div className="articles__item-info">
                                <p className="articles__item-data">05.03.2021</p>
                                <h4 className="articles__item-title">Весеннее настроение для каждой</h4>
                                <p className="articles__item-text">8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.
                                    <br/>
                                    <br/></p>
                                <button className="articles__item-btn">Подробнее</button>
                            </div>
                        </li>
                        <li className="articles__item">
                            <img className="articles__item-img" src={Img3} alt=""/>
                            <div className="articles__item-info">
                                <p className="articles__item-data">22.02.2020</p>
                                <h4 className="articles__item-title">ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!</h4>
                                <p className="articles__item-text">Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!</p>
                                <button className="articles__item-btn">Подробнее</button>
                            </div>
                        </li>
                        <li className="articles__item">
                            <img className="articles__item-img" src={Img1} alt=""/>
                            <div className="articles__item-info">
                                <p className="articles__item-data">05.03.2021</p>
                                <h4 className="articles__item-title">Режим использования масок и перчаток на территории магазинов</h4>
                                <p className="articles__item-text">Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
                                <button className="articles__item-btn">Подробнее</button>
                            </div>
                        </li>
                        <li className="articles__item">
                            <img className="articles__item-img" src={Img2} alt=""/>
                            <div className="articles__item-info">
                                <p className="articles__item-data">05.03.2021</p>
                                <h4 className="articles__item-title">Весеннее настроение для каждой</h4>
                                <p className="articles__item-text">8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.
                                    <br/>
                                    <br/></p>
                                <button className="articles__item-btn">Подробнее</button>
                            </div>
                        </li>
                        <li className="articles__item">
                            <img className="articles__item-img" src={Img3} alt=""/>
                            <div className="articles__item-info">
                                <p className="articles__item-data">22.02.2020</p>
                                <h4 className="articles__item-title">ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!</h4>
                                <p className="articles__item-text">Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!</p>
                                <button className="articles__item-btn">Подробнее</button>
                            </div>
                        </li>
                        <li className="articles__item">
                            <img className="articles__item-img" src={Img1} alt=""/>
                            <div className="articles__item-info">
                                <p className="articles__item-data">05.03.2021</p>
                                <h4 className="articles__item-title">Режим использования масок и перчаток на территории магазинов</h4>
                                <p className="articles__item-text">Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
                                <button className="articles__item-btn">Подробнее</button>
                            </div>
                        </li>
                        <li className="articles__item">
                            <img className="articles__item-img" src={Img2} alt=""/>
                            <div className="articles__item-info">
                                <p className="articles__item-data">05.03.2021</p>
                                <h4 className="articles__item-title">Весеннее настроение для каждой</h4>
                                <p className="articles__item-text">8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.
                                    <br/>
                                    <br/></p>
                                <button className="articles__item-btn">Подробнее</button>
                            </div>
                        </li>
                        <li className="articles__item">
                            <img className="articles__item-img" src={Img3} alt=""/>
                            <div className="articles__item-info">
                                <p className="articles__item-data">22.02.2020</p>
                                <h4 className="articles__item-title">ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!</h4>
                                <p className="articles__item-text">Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!</p>
                                <button className="articles__item-btn">Подробнее</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ArticlesPage;