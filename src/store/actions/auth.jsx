import axios from "axios";
import * as actionTypes from "./actionTypes";
import { API_URL } from "../../config";
import { Children } from "react";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const authSuccess = (
  status,
  token,
  isTwoFa,
  accessToken,

  userId,
  name,
  photo,
  curIndex
) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    curIndex,
    isTwoFa,
    accessToken,
    status,
    userId,
    name,
    photo,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};
export const auth = (email, password) => {
  console.log(email, password);
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(`${API_URL}/users/login`, { email, password })
      .then((resBody) => {
        const expiresIn = new Date(new Date().getTime() + 2000);

        const {
          userId,
          status,
          token,
          isTwoFa,
          sendTwoFactorRequestToken,
          name,
          photo,
        } = resBody.data;
        console.log(token, photo, name);
        dispatch(
          authSuccess(
            status,
            token,
            isTwoFa,
            sendTwoFactorRequestToken,
            userId,
            name,
            photo
          )
        );
      })
      .catch((err) => {
        console.error(err?.response.data);
        dispatch(authFail(err?.response.data.message));
      });
  };
};
export const signup = (name, email, password, confirmPassword) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(`${API_URL}/users/signup`, {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((resBody) => {
        console.log(resBody);
        const expiresIn = new Date(new Date().getTime() + 2000);

        const {
          userId,
          status,
          token,
          isTwoFa,
          sendTwoFactorRequestToken,
          name,
          photo,
        } = resBody.data;

        dispatch(
          authSuccess(
            status,
            token,
            isTwoFa,
            sendTwoFactorRequestToken,
            userId,
            name,
            photo
          )
        );
      })
      .catch((err) => {
        console.error(err?.response.data);
        dispatch(authFail(err?.response.data.message));
      });
  };
};
export const checkAuth = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(authSuccess(token));
    }
  };
};
