import React, { useState, useEffect } from "react";
import { FetchPosts } from "../api/postsAPI";
import { DeleteButton } from "../api/Delete";

export const PostList = ({ token }) => {
  const [postList, setPostList] = useState([]);
  const [search, setSearch] = useState("");
  const [newPosts, setNewPosts] = useState([]);
  const [renderPosts, setRenderposts] = useState([]);
  const [searching, setSearching] = useState("");

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
  //search bar parts \\
  const searchEngine = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setRenderposts(postList);

    if (search.length > 0) {
      setSearching(true);
      const filteredPosts = postList.filter((post) => {
        return post.title.toLowerCase().includes(search.toLowerCase());
      });
      setNewPosts(filteredPosts);
      console.log(newPosts);
      setRenderposts(newPosts);
    } else {
      setRenderposts(postList);
      setSearching(false);
    }
  };

  // ending
  useEffect(() => {
    const GetPosts = async () => {
      const data = await FetchPosts();
      setPostList(data);
      console.log(postList);
    };
    GetPosts();
  }, []);

  const NewList = renderPosts.map((post) => {
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
          <DeleteButton post={post} />
        </div>
      </form>
    );
  });

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
          <DeleteButton post={post} />
        </div>
      </form>
    );
  });

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearching(false);
            setSearch("");
          }}
        >
          <label>SearchBar:</label>
          <input
            value={search}
            onChange={searchEngine}
            type="text"
            placeholder="Search Title Here"
          ></input>
          <button type="submit">clear</button>
        </form>
        {searching ? NewList : List}
      </div>
    </div>
  );
};
