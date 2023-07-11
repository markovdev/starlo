import React from "react";
import img from "../assets/img/rooms/ext-room1-1.jpg";
import Contact from "../components/Contact/Contact";
import Grid from "../components/Containers/Layout/Grid";
import Section from "../components/Section/Section";
const About = () => {
  return (
    <React.Fragment>
      <Section className="section--about">
        <Grid col="2" className="about">
          <div className="about__pictures">
            <img src={img} className="about__picture" />
          </div>
          <div className="about__content">
            <h4 className="about__heading">About us</h4>
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              aliquid nostrum voluptate, delectus quos ipsam ullam a nobis minus
              eveniet quisquam non, quod earum odio deserunt. Mollitia,
              necessitatibus! Reprehenderit vitae, nesciunt qui illo labore enim
              repudiandae quis ut quas dolores consequatur officiis explicabo
              nostrum eveniet modi officia tempora doloremque!
            </p>
          </div>
        </Grid>
      </Section>
      <Contact />
    </React.Fragment>
  );
};

export default About;
