import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './RequestCall.css';

const RequestCall = ({show, setShow, handleShowModal}) => {
  

  const handleClose = () => setShow(false);

  const handleClick = () => {
        handleClose();
        handleShowModal();
}

  return (
    <>
      <Modal show={show} onHide={handleClose} className='modal-request'>
        <Modal.Header closeButton>
            <h5>Если у вас Остались вопросы</h5>
        </Modal.Header>
        <Modal.Body >
            <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
            <input className='' placeholder='Как к Вам обращаться?'></input><br/>
            <input className='' placeholder='Номер телефона'></input><br/>
            <button className='modal-request__btn' onClick={handleClick}>Заказать звонок</button>
        </Modal.Body>
      </Modal>
    </>
     );
};

export default RequestCall;