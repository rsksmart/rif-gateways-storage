import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import LogoNavbar from "rifui/LogoNavbar";
import Web3Provider from "providers/Web3Provider";

import { ROUTES } from "routes";

export default () => (
  <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
    <LinkContainer to={ROUTES.HOME}>
      <Navbar.Brand>
        <LogoNavbar />
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end">
        <LinkContainer to={ROUTES.DOWNLOAD}>
          <Nav.Link>Download</Nav.Link>
        </LinkContainer>
        <LinkContainer to={ROUTES.UPLOAD}>
          <Nav.Link>Upload</Nav.Link>
        </LinkContainer>
        <LinkContainer to={ROUTES.SETTINGS}>
          <Nav.Link>Settings</Nav.Link>
        </LinkContainer>
        <Web3Provider.Consumer>
          {({ state: { user }, actions: { lock, unlock } }) => (
            <div>
              {!user && (
                <Button variant="outline-primary" onClick={unlock}>
                  Unlock wallet
                </Button>
              )}
              {user && (
                <NavDropdown title={`${user.address}`} id="basic-nav-dropdown">
                  <NavDropdown.Item>View wallet</NavDropdown.Item>
                  <NavDropdown.Item
                    href={`https://explorer.rsk.co/address/${user.address}`}
                    target="blank"
                  >
                    View on explorer
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={lock}>
                    Lock Wallet
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </div>
          )}
        </Web3Provider.Consumer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
