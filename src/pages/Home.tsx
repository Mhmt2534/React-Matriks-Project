import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Coin } from "../models/Coin";
import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

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

  const authContext = useContext(AuthContext);

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
              <tr
                key={coin.symbol}
                onClick={() => {
                  console.log(coin.symbol);
                }}
              >
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
                    onClick={() =>
                      navigate(`/home/cryptodetail/${coin.symbol}`)
                    }
                  >
                    Add to favorites
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
