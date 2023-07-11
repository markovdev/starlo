import React, { useCallback } from "react";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import useHttp from "../hooks/http";
import Message from "../components/UI/Message/Message";
import { Navigate } from "react-router";
import Section from "../components/Section/Section";
import Form from "../components/UI/Form/Form";
import { API_URL } from "../config";
import Container from "../components/Containers/Container";
const Signup = () => {
  const { sendRequest, data, error, status } = useHttp();
  const signupHandler = useCallback((e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    sendRequest(`${API_URL}/users/signup`, "POST", null, {
      name,
      email,
      password,
      confirmPassword,
    });
  });
  console.log(data);
  if (status === "success") {
    const { token, photo, name, role, userId } = data;
    const expiresIn = new Date(new Date().getTime() + 1 * 10000);

    localStorage.setItem(
      "userAuth",
      JSON.stringify({
        id: userId,
        token,
        role,
        expiresIn: expiresIn,
      })
    );
    localStorage.setItem(
      "userInformation",
      JSON.stringify({
        name,
        photo,
      })
    );
    return <Navigate to="/" />;
  }

  // if (status === "success") return <Navigate to="/me" />;

  return (
    <React.Fragment>
      {status && <Message text="Signed up successfully!" />}
      {error?.response && <Message text={error?.response.data.message} error />}
      <Section className="section--signup">
        <Container>
          <div className="signup grid grid--col-2 grid--no-gap">
            <div className="signup__text">
              <h3 className="signup__heading">
                Signup and get access to your room
              </h3>
              <Form className="form" onSubmit={signupHandler}>
                <Input label="Full Name" id="name" />
                <Input label="Email" id="email" />
                <Input type="password" label="Password" id="password" />
                <Input
                  type="password"
                  label="Confirm Password"
                  id="confirmPassword"
                />
                <Button text="Signup" type="submit" id="name" />
              </Form>
            </div>
            <div className="signup__info">
              <p className="signup__paragraph paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                debitis eveniet veritatis hic doloribus praesentium itaque illum
                quod molestiae!
              </p>
              <p className="signup__author">Alex Mason</p>
            </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default Signup;
