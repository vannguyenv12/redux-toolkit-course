import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("mode") || "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      localStorage.setItem("mode", action.payload); // light or dark
      state.mode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMode } = appSlice.actions;

export default appSlice.reducer;
