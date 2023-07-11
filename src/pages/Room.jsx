import React, { useEffect } from "react";
import { useParams } from "react-router";
import useHttp from "../hooks/http";
import Layout from "../components/Containers/Layout/Layout";
import List from "../components/List/List";
import Item from "../components/List/Item/Item";
import {
  LiaBedSolid,
  LiaClockSolid,
  LiaInfoCircleSolid,
  LiaStar,
  LiaUserPlusSolid,
  LiaUsersSolid,
  LiaUtensilsSolid,
} from "react-icons/lia";
import Message from "../components/UI/Message/Message";
import Auxiliary from "../components/Containers/Auxiliary/Auxiliary";
import Section from "../components/Section/Section";
import Container from "../components/Containers/Container";
import { API_URL } from "../config";
const Room = () => {
  const { slug } = useParams();
  const { sendRequest, data, error, status } = useHttp();
  useEffect(() => {
    sendRequest(`${API_URL}/rooms/${slug}`);
  }, [slug]);

  return (
    <React.Fragment>
      {error ? (
        <Message text={error.response.data.message} error />
      ) : (
        <Auxiliary>
          {" "}
          <Section className="section--room">
            <div className="room">
              <div className="room__showcase">
                <img
                  src={`/img/rooms/${data?.data.doc.cover}`}
                  alt=""
                  className="room__img"
                />
                <div className="room__text">
                  <div className="room__heading-background">
                    <h4 className="room__heading">{data?.data.doc.name}</h4>
                  </div>{" "}
                  <button className="btn btn--white">Add to cart</button>
                </div>
              </div>
            </div>
          </Section>
          <Section>
            <Container>
              <div className="room-details grid grid--col-2">
                <List isCol>
                  <Item>
                    <LiaClockSolid className="icon" />
                    <span>12h</span>
                  </Item>{" "}
                  <Item>
                    <LiaStar className="icon" />
                    <span>Stars</span>
                  </Item>{" "}
                  <Item>
                    <LiaUsersSolid className="icon" />
                    <span>ratings quantity</span>
                  </Item>{" "}
                  <Item>
                    <LiaBedSolid className="icon" />
                    <span>Beds</span>
                  </Item>{" "}
                  <Item>
                    <LiaUserPlusSolid className="icon" />
                    <span>Extra bed for {data?.data.doc.extraBeds} guests</span>
                  </Item>{" "}
                  <Item>
                    <LiaUtensilsSolid className="icon" />
                    <span>Meals {data?.data.doc.meals}</span>
                  </Item>{" "}
                  <Item>
                    <LiaInfoCircleSolid className="icon" />
                    <span>room is {}</span>
                  </Item>
                </List>
                <div className="room-details__description">
                  <h3 className="room-details__heading">Room summary:</h3>
                  <p className="paragraph">{data?.data.doc.summary}</p>
                </div>
              </div>
            </Container>
          </Section>
          <Section className="section--room-images">
            <div className="room-images">
              <div className="room-images__container grid grid--col-3 grid--no-gap">
                {data?.data.doc?.photos.map((photo) => (
                  <img
                    src={`/img/rooms/${photo}`}
                    alt=""
                    className="room-images__image"
                  />
                ))}
              </div>
            </div>
          </Section>
        </Auxiliary>
      )}
    </React.Fragment>
  );
};

export default Room;
