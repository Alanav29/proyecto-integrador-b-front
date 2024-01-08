import { configureStore } from "@reduxjs/toolkit";
import userFeature from "../features/userFeature";
import productsFeature from "../features/productsFeature";
import cartFeature from "../features/cartFeature";
import changesCounterFeature from "../features/changesConter";

export default configureStore({
  reducer: {
    user: userFeature,
    products: productsFeature,
    cart: cartFeature,
    changesCounter: changesCounterFeature,
  },
});
