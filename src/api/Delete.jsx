const cohort = "2211-FTB-ET-WEB-FT";

////////// you guessed it. it deleted the post from the api(technically no it sets the post to inactive) \\\\\\\\\\
export const DeletePost = async (token, idToDelete) => {
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
