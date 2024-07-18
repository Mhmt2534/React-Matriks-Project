import React from "react";
import { Nav } from "react-bootstrap";

const SignOut = () => {
  return (
    <>
      <Nav>
        <Nav.Link eventKey={2} href="/login">
          Login
        </Nav.Link>
        <Nav.Link eventKey={2} href="/signup">
          Sign Up
        </Nav.Link>
      </Nav>
    </>
  );
};

export default SignOut;
