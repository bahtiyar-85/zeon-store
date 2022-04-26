import React from 'react';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import image1 from '../../images/about-image1.png';
import image2 from '../../images/about-image2.png';
import image3 from '../../images/about-image3.png';
import './AboutUs.css';


const AboutUs = () => {
    return (
        <div className='container'>
            <div className='about-us d-flex justify-content-between '>
                <div className='about-us-images d-flex'>
                    <div className='about-us-images__left'>
                        <img className='' src={image1} alt=''/>
                        <img className='' src={image2} alt=''/>
                    </div>
                    <div className='about-us-images__right d-flex align-items-center'>
                        <img  className='' src={image3} alt=''/>
                    </div>
                </div>  
                <div className='about-us-items d-flex align-items-center'>
                    <div className='w-100'>
                        <span>О нас</span>
                        <p>У нас Вы найдёте всё, что Вам так нужно. Ассортимент магазина постоянно расширяется и дополняется в зависимости от пожеланий клиентов. Женская одежда из наших коллекций – это комфортная, стильная и качественная одежда не только на каждый день, но и для любых ситуаций по доступным ценам.Натуральные материалы, продуманные силуэты, современный дизайн и возможность легкого сочетания моделей помогут Вам всегда оставаться в центре внимания и чувствовать себя уместно в любой ситуации.Если Вы любите одеваться ярко, модно и оригинально, у нас Вы найдете все необходимое, чтобы всегда быть в центре внимания. У нас большая коллекция для любого торжества и праздника, которая сможет удовлетворить вкус самой взыскательной модницы! А для деловых ситуаций, в которых Вам непременно нужно выглядеть элегантно и стильно, мы предлагаем Вам одежду из коллекции "деловой стиль и офис". Мода постоянно диктует нам свои требования и для современной девушки, желающей идти в ногу со временем, важно иметь возможность постоянно пополнять свой гардероб стильной одеждой.</p>
                    </div>
                </div>
                <FloatingButton/>
            </div>
        </div>
    );
};

export default AboutUs;