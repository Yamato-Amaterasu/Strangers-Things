import React, { useState, useEffect } from "react";
import "./App.css";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import { PostList } from "./components/Posts";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  // console.log(token);
  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
      // console.log(data);
      console.log("user", user);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  return (
    <div className="App">
      <h1>{user?.username}</h1>
      <PostList />
      <Register setToken={setToken} />
    </div>
  );
}

export default App;
