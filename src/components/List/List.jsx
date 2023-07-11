import React from "react";

const List = (props) => {
  return (
    <ul
      className={`list ${props.isCol ? "list--col" : " "} ${props.className}`}
    >
      {props.children}
    </ul>
  );
};

export default List;
