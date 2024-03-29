import React from "react";
import { Container, Row, Col } from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";



const Auth = (props) => {
  return (
    <>
      <Container>
        <Row>
          <p className="display-1">Boolean Bandit Reviews</p>
          <p className="subtitleMain">Your #1 Video Game Review Site!</p>
        </Row>
      </Container>
      <Container className="auth-container">
        <Row>
          <Col md="6">
            <Signup updateToken={props.updateToken} />
          </Col>
          <Col md="6" className="login-col">
            <Login updateToken={props.updateToken} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Auth;
