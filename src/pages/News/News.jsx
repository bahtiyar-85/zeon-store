import React from 'react';
import NewsItem from '../../components/NewsItem/NewsItem';
import './News.css';
import image from '../../images/Rectangle2.png'
import { Container } from 'react-bootstrap';

const News = () => {
    const title='Lorem ipsum dolor sit amet';
    const text='Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque felis enim dui id cum. At pellentesque diam nulla ac amet quisque quis. Est consectetur ullamcorper curabitur quis viverra hac molestie. Elit pulvinar congue ut amet adipiscing felis tincidunt. Amet quis varius aliquam hendrerit tempus. Sed sit diam quis scelerisque congu econgu econgu econguecongu econguecon guecon guecon guecong ueconguecong uec ongue. Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque  Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque felis enim dui id cum. At pellentesque diam nulla ac amet quisque quis. Est consectetur ullamcorper curabitur quis viverra hac molestie. Elit pulvinar congue ut amet adipiscing felis tincidunt. Amet quis varius aliquam hendrerit tempus. Sed sit diam quis ';
    
    return (
        <div>
            <Container>
                <h2 className='title'>Новости</h2>
                <div >
                    <NewsItem image={image} title={title} text={text}/>
                    <NewsItem image={image} title={title} text={text}/>
                </div >
            </Container>
        </div>
    );
};

export default News;