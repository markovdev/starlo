import React, { useCallback, useEffect, useState } from "react";
import Link from "../Link/Link";
import Button from "../UI/Button/Button";
import useHttp from "../../hooks/http";
import Modal from "../UI/Modal/Modal";
import { API_URL } from "../../config";
const DeleteUserAccount = () => {
  const [confirm, setConfirm] = useState(false);
  const { sendRequest, data, status, isLoading } = useHttp();
  const deleteMeHandler = useCallback(() => {
    sendRequest(`${API_URL}/users/deleteMe`, "DELETE", true);
    setConfirm(false);
  }, []);

  return (
    <div className="change-info">
      {" "}
      {confirm ? (
        <Modal
          cb={() => deleteMeHandler()}
          text="Do you want to perform your action?"
        />
      ) : null}
      <h3 className="heading--tertiary u-margin-bottom-medium">
        Delete Your Account
      </h3>
      <Button
        text="Delete Account"
        // onClick={() => setConfirm(!confirm)}
        onClick={() => {
          !confirm ? setConfirm(true) : setConfirm(!confirm);
        }}
        className="btn btn--warn"
      />
    </div>
  );
};

export default DeleteUserAccount;
