import instance from "./instance";

export const fetchSignUp = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/signup");
    } catch (error) {
      console.log(error);
    }
  };
};
export const addSignUp = (newSignUp, history) => {
  return async (dispatch) => {
    try {
      console.log(newSignUp);
      const res = await instance.post("/signup", newSignUp);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
