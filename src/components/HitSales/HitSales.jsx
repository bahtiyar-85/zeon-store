import React from 'react';
import MoreButton from '../MoreButton/MoreButton';
import ProductItem from '../ProductItem/ProductItem';

const HitSales = () => {
    return (
        <div className='hit-sales d-flex flex-column align-items-center mt-5'>
            <h2 className='title '>Хит продаж</h2>
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

export default HitSales;