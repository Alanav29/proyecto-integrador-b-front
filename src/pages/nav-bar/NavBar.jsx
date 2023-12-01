import MenuOption from "../../components/navbar/MenuOption";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand d-none d-md-block py-1" id="navbar">
				<div className="container-fluid">
					<Link className="navbar-brand ms-3" to="/">
						<p>FERRO</p>
					</Link>
					<div className id="navbarNav">
						<ul className="navbar-nav fs-6">
							<MenuOption pageToConnect={"/"}>INICIO</MenuOption>
							<MenuOption pageToConnect={"/gallery"}>GALERIA</MenuOption>
							<MenuOption pageToConnect={"/aboutUs"}>NOSOTROS</MenuOption>
							<MenuOption pageToConnect={"/contact"}>CONTACTO</MenuOption>
							<MenuOption pageToConnect={"/account"}>CUENTA</MenuOption>
							<MenuOption pageToConnect={"/cart"}>CARRITO</MenuOption>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
