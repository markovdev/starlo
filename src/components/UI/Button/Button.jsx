import React from "react";
import Loader from "../Loader/Loader";

const Button = (props) => {
  return (
    <button
      type={props.type || "submit"}
      className={
        props.className || "btn btn--primary u-center-text u-center-flex"
      }
      onClick={props.onClick}
    >
      {props.loading ? <Loader isInline /> : props.text}
    </button>
  );
};

export default Button;
