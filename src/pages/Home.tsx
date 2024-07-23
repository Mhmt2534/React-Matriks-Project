import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Coin } from "../models/Coin";
import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [favoritesCoin, setFavoritesCoin] = useState<Coin[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.binance.com/api/v3/ticker/24hr")
        .then((response) => {
          const sortedData = response.data.sort(
            (a: Coin, b: Coin) => parseFloat(b.volume) - parseFloat(a.volume)
          );

          const FiveVolumeData = sortedData.slice(0, 10);

          setCoins(FiveVolumeData);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const savedFavorites: any = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavoritesCoin(JSON.parse(savedFavorites));
    }
    console.log(savedFavorites);
  }, []);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesCoin));
  }, [favoritesCoin]);

  const handleFavorite = (item: any) => {
    if (favoritesCoin.some((fav) => fav.symbol === item.symbol)) {
      setFavoritesCoin(
        favoritesCoin.filter((fav) => fav.symbol !== item.symbol)
      );
    } else {
      setFavoritesCoin([...favoritesCoin, item]);
    }
  };

  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Volume</th>
              <th>Detail</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.symbol} onClick={() => {}}>
                <td>{coin.symbol}</td>
                <td>{coin.volume}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() =>
                      navigate(`/home/cryptodetail/${coin.symbol}`)
                    }
                  >
                    Detail
                  </Button>
                </td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => handleFavorite(coin)}
                  >
                    {favoritesCoin.some((fav) => fav.symbol === coin.symbol)
                      ? "Remove from Favorites"
                      : "Add to Favorites"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Home;
