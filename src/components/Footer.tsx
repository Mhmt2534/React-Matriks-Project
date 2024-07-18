import React from "react";
import { Col, Container, Image, NavLink, Row, Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <footer>
        <Container fluid>
          <Row className="bg-primary text-white p-4">
            <Col className="mx-5">
              <Stack>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYnqzXlLq7SQXLJILiKG2pKme-znXKlX1rQ&s"
                  alt="company logo"
                  rounded
                  width={150}
                  height={150}
                />
                <h2>Company Name</h2>
                <p>Company tagline here</p>
              </Stack>
            </Col>
            <Col className="flex-column fs-5">
              <h4>Useful Links</h4>
              <NavLink href="#" className="text-white">
                Home
              </NavLink>
              <NavLink href="#" className="text-white">
                About
              </NavLink>
              <NavLink href="#" className="text-white">
                Products
              </NavLink>
              <NavLink href="#" className="text-white">
                We're hiring!
              </NavLink>
            </Col>
            <Col>
              <h4>Contact us!</h4>
              <p>email@fakemail.com</p>
              <p>Phone: +1 (800) 867-5309</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
