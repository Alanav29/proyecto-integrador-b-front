import { useEffect } from "react";
import RouterIndex from "./routes/RouterIndex.jsx";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./features/productsFeature.js";
import getProducts from "./utils/gallery/getProducts.js";
import getUserLS from "./utils/localStorage/getUserLS.js";
import { setUser } from "./features/userFeature.js";
import { selectChangesCounter } from "./features/changesConter.js";

function App() {
  const dispatch = useDispatch();
  const changesCounter = useSelector(selectChangesCounter);
  useEffect(() => {
    getProducts(dispatch, setProducts);
    getUserLS(dispatch, setUser);
  }, [changesCounter]);

  return (
    <BrowserRouter>
      <RouterIndex />
    </BrowserRouter>
  );
}

export default App;
