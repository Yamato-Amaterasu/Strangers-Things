import React, { useState } from "react";

export const DeleteButton = ({ post }) => {
  if (localStorage.getItem("user") == post.author.username) {
    return <button type="submit">Delete</button>;
  }
};

export const EditButton = ({ post }) => {
  if (localStorage.getItem("user") == post.author.username) {
    return <button type="button">Edit Post</button>;
  }
};
