import React from "react";
import Item from "../../List/Item/Item";
import Link from "../../Link/Link";
import SearchResult from "./SearchResult/SearchResult";
import List from "../../List/List";

const SearchResults = (props) => {
  const { curPage, rooms, limit, nextCb, prevCb } = props;
  const allPages = Math.ceil(rooms?.length / limit);
  let pagination;
  if (curPage === 1 && allPages > 1) {
    pagination = (
      <button className="btn btn--fill  btn--center" onClick={() => nextCb()}>
        {/* <MdEast /> */}
        Page
        {curPage + 1}
      </button>
    );
  }
  // Last page
  if (curPage === allPages && allPages > 1) {
    pagination = (
      <button className="pagination__back" onClick={() => prevCb()}>
        Page
        {/* <MdWest /> */}
        {curPage - 1}
      </button>
    );
  }
  if (curPage < allPages) {
    pagination = [
      <button className="btn btn--fill  btn--center" onClick={() => nextCb()}>
        <MdEast />
        Page
        {curPage + 1}
      </button>,
      <button className="pagination__back" onClick={() => prevCb()}>
        Page
        {/* <MdWest /> */}
        {curPage - 1}
      </button>,
    ];
  }
  // if (curPage === 1)
  if (curPage === 1 && rooms?.length > limit)
    pagination = (
      <button className="btn btn--fill  btn--center" onClick={() => nextCb()}>
        {/* <MdEast /> */}
        Page
        {curPage + 1}
      </button>
    );
  return (
    <div className="search__results">
      {pagination ? <div className="pagination">{pagination}</div> : null}
      <List isCol> {props.children}</List>
    </div>
  );
};

export default SearchResults;
