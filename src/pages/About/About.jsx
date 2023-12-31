import React from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import background from '../../images/about/background.png'
import logo from '../../images/about/logo.svg'
import {Link} from 'react-router-dom'
import {ScrollToTopOnMount} from "../../scrollTop";

const About = () => {
    ScrollToTopOnMount()
    return (
        <div className="about">
            <div className="container">
               <div className="about__content-top">
                   <div className="catalog__navigation">
                       <Link to="/" className="catalog__navigation-road">Главная</Link>
                       <span className="all__top-icon"><IoIosArrowForward/></span>
                       <p className="catalog__navigation-place">О компании</p>
                   </div>
                   <h2 className="about__title">О компании</h2>
                   <p className="about__subtitle">Мы непрерывно развиваемся и <br/> работаем над совершенствованием сервиса, <br/> заботимся о наших клиентах, <br/> стремимся к лучшему будущему.</p>
                   <img className="about__background" src={background} alt=""/>
               </div>
                <div className="about__content-center">
                    <div className="about__block">
                        <div className="about__content-center-block">
                        <span className="about__content-center-svg"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.47265 23.0891C3.47265 17.325 0.486816 13.3666 0.486816 10.5891C0.486816 7.81162 2.08348 1.97746 14.861 1.97746C27.6385 1.97746 29.5135 9.82496 29.5135 12.88C29.5143 27.1858 3.47265 33.2975 3.47265 23.0891Z" fill="#FCD5BA"/>
<path d="M13.0904 20.9341C12.9337 21.0908 12.722 21.1783 12.5012 21.1783C12.2804 21.1783 12.0679 21.0908 11.912 20.9341L6.91203 15.9341C6.5862 15.6083 6.58703 15.0808 6.91203 14.7558L8.09036 13.5775C8.4162 13.2516 8.9437 13.2516 9.2687 13.5775L12.5012 16.8091L20.7337 8.57746C21.0595 8.25163 21.587 8.25163 21.912 8.57746L23.0904 9.75579C23.4162 10.0816 23.4162 10.6091 23.0904 10.9341L13.0904 20.9341Z" fill="#FF6633"/>
<path d="M8.78588 15.9339C8.46005 15.6081 8.46088 15.0806 8.78588 14.7556L9.61588 13.9255L9.26755 13.5772C8.94171 13.2514 8.41421 13.2514 8.08921 13.5772L6.91088 14.7556C6.58505 15.0814 6.58505 15.6089 6.91088 15.9339L11.9109 20.9339C12.0675 21.0906 12.2792 21.1781 12.5 21.1781C12.7209 21.1781 12.9334 21.0906 13.0892 20.9339L13.4375 20.5856L8.78588 15.9339Z" fill="black" fillOpacity="0.1"/>
</svg></span>
                            <p className="about__content-center-text">Мы занимаемся <br/> розничной торговлей</p>
                        </div>
                        <h4 className="about__content-center-title">Более 20 лет.</h4>
                    </div>
                    <div className="about__block">
                        <div className="about__content-center-block">
                        <span className="about__content-center-svg"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.47265 23.0891C3.47265 17.325 0.486816 13.3666 0.486816 10.5891C0.486816 7.81162 2.08348 1.97746 14.861 1.97746C27.6385 1.97746 29.5135 9.82496 29.5135 12.88C29.5143 27.1858 3.47265 33.2975 3.47265 23.0891Z" fill="#FCD5BA"/>
<path d="M13.0904 20.9341C12.9337 21.0908 12.722 21.1783 12.5012 21.1783C12.2804 21.1783 12.0679 21.0908 11.912 20.9341L6.91203 15.9341C6.5862 15.6083 6.58703 15.0808 6.91203 14.7558L8.09036 13.5775C8.4162 13.2516 8.9437 13.2516 9.2687 13.5775L12.5012 16.8091L20.7337 8.57746C21.0595 8.25163 21.587 8.25163 21.912 8.57746L23.0904 9.75579C23.4162 10.0816 23.4162 10.6091 23.0904 10.9341L13.0904 20.9341Z" fill="#FF6633"/>
<path d="M8.78588 15.9339C8.46005 15.6081 8.46088 15.0806 8.78588 14.7556L9.61588 13.9255L9.26755 13.5772C8.94171 13.2514 8.41421 13.2514 8.08921 13.5772L6.91088 14.7556C6.58505 15.0814 6.58505 15.6089 6.91088 15.9339L11.9109 20.9339C12.0675 21.0906 12.2792 21.1781 12.5 21.1781C12.7209 21.1781 12.9334 21.0906 13.0892 20.9339L13.4375 20.5856L8.78588 15.9339Z" fill="black" fillOpacity="0.1"/>
</svg></span>
                            <p className="about__content-center-text">Основная миссия компании</p>
                        </div>
                        <h4 className="about__content-center-title">Максимальное качество <br/> товаров и услуг по <br/> доступной цене.</h4>
                    </div>
                    <div className="about__block">
                        <div className="about__content-center-block">
                        <span className="about__content-center-svg"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.47265 23.0891C3.47265 17.325 0.486816 13.3666 0.486816 10.5891C0.486816 7.81162 2.08348 1.97746 14.861 1.97746C27.6385 1.97746 29.5135 9.82496 29.5135 12.88C29.5143 27.1858 3.47265 33.2975 3.47265 23.0891Z" fill="#FCD5BA"/>
<path d="M13.0904 20.9341C12.9337 21.0908 12.722 21.1783 12.5012 21.1783C12.2804 21.1783 12.0679 21.0908 11.912 20.9341L6.91203 15.9341C6.5862 15.6083 6.58703 15.0808 6.91203 14.7558L8.09036 13.5775C8.4162 13.2516 8.9437 13.2516 9.2687 13.5775L12.5012 16.8091L20.7337 8.57746C21.0595 8.25163 21.587 8.25163 21.912 8.57746L23.0904 9.75579C23.4162 10.0816 23.4162 10.6091 23.0904 10.9341L13.0904 20.9341Z" fill="#FF6633"/>
<path d="M8.78588 15.9339C8.46005 15.6081 8.46088 15.0806 8.78588 14.7556L9.61588 13.9255L9.26755 13.5772C8.94171 13.2514 8.41421 13.2514 8.08921 13.5772L6.91088 14.7556C6.58505 15.0814 6.58505 15.6089 6.91088 15.9339L11.9109 20.9339C12.0675 21.0906 12.2792 21.1781 12.5 21.1781C12.7209 21.1781 12.9334 21.0906 13.0892 20.9339L13.4375 20.5856L8.78588 15.9339Z" fill="black" fillOpacity="0.1"/>
</svg></span>
                            <p className="about__content-center-text">Отличительная черта нашей сети</p>
                        </div>
                        <h4 className="about__content-center-title">Здоровая и полезная продукция <br/> местного производства в наших <br/> магазинах.</h4>
                    </div>
                </div>
                <div className="about__content-bot">
                    <img className="about__content-bot-logo" src={logo} alt=""/>
                    <h3 className="about__content-bot-text">Спасибо за то, что вы с нами. Келечек, везет всегда!</h3>
                </div>
            </div>
        </div>
    );
};

export default About;