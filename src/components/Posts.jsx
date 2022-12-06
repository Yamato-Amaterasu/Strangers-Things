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
        <div>{post.description}</div>
      </div>
    );
  });

  return <div>{List}</div>;
};
