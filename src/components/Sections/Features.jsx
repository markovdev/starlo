import React from "react";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import Grid from "../Containers/Layout/Grid";
import {
  LiaBabyCarriageSolid,
  LiaBabySolid,
  LiaCampgroundSolid,
  LiaChildSolid,
  LiaEvernote,
  LiaHeart,
  LiaHeartSolid,
  LiaLeafSolid,
  LiaMap,
  LiaOutdentSolid,
  LiaTableSolid,
  LiaUsersSolid,
  LiaWifiSolid,
} from "react-icons/lia";
import Reveal from "../../Animations/Reveal";
import Fade from "../../Animations/Fade";
import Heading from "../Typography/Heading";
import Section from "../Section/Section";
const Features = () => {
  return (
    <Section className="section--features" id="section--features">
      <Heading text="Some of our features" isSecondary />

      <Fade>
        <Grid col="3" className="container">
          <FeaturesCard
            heading="A beautiful scenery"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            voluptatum, laborum voluptate assumenda eaque magni?"
            icon={<LiaLeafSolid className="features__icon" />}
          />{" "}
          <FeaturesCard
            heading="Healthy food"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            voluptatum, laborum voluptate assumenda eaque magni?"
            icon={<LiaHeart className="features__icon" />}
          />{" "}
          <FeaturesCard
            heading="Amazing tours"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            voluptatum, laborum voluptate assumenda eaque magni?"
            icon={<LiaMap className="features__icon" />}
          />{" "}
          <FeaturesCard
            heading="perfect for meeting"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            voluptatum, laborum voluptate assumenda eaque magni?"
            icon={<LiaUsersSolid className="features__icon" />}
          />{" "}
          <FeaturesCard
            heading="Special place for kids"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            voluptatum, laborum voluptate assumenda eaque magni?"
            icon={<LiaBabyCarriageSolid className="features__icon" />}
          />{" "}
          <FeaturesCard
            heading="A free wifi for your needs"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            voluptatum, laborum voluptate assumenda eaque magni?"
            icon={<LiaWifiSolid className="features__icon" />}
          />
        </Grid>
      </Fade>
    </Section>
  );
};

export default Features;
