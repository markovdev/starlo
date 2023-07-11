import React from "react";
import Fade from "../../Animations/Fade";
import Section from "../Section/Section";
import Heading from "../Typography/Heading";
import Container from "../Containers/Container";
import PricingCard from "../PricingCard/PricingCard";

const Pricing = () => {
  return (
    <Section className=" section--pricing" id="section--pricing">
      <Heading text="A good plans for your budget" isSecondary />
      <Container>
        <Fade className="pricing grid grid--col-3">
          <PricingCard
            price="450"
            heading="Basic"
            details={[
              "quas nesciunt et.",
              "m possimus corporis",
              "architecto ab aperia",
              "alias eius distinctio",
              "nostrum eos, incidunt ",
            ]}
          />{" "}
          <PricingCard
            price="2000"
            heading="Premium"
            details={[
              "Exercitationem deserunt",
              "rem maiores earum",
              "sit amet consectetur",
              "Lorem ipsum dolor",
            ]}
            isActive
          />{" "}
          <PricingCard
            price="200"
            heading="Custome"
            details={[
              "cupiditate accusamus",
              "sint aperiam magnam",
              "consectetur adipisicing",
              " Eveniet libero maxime",
            ]}
          />
        </Fade>
      </Container>
    </Section>
  );
};

export default Pricing;
