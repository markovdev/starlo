import axios from "axios";
import * as actionTypes from "./actionTypes";
import { API_URL } from "../../config";

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

        // localStorage.setItem("token", resBody.data.token);
        // localStorage.setItem("expireIn", expiresIn);
        // if (resBody.data.status === "success") {
        //   localStorage.setItem(
        //     "userData",
        //     JSON.stringify({
        //       userId: resBody.data.userId,
        //       token: resBody.data.token,
        //       role: resBody.data.role,
        //       photo: resBody.data.photo,
        //       expiresIn: expiresIn.toISOString(),
        //     })
        //   );
        // }
        // console.log(resBody.data);
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
        //   dispatch(
        //     authSuccess(
        //       resBody.data.token,
        //       resBody.data.isTwoFa,
        //       resBody.data.sendTwoFactorRequestToken,
        //       1
        //     )
        //   );
        // }
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
