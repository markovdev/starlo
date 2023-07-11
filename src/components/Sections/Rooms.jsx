import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/http";
import Grid from "../Containers/Layout/Grid";
import Room from "../Room/Room";
import { Link } from "react-router-dom";
import Message from "../UI/Message/Message";
import Fade from "../../Animations/Fade";
import Section from "../Section/Section";
import Heading from "../Typography/Heading";
import { API_URL } from "../../config";
const Rooms = () => {
  const { sendRequest, data, error, status } = useHttp();

  useEffect(() => {
    sendRequest(`${API_URL}/rooms?page=1&limit=3`, "GET", true);
  }, []);
  return (
    <Section className="section--rooms" id="section--rooms">
      {" "}
      {error && <Message text={error.response.data.message} error />}
      <Heading text="Comfy rooms & good price" isSecondary />
      <Fade className="container">
        <Grid col="3">
          {data?.data.docs.map((room) => (
            <Room
              cover={room.cover}
              slug={room.slug}
              name={room.name}
              beds={room.bedsCount}
              extraBeds={room.extraBeds}
              meals={room.meals}
              date={room.createdAt}
              isOccupied={room.isOccupied}
              ratingsAverage={room.ratingsAverage}
            />
          ))}
        </Grid>
        <div className="u-center-text u-margin-top-big">
          <Link className="btn--text" href="/rooms">
            See more rooms →
          </Link>
        </div>
      </Fade>
    </Section>
  );
};

export default Rooms;
