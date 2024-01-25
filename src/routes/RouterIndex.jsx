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
import Payment from "../pages/payment/Payment";
import { selectCart } from "../features/cartFeature";

const RouterIndex = () => {
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);
  return (
    <>
      <NavBar />
      <PageLogoMobile />
      <div className="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} />
          {user.privilege.privilege === "admin" ? (
            <>
              <Route path="/editProduct/:productId" element={<EditProduct />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/galleryAdmin" element={<GalleryAdmin />} />
            </>
          ) : (
            <></>
          )}
          {cart.length>=1 ? <Route path="/payment" element={<Payment />} /> : <></>}
        </Routes>
      </div>
      <NavbarMobile />
      <Footer />
    </>
  );
};

export default RouterIndex;
