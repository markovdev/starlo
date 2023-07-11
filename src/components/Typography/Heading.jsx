import React from "react";

const Heading = (props) => {
  const { isSecondary, isTertiary, isForth, text, className } = props;
  return (
    <React.Fragment>
      {isSecondary ? (
        <div className="  container u-center-text u-margin-bottom-medium">
          <h2 className={`heading--secondary ${className ? className : ""}`}>
            {text}
          </h2>
        </div>
      ) : null}
      {isTertiary ? (
        <h3
          className={`${
            className ? className : ""
          }heading--tertiary u-margin-bottom-small`}
        >
          {text}
        </h3>
      ) : null}
      {isForth ? (
        <h4 className="heading--forth u-margin-bottom-small">{text}</h4>
      ) : null}
    </React.Fragment>
  );
};

export default Heading;
