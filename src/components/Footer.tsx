import React from "react";
import { Col, Container, Image, NavLink, Row, Stack } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <footer
          className="text-center text-lg-start"
          style={{ backgroundColor: "#db6930" }}
        >
          <div className="container d-flex justify-content-center py-5">
            <a href="https://www.linkedin.com/in/mahmut-g%C3%BCne%C5%9F-79a254262/">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-floating mx-2"
                style={{ backgroundColor: "#54456b;" }}
              >
                <FaLinkedin />
              </button>
            </a>
            <a href="https://github.com/Mhmt2534">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-floating mx-2"
                style={{ backgroundColor: "#54456b;" }}
              >
                <FaGithub />
              </button>
            </a>
            <a href="https://www.instagram.com/gns.mhmt174/">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-floating mx-2"
                style={{ backgroundColor: "#54456b;" }}
              >
                <FaInstagram />
              </button>
            </a>
          </div>

          <div
            className="text-center text-white p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}
          >
            2024:
            <a
              className="text-white"
              href="https://github.com/Mhmt2534/React-Matriks-Project"
            >
              Link to the project
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
