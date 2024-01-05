import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import '../../styles/carrossel/carrossel.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default class Carrossel extends React.Component {
    render(){
        return (
            < Swiper
            modules={[Navigation, Pagination,Autoplay ]}
            autoplay={{delay: 5000 }}
            navigation= {true}
            loop={true}
            pagination={{clickable:true}}
            slidesPerView="2"
            direction='horizontal'
            reverseDirection={true}
            className="swiper-container">
                <SwiperSlide className="slide-item">
                    < img src={require('../../assets/img/general/Amarillo.webp')} />
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    < img src={require('../../assets/img/general/Bocetos Abstractos.jpg')} />
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    < img src={require('../../assets/img/general/Elefante.webp')} />
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    < img src={require('../../assets/img/general/IMG_9399.webp')} />
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    < img src={require('../../assets/img/general/cuadro1Gaby.jpg')} />
                </SwiperSlide>
         </Swiper>

        );
    }
}

