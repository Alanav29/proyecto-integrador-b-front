import MenuOption from "../../components/navbar/MenuOption";
// import LogoImg from "../../assets/img/logo/firmaFerro";

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand d-none d-md-block py-1" id="navbar">
				<div className="container-fluid">
					<a className="navbar-brand ms-3" href="./index.html">
						<img
							id="logo-navbar"
							// src={LogoImg}
							alt="Logo: firma artista Alfonso Ferro"
						/>
					</a>
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
