import React from 'react';
import Card from '../../images/specialOffers/Карта лояльности-10 1.png'
import background from '../../images/specialOffers/banner.png'

const SpecialOffers = () => {
    return (
        <div className="specialOffers">
            <div className="container">
                <h2 className="all__title specialOffers__title">Специальные предложения</h2>
                <div className="specialOffers__content">
                    <div className="specialOffers__content-left">
                        <div className="specialOffers__group">
                            <h3 className="specialOffers__subtitle">Оформите карту «Келечек»</h3>
                            <p className="specialOffers__text">И получайте бонусы при покупке в магазинах и на сайте</p>
                        </div>
                        <img className="specialOffers__img" src={Card} alt=""/>
                    </div>
                    <div className="specialOffers__content-right">
                        <div className="specialOffers__group">
                            <h3 className="specialOffers__subtitle">Покупайте <br/> акционные товары</h3>
                            <p className="specialOffers__text">И получайте вдвое больше <br/> бонусов</p>
                        </div>
                        <img className="specialOffers__background" src={background} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;