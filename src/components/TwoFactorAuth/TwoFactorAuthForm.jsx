import React, { useCallback, useEffect } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import useHttp from "../../hooks/http";
import { Navigate } from "react-router";
import { API_URL } from "../../config";
const TwoFactorAuth = (props) => {
  const { sendRequest, data, error, status, isLoading } = useHttp();
  const sendOtpHandler = (e) => {
    e.preventDefault();
    const otp = document.getElementById("otp").value;
    sendRequest(`${API_URL}/users/verifyTwoFactorAuth`, "POST", true, {
      otp,
    });
  };
  useEffect(() => {}, [status]);
  if (status === "success") {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: data.userId,
        token: data.token,
        role: data.role,
        name: data.name,
        photo: data.photo,

        expiresIn: Date.now() + 3 * 1000 * 60 * 60 * 24,
      })
    );
    return <Navigate to="/" />;
  }
  return (
    <form className="two-auth" onSubmit={sendOtpHandler}>
      <h4 className="two-auth__heading">Two steps detected!</h4>
      <p className="paragraph">Enter your 6-digits from your 2fa app</p>
      <Input placeholder="123456" min="6" max="6" id="otp" />
      <Button text="Verify" />
    </form>
  );
};

export default TwoFactorAuth;
