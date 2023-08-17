import React from 'react';
import {IoIosArrowForward} from 'react-icons/io'
import CatalogContent from "./Catalog__content";
import {Link} from 'react-router-dom'

const Catalog = () => {
    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog__navigation">
                    <Link to="/" className="catalog__navigation-road">Главная</Link>
                    <span className="all__top-icon"><IoIosArrowForward/></span>
                    <p className="catalog__navigation-place">Каталог</p>
                </div>
               <CatalogContent/>
            </div>
        </div>
    );
};

export default Catalog;