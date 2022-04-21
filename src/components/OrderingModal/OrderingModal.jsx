import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './OrderingModal.css';

const OrderingModal = ({show, setShow, handleShowModal}) => {
    

    const handleClose = () => setShow(false);
    
    function handleOrdering(e){
        e.preventDefault();
        handleClose();
        handleShowModal();  
    }
    return (
      <>
  
        <Modal show={show} onHide={handleClose} className='ordering-modal'>
          <Modal.Header closeButton>
            <Modal.Title><h5>Оформление заказа</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
                <span>Ваше имя</span>
                <input type='text' placeholder='Например Иван'/>
                <span>Ваше фамилия</span>
                <input type='text' placeholder='Например Иванов'/>
                <span>Электронная почта </span>
                <input type='email' placeholder='example@mail.com'/>
                <span>Ваш номер телефона</span>
                <input type='phone' placeholder='Введите номер телефона'/>
                <span>Страна</span>
                <input type='text' placeholder='Введите страну'/>
                <span>Город</span>
                <input type='text' placeholder='Введите город'/>
                <div className='ordering-model-check'>
                <input  type='checkbox' className='ordering-model-checkbox'/><span>Согласен с условиями <a href=''>публичной оферты</a></span>
                </div>
                <button className='ordering-modal-btn' onClick={(e)=>handleOrdering(e)}>Заказать</button>
             </form>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default OrderingModal;