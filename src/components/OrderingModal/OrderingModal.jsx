import React from 'react';
import { Modal } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import './OrderingModal.css';

const OrderingModal = ({show, setShow, handleShowModal}) => {
    
    const {
        register,
        control,
        formState: {
          errors, isValid,
        },
        handleSubmit,
        reset,
      } = useForm({mode:"onBlur"});

    const handleClose = () => setShow(false);
    
   
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
        // e.preventDefault();
        handleClose();
        handleShowModal();  
    }
    console.log('Phone', errors.phoneInput);
    return (
      <>
  
        <Modal show={show} onHide={handleClose} className='ordering-modal'>
          <Modal.Header closeButton>
            <Modal.Title><h5>Оформление заказа</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className={errors.firstName ? 'label__error'  : 'label__isvalid'}>Ваше имя
                  <input 
                      className={errors.firstName ? 'input__error' : 'input__isvalid'}
                      type='text' 
                      placeholder='Например Иван'
                      {...register('firstName', {
                        required:'Error',
                      }) }
                      />
                      {/* {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>} */}
                </label>
                <label  className={errors.secondName ? 'label__error'  : 'label__isvalid'}>Ваше фамилия
                  <input
                      className={errors.secondName ? 'input__error' : 'input__isvalid'} 
                      type='text' 
                      placeholder='Например Иванов'
                      {...register('secondName', {
                        required:true,
                      }) }
                      />
                </label>
                <label className={errors.email ? 'label__error'  : 'label__isvalid'}>Электронная почта 
                  <input 
                      className={errors.email ? 'input__error' : 'input__isvalid'} 
                      type='email' 
                      placeholder='example@mail.com'
                      {...register('email', {
                        required:true,
                      }) }
                      />
                </label>
                <label className={errors.phoneInput ? 'label__error'  : 'label__isvalid'}>Ваш номер телефона
                <PhoneInputWithCountry
                    className={errors.phoneInput ? 'input__error' : 'input__isvalid'} 
                    name="phoneInput"
                    control={control}
                    rules={{ required: true }}
                />
                  
                </label>
                <label  className={errors.country ? 'label__error'  : 'label__isvalid'}>Страна
                  <input 
                    className={errors.country ? 'input__error' : 'input__isvalid'} 
                    type='text' 
                    placeholder='Введите страну'
                    {...register('country', {
                      required:true,
                    }) }
                  />
                </label>
                <label className={errors.city ? 'label__error'  : 'label__isvalid'}>Город
                  <input 
                  className={errors.city ? 'input__error' : 'input__isvalid'} 
                  type='text' 
                  placeholder='Введите город'
                  {...register('city', {
                    required:true,
                  }) }
                  />
                </label>
                <div className='ordering-model-check'>
                    <input  type='checkbox' className='ordering-model-checkbox'
                      {...register('check', {
                        required:true,
                      }) }
                    />
                    <span>Согласен с условиями <Link to='/offer' style={{textDecoration:'none'}}>публичной оферты</Link>
                    </span>
                </div>
                
                <button 
                    className={isValid ? 'btn__isValid ordering-modal-btn' : 'btn__notValid ordering-modal-btn'}
                    type='submit' 
                    // onClick={(e)=>handleOrdering(e)}
                >
                    Заказать
                </button>
             </form>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default OrderingModal;