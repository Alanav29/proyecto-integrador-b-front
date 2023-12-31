import { createSlice } from "@reduxjs/toolkit";

export const cartFeature = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.value = action.payload;
    },
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { setCart, addToCart } = cartFeature.actions;
export const selectCart = (state) => state.cart.value;

export default cartFeature.reducer;
