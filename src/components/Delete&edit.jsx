import React from "react";

////////// this is the delete button "logic" \\\\\\\\\\
export const DeleteButton = ({ post }) => {
  if (localStorage.getItem("user") == post.author.username) {
    return <button type="submit">Delete</button>;
  }
};

////////// this is the edit button logic \\\\\\\\\\
export const EditButton = ({ post }) => {
  if (localStorage.getItem("user") == post.author.username) {
    return <button type="button">Edit Post</button>;
  }
};
