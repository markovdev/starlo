import React, { useEffect, useState } from "react";

const Input = (props) => {
  const { min = 6, max = 32, validationMsg, type } = props;
  const [errMsg, setErrMsg] = useState("");
  const checkValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const inputValueHandler = (e) => {
    const valLength = e.target.value.length;
    // if (max && valLength !== max)
    //   return (e.target.style.border = "3px solid red")
    if (valLength < min) {
      setErrMsg(validationMsg);
      return (e.target.style.border = "1px solid red");
    }
    if (type === "email" && !checkValidEmail(e.target.value)) {
      return setErrMsg("Invalid email!");
    }
    setErrMsg("");
    return (e.target.style.border = "1px solid #ccc");
  };

  const getInputType = (type = "text", id, options) => {
    if (type === "select") {
      return (
        <select onChange={props.onChange} className="form__select">
          {options.map((opt) => (
            <option value={opt.value} key={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    }
    return (
      <input
        className={` ${props.className} form__input`}
        type={type}
        placeholder={props.placeholder}
        id={id}
        onChange={!props.disableVald ? inputValueHandler : ""}
        minLength={min}
        maxLength={max}
        defaultValue={props.value || null}
        required
      />
    );
  };
  let inputEl = getInputType("text", props.id);
  if (props.type === "email") inputEl = getInputType("email", props.id);
  else if (props.type === "password")
    inputEl = getInputType("password", props.id);
  else if (props.type === "select")
    inputEl = getInputType("select", props.id, props.options);
  return (
    <div className="form__control">
      <label
        htmlFor={props.id}
        className={`form__label ${props.isLight ? "form__label--light" : ""}`}
      >
        {props.label}
      </label>

      {inputEl}
      {<p className="form__message">{errMsg}</p>}
    </div>
  );
};

export default Input;
