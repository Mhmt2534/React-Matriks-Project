import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import SignOut from "./SignOut";
import { toast } from "react-toastify";
import SignIn from "./SignIn";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Coin } from "../models/Coin";
import { BiMoon, BiSun } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";

const Header: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoginn, setIsLoginn] = useState<boolean>();
  const [them, setThem] = useState<boolean>(false);

  const context = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTickers = async () => {
      const response = await axios.get(
        "https://api.binance.com/api/v3/ticker/24hr"
      );

      const usdtTickers = response.data.filter((ticker: Coin) =>
        ticker.symbol.endsWith("USDT")
      );

      const sortedTickers = usdtTickers.sort(
        (a: Coin, b: Coin) => parseFloat(b.volume) - parseFloat(a.volume)
      );

      const top10Coins = sortedTickers.slice(0, 10);

      setCoins(top10Coins);
    };

    fetchTickers();
  }, []);

  useEffect(() => {
    const savedFavorites: any = localStorage.getItem("isSign");
    if (savedFavorites) {
      setIsLoginn(true);
    } else {
      setIsLoginn(false);
    }

    // console.log(savedFavorites);
    // console.log(isLoginn);
  }, []);

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
          <Navbar.Brand href="/home">Matriks</Navbar.Brand>
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
              <Nav.Link
                onClick={() => {
                  navigate(`/home/cryptodetail/BTCUSDT`);
                }}
              >
                Coin Details
              </Nav.Link>
            </Nav>
            {isLoginn ? <SignIn /> : <SignOut />}
            <span style={{ cursor: "pointer" }}>
              {themeContext?.theme ? (
                <BiMoon
                  onClick={() => {
                    themeContext?.toggleTheme();
                  }}
                  style={{
                    marginLeft: "10px",
                    fontSize: "24px",
                    color: "white",
                  }}
                />
              ) : (
                <BiSun
                  onClick={() => {
                    themeContext?.toggleTheme();
                  }}
                  style={{
                    marginLeft: "10px",
                    fontSize: "24px",
                    color: "white",
                  }}
                />
              )}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
