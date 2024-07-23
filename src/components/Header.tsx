import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import SignOut from "./SignOut";
import { toast } from "react-toastify";
import SignIn from "./SignIn";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Matriks</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  navigate("/home/favorites");
                }}
              >
                Favorites
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  navigate("/About");
                }}
              >
                About
              </Nav.Link>
            </Nav>
            {context?.isLogin ? <SignIn /> : <SignOut />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
