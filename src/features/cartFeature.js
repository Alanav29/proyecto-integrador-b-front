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
    removeCartItem: (state, action) => {
      const elementToRemove = state.value.findIndex(
        (item) => item.id === action.payload
      );
      state.value.splice(elementToRemove, 1);
    },
  },
});

export const { setCart, addToCart, removeCartItem } = cartFeature.actions;
export const selectCart = (state) => state.cart.value;

export default cartFeature.reducer;
