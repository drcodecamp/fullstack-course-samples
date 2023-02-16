let validUser = "doctor";
let validPassword = "123";

export const loginUser = (username, password) => {
  if (username === validUser && password === validPassword) {
    return {
      credentials: "SUCCESS",
    };
  }
  throw new Error("Incorrect user and password");
};
