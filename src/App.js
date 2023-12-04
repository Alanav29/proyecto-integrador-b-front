import "./App.css";
// import NavBar from "../src/pages/nav-bar/NavBar.jsx";
import RouterIndex from "./routes/RouterIndex.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<RouterIndex />
		</BrowserRouter>
	);
}

export default App;
