import React from "react";
const cohort = "2211-FTB-ET-WEB-FT";

export const FetchPosts = async () => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/posts`
    );
    const result = await response.json();

    console.log(result.data.posts);
    return result.data.posts;
  } catch (error) {
    console.error(error);
  }
};
