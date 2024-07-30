import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav>
        <Nav.Link eventKey={2} onClick={() => navigate("/login")}>
          Login
        </Nav.Link>
        <Nav.Link eventKey={2} onClick={() => navigate("/signup")}>
          Sign Up
        </Nav.Link>
      </Nav>
    </>
  );
};

export default SignOut;
