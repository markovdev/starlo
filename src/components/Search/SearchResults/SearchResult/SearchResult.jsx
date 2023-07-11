import React from "react";
import { Link } from "react-router-dom";
const SearchResult = (props) => {
  return (
    <Link className="link search__results__result__link" to={props.path}>
      <p className="search__results__result__heading">{props.text}</p>
      <img src={props.photo} alt="" className="search__results__result__img" />
    </Link>
  );
};

export default SearchResult;
