import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/UI/Navbar";
import "./assets/css/style.css";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router";
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
const initialAuthState = {
  isAuth: false,
  token: null,
  name: null,
  id: null,
  photo: null,
  role: null,
};
function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [freshUser, setFreshUser] = useState(false);
  const [token, setToken] = useState(null);
  const [tokenExpDate, setTokenExpDate] = useState(null);

  const [userAuth, setUserAuth] = useState(initialAuthState);
  const { status, id } = props;
  window.addEventListener("load", () => {
    setIsLoading(false);
    document.querySelector("body").style.overflowY = "visible";
  });
  const logout = useCallback(() => {
    localStorage.removeItem("userInformation");
    localStorage.removeItem("userAuth");
    setUserAuth(null);
    setFreshUser(null);
    setToken(null);
    return <Navigate to="/" />;
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("userInformation") &&
      localStorage.getItem("userAuth")
    ) {
      const userAuth = JSON.parse(localStorage.getItem("userAuth"));
      const userInfo = JSON.parse(localStorage.getItem("userInformation"));

      setUserAuth({ ...userAuth, ...userInfo });
    }

    if (isLoading) document.querySelector("body").style.overflowY = "hidden";
  }, []);
  useEffect(() => {
    if (status === "success") {
      const expiresIn = new Date(new Date().getTime() + 3 * 60 * 60 * 24);

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
          name: props.name,
          photo: props.photo,
        })
      );
      setFreshUser({
        name: props.name,
        photo: props.photo,
        token: props.token,
        id,
      });

      <Navigate to="/" />;
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
        value={{ userData: freshUser || userAuth, logout: logout }}
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
