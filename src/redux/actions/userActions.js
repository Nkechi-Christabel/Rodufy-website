import axios from "axios";
import {
  CATCH_ERROR,
  USER_LOGIN,
  USER_REGISTER,
  FETCH_POSTS,
  CLEAR_ERROR,
  LOGOUT,
} from "../constants/actionTypes";

//Sorting errors to pass to dispatch
function handleError(err, num) {
  if (err.response) {
    return (
      err.response.data.Error?.split(" ").slice(0, num).join(" ") ||
      `Error ${err.response.status}` ||
      err.response.header
    );
  } else if (err.request) {
    return err.request;
  } else {
    return err.message;
  }
}

const base = axios.create({
  baseURL: "https://giropay.xyz/api/v1/giro-app/",
});

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await base.get("products");
    dispatch({
      type: FETCH_POSTS,
      payload: res.data.data,
    });
  } catch (e) {
    dispatch({
      type: CATCH_ERROR,
      payload: handleError(e, 5),
    });
  }
};

export const register = (user) => async (dispatch) => {
  try {
    const res = await base.post("auth/register", user);
    dispatch({
      type: USER_REGISTER,
      payload: user,
    });
    return res;
  } catch (e) {
    dispatch({
      type: CATCH_ERROR,
      payload: handleError(e, 4),
    });
  }
};

export const login = (userLoggedIn) => async (dispatch) => {
  try {
    const res = await base.post("auth/login", userLoggedIn);
    dispatch({
      type: USER_LOGIN,
      payload: userLoggedIn,
    });
    return res;
  } catch (e) {
    dispatch({
      type: CATCH_ERROR,
      payload: handleError(e, 2),
    });
  }
};

export function clearError() {
  return (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
}
