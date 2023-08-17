import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {MdFavorite} from 'react-icons/md'
import RatingItem from "../RatingItem";
import {Link, useLocation} from 'react-router-dom'
import {AddProduct} from "../redux/basket";
import {AddFavoriteProduct} from "../redux/favorite";
import {RemoveFavoriteProduct} from "../redux/favorite";


const Product = ({card}) => {
    const basket = useSelector(s => s.reducer.basket.order)
    const favorite = useSelector(s => s.reducer.favorite.products)
    const dispatch = useDispatch()
    const location = useLocation()
    


    return (
            <li  className="products__item">
                {
                    card?.priceSale && <p className="products__priceSale">-50%</p>
                }
                {
                    card?.count && location.pathname === "/order" && <span className="products__count">{card?.count}шт.</span>

                }
                <button onClick={() => {
                    favorite.findIndex((el) => el.id === card.id) > -1 ? dispatch(RemoveFavoriteProduct(card.id)) :
                        dispatch(AddFavoriteProduct(card))}
                }
                        className={`${favorite.findIndex((el) => el.id === card.id) > -1 ? "products__favorites_active" : "products__favorites"}`}><MdFavorite/></button>
                <Link to={`/filterproduct/${card.id}`}>
                    <img className="products__item-img" src={`../${card.image}`} alt=""/>
                </Link>
                <div className="products__item-content">
                    <div className="products__item-price">
                        <h4 className="products__item-price-card">{card.count > 1 ? card.priceCard * card.count : card.priceCard} сом</h4>
                        {
                            card.price && <p className="products__item-price-ordinary">{card.price} сом</p>
                        }
                    </div>
                    {
                        card.price ? <div className="products__item-how">
                            <p className="products__item-how-card">С картой</p>
                            <p className="products__item-how-ordinary">Обычная</p>
                        </div> : <p className="products__item-how-other">Обычная</p>
                    }
                    <p className="products__item-title">{card.title}</p>
                    <RatingItem rating={card.rating}/>
                    <button  disabled={basket.findIndex((el) => el.id === card.id) > -1} onClick={() => dispatch(AddProduct(card))} className="products__item-btn">{
                        basket.findIndex((el) => el.id === card.id) > -1 ? "В корзине" : "В корзину"
                    }</button>
                </div>
            </li>
    );
};

export default Product;