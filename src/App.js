import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import Collections from './pages/Collections/Collections';
import News from './pages/News/News';
import Help from './pages/Help/Help';
import ProductPage from './pages/ProductPage/ProductPage';
import CollectionPage from './pages/CollectionPage/CollectionPage';
import SearchPage from './pages/SearchPage/SearchPage';
import { Provider } from 'react-redux';
import { store } from './store';
import CartPage from './pages/CartPage/CartPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import 'swiper/css';
import OfferPage from './pages/OfferPage/OfferPage';
import './App.css';


const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchDropdown, setSearchDropdown] = useState([]);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header setSearchValue={setSearchValue} searchDropdown={searchDropdown}/>
          <Routes>
            <Route path="/" element={<Main/>} /> 
            <Route path="/about-us" element={<AboutUs/>} /> 
            <Route path="/collections" element={<Collections/>} /> 
            <Route path="/news" element={<News/>} /> 
            <Route path="/help" element={<Help/>} /> 
            <Route path="/product/:id" element={<ProductPage/>} /> 
            <Route path="/collection/:id" element={<CollectionPage/>} /> 
            <Route path="/search" element={<SearchPage searchValue={searchValue} setSearchDropdown={setSearchDropdown}/>} /> 
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/favorite" element={<FavoritePage/>} />
            <Route path="/offer" element={<OfferPage/>} /> 
          </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;