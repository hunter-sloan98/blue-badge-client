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
} from 'reactstrap'
import logo from '../../assets/BooleanBandits.png'
import { Link, Switch, Route} from "react-router-dom";
import RevCreate from "../review/RevCreate";
import RevDisplay from "../review/RevDisplay";
import RevIndex  from "../review/RevIndex";
import APISearch from "../review/APISearch";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);


	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
		<Navbar color="light" light expand="md">
        <NavbarBrand className="nav-logo"><img src={logo} width="200" height="100"/></NavbarBrand>
        <h1 className="mainTitle">Boolean Bandits Reviews</h1>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
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
              <Button onClick={props.clickLogout}>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
         <Route exact path="/" >
				<RevCreate token={props.token}/>
        <APISearch />
				</Route> 
        <Route
          exact
          path="/reviews/"
          //  render={props => renderComponent(RevCreate, {...props, token: sessionToken})}
        >
          <RevDisplay token={props.token}/>
        </Route>
        <Route
          exact
          path="/all-reviews/"
        >
					<RevIndex token={props.token}/>
					{/* <RevDisplayAll /> */}
				</Route>
      </Switch>
    </div>
  );
};

export default Sitebar;
