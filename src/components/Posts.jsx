import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchPosts } from "../api/postsAPI";
import { DeleteButton, EditButton } from "./Delete&edit";

export const PostList = ({ token, postid, setPostid }) => {
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
      <div key={post._id}>
        <h2>Title: {post.title}</h2>
        <h3>Poster: {post.author.username}</h3>
        <div>
          <p>Description: {post.description}</p>
          <p>Location:{post.location}</p>
          <p>Will Deliver: (WORK IN PROGRESS){post.willDeliver}</p>
          <p>Price: {post.price}</p>

          <a href="/EditPost">
            <EditButton post={post} />
          </a>
          <form
            onSubmit={() => {
              DeletePost({ token }, post._id);
            }}
          >
            <DeleteButton post={post} />
          </form>
        </div>
      </div>
    );
  });

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
          <form>
            <a href="/EditPost">
              <EditButton post={post} />
            </a>
          </form>
          <form
            onSubmit={(e) => {
              DeletePost({ token }, post._id);
            }}
          >
            <DeleteButton post={post} />
          </form>
        </div>
      </div>
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
