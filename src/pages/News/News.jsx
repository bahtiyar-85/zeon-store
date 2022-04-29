import React, { useEffect, useState } from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
import { NEWS_API } from '../../helpers/consts';
import axios from 'axios';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import './News.css';

const News = () => {
  
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [finished, setFinished] = useState(false);
    
    async function getNews(){
        try {
            let result = await axios.get(`${NEWS_API}?page=${page}&limit=8`)
            setNews([...news, ...result.data]);
            if(result.data.length<8) setFinished(true);
            setPage(prevState => prevState + 1 )
        } catch (error) {
            console.error(error)
        } finally {
            setFetching(false);
        }
    }
    const handlerScroll = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)<100){
            setFetching(true);
        }

    }
    useEffect(()=>{
        if(fetching && !finished){
            getNews();
        }  
    },[fetching]);

    useEffect(()=> {
        document.addEventListener('scroll', handlerScroll);
        return function() {
            document.removeEventListener('scroll', handlerScroll);
        }
    },[])
    return (
        <div className='news-page__bg'>
            <div className='container'>
                    <h2 className='title'>Новости</h2>
                    <div >
                        {news.map((item, index) => (
                            <NewsItem image={item.image} title={item.title} text={item.content} key={index}/>
                        ))}
                    </div >
                <FloatingButton/>
            </div>
        </div>
    );
};

export default News;