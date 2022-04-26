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
            <div className='container'>
                <div className='me-5 footer-contant'>
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
                            <a href='tel:+996 500 123 456' style={{ textDecoration: 'none' }}><li><img src={phone} alt=''/>+996 500 123 456</li></a>
                            <a href='tel:+996 500 123 456' style={{ textDecoration: 'none' }}><li><img src={phone} alt=''/>+996 500 123 456</li></a>
                            <a href='mailto:mail@gmail.com' style={{ textDecoration: 'none' }}><li><img src={email} alt=''/>mail@gmail.com</li></a>
                        </ul>
                    </div>
                    <div className='footer-items'>
                        <ul className='footer-list'>
                            <li><span  className='footer-title'>Мы в социальных сетях:</span></li>
                            <a href='https://www.instagram.com/' style={{ textDecoration: 'none' }}><li><img src={instagram} alt=''/>Instagram</li></a>
                            <a href='https://web.telegram.org/z/' style={{ textDecoration: 'none' }}><li><img src={telegram} alt=''/>Telegram</li></a>
                            <a href='https://web.whatsapp.com/' style={{ textDecoration: 'none' }}><li><img src={whatsup} alt=''/>Whatsapp </li></a>
                        </ul>
                    </div>
                </div>
                <div className='mt-3 footer-dev'>
                    <span className='footer-span'>Developed by Zeon 2022</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;