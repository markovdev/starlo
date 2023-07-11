import React from "react";

const Testimonial = (props) => {
  const { photo, text, name } = props;
  return (
    <div className="testimonials__box">
      <figure className="testimonials__shape">
        <img
          className="testimonials__image"
          src={photo}
          alt={`${name} testimonial about Starlo`}
        />
        <figcaption className="testimonials__name">{name}</figcaption>
      </figure>
      <p className="testimonials__text">{text}</p>
    </div>
  );
};

export default Testimonial;
