import React, { useState } from 'react';
import './HelpItem.css';
import {IoIosArrowUp} from "react-icons/io";
import {IoIosArrowDown} from "react-icons/io";

const HelpItem = ({question, answer}) => {
    const [state, setState] = useState(false);
    return (
        <div className='help-item'>
           <div className='help-item__question'>
               <span >{question} </span>
               <span className='help-item__toggle' onClick={()=> setState(!state)} > {state ? <IoIosArrowUp size={30}/> : <IoIosArrowDown size={30}/>}</span>
            </div > 
            {state ? (
                <div className='help-item__answer'>
                    {answer}
                </div>
            ) : (
               null
                )}
        </div>
    );
};

export default HelpItem;