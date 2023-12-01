import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";

const RouterIndex = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/aboutUs" element={<AboutUs />} />
		</Routes>
	);
};

export default RouterIndex;
