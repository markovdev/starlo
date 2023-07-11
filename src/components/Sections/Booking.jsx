import React from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Reveal from "../../Animations/Reveal";
import Section from "../Section/Section";
import Container from "../Containers/Container";
import Heading from "../Typography/Heading";
import Form from "../UI/Form/Form";
const Booking = () => {
  return (
    <Section className=" section--6">
      <Heading
        text="Start your holiday with us"
        className="color--white"
        isSecondary
      />
      <Container>
        <div className="booking grid grid--col-2  ">
          <div className="booking__text-box color--white">
            <Reveal className="booking__text">
              <Heading text="Find a room that is good for you" isTertiary />
              <p className="paragraph u-margin-bottom-small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                culpa corporis, voluptatibus voluptas odio incidunt.
                Reprehenderit tempora expedita, consectetur, fugiat quo sequi
                accusamus quis non fuga fugit pariatur cupiditate? Esse!
              </p>
            </Reveal>
            <Reveal className="booking__text">
              <Heading text="Meetings room are avilable" isTertiary />

              <p className="paragraph u-margin-bottom-small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                culpa corporis, voluptatibus voluptas odio incidunt.
                Reprehenderit
              </p>
            </Reveal>
          </div>
          <Form className="form form--col" action="#">
            {" "}
            <Input
              label="full name"
              placeholder="John Doe"
              min="4"
              validationMsg="Your name must be at least 4 charcters or more!"
              isLight
            />
            <Input
              type="email"
              label="Your email"
              placeholder="user@starlo.com"
              validationMsg="your email must be at least 8 charcters!"
              isLight
            />
            <Button className="btn btn--white" text="Register" />
          </Form>
        </div>
      </Container>
    </Section>
  );
};

export default Booking;
