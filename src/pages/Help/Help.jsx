import React, { useEffect, useState } from 'react';
import HelpItem from '../../components/HelpItem/HelpItem';
import { QUESTION_API, HELP_IMAGE_API } from '../../helpers/consts';
import axios from 'axios';
import './Help.css';


const Help = () => {
    const [array, setArray] = useState([]);
    const [image, setImage] = useState({});
    
    async function getData(){
        try {
            let result = await axios.get(`${QUESTION_API}`)
            setArray(result.data);
        } catch (error) {
            console.error(error)
        } 
    }

    async function getImage(){
        try {
            let result = await axios.get(`${HELP_IMAGE_API}`);
            setImage(result.data);
        } catch (error) {
            console.error(error)
        } 
    }

    useEffect(()=>{
        getData();
        getImage(); 
    },[])

    return (

       <div className='container'>
            <div className='help d-flex'>
                <div className='help-img'>
                    <img src={image.helpimage} alt=''/>
                </div>
                <div className='help-items'>
                    <h2 className='title ps-3'>Помощь</h2>
                    {array.map((item, index) =>(
                        <HelpItem question={item.qustion} answer={item.answer} key={index}/>
                    ))}
                   
                </div>
            </div>
        </div>
    );
};

export default Help;