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
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = productsFeature.actions;
export const selectProducts = (state) => state.products.value;

export default productsFeature.reducer;
