import React, { useState } from "react";

export const SearchBar = ({ postList }) => {
  const [search, setSearch] = useState("");

  const searchEngine = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  if (search.length > 0) {
    postList.filter((post) => {
      return post.title.match(search);
    });
  }

  return (
    <div>
      <label>SearchBar:</label>
      <input
        value={search}
        onChange={searchEngine}
        type="text"
        placeholder="Search Title Here"
      ></input>{" "}
    </div>
  );
};
