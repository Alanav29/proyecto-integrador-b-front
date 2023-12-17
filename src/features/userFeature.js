import { createSlice } from "@reduxjs/toolkit";

export const userFeature = createSlice({
  name: "user",
  initialState: {
    value: undefined,
  },
  reducers: {
    addActiveUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addActiveUser } = userFeature.actions;
export const selectUser = (state) => state.user.value;

export default userFeature.reducer;
