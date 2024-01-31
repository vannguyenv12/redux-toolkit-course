import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  data: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      // Add user to the state array
      // do something error
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.data = action.payload; // Immerjs
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      // Add user to the state array
      // do something error
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = postSlice.actions;

export default postSlice.reducer;
