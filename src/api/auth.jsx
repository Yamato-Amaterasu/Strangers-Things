const cohort = "2211-FTB-ET-WEB-FT";

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      }
    );
    //const token = response.data.token
    const {
      data: { token },
    } = await response.json();
    return token;
    console.log("my response date", data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchMe = async (token) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/users/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
