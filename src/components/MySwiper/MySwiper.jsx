import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

const MySwiper = ({ProductItem, item}) => {
    return (
        <Swiper
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
                    {item?.map((item, index)=>(
                        <SwiperSlide key={index} >
                            <ProductItem {...item} />
                        </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default MySwiper;