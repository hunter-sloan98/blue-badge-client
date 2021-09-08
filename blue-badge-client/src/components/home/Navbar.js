import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Col,
  Row,
  Container
} from 'reactstrap'
import logo from '../../assets/BooleanBandits.png'
import { Link, Switch, Route } from "react-router-dom";
import RevCreate from "../review/RevCreate";
import RevDisplay from "../review/RevDisplay";
import RevIndex from "../review/RevIndex";
import APISearch from "../review/APISearch";
import APIDisplay from "../review/APIDisplay"




const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);


	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
		<Navbar color="" light expand="md">
        <NavbarBrand className="nav-logo"><img src={logo} width="200" height="100"/></NavbarBrand>
        <h1 className="mainTitle">Boolean Bandit Reviews</h1>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar style={{marginRight: "18px"}}>
            <NavItem>
              <Link to='/'><NavLink>Home</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/reviews/"><NavLink>My Reviews</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to='/all-reviews/'><NavLink >All Reviews</NavLink></Link>
            </NavItem>
            <NavItem>
              <Button onClick={props.clickLogout} color="warning">Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>


        <Route exact path="/" >
          <Container className='auth-container'>
            <Row>
              <Col md='6'>
                <APISearch />
              </Col>
              <Col md='6' className='login-col'>
                <RevCreate token={props.token} />
                {/* <APISearch /> */}
              </Col>
            </Row>
          </Container>
        </Route>

              <Route exact path="/reviews/">
                {/* render={props => renderComponent(RevCreate, { ...props, token: sessionToken })} */}
                <RevDisplay token={props.token} />
              </Route> 

              <Route exact path="/all-reviews/">
                <RevIndex token={props.token} />
                {/* {<RevDisplayAll /> */}
              </Route>

            </Switch>

          </div>
          );
};

          export default Sitebar;

