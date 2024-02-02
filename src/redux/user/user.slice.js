import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (userId, thunkAPI) => {
    console.log("hit fetchUsers");
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (data, thunkAPI) => {
    const response = await axios.post("http://localhost:3000/users", data);

    thunkAPI.dispatch(fetchUsers());

    return response.data;
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      console.log("reducer action fetchUsers: ", action.payload);
      state.data = action.payload;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log("reducer action createUser: ", action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
