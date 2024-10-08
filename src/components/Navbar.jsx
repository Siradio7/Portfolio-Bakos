import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Navbare = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <Navbar light expand="lg" className="Navbar-bg fixed-top">
        <NavbarBrand className="text-white font-weight-bold font-family-open-sans">
        <img alt="Logo " src="https://img.icons8.com/?size=100&id=19294&format=png&color=000000" height="40" width="40"/>
          NeoCraft
        </NavbarBrand>
        <NavbarToggler color='whitw' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link active className="nav-link-hover font-family-open-sans font-size-18" to="/">Accueil</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link-hover font-family-open-sans font-size-18" to="/About">About</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link-hover font-family-open-sans font-size-18" to="/Project">Projets</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link-hover font-family-open-sans font-size-18" to="/Contact">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
};

export default Navbare;