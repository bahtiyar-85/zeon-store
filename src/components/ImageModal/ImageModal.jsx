import React from 'react';
import './ImageModal.css';
import cross from '../../images/icons/cross.png';
import { Modal } from 'react-bootstrap';

const ImageModal = ({showModal, setShowModal, currentImage}) => {
    const handleCloseModal = () =>setShowModal(false);
    return (
        <Modal show={showModal} onHide={handleCloseModal} className='image-modal'>
            <Modal.Body >
                <img className='image-modal-img' src={currentImage} alt=''/>
                <img className='image-modal-cross' src={cross} alt='' onClick={handleCloseModal}/>
            </Modal.Body>
        </Modal> 
    );
};

export default ImageModal;