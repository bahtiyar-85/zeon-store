import React from 'react';
import icon from '../../images/icons/icon5.png';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ThankModal.css';



const ThankModal = ({showModal, setShowModal}) => {
    const navigate = useNavigate();
    const handleCloseModal = () =>{
        setShowModal(false);
        navigate('/');
    } 
   
    return (
        <>
        <Modal show={showModal} onHide={handleCloseModal} className='thank-modal'>
                <Modal.Body >
                    <img src={icon} alt=''/>
                    <h5>Спасибо!</h5>
                    <p>Ваша заявка была принята ожидайте, скоро Вам перезвонят</p>
                    <button className='thank-modal__btn' onClick={handleCloseModal}>Продолжить покупки</button>
                </Modal.Body>
        </Modal> 
        </>
    );
};

export default ThankModal;