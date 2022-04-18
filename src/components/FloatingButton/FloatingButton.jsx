import React, { useEffect, useState } from 'react';
import './FloatingButton.css';
import chat from '../../images/icons/chat.png';
import arrow from '../../images/icons/arrow.png';
import cross from '../../images/icons/cross.png';
import whatsup from '../../images/icons/whatsapp2.png';
import telegram from '../../images/icons/telegram2.png';
import phone from '../../images/icons/telephone2.png';
import RequestCall from '../RequestCall/RequestCall';
import ThankModal from '../ThankModal/ThankModal';

const FloatingButton = () => {

    const [state, setState] = useState(true);
    const [showTopBtn, setShowTopBtn] = useState(false);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      });
    }, []);
    const goToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    //   window.scrollBy(0, -100);
    };

    return (
        
        <div className='floating-button d-flex flex-row'>
            {state ? null : (
            <div className='d-flex align-items-end'>
                <a  href='https://web.telegram.org/z/'><img src={telegram} alt='' className='me-1'/></a>
                <a  href='https://web.whatsapp.com/'><img src={whatsup} alt='' className='me-1'/></a>
                <img src={phone} alt='' className='me-1' onClick={handleShow}/>
                <RequestCall show={show} setShow={setShow} handleShowModal={handleShowModal}/>
                <ThankModal showModal={showModal} setShowModal={setShowModal}/>
            </div>
            )}
            <div className=' float-items'>
                <div className='float-bt__chat' >
                    <img src={arrow} alt='' onClick={goToTop}/>
                </div>
                { state ? (
                    <div className='float-bt__chat' onClick={()=>setState(!state)}>
                        <img src={chat} alt=''/>
                    </div>
                ) : (
                    <div className='float-bt__chat' onClick={()=>setState(!state)}>
                        <img src={cross} alt=''/>
                    </div>               
                )}
            </div>
           
        </div>
    );
};

export default FloatingButton;