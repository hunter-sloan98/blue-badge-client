import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';



const Auth = (props) => {
  return(
  <div>
    <h1>Boolean Bandits Game Review Saloon</h1>
    <Container className='auth-container'>
      <Row>
        <Col md='6'>
          <Signup updateToken={props.updateToken}/>
        </Col>
        <Col md='6' className='login-col'>
          <Login updateToken={props.updateToken}/>
        </Col>
      </Row>
    </Container>
</div>
  )
};

export default Auth;
