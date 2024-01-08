import { createSlice } from "@reduxjs/toolkit";

export const changesCounterFeature = createSlice({
  name: "changesCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    setChangesCounter: (state, action) => {
      state.value = action.payload;
    },
    addChange: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setChangesCounter, addChange } = changesCounterFeature.actions;
export const selectChangesCounter = (state) => state.changesCounter.value;

export default changesCounterFeature.reducer;
