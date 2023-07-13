import React, { useCallback, useContext, useState } from "react";
import List from "../List/List";
import { NavLink, Navigate } from "react-router-dom";
import { LiaBedSolid, LiaLockSolid, LiaUserCogSolid } from "react-icons/lia";
import Modal from "../UI/Modal/Modal";
import AuthContext from "../../context/auth-context";
const Sidebar = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  const [redirect, setRedirect] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const toggleActiveLinks = (activeStatus) => {
    if (activeStatus) {
      return "sidebar__link sidebar__link--active";
    } else return "sidebar__link";
  };
  const navLink = (text, icon, path) => {
    return (
      <li className="sidebar__item  u-list__item u-list__item--active">
        <NavLink
          to={path}
          className={({ isActive }) => toggleActiveLinks(isActive)}
        >
          {icon}
          <span> {text}</span>
        </NavLink>
      </li>
    );
  };
  const logoutHandler = useCallback((e) => {
    localStorage.removeItem("userData");
    setConfirm(false);
    setRedirect(true);
  }, []);
  return (
    <div className="sidebar">
      {" "}
      {confirm ? (
        <Modal cb={auth.logout} text="Do you want to logout?" />
      ) : null}
      {redirect && <Navigate to="/" />}
      <List isCol>
        {navLink("Settings", <LiaUserCogSolid />, "/me")}
        {navLink("Add Room", <LiaBedSolid />, "/addRoom")}
        {navLink("Two factor", <LiaLockSolid />, "/registerTwoFactorAuth")}
      </List>
      <button
        className="sidebar__logout"
        onClick={() => {
          !confirm ? setConfirm(true) : setConfirm(!confirm);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
