import React from "react";

const Item = (props) => {
  return (
    <li
      className={`list__item ${props.className ? props.className : ""}`}
      key={props.key}
    >
      {props.children}
    </li>
  );
};

export default Item;
