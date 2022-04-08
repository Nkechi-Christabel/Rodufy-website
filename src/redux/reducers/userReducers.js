import {
  CATCH_ERROR,
  USER_LOGIN,
  USER_REGISTER,
  FETCH_POSTS,
  CLEAR_ERROR,
  LOGOUT,
} from "../constants/actionTypes";

const initialState = {
  loading: true,
  error: null,
  products: [],
  register: [],
  login: [],
};

export const userReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case USER_REGISTER:
      return {
        ...state,
        loading: false,
        register: payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        loading: false,
        login: payload,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CATCH_ERROR:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
