import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import './App.css'
import Main from './pages/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} /> 
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;