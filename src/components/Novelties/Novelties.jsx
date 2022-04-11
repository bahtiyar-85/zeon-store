import React from 'react';
import MoreButton from '../MoreButton/MoreButton';
import ProductItem from '../ProductItem/ProductItem';

const Novelties = () => {
    return (
        <div className='novelties d-flex flex-column align-items-center mt-5'>
            <h2 className='title '>Новинки</h2>
            <div className='w-100 d-flex justify-content-between'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
            <MoreButton/>
        </div>
    );
};

export default Novelties;