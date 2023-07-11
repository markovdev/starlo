import React from "react";
import Grid from "../Containers/Layout/Grid";
import {
  LiaEnvelope,
  LiaLocationArrowSolid,
  LiaMapMarkedSolid,
  LiaPhoneSolid,
} from "react-icons/lia";
import Section from "../Section/Section";
import Container from "../Containers/Container";
const Contact = () => {
  return (
    <Section className="section--contact">
      <Container className="container">
        <Grid className="contact" col="3">
          <div className="contact__box">
            <LiaEnvelope className="features__icon" />
            <h3 className="heading--tertiary">contact@starlo.com</h3>
          </div>{" "}
          <div className="contact__box">
            <LiaPhoneSolid className="features__icon" />
            <h3 className="heading--tertiary">+1 000-0000-000</h3>
          </div>{" "}
          <div className="contact__box">
            <LiaMapMarkedSolid className="features__icon" />
            <h3 className="heading--tertiary">1st, St. name</h3>
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default Contact;
