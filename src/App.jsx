import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/UI/Navbar";
import "./assets/css/style.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddRoom from "./pages/AddRoom";
import Me from "./pages/Me";
import TwoFactorAuth from "./pages/TwoFactorAuth";
import Room from "./pages/Room";
import AuthContext from "./context/auth-context";
import About from "./pages/About";

import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import * as actions from "./store/actions/actionTypes";
import { connect } from "react-redux";
import Loader from "./components/UI/Loader/Loader";
let logoutTimer;
function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(false);
  const [token, setToken] = useState(null);
  const [tokenExpDate, setTokenExpDate] = useState(null);
  const { name, photo, userId: id, status } = props;

  window.addEventListener("load", () => {
    setIsLoading(false);
    document.querySelector("body").style.overflowY = "visible";
  });
  const logout = useCallback(() => {
    localStorage.removeItem("userData");
    setUserInfo(null);
    setTokenExpDate(null);
    setToken(null);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userAuth")) {
      setUserInfo(JSON.parse(localStorage.getItem("userAuth")));
      setToken(JSON.parse(localStorage.getItem("userAuth")).token);
      setTokenExpDate(JSON.parse(localStorage.getItem("userAuth")).expiresIn);
    } else if (localStorage.getItem("userInformation")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInformation")));
    }
    if (isLoading) document.querySelector("body").style.overflowY = "hidden";
  }, []);
  useEffect(() => {
    if (status === "success") {
      console.log("[+] Auth is success and setting new items.");
      const expiresIn = new Date(new Date().getTime() + 1 * 10000);
      setTokenExpDate(expiresIn);
      setToken(props.token);
      localStorage.setItem(
        "userAuth",
        JSON.stringify({
          id,
          token: props.token,

          expiresIn: expiresIn,
        })
      );
      localStorage.setItem(
        "userInformation",
        JSON.stringify({
          name,
          photo,
        })
      );
    }
  }, [status]);
  useEffect(() => {
    if (token && tokenExpDate) {
      const remainingTime =
        new Date(tokenExpDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpDate]);

  return (
    <div className="app">
      <AuthContext.Provider
        value={{ userData: userInfo || { id, token, photo, name } }}
      >
        <Navbar />
        {isLoading ? <Loader /> : null}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/me" exact element={<Me />} />
          <Route path="/addRoom" exact element={<AddRoom />} />
          <Route
            path="/registerTwoFactorAuth"
            exact
            element={<TwoFactorAuth />}
          />
          <Route path="/room/:slug" exact element={<Room />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>{" "}
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isTwoFa: state.auth.isTwoFa,
    name: state.auth.name,
    photo: state.auth.photo,
    status: state.auth.status,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};
export default connect(mapStateToProps)(App);
