import React from "react";

const Section = (props) => {
  const { className, children, id } = props;
  return (
    <section
      className={`section ${className ? className : ""}`}
      id={`${id ? id : ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
