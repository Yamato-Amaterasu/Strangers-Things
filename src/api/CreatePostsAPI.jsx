const cohort = "2211-FTB-ET-WEB-FT";

export const CreatePosts = async ({
  token,
  title,
  description,
  price,
  location,
  willDeliver,
}) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

    const result = response.json();
    console.log(result);
  } catch (error) {
    console.error("oh no");
  }
};
