import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import Grid from "../Containers/Layout/Grid";
import userOne from "../../assets/img/testimonial-1.jpg";
import userTwo from "../../assets/img/testimonial-2.jpg";
import userThree from "../../assets/img/testimonial-3.jpg";
import userFour from "../../assets/img/testimonial-4.jpg";
import background from "../../assets/img/testimonials-video.mp4";
import Reveal from "../../Animations/Reveal";
import Section from "../Section/Section";
import Heading from "../Typography/Heading";
const Testimonials = () => {
  return (
    <Section className="section--4" id="section--testimonials">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted="muted" loop="loop">
          <source src={background} type="video/mp4" />
        </video>
      </div>

      <Heading
        text="what our clients say..."
        className="color--white"
        isSecondary
      />
      <Reveal className=" container">
        <Grid col="2" className="testimonials ">
          <Testimonial
            name="Harvey Marshall"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          vel autem at. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Placeat vel autem at. Lorem ipsu"
            photo={userOne}
          />{" "}
          <Testimonial
            name="Harvey Marshall"
            text="      ipisicing elit. Placeat vel autem at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Placeat vel autem at. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Placeat vel autem at."
            photo={userTwo}
          />{" "}
          <Testimonial
            name="Cory Marshall"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      vel autem at. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Placeat vel autem at. Lorem ipsu"
            photo={userThree}
          />{" "}
          <Testimonial
            name=" Colleen Shelton"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
    vel autem at. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Placeat vel autem at. Lorem ipsu"
            photo={userFour}
          />
        </Grid>
      </Reveal>
    </Section>
  );
};

export default Testimonials;
