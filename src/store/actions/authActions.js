import instance from "./instance";
import decode from "jwt-decode";
import * as actionTypes from "./types";

export const signUp = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      // dispatch(addProfile({ userId: res.data.id }));
      dispatch(setUser(res.data.token));
      history.push("/chats");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      history.push("/chats");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signOut = (history) => {
  return setUser();
};
export const updateProfile = (updatedProfile, userId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      const res = await instance.put(`/userprofile/${userId}`, formData);
      dispatch({
        type: actionTypes.UPDATE_PROFILE,
        payload: { updatedProfile: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) return setUser(token);
  }
  return setUser();
};
export const fetchProfiles = (userId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/userprofile/${userId}`);
      dispatch({
        type: actionTypes.FETCH_PROFILES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchUserProfile = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/users`);

      dispatch({
        type: actionTypes.FETCH_USER_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addChatUser = (newChatUser, chatId) => {
  return async (dispatch) => {
    try {
      newChatUser = [
        {
          userId: newChatUser.id[0],
        },
      ];
      const res = await instance.post(`/chats/${chatId}/userchat`, newChatUser);
      dispatch({
        type: actionTypes.ADD_CHAT_USER,
        payload: { newChatUser: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};
