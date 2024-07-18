import { Container, Row, Col, Button } from "react-bootstrap";

import "./FirstHome.css";
import { useNavigate } from "react-router-dom";

const FirstHome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <Container
        fluid
        className="d-flexflex-column justify-content-start align-items-center cont"
      >
        <Row className="mt-5">
          <Col className="text-center">
            <h1>Welcome!</h1>
            <h3>Please Login or Sign Up</h3>
            <Button
              variant="primary"
              className="m-4 loginbtn btndeneme"
              size="lg"
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Button
              variant="secondary"
              className="m-4 signbtn btndeneme"
              size="lg"
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FirstHome;
