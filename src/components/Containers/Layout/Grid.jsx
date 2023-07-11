import React from "react";

const Grid = (props) => {
  return (
    <div className={`grid grid--col-${props.col} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Grid;
