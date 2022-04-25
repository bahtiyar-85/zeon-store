import React from 'react';
import { Badge, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import favorite from '../../images/icons/favorite-icon.png';
import shopping from '../../images/icons/shopping-bag.png';
import './CollapseModal.css';

const CollapseModal = ({show, setShow}) => {

    const cart = useSelector((state) => state.cart);
    const favorit = useSelector((state) => state.favorite);
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} className='collapse-modal'>
          <Modal.Header closeButton>
            <Modal.Title><h5>Меню</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <div className='collapse-modal'>
                    <Link to='/about-us' style={{ textDecoration: 'none' }}>
                        <span className="">О нас</span>
                    </Link>
                    <Link to='/collections' style={{ textDecoration: 'none' }}>
                        <span className="">Новости</span>
                    </Link>   
                    <Link to='/collections' style={{ textDecoration: 'none' }}>
                        <span className="">Коллекция</span>
                    </Link>

                    <Link to='/favorite' style={{ textDecoration: 'none' }} className='modal-border'>
                        <span className='navbar-fav '>
                            <img className='icon-header' src={favorite} />
                            <Badge>{favorit.prodFav.length}</Badge>Избранное
                        </span>
                    </Link>
                    
                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                        <span className='navbar-cart '>
                            <img className='icon-header' src={shopping} />
                            <span className={cart.itemInCart.length>0 ? 'cart-badges' : 'cart-badges__none'}>
                                {cart.itemInCart.length>0 ? cart.itemInCart.length : null}
                            </span> 
                            Корзина
                        </span>
                    </Link>
                   
                </div>
                <div className='collapse-modal-phone'>
                        <span>Свяжитесь с нами:</span>
                        <a href='tel:+996 000 00 00 00' style={{ textDecoration: 'none' }}>
                            <span>Тел: +996 000 00 00 00</span>
                        </a>
                    </div>
          </Modal.Body>
        </Modal>
    );
};

export default CollapseModal;