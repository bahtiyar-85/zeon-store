import React from 'react';
import { Navbar, NavbarBrand, NavItem, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/zeon-logo.png';
import search from '../../images/icons/search-icon.png';
import favorite from '../../images/icons/favorite-icon.png';
import shopping from '../../images/icons/shopping-bag.png';



const Navibar = () => {

    return (
        <>
        <Navbar bg="#ffffff"  expand="sm">
           
            <div className='d-flex justify-content-between align-items-center navbar-item'>
                <div>
                    <Navbar.Collapse > 
                        <Link to='/about-us' style={{ textDecoration: 'none' }}><span className="me-3">О нас</span></Link>
                        <Link to='/collections' style={{ textDecoration: 'none' }}><span className="me-3 ">Коллекция</span></Link>
                        <Link to='/news' style={{ textDecoration: 'none' }}><span className="me-3 ">Новости</span></Link>
                    </Navbar.Collapse> 
                </div>
                <a href='tel:+996 000 00 00 00' style={{ textDecoration: 'none' }}><span>Тел: +996 000 00 00 00</span></a>
            </div>  
        </Navbar>   
      
        <Navbar bg="#ffffff"  expand="sm d-flex justify-content-between">
            <Navbar.Toggle aria-controls="navbarScroll" /> 
            <NavbarBrand className='navbar-logo'>
                <Link to="/"><img className="navbar-logo-img" src={logo} alt="logo"/></Link>
            </NavbarBrand>
            <div className='navbar-search me-3'>
                <input type="text" placeholder="Search..." className="form-control"/>
                <img className='navbar-search-icon' src={search} />
            </div>
           
            <Navbar.Collapse className='navbar-items d-flex justify-content-between'>        
                   <span><img className='icon-header' src={favorite} />Избранное</span>
                   <span><img className='icon-header' src={shopping} />Корзина</span>
            </Navbar.Collapse>
        
        </Navbar>
        </>
    );
};

export default Navibar;