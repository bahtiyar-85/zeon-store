import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavItem, } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/zeon-logo.png';
import search from '../../images/icons/search-icon.png';
import favorite from '../../images/icons/favorite-icon.png';
import shopping from '../../images/icons/shopping-bag.png';
import { useSelector } from 'react-redux';



const Navibar = ({ setSearchValue }) => {
    const [state, setState] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);

    function handleClick() {
        if(state!==''){
            setSearchValue(state);
            if(location.pathname!=='/search') navigate('/search');
        } else {
            alert('Заполните поле ввода!');
        }
    }

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
                <input type="text" 
                    placeholder="Search..." 
                    value={state} 
                    className="form-control"
                    onChange={(e)=> setState(e.target.value)}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                          handleClick();
                        }
                      }}
                />
                <img className='navbar-search-icon' src={search} onClick={()=> handleClick()}/>
            </div>
           
            <Navbar.Collapse className='navbar-items d-flex justify-content-between'>        
                   <span><img className='icon-header' src={favorite} />Избранное</span>
                   <Link to='/cart' style={{ textDecoration: 'none' }}><span className='navbar-cart'><img className='icon-header' src={shopping} /><span className={cart.itemInCart.length>0 ? 'cart-badges' : 'cart-badges__none'}>{cart.itemInCart.length>0 ? cart.itemInCart.length : null}</span> Корзина</span></Link>
            </Navbar.Collapse>
        
        </Navbar>
        </>
    );
};

export default Navibar;