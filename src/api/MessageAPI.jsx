const cohort = "2211-FTB-ET-WEB-FT";

export const PostMessage = async (content, id) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/posts/${id}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          message: {
            content,
          },
        }),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("oh no");
  }
};
