import React, { useState } from "react";
import { LoginAPI } from "../api/LoginAPI";
import { fetchMe } from "../api/auth";

export const LoginForm = ({ setToken, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const token = await LoginAPI(username, password);
        const user = await fetchMe(token);
        setUser(user.username);
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", user.username);
      }}
    >
      <h1> ENTER LOGIN HERE PLEASE</h1>
      <label htmlFor="username">Username: </label>
      <input
        value={username}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label htmlFor="password">Password: </label>
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit">Login</button>
    </form>
  );
};

export const Logout = (setToken) => {
  localStorage.clear();
  setToken();
};
