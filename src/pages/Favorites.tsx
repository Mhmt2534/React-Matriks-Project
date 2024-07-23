import React, { useEffect, useState } from "react";
import { Coin } from "../models/Coin";
import { Container, Table } from "react-bootstrap";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Coin[]>([]);
  const [isThere, setIsThere] = useState<boolean>();

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
      }
    }
  }, []);

  return (
    <div>
      {isThere ? (
        <Container style={{ marginTop: "20px" }}>
          <Table striped bordered hover variant="dark">
            <tbody>
              {favorites.map((fav: Coin | any) => (
                <tr>
                  <td>{fav.symbol}</td>
                  <td>{fav.lastPrice}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      ) : (
        <Container style={{ marginTop: "20px", textAlign: "center" }}>
          <h1>FAVORİ ÜRÜN YOK</h1>
        </Container>
      )}
    </div>
  );
};

export default Favorites;
