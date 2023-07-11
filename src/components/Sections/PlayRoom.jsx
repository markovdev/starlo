import React from "react";
import photoOne from "../../assets/img/kids-room.jpg";
import photoOneLazy from "../../assets/img/kids-room-lazy.jpg";

import photoTwo from "../../assets/img/kids-room-2.jpg";
import Reveal from "../../Animations/Reveal";
import Scale from "../../Animations/Scale";
import Container from "../Containers/Container";
import Section from "../Section/Section";
import Heading from "../Typography/Heading";
const PlayRoom = () => {
  return (
    <Section className="section--room-play " id="section--room-play">
      <Container>
        <Scale>
          <div className="info">
            <img
              className="info__img info__img--1 "
              src={photoOne}
              alt="Girl taking picture"
            />

            <Reveal className="info__text info__text--1 " isRight>
              <Heading
                text="Special activities for children"
                className="info__heading heading--tertiary  u-margin-top-medium"
                isTertiary
              />
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                minima esse vitae quia commodi quas dolorem deserunt ad optio.
                Quos!minima esse vitae quia commodi quas dolorem deserunt ad
                optio. Quos!minima esse vitae quia commodi quas dolorem deserunt
                ad optio. Quos!
              </p>
            </Reveal>

            <Reveal className="info__text info__text--2" isLeft>
              {" "}
              <Heading
                className="info__heading heading--tertiary  u-margin-top-medium"
                text="Perfect rooms only for kids"
                isTertiary
              />
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                minima esse vitae quia commodi quas dolorem deserunt ad optio.
                Quos!minima esse vitae quia commodi quas dolorem deserunt ad
                optio. Quos!minima esse vitae quia commodi quas dolorem deserunt
                ad optio. Quos!
              </p>
            </Reveal>
            <img
              className="info__img info__img--2 "
              src={photoTwo}
              alt="Kid playing with his father"
            />
          </div>
        </Scale>
      </Container>
      <div className="u-center-text u-margin-top-big">
        <a className="btn--text" href="#">
          Learn more
        </a>
      </div>
    </Section>
  );
};

export default PlayRoom;
