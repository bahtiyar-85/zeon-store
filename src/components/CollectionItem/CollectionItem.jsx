import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './CollectionItem.css'

const CollectionItem = ({image, title, id}) => {
    const navigate = useNavigate();

    return (
        <div className='collection'>
            <div className='collection-img'>
                <img src={image}/>
                <div className='collection-span'>
                    <span >{title}</span>
                </div>
            </div>
            <div>
                <button className='collection-button' onClick={()=>navigate(`/collection/${id}`)}>Смотреть все <IoIosArrowForward size={30}/></button>.
            </div>
        </div>
    );
};

export default CollectionItem;