import React, {useState} from 'react';



const Shops = () => {
    const [place, setPlace] = useState("Бишкек")
    return (
        <div className="shops">
            <div className="container">
                <div className="all__content">
                    <h2 className="all__title specialOffers__title">Наши магазины</h2>
                    <ul className="shops__list">
                        <li onClick={() => setPlace("Бишкек")} className={`shops__item ${place ==="Бишкек" && "shops__item_active"}`}>Бишкек</li>
                        <li onClick={() => setPlace("Ош")} className={`shops__item ${place ==="Ош" && "shops__item_active"}`}>Ош</li>
                        <li onClick={() => setPlace("Баткен")} className={`shops__item ${place ==="Баткен" && "shops__item_active"}`}>Баткен</li>
                        <li onClick={() => setPlace("Талас")} className={`shops__item ${place ==="Талас" && "shops__item_active"}`}>Талас</li>
                    </ul>
                    <div className="shops__map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5a49b7dfd3187a6e462f67a1160e96dc40ef5fa3629d1b27fdc3affa4394e5b0&amp;source=constructor"
                            width="1200" height="400" frameBorder="0"></iframe>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shops;