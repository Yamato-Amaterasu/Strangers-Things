import React, { useState, useEffect } from "react";
import { FetchPosts } from "../api/postsAPI";
import { DeleteButton, EditButton } from "./Delete&edit";
import { DeletePost } from "../api/Delete";
import { SinglePost } from "./SinglePost";

export const PostList = ({ token, selectedPost, setSelectedPost }) => {
  const [postList, setPostList] = useState([]);
  const [search, setSearch] = useState("");
  const [newPosts, setNewPosts] = useState([]);
  const [renderPosts, setRenderposts] = useState([]);
  const [searching, setSearching] = useState("");
  // const [selectedPost, setSelectedPost] = useState([]);

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
          <form
            onClick={() => {
              localStorage.setItem("PostToBeEdited", post._id);
            }}
          >
            <a href="/EditPost">
              <EditButton post={post} />
            </a>
          </form>
          <form
            onSubmit={() => {
              DeletePost(localStorage.getItem("token"), post._id);
            }}
          >
            <DeleteButton post={post} />
          </form>
          <button onClick={() => setSelectedPost(post)}>View Post</button>
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
          <form
            onClick={() => {
              localStorage.setItem("PostToBeEdited", post._id);
            }}
          >
            <a href="/EditPost">
              <EditButton post={post} />
            </a>
          </form>
          <form
            onSubmit={() => {
              DeletePost({ token }, post._id);
            }}
          >
            <DeleteButton post={post} />
          </form>
          <button onClick={() => setSelectedPost(post)}>View Post</button>
        </div>
      </div>
    );
  });

  return (
    <div>
      {selectedPost._id ? (
        <SinglePost
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
        />
      ) : (
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
      )}
    </div>
  );
};
