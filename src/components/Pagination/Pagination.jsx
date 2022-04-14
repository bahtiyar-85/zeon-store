import React from 'react';
import './Pagination.css';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const Pagination = ({pages, active, setActive}) => {

    function handleClick(num){
        if(num<1) num = pages;
        else if(num>pages) num = 1;
        setActive(num);
    }

    let items = [];
    for (let number = 1; number <= pages; number++) {
      items.push(
        <div key={number} className={active!==number ? 'pagination' : 'active'} onClick={()=> handleClick(number)}>
          {number}
        </div>,
      );
    }

    return (
        <div className='d-flex'>
            <div className='pagination' onClick={()=> handleClick(active-1)}>
                <MdArrowBackIosNew size={30}/>
            </div>
            {items}
            <div className='pagination' onClick={()=> handleClick(active+1)}>
                <MdArrowForwardIos size={30}/>
            </div>
        </div>
    );
};

export default Pagination;