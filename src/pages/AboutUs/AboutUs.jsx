import React, { useEffect, useState } from 'react';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import { ABOUTUS_API } from '../../helpers/consts';
import './AboutUs.css';
import axios from 'axios';


const AboutUs = () => {
    const [data, setData] = useState({});

    async function getData(){
        try {
            let result = await axios.get(`${ABOUTUS_API}`);
            setData(result.data);
        } catch (error) {
            console.error(error)
        } 
    }

    useEffect(()=>{
        getData();
    },[])

    return (
        <div className='about'>
            <div className='container'>
                <div className='about-us d-flex justify-content-between '>
                    <div className='about-us-images d-flex'>
                        <div className='about-us-images__left'>
                            <img className='' src={data.image1} alt=''/>
                            <img className='' src={data.image2} alt=''/>
                        </div>
                        <div className='about-us-images__right d-flex align-items-center'>
                            <img  className='' src={data.image3} alt=''/>
                        </div>
                    </div>  
                    <div className='about-us-items d-flex align-items-center'>
                        <div className='w-100 about-us-content'>
                            <span>{data.title}</span>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <FloatingButton/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;