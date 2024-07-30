import React, { useEffect, useState } from "react";
import { Coin } from "../models/Coin";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Coin[]>([]);
  const [isThere, setIsThere] = useState<boolean>();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites: any = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    const savedFavorites: any = localStorage.getItem("favorites");
    if (savedFavorites) {
      const deneme = JSON.parse(savedFavorites);
      if (deneme.length > 0) {
        setIsThere(true);
      } else {
        setIsThere(false);
        navigate("/home");
        toast.error("Favori ürün yok.");
      }
    }
  }, []);

  const handleRemove = (newFav: Coin) => {
    const newCoins = favorites.filter((fav) => fav.symbol !== newFav.symbol);
    setFavorites(newCoins);
    localStorage.setItem("favorites", JSON.stringify(newCoins));

    if (newCoins.length < 1) {
      navigate("/home");
      toast.error("Favori ürün yok.");
    }
  };

  return (
    <div>
      {isThere ? (
        <Container style={{ marginTop: "20px" }}>
          <Table striped bordered hover variant="dark">
            <tbody>
              {favorites.map((fav: Coin | any) => (
                <tr>
                  <th>
                    <span style={{ cursor: "pointer" }}>
                      {" "}
                      <FaStar
                        style={{ marginBottom: "6px" }}
                        onClick={() => handleRemove(fav)}
                      />
                    </span>{" "}
                    {fav.symbol}
                  </th>
                  <td>{fav.lastPrice}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      ) : (
        <Container
          style={{
            marginTop: "20px",
            marginBottom: "119px",
            textAlign: "center",
          }}
        >
          <h1>FAVORİ ÜRÜN YOK</h1>
        </Container>
      )}
    </div>
  );
};

export default Favorites;
