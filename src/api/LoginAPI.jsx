const cohort = "2211-FTB-ET-WEB-FT";

////////// this logs you into the website and gives you a token  \\\\\\\\\\
export const LoginAPI = async (username, password) => {
  try {
    const loginVerify = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/users/login`,
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
    const result = await loginVerify.json();
    console.log(result);
    return result.data.token;
  } catch (error) {
    console.error(error);
  }
};
