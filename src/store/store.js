import { configureStore } from "@reduxjs/toolkit";
import userFeature from "../features/userFeature";
import productsFeature from "../features/productsFeature";

export default configureStore({
  reducer: {
    user: userFeature,
    products: productsFeature,
  },
});
