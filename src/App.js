import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css'
import AboutUs from './pages/AboutUs/AboutUs';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>} /> 
          <Route path="/about-us" element={<AboutUs/>} /> 
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
};

export default App;