import React, { useState, useEffect } from "react";
import { FetchPosts } from "../api/postsAPI";

export const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const GetPosts = async () => {
      const data = await FetchPosts();
      setPostList(data);
      console.log(postList);
    };
    GetPosts();
  }, []);

  const List = postList.map((post) => {
    return (
      <div key={post._id}>
        <h2>Title: {post.title}</h2>
        <h3>Poster: {post.author.username}</h3>
        <div>
          <p>Description: {post.description}</p>
          <p>Location:{post.location}</p>
          <p>Will Deliver: (WORK IN PROGRESS){post.willDeliver}</p>
          <p>Price: {post.price}</p>
          <button>Delete (WORK IN PROGRESS)</button>
        </div>
      </div>
    );
  });

  return <div>{List}</div>;
};
