import React, { useCallback, useEffect, useState } from "react";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import * as actions from "../store/actions/index";

import { connect } from "react-redux";
import useHttp from "../hooks/http";
import Message from "../components/UI/Message/Message";
import { Navigate } from "react-router";
import Slider from "../components/Slider/Slider";
import Slide from "../components/Slider/Slide/Slide";
import TwoFactorAuthForm from "../components/TwoFactorAuth/TwoFactorAuthForm";
import Container from "../components/Containers/Container";
import Form from "../components/UI/Form/Form";
import Section from "../components/Section/Section";
const Login = (props) => {
  const { accessToken } = props;
  const { sendRequest, data, error, status } = useHttp();
  const [curIndex, setCurIndex] = useState(props.curIndex || 0);
  const loginHandler = useCallback((e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const formData = new FormData();
    formData.append("userData", { email, password });
    props.onAuth(email, password);
  }, []);
  const goToSlide = function (slide) {
    const slides = document.querySelectorAll(".slider__slide");
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  useEffect(() => {
    if (props.status === "pending") setCurIndex(1);
  }, [props.status]);
  useEffect(() => {
    goToSlide(curIndex);
  }, [curIndex]);
  return (
    <React.Fragment>
      {props.status && <Message text="Logged in successfully!" />}
      {props.status && <Navigate to="/" />}
      {props.error && <Message text={props.error} error />}
      <Section className="section--login section--full">
        <Container>
          <Slider>
            <Slide className="slider__slide">
              <div className="login grid grid--col-2 ">
                <div className="login__text">
                  <h3 className="login__heading">
                    login and get access to your room
                  </h3>
                  <Form className="form" onSubmit={loginHandler}>
                    {" "}
                    <Input type="email" id="email" label="Email" />
                    <Input type="password" id="password" label="Password" />
                    <Button text="Login" />
                  </Form>
                </div>
                <div className="login__info">
                  <p className="login__paragraph paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam debitis eveniet veritatis hic doloribus praesentium
                    itaque illum quod molestiae!
                  </p>
                </div>
              </div>
            </Slide>
            <Slide>
              <TwoFactorAuthForm accessToken={accessToken} />
            </Slide>
          </Slider>
        </Container>
      </Section>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
    isTwoFa: state.auth.isTwoFa,
    curIndex: state.auth.curIndex,
    accessToken: state.auth.accessToken,
    status: state.auth.status,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
