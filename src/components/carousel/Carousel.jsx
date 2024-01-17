import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "../../styles/carousel/carousel.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Carousel = ({ products }) => {
  return (
    <section>
      <br />
      <h1 className="display-6 text-center">
        <em>Novedades</em>
      </h1>
      <br />
      <div className="container">
        <h5 className="font-weight-bold text-center">
          Aquí tienes un vistazo de las últimas obras de arte añadidas a la
          colección.
        </h5>
      </div>
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
          <Link to={`/product/${products[0]._id}`}>
            <img src={products[0].img.secure_url} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <Link to={`/product/${products[1]._id}`}>
            <img src={products[1].img.secure_url} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <Link to={`/product/${products[2]._id}`}>
            <img src={products[2].img.secure_url} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <Link to={`/product/${products[3]._id}`}>
            <img src={products[3].img.secure_url} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <Link to={`/product/${products[4]._id}`}>
            <img src={products[4].img.secure_url} alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
      <br />
    </section>
  );
};

export default Carousel;
