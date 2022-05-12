import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from 'react-router-dom';
import './AuthModal.css';


const AuthModal = ({show, setShow}) => {

    const [toggle, setToggle] = useState(true);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const dispatch = useDispatch();
    const navigation = useNavigate();
    const auth = getAuth();
  
    const handleClose = () => setShow(false);
    
    const validEmail = () => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
    const validPass= () => {
        return pass.length>5;
    }
    const handleValid = (func) => {
        if(email==='' || pass===''){
            alert('Заполните поля ввода!');
            return;
        } else if(!validEmail()) {
            alert('Введите корректный email!');
            setEmail('');
            return;
        } else if(!validPass()){
            alert('Длина пароля более 5 символов!');
            return;
        }
        func();
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, pass )
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }))
            handleClose();
            setEmail('');
            setPass('');
            navigation('/');
        })
        .catch((error) => {
            alert(error);
            setEmail('');
            setPass('');
          });
    }

    const handleSignup = () => {
       
        createUserWithEmailAndPassword(auth, email, pass )
        .then(({user})=> {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }))
            handleClose();
            setEmail('');
            setPass('');
            navigation('/');
        })
        .catch((error) => {
            alert(error);
            setEmail('');
            setPass('');
          });
    }

    return (
        <Modal show={show} onHide={handleClose} className='auth-modal'>
            <Modal.Header closeButton>
                <Modal.Title>{!toggle ? 'Регистрация' : 'Авторизация'}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-grid gap-2">
                    <input
                        type='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder='Введите email'  
                        className='form-control mb-3'
                              
                    />    
                    <input 
                        type='password'
                        value={pass}
                        onChange={(e)=> setPass(e.target.value)}
                        placeholder="Введите пароль"
                        className='form-control mb-3'
                        
                    />
                    {toggle ? (
                        <Button variant="primary" size="lg" onClick={() => handleValid(handleLogin)}>
                            {'Авторизация'}
                         </Button> 
                     ):(
                        <Button variant="primary" size="lg" onClick={() => handleValid(handleSignup)}>
                            {'Регистрация'}
                        </Button> 
                      )}
                                 
                    <h5 className='mt-3'>
                        {toggle ? "У Вас нет аккаунта?": "У Вас есть аккаунт?" }
                        <span onClick={() => setToggle(!toggle)}>
                            {toggle ? 'Регистрация': 'Авторизация'}
                        </span>
                    </h5>
            </Modal.Body>
        </Modal>    
    );
};

export default AuthModal;