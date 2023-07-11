import React from "react";

const InputImg = (props) => {
  const checkMulti = props.isMulti ? "multiple" : null;
  return (
    <div className="form__control u-flex u-flex--center">
      {" "}
      <img src={props.photo} alt="User photo on Starlo" className="form__img" />
      <label className="form__label form__label--file" for={props.id}>
        {props.text}{" "}
      </label>
      <input
        className="form__input--file"
        type="file"
        accept="image/*"
        id={props.id}
        onChange={props.onChange || null}
        multiple={props.isMulti ? true : null}
      />
    </div>
  );
};

export default InputImg;
