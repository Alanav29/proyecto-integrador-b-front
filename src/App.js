import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import NavBar from "../src/pages/nav-bar/NavBar.jsx";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutUs" element={<AboutUs />} />
			</Routes>
		</>
	);
}

export default App;
