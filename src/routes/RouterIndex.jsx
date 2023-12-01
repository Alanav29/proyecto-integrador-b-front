import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import NavBar from "../pages/nav-bar/NavBar";

const RouterIndex = () => {
	return (
		<Routes>
			<Route path="/" element={<NavBar />}>
				<Route index element={<Home />} />
				<Route path="/aboutUs" element={<AboutUs />} />
			</Route>
		</Routes>
	);
};

export default RouterIndex;
