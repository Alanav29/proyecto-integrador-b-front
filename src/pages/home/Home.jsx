import Carousel from "../../components/carousel/Carousel";
import Phrase from "../../components/home/Phrase";
import GalleryViewHome from "../../components/homeGallery/GalleryViewHome";
import Banner from "../../components/homeGallery/Banner";
import { useSelector } from "react-redux";
import { selectProducts } from "../../features/productsFeature";

const Home = () => {
  const products = useSelector(selectProducts);
  const showCarousel = () => {
    return products.length > 0 ? (
      <Carousel products={products}></Carousel>
    ) : (
      <></>
    );
  };
  return (
    <div>
      {showCarousel()}
      <br />
      <Phrase></Phrase>
      <br />
      <Banner></Banner>
      <br />
      <GalleryViewHome></GalleryViewHome>
    </div>
  );
};

export default Home;
