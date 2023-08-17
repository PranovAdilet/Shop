import React from "react";
import './scss/scss.scss'
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import Filter from "./pages/Filter/Filter";
import FilterProduct from "./pages/FilterProduct/FilterProduct";
import Vacancies from "./pages/Vacancies/Vacancies";
import Order from "./pages/Order/Order";
import Favorite from "./pages/Favorite/Favorite";
import Basket from "./pages/Basket/Basket";
import About from "./pages/About/About";
import Contact from "./pages/Contacts/Contact";
import Search from "./pages/Search/Search";
import ActionPage from "./pages/ActionPage/ActionPage";
import NoveltiesPage from "./pages/NoveltiesPage/NoveltiesPage";
import BoughtPage from "./pages/BoughtPage/BoughtPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import Delivery from "./pages/Basket/Delivery";

function App() {


  return (
    <div className="App">
        <Header/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="catalog" element={<Catalog/>}/>
            <Route path="filter/:id" element={<Filter/>}/>
            <Route path="filterproduct/:id" element={<FilterProduct/>}/>
            <Route path="vacancies" element={<Vacancies/>}/>
            <Route path="order" element={<Order/>}/>
            <Route path="favorite" element={<Favorite/>}/>
            <Route path="basket" element={<Basket/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contacts" element={<Contact/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="action" element={<ActionPage/>}/>
            <Route path="novelties" element={<NoveltiesPage/>}/>
            <Route path="bought" element={<BoughtPage/>}/>
            <Route path="articles" element={<ArticlesPage/>}/>
            <Route path="delivery" element={<Delivery/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
