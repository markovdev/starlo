import React from "react";

const Link = (props) => {
  return (
    <a href={props.path} className={`link ${props.class}`}>
      {props.text || props.children}
    </a>
  );
};

export default Link;
