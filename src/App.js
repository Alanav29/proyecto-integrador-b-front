import { useEffect } from "react";
import "./App.css";
import RouterIndex from "./routes/RouterIndex.jsx";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "./features/productsFeature.js";
import getProducts from "./utils/gallery/getProducts.js";
import getUserLS from "./utils/localStorage/getUserLS.js";
import { setUser } from "./features/userFeature.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts(dispatch, setProducts);
    getUserLS(dispatch, setUser);
  }, []);

  return (
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  );
}

export default App;
