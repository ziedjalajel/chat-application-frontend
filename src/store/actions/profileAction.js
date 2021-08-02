import instance from "./instance";

import * as actionTypes from "./types";

export const fetchProfiles = (userId) => {
  return async (dispatch) => {
    try {
      console.log("hello", userId);
      const res = await instance.get(`/profile/${userId}`);

      dispatch({
        type: actionTypes.FETCH_PROFILES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProfile = (newProfile) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newProfile) formData.append(key, newProfile[key]);
      const res = await instance.post("/profiles", formData);
      dispatch({
        type: actionTypes.ADD_PROFILE,
        payload: { newProfile: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProfile = (updatedProfile, userId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      const res = await instance.put(`/profile/${userId}`, formData);
      console.log("user id :", userId);
      console.log(res);
      dispatch({
        type: actionTypes.UPDATE_PROFILE,
        payload: { updatedProfile: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
