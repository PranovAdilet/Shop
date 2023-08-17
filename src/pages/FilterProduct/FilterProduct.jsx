import React, {useEffect, useState} from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import {useParams, Link} from 'react-router-dom'
import {BsShare} from 'react-icons/bs'
import img from '../../images/filterProduct/image (22).png'
import {BsCart} from 'react-icons/bs'
import {MdFavorite} from 'react-icons/md'
import {FiBellOff} from 'react-icons/fi'
import Reviews from "./Reviews";
import Actions from "../Home/Actions";
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../redux/cards";
import {getProduct} from "../../redux/product";
import Product from "../Product";
import RatingItem from "../../RatingItem";
import AsProducts from "./AsProducts";
import {AddProduct} from "../../redux/basket";
import {AddFavoriteProduct, RemoveFavoriteProduct} from "../../redux/favorite";
import {catalog} from "../../catalog";



const FilterProduct = () => {
    const params = useParams()

    const qwe123 = () => {

    }
    const dispatch = useDispatch()
    const favorite = useSelector(s => s.reducer.favorite.products)


    const {cards,filter} = useSelector(s => s.reducer.cards)
    const basket = useSelector(s => s.reducer.basket.order)
    const {product} = useSelector(s => s.reducer.product)
    useEffect(() => {
        dispatch(getAllCards())
    }, [filter])
    useEffect(()=>{
        dispatch(getProduct(params.id))
        window.scrollTo(0, 0);
    },[params.id])
    const asProducts = cards.filter(item => {
        return item?.title?.toLowerCase().includes(product?.title?.toLowerCase().slice(0, 5))

    })

    const [id, setId] = useState()

    useEffect(() => {
        const idProduct = () => {
            catalog.filter((item) => {
                return  item.title === product.type && setId(item.id)
            })
        }
        idProduct()
    }, [product])




    return (
        <div className="filterProduct">
            <div className="container">
                <div className="filterProduct__row">
                    <div className="catalog__navigation">
                        <Link to="/" className="catalog__navigation-road">Главная</Link>
                        <span className="all__top-icon"><IoIosArrowForward/></span>
                        <Link to="/catalog" className="catalog__navigation-road">Каталог</Link>
                        <span className="all__top-icon"><IoIosArrowForward/></span>
                        <Link to={`/filter/${id}`} className="catalog__navigation-road">
                            {
                                catalog.map((item) =>  {
                                    return item.title === product.type && product.type
                                } )
                            }
                        </Link>

                        <span className="all__top-icon"><IoIosArrowForward/></span>
                        <p className="catalog__navigation-place">{product.title}</p>
                    </div>
                    <h2 className="filterProduct__title">{product.title}</h2>
                    <div className="filterProduct__content">
                        <div className="filterProduct__top">
                            <p className="filterProduct__top-art">арт. 371431</p>
                            <div className="filterProduct__top-reviews">
                                <RatingItem rating={product.rating}/>
                                <p className="filterProduct__top-reviews-text">{product?.comments.length} отзыва </p>
                            </div>
                            <div className="filterProduct__top-block">
                                <span className="filterProduct__top-block-icon"><BsShare/></span>
                                <p className="filterProduct__top-block-text">Поделиться</p>
                            </div>
                            <div className="filterProduct__top-block">
                                <span onClick={() => {
                                    favorite.findIndex((el) => el.id === product.id) > -1 ? dispatch(RemoveFavoriteProduct(product.id)) :
                                        dispatch(AddFavoriteProduct(product))}
                                } className={`${favorite.findIndex((el) => el.id === product.id) > -1 ? "filterProduct__favorites_active" : "filterProduct__favorites"}`}><MdFavorite/></span>
                                <p className="filterProduct__top-block-text">В избраное</p>
                            </div>
                        </div>
                        <div>
                            <div className="filterProduct__bot">
                                <div className="filterProduct__bot-left">
                                    <div className="filterProduct__bot-left-block">
                                        <img className="filterProduct__bot-img" src={`../${product.image}`} alt=""/>
                                        <img className="filterProduct__bot-img" src={`../${product.image}`} alt=""/>
                                        <img className="filterProduct__bot-img" src={`../${product.image}`} alt=""/>
                                        <img className="filterProduct__bot-img" src={`../${product.image}`} alt=""/>
                                        <img className="filterProduct__bot-img" src={`../${product.image}`} alt=""/>
                                        <img className="filterProduct__bot-img" src={`../${product.image}`} alt=""/>
                                    </div>
                                    <div className="filterProduct__bot-left-img">
                                        <img className="filterProduct__bot-img-main" src={`../${product.image}`} alt=""/>
                                    </div>
                                </div>
                                <div className="filterProduct__bot-right">
                                    <div className="filterProduct__bot-right-info">
                                        <div className="filterProduct__bot-right-price-block">
                                            { product.price && <p className="filterProduct__bot-right-price-ordinary">{product.price} с</p>}
                                            <p className="filterProduct__bot-right-price-card">{product.priceCard} с</p>
                                        </div>
                                        <div className="filterProduct__bot-right-text-block2">
                                            <p className="filterProduct__bot-right-text-ordinary">Обычная цена</p>
                                            {
                                                product.price &&  <div className="filterProduct__bot-right-text-block2-block">
                                                    <p className="filterProduct__bot-right-text-ordinary">С картой Келечек</p>
                                                    <span className="filterProduct__bot-right-svg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z" fill="#414141"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 11.5C12.2761 11.5 12.5 11.7239 12.5 12V16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16V12C11.5 11.7239 11.7239 11.5 12 11.5Z" fill="#414141"/>
<path d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" fill="#414141"/>
</svg></span>
                                                </div>
                                            }
                                        </div>
                                        <button disabled={basket.findIndex((el) => el.id === product.id) > -1} onClick={() => dispatch(AddProduct(product))} className="filterProduct__bot-right-btn">
                                            <span className="filterProduct__bot-right-icon"><BsCart/></span>
                                            <p className="filterProduct__btn" >{basket.findIndex((el) => el.id === product.id) > -1 ? "В корзине" : "В корзину"}</p>
                                        </button>

                                        <div className="filterProduct__bot-right-block">
                                            <span className="filterProduct__bot-right-svg"><svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.1883 0.666611H0.811961C0.343143 0.666611 -0.0396916 1.05823 0.0033005 1.52051C0.494639 7.0113 5.67826 11.3333 12.0001 11.3333C18.322 11.3333 23.5056 7.01332 23.997 1.52051C24.0379 1.05823 23.6571 0.666611 23.1883 0.666611Z" fill="#70C05B"/>
</svg></span>
                                            <p className="filterProduct__bot-right-text">Вы получаете 10 бонусов</p>
                                        </div>
                                        <div className="filterProduct__bot-right-block2">
                                            <span className="filterProduct__bot-right-svg2"><FiBellOff/></span>
                                            <p className="filterProduct__bot-right-text2">Уведомить о снижении цены</p>
                                        </div>
                                        <div className="filterProduct__bot-right-bot">
                                            <div className="filterProduct__bot-right-bot-block">
                                                <p className="filterProduct__bot-right-bot-text">Бренд</p>
                                                <p className="filterProduct__bot-right-bot-text2">{product.brand}</p>
                                            </div>
                                            <div className="filterProduct__bot-right-bot-block2">
                                                <p className="filterProduct__bot-right-bot-text">Страна производителя</p>
                                                <p className="filterProduct__bot-right-bot-text2">Кыргызстан</p>
                                            </div>
                                            <div className="filterProduct__bot-right-bot-block">
                                                <p className="filterProduct__bot-right-bot-text">Упаковка</p>
                                                <p className="filterProduct__bot-right-bot-text2">{product.package} г</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filterProduct__similar">
                                        <p className="filterProduct__similar-text">Похожие</p>
                                        <ul className="filterProduct__similar-list">
                                            <AsProducts product={product} asProducts={asProducts}/>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                    <div className="all__content">
                        <div className="all__top">
                            <h2 className="all__title">С этим товаром покупают</h2>
                        </div>
                        <ul className="products__list">
                            {
                                cards.map((card) => (
                                     <Product key={card.id} card={card} />
                                )).filter((_, idx) => idx < 8)
                            }
                        </ul>
                    </div>
                <Reviews product={product}/>
            </div>
            <Actions/>
        </div>
    );
};

export default FilterProduct;