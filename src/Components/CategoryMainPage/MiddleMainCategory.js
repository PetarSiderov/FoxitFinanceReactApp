import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import React, { useEffect, useState } from "react";
import Swiper from 'react-id-swiper';
import SwiperSlide from 'react-id-swiper';
import Carousel from 'react-responsive-carousel-2';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

function MiddleMainCategory(props){
    


    return(
        <>
        <h2>{props.category[0].Title}</h2>
        //     <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
    spaceBetween={20}
    slidesPerView={3}
    effect = {"cube"}
    navigation = {true}
    virtual = {true}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
>
    {props.category[0].CategoryPost.map((data,id) => {
        
         <SwiperSlide  key={data.Id} className="slide wrapper-start">
            <div className="">
                <div className="cn-img">
                    <img src={data.Img} />
                    <div className="cn-title">
                        <a href="">{data.Name}</a>
                    </div>
                </div>
            </div>
            
     </SwiperSlide>
     })}
 </Swiper>
       
     
        
     </>
      
    )
}



export default MiddleMainCategory