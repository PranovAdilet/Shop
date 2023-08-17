import React, {useEffect} from 'react';
import FirstSection from "./first__section";
import Actions from "./Actions";
import Novelties from "./Novelties";
import Bought from "./Bought";
import SpecialOffers from "./SpecialOffers";
import Shops from "./Shops";
import Articles from "./Articles";
import ScrollButton, {ScrollToTopOnMount} from "../../scrollTop";


const Home = () => {
    ScrollToTopOnMount()

    return (
        <div className="home">
            <FirstSection/>
            <Actions/>
            <Novelties/>
            <Bought/>
            <SpecialOffers/>
            <Shops/>
            <Articles/>
            <ScrollButton />
        </div>
    );
};

export default Home;