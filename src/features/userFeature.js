import { createSlice } from "@reduxjs/toolkit";

export const userFeature = createSlice({
  name: "user",
  initialState: {
    value: { privilege: { privilege: "user" } },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userFeature.actions;
export const selectUser = (state) => state.user.value;

export default userFeature.reducer;
