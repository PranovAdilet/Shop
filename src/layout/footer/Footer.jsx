import React from 'react';
import logo from '../../images/footer/logo.svg'
import zasovskiy from '../../images/footer/zas.svg'
import background from '../../images/footer/footer.png'
import vkontakte from '../../images/footer/vkontakte.svg'
import {IoLogoInstagram} from 'react-icons/io'
import {GrFacebook} from 'react-icons/gr'
import {FiPhone} from 'react-icons/fi'
import {FaOdnoklassniki} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <img className="footer__background" src={background} alt=""/>
                    <Link className="footer__link" to="/">
                        <span>
                            <svg width="64" height="44" viewBox="0 0 64 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.992 14.2617H17.4751C16.8981 14.2617 16.429 14.7325 16.4793 15.2855C17.0824 21.8704 23.4576 27.052 31.2326 27.052C39.0076 27.052 45.3829 21.8704 45.986 15.2855C46.0381 14.7325 45.569 14.2617 44.992 14.2617Z" fill="#FF6633"/>
<path d="M26.2653 4.40841C25.9581 4.40841 25.6529 4.27596 25.4537 4.0218C24.4486 2.75101 22.5388 1.95989 20.4708 1.95989C18.4028 1.95989 16.493 2.74922 15.4879 4.0218C15.1472 4.45316 14.5069 4.53549 14.0602 4.20795C13.6116 3.88041 13.526 3.2647 13.8666 2.83513C15.2701 1.05959 17.7383 0 20.4708 0C23.2033 0 25.6715 1.05959 27.0768 2.83513C27.4175 3.26648 27.33 3.88041 26.8832 4.20795C26.6971 4.34398 26.4812 4.40841 26.2653 4.40841Z" fill="#414141"/>
<path d="M47.7877 4.40841C47.4806 4.40841 47.1753 4.27596 46.9762 4.0218C45.971 2.75101 44.0612 1.95989 41.9932 1.95989C39.9252 1.95989 38.0155 2.74922 37.0103 4.0218C36.6697 4.45316 36.0294 4.53549 35.5826 4.20795C35.134 3.88041 35.0484 3.2647 35.389 2.83513C36.7925 1.05959 39.2607 0 41.9932 0C44.7258 0 47.1939 1.05959 48.5993 2.83513C48.9399 3.26648 48.8524 3.88041 48.4057 4.20795C48.2196 4.34398 48.0037 4.40841 47.7877 4.40841Z" fill="#414141"/>
</svg>

                        </span>
                        <p className="footer__title">КЕЛЕЧЕК</p>
                    </Link>
                    <nav className="footer__nav">
                       <Link to="about" className="footer__text">О компании</Link>
                       <Link to="contacts" className="footer__text">Контакты</Link>
                       <Link to="vacancies" className="footer__text">Вакансии</Link>
                       <Link to="/articles" className="footer__text">Статьи</Link>
                       <Link to="/" className="footer__text">Политика обработки персональных данных</Link>
                    </nav>
                    <ul className="footer__list">
                        <li className="footer__item footer__inst"><a href="https://ok.ru/"><IoLogoInstagram/></a></li>
                        <li className="footer__item"><a href="https://vk.com/"><img src={vkontakte} alt=""/></a> </li>
                        <li className="footer__item footer__face"><a href="https://www.facebook.com/"><GrFacebook/></a> </li>
                        <li className="footer__item footer__ok"><a href="https://ok.ru/"><FaOdnoklassniki/></a></li>
                    </ul>
                    <div className="footer__info">
                        <div className="footer__info-top">
                            <span className="footer__info-icon"><FiPhone/></span>
                            <p className="footer__info-phone">0 773 50 53 20</p>
                        </div>
                    </div>
                </div>
                <div className="footer__info-bot">
                    <p className="footer__info-text">Дизайн</p>
                    <img className="footer__info-svg" src={zasovskiy} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;