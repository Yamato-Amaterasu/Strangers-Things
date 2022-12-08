import React, { useState, useEffect } from "react";
import { FetchPosts } from "../api/postsAPI";

export const PostList = ({ token }) => {
  const [postList, setPostList] = useState([]);

  const DeletePost = async ({ token }, idToDelete) => {
    const cohort = "2211-FTB-ET-WEB-FT";

    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/${cohort}/posts/${idToDelete}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);

      const newPosts = postList.filter((post) => post.id !== idToDelete);
      setPostList(newPosts);
    } catch (error) {
      console.error(error);
    }
  };

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
      <form
        key={post._id}
        onSubmit={() => {
          DeletePost({ token }, post._id);
        }}
      >
        <h2>Title: {post.title}</h2>
        <h3>Poster: {post.author.username}</h3>
        <div>
          <p>Description: {post.description}</p>
          <p>Location:{post.location}</p>
          <p>Will Deliver: (WORK IN PROGRESS){post.willDeliver}</p>
          <p>Price: {post.price}</p>
          {/* <DeleteButton /> */}
        </div>
      </form>
    );
  });

  return <div>{List}</div>;
};
