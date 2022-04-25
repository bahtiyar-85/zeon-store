import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import './OrderingModal.css';

const OrderingModal = ({show, setShow}) => {
    const {
      register,
      formState: {
        errors, isValid,
      },
      handleSubmit,
      reset,
    } = useForm({mode:"onBlur"});

    const handleClose = () => setShow(false);
    
    function handleOrdering(e){
        // e.preventDefault();
        // handleClose();
        // handleShowModal();  
    }
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }
    return (
      <>
  
        <Modal show={show} onHide={handleClose} className='ordering-modal'>
          <Modal.Header closeButton>
            <Modal.Title><h5>Оформление заказа</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Ваше имя
                  <input 
                      type='text' 
                      placeholder='Например Иван'
                      {...register('firstName', {
                        required:"Поле обязательно к заполнению",
                      }) }
                      />
                      {/* {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>} */}
                </label>
                <label>Ваше фамилия
                  <input 
                      type='text' 
                      placeholder='Например Иванов'
                      {...register('secondName', {
                        required:"Поле обязательно к заполнению",
                      }) }
                      />
                </label>
                <label>Электронная почта 
                  <input 
                      type='email' 
                      placeholder='example@mail.com'
                      {...register('email', {
                        required:"Поле обязательно к заполнению",
                      }) }
                      />
                </label>
                <label>Ваш номер телефона
                  <input 
                  type='text' 
                  inputmode='numeric'
                  autoComplete='cc-number'
                  placeholder='Введите номер телефона'
                  {...register('phone', {
                    required:"Поле обязательно к заполнению",
                    pattern: /[0-9]{7}/,
                  }) }
                  />
                </label>
                <label>Страна
                  <input 
                  type='text' 
                  placeholder='Введите страну'
                  {...register('country', {
                    required:"Поле обязательно к заполнению",
                  }) }
                  />
                </label>
                <label>Город
                  <input 
                  type='text' 
                  placeholder='Введите город'
                  {...register('city', {
                    required:"Поле обязательно к заполнению",
                  }) }
                  />
                </label>
                <div className='ordering-model-check'>
                <input  type='checkbox' className='ordering-model-checkbox'/><span>Согласен с условиями <a href=''>публичной оферты</a></span>
                </div>
                <button className='ordering-modal-btn' type='submit' disable={!isValid} onClick={(e)=>handleOrdering(e)}>Заказать</button>
             </form>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default OrderingModal;