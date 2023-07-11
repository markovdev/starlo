import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const authSuccess = (token, isTwoFa, accessToken, curIndex) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    curIndex,
    isTwoFa,
    accessToken,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};
export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1/api/users/login", {
        email,
        password,
      })

      .then((resBody) => {
        const expiresIn = new Date(new Date().getTime() + 2000);

        dispatch(
          authSuccess(
            resBody.data.token,
            resBody.data.isTwoFa,
            resBody.data.sendTwoFactorRequestToken,
            1
          )
        );
        // localStorage.setItem("token", resBody.data.token);
        // localStorage.setItem("expireIn", expiresIn);
        // if (resBody.data.status === "success") {
        //   localStorage.setItem(
        //     "userData",
        //     JSON.stringify({
        //       userId: resBody.data.userId,
        //       token: resBody.data.token,
        //       role: resBody.data.role,
        //       expiresIn: expiresIn.toISOString(),
        //     })
        //   );
        //   dispatch(
        //     authSuccess(
        //       resBody.data.token,
        //       resBody.data.isTwoFa,
        //       resBody.data.sendTwoFactorRequestToken,
        //       1
        //     )
        //   );
        // }

        // localStorage.setItem(
        //   "userData",
        //   JSON.stringify({
        //     userId: resBody.data.userId,
        //     token: resBody.data.token,
        //     role: resBody.data.role,
        //     expiresIn: expiresIn.toISOString(),
        //   })
        // );
      })
      .catch((err) => {
        console.error(err);
        dispatch(authFail(err.response.data.message));
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
