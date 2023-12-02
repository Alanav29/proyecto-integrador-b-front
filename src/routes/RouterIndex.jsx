import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import NavBar from "../pages/nav-bar/NavBar";
import Contact from "../pages/contact/Contact";

const RouterIndex = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default RouterIndex;
