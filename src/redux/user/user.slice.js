import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  console.log("hit fetchUsers");
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async (data, thunkAPI) => {
    const response = await axios.post("http://localhost:3000/users", data);

    thunkAPI.dispatch(fetchUsers());

    return response.data;
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (userId) => {
    const response = await axios.get(`http://localhost:3000/users/${userId}`);

    return response.data;
  }
);

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
  },
  data: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.user.name = action.payload;
    },

    changeEmail: (state, action) => {
      state.user.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {});

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.user.id = action.payload.id;
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
    });
  },
});

// Action creators are generated for each case reducer function
export const { changeEmail, changeName } = userSlice.actions;

export default userSlice.reducer;
