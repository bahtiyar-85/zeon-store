import React, { useState } from 'react';
import logo from '../../images/zeon-logo.png';
import search from '../../images/icons/search-icon.png';
import burger from '../../images/icons/burger.png';
import CollapseModal from '../CollapseModal/CollapseModal';
import { useLocation, useNavigate } from 'react-router-dom';
import './NavbarCollapse.css';


const NavbarCollapse = ({setSearchValue}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [state, setState] = useState('');
    const [show, setShow] = useState(false);
    const [inputState, setInputState] = useState(false);
    const handleShow = () => setShow(true);

    function handleClick() {
        if(state!==''){
            setSearchValue(state);
            setState('');
            if(location.pathname!=='/search') navigate('/search');
        } else {
            alert('Заполните поле ввода!');
        }
    }

    return (
        <div className='navbar-collapsed'>
            <div className='navbar-collapsed-burger' onClick={handleShow}>
                <img src={burger} alt=''/>
            </div>
            <div className='navbar-collapsed-logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='navbar-collapsed-search' onClick={()=>setInputState(true)}> 
                <img src={search} alt=''  />
                <input type="text" 
                    placeholder="Search..." 
                    value={state} 
                    className={inputState ? 'form-control collapse-input' : 'collapse-input__hide'}
                    onChange={(e)=> setState(e.target.value)}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                          handleClick();
                          setInputState(false);
                        }
                      }}
                />
            </div>
            <CollapseModal show={show} setShow={setShow}/>
        </div>
    );
};

export default NavbarCollapse;