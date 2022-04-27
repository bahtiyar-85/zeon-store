import React from 'react';
import CollectionList from '../../components/CollectionList/CollectionList';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import HitSales from '../../components/HitSales/HitSales';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import Novelties from '../../components/Novelties/Novelties';
import OurAdvantages from '../../components/OurAdvantages/OurAdvantages';

const Main = () => {
    
    return (
        <div className='main'>
            <div className='container'>
                <MainCarousel/>
                <HitSales/>
                <Novelties/>
                <CollectionList/>
                <OurAdvantages/>
                <FloatingButton/>
            </div>
        </div>
    );
};

export default Main;