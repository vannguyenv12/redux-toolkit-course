import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.slice";
import postReducer from "./post/post.slice";
import userReducer from "./user/user.slice";
import appReducer from "./app/app.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    user: userReducer,
    app: appReducer,
  },
});
