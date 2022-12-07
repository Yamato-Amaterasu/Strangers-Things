import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="" id="Home">
        {" "}
        Home{" "}
      </Link>
      <Link to="" id="PostForm">
        {" "}
        PostForm{" "}
      </Link>
      <Link to="" id="Messages">
        {" "}
        Messages{" "}
      </Link>
      <Link to="" id="Login">
        {" "}
        Login{" "}
      </Link>
      <Link to="" id="Register">
        {" "}
        Register{" "}
      </Link>
    </nav>
  );
};
