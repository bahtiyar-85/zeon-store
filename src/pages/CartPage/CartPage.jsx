import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartOrder from '../../components/CartOrder/CartOrder';
import CartItem from '../../components/CartItem/CartItem';
import OrderingModal from '../../components/OrderingModal/OrderingModal';
import ThankModal from '../../components/ThankModal/ThankModal';
import './CartPage.css';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';



const CartPage = () => {
    const {itemInCart} = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalSale, setTotalSale] = useState(0);
    const [totalOrder, setTotalOrder] = useState(0);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    return (
        <div className='cart-page__bg'>
            <div className='cart-page container pt-3 '>
                {itemInCart.length===0 && (
                    <div className='w-100'>
                    <h2 className='title '>Корзина</h2>
                    <h5 className='cart-title__empty'>У Вас пока нет товаров в корзине</h5>
                    <SimilarProducts title={'Возможно Вас заинтересует'}/>
                    </div>
                )}
                {itemInCart.length>0 && (
                    <div className='cart-page-list me-3'>
                        {itemInCart.map((item, index)=> (
                            <CartItem key={index} setTotalOrder={setTotalOrder} setTotalPrice={setTotalPrice} setTotalSale={setTotalSale}  {...item}/>
                        ))}
                    </div>
                )}
                {itemInCart.length>0 && (
                    <div className="cart-page-order">
                        <CartOrder totalPrice={totalPrice} totalOrder={totalOrder} totalSale={totalSale} handleShow={handleShow}/>
                    </div>
                )}
                <OrderingModal show={show} setShow={setShow} handleShowModal={handleShowModal}/>
                <ThankModal showModal={showModal} setShowModal={setShowModal}/>
                <FloatingButton/>
            </div>
        </div>
    );
};

export default CartPage;