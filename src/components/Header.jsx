import React from "react";
import hero from "../assets/img/hero.png";
import Grid from "./Containers/Layout/Grid";
import Reveal from "../Animations/Reveal";
import SlideIn from "../Animations/SlideIn";
const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__text">
        <Reveal>
          <h1 className="heading--primary">
            Starlo For All clients, devs and business owners
          </h1>
        </Reveal>

        <SlideIn hidden={{ x: "-100%" }}>
          <a
            className="btn btn--primary"
            href="https://github.com/markovdev/starlo-api#starlo"
            rel="noreferrer"
            target="_blank"
          >
            API documntation
          </a>
        </SlideIn>
      </div>
      <SlideIn hidden={{ x: "100%" }} className="header__img-box">
        <img className="header__img" src={hero} alt="Starlo hero image" />
      </SlideIn>
    </header>
  );
};

export default Header;
