import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import userIcon from '../../images/icons/user.png';
import phoneIcon from '../../images/icons/phone.png';
import './RequestCall.css';

const RequestCall = ({show, setShow, handleShowModal}) => {
    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [userDirty, setUserDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [userError, setUserError] = useState('Поле не может быть пустым!');
    const [phoneError, setPhoneError] = useState('Поле не может быть пустым!');
    const [isValid, setIsValid] = useState(false);

    const handleClose = () => setShow(false);

    const handleClick = () => {
          handleClose();
          handleShowModal();
    }
    const blurHandler = (e) => {
        switch (e.target.name){
          case 'user':
            setUserDirty(true);
            break;
          case 'phone':
            setPhoneDirty(true);
        }
    } 
    const userHandler = e => {
      setUser(e.target.value);
     
      if(e.target.value.length<2){
        setUserError('Введите ваше имя!')
      } else {
        setUserError(''); 
      }
    }
    const phoneHandler = e => {
      setPhone(e.target.value);
      const reg = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
      if(!reg.test(String(e.target.value))){
        setPhoneError('Не корректный номер!')
      } else {
        setPhoneError(''); 
      }
    }
    console.log('error phone', phoneError);
    useEffect(()=>{
        if(userError || phoneError){
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    },[userError, phoneError])
    return (
      <>
        <Modal show={show} onHide={handleClose} className='modal-request'>
          <Modal.Header closeButton>
              <h5>Если у вас Остались вопросы</h5>
          </Modal.Header>
          <Modal.Body >
              <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
              <div className='input__name'>
                <input onBlur={e => blurHandler(e)} className='' type="text" name='user' placeholder='Как к Вам обращаться?' value={user} onChange={(e)=>userHandler(e)}></input>
                <img className='image__name' src={userIcon} alt=''/>
              </div>
              <div className='input__phone'>
                <input onBlur={e => blurHandler(e)} className='' type='number' name='phone' placeholder='Номер телефона' value={phone} onChange={e=> phoneHandler(e)}></input>
                <img className='image__phone' src={phoneIcon} alt=''/>
              </div>
              <button className={isValid ? 'modal-request__isValid' : 'modal-request__notValid'} disabled={!isValid} onClick={handleClick}>Заказать звонок</button>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default RequestCall;