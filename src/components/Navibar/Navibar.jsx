import React, { useEffect, useState } from 'react';
import { Badge, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/zeon-logo.png';
import search from '../../images/icons/search-icon.png';
import favorite from '../../images/icons/favorite-icon.png';
import shopping from '../../images/icons/shopping-bag.png';
import { useDispatch, useSelector } from 'react-redux';
import NavbarCollapse from '../NavbarCollapse/NavbarCollapse';
import axios from 'axios';
import { PRODUCTS_API } from '../../helpers/consts';
import { removeUser } from '../../store/userSlice';
import './Navbar.css';



const Navibar = ({ setSearchValue, handleShow }) => {
    const [state, setState] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const favorit = useSelector((state) => state.favorite);
    const {email} = useSelector((state) => state.user);
    const [searchResult, setSearchResult] = useState([]);
    const [dropdownShow, setDropdownShow] = useState(false);
    const dispatch = useDispatch();
    
    function handleClick() {
        if(state!==''){
            setSearchValue(state);
            setState('');
            setDropdownShow(false);
            if(location.pathname!=='/search') navigate('/search');
        } else {
            alert('Заполните поле ввода!');
        }
    }
     async function getSearchQuery(){
        try {
            let result = await axios.get(`${PRODUCTS_API}?title=${state}`);
           
            if(result.data.length>0) {
                const mySet = new Set();
                result.data.forEach(item=> {
                    mySet.add(item.title)
                })
                setSearchResult([...mySet]);
            } else setSearchResult([]);
            
        } catch (error) {
            setSearchResult([]);
            console.error(error)
        } 
     }

    useEffect(()=>{
        if(state.length>2) getSearchQuery();
    },[state]);

    return (
        <>
        <Navbar bg="#ffffff"  expand="sm" className='navbar-list-hide'>
           
            <div className='d-flex justify-content-between align-items-center navbar-item'>
                <div>
                    <Navbar.Collapse > 
                        <Link to='/about-us' style={{ textDecoration: 'none' }}><span className="me-3">О нас</span></Link>
                        <Link to='/collections' style={{ textDecoration: 'none' }}><span className="me-3 ">Коллекция</span></Link>
                        <Link to='/news' style={{ textDecoration: 'none' }}><span className="me-3 ">Новости</span></Link>
                    </Navbar.Collapse> 
                </div>
                <div>
                <a href='tel:+996 000 00 00 00' style={{ textDecoration: 'none' }}><span>Тел: +996 000 00 00 00</span></a>
                <button className='navbar-btn__login' onClick={email ? () => dispatch(removeUser()): handleShow }>
                    {email ? "Выйти" : "Войти"}
                </button>
                </div>
               
            </div>  
        </Navbar>   
      
        <Navbar bg="#ffffff"  expand="sm"  className="d-flex nabvar-logo-search justify-content-between">
            <Navbar.Toggle aria-controls="navbarScroll" /> 
            <NavbarBrand className='navbar-logo'>
                <Link to="/"><img className="navbar-logo-img" src={logo} alt="logo"/></Link>
            </NavbarBrand>
            <div className='navbar-search me-3'>
                <input type="text" 
                    placeholder="Поиск..." 
                    value={state} 
                    className="form-control"
                    onFocus={()=> setDropdownShow(true)}
                    onChange={(e)=> setState(e.target.value)}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                          handleClick();
                        }
                      }}
                />
                <img className='navbar-search-icon' src={search} onClick={handleClick}/>
                {dropdownShow && (
                    <div className='dropdown-list'>
                        {
                        searchResult?.map((item, index)=>(
                            <div className='dropdown-items' key={index} onClick={()=> {
                                setState(item);
                                setDropdownShow(false);
                                }}>
                                {item} 
                            </div>
                        ))  
                        }
                    </div>
                )}
            </div>
            <Navbar.Collapse className='navbar-items d-flex justify-content-between'>
                <Link to='/favorite' style={{ textDecoration: 'none' }}>
                    <span className='navbar-fav'>
                        <img className='icon-header' src={favorite} />
                        {favorit.prodFav.length ? (
                            <Badge>{favorit.prodFav.length}</Badge>
                        ) :(null)}Избранное
                    </span>
                </Link>
                <Link to='/cart' style={{ textDecoration: 'none' }}>
                    <span className='navbar-cart'>
                        <img className='icon-header' src={shopping} />
                        <span className={cart.itemInCart.length>0 ? 'cart-badges' : 'cart-badges__none'}>
                            {cart.itemInCart.length>0 ? cart.itemInCart.length : null}
                        </span> Корзина
                    </span>
                </Link>
            </Navbar.Collapse >               
        
        </Navbar>
        <NavbarCollapse 
            setSearchValue={setSearchValue}
        />
        </>
    );
};

export default Navibar;