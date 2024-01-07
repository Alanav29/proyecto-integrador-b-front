import Carrossel from "../../components/carrossel/Carrossel";
import Phrase from "../../components/home/Phrase";
import GalleryViewHome from "../../components/homeGallery/GalleryViewHome";
// import MiddleCard from "../../components/homeGallery/MiddleCard";

const Home = () => {
	return (
		<div>
			<Carrossel></Carrossel>
			<br />
			<Phrase></Phrase>
			<br />
			<GalleryViewHome></GalleryViewHome>
		</div>

	);


};

export default Home;
