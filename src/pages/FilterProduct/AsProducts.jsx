import React from 'react';
import img from "../../images/filterProduct/image (22).png";
import {useNavigate} from 'react-router-dom'

const AsProducts = ({asProducts, product}) => {
    const navigate = useNavigate()


    return (
        <div className="filterProduct__similar-list">
            {
                asProducts.map(item => item.id !== product.id && (
                    <li key={item.id} onClick={() =>{
                        navigate(`/filterproduct/${item.id}`)
                    }} className="filterProduct__similar-card">
                        <img className="filterProduct__similar-img" src={`../${item.image}`} alt=""/>
                        <p className="filterProduct__similar-price">{item.priceCard} с</p>
                    </li>
                ) ).filter((item, idx) => idx < 4)
            }

        </div>
    );
};

export default AsProducts;