import React, {useEffect, useState} from 'react';
import {GrMenu} from 'react-icons/gr'
import {BsSearch, BsCart} from 'react-icons/bs'
import {VscHeart} from 'react-icons/vsc'
import {IoCubeOutline} from 'react-icons/io5'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {Link, useNavigate, NavLink} from 'react-router-dom'
import {catalog} from "../../catalog";
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../redux/cards";
import {AddInputText, ClearInputText, ValueInputText} from "../../redux/search";
import {openPopup, closePopup, changeStatus} from "../../redux/popup";
import Popup from "../../components/Popup/Popup";
import {LogOutUser} from "../../redux/user";
import {GrMoney} from 'react-icons/gr'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'


const Header = () => {

    const {user} = useSelector(s => s.reducer.user)

    const {active} = useSelector(s => s.reducer.popup)

    const {input, valueInput} = useSelector(s => s.reducer.search)

    const {cards} = useSelector(s => s.reducer.cards)

    const basket = useSelector(s => s.reducer.basket.order)

    const [userMenu, setUserMenu] = useState( false)

    const [catalogMenu, setCatalogMenu] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllCards())
        ClearInputText()
        dispatch(closePopup())
    }, [input]);

    const onCLickSearchProduct = (e) => {
        navigate(`filterproduct/${e.id}`)
        dispatch(ClearInputText())
    }



    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                   <div className="header__content-left">
                        <Link to="/" className="header__logo">
                        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.6689 16.819H4.28623C3.62872 16.819 3.09179 17.3764 3.15209 18.0343C3.84119 25.8488 11.1112 31.9999 19.9776 31.9999C28.844 31.9999 36.1139 25.8517 36.803 18.0343C36.8605 17.3764 36.3264 16.819 35.6689 16.819Z" fill="#FF6633"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0.225147 3.33137C1.7887 1.27854 4.60645 0 7.711 0C10.8155 0 13.6333 1.27854 15.1969 3.33137C15.5659 3.81589 15.4714 4.50716 14.9858 4.87537C14.5001 5.24357 13.8073 5.14928 13.4383 4.66476C12.3661 3.25707 10.2569 2.20377 7.711 2.20377C5.16509 2.20377 3.05591 3.25707 1.98374 4.66476C1.6147 5.14928 0.921857 5.24357 0.436236 4.87537C-0.0493858 4.50716 -0.143894 3.81589 0.225147 3.33137Z" fill="#414141"/>
<path fillRule="evenodd" clipRule="evenodd" d="M24.7671 3.33137C26.3307 1.27854 29.1484 0 32.253 0C35.3552 0 38.1721 1.27884 39.7381 3.33045C40.1077 3.81458 40.0139 4.50596 39.5287 4.87467C39.0434 5.24338 38.3505 5.14981 37.981 4.66568C36.9055 3.25676 34.7955 2.20377 32.253 2.20377C29.7071 2.20377 27.5979 3.25707 26.5257 4.66476C26.1567 5.14928 25.4638 5.24357 24.9782 4.87537C24.4926 4.50716 24.3981 3.81589 24.7671 3.33137Z" fill="#414141"/>
</svg>
                         </Link>
                       <h1 className="header__title">КЕЛЕЧЕК</h1>
                   </div>
                    <div onClick={() => navigate("/catalog")} onMouseEnter={() => setCatalogMenu(true)} className="header__content-center">
                        <span className="header__catalog-svg"><GrMenu/></span>
                        <p className="header__catalog">Каталог</p>
                    </div>
                        <label className="header__label">
                            <input value={input} onChange={(e) => {
                                dispatch(AddInputText(e.target.value))
                            }} className="header__input" placeholder="Найти товар" type="search"/>
                            <button type="button" onClick={() => {
                                dispatch(ValueInputText(input))
                                dispatch(ClearInputText())
                                navigate('/search')
                            }} className="header__search"><BsSearch/></button>
                            <div className="header__search-list">
                                {
                                    input && cards.filter((el) => {
                                        return el?.title?.toLowerCase()?.includes(input?.toLowerCase())
                                    }).map((item) => (
                                        <p onClick={() => {
                                           onCLickSearchProduct(item)
                                        }} className="header__search-text">{item.title.toLowerCase().slice(0, 35)}...</p>
                                    )).filter((_, idx) => idx < 5)
                                }
                            </div>
                        </label>
                    <ul className="header__list">
                        <NavLink to="favorite" className="header__item">
                           <span className="header__item-icon"><VscHeart/></span>
                            <p className="header__item-text">Избранное</p>
                        </NavLink>
                        <NavLink to="order" className="header__item">
                            <span className="header__item-icon"><IoCubeOutline/></span>
                            <p className="header__item-text">Заказы</p>
                        </NavLink>
                        <NavLink to="basket" className="header__item">
                            <span className="header__basketLength">{basket.length}</span>
                            <span className="header__item-icon"><BsCart/></span>
                            <p className="header__item-text">Корзина</p>
                        </NavLink>
                    </ul>
                    <div className="header__content-right">
                        {
                            user.email && <img className="header__img" src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt=""/>
                        }
                        {
                            user.email ? <p className="header__user-name">{user.name}</p> : <p onClick={() => dispatch(openPopup())} className="header__signIn">Войти</p>
                        }
                        <span onClick={() => setUserMenu(!userMenu)} className="header__arrow"><MdOutlineKeyboardArrowDown/></span>
                        {
                            user.email &&  userMenu &&  <div className="header__right-list">
                                <p className="header__name">Баланс <span><GrMoney/></span> : {user.balance}сом</p>
                                <p className="header__name">Номер телефона <span><BsFillTelephoneFill/></span>  : {user.phone}</p>

                                <div onClick={() => {
                                    navigate("/favorite")
                                    setUserMenu(false)
                                }
                                } className="header__menu-block">
                                    <p  className=" header__link">Избранное </p>
                                    <span className="header__menu-favorite"><VscHeart/></span>
                                </div>
                                <div onClick={() => {
                                    navigate("/order")
                                    setUserMenu(false)
                                }}  className="header__menu-block">
                                    <p className=" header__link">Заказы </p>
                                    <span className=""><IoCubeOutline/></span>
                                </div>
                                <div onClick={() => {
                                    navigate("/basket")
                                    setUserMenu(false)}
                                }  className="header__menu-block">
                                    <p className=" header__link">Корзина </p>
                                    <span className=""><BsCart/></span>
                                </div>
                                <div onClick={() => {
                                    setUserMenu(false)
                                    dispatch(LogOutUser())
                                }}  className="header__menu-block">
                                    <p className="header__logout">Выход </p>
                                    <span><FiLogOut/></span>
                                </div>



                            </div>
                        }
                    </div>

                </div>
            </div>
            {catalogMenu && <div onMouseLeave={() => setCatalogMenu(false)}  className="catalogMenu">
                <div className="container">
                    <div className="catalogMenu__content">
                        <div className="catalogMenu__list">
                        {
                            catalog.map(item => (
                                <Link to={`/filter/${item.id}`} key={item.id} className={item.margin ? "catalogMenu__item-margin" : "catalogMenu__item "}>{item.title}</Link>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>}
            {
                active && <Popup/>
            }
        </header>
    );
};

export default Header;

