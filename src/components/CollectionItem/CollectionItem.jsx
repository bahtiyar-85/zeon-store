import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import './CollectionItem.css'

const CollectionItem = ({image, title}) => {
    return (
        <div className='collection'>
            <div className='collection-img'>
                <img src={image}/>
                <div className='collection-span'>
                    <span >{title}</span>
                </div>
            </div>
            <div>
                <button className='collection-button'>Смотреть все <IoIosArrowForward size={30}/></button>.
            </div>
        </div>
    );
};

export default CollectionItem;