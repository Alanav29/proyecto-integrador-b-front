import { useEffect } from "react";
import RouterIndex from "./routes/RouterIndex.jsx";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "./features/productsFeature.js";
import getProducts from "./utils/gallery/getProducts.js";
import getUserLS from "./utils/localStorage/getUserLS.js";
import { setUser } from "./features/userFeature.js";

function App() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts(dispatch, setProducts);
    getUserLS(dispatch, setUser);
  }, [products]);

  return (
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  );
}

export default App;
