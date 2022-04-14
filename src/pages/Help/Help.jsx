import React from 'react';
import './Help.css';
import image from '../../images/Rectangle3.png';
import HelpItem from '../../components/HelpItem/HelpItem';
import { Container } from 'react-bootstrap';


const Help = () => {
    const question = 'Как осуществляется доставка?';
    const question2 = 'Как доставка?';
    const answer = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit nulla. Id est tellus maecenas ornare velit. ';
    return (
        <Container>
            <div className='help d-flex'>
                <div className='help-img'>
                    <img src={image} alt=''/>
                </div>
                <div className='help-items'>
                    <h2 className='title ps-3'>Помощь</h2>
                    <HelpItem question={question} answer={answer}/>
                    <HelpItem question={question2} answer={answer}/>
                </div>
            </div>
        </Container>
    );
};

export default Help;