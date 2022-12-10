const cohort = "2211-FTB-ET-WEB-FT";

////////// this edits the post with the given post id without the need to make a new one \\\\\\\\\\
export const Edit = async (
  id,
  { title, description, price, location, willDeliver }
) => {
  try {
    const response = await fetch(
      `http://strangers-things.herokuapp.com/api/${cohort}/posts/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location,
            willDeliver,
          },
        }),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
