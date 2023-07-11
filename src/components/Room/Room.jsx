import React from "react";
import List from "../List/List";
import Item from "../List/Item/Item";
import {
  LiaBedSolid,
  LiaCalendar,
  LiaInfoSolid,
  LiaNutritionix,
  LiaPlusSolid,
  LiaWifiSolid,
} from "react-icons/lia";
import { Link } from "react-router-dom";
const Room = ({
  cover,
  name,
  slug,
  beds,
  extraBeds,
  meals,
  date,
  isOccupied,
  ratingsAverage,
}) => {
  return (
    <div className="rooms__room rooms__room--single">
      <img src={`/img/rooms/${cover}`} alt="" className="rooms__img" />
      <div className="rooms__text">
        <div className="rooms__background">
          <h4 className="rooms__heading">{name}</h4>
        </div>
        <List className="rooms__list">
          <Item>
            <LiaBedSolid className="icon" />
            <span>{beds} beds</span>
          </Item>{" "}
          <Item>
            <LiaPlusSolid className="icon" />
            <span> {`${beds} extra ${beds > 1 ? "beds" : "bed"}`}</span>
          </Item>
          <Item>
            <LiaNutritionix className="icon" />
            <span>{meals} meals</span>
          </Item>{" "}
          <Item>
            <LiaInfoSolid className="icon" />
            <span>{isOccupied ? "Occupied" : "available"}</span>
          </Item>{" "}
          <Item>
            <LiaCalendar className="icon" />
            <span>
              {new Date(date).toLocaleString("en-us", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </span>
          </Item>{" "}
          <Item>
            <LiaWifiSolid className="icon" />
            <span>Free wifi</span>
          </Item>
        </List>
        <div className="u-flex">
          <p className="rooms__rating">{ratingsAverage}</p>
          <Link className="btn btn--white" to={`/room/${slug}`}>
            View room
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
