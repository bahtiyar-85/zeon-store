import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import image from '../../images2/image4.png'
import './CollectionItem.css'

const CollectionItem = () => {
    return (
        <div className='collection'>
            <div className='collection-img'>
                <img src={image}/>
                <div className='collection-span'>
                    <span >Платье</span>
                </div>
            </div>
            <div>
                <button className='collection-button'>Смотреть все <IoIosArrowForward size={30}/></button>.
            </div>
        </div>
    );
};

export default CollectionItem;