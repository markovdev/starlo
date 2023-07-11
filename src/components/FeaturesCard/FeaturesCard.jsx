import React from "react";

const FeaturesCard = (props) => {
  const { icon, heading, description } = props;
  return (
    <div className="features__card">
      {icon}

      <h3 className="features__heading">{heading}</h3>
      <p className="paragraph">{description}</p>
    </div>
  );
};

export default FeaturesCard;
