import React, { useContext } from "react";
import { Dropdown, Image, Nav, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    authContext?.setIsLogin(false);
    authContext?.setUserName("");
    navigate("/");
  };

  return (
    <>
      <Nav>
        <Image
          src="https://www.technopat.net/sosyal/eklenti/ao2lpbx_460s-jpg.1126827/"
          roundedCircle
          width={40}
        />

        <NavDropdown
          id="nav-dropdown-dark-example"
          title={authContext?.userName}
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" onClick={handleSignOut}>
            Sign Out
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};

export default SignIn;
