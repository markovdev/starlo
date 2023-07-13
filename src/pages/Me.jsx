import React, { useContext } from "react";
import Layout from "../components/Containers/Layout/Layout";
import ChangeUserInfo from "../components/ChangeUSerInfo/ChangeUserInfo";
import ChangeUserPassword from "../components/ChangeUserPassword/ChangeUserPassword";
import DeleteUserAccount from "../components/DeleteUserAccount/DeleteUserAccount";

import AuthContext from "../context/auth-context";
import Message from "../components/UI/Message/Message";
const Me = () => {
  const auth = useContext(AuthContext);
  let data = (
    <Layout>
      {/* Change Information */}
      <ChangeUserInfo />
      {/* Change Password */}
      <ChangeUserPassword />
      {/* Delete Account */}
      <DeleteUserAccount />
    </Layout>
  );
  if (!auth.userData?.token)
    data = <Message text="You do not have access to this page!" error />;
  return data;
};

export default Me;
