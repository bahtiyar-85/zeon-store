import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MainCarousel.css'

const MainCarousel = () => {
    return (
        
        <Carousel >
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="./images/image-carousel.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="./images/image-carousel.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="./images/image-carousel.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        
    );
};

export default MainCarousel;