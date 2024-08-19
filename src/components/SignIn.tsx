import React, { useContext, useEffect, useState } from "react";
import { Dropdown, Image, Nav, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User } from "../models/User";

const SignIn = () => {
  const [userName, setUserName] = useState();

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const userData: User | any = localStorage.getItem("isSign");
    console.log(userData);

    const user = JSON.parse(userData);
    setUserName(user);
  });

  const handleSignOut = () => {
    localStorage.removeItem("isSign");
    localStorage.removeItem("favorites");
    // authContext?.setIsLogin(false);
    // authContext?.setUserName("");
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
          title={userName}
          menuVariant="dark"
        >
          <NavDropdown.Item href="/" onClick={handleSignOut}>
            Sign Out
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
};

export default SignIn;
