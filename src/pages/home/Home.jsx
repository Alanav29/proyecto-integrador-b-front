import Carousel from "../../components/carousel/Carousel";
import Phrase from "../../components/home/Phrase";
import GalleryViewHome from "../../components/homeGallery/GalleryViewHome";
 import Banner from "../../components/homeGallery/Banner";

const Home = () => {
	return (
		<div>
			<Carousel></Carousel>
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
