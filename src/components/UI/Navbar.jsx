import React, { useContext, useEffect, useState } from "react";
import useHttp from "../../hooks/http";
import Message from "./Message/Message";
import SearchResults from "../Search/SearchResults/SearchResults";
import SearchResult from "../Search/SearchResults/SearchResult/SearchResult";
import logo from "../../assets/img/logo.png";
import Item from "../List/Item/Item";
import AuthContext from "../../context/auth-context";
import { Link, NavLink } from "react-router-dom";
import { API_URL } from "../../config";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const { sendRequest, data, error, status } = useHttp();
  const [search, setSearch] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    console.log(window.location.href);
    sendRequest(`${API_URL}/rooms`, "GET");
  }, []);

  const navLink = (text, path) => (
    <li className="navbar__item">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `navbar__link ${isActive ? "navbar__link--active" : ""}`
        }
      >
        {text}
      </NavLink>
    </li>
  );

  return (
    <React.Fragment>
      {error && <Message text={error.response.data.message} error />}
      <nav className="navbar">
        <div className="navbar__logo-box">
          <Link to="/">
            <img className="navbar__logo" src={logo} alt="Starlo logo" />
          </Link>
        </div>
        <div className="search">
          <input
            className="search__input"
            type="search"
            placeholder="Search for rooms..."
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          {search !== "" ? (
            <SearchResults
              curPage={curPage}
              rooms={data}
              limit={limit}
              nextCb={() => setCurPage(curPage + 1)}
              prevCb={() => setCurPage(curPage - 1)}
            >
              {data?.data.docs
                .filter((result) =>
                  search.toLowerCase() === ""
                    ? null
                    : result.name?.toLowerCase().includes(search)
                )
                .map((result) => (
                  <Item className="search__results__result">
                    <SearchResult
                      text={result.name}
                      path={`/room/${result.slug}`}
                      photo={`/img/rooms/${result.cover}`}
                    />
                  </Item>
                ))}
            </SearchResults>
          ) : null}
          ;
        </div>
        <input
          className="navbar__checkbox"
          id="mobile-nav"
          type="checkbox"
          name="mobile-nav"
        />
        <label className="navbar__btn" htmlFor="mobile-nav">
          <span className="navbar__icon"> </span>
        </label>
        <ul className="navbar__list">
          {navLink("Home", "/")}
          {navLink("About", "/about")}
          {navLink("Search", "/search")}
          {auth.userData?.token ? navLink("Settings", "/me") : null}
          {auth.userData?.token ? navLink("Settings", "/me") : null}
          {!auth.userData?.token ? navLink("Login", "/login") : null}
          {!auth.userData?.token ? navLink("Signup", "/signup") : null}
        </ul>
        <div>
          {auth.userData?.token ? (
            <Link className="navbar__user" to="/me">
              <img
                src={`/img/users/${auth.userData?.photo}`}
                alt={`${auth.userData?.name} photo`}
                className="navbar__user__pic"
              />
              <p className="navbar__user__name">{auth.userData.name}</p>
            </Link>
          ) : null}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
