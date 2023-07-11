import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section/Section";
const NotFound = () => {
  return (
    <Section>
      <div className="">
        <div className="not-found">
          <h3 className="not-found__heading">
            The page you are trying to visit does not exists 🤯
          </h3>
          <p className="paragraph">Get back to the home page from </p>
          <Link to="/" className="u-link u-link--text">
            Here
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default NotFound;
