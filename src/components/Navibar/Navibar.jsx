import React from 'react';
import { Navbar, NavbarBrand, NavItem, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navibar = () => {

    return (
        <>
        <Navbar bg="#ffffff"  expand="sm">
           
            <div className='d-flex justify-content-between align-items-center navbar-item'>
                <div>
                    <Navbar.Collapse > 
                        <span className="me-3">О нас</span>
                        <span className="me-3">Коллекция</span>
                        <span className="me-3">Новости</span>
                    </Navbar.Collapse> 
                </div>
                <span>Тел: +996 000 00 00 00</span>
            </div>  
        </Navbar>   
      
        <Navbar bg="#ffffff"  expand="sm d-flex justify-content-between">
            <Navbar.Toggle aria-controls="navbarScroll" /> 
            <NavbarBrand className='navbar-logo'>
                <Link to="/"><img className="navbar-logo-img" src="./images/zeon-logo.png" alt="logo"/></Link>
            </NavbarBrand>
            <div className='navbar-search me-3'>
                <input type="text" placeholder="Search..." className="form-control"/>
                <img className='navbar-search-icon' src='./images/search-icon.png'/>
            </div>
           
            <Navbar.Collapse className='navbar-items d-flex justify-content-between'>        
                   <span><img className='icon-header' src='./images/favorite-icon.png'/>Избранное</span>
                   <span><img className='icon-header' src='./images/shopping-bag.png'/>Корзина</span>
            </Navbar.Collapse>
        
        </Navbar>
        </>
    );
};

export default Navibar;