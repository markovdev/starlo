import React, { useEffect, useState } from "react";
import Layout from "../components/Containers/Layout/Layout";
import img from "../assets/img/rooms/ext-room1-1.jpg";
import useHttp from "../hooks/http";
import { LiaChevronRightSolid, LiaForwardSolid } from "react-icons/lia";
import Slider from "../components/Slider/Slider";
import Slide from "../components/Slider/Slide/Slide";
import TwoFactorAuthForm from "../components/TwoFactorAuth/TwoFactorAuthForm";
import Message from "../components/UI/Message/Message";
import { API_URL } from "../config";
import Heading from "../components/Typography/Heading";
const TwoFactorAuth = () => {
  const { sendRequest, data, error, status } = useHttp();
  const [curIndex, setCurIndex] = useState(0);
  const goToSlide = function (slide) {
    const slides = document.querySelectorAll(".slider__slide");
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  useEffect(() => {
    sendRequest(`${API_URL}/users/registerTwoFactorAuth`, "GET", true);
  }, []);
  useEffect(() => {
    goToSlide(curIndex);
  }, [curIndex]);
  return (
    <Layout>
      {error && <Message text={error.response.data.message} error />}
      <Slider>
        <Slide>
          <div className="change-info two-factor">
            <Heading text="Register to 2 Steps verification" isTertiary />

            <img src={data?.qrCodeUrl} alt="" className="two-factor__img" />
            <p className="paragraph u-center-text">
              Enter This hash into your 2fa app{" "}
              <strong>
                <br /> {data?.hash}
              </strong>
            </p>
            <div className="u-center-text u-margin-top-medium">
              <button
                className="btn btn--primary"
                onClick={() => setCurIndex(1)}
              >
                <LiaChevronRightSolid />
              </button>
            </div>
          </div>
        </Slide>
        <Slide>
          <TwoFactorAuthForm url=" /api/v1/users/verifyTwoFactorAuthStatus" />
        </Slide>
      </Slider>
    </Layout>
  );
};

export default TwoFactorAuth;
