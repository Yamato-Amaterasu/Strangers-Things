import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import { PostList } from "./components/Posts";
import { Navbar } from "./components/NavBar";
import { LoginForm } from "./components/Login";
import { PostForm } from "./components/PostForm";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  // console.log(token);
  // FIX BUG WITH TOKEN BEING UNIDENTIFIED AFTER MULTIPLE REGISTRATION \\
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
      <Navbar setToken={setToken} user={user} />

      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/Login" element={<LoginForm setToken={setToken} />} />
        <Route path="/Postform" element={<PostForm />} />
        <Route path="/Register" element={<Register setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
