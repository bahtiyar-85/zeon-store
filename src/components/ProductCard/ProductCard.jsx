import React, { useEffect, useState } from 'react';
import ProductColor from '../ProductColors/ProductColor';
import { Swiper, SwiperSlide } from "swiper/react";
import bag from '../../images/icons/bag-icon.png';
import favorFalse from '../../images/icons/favor-light.png';
import favorTrue from '../../images/icons/favorite_white.png';
import { addItemToCart } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkFavor } from '../../store/favoriteSlice';
import ImageModal from '../ImageModal/ImageModal';
import './ProductCard.css';

const ProductCard = ({color, ...props}) => {
    const favor = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log('render');
    const [currentColor, setCurrentColor] = useState('');
    const [cartButton, setCartButton] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const [currentImage, setCurrentImage] = useState(null);
    
    function priceCalc(price, sale){
      
        let newPrice = 0;
        if(sale){
             newPrice = Math.ceil(price - price * sale / 100);
        } else newPrice = price;
        return newPrice;
    }

    function handleClick(){
        dispatch(checkFavor({...props, color}));
    }
    function check(id){
        const result = favor.prodFav.findIndex(item => item.id === id);
        if(result<0) return false;
        else return true;
    }

    function handleCartAdd(){
        if(!cartButton){
            let newObj = {
               ...props,
               selectedColor: currentColor,
               cartId: props.id.concat(currentColor),
            };
            dispatch(addItemToCart(newObj));
            setCartButton(true); 
        } else {
            navigate('/cart');
        }
    }
    function handleImageClick(image){
        setCurrentImage(image);
        handleShowModal();
    }
    useEffect(()=>{
        if(color) setCurrentColor(color[0]);
    },[color]);
    
    return (
        <div className='card pt-2'>
              <Swiper
                    className='card-images-swiper'
                    breakpoints={{
                        290: {
                          width: 290,
                          slidesPerView: 1,
                        },
                        574: {
                            width: 574,
                            slidesPerView: 2,
                        },
                        862: {
                            width: 862,
                            slidesPerView: 3,
                        },
                        1150: {
                            width: 1150,
                            slidesPerView: 4,
                        },
                      }}
                    spaceBetween={10}
                >
                     {props?.images?.map((item, index)=> (
                         <SwiperSlide key={index}>
                            <img src={item}  className='card-img'/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            <div className='card-images'>
                <div className='card-images-images'>    
                    {props?.images?.map((item, index)=> (
                        <img src={item} key={index} className={index<4 ? 'card-img' : 'card-img__mini'} onClick={()=>handleImageClick(item)}/>
                    ))}
              
                </div>
            </div>
            <div className='card-items'>
                <div className='card-items__bg'>
                    <h3 className='card-title'>{props.title}</h3>
                    <span className='card-item'>Артикул:</span><span className='card-value'>{props.article}</span>
                    <br/>
                    <div className='d-flex mt-2 mb-2 align-items-center'>
                        <span className='card-item'>Цвет:</span><ProductColor color={color} setCurrentColor={setCurrentColor}/>
                    </div>
                    <span className='card-price'>{priceCalc(props.price, props.sale)+' p '}</span><span className='card-price__old'>{props.price+' p'}</span>
                    <h4 className='card-desc mt-2'>О товаре:</h4>
                    <p>{props.description}</p> 
                    <div className='d-flex flex-wrap'>
                    
                        <div className='w-50'>
                            <span className='card-item'>Размерный ряд</span>
                            <span className='card-value'>{props.size}</span>
                        </div>
                        <div className='w-50'>
                            <span className='card-item'>Состав ткани:</span>
                            <span className='card-value'>{props.material}</span>
                        </div>
                        <div className='w-50'>
                            <span className='card-item'>Количество в линейке</span>
                            <span className='card-value'>5</span>
                        </div>
                        <div className='w-50'>
                            <span className='card-item'>Материал</span>
                            <span className='card-value'>{props.material}</span>
                        </div>
                    </div>     
                    <div className='d-flex justify-content-between mt-3'>
                        <button className='card-btn__add' onClick={handleCartAdd}>
                            {cartButton ? null : <img src={bag} alt="" className='me-2' />}
                            {cartButton ? 'Перейти в корзину' : "Добавить в корзину"}
                        </button>
                        <button className='ms-2 card-btn__favor' onClick={handleClick}>
                            <img src={check(props.id) ? favorTrue : favorFalse} alt=""/>
                        </button>
                        
                    </div> 
                </div>
            </div>
            <ImageModal showModal={showModal} setShowModal={setShowModal} currentImage={currentImage}/>
        </div>
    );
};

export default ProductCard;