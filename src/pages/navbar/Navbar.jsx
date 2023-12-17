import MenuOption from "../../components/navbar/MenuOption";
import { Link, Outlet } from "react-router-dom";
import "../../styles/navbar/navbarStyle.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand d-none d-md-block py-1" id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3" to="/">
            FERRO
          </Link>
          <div className="navbarNav">
            <ul className="navbar-nav fs-6">
              <MenuOption pageToConnect={"/"}>INICIO</MenuOption>
              <MenuOption pageToConnect={"/gallery"}>GALERIA</MenuOption>
              <MenuOption pageToConnect={"/aboutUs"}>NOSOTROS</MenuOption>
              <MenuOption pageToConnect={"/contact"}>CONTACTO</MenuOption>
              <MenuOption pageToConnect={"/account"}>CUENTA</MenuOption>
              <MenuOption pageToConnect={"/cart"}>CARRITO</MenuOption>
              <MenuOption pageToConnect={"/galleryAdmin"}>ADMIN</MenuOption>
            </ul>
          </div>
        </div>
        <Outlet />
      </nav>
    </>
  );
};

export default NavBar;
