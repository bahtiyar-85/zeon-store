import React from 'react';
import { Container } from 'react-bootstrap';
import CollectionList from '../../components/CollectionList/CollectionList';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import HitSales from '../../components/HitSales/HitSales';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import Novelties from '../../components/Novelties/Novelties';
import OurAdvantages from '../../components/OurAdvantages/OurAdvantages';

const Main = () => {
    
    return (
        <div className='main'>
            <Container>
                <MainCarousel/>
                <HitSales/>
                <Novelties/>
                <CollectionList/>
                <OurAdvantages/>
                <FloatingButton/>
            </Container>
        </div>
    );
};

export default Main;