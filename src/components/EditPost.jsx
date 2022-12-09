import React, { useState } from "react";
import { Edit } from "../api/EditPostsAPI";

export const EditPost = ({ setPostid, postid }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [delivery, setDelivery] = useState("");
  const postId = localStorage.getItem("PostToBeEdited");

  return (
    <form
      className="postForm"
      onSubmit={async (e) => {
        e.preventDefault();
        if (localStorage.getItem("token")) {
          await Edit(postId, { title, description, location, price, delivery });
          localStorage.removeItem("PostToBeEdited");
        } else {
          alert("Please Login or Register");
        }
      }}
    >
      <label>Title:</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter Title Here"
      ></input>
      <label>Description:</label>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Enter Description Here"
      ></input>
      <label>Location:</label>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        placeholder="Enter Location Here"
      ></input>
      <label>Price:</label>
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Enter Price Here"
      ></input>
      <label>Delivery:</label>
      <input
        value={delivery}
        onChange={(e) => setDelivery(e.target.value)}
        type="text"
        placeholder="Enter Yes or No"
      ></input>

      <button type="submit">Submit Changes</button>
    </form>
  );
};
