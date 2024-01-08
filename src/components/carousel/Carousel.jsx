import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "../../styles/carousel/carousel.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView="3"
        direction="horizontal"
        // reverseDirection={true}
        breakpoints={{
          51: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
        }}
        className="swiper-container"
      >
        <SwiperSlide className="slide-item">
          <img src={require("../../assets/img/general/Amarillo.webp")} />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img
            src={require("../../assets/img/general/Bocetos Abstractos.jpg")}
          />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={require("../../assets/img/general/Elefante.webp")} />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={require("../../assets/img/general/IMG_9399.webp")} />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={require("../../assets/img/general/cuadro1Gaby.jpg")} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
