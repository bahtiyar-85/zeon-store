import React from 'react';
import Advantage from '../Advantage/Advantage';
import icon1 from '../../images/icons/money.png';
import icon2 from '../../images/icons/truck.png';
import icon3 from '../../images/icons/support.png';
import icon4 from '../../images/icons/shop-2.png';
import './OurAdvantages.css';

const OurAdvantages = () => {
    
    const title1 = 'Удобные способы оплаты';
    const title2 = 'Cвоевремнная доставка';
    const title3 = 'Профессиональная консультация';
    const title4 = 'Акции и бонусы для покупателей';
    const text1 = 'Мы предлагаем возможность безналичной оплаты';
    const text2 = '100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.';
    const text3 = 'Мы проконсультируем и индивидуально подойдем к Вашему заказу';
    const text4 = 'Промокоды со скидками для постоянных клиентов, акции на новые позиции';
    return (
        <div className='mt-5'>
            <div className='d-flex justify-content-center'>
            <h2 className='title'>Наши преимущества</h2>
            </div>
            <div className='our-advantages '>
                <Advantage icon={icon1} title={title1} text={text1}/>
                <Advantage icon={icon2} title={title2} text={text2}/>
                <Advantage icon={icon3} title={title3} text={text3}/>
                <Advantage icon={icon4} title={title4} text={text4}/>
            </div>
        </div>
    );
};

export default OurAdvantages;