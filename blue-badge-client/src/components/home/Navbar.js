import React, {useState} from 'react'
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
	Button,
} from 'reactstrap'
import logo from '../../assets/BooleanBandits.png'

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
          <Nav className="top" navbar>
            <NavItem>
              <NavLink href="/auth/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/review/">My Reviews</NavLink>
            </NavItem>
						<NavItem>
              <NavLink href="/review/">All Reviews</NavLink>
            </NavItem>
						<NavItem>
							<Button onClick={props.clickLogout}>Logout</Button>
						</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
</div>
	)
}

export default Sitebar;