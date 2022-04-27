import React, { useEffect, useState } from 'react';
import Advantage from '../Advantage/Advantage';
import { ADVANTAGES_API } from '../../helpers/consts';
import './OurAdvantages.css';
import axios from 'axios';

const OurAdvantages = () => {

    const [data, setData] = useState([]);
    
    async function getData(){
        try {
            let result = await axios.get(`${ADVANTAGES_API}`)
            setData(result.data);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        
        <div className='mt-5'>
            <div className='d-flex justify-content-center'>
            <h2 className='title'>Наши преимущества</h2>
            </div>
            <div className='our-advantages '>
                {data.map((item, index) => (
                    <Advantage icon={item.icon} title={item.title} text={item.description} key={index}/>
                ))} 
            </div>
        </div>
    );
};

export default OurAdvantages;