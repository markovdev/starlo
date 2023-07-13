import React, { useCallback, useEffect } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import userImg from "../../assets/img/users/user.jpeg";
import useHttp from "../../hooks/http";
import Message from "../UI/Message/Message";
import Form from "../UI/Form/Form";
import Heading from "../Typography/Heading";
import { API_URL } from "../../config";
const ChangeUserInfo = (props) => {
  const { sendRequest: getUserInfo, data: userInfo, error, status } = useHttp();
  const {
    sendRequest: updateUserInfo,
    data: updatedUserInfo,
    error: updateError,
    status: updateStatus,
  } = useHttp();
  useEffect(() => {
    getUserInfo(`${API_URL}/users/me`, "GET", true);
  }, [updatedUserInfo]);
  const updateInformationHandler = useCallback((e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const photo = document.getElementById("photo").files[0];
    updateUserInfo(
      `${API_URL}/users/updateMe`,
      "PATCH",
      true,
      {
        name,
        email,
        photo,
      },
      true
    );
  }, []);
  if (updateStatus === "success") {
    localStorage.setItem(
      "userInformation",
      JSON.stringify({
        name: updatedUserInfo?.data.user.name,
        photo: updatedUserInfo?.data.user.photo,
      })
    );
  }
  console.log(updatedUserInfo?.data.user);
  return (
    <div className="change-info">
      {error && <Message text={error.response.data.message} error />}

      {updateStatus && <Message text="Information updates successfully!" />}
      <Heading text="Change information" isTertiary />

      <Form onSubmit={updateInformationHandler}>
        <Input
          label="Full Name"
          id="name"
          value={userInfo?.data.doc.name}
          validationMsg="Your name must be 6 characters or more!"
        />
        <Input
          label="Email"
          type="email"
          id="email"
          value={userInfo?.data.doc.email}
        />

        <div className="form__control u-flex u-flex--center">
          {" "}
          <img
            src={`/img/users/${userInfo?.data.doc.photo}`}
            alt="User photo on Starlo"
            className="form__img"
          />
          <label className="form__label form__label--file" for="photo">
            Change photo
          </label>
          <input
            className="form__input--file"
            type="file"
            name="photo"
            accept="image/*"
            id="photo"
          />
        </div>
        <Button text="Update" className="btn btn--primary" type="submit" />
      </Form>
    </div>
  );
};

export default ChangeUserInfo;
