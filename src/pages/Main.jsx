import React from 'react';
import { Container } from 'react-bootstrap';
import HitSales from '../components/HitSales/HitSales';
import MainCarousel from '../components/MainCarousel/MainCarousel';

const Main = () => {
    fetch('https://624ed42477abd9e37c8b92a5.mockapi.io/products')
        .then(response => response.json())
        .then(commits => console.log(commits));
    return (
        <div>
            <Container>
                <MainCarousel/>
                <HitSales/>
            </Container>
        </div>
    );
};

export default Main;