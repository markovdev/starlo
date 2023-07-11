import React, { useCallback } from "react";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import useHttp from "../../hooks/http";
import Message from "../UI/Message/Message";
import Heading from "../Typography/Heading";
import { API_URL } from "../../config";
const ChangeUserPassword = () => {
  const { sendRequest, data, status, error } = useHttp();
  const updatePasswordHandler = useCallback((e) => {
    e.preventDefault();
    const currentPassword = document.getElementById("curPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const newConfirmPassword =
      document.getElementById("confirmNewPassword").value;
    sendRequest(`${API_URL}/users/updateMyPassword`, "PATCH", true, {
      currentPassword,
      newPassword,
      newConfirmPassword,
    });
  }, []);
  if (status === "success") {
    localStorage.setItem(
      "userAuth",
      JSON.stringify({
        userId: data.userId,
        token: data.token,
        role: data.role,
      })
    );
  }
  return (
    <div className="change-info">
      {" "}
      {error && <Message text={error.response.data.message} error />}
      {status && <Message text="Password updated successfully!" />}
      <Heading text="Change Password" isTertiary />
      <Form onSubmit={updatePasswordHandler}>
        <Input label="Current Password" type="password" id="curPassword" />
        <Input label="New Password" type="password" id="newPassword" />
        <Input
          label="Confirm New Password"
          type="password"
          id="confirmNewPassword"
        />
        <Button text="Change" type="submit" />
      </Form>
    </div>
  );
};

export default ChangeUserPassword;
