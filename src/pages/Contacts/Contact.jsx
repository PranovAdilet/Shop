import React, {useState} from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlinePercentage} from 'react-icons/ai'
import Voschod from '../../images/contact/market.svg'
import Parus from '../../images/contact/market (1).svg'
import Rebinushka from '../../images/contact/market (2).svg'
import Pelus from '../../images/contact/market (3).svg'
import {FiPhone} from 'react-icons/fi'
import Popup from "../../components/Popup/Popup";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {changeStatus, closePopup, openPopup} from "../../redux/popup";
import {ScrollToTopOnMount} from "../../scrollTop";


const Contact = () => {
    const [place, setPlace] = useState("Бишкек")
    ScrollToTopOnMount()

    return (
        <div className="contact">
            <div className="container">
                <div className="contact__content">
                    <div className="catalog__navigation">
                        <Link to="/" className="catalog__navigation-road">Главная</Link>
                        <span className="all__top-icon"><IoIosArrowForward/></span>
                        <p className="catalog__navigation-place">Контакты</p>
                    </div>
                    <h2 className="favorite__title">Контакты</h2>
                    <div className="contact__content-top">
                        <div className="contact__top">
                            <div className="contact__top-block">
                                <span className="contact__top-icon"><BiHomeAlt/></span>
                                <p className="contact__top-text">Бухгалтерия, склад</p>
                            </div>
                            <p className="contact__top-phone">+996 773 50-53-20</p>
                        </div>
                        <div className="contact__top">
                            <div className="contact__top-block">
                                <span className="contact__top-icon"><AiOutlinePercentage/></span>
                                <p className="contact__top-text">Вопросы по системе лояльности</p>
                            </div>
                            <p className="contact__top-phone">+996 772 48-06-47</p>
                        </div>
                    </div>
                    <div className="contact__content-bot">
                        <h2 className="all__title">Наши магазины</h2>
                        <ul className="shops__list">
                            <li onClick={() => setPlace("Бишкек")} className={`shops__item ${place ==="Бишкек" && "shops__item_active"}`}>Бишкек</li>
                            <li onClick={() => setPlace("Ош")} className={`shops__item ${place ==="Ош" && "shops__item_active"}`}>Ош</li>
                            <li onClick={() => setPlace("Баткен")} className={`shops__item ${place ==="Баткен" && "shops__item_active"}`}>Баткен</li>
                            <li onClick={() => setPlace("Талас")} className={`shops__item ${place ==="Талас" && "shops__item_active"}`}>Талас</li>
                        </ul>
                        <div className="contact__bot">
                            <div className="contact__block">
                                <img className="contact__block-img" src={Voschod} alt=""/>
                                <div className="contact__bot-block">
                                    <span className="contact__top-icon"><BiHomeAlt/></span>
                                    <p className="contact__block-text">ул. Куренкеева 10</p>
                                </div>
                                <div className="contact__bot-block">
                                    <span className="contact__top-icon"><FiPhone/></span>
                                    <p className="contact__block-text contact__block-text2">+996 773 51-34-25</p>
                                </div>
                            </div>
                            <div className="contact__block">
                                <img className="contact__block-img" src={Parus} alt=""/>
                                <div className="contact__bot-block">
                                    <span className="contact__top-icon"><BiHomeAlt/></span>
                                    <p className="contact__block-text">ул. Советская 87</p>
                                </div>
                                <div className="contact__bot-block">
                                    <span className="contact__top-icon"><FiPhone/></span>
                                    <p className="contact__block-text contact__block-text2">+996 778 94-72-94</p>
                                </div>
                            </div>
                            <div className="contact__block">
                                <img className="contact__block-img" src={Rebinushka} alt=""/>
                                <div className="contact__bot-block">
                                    <span className="contact__top-icon"><BiHomeAlt/></span>
                                    <p className="contact__block-text">ул. Панфилова 16</p>
                                </div>
                                <div className="contact__bot-block">
                                    <span className="contact__top-icon"><FiPhone/></span>
                                    <p className="contact__block-text contact__block-text2">+996 770 43-98-20</p>
                                </div>
                            </div>
                            <div className="contact__block">
                                <img className="contact__block-img" src={Pelus} alt=""/>
                                <div className="contact__bot-block">
                                    <span className="contact__top-icon"><BiHomeAlt/></span>
                                    <p className="contact__block-text">ул. Тоголок Молдо 1</p>
                                </div>
                                <div className="contact__bot-block">
                                    <span className="contact__top-icon"><FiPhone/></span>
                                    <p className="contact__block-text contact__block-text2">+996 771 62-98-99</p>
                                </div>
                            </div>
                        </div>
                        <div className="shops__map">
                            <iframe
                                src={`${place === "Бишкек" ? "https://yandex.ru/map-widget/v1/?um=constructor%3Afaa5ed99308275747c82c0a4012b3e8f8677473df310cf38d72e4d6f14e47594&amp;source=constructor":
                                    place ==="Ош" ? "https://yandex.ru/map-widget/v1/?um=constructor%3A2848e8eff7d7f66f18c33f61857a0ea7b778b99a9474d815af12b0024e690ed3&amp;source=constructor" :
                                        place === "Баткен" ? "https://yandex.ru/map-widget/v1/?um=constructor%3A2848e8eff7d7f66f18c33f61857a0ea7b778b99a9474d815af12b0024e690ed3&amp;source=constructor" :
                                            place === "Талас" ? "https://yandex.ru/map-widget/v1/?um=constructor%3A2848e8eff7d7f66f18c33f61857a0ea7b778b99a9474d815af12b0024e690ed3&amp;source=constructor" : ""
                                }`}
                                width="1245" height="360" frameBorder="0"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;