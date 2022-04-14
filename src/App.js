import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import Collections from './pages/Collections/Collections';
import News from './pages/News/News';
import Help from './pages/Help/Help';
import './App.css'
import ProductPage from './pages/ProductPage/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>} /> 
          <Route path="/about-us" element={<AboutUs/>} /> 
          <Route path="/collections" element={<Collections/>} /> 
          <Route path="/news" element={<News/>} /> 
          <Route path="/help" element={<Help/>} /> 
          <Route path="/product/:id" element={<ProductPage/>} /> 
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
};

export default App;