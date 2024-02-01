import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/counter/counter.slice";
import { fetchPosts } from "./redux/post/post.slice";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  console.log("posts", posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (posts.isLoading) {
    return <div>Loading...</div>;
  }

  if (posts.error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      {posts?.data?.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
}

export default App;
