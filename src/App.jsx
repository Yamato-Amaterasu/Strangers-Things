import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import { PostList } from "./components/Posts";
import { Navbar } from "./components/NavBar";
import { LoginForm } from "./components/Login";
import { PostForm } from "./components/PostForm";
import { EditPost } from "./components/EditPost";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  // console.log(token);
  // FIX BUG WITH TOKEN BEING UNIDENTIFIED AFTER MULTIPLE REGISTRATION \\
  // useEffect(() => {
  //   const getMe = async () => {
  //     const data = await fetchMe(token);
  //     setUser(data);
  //     // console.log(data);
  //     console.log("user", user);
  //   };
  //   if (token) {
  //     getMe();
  //   }
  // }, [token]);

  return (
    <div className="App">
      <Navbar setToken={setToken} user={user} />

      <Routes>
        <Route path="/" element={<PostList token={token} />} />
        <Route
          path="/Login"
          element={<LoginForm setToken={setToken} setUser={setUser} />}
        />
        <Route path="/Postform" element={<PostForm token={token} />} />
        <Route path="/EditPost" element={<EditPost token={token} />} />
        <Route path="/Register" element={<Register setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
