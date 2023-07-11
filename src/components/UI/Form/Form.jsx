import React from "react";

const Form = (props) => {
  const { onSubmit, children, className, isCol } = props;
  return (
    <form
      className={`form ${isCol ? "form--col" : ""} ${
        className ? className : ""
      }`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
