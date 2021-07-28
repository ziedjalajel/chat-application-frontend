// import instance from "./instance";

// import decode from "jwt-decode";

// import * as actionTypes from "./types";

// export const signIn = (userData, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signin", userData);
//       dispatch(setUser(res.data.token));
//       history.replace("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const signOut = () => {
//   return setUser();
// };

// export const checkForToken = () => (dispatch) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     const user = decode(token);
//     const currentTime = Date.now();
//     if (currentTime <= user.exp) {
//       return setUser(token);
//     } else return setUser();
//   }
// };

// const setUser = (token) => {
//   if (token) {
//     localStorage.setItem("token", token);
//     instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//     console.log(instance.defaults.headers.common.Authorization);
//     return {
//       type: actionTypes.SET_USER,
//       payload: decode(token),
//     };
//   } else {
//     localStorage.removeItem("token");
//     delete instance.defaults.headers.common.Authorization;
//     return {
//       type: actionTypes.SET_USER,
//       payload: null,
//     };
//   }
// };

import instance from "./instance";
import decode from "jwt-decode";
import * as actionTypes from "./types";

const setUser = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log(instance.defaults.headers.common.Authorization);
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};

// export const signup = (userData, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signup", userData);
//       dispatch(setUser(res.data.token));
//       history.replace("/")
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

export const signIn = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      history.replace("/");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = () => {
  return setUser();
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime <= user.exp) {
      return setUser(token);
    } else return setUser();
  }
};
