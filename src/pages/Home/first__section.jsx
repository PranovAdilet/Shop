import React from 'react';
import background from '../../images/first__section/Sliders .png'
import food from '../../images/first__section/img.png'

const FirstSection = () => {
    return (
        <div className="first__section">
            <img className="first__section-background" src={background} alt=""/>
            <div className="container">
                <div className="first__section-content">
                    <img className="first__section-img" src={food} alt=""/>
                    <h2 className="first__section-title">Доставка бесплатно от 1000 сом</h2>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;