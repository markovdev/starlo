import React from "react";

const Message = (props) => {
  return (
    <div className={`message message--${props.error ? "fail" : "success"} `}>
      {props.text}
    </div>
  );
};

export default Message;
