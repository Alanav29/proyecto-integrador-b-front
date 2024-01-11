import { createSlice } from "@reduxjs/toolkit";

export const productsFeature = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
    removeProduct: (state, action) => {
      const elementToRemove = state.value.findIndex(
        (product) => product._id === action.payload
      );
      state.value.splice(elementToRemove, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, removeProduct } = productsFeature.actions;
export const selectProducts = (state) => state.products.value;

export default productsFeature.reducer;
