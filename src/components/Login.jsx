import React, { useState } from "react";
import { LoginAPI } from "../api/LoginAPI";

export const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const token = await LoginAPI(username, password);
        setToken(token);
        localStorage.setItem("token", token);
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
