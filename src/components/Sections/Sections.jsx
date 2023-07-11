import React from "react";
import PlayRoom from "./PlayRoom";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Rooms from "./Rooms";
import Gallery from "./Gallery";
import Booking from "./Booking";
const Sections = () => {
  return (
    <React.Fragment>
      <Features />
      <PlayRoom />
      <Rooms />
      <Testimonials />
      <Pricing />
      <Gallery />
      <Booking />
    </React.Fragment>
  );
};

export default Sections;
