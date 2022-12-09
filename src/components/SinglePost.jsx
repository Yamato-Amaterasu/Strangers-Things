import React from "react";
import { EditButton } from "./Delete&edit";
import { DeleteButton } from "../api/Delete";

export const SinglePost = ({ selectedPost, setSelectedPost }) => {
  return (
    <div key={selectedPost._id}>
      <h2>Title: {selectedPost.title}</h2>
      <h3>Poster: {selectedPost.author.username}</h3>
      <div>
        <p>Description: {selectedPost.description}</p>
        <p>Location:{selectedPost.location}</p>
        <p>Will Deliver: (WORK IN PROGRESS){selectedPost.willDeliver}</p>
        <p>Price: {selectedPost.price}</p>
        <form
          onClick={() => {
            localStorage.setItem("PostToBeEdited", selectedPost._id);
          }}
        >
          <a href="/EditPost">
            <EditButton post={selectedPost} />
          </a>
        </form>
        <form
          onSubmit={() => {
            DeletePost({ token }, selectedPost._id);
          }}
        >
          <DeleteButton post={selectedPost} />
        </form>
        <button
          onClick={() => {
            setSelectedPost([]);
          }}
        >
          Go back
        </button>
      </div>
    </div>
  );
};
