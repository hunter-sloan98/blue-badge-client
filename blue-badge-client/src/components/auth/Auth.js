import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Signup from './Signup';

const Auth = (props) => {
  return(
    <Container className='auth-container'>
      <Row>
        <Col md='6'>
          <Signup updateToken={props.updateToken}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Auth;