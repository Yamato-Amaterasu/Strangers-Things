import React, { useState } from "react";

export const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [delivery, setDelivery] = useState("");

  return (
    <form className="postForm">
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

      <button type="submit">Submit</button>
    </form>
  );
};
