import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartOrder from '../../components/CartOrder/CartOrder';
import CartItem from '../../components/CartItem/CartItem';
import OrderingModal from '../../components/OrderingModal/OrderingModal';
import ThankModal from '../../components/ThankModal/ThankModal';
import './CartPage.css';


const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalSale, setTotalSale] = useState(0);
    const [totalOrder, setTotalOrder] = useState(0);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    return (
        <div className='cart-page container'>
            <div className='cart-page-list'>
                {cart.itemInCart.map((item, index)=> (
                    <CartItem key={index} setTotalOrder={setTotalOrder} setTotalPrice={setTotalPrice} setTotalSale={setTotalSale}  {...item}/>
                ))}
            </div>
            <div className="cart-page-order">
                <CartOrder totalPrice={totalPrice} totalOrder={totalOrder} totalSale={totalSale} handleShow={handleShow}/>
            </div>
            <OrderingModal show={show} setShow={setShow} handleShowModal={handleShowModal}/>
            <ThankModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    );
};

export default CartPage;