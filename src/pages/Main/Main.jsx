import React from 'react';
import { Container } from 'react-bootstrap';
import CollectionList from '../../components/CollectionList/CollectionList';
import HitSales from '../../components/HitSales/HitSales';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import Novelties from '../../components/Novelties/Novelties';
import OurAdvantages from '../../components/OurAdvantages/OurAdvantages';

const Main = () => {
    fetch('https://624ed42477abd9e37c8b92a5.mockapi.io/products')
        .then(response => response.json())
        .then(commits => console.log(commits));
    return (
        <div className='container main'>
            
                <MainCarousel/>
                <HitSales/>
                <Novelties/>
                <CollectionList/>
                <OurAdvantages/>
           
        </div>
    );
};

export default Main;