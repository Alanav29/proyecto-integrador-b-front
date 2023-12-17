import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import NavBar from "../pages/navbar/Navbar";
import Contact from "../pages/contact/Contact";
import NavbarMobile from "../components/navbarMobile/NavbarMobile";
import PageLogoMobile from "../components/navbarMobile/PageLogoMobile";
import Gallery from "../pages/gallery/Gallery";
import AddProduct from "../pages/addProduct/AddProduct";
import GalleryAdmin from "../pages/galleryAdmin/GalleryAdmin";
import Register from "../pages/register/Register";

const RouterIndex = () => {
  return (
    <>
      <NavBar />
      <PageLogoMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/galleryAdmin" element={<GalleryAdmin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <NavbarMobile />
    </>
  );
};

export default RouterIndex;
