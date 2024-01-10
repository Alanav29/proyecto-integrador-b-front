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
import SignUp from "../pages/signUp/SignUp";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userFeature";
import LogIn from "../pages/logIn/LogIn";
import Cart from "../pages/cart/Cart";
import Product from "../pages/product/Product";
import EditProduct from "../pages/editProduct/EditProduct";
import Footer from "../components/footer/Footer";

const RouterIndex = () => {
  const user = useSelector(selectUser);
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
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/editProduct/:productId" element={<EditProduct />} />
        {user.isAdmin ? (
          <Route path="/galleryAdmin" element={<GalleryAdmin />} />
        ) : (
          <></>
        )}
      </Routes>
      <NavbarMobile />
      <Footer />
    </>
  );
};

export default RouterIndex;
