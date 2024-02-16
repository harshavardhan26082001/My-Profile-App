import React from 'react';
import './testimonials.css';
import Reviews from './Reviews';
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


export default function Testimonials(props) {
    return (
        <section className="testimonials container section" id='work'>
            <h2 className="section__title">Reviews & Recommendations</h2>

            <Swiper className="testimonials__container grid" 
            
            modules={[ Pagination]} 
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            pagination={{clickable: true}} 
            >
                {Reviews.map(({id, image, title, subtitle, comment}) => {
                    return(
                        <SwiperSlide className="testimonial__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="testimonials__title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </section>
    );
}