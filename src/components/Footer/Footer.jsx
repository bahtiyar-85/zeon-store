import React from 'react';
import './Footer.css'
import logo from '../../images/logo2.png';
import telegram from '../../images/icons/telegram.png';
import instagram from '../../images/icons/instagram.png';
import phone from '../../images/icons/phone.png';
import email from '../../images/icons/email.png';
import whatsup from '../../images/icons/whatsup.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className='d-flex flex-wrap justify-content-between me-5'>
                    <div className='footer-logo'>
                        <img src={logo} alt='Логотип'/>
                    </div>
                    <div className='footer-items '>
                        <ul className='footer-list'>
                            <li><span  className='footer-title'>Компания</span></li>
                            <Link to='/about-us' style={{ textDecoration: 'none' }}><li>О нас</li></Link>
                            <Link to='/news' style={{ textDecoration: 'none' }}><li>Новости</li></Link>
                            <Link to='/help'  style={{ textDecoration: 'none' }}><li>Помощь</li></Link>
                        </ul>
                    </div>
                    <div className='footer-items'>
                        <ul className='footer-list'>
                            <li><span className='footer-title'>Контакты</span></li>
                            <li><img src={phone} alt=''/>+996 500 123 456</li>
                            <li><img src={phone} alt=''/>+996 500 123 456</li>
                            <li><img src={email} alt=''/>mail@gmail.com</li>
                        </ul>
                    </div>
                    <div className='footer-items'>
                        <ul className='footer-list'>
                            <li><span  className='footer-title'>Мы в социальных сетях:</span></li>
                            <li><img src={instagram} alt=''/>Instagram</li>
                            <li><img src={telegram} alt=''/>Telegram</li>
                            <li><img src={whatsup} alt=''/>Whatsapp </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-3'>
                    <span className='footer-span'>Developed by Zeon 2022</span>
                </div>
            </Container>
        </div>
    );
};

export default Footer;