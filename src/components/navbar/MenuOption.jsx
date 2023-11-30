import { Link } from "react-router-dom";

const MenuOption = ({ children, pageToConnect }) => {
	return (
		<li className="nav-item mx-2">
			<Link className="nav-link" to={pageToConnect}>
				{children}
			</Link>
		</li>
	);
};

export default MenuOption;
