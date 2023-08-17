import React from 'react';
import {catalog} from "../../catalog";
import {Link} from 'react-router-dom'
import Filter from "../Filter/Filter";

const CatalogContent = () => {
    return (
        <div className="catalog__content">
            <h2 className="catalog__title">Каталог</h2>
            <div className="catalog__categories">
                {
                    catalog.map(item => (
                        <Link  to={`/filter/${item.id}`} className="catalog__category">
                            <img  className={item.width === "small" ? "catalog__category-img": "catalog__category-img-big"} src={item.img} alt=""/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default CatalogContent;